# page

特定用途に特化したページスタイル（Marpのclass指定で切り替え）

## ファイル構成

```scss
// ===== _ファイル名.scss =====
// スタイルの説明（どのようなページに使うか）
//
// 使用方法: <!-- _class: クラス名 -->

@mixin configure($引数1, $引数2, $引数3: デフォルト値) {
  &.クラス名 {
    // セレクタの役割をコメントで説明
    セレクタ {
      プロパティ: 値;
    }
  }
}
```

## スコープ設定

必ず `&.クラス名` でラップする（親の `section` に依存）

```scss
&.toc {
  ul,
  ol {
    font-size: $font-size;
  }
}
```

## コメント規約

- **セレクタの役割**: 各セレクタの前にコメントで用途を説明
- **レイアウト情報**: flexの配置方法など、視覚的な配置をコメント

```scss
// h1: タイトル文字列
// section上8割を占有、上下中央揃え、左寄せ
h1 {
  font-size: $font-size-title;
  flex: 0 0 80%;
  // ...
}
```

## テーマからの呼び出し

`white-canvas.scss` などテーマファイルで `section` ブロック内から呼び出す:

```scss
@use './page/title' as page-title;

section {
  @include page-title.configure(
    $font-size-title: var(--font-size-display),
    $color-metadata-text: var(--color-grey-light)
  );
}
```

## 既存のページスタイル一覧

| ファイル | クラス名 | 用途 |
|----------|----------|------|
| `_title.scss` | `title` | タイトルページ（h1 + メタデータ） |
| `_toc.scss` | `toc` | 目次ページ |
| `_agenda.scss` | `agenda` | アジェンダ（今日話すこと等） |
| `_section.scss` | `section` | 中扉ページ |
| `_display.scss` | `display` | 大きく表示（文章または画像） |
