# component

スライド共通で使用する要素のスタイル

## ファイル構成

```scss
// ===== _ファイル名.scss =====
// コンポーネントの説明

@mixin configure($引数1, $引数2, $引数3: デフォルト値) {
  セレクタ {
    プロパティ: 値;
  }
}
```

## テーマからの呼び出し

### section内で呼び出すコンポーネント

```scss
section {
  @include section.configure(...);
  @include pagination.configure(...);
  @include prettylights.configure;
}
```

### グローバルスコープで呼び出すコンポーネント

```scss
@include header.configure(...);
@include footer.configure(...);
@include heading.configure(...);
@include blockquote.configure(...);
@include text-decorator.configure(...);
@include table.configure(...);
@include code.configure(...);
```

## 既存のコンポーネント一覧

| ファイル | 対象セレクタ | 用途 |
|----------|--------------|------|
| `_section.scss` | `section` | スライド本体のベーススタイル |
| `_heading.scss` | `h1`-`h6` | 見出し |
| `_header.scss` | `header` | ヘッダー |
| `_footer.scss` | `footer` | フッター |
| `_pagination.scss` | `section::after` | ページ番号 |
| `_table.scss` | `table`, `th`, `td`, `tr` | テーブル |
| `_code.scss` | `code`, `pre`, `tt` | コードブロック |
| `_blockquote.scss` | `blockquote` | 引用 |
| `_text-decorator.scss` | `strong`, `mark`, `rp` | テキスト装飾 |
| `prettylights/*` | `.hljs-*` | シンタックスハイライト |
