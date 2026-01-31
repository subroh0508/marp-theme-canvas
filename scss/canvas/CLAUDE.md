# canvas

canvasテーマのベースとなるスタイル定義

## ディレクトリ構成

- token/ - デザイントークン（CSS変数）
- element/ - HTML要素のスタイル
- component/ - 複合コンポーネント
- pattern/ - ページレイアウトパターン

## カラーパレットについて

カラーパレットはユーザー定義必須。以下の変数を使用時に定義すること:

| 変数名 | 用途 |
|--------|------|
| `--color-primary` | プライマリカラー（h2テキスト等） |
| `--color-accent` | アクセントカラー（mark背景等） |
| `--color-text` | 本文テキスト色 |
| `--color-background` | スライド背景色 |
| `--color-link` | リンク色 |

## section要素のスタイル制限

許可されるプロパティ:
- width / height
- padding
- background-color / color
- font-family / font-size / line-height
- display / flex-direction
- box-sizing / overflow
