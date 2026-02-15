# CSS Extension Example

An example of building a custom Marp theme by extending [marp-theme-canvas](https://github.com/subroh0508/marp-theme-canvas) with CSS variable overrides. No build step required.

## Preview

```bash
pnpm install
pnpm preview
```

This will open a live preview in your browser.

## How It Works

1. Import the base theme with `@import "white-canvas"`
2. Override CSS variables (colors, fonts, layout) in `:root {}`
3. Add custom styles (heading underline, pagination format, decorators, slide patterns)
4. Preview with Marp CLI using `--theme-set` (base CSS) + `--theme` (custom CSS) — no build step required

For a detailed guide, see the [CSS Extension documentation](https://subroh0508.github.io/marp-theme-canvas/extension/css).
