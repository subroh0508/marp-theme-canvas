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
  selector {
    property: value;
  }
}
```

## 対象要素

| ファイル | セレクタ | 用途 |
|---------|---------|------|
| `_heading.scss` | `h1`-`h6` | 見出し |
| `_paragraph.scss` | `p` | 段落 |
| `_list.scss` | `ul`, `ol`, `li` | リスト |
| `_table.scss` | `table`, `th`, `td`, `tr` | テーブル |
| `_code.scss` | `code`, `pre` | コードブロック |
| `_blockquote.scss` | `blockquote` | 引用 |
| `_a.scss` | `a` | リンク |
| `_hr.scss` | `hr` | 水平線 |
| `_text-decorator.scss` | `strong`, `em`, `mark` | テキスト装飾 |
| `_header.scss` | `header` | ヘッダー |
| `_footer.scss` | `footer` | フッター |
