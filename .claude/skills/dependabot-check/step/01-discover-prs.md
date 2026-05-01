# Step 01: 対象 PR の特定

## 目的

処理対象の dependabot PR を確定し、各 PR のメタデータ (mergeable, body 等) を取得する。

## 入力に応じた分岐

### 引数なし

```bash
gh pr list --author "app/dependabot" --state open --json number,title,headRefName,mergeable,mergeStateStatus
```

結果が空なら「open な dependabot PR はありません」と報告して終了。

複数件あれば `AskUserQuestion` でユーザーに対象を選択してもらう (複数選択可)。

### `<PR番号>` 指定

そのまま単一 PR として処理。

### `--all`

`gh pr list --author "app/dependabot" --state open --json number` の全件をループで処理。10 件以上ある場合は `AskUserQuestion` で進めるか確認。

## 各 PR ごとに取得するメタデータ

```bash
gh pr view <N> --json number,title,body,headRefName,headRefOid,mergeable,mergeStateStatus,files
```

以下を変数として保持し、後続ステップに渡す:

- `PR_NUMBER`: PR 番号
- `PR_TITLE`: タイトル (例: `build(deps-dev): Bump sass from 1.97.3 to 1.99.0`)
- `PR_BODY`: PR 本文 (リリースノート抽出用)
- `PR_HEAD_REF`: ブランチ名
- `PR_MERGEABLE`: `MERGEABLE` / `CONFLICTING` / `UNKNOWN`
- `PR_FILES`: 変更ファイル一覧 (npm の lockfile のみ vs workflow ファイルも変わっているか等の判別に使用)

## コンフリクト早期終了

`PR_MERGEABLE == "CONFLICTING"` のとき:

1. `templates/comment-conflict.md` を Read
2. そのまま `gh pr comment <N> --body "..."` で投稿
3. 当該 PR を終了 (後続ステップ 02-06 はスキップ)
4. 次の PR があればそれへ進む

## エコシステム判別

タイトル先頭の prefix で判別:

- `build(deps-dev)` または `build(deps)` で `pnpm-lock.yaml` のみ変更 → **npm**
- `build(deps)` で `.github/workflows/` 配下が変更 → **github-actions**

判別不能な場合は `PR_FILES` の中身で再判定:

- `pnpm-lock.yaml` を含む → npm
- `.github/workflows/*.yml` を含む → github-actions
- 両方含む → 警告して両方の検証を行う

`PR_ECOSYSTEM` 変数として保持。
