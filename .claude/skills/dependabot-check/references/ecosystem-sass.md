# Ecosystem: sass

## 検証戦略

`pnpm build` で生成される `css/*.css` が baseline と完全一致するかを確認する。一致 = `NO_IMPACT`、差分あり = `IMPACT_FOUND`。

## baseline 採取 (main 上で)

```bash
git checkout main
pnpm install --frozen-lockfile
pnpm build
mkdir -p /tmp/css-baseline
cp -r css/* /tmp/css-baseline/
```

`pnpm exec sass --version` を控えておく (例: `1.97.3 compiled with dart2js 3.10.7`)。

## PR 適用後

```bash
gh pr checkout <PR_NUMBER>
pnpm install --no-frozen-lockfile
pnpm exec sass --version  # 上がっていることを確認
pnpm build
```

## 比較

```bash
diff -r /tmp/css-baseline/ css/
```

- 出力空 → `NO_IMPACT`
- 差分あり → 内容確認:
  - SCSS ソース自体が PR で変わっていれば dependabot 範囲外 (PR ファイルに `scss/` が含まれていないか確認)
  - 変わっていないのに差分が出るなら sass 由来の出力差 → `IMPACT_FOUND`
  - 報告: 該当ファイルと差分行 (5 行抜粋程度)

## SCSS ソースの sass deprecation スキャン

Step 03 ですでに以下を実行済みのはず:

```bash
grep -rn -E "@function (calc|clamp|EXPRESSION|URL|ELEMENT)\b" scss/
grep -rn -E "@function -[a-z-]+(expression|url|and|or|not|ELEMENT|progid)" scss/
```

ヒットがあれば `IMPACT_FOUND` 確定。修正提案として「該当の `@function` 名を rename する」を提案する。

## 結論

| 状況 | 結論 |
|---|---|
| diff 差分なし、deprecation grep もヒットなし | `NO_IMPACT` |
| diff 差分あり、または deprecation grep ヒットあり | `IMPACT_FOUND` |
| ビルドエラー | `IMPACT_FOUND` (`FIX_SUGGESTIONS` にエラー内容を記載) |

## VERIFICATION_SUMMARY 例

> sass 1.97.3 → 1.99.0 で `pnpm build` 後の `css/` を `diff -r` 比較 → 完全一致
