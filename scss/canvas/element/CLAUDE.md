# element

Manages styles for HTML elements output from CommonMark (Markdown supported by Marp)

## Definition Method

- Define as SCSS @mixin
- All variables are defined as mixin arguments
- Use semantic argument names

## File Structure Template

```scss
// ===== _filename.scss =====
// Element description

@mixin configure($arg1, $arg2, $arg3: default) {
  :root {
    --element-arg1: #{$arg1};
    --element-arg2: #{$arg2};
    --element-arg3: #{$arg3};
  }

  selector {
    property: var(--element-arg1);
  }
}
```

## CSS Variable Naming Convention

CSS variable name: `--{element-name}-{argument-name}`

Examples:
- `_blockquote.scss`'s `$color-text` → `--blockquote-color-text`
- `_link.scss`'s `$color-text` → `--link-color-text`
- `_heading.scss`'s `$h1-font-size` → `--h1-font-size` (heading level as prefix)

## Target Elements

| File | Selector | Purpose |
|------|----------|---------|
| `_heading.scss` | `h1`-`h6` | Headings |
| `_paragraph.scss` | `p` | Paragraphs |
| `_list.scss` | `ul`, `ol` | Lists |
| `_table.scss` | `table`, `th`, `td`, `tr` | Tables |
| `_code.scss` | `code`, `pre` | Code blocks |
| `_blockquote.scss` | `blockquote` | Blockquotes |
| `_link.scss` | `a` | Links |
| `_hr.scss` | `hr` | Horizontal rules |
| `_text-decorator.scss` | `strong`, `mark`, `rp` | Text decoration |
| `prettylights/` | `.hljs-*` | Syntax highlighting |
