# component

Styles for elements commonly used across slides

## File Structure

```scss
// ===== _filename.scss =====
// Component description

@mixin configure($arg1, $arg2, $arg3: default) {
  selector {
    property: value;
  }
}
```

## Usage from Theme

### Components used within section

```scss
section {
  @include section.configure(...);
  @include pagination.configure(...);
  @include prettylights.configure;
}
```

### Components used in global scope

```scss
@include header.configure(...);
@include footer.configure(...);
@include heading.configure(...);
@include blockquote.configure(...);
@include text-decorator.configure(...);
@include table.configure(...);
@include code.configure(...);
```

## Existing Components

| File | Target Selector | Purpose |
|------|-----------------|---------|
| `_section.scss` | `section` | Base styles for slide body |
| `_heading.scss` | `h1`-`h6` | Headings |
| `_header.scss` | `header` | Header |
| `_footer.scss` | `footer` | Footer |
| `_pagination.scss` | `section::after` | Page number |
| `_table.scss` | `table`, `th`, `td`, `tr` | Table |
| `_code.scss` | `code`, `pre`, `tt` | Code blocks |
| `_blockquote.scss` | `blockquote` | Blockquote |
| `_text-decorator.scss` | `strong`, `mark`, `rp` | Text decoration |
| `prettylights/*` | `.hljs-*` | Syntax highlighting |
