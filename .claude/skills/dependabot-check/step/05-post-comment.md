# Step 05: PR コメント投稿

## 目的

調査結果を必ず PR にコメントとして残す。**この投稿は絶対にスキップしない。**

## テンプレ選択

`IMPACT_CONCLUSION` の値で読み込むテンプレを切り替える:

| 結論 | テンプレ |
|---|---|
| `NO_IMPACT` | `templates/report-no-impact.md` |
| `IMPACT_FOUND` | `templates/report-impact-found.md` |
| `UNVERIFIABLE` | `templates/report-unverifiable.md` |

step 01 で早期終了したコンフリクトケースは別途 `templates/comment-conflict.md` を使用する (このケースは step 02-04 をスキップしているのでここには来ない想定)。

## プレースホルダ置換

各テンプレ内の `<placeholder>` を以下の値で置換:

| プレースホルダ | 値 (どのステップから取るか) |
|---|---|
| `<package>` | step 01 (PR タイトルから抽出) |
| `<from>` | step 01 |
| `<to>` | step 01 |
| `<ecosystem>` | step 01 (`PR_ECOSYSTEM`) |
| `<release-notes-bullets>` | step 02 (`RELEASE_NOTES_SUMMARY`) |
| `<usage-locations>` | step 03 (`USAGE_LOCATIONS`) |
| `<verification-steps>` | step 04 (`VERIFICATION_STEPS`) |
| `<verification-output>` | step 04 (`VERIFICATION_OUTPUT`) |
| `<impact-locations>` | step 04 (`IMPACT_LOCATIONS`、`IMPACT_FOUND` のみ) |
| `<fix-suggestions>` | step 04 (`FIX_SUGGESTIONS`、`IMPACT_FOUND` のみ) |
| `<unverified-items>` | step 04 (`UNVERIFIABLE` のみ、列挙) |
| `<recommended-actions>` | step 04 (`UNVERIFIABLE` のみ、人間に依頼する確認事項) |

## 投稿

ヒアドキュメントで本文を組み立てて投稿:

```bash
gh pr comment <PR_NUMBER> --body "$(cat <<'EOF'
<置換後の本文>
EOF
)"
```

戻り値が non-zero の場合はエラーをユーザーに報告し、後続ステップ 06 もスキップして次の PR へ。

## 投稿後の確認

直近のコメントが自分の投稿で上書きされていないか軽く確認:

```bash
gh pr view <PR_NUMBER> --json comments --jq '.comments[-1].body | .[:200]'
```

冒頭が `## 📦 Dependabot 影響調査レポート` で始まっていれば成功。
