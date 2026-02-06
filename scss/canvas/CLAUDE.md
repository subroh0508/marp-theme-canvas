# canvas

Base style definitions for canvas themes

## Directory Structure

- `token/` - Design tokens (CSS variables)
- `component/` - Styles for HTML elements and their combinations (heading, table, code, section, etc.)
- `layout/` - Reusable layout definitions referenced by multiple patterns
- `decorator/` - Decorative styles requiring explicit class specification
- `pattern/` - Page layout patterns

## User-Defined Variables

The following CSS variables must be defined by the user when using themes:

| Variable | Purpose |
|----------|---------|
| `--color-primary` | Primary color (h2 text, etc.) |
| `--color-accent` | Accent color (mark background, etc.) |

## Section Element Style Restrictions

Allowed properties for section element:
- width / height
- padding
- background-color / color
- font-family / font-size / line-height
- display / flex-direction
- box-sizing / overflow
