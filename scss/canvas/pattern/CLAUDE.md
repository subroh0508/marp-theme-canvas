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
  &.classname {
    selector {
      property: value;
    }
  }
}
```

## 想定パターン

| ファイル | クラス名 | 用途 |
|---------|---------|------|
| `_title.scss` | `title` | 表紙 |
| `_toc.scss` | `toc` | 目次 |
| `_section.scss` | `section` | 中扉 |
| `_display.scss` | `display` | 強調表示 |
| `_agenda.scss` | `agenda` | アジェンダ |
