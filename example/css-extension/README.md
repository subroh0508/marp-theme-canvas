# CSS Extension Example

An example of building a custom Marp theme by extending [marp-theme-canvas](https://github.com/subroh0508/marp-theme-canvas) with CSS variable overrides. No build step required.

## Preview

```bash
pnpm install
pnpm preview
```

This will open a live preview in your browser.

## How It Works

The `theme/warm.css` file imports the base theme via `@import` and overrides CSS variables:

```css
@import "white-canvas";

:root {
  --color-primary: #c2410c;
  --color-accent: #d4a574;
}
```
