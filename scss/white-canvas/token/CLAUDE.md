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

### Grayscale (Tailwind slate 300-900)

| 変数名 | デフォルト値 | Tailwind |
|--------|-------------|----------|
| `--color-grey-lightest` | `#cbd5e1` | slate-300 |
| `--color-grey-lighter` | `#94a3b8` | slate-400 |
| `--color-grey-light` | `#64748b` | slate-500 |
| `--color-grey-medium` | `#475569` | slate-600 |
| `--color-grey-dark` | `#334155` | slate-700 |
| `--color-grey-darker` | `#1e293b` | slate-800 |
| `--color-grey-darkest` | `#0f172a` | slate-900 |

### Blue

| 変数名 | デフォルト値 | Tailwind |
|--------|-------------|----------|
| `--color-blue` | `#2563eb` | blue-600 |
