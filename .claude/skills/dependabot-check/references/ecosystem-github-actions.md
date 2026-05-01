# Ecosystem: github-actions

## 検証戦略

GitHub Actions はホストランナーで実行されるためローカルで動作確認できない。**静的調査のみ** で判断し、メジャー更新で破壊的変更が疑われる場合は `UNVERIFIABLE` として人間判断を仰ぐ。

## リリースノート取得

PR body の release notes に加え、`gh release view` で公式リリースを確認:

```bash
# action の owner/repo を特定 (例: actions/deploy-pages)
ACTION_REPO="<owner>/<repo>"
TO_VERSION="<vX.Y.Z or vX>"
gh release view "$TO_VERSION" --repo "$ACTION_REPO" --json name,body,tagName
```

`v4` のような major tag の場合、tag が指す最新 semver を取得:

```bash
gh api "repos/${ACTION_REPO}/git/matching-refs/tags/${TO_VERSION}." --jq '.[-1].ref'
```

## ワークフロー使用箇所の特定

```bash
grep -rn "uses: ${ACTION_REPO}" .github/workflows/
```

各使用箇所について以下を抜き出す:

- ファイルパスと行番号
- `with:` ブロックのパラメータ全部
- 周辺の `run:` ステップ (action の出力を使っている場合がある)

## 互換性チェックリスト

リリースノートに以下のキーワードが現れたら **逐一 grep で該当パラメータを照合**:

| キーワード | チェック対象 |
|---|---|
| `Removed input` / `Deprecated input` | `with:` ブロックのキー名 |
| `Changed default` | デフォルト前提のステップ |
| `Node 20 -> Node 24` 等のランタイム変更 | self-hosted runner、過去の Node 依存ステップ |
| `Required permission` | `permissions:` ブロック |
| `Output renamed` | `${{ steps.X.outputs.Y }}` の参照 |

```bash
# 例: with: で渡しているキーを列挙
awk '/uses: actions\/deploy-pages/,/^\s*[a-z-]+:\s*$/' .github/workflows/*.yml \
  | grep -E '^\s*[a-z-]+:' | sort -u
```

## 結論

| 状況 | 結論 |
|---|---|
| マイナー / patch アップ + 互換性キーワード該当なし | `NO_IMPACT` (ただしランタイム検証不可と注記) |
| メジャーアップ + breaking change 列挙あり、該当 input/output を使っている | `IMPACT_FOUND` (修正提案: 削除・置換) |
| メジャーアップ + breaking change ありだが当リポでは未使用 | `NO_IMPACT` (使っていない breaking を一覧で示す) |
| 静的に確信が持てない (例: action 内部挙動の変更) | `UNVERIFIABLE` |

## 注意点 (コメントに必ず記載)

> GitHub Actions はローカル実行できないため静的調査のみで判定しています。CI 上での実挙動は merge 後の workflow 実行で確認してください。

## SHA pinning ポリシーとの整合

このリポは Actions を SHA pin している (`uses: actions/X@<sha> # vX.Y.Z`)。dependabot は SHA とコメントの両方を更新するため、PR の diff が SHA + comment になっていることを確認。
コメントだけが更新されていない、SHA だけ変わっている等の異常は警告する。

## VERIFICATION_SUMMARY 例

> actions/deploy-pages v4.0.5 → v5.0.0 のリリースノートを確認、`with:` パラメータと breaking change を照合 → 当リポは default 設定のみ使用しており該当箇所なし。ただし CI 上の実挙動はマージ後に確認推奨。
