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
| `--pl-color-comment` | Comments |
| `--pl-color-constant` | Constants, attributes, numbers |
| `--pl-color-entity` | Function names, class names |
| `--pl-color-entity-tag` | Tag names, selectors |
| `--pl-color-keyword` | Keywords |
| `--pl-color-string` | Strings, regular expressions |
| `--pl-color-variable` | Built-in functions, symbols |
| `--pl-color-storage-modifier` | Default text |
| `--pl-color-markup-heading` | Headings |
| `--pl-color-markup-list` | List markers |
| `--pl-color-markup-inserted-text` | Inserted text color (diff) |
| `--pl-color-markup-inserted-bg` | Inserted background color (diff) |
| `--pl-color-markup-deleted-text` | Deleted text color (diff) |
| `--pl-color-markup-deleted-bg` | Deleted background color (diff) |

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
@use './canvas/element/prettylights/light' as prettylights;

@include prettylights.configure;
```
