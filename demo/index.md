---
marp: true
theme: default
paginate: true
footer: Canvas v0.4.1
style: |
  section {
    --color-primary: #3b91c4;
    --color-accent: #ead7a4;
  }
---

<!-- _class: title -->
<!-- _paginate: false -->

# Canvas<small>- Marp Theme -</small>

Simple and minimal Marp theme

---

<!-- _class: toc -->

## Table of Contents

1. Slide Patterns
1. Column Layout
1. Components

---

<!-- _class: section -->
<!-- _paginate: false -->


Slide Patterns

---

## Slide Patterns

Use `<!-- _class: style-name -->` to switch styles for each page.

| Style | Purpose |
|-------|---------|
| `title` | Cover page |
| `section` | Section divider |
| `toc` | Table of contents |
| `agenda` | Agenda / topics list |
| `display` | Emphasis display |

---

<!-- _class: agenda -->

## Agenda Example

- Main Topic 1
  - Detailed explanation goes here
  - Additional information
- Main Topic 2
  - Detailed explanation goes here
- Main Topic 3

---

<!-- _class: display -->


Display: large text emphasis

---

<!-- _class: section -->
<!-- _paginate: false -->


Column Layout

---

<!-- _class: cols -->

## 2-Column Layout

<div class="col">

### Left Column

Specify `<!-- _class: cols -->` and use `<div class="col">` for each column.

- Simple syntax
- Flexible layout

</div>
<div class="col">

### Right Column

Columns are equally distributed by default.

- Item A
- Item B
- Item C

</div>

---

<!-- _class: cols -->

## Image & Text Layout

<div class="col-4">

![](https://picsum.photos/1200/800?image=50)

</div>
<div class="col-6">

Use `col-N` (N = 1-10) for ratio-based widths.

- `col-4` for the image
- `col-6` for the text

This allows flexible image-text combinations.

</div>

---

<!-- _class: cols items-center -->

## Flex Alignment

<div class="col">

![](https://picsum.photos/400/600?image=30)

</div>
<div class="col">

Combine with **flex utilities** for alignment control.

`<!-- _class: cols items-center -->`

Content is vertically centered relative to the image.

</div>

---

<!-- _class: section -->
<!-- _paginate: false -->


Components

---

## Headings

# H1 Heading
## H2 Heading (Primary Color)
### H3 Heading
#### H4 Heading

---

## Text & Decoration

**Bold text** for emphasis.

*Italic text* for nuance.

A sentence with <mark>highlighted text</mark> using the accent color.

> Blockquotes for citing or calling attention to important notes.

---

## Lists

- Unordered list item
  - Nested item
  - Another nested item
- Second item
- Third item

1. Ordered list item
2. Second item
3. Third item

---

## Table

| Feature | white-canvas | black-canvas |
|---------|:------------:|:------------:|
| Background | White | Black |
| Text color | Dark | Light |
| Syntax highlighting | Light | Dark |

---

## Code

Inline code: `const theme = 'canvas'`

```javascript
// Code block with syntax highlighting
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Canvas'));
```

---

<!-- _class: display -->


Thank you!
