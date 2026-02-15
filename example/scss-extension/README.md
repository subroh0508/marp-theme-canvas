# SCSS Extension Example

An example of building a custom Marp theme by extending [marp-theme-canvas](https://github.com/subroh0508/marp-theme-canvas) with SCSS.

## Preview

```bash
pnpm install
pnpm preview
```

This will compile the SCSS theme and open a live preview in your browser.

## How It Works

1. Import the base theme with `@use 'pkg:@subroh0508/marp-theme-canvas/white-canvas.scss'`
2. Split custom styles into partials (component, decorator, slide-pattern) and import them with `@use`
3. Override CSS variables (colors, fonts, layout) in `:root {}`
4. Build with `sass --pkg-importer=node` and preview with Marp CLI using `--theme` only — the base theme is compiled into the output CSS

For a detailed guide, see the [SCSS Extension documentation](https://subroh0508.github.io/marp-theme-canvas/extension/scss).
