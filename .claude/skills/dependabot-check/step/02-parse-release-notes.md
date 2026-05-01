# Step 02: リリースノート抽出と要約

## 目的

PR body からリリースノート / changelog セクションを抽出し、影響評価に使う要点を整理する。

## 抽出方法

PR body には dependabot が以下のような構造で release notes を埋め込む:

```html
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="...">...</a>.</em></p>
<blockquote>
<h2>v4.3.1</h2>
<h3>Fixed</h3>
<ul>
<li>...</li>
</ul>
<h2>v4.3.0</h2>
...
</blockquote>
</details>
<details>
<summary>Changelog</summary>
...
</details>
<details>
<summary>Commits</summary>
...
</details>
```

`PR_BODY` から `<details>` ブロックを順に取り出し、まず Release notes、なければ Changelog を採用。

## 抽出する内容

- **対象バージョン**: タイトルの `from X to Y` から from / to を取得
- **中間バージョン**: from と to の間に含まれるすべてのバージョンの notes (例: 1.97.3 → 1.99.0 なら 1.98.0 と 1.99.0 両方)
- 各バージョンごとに以下を分類:
  - `Added` / `New features` / `Changed` (機能変更)
  - `Fixed` / `Bug fixes` (バグ修正)
  - `Deprecated` / `Removed` / `Breaking` (**最優先で抽出**)
  - `Performance` / `Security` (情報程度)

## 要約の書き方

最終的に PR コメントに貼るので、日本語の bullet で 3-7 件にまとめる:

- 破壊的変更・非推奨化・削除を **必ず先頭** に置く
- 機能追加 / 主要修正をその後ろに
- 関連 PR 番号や issue 番号は省略可
- 各 bullet は 1-2 行に抑える

要約結果は `RELEASE_NOTES_SUMMARY` 変数として保持し、step 05 のテンプレに埋め込む。

## リリースノートが取得できない場合

- PR body に `<details>` ブロックがない
- 上流リポジトリが GitHub Releases を持たない
- ネットワークエラー等

このケースでは:

```bash
gh release view <to-version> --repo <owner>/<repo>
```

をフォールバックとして試す (リポジトリ名は `package.json` の `repository.url` または PR タイトルから推定)。それでも取れない場合は `RELEASE_NOTES_SUMMARY = "(リリースノート取得不可)"` としつつ、結論を `UNVERIFIABLE` に倒す。

## 注意

- 「内容が大量で要約しきれない」と感じても、**省略するのは詳細な commit ログまで**。breaking change と deprecation は絶対に省略しない。
- バージョン跨ぎで複数の breaking change が累積している場合、すべて列挙する。
