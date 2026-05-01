# Step 03: リポ内の使用箇所探索

## 目的

PR 対象パッケージがリポジトリのどこで使われているかを特定し、Step 02 の deprecation / breaking change が実際に該当するかを判定する。

## エコシステム別の出発点

### npm

```bash
# devDependencies に書かれているか
jq -r '.devDependencies, .dependencies | to_entries[] | select(.key=="<pkg>") | "\(.key)@\(.value)"' package.json

# pnpm-lock.yaml の依存ツリー (transitive 経由のみのケース)
grep -nF '<pkg>' pnpm-lock.yaml | head
```

直接利用パッケージは scripts 内のコマンドから判別:

| パッケージ | 主要用途 (このリポ固有) |
|---|---|
| `sass` | `pnpm build` で `scss/*.scss` → `css/*.css` を生成 |
| `@marp-team/marp-cli` | `pnpm serve:*`, `build:html:*`, `build:png:*` |
| `vitepress` | `pnpm docs:dev`, `docs:build`, `docs:preview` |

### github-actions

```bash
grep -rn "uses: <action>@" .github/workflows/
```

例: `actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd # v6.0.2`

該当行から `with:` ブロックを読み取り、入力パラメータも記録する。

## Deprecation 該当箇所のスキャン

Step 02 で抽出した breaking change / deprecation キーワードで grep する。代表的なパターン:

### sass

```bash
grep -rn -E "@function (calc|clamp|EXPRESSION|URL|ELEMENT)\b" scss/
grep -rn -E "@function -[a-z-]+(expression|url|and|or|not|ELEMENT|progid)" scss/
# 1.99.0 で導入された breaking が使えそうな構文
grep -rnE "^&" scss/ | head   # ルート位置の親セレクタ (新機能なので既存コードへの影響はないが念のため)
```

### marp-cli

主に CLI フラグの非推奨化に注意:

```bash
grep -rnE "marp .*(--output|--input-dir|--theme)" package.json
```

### vitepress

`docs/.vitepress/config.{ts,js,mts}` を Read し、breaking change 対象 API (例: `defineConfig`, `themeConfig.sidebar` の構造) を grep。

### github-actions

`with:` パラメータと breaking change のリストを比較:

```bash
grep -rnE "^\s*(with:|[a-z-]+:)" .github/workflows/
```

## 出力

`USAGE_LOCATIONS` 変数に以下のリストを保持し、後続ステップに渡す:

```
- <file>:<line> — <文脈の1行抜粋>
- ...
```

ヒットがなければ `USAGE_LOCATIONS = "(deprecation 該当箇所なし)"` として、機能利用箇所のみを記録する。
