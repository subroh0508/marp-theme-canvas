# pattern

スライド1ページのレイアウトパターンを定義

## 定義方法

- scssの@mixinとして定義
- 変数は全てmixinの引数で定義
- 引数名はセマンティックにする
- Marpの`<!-- _class: classname -->`で切り替え

## ファイル構造テンプレート

```scss
// ===== _filename.scss =====
// パターンの説明
//
// Usage: <!-- _class: classname -->

@mixin configure($arg1, $arg2, $arg3: default) {
  section.classname {
    --classname-target-prop: #{$arg1};

    selector {
      property: var(--classname-target-prop);
    }
  }
}
```

## CSS変数の命名規則

`--{クラス名}-{対象}-{プロパティ名}`

- CSS変数は `:root` ではなく各クラス（`.title`, `.toc` 等）配下に定義
- 対象が単一または自明な場合は省略可能

| クラス名 | 対象 | 例 |
|---------|------|-----|
| `title` | `h1`, `metadata` | `--title-h1-font-size`, `--title-metadata-color-text` |
| `toc` | `list` | `--toc-list-font-size`, `--toc-list-line-height` |
| `section` | (省略) | `--section-font-size`, `--section-font-weight` |
| `agenda` | `heading`, `body` | `--agenda-heading-font-size`, `--agenda-body-font-size` |
| `display` | (省略) | `--display-font-size`, `--display-font-weight` |

## パターン一覧

| ファイル | クラス名 | 用途 |
|---------|---------|------|
| `_title.scss` | `title` | 表紙 |
| `_toc.scss` | `toc` | 目次 |
| `_section.scss` | `section` | 中扉 |
| `_display.scss` | `display` | 強調表示 |
| `_agenda.scss` | `agenda` | アジェンダ |

## 引数とCSS変数のマッピング

### _title.scss

| 引数 | CSS変数名 | 対象 |
|-----|-----------|------|
| `$font-size-title` | `--title-h1-font-size` | h1 |
| `$color-metadata-text` | `--title-metadata-color-text` | h1+p |

### _toc.scss

| 引数 | CSS変数名 | 対象 |
|-----|-----------|------|
| `$font-size` | `--toc-list-font-size` | > ul, > ol |
| `$line-height` | `--toc-list-line-height` | > ul, > ol |

### _section.scss

| 引数 | CSS変数名 | 対象 |
|-----|-----------|------|
| `$font-size` | `--section-font-size` | p |
| `$font-weight` | `--section-font-weight` | p |

### _agenda.scss

| 引数 | CSS変数名 | 対象 |
|-----|-----------|------|
| `$font-size-heading` | `--agenda-heading-font-size` | > ul, > ol |
| `$font-weight-heading` | `--agenda-heading-font-weight` | > ul, > ol |
| `$line-height-heading` | `--agenda-heading-line-height` | > ul, > ol |
| `$font-size-body` | `--agenda-body-font-size` | nested ul, ol |
| `$font-weight-body` | `--agenda-body-font-weight` | nested ul, ol |
| `$line-height-body` | `--agenda-body-line-height` | nested ul, ol |

### _display.scss

| 引数 | CSS変数名 | 対象 |
|-----|-----------|------|
| `$font-size` | `--display-font-size` | p |
| `$font-weight-bold` | `--display-font-weight` | p |
