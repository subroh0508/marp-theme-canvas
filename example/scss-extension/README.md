# SCSS Extension Example

An example of building a custom Marp theme by extending [marp-theme-canvas](https://github.com/subroh0508/marp-theme-canvas) with SCSS.

## Preview

```bash
pnpm install
pnpm preview
```

This will compile the SCSS theme and open a live preview in your browser.

## How It Works

The `theme/cool.scss` file imports the base theme via `@use` and adds custom styles:

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
