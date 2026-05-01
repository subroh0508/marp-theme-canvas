---
name: dependabot-check
description: Dependabot PRの影響調査を完全自動化する。npm（sass / @marp-team/marp-cli / vitepress 他）と github-actions の両方のエコシステムで、リリースノート要約・該当コードの特定・ローカル検証（CSSビルドdiff、Marpレンダリング、docs:build）・PRへの構造化コメント投稿・無影響時の自動Approveまでを一気通貫で実行する。「dependabot」「依存関係更新」「PR影響調査」「マイナー/メジャー更新の影響を確認して」「このdependabot通していい？」と言われたら必ず使う。マージは絶対に行わない。
allowed-tools: Bash, Read, Glob, Grep, AskUserQuestion
---

# dependabot-check

Dependabot PR の影響を機能・スタイル両面から調査し、結果を必ず PR にコメントとして残す。影響なしと判定したものは Approve まで自動で行う。**マージはこのスキルでは行わない (人間判断)。**

## 入力パターン

| 引数 | 動作 |
|---|---|
| なし | open な dependabot PR を一覧して `AskUserQuestion` で対象を確認 |
| `<PR番号>` (整数) | 単一 PR を処理 |
| `--all` | open な dependabot PR を全件、上から順次処理 |

## 前提条件

実行前に必ずチェック (失敗したら中断してユーザーに報告):

- `git status` がクリーン (untracked のみ可) — `git status --porcelain | grep -v '^??' | head -1` が空
- `gh auth status` が成功する
- main がリモートと一致 (`git fetch && git status -uno` で `behind/ahead` なし)

これを満たさない場合は本スキルを実行しない。

## ステップ

順番に各ファイルを Read して指示通り実行する:

1. `.claude/skills/dependabot-check/step/01-discover-prs.md`
2. `.claude/skills/dependabot-check/step/02-parse-release-notes.md`
3. `.claude/skills/dependabot-check/step/03-locate-usage.md`
4. `.claude/skills/dependabot-check/step/04-run-impact-check.md`
5. `.claude/skills/dependabot-check/step/05-post-comment.md`
6. `.claude/skills/dependabot-check/step/06-decide-approve.md`

各 PR の処理は 01 → 06 の順に **必ず最後まで通す**。途中で結論が出ても 05 のコメント投稿はスキップしない。

## 失敗時の挙動

| ケース | 対応 |
|---|---|
| `mergeable=CONFLICTING` | 04 をスキップし `templates/comment-conflict.md` を投稿して当該 PR は終了 (`@dependabot rebase` を期待) |
| ローカルビルドが PR と無関係に失敗 | コメント投稿せず中断、ユーザーに報告 |
| `gh pr review --approve` が失敗 (self-approve ブロック等) | `templates/approve-message.md` の内容をコメントとして投稿し、ユーザーに手動 Approve を依頼 |
| リリースノートが PR body から抽出できない | `templates/report-unverifiable.md` を使用、Approve せず終了 |

## 絶対禁止事項

- `gh pr merge` の呼び出し
- `git push --force` / `--force-with-lease`
- `git commit --no-verify`
- 既存の依存関係を勝手にアップグレードする (PR の対象パッケージのみ install する)
- 04 のローカル検証で生じた `pnpm-lock.yaml` 等の変更を main にコミットする (検証後は必ず復帰)

## 復帰処理 (`finally` 相当)

各 PR の処理後、必ず以下を実行して main の状態に戻す:

```bash
git switch -
git restore --source=origin/main --staged --worktree pnpm-lock.yaml package.json
pnpm install --frozen-lockfile
```

`git status --porcelain | grep -v '^??'` が空であることを確認してから次の PR に進む。
