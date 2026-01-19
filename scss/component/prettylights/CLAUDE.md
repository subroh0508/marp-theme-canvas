# prettylights

シンタックスハイライト用スタイル（highlight.jsクラスへのカラーマッピング）

## 構成

```
prettylights/
├── _base.scss   # 共通ロジック（引数付きmixin）
├── _light.scss  # Lightテーマ色定義
└── _dark.scss   # Darkテーマ色定義
```

## パターン

- `_base.scss`: highlight.jsクラスへのカラーマッピングを引数付きmixinで定義
- `_light.scss` / `_dark.scss`: 色変数を定義し、引数なしmixinでbaseを呼び出す

```scss
// _light.scss
@use 'base';

$pl-comment: #59636e;
// ... 色定義

@mixin configure {
  @include base.configure($pl-comment, ...);
}
```

## テーマからの呼び出し

section内で呼び出す:

```scss
@use './component/prettylights/light' as prettylights;

section {
  @include prettylights.configure;
}
```
