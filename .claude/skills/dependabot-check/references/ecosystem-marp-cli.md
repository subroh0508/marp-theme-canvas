# Ecosystem: @marp-team/marp-cli

## 検証戦略

CSS ビルドは `sass` を直接呼ぶので marp-cli の影響は受けない。確認すべきは **demo ファイルの HTML レンダリング** と、サブ依存 (Marpit / Marp Core) の重要変更。

## baseline 採取 (main 上で)

```bash
git checkout main
pnpm install --frozen-lockfile
pnpm exec marp --version  # 例: @marp-team/marp-cli v4.2.3 (w/ @marp-team/marp-core v4.1.x)
pnpm build  # CSS を生成しておく
mkdir -p /tmp/marp-baseline
pnpm exec marp --allow-local-files --html --theme css/white-canvas.css demo/index.md -o /tmp/marp-baseline/index.html 2> /tmp/marp-baseline/index.stderr
pnpm exec marp --allow-local-files --html --theme css/white-canvas.css --input-dir demo/slide-pattern --output /tmp/marp-baseline/slide-pattern 2> /tmp/marp-baseline/slide-pattern.stderr
```

baseline の exit code と stderr を確認 (PR の影響と切り分けるため)。

## PR 適用後

```bash
gh pr checkout <PR_NUMBER>
pnpm install --no-frozen-lockfile
pnpm exec marp --version  # 上がっていることを確認
pnpm build  # SCSS は同じはずだが念のため再生成
mkdir -p /tmp/marp-after
pnpm exec marp --allow-local-files --html --theme css/white-canvas.css demo/index.md -o /tmp/marp-after/index.html 2> /tmp/marp-after/index.stderr
pnpm exec marp --allow-local-files --html --theme css/white-canvas.css --input-dir demo/slide-pattern --output /tmp/marp-after/slide-pattern 2> /tmp/marp-after/slide-pattern.stderr
```

## 比較

| チェック項目 | 期待値 |
|---|---|
| 全コマンドの exit code | 0 |
| stderr に `Error\|FATAL` を含まない | true |
| 出力ファイル数 | baseline と同じ |

```bash
grep -E "Error|FATAL" /tmp/marp-after/*.stderr || echo "no errors"
diff <(ls /tmp/marp-baseline/slide-pattern) <(ls /tmp/marp-after/slide-pattern)
```

HTML 内容の diff は通常意味のある差分にならないので **取らない**。 (CSS 参照や生成 ID が変わるため)

## サブ依存の確認

Marp Core / Marpit のメジャー更新が含まれている場合、リリースノート内容に応じて以下を追加チェック:

- ビルトインテーマの差し替え → 当リポはカスタムテーマなので影響なし
- 新しい directive の追加 → 影響なし (利用していない)
- パーサーの破壊的変更 → demo の Markdown を読んでパース可能か (HTML 出力が空でなければ OK)

## 結論

| 状況 | 結論 |
|---|---|
| 全コマンド exit 0、エラーなし | `NO_IMPACT` (ただし視覚回帰は手動目視推奨と注記) |
| いずれかでエラー / exit non-zero | `IMPACT_FOUND` |
| メジャーバージョン更新で視覚回帰の可能性が消せない | `UNVERIFIABLE` |

## 注意点 (コメントに必ず記載)

> 静的検査ではレイアウト崩れや細部のスタイル差は検知できません。視覚的な回帰は手動目視を推奨します。

## VERIFICATION_SUMMARY 例

> marp-cli 4.2.3 → 4.3.1 で `demo/index.md` と `demo/slide-pattern/*.md` を HTML レンダリング → 全 6 ファイル exit 0、エラーなし
