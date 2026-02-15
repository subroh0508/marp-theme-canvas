# SCSS拡張の例

[marp-theme-canvas](https://github.com/subroh0508/marp-theme-canvas) をSCSSで拡張してカスタムMarpテーマを作成する例です。

## プレビュー

```bash
pnpm install
pnpm preview
```

SCSSテーマをコンパイルし、ブラウザでライブプレビューを開きます。

## 仕組み

1. `@use 'pkg:@subroh0508/marp-theme-canvas/white-canvas.scss'` でベーステーマをインポート
2. カスタムスタイルをパーシャル（component、decorator、slide-pattern）に分割し、`@use` でインポート
3. `:root {}` でCSS変数（色、フォント、レイアウト）を上書き
4. `sass --pkg-importer=node` でビルドし、Marp CLIでは `--theme` のみでプレビュー — ベーステーマは出力CSSにコンパイル済み

詳細なガイドは [SCSS Extension ドキュメント](https://subroh0508.github.io/marp-theme-canvas/extension/scss) を参照してください。
