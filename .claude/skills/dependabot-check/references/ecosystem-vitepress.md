# Ecosystem: vitepress (および汎用 npm fallback)

## 検証戦略

`pnpm docs:build` で VitePress のドキュメントが正常にビルドできるかを確認。汎用 npm パッケージで個別の検証手段がない場合も、このフローを fallback として使う (docs ビルドが通れば最低限の breakage は検知できる)。

## baseline 採取 (main 上で)

```bash
git checkout main
pnpm install --frozen-lockfile
mkdir -p /tmp/vitepress-baseline
pnpm docs:build > /tmp/vitepress-baseline/stdout.log 2> /tmp/vitepress-baseline/stderr.log
echo $? > /tmp/vitepress-baseline/exitcode
```

ビルド成果物は通常 `docs/.vitepress/dist` に出る。サイズだけ控える:

```bash
du -sk docs/.vitepress/dist > /tmp/vitepress-baseline/dist.size
```

## PR 適用後

```bash
gh pr checkout <PR_NUMBER>
pnpm install --no-frozen-lockfile
mkdir -p /tmp/vitepress-after
pnpm docs:build > /tmp/vitepress-after/stdout.log 2> /tmp/vitepress-after/stderr.log
echo $? > /tmp/vitepress-after/exitcode
du -sk docs/.vitepress/dist > /tmp/vitepress-after/dist.size
```

## 比較

| チェック項目 | 期待値 |
|---|---|
| exit code | 0 (baseline と一致) |
| stderr に `Error\|FATAL\|UnhandledRejection` がないこと | true |
| dist サイズが極端に変動していないこと | baseline ± 20% 以内 |

```bash
grep -E "Error|FATAL|UnhandledRejection" /tmp/vitepress-after/stderr.log || echo "no errors"
diff /tmp/vitepress-baseline/exitcode /tmp/vitepress-after/exitcode
```

## 設定ファイルの breaking change スキャン

Step 02 で取得したリリースノートに記載がある場合、`docs/.vitepress/config.{ts,mts,js}` を Read して該当 API が使われていないか確認する。例:

- `themeConfig.sidebar` の構造変更
- `defineConfig` の type 変更
- vite version の bundling 切替

## 汎用 npm パッケージへの流用

vitepress 以外の npm パッケージで個別検証手段がない場合:

1. `pnpm install` がエラーなく通ること
2. `pnpm build` (sass build) が通ること
3. `pnpm docs:build` が通ること

すべて通れば `NO_IMPACT` 候補。ただし当該パッケージを直接 import している箇所がある場合は、その実行ファイルを別途確認する必要があるため `UNVERIFIABLE` に倒す。

## 結論

| 状況 | 結論 |
|---|---|
| exit 0、エラーなし、サイズ変動小 | `NO_IMPACT` |
| ビルドエラー or exit non-zero | `IMPACT_FOUND` |
| 設定 API に breaking change の影響可能性が静的に切れない | `UNVERIFIABLE` |

## VERIFICATION_SUMMARY 例

> vitepress 1.6.4 → 1.7.0 で `pnpm docs:build` を実行 → exit 0、エラーなし、dist サイズ変化なし
