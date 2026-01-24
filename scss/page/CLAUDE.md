# page

Page styles specialized for specific purposes (switched via Marp class directive)

## File Structure

```scss
// ===== _filename.scss =====
// Style description (what kind of page it's used for)
//
// Usage: <!-- _class: classname -->

@mixin configure($arg1, $arg2, $arg3: default) {
  &.classname {
    // Explain the role of selectors with comments
    selector {
      property: value;
    }
  }
}
```

## Scope Settings

Always wrap with `&.classname` (depends on parent `section`)

```scss
&.toc {
  ul,
  ol {
    font-size: $font-size;
  }
}
```

## Comment Conventions

- **Selector role**: Explain the purpose with a comment before each selector
- **Layout information**: Comment on visual arrangement such as flex positioning

```scss
// h1: Title text
// Occupies top 80% of section, vertically centered, left-aligned
h1 {
  font-size: $font-size-title;
  flex: 0 0 80%;
  // ...
}
```

## Usage from Theme

Use within the `section` block in theme files like `white-canvas.scss`:

```scss
@use './page/title' as page-title;

section {
  @include page-title.configure(
    $font-size-title: var(--font-size-display),
    $color-metadata-text: var(--color-grey-light)
  );
}
```

## Existing Page Styles

| File | Class Name | Purpose |
|------|------------|---------|
| `_title.scss` | `title` | Title page (h1 + metadata) |
| `_toc.scss` | `toc` | Table of contents page |
| `_agenda.scss` | `agenda` | Agenda (topics to cover today, etc.) |
| `_section.scss` | `section` | Section divider page |
| `_display.scss` | `display` | Large display (text or image) |
