---
marp: true
theme: default
paginate: true
footer: scss/canvas/pattern/_agenda.scss
style: |
  section {
    --color-primary: #3b91c4;
  }
---

<!-- _class: agenda -->

## Today's Topics

I want everyone to take away these 3 key insights!

- Insight 1
  - Detailed explanation goes here
  - Additional information
- Insight 2
  - Detailed explanation goes here
- Insight 3

---

## Usage

```markdown
<!-- _class: agenda -->

## Agenda Title

- Main Point 1
  - Detail about point 1
  - More details
- Main Point 2
  - Detail about point 2
- Main Point 3
```

---

## Structure

- **h2**: Agenda title
- **ul/ol (direct children)**: Main points
  - Large font, bold, loose line height
- **Nested ul/ol**: Details
  - Normal font size and weight

---

## CSS Variables

| CSS Variable | Default |
|--------------|---------|
| `--agenda-heading-font-size` | `var(--font-size-xl)` (52px) |
| `--agenda-heading-font-weight` | bold |
| `--agenda-heading-line-height` | `var(--line-height-loose)` (2) |
| `--agenda-body-font-size` | `var(--font-size-m)` (40px) |
| `--agenda-body-font-weight` | normal |
| `--agenda-body-line-height` | `var(--line-height-normal)` (1.45) |

---

<!-- _class: agenda -->

<style scoped>
section.agenda {
  --agenda-heading-font-size: 1.5em;
  --agenda-heading-line-height: 1.6;
}
</style>

## Learning Outcomes

- Understand the basics
  - Core concepts explained
- Apply in practice
  - Real-world examples

---

## Customization Example

```yaml
---
style: |
  section.agenda {
    --agenda-heading-font-size: 1.5em;
    --agenda-heading-line-height: 1.6;
  }
---
```

Override heading font size and line height.
