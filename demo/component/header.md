---
marp: true
theme: default
paginate: true
header: "Header Text"
---

<!-- _class: title -->
<!-- _paginate: false -->
<!-- _header: "" -->

# Header

`scss/canvas/component/_header.scss`

---

<!-- _header: "This is the header" -->

## Header Preview

The header is displayed at the top-left of the slide.

Set header text in the frontmatter:

```yaml
---
header: "Header Text"
---
```

Or per slide with directive:

```markdown
<!-- _header: "Custom Header" -->
```

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--header-margin-x` | `var(--outer-margin-x)` |
| `--header-margin-y` | `var(--outer-margin-y)` |
| `--header-font-size` | `var(--font-size-xs)` (28px) |
| `--header-color-text` | `var(--color-grey-medium)` |

---

<!-- _header: "" -->

## Hide Header

Use empty string to hide header on specific slides:

```markdown
<!-- _header: "" -->
```

This slide has no header.

---

<!-- _header: "Customized Header" -->

## Customization Example

<style scoped>
:root {
  --header-font-size: 1em;
  --header-color-text: #3b91c4;
}
</style>

Override font size and color:

```yaml
---
style: |
  :root {
    --header-font-size: 1em;
    --header-color-text: #3b91c4;
  }
---
```

The header on this slide is larger and blue.
