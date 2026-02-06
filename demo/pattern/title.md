---
marp: true
theme: default
paginate: true
footer: scss/canvas/pattern/_title.scss
style: |
  section {
    --color-primary: #3b91c4;
  }
---

<!-- _class: title -->
<!-- _paginate: false -->
<!-- _footer: "" -->

# Title Page<br/>Multiple lines display like this<small>- With a subtitle -</small>

Event name / Presentation date
Presenter name

---

## Usage

```markdown
<!-- _class: title -->
<!-- _paginate: false -->

# Main Title<small>- Subtitle -</small>

Event name / Date
Author name
```

---

## Structure

- **h1**: Title text (80% height, vertically centered)
  - **small**: Subtitle (50% of title font size)
- **p after h1**: Metadata (date, event, author)
  - Right-aligned at bottom

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--title-h1-font-size` | `var(--font-size-3xl)` (100px) |
| `--title-metadata-color-text` | `var(--color-grey-light)` |

---

<!-- _class: title -->
<!-- _paginate: false -->

<style scoped>
section.title {
  --title-h1-font-size: 2em;
  --title-metadata-color-text: #3b91c4;
}
</style>

# Customized Title

Smaller title with blue metadata

---

## Customization Example

```yaml
---
style: |
  section.title {
    --title-h1-font-size: 2em;
    --title-metadata-color-text: #3b91c4;
  }
---
```

Override title font size and metadata color.
