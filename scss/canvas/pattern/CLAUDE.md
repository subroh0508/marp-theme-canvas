# pattern

Defines layout patterns for single slide pages

## Definition Method

- Define as SCSS @mixin
- All variables are defined as mixin arguments
- Use semantic argument names
- Switch patterns using Marp's `<!-- _class: classname -->`

## File Structure Template

```scss
// ===== _filename.scss =====
// Pattern description
//
// Usage: <!-- _class: classname -->

@mixin configure($arg1, $arg2, $arg3: default) {
  section.classname {
    --classname-target-prop: #{$arg1};

    selector {
      property: var(--classname-target-prop);
    }
  }
}
```

## CSS Variable Naming Convention

`--{class-name}-{target}-{property-name}`

- CSS variables are defined under each class (`.title`, `.toc`, etc.), not in `:root`
- Target can be omitted if single or obvious

| Class Name | Target | Example |
|------------|--------|---------|
| `title` | `h1`, `metadata` | `--title-h1-font-size`, `--title-metadata-color-text` |
| `toc` | `list` | `--toc-list-font-size`, `--toc-list-line-height` |
| `section` | (omitted) | `--section-font-size`, `--section-font-weight` |
| `agenda` | `heading`, `body` | `--agenda-heading-font-size`, `--agenda-body-font-size` |
| `display` | (omitted) | `--display-font-size`, `--display-font-weight` |

## Pattern List

| File | Class Name | Purpose |
|------|------------|---------|
| `_title.scss` | `title` | Cover page |
| `_toc.scss` | `toc` | Table of contents |
| `_section.scss` | `section` | Section divider |
| `_display.scss` | `display` | Emphasis display |
| `_agenda.scss` | `agenda` | Agenda |

## Argument to CSS Variable Mapping

### _title.scss

| Argument | CSS Variable | Target |
|----------|--------------|--------|
| `$font-size-title` | `--title-h1-font-size` | h1 |
| `$color-metadata-text` | `--title-metadata-color-text` | h1+p |

### _toc.scss

| Argument | CSS Variable | Target |
|----------|--------------|--------|
| `$font-size` | `--toc-list-font-size` | > ul, > ol |
| `$line-height` | `--toc-list-line-height` | > ul, > ol |

### _section.scss

| Argument | CSS Variable | Target |
|----------|--------------|--------|
| `$font-size` | `--section-font-size` | p |
| `$font-weight` | `--section-font-weight` | p |

### _agenda.scss

| Argument | CSS Variable | Target |
|----------|--------------|--------|
| `$font-size-heading` | `--agenda-heading-font-size` | > ul, > ol |
| `$font-weight-heading` | `--agenda-heading-font-weight` | > ul, > ol |
| `$line-height-heading` | `--agenda-heading-line-height` | > ul, > ol |
| `$font-size-body` | `--agenda-body-font-size` | nested ul, ol |
| `$font-weight-body` | `--agenda-body-font-weight` | nested ul, ol |
| `$line-height-body` | `--agenda-body-line-height` | nested ul, ol |

### _display.scss

| Argument | CSS Variable | Target |
|----------|--------------|--------|
| `$font-size` | `--display-font-size` | p |
| `$font-weight-bold` | `--display-font-weight` | p |
