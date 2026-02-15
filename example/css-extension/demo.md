---
marp: true
theme: warm
paginate: true
footer: Warm Theme Example
---

<!-- _class: title -->
<!-- _paginate: false -->

# Warm Theme<small>- CSS Extension Example -</small>

A warm-toned theme built with CSS variable overrides

---

<!-- _class: toc -->

## Table of Contents

1. Slide Patterns
1. Column Layout
1. Decorators
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
| `case-studies` | Card layout for case studies |

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

<!-- _class: case-studies -->

## Case Studies

<div class="col">

![](https://picsum.photos/600/400?image=10)

### Project Alpha

A data visualization dashboard built with modern web technologies.

</div>
<div class="col">

![](https://picsum.photos/600/400?image=20)

### Project Beta

Mobile-first responsive design for an e-commerce platform.

</div>
<div class="col">

![](https://picsum.photos/600/400?image=30)

### Project Gamma

Real-time collaboration tool for distributed teams.

</div>

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

<!-- _class: section -->
<!-- _paginate: false -->


Decorators

---

## Card

Use `<div class="card">` to add background color and rounded corners to elements.

<div class="card">

### Card Title

Card content with background and rounded corners.

</div>

<br/>

<div class="card">

A simple text card without a heading.

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

| Feature | Description | Status |
|---------|:----------:|:------:|
| CSS Extension | Variable override | Available |
| SCSS Extension | Full customization | Available |
| Custom Patterns | case-studies | New |

---

## Code

Inline code: `const theme = 'warm'`

```javascript
// Code block with syntax highlighting
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Warm'));
```

---

<!-- _class: display -->


Thank you!
