---
marp: true
theme: default
paginate: true
footer: scss/canvas/slide-pattern/_section.scss
---

<!-- _class: section -->
<!-- _paginate: false -->
<!-- _footer: "" -->

Section Divider Page Demo

---

## Usage

```markdown
<!-- _class: section -->
<!-- _paginate: false -->

Section Title Text
```

Use plain text (paragraph) for the section title, not headings.

---

## Structure

- **p**: Section title text
  - Large font, bold weight
  - Vertically centered

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--section-font-size` | `var(--font-size-xxl)` (80px) |
| `--section-font-weight` | bold |

---

<!-- _class: section -->
<!-- _paginate: false -->

<style scoped>
section.section {
  --section-font-size: 3em;
  --section-font-weight: 900;
}
</style>

Customized Section Title

---

## Customization Example

```yaml
---
style: |
  section.section {
    --section-font-size: 3em;
    --section-font-weight: 900;
  }
---
```

Override font size and weight.
