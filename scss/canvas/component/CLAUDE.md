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

## 既存コンポーネント

| ファイル | セレクタ | 用途 |
|---------|---------|------|
| `_header.scss` | `header` | ヘッダー |
| `_footer.scss` | `footer` | フッター |

## 想定コンポーネント

| ファイル | クラス名 | 用途 |
|---------|---------|------|
| `_figure.scss` | `.figure` | 画像とキャプションの組み合わせ |
| `_columns.scss` | `.columns` | 複数カラムレイアウト |
| `_pagination.scss` | `section::after` | ページ番号 |
