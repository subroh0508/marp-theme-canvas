# token

デザイントークン（数値情報）を管理

## 役割

- カラーパレット

## 定義方法

CSS変数として定義し、変数名はセマンティックにする。

## ファイル構造

- `_color.scss` - カラーパレット

## カラーパレット

### Black & White

| 変数名 | デフォルト値 |
|--------|-------------|
| `--color-black` | `#000` |
| `--color-white` | `#fff` |

### Grayscale (Tailwind slate 50-300, 800-950)

| 変数名 | デフォルト値 | Tailwind |
|--------|-------------|----------|
| `--color-grey-lightest` | `#f8fafc` | slate-50 |
| `--color-grey-lighter` | `#f1f5f9` | slate-100 |
| `--color-grey-light` | `#e2e8f0` | slate-200 |
| `--color-grey-medium` | `#cbd5e1` | slate-300 |
| `--color-grey-dark` | `#1e293b` | slate-800 |
| `--color-grey-darker` | `#0f172a` | slate-900 |
| `--color-grey-darkest` | `#020617` | slate-950 |

### Blue

| 変数名 | デフォルト値 | Tailwind |
|--------|-------------|----------|
| `--color-blue` | `#60a5fa` | blue-400 |
