---
marp: true
theme: default
paginate: true
footer: scss/canvas/component/_paragraph.scss
---

## Paragraph Preview

This is a paragraph. Paragraphs are block-level elements used for body text in slides. They inherit font settings from the section element.

This is another paragraph. The margin between paragraphs is handled by the default styles. Note that the top margin is removed for cleaner layout.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

---

## Styles Applied

```scss
p {
  margin-top: 0;
}
```

Paragraphs inherit the following from the section element:

- Font size: `var(--section-font-size)` = `var(--font-size-m)` (40px)
- Font weight: `var(--section-font-weight)` = `var(--font-weight-normal)` (400)
- Line height: `var(--section-line-height)` = `var(--line-height-loose)` (2)
- Color: `var(--section-color-text)`

---

## Paragraph with Other Elements

A paragraph can contain **bold text**, *italic text*, `inline code`, and [links](https://example.com).

You can also include <mark>highlighted text</mark> and <ruby>ruby text<rp>(</rp><rt>annotation</rt><rp>)</rp></ruby>.

This creates flexible, readable content blocks.
