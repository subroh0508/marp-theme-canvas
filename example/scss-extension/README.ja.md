# SCSS拡張の例

[marp-theme-canvas](https://github.com/subroh0508/marp-theme-canvas) をSCSSで拡張してカスタムMarpテーマを作成する例です。

## プレビュー

```bash
pnpm install
pnpm preview
```

SCSSテーマをコンパイルし、ブラウザでライブプレビューを開きます。

## 仕組み

`theme/cool.scss` でベーステーマを `@use` でインポートし、カスタムスタイルを追加しています:

```scss
@use 'pkg:@subroh0508/marp-theme-canvas/white-canvas.scss';

// Custom Component
@use 'component/heading';
@use 'component/pagination';

// Custom Decorator
@use 'decorator/card';

:root {
  --color-primary: #7c3aed;
  --color-accent: #a78bfa;
}
```
