# Marp Theme Canvas

シンプル・ミニマルなMarpテーマ

## プロジェクト構成

```
scss/
├── theme/              # テーマモジュール（@useで取り込み可能）
│   ├── _white-canvas.scss
│   └── _black-canvas.scss
├── page/               # ページスタイル（title、section、toc、agenda、display）
├── component/          # 共通コンポーネント（heading、table、code、blockquote等）
├── white-canvas.scss   # ライトテーマ出力ファイル
└── black-canvas.scss   # ダークテーマ出力ファイル
```

## 共通命名規約

- ファイル名: `_名前.scss`（アンダースコアプレフィックス必須、Sassパーシャル）
- 名前: kebab-case（例: `title`, `text-decorator`）

## @mixin configure() 規約

全てのスタイルファイルは `@mixin configure()` でカプセル化する。

### 引数の設計

- **必須引数**: デフォルト値なし、リストの先頭に配置
- **任意引数**: デフォルト値あり、リストの後方に配置
- **命名**: セマンティックな名前を使用

### 引数の命名パターン

| 接頭辞 | 用途 | 例 |
|--------|------|-----|
| `$font-size-*` | フォントサイズ | `$font-size-title`, `$font-size-body` |
| `$font-weight-*` | フォントウェイト | `$font-weight-bold`, `$font-weight-normal` |
| `$font-family` | フォントファミリー | `$font-family`, `$font-mono` |
| `$color-*` | 色 | `$color-text`, `$color-bg`, `$color-border` |
| `$line-height-*` | 行間 | `$line-height-heading`, `$line-height-body` |
| `$margin-*` | マージン | `$margin-x`, `$margin-y` |
| `$padding-*` | パディング | `$padding-x`, `$padding-y` |
| `$border-radius` | 角丸 | `$border-radius` |

## 実装上のルール

- **CSS変数の宣言・参照はテーマファイルのみ**: `var(--*)` の宣言および参照は以下のファイルでのみ許可
  - `scss/` 直下のテーマ出力ファイル（`white-canvas.scss`、`black-canvas.scss`）
  - `scss/theme/` 配下のテーマモジュール（`_white-canvas.scss`、`_black-canvas.scss`）
  - 理由: Marp用Markdownファイルのフロントマターでインラインスタイルとして変数を上書きし、スライドごとにスタイルを柔軟にカスタマイズできるようにするため
  - 例: Markdownファイルで `--color-primary` を上書き
    ```markdown
    ---
    theme: white-canvas
    style: |
      :root {
        --color-primary: #3b91c4;
        --color-accent: #ead7a4;
      }
    ---
    ```
- **page/ component/ 配下では禁止**: サブディレクトリ内のスタイルファイルでは CSS変数を直接参照しない。必要な値は全て `@mixin configure()` の引数として受け取る
  - 理由: テーマとスタイルの疎結合を保つため
  - テーマ側で `@include` 時に CSS変数を引数として渡す

## コメント規約

- **テーマ出力ファイル**（`white-canvas.scss`、`black-canvas.scss`）: 先頭のコメントは `/*!` で始める（Marpメタデータ `@theme`、`@size` 等を含むため、CSSに出力される必要がある）
- **その他のファイル**（`_index.scss`、`theme/`、`page/`、`component/` 配下）: `//` コメントを使用（CSSに出力されない）
