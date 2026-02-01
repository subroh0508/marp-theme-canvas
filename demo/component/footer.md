---
marp: true
theme: default
paginate: true
footer: "Footer Text"
---

<!-- _class: title -->
<!-- _paginate: false -->
<!-- _footer: "" -->

# Footer

`scss/canvas/component/_footer.scss`

---

<!-- _footer: "This is the footer" -->

## Footer Preview

The footer is displayed at the bottom-left of the slide.

Set footer text in the frontmatter:

```yaml
---
footer: "Footer Text"
---
```

Or per slide with directive:

```markdown
<!-- _footer: "Custom Footer" -->
```

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--footer-margin-x` | `var(--outer-margin-x)` |
| `--footer-margin-y` | `var(--outer-margin-y)` |
| `--footer-font-size` | `var(--font-size-xs)` (28px) |
| `--footer-color-text` | `var(--color-grey-medium)` |

---

<!-- _footer: "" -->

## Hide Footer

Use empty string to hide footer on specific slides:

```markdown
<!-- _footer: "" -->
```

This slide has no footer.

---

<!-- _footer: "Customized Footer" -->

## Customization Example

<style scoped>
:root {
  --footer-font-size: 1em;
  --footer-color-text: #e74c3c;
}
</style>

Override font size and color:

```yaml
---
style: |
  :root {
    --footer-font-size: 1em;
    --footer-color-text: #e74c3c;
  }
---
```

The footer on this slide is larger and red.
