# Canvas

日本語 | [English](./README.md)

[![npm version](https://img.shields.io/npm/v/@subroh0508/marp-theme-canvas)](https://www.npmjs.com/package/@subroh0508/marp-theme-canvas)
[![license](https://img.shields.io/npm/l/@subroh0508/marp-theme-canvas)](./LICENSE)

シンプル・ミニマルなMarpテーマ。余計な装飾を廃し、コンテンツに集中できるデザインです。

## デモ

- [White Canvas Demo](https://subroh0508.github.io/marp-theme-canvas/white_canvas_demo.html)
- [Black Canvas Demo](https://subroh0508.github.io/marp-theme-canvas/black_canvas_demo.html)

## 特徴

- **2種類のテーマ**: ライトモード（white-canvas）とダークモード（black-canvas）
- **5種類のページスタイル**: title, section, toc, agenda, display
- **CSS変数によるカスタマイズ**: フロントマターから色やフォントを簡単に変更
- **SCSSモジュール**: 必要なスタイルだけを個別にインポート可能
- **GitHub風シンタックスハイライト**: prettylightsベースのコードハイライト
- **マルチカラムレイアウト**: 2カラム・3カラムレイアウトに対応

## インストール

### npm

```bash
npm install @subroh0508/marp-theme-canvas
```

### CDN / 直接利用

GitHubのraw URLから直接CSSファイルを参照することも可能です:

```
https://raw.githubusercontent.com/subroh0508/marp-theme-canvas/main/css/white-canvas.css
https://raw.githubusercontent.com/subroh0508/marp-theme-canvas/main/css/black-canvas.css
```

## 使い方

### 基本設定

Markdownファイルのフロントマターでテーマを指定します:

```markdown
---
marp: true
theme: white-canvas
paginate: true
style: |
  :root {
    --color-primary: #3b91c4;
    --color-accent: #ead7a4;
  }
---
```

`--color-primary` と `--color-accent` は必須です。プライマリカラーは見出し（h2）に、アクセントカラーはハイライト（`<mark>`）に使用されます。

### テーマの選択

| テーマ名 | 説明 |
|----------|------|
| `white-canvas` | 白背景のライトテーマ |
| `black-canvas` | 黒背景のダークテーマ |

### Marp CLIでのビルド

```bash
marp --theme node_modules/@subroh0508/marp-theme-canvas/css/white-canvas.css slides.md
```

## ページスタイル

`<!-- _class: スタイル名 -->` でページごとにスタイルを切り替えられます。

### title

タイトルページ用のスタイルです。h1がメインタイトル、それ以外のテキストがメタデータ（発表者名・日付など）として表示されます。

```markdown
<!-- _class: title -->

# プレゼンテーションタイトル

発表者名
2026年1月
```

### section

セクション区切り（中扉）用のスタイルです。テキストが画面中央に大きく表示されます。

```markdown
<!-- _class: section -->

セクション1: はじめに
```

### toc

目次ページ用のスタイルです。リストが見やすくスタイリングされます。

```markdown
<!-- _class: toc -->

## 目次

1. はじめに
2. 本題
3. まとめ
```

### agenda

アジェンダ・話すこと一覧用のスタイルです。項目と詳細説明を階層的に表示できます。

```markdown
<!-- _class: agenda -->

## 今日話すこと

- トピック1
  - 詳細説明
- トピック2
  - 詳細説明
```

### display

短い文章や画像を大きく表示するためのスタイルです。

```markdown
<!-- _class: display -->

ここに強調したいメッセージ
```

画像がある場合は文字サイズは大きくならず、画像が中央に配置されます。

## カスタマイズ

フロントマターのstyleでCSS変数を上書きできます。

### 主要なCSS変数

#### 色

| 変数名 | 説明 | white-canvas | black-canvas |
|--------|------|--------------|--------------|
| `--color-primary` | プライマリカラー（h2など） | 必須 | 必須 |
| `--color-accent` | アクセントカラー（mark） | 必須 | 必須 |
| `--color-black` | 黒 | `#000` | `#000` |
| `--color-white` | 白 | `#fff` | `#fff` |
| `--color-grey-lightest` | グレー（最も明るい） | `#cbd5e1` (slate-300) | `#f8fafc` (slate-50) |
| `--color-grey-lighter` | グレー（より明るい） | `#94a3b8` (slate-400) | `#f1f5f9` (slate-100) |
| `--color-grey-light` | グレー（明るい） | `#64748b` (slate-500) | `#e2e8f0` (slate-200) |
| `--color-grey-medium` | グレー（中間） | `#475569` (slate-600) | `#cbd5e1` (slate-300) |
| `--color-grey-dark` | グレー（暗い） | `#334155` (slate-700) | `#1e293b` (slate-800) |
| `--color-grey-darker` | グレー（より暗い） | `#1e293b` (slate-800) | `#0f172a` (slate-900) |
| `--color-grey-darkest` | グレー（最も暗い） | `#0f172a` (slate-900) | `#020617` (slate-950) |
| `--color-link` | リンク色 | `#2563eb` (blue-600) | `#60a5fa` (blue-400) |

#### フォント

| 変数名 | 説明 | デフォルト値 |
|--------|------|--------------|
| `--font-family-base` | 基本フォント | `'Noto Sans JP', sans-serif` |
| `--font-family-mono` | 等幅フォント | `ui-monospace, ...` |
| `--font-size-base` | 基本フォントサイズ | `40px` |

#### サイズ・レイアウト

| 変数名 | 説明 | デフォルト値 |
|--------|------|--------------|
| `--slide-padding-x` | スライド左右余白 | `80px` |
| `--slide-padding-y` | スライド上下余白 | `80px` |
| `--border-radius` | 角丸 | `8px` |
| `--bullet-list-indent` | 箇条書きリスト(ul)インデント | `1.1em` |
| `--numbered-list-indent` | 番号付きリスト(ol)インデント | `1.1em` |
| `--bullet-list-padding-left` | 箇条書きリスト項目(li)の左余白 | `0.2em` |
| `--numbered-list-padding-left` | 番号付きリスト項目(li)の左余白 | `0.2em` |

### カスタマイズ例

```markdown
---
marp: true
theme: white-canvas
style: |
  :root {
    --color-primary: #e11d48;
    --color-accent: #fde047;
    --font-size-base: 36px;
    --slide-padding-x: 60px;
  }
---
```

## SCSSモジュール

Canvasのスタイルはモジュール化されており、独自テーマ作成時に個別にインポートできます。

### モジュール構成

```
scss/
├── theme/              # テーマモジュール
│   ├── _white-canvas.scss  # ライトテーマ（@use可能）
│   └── _black-canvas.scss  # ダークテーマ（@use可能）
├── component/          # 共通コンポーネント
│   ├── _heading.scss   # 見出し
│   ├── _table.scss     # テーブル
│   ├── _code.scss      # コードブロック
│   ├── _blockquote.scss # 引用
│   ├── _columns.scss   # カラムレイアウト
│   └── ...
├── page/               # ページスタイル
│   ├── _title.scss
│   ├── _section.scss
│   ├── _toc.scss
│   ├── _agenda.scss
│   └── _display.scss
├── white-canvas.scss   # ライトテーマ（CSS出力用）
└── black-canvas.scss   # ダークテーマ（CSS出力用）
```

### テーマをカスタマイズして使用

テーマモジュールを `@use` で取り込み、CSS変数をカスタマイズできます。

```scss
/*!
 * @theme my-custom-theme
 */

@use '@subroh0508/marp-theme-canvas/scss/white-canvas' as white-canvas;

// Google Fonts（必要に応じて変更）
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap');

// テーマを適用（CSS変数をカスタマイズ）
@include white-canvas.apply() {
  --color-primary: #e11d48;
  --color-accent: #fde047;
  --font-size-base: 36px;
}
```

### 提供されるmixin

| mixin | 説明 |
|-------|------|
| `apply()` | CSS変数とスタイルを一括適用。`@content` でCSS変数を追加・上書き可能 |
| `variables()` | CSS変数のみを出力。`@content` でCSS変数を追加・上書き可能 |
| `styles()` | スタイルのみを出力（CSS変数は含まない） |

### コンポーネント・ページスタイルの個別利用

```scss
// テーマモジュール
@use '@subroh0508/marp-theme-canvas/scss/white-canvas' as white-canvas;
@use '@subroh0508/marp-theme-canvas/scss/black-canvas' as black-canvas;

// コンポーネント
@use '@subroh0508/marp-theme-canvas/scss/component' as component;
@use '@subroh0508/marp-theme-canvas/scss/component/heading' as heading;

// ページスタイル
@use '@subroh0508/marp-theme-canvas/scss/page' as page;
@use '@subroh0508/marp-theme-canvas/scss/page/title' as page-title;
```

### コンポーネント単体での使用例

```scss
@use '@subroh0508/marp-theme-canvas/scss/component/heading' as heading;
@use '@subroh0508/marp-theme-canvas/scss/page/title' as page-title;

section {
  @include page-title.configure(
    $font-size-title: 2.5em,
    $color-metadata-text: #666
  );
}

@include heading.configure(
  $font-size-h1: 2em,
  $font-size-h2: 1.5em,
  $color-text-h2: #3b91c4
);
```

## 開発

### リポジトリのクローン

```bash
git clone https://github.com/subroh0508/marp-theme-canvas.git
cd marp-theme-canvas
pnpm install
```

### コマンド

```bash
# CSSをビルド
pnpm build

# デモサーバーを起動
pnpm serve
```

## ライセンス

[MIT License](./LICENSE)
