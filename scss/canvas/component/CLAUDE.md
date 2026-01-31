# component

複数のelementの組み合わせや、汎用性の高いクラスを管理

## 定義方法

- scssの@mixinとして定義
- 変数は全てmixinの引数で定義
- 引数名はセマンティックにする

## ファイル構造テンプレート

```scss
// ===== _filename.scss =====
// コンポーネントの説明

@mixin configure($arg1, $arg2, $arg3: default) {
  :root {
    --component-arg1: #{$arg1};
    --component-arg2: #{$arg2};
    --component-arg3: #{$arg3};
  }

  .classname {
    property: var(--component-arg1);
  }
}
```

## CSS変数の命名規則

CSS変数名: `--{コンポーネント名}-{引数名}`

特別なプレフィックスルール:
- `_section.scss`: padding関連は `--slide-*`、color/font/line-height関連は `--base-*`
- `_columns.scss`: `--cols-*`

例:
- `_pagination.scss`の`$margin-x` → `--pagination-margin-x`
- `_header.scss`の`$font-size` → `--header-font-size`
- `_section.scss`の`$padding-x` → `--slide-padding-x`
- `_section.scss`の`$color-bg` → `--base-color-bg`

## 既存コンポーネント

| ファイル | セレクタ | 用途 |
|---------|---------|------|
| `_section.scss` | `section` | スライド本体（width/height/padding/色/フォント） |
| `_header.scss` | `header` | ヘッダー |
| `_footer.scss` | `footer` | フッター |
| `_pagination.scss` | `section::after` | ページ番号 |
| `_columns.scss` | `.cols`, `.col`, `.col-N` | 複数カラムレイアウト |

## 想定コンポーネント

| ファイル | クラス名 | 用途 |
|---------|---------|------|
| `_figure.scss` | `.figure` | 画像とキャプションの組み合わせ |
