---
marp: true
theme: black-canvas
paginate: true
header: ""
footer: "Footer"
style: |
  :root {
    --color-primary: #3b91c4;
    --color-accent: #ead7a4;
  }
---

<!-- _class: title -->
<!-- _paginate: false -->
<!-- _header: "Black Canvas Demo" -->

# Black Canvas Demo

Version v0.0.3
Subroh Nishikori @subroh_0508

---

<!-- _class: agenda -->
<!-- _header: "Black Canvas Demo" -->

## Black Canvas Theme Structure

- **component/**
  - Styles for elements commonly used across slides
  - Headings, text decorations, blockquotes, tables, code, etc.
- **page/**
  - Page styles specialized for specific purposes
  - Title, section divider, table of contents, agenda, display

---

<!-- _class: section -->
<!-- _paginate: false -->
<!-- _header: "Black Canvas Demo" -->

Page Styles

---

<!-- _class: title -->
<!-- _header: "Demo Slide (page/_title.scss)" -->

# Title Page<br/>Multiple lines display like this<small>- With a subtitle -</small>

Event name / Presentation date
Presenter name

---

<!-- _class: section -->
<!-- _header: "Demo Slide (page/_section.scss)" -->

Section Divider Page Demo

---

<!-- _class: toc -->
<!-- _header: "Demo Slide (page/_toc.scss)" -->

## Table of Contents

1. First Section
1. Second Section
   - Subsection 1
   - Subsection 2
1. Third Section

---

<!-- _class: agenda -->
<!-- _header: "Demo Slide (page/_agenda.scss)" -->

## Today's Topics

I want everyone to take away these 3 key insights!

- Insight 1
  - Detailed explanation goes here
  - Additional information
- Insight 2
  - Detailed explanation goes here
- Insight 3

---

<!-- _class: display -->
<!-- _header: "Demo Slide (page/_display.scss)" -->

Display short text prominently

---

<!-- _class: display -->
<!-- _header: "Demo Slide (page/_display.scss)" -->

![](https://picsum.photos/720?image=70)

Font size doesn't increase when an image is present

---

<!-- _class: display -->
<!-- _header: "Demo Slide (page/_display.scss)" -->

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/album/4fEBChYDmfbCjnItjY8KRq?utm_source=generator" width="50%" height="704" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

iframes are also supported

---

<!-- _class: section -->
<!-- _paginate: false -->
<!-- _header: "Black Canvas Demo" -->

Component Styles

---

<!-- _header: "Demo Slide (component/_section.scss)" -->

## Slide Body Layout

`component/_section.scss` defines the base layout for the entire slide.

- Width and height
- Padding
- Background color and text color
- Font settings
- List indentation

---

<!-- _header: "Demo Slide (component/_heading.scss)" -->

# Heading 1 (H1)
## Heading 2 (H2)
### Heading 3 (H3)
#### Heading 4 (H4)
##### Heading 5 (H5)
###### Heading 6 (H6)

This is normal paragraph text. Check the spacing and font size differences from headings.

---

<!-- _header: "Demo Slide (component/_text-decorator.scss)" -->

## Text Decoration

**Bold** text.

*Italic* text.

***Bold and italic*** text.

~~Strikethrough~~ text.

A sentence containing <mark>highlighted text</mark>.

You can add <ruby>**ruby text**<rp>(</rp><rt>furigana</rt><rp>)</rp></ruby> annotations.

---

<!-- _header: "Demo Slide (component/_blockquote.scss)" -->

## Blockquote

> This is a blockquote.
> It can span multiple lines.

Check the spacing from normal text.

> Nested blockquote
> > A quote within a quote

---

<!-- _header: "Demo Slide (component/_table.scss)" -->

## Table (Basic)

*Styles follow [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

| Item | Description | Notes |
|------|-------------|-------|
| Marp | Markdown presentations | Open source |
| VS Code | Editor | Extension support |
| CLI | Command line | PDF export available |

---

<!-- _header: "Demo Slide (component/_table.scss)" -->

## Table (Alignment)

*Styles follow [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

| Left | Center | Right |
|:-----|:------:|------:|
| A | B | C |
| Left | Center | Right |
| 123 | 456 | 789 |

---

<!-- _header: "Demo Slide (component/_code.scss)" -->

## Inline Code

*Styles follow [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

Text containing `inline code`.

A sentence combining normal text, **bold**, *italic*, and `code`.

---

<!-- _header: "Demo Slide (component/_code.scss, prettylights/)" -->

## Code Block

*Styles follow [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

```javascript
// JavaScript sample
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("World");
```

---

<!-- _header: "Demo Slide (component/_code.scss, prettylights/)" -->

## Code Block (Multiple Languages)

*Styles follow [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

```python
# Python sample
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)
```

```bash
# Shell script
echo "Hello, Marp!"
```

---

<!-- _header: "Demo Slide (component/_header.scss, _footer.scss, _pagination.scss)" -->

## Header, Footer, Page Number

- **Header**: Displayed at the top of the slide (shows SCSS file name in this slide)
- **Footer**: Displayed at the bottom of the slide (shows "January 2026" in this slide)
- **Page number**: Displayed at the bottom right

---

<!-- _paginate: false -->
<!-- _header: "" -->
<!-- _footer: "" -->

## Header, Footer, Page Number (Hidden)

This slide hides them with the following settings:

- `_paginate: false`
- `_header: ""`
- `_footer: ""`

---

<!-- _class: columns -->
<!-- _header: "Demo Slide (component/_columns.scss)" -->

<div class="column">

## Usage 1: `_class: columns`

The entire slide becomes a column layout

- Specify `<!-- _class: columns -->`
- Only write `<div class="column">`
- Useful when you want to split the entire slide

</div>
<div class="column">

## Right Column

`<div class="columns">` is not needed

- Item A
- Item B
- Item C

</div>

---

<!-- _header: "Demo Slide (component/_columns.scss)" -->

## Usage 2: `<div class="columns">`

> You can place text before and after columns

<div class="columns">
<div class="column">

**Left Column**

- Item A
- Item B

</div>
<div class="column">

**Right Column**

- Item C
- Item D

</div>
</div>

> You can continue writing after the columns

---

<!-- _header: "Demo Slide (component/_columns.scss)" -->

## Column Layout (Width Specified)

<div class="columns">
<div class="column-4">

![](https://picsum.photos/1200/800?image=50)

</div>
<div class="column-6">

**Text Content**

Layout example for placing images and text side by side

- `column-4`: Ratio of 4
- `column-6`: Ratio of 6

</div>
</div>

---

<!-- _class: section -->
<!-- _paginate: false -->
<!-- _header: "Black Canvas Demo" -->

Others

---

<!-- _header: "Demo Slide (Lists)" -->

## Lists

### Unordered List

- List item 1
- List item 2
  - Nested item 2-1
  - Nested item 2-2
- List item 3

---

<!-- _header: "Demo Slide (Lists)" -->

## Lists

### Ordered List

1. First item
2. Second item
   1. Nested numbered item
   2. Nested numbered item
3. Third item

---

<!-- _header: "Demo Slide (Lists)" -->

## Lists

### Unordered List (Click to reveal items one by one)

* List item 1
* List item 2
  - Nested item 2-1
  - Nested item 2-2
* List item 3

---

<!-- _header: "Demo Slide (Links)" -->

## Links

- [Marp Official Site](https://marp.app/)
- [GitHub - Marp](https://github.com/marp-team/marp)
- Auto-link: https://marp.app/

---

<!-- _header: "Demo Slide (Math)" -->

## Math (KaTeX)

Inline math: $E = mc^2$

Block math:

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

$$
\int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

---

<!-- _header: "Demo Slide (Images)" -->

## Images (Basic)

![width:200px](https://marp.app/assets/marp.svg)

Caption text placed below the image

---

<!-- _header: "Demo Slide (Images)" -->

## Image Size Specification

![width:100px](https://marp.app/assets/marp.svg) ![width:150px](https://marp.app/assets/marp.svg) ![width:200px](https://marp.app/assets/marp.svg)

You can specify width with `![width:Npx]`

---

<!-- _header: "Demo Slide (Background Images)" -->

## Background Image (Left)

![bg left:40%](https://picsum.photos/720?image=29)

- Background image placed on the left
- Content displayed on the right
- Specify width with `bg left:40%`

---

<!-- _header: "Demo Slide (Background Images)" -->

## Background Image (Right)

![bg right:40%](https://picsum.photos/720?image=27)

- Background image placed on the right
- Content displayed on the left
- Specify width with `bg right:40%`

---

<!-- _header: "Demo Slide (Background Images)" -->

## Background Image (Fit)

![bg fit](https://picsum.photos/720?image=30)

Fits the background image to the slide

---

<!-- _header: "Demo Slide (Background Images)" -->

## Background Image (Multiple)

![bg](https://picsum.photos/720?image=1)
![bg](https://picsum.photos/720?image=20)
![bg](https://picsum.photos/720?image=40)

Display 3 background images side by side

---

<!-- _header: "Demo Slide (HTML Elements)" -->

## HTML Elements

<div style="background: #1e293b; padding: 1em; border-radius: 8px;">
A box with custom styles applied
</div>

<br>

<sub>Subscript</sub> and <sup>superscript</sup> text

---

<!-- _header: "Demo Slide (Emoji)" -->

## Emoji

:smile: :heart: :thumbsup: :rocket: :star:

:warning: Warning
:bulb: Tip
:memo: Note

*Emoji support depends on the theme and environment

---

<!-- _header: "Demo Slide (Scoped Style)" -->

## Scoped Style

<style scoped>
h2 {
  color: #e74c3c;
}
p {
  font-size: 0.9em;
  color: #94a3b8;
}
</style>

Custom styles applied only to this slide.

The heading is red, and paragraph text is smaller and gray.

---

<!-- _class: display -->
<!-- _paginate: false -->
<!-- _header: "Black Canvas Demo" -->

Thank you
