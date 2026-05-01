# Step 06: Approve 判定と実行

## 判定ルール

| `IMPACT_CONCLUSION` | アクション |
|---|---|
| `NO_IMPACT` | Approve する |
| `IMPACT_FOUND` | Approve しない (step 05 で修正提案コメント済み) |
| `UNVERIFIABLE` | Approve しない (step 05 で未検証項目コメント済み) |

## Approve 実行

```bash
APPROVE_BODY=$(cat .claude/skills/dependabot-check/templates/approve-message.md)
# <verification-summary> プレースホルダを step 04 のサマリで置換
APPROVE_BODY=${APPROVE_BODY//<verification-summary>/$VERIFICATION_SUMMARY}

gh pr review <PR_NUMBER> --approve --body "$APPROVE_BODY"
```

## fallback (self-approve がブロックされる場合)

`gh pr review --approve` が exit non-zero (個人リポで自分が PR 作成者を兼ねる、Approve 権限なし等) の場合:

```bash
gh pr comment <PR_NUMBER> --body "$APPROVE_BODY"
```

として **コメント代替で LGTM を伝え**、ユーザーに以下の文面で報告:

> Approve 投稿が拒否されたためコメントとして LGTM を投稿しました。`gh pr review <番号> --approve` を手動で実行するか、GitHub Web UI で Approve をつけてください。

## 絶対禁止

このステップで以下を **絶対に呼ばない**:

- `gh pr merge` (どんな状態でも)
- `gh pr close`
- `gh pr edit` でラベル付与等

## 完了報告

PR ごとに以下のサマリを最終的にユーザーへテキストで返す:

```
PR #<N> (<package> <from> → <to>): <結論> — コメント投稿: ✓ / Approve: ✓ or ✗(理由)
```

`--all` で複数件処理した場合は表形式でまとめる。
