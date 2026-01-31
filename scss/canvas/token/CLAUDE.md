# token

デザイントークン（数値情報）を管理

## 役割

- カラーパレット
- フォントサイズ
- フォントウェイト
- ラインの高さ

## 定義方法

CSS変数として定義し、変数名はセマンティックにする。

## ファイル構造

- `_typography.scss` - フォント関連のトークン
- カラーパレット（ユーザー定義必須、定義なし）

## タイポグラフィトークン

### Font Size

基準サイズ: `--font-size-base` = 40px

各サイズは `em` 単位で定義され、基準サイズに対する相対値となる。

| トークン名 | CSS変数名 | 値 | px実値 |
|-----------|-----------|----|--------------------|
| XS | `--font-size-xs` | 0.7em | 28px |
| S | `--font-size-s` | 0.85em | 34px |
| M | `--font-size-m` | 1em | 40px |
| L | `--font-size-l` | 1.15em | 46px |
| XL | `--font-size-xl` | 1.3em | 52px |
| XXL | `--font-size-xxl` | 2em | 80px |
| X3L | `--font-size-x3l` | 2.5em | 100px |

### Font Weight

| トークン名 | CSS変数名 | 値 |
|-----------|-----------|-----|
| normal | `--font-weight-normal` | 400 |
| bold | `--font-weight-bold` | 700 |
| black | `--font-weight-black` | 900 |

### Line Height

| トークン名 | CSS変数名 | 値 |
|-----------|-----------|-----|
| tight | `--line-height-tight` | 1.2 |
| normal | `--line-height-normal` | 1.45 |
| loose | `--line-height-loose` | 2 |

## カラーパレットについて

カラーパレットの定義はユーザーが行う（テーマ側では定義しない）。
