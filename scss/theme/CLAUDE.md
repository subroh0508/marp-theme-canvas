# theme

テーマモジュール（@useで取り込み可能なwhite-canvas、black-canvas）

## 提供されるmixin

| mixin | 説明 |
|-------|------|
| `apply()` | CSS変数とスタイルを一括適用。`@content` でCSS変数を追加・上書き可能 |
| `variables()` | CSS変数のみを出力。`@content` でCSS変数を追加・上書き可能 |
| `styles()` | スタイルのみを出力（CSS変数は含まない） |

## 使用例

```scss
/*!
 * @theme my-custom-theme
 */

@use '@subroh0508/marp-theme-canvas/scss/white-canvas' as white-canvas;

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap');

@include white-canvas.apply() {
  --color-primary: #e11d48;
  --color-accent: #fde047;
}
```

## ファイル構成

| ファイル | 説明 |
|----------|------|
| `_white-canvas.scss` | ライトテーマモジュール |
| `_black-canvas.scss` | ダークテーマモジュール |
| `_index.scss` | モジュールエントリポイント |
