# token

white-canvasテーマ用のデザイントークン設定

## 役割

`canvas/token`で定義されたmixinを呼び出し、テーマ固有の値を設定する。

## ファイル構造

- `typography.scss` - タイポグラフィ設定（デフォルト値使用）
- `color.scss` - カラーパレット設定

## カラーパレット設定

Tailwind CSS slate 300-900 をベースとしたライトテーマ用カラーパレット。

| 引数 | 値 | Tailwind |
|------|-----|----------|
| `$color-blue` | `#2563eb` | blue-600 |
| `$color-black` | `#000` | - |
| `$color-white` | `#fff` | - |
| `$color-grey-lightest` | `#cbd5e1` | slate-300 |
| `$color-grey-lighter` | `#94a3b8` | slate-400 |
| `$color-grey-light` | `#64748b` | slate-500 |
| `$color-grey-medium` | `#475569` | slate-600 |
| `$color-grey-dark` | `#334155` | slate-700 |
| `$color-grey-darker` | `#1e293b` | slate-800 |
| `$color-grey-darkest` | `#0f172a` | slate-900 |
