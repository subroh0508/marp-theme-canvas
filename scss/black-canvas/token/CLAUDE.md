# token

black-canvasテーマ用のデザイントークン設定

## 役割

`canvas/token`で定義されたmixinを呼び出し、テーマ固有の値を設定する。

## ファイル構造

- `typography.scss` - タイポグラフィ設定（デフォルト値使用）
- `color.scss` - カラーパレット設定

## カラーパレット設定

Tailwind CSS slate 50-300, 800-950 をベースとしたダークテーマ用カラーパレット。

| 引数 | 値 | Tailwind |
|------|-----|----------|
| `$color-blue` | `#60a5fa` | blue-400 |
| `$color-black` | `#000` | - |
| `$color-white` | `#fff` | - |
| `$color-grey-lightest` | `#f8fafc` | slate-50 |
| `$color-grey-lighter` | `#f1f5f9` | slate-100 |
| `$color-grey-light` | `#e2e8f0` | slate-200 |
| `$color-grey-medium` | `#cbd5e1` | slate-300 |
| `$color-grey-dark` | `#1e293b` | slate-800 |
| `$color-grey-darker` | `#0f172a` | slate-900 |
| `$color-grey-darkest` | `#020617` | slate-950 |
