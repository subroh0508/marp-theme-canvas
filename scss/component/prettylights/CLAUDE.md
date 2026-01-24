# prettylights

Syntax highlighting styles (color mapping for highlight.js classes)

## Structure

```
prettylights/
├── _base.scss   # Common logic (mixin with arguments)
├── _light.scss  # Light theme color definitions
└── _dark.scss   # Dark theme color definitions
```

## Pattern

- `_base.scss`: Defines color mapping for highlight.js classes via mixin with arguments
- `_light.scss` / `_dark.scss`: Define color variables and call base via argumentless mixin

```scss
// _light.scss
@use 'base';

$pl-comment: #59636e;
// ... color definitions

@mixin configure {
  @include base.configure($pl-comment, ...);
}
```

## Usage from Theme

Use within section:

```scss
@use './component/prettylights/light' as prettylights;

section {
  @include prettylights.configure;
}
```
