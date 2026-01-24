# theme

テーマモジュール（@useで取り込み可能なwhite-canvas、black-canvas）

## 必須CSS変数

以下のCSS変数はデフォルト値がないため、使用時に必ず定義する必要があります。

| 変数名 | 説明 | 使用箇所 |
|--------|------|----------|
| `--color-primary` | プライマリカラー | h2の文字色 |
| `--color-accent` | アクセントカラー | markタグの背景色 |

## CSS変数一覧

### 色（基本）

| 変数名 | 説明 | 使用箇所 | white-canvas | black-canvas |
|--------|------|----------|--------------|--------------|
| `--color-black` | 黒 | - | `#000` | `#000` |
| `--color-white` | 白 | スライド背景 (white) | `#fff` | `#fff` |
| `--color-grey-lightest` | グレー（最も明るい） | テーブルヘッダー背景 (white) | `#cbd5e1` (slate-300) | `#f8fafc` (slate-50) |
| `--color-grey-lighter` | グレー（より明るい） | - | `#94a3b8` (slate-400) | `#f1f5f9` (slate-100) |
| `--color-grey-light` | グレー（明るい） | タイトルメタデータ (white)、ページ番号・ヘッダー・フッター (black) | `#64748b` (slate-500) | `#e2e8f0` (slate-200) |
| `--color-grey-medium` | グレー（中間） | ページ番号・ヘッダー・フッター (white)、引用テキスト・マーク、タイトルメタデータ (black) | `#475569` (slate-600) | `#cbd5e1` (slate-300) |
| `--color-grey-dark` | グレー（暗い） | テーブルヘッダー背景 (black) | `#334155` (slate-700) | `#1e293b` (slate-800) |
| `--color-grey-darker` | グレー（より暗い） | - | `#1e293b` (slate-800) | `#0f172a` (slate-900) |
| `--color-grey-darkest` | グレー（最も暗い） | 本文テキスト (white)、スライド背景 (black) | `#0f172a` (slate-900) | `#020617` (slate-950) |
| `--color-link` | リンク色 | aタグ | `#2563eb` (blue-600) | `#60a5fa` (blue-400) |

### 色（コンポーネント）

| 変数名 | 説明 | white-canvas | black-canvas |
|--------|------|--------------|--------------|
| `--color-blockquote-background` | 引用の背景色 | `color-mix(grey-light 10%)` | `color-mix(grey-light 15%)` |
| `--color-blockquote-mark` | 引用のマーク色 | `grey-medium` | `grey-medium` |
| `--color-blockquote-text` | 引用のテキスト色 | `grey-medium` | `grey-medium` |
| `--color-table-row-bg` | テーブル行の背景色 | `white` | `grey-darkest` |
| `--color-table-row-bg-header` | テーブルヘッダーの背景色 | `grey-lightest` | `grey-dark` |
| `--color-table-border` | テーブルのボーダー色 | `grey-light` | `grey-medium` |
| `--color-code-bg` | コードブロックの背景色 | `color-mix(grey-light 10%)` | `color-mix(grey-light 15%)` |
| `--color-code-fg` | コードブロックの文字色 | `grey-darkest` | `grey-lightest` |

### フォント

| 変数名 | 説明 | 使用箇所 | デフォルト値 |
|--------|------|----------|--------------|
| `--font-family-base` | 基本フォント | スライド全体 | `'Noto Sans JP', sans-serif` |
| `--font-family-mono` | 等幅フォント | コードブロック | `ui-monospace, SFMono-Regular, ...` |
| `--font-size-base` | 基本フォントサイズ | スライド全体 | `40px` |
| `--font-size-display` | ディスプレイサイズ | titleページ、displayページ | `2.5em` |
| `--font-size-title` | タイトルサイズ | h1、sectionページ | `2em` |
| `--font-size-heading` | 見出しサイズ | h2、tocページ、agendaページ見出し | `1.3em` |
| `--font-size-medium` | 中サイズ | h3 | `1.15em` |
| `--font-size-body` | 本文サイズ | agendaページ本文、引用 | `1em` |
| `--font-size-small` | 小サイズ | - | `0.85em` |
| `--font-size-note` | 注釈サイズ | ページ番号、ヘッダー、フッター | `0.7em` |
| `--font-weight-normal` | 標準ウェイト | h5、h6、agendaページ本文 | `400` |
| `--font-weight-bold` | 太字ウェイト | h1〜h4、agendaページ見出し、displayページ強調 | `700` |
| `--font-weight-black` | 極太ウェイト | - | `900` |

### 行間

| 変数名 | 説明 | 使用箇所 | デフォルト値 |
|--------|------|----------|--------------|
| `--line-height-tight` | 狭い行間 | 見出し、引用 | `1.2` |
| `--line-height-normal` | 標準行間 | スライド全体、agendaページ本文 | `1.45` |
| `--line-height-loose` | 広い行間 | tocページ、agendaページ見出し | `2` |

### レイアウト

| 変数名 | 説明 | デフォルト値 |
|--------|------|--------------|
| `--slide-padding-x` | スライド左右余白 | `80px` |
| `--slide-padding-y` | スライド上下余白 | `80px` |
| `--header-footer-margin-x` | ヘッダー・フッター・ページ番号の左右マージン | `80px` |
| `--header-footer-margin-y` | ヘッダー・フッター・ページ番号の上下マージン | `20px` |
| `--border-radius` | 角丸（引用） | `8px` |

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
