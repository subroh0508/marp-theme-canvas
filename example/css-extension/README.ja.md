# CSS拡張の例

[marp-theme-canvas](https://github.com/subroh0508/marp-theme-canvas) のCSS変数を上書きしてカスタムMarpテーマを作成する例です。ビルド不要で利用できます。

## プレビュー

```bash
pnpm install
pnpm preview
```

ブラウザでライブプレビューを開きます。

## 仕組み

1. `@import "white-canvas"` でベーステーマをインポート
2. `:root {}` でCSS変数（色、フォント、レイアウト）を上書き
3. カスタムスタイル（見出し下線、ページネーション、デコレータ、スライドパターン）を追加
4. Marp CLIで `--theme-set`（ベースCSS）+ `--theme`（カスタムCSS）を指定してプレビュー — ビルド不要

詳細なガイドは [CSS Extension ドキュメント](https://subroh0508.github.io/marp-theme-canvas/extension/css) を参照してください。
