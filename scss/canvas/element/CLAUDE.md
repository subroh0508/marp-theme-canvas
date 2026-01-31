# element

CommonMark（MarpでサポートされているMarkdown）から
出力されるHTML要素のスタイルを管理

## 定義方法

- scssの@mixinとして定義
- 変数は全てmixinの引数で定義
- 引数名はセマンティックにする

## ファイル構造テンプレート

```scss
// ===== _filename.scss =====
// 要素の説明

@mixin configure($arg1, $arg2, $arg3: default) {
  :root {
    --element-arg1: #{$arg1};
    --element-arg2: #{$arg2};
    --element-arg3: #{$arg3};
  }

  selector {
    property: var(--element-arg1);
  }
}
```

## CSS変数の命名規則

CSS変数名: `--{要素名}-{引数名}`

例:
- `_blockquote.scss`の`$color-text` → `--blockquote-color-text`
- `_link.scss`の`$color-text` → `--link-color-text`
- `_heading.scss`の`$h1-font-size` → `--h1-font-size`（見出しレベルがプレフィックス）

## 対象要素

| ファイル | セレクタ | 用途 |
|---------|---------|------|
| `_heading.scss` | `h1`-`h6` | 見出し |
| `_paragraph.scss` | `p` | 段落 |
| `_list.scss` | `ul`, `ol` | リスト |
| `_table.scss` | `table`, `th`, `td`, `tr` | テーブル |
| `_code.scss` | `code`, `pre` | コードブロック |
| `_blockquote.scss` | `blockquote` | 引用 |
| `_link.scss` | `a` | リンク |
| `_hr.scss` | `hr` | 水平線 |
| `_text-decorator.scss` | `strong`, `mark`, `rp` | テキスト装飾 |
| `prettylights/` | `.hljs-*` | シンタックスハイライト |
