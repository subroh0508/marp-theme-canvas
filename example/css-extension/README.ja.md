# CSS拡張の例

[marp-theme-canvas](https://github.com/subroh0508/marp-theme-canvas) のCSS変数を上書きしてカスタムMarpテーマを作成する例です。ビルド不要で利用できます。

## プレビュー

```bash
pnpm install
pnpm preview
```

ブラウザでライブプレビューを開きます。

## 仕組み

`theme/warm.css` でベーステーマを `@import` でインポートし、CSS変数を上書きしています:

```css
@import "white-canvas";

:root {
  --color-primary: #c2410c;
  --color-accent: #d4a574;
}
```
