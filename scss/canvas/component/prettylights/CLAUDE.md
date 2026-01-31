# prettylights

Syntax highlighting styles (color mapping for highlight.js classes)

## File Structure

```
prettylights/
├── _index.scss  # Entry point
├── _base.scss   # Common logic (CSS variable definitions + style application)
├── _light.scss  # Light theme color definitions
└── _dark.scss   # Dark theme color definitions
```

## CSS Variables

`_base.scss` defines the colors received as arguments as CSS variables in the `:root` scope.

| CSS Variable | Description |
|--------------|-------------|
| `--color-pl-comment` | Comments |
| `--color-pl-constant` | Constants, attributes, numbers |
| `--color-pl-entity` | Function names, class names |
| `--color-pl-entity-tag` | Tag names, selectors |
| `--color-pl-keyword` | Keywords |
| `--color-pl-string` | Strings, regular expressions |
| `--color-pl-variable` | Built-in functions, symbols |
| `--color-pl-storage-modifier` | Default text |
| `--color-pl-markup-heading` | Headings |
| `--color-pl-markup-list` | List markers |
| `--color-pl-markup-inserted-text` | Inserted text color (diff) |
| `--color-pl-markup-inserted-bg` | Inserted background color (diff) |
| `--color-pl-markup-deleted-text` | Deleted text color (diff) |
| `--color-pl-markup-deleted-bg` | Deleted background color (diff) |

## Pattern

- `_base.scss`: Receives colors as arguments, defines CSS variables, and applies styles
- `_light.scss` / `_dark.scss`: Define colors as private variables and call `base.configure`

```scss
// _light.scss
@use 'base';

$_pl-comment: #59636e;
// ... color definitions (private variables)

@mixin configure {
  @include base.configure($_pl-comment, ...);
}
```

## Usage from Theme

```scss
@use './canvas/component/prettylights/light' as prettylights;

@include prettylights.configure;
```
