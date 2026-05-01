# Step 04: ローカル影響検証

## 目的

PR 対象パッケージを実際にインストール・実行し、機能・スタイル面の差分を検出する。

## 共通骨格

ecosystem に応じて `references/ecosystem-*.md` を Read してから以下のフローを実行する。

### 1. baseline 採取 (main 上で)

```bash
git checkout main
pnpm install --frozen-lockfile
# ecosystem ごとに baseline を取る (詳細は references/ecosystem-*.md)
```

### 2. PR ブランチへ切り替え

```bash
gh pr checkout <PR_NUMBER>
pnpm install --no-frozen-lockfile  # PR の lockfile に合わせる
```

### 3. PR 適用後ビルド/レンダリング

ecosystem ごとの手順 (references 参照)。

### 4. baseline と比較

`diff` / exit code / stderr で差分検出。

### 5. **必ず main へ復帰**

```bash
git switch -
git restore --source=origin/main --staged --worktree pnpm-lock.yaml package.json
pnpm install --frozen-lockfile
```

`git status --porcelain | grep -v '^??'` が空であることを確認。空でなければユーザーに報告して中断。

## ecosystem 別ルーティング

| `PR_ECOSYSTEM` | 参照ファイル |
|---|---|
| npm かつ `<pkg> == sass` | `references/ecosystem-sass.md` |
| npm かつ `<pkg> == @marp-team/marp-cli` | `references/ecosystem-marp-cli.md` |
| npm かつ `<pkg> == vitepress` | `references/ecosystem-vitepress.md` |
| npm その他 | `references/ecosystem-vitepress.md` (汎用 docs ビルドで代替) |
| github-actions | `references/ecosystem-github-actions.md` |

## 結論判定

検証結果から以下のいずれかに分類し `IMPACT_CONCLUSION` 変数に保持:

- **`NO_IMPACT`**: baseline と完全一致 (CSS diff なし、レンダリングも success、exit 0)
- **`IMPACT_FOUND`**: baseline と差分あり (CSS diff、エラーログ、Step 03 でヒットした deprecation 該当箇所等)
- **`UNVERIFIABLE`**: ローカルで検証しきれない要素がある (GHA の major bump、レイアウトの視覚回帰の可能性、リリースノート不明)

## 出力

`VERIFICATION_STEPS`: 実行したコマンドの列 (markdown bullet)
`VERIFICATION_OUTPUT`: 重要な stdout/stderr 抜粋 (50 行以内)
`IMPACT_LOCATIONS`: `IMPACT_FOUND` の場合に具体的な影響箇所のリスト
`FIX_SUGGESTIONS`: `IMPACT_FOUND` の場合の修正提案

これらは step 05 のテンプレ埋め込みに使う。
