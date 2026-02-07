---
marp: true
theme: default
paginate: true
footer: scss/canvas/common-layout/_text-align.scss
---

## text-align utilities

| Class | Target | Value |
|-------|--------|-------|
| `text-left` | `p` | `left` |
| `text-center` | `p` | `center` |
| `text-right` | `p` | `right` |
| `text-justify` | `p` | `justify` |
| `text-start` | `p` | `start` |
| `text-end` | `p` | `end` |
| `text-has-img-left` | `p:has(img:not(.emoji))` | `left` |
| `text-has-img-center` | `p:has(img:not(.emoji))` | `center` |
| `text-has-img-right` | `p:has(img:not(.emoji))` | `right` |

---

<!-- _class: text-left -->

## `text-left`

This paragraph is aligned to the left. This is the default alignment for most languages.

---

<!-- _class: text-center -->

## `text-center`

This paragraph is centered. Useful for emphasis or decorative text.

---

<!-- _class: text-right -->

## `text-right`

This paragraph is aligned to the right. Common for dates or signatures.

---

<!-- _class: text-justify -->

## `text-justify`

This paragraph is justified. The text is spread out to align with both the left and right edges. This creates a clean, formal appearance often used in books and newspapers.

---

<!-- _class: cols -->

## Apply to col

<div class="col text-left">

`col text-left`

Left aligned text within column.

</div>
<div class="col text-center">

`col text-center`

Centered text within column.

</div>
<div class="col text-right">

`col text-right`

Right aligned text within column.

</div>

---

<!-- _class: text-has-img-left -->

## `text-has-img-left`

![w:200](https://picsum.photos/200/200?image=10)

Only images are aligned. This text remains unchanged.

---

<!-- _class: text-has-img-center -->

## `text-has-img-center`

![w:200](https://picsum.photos/200/200?image=20)

Only images are aligned. This text remains unchanged.

---

<!-- _class: text-has-img-right -->

## `text-has-img-right`

![w:200](https://picsum.photos/200/200?image=30)

Only images are aligned. This text remains unchanged.

---

<!-- _class: cols -->

## Apply to col (text-has-img)

<div class="col text-has-img-left">

`col text-has-img-left`

![w:150](https://picsum.photos/150/150?image=40)

</div>
<div class="col text-has-img-center">

`col text-has-img-center`

![w:150](https://picsum.photos/150/150?image=50)

</div>
<div class="col text-has-img-right">

`col text-has-img-right`

![w:150](https://picsum.photos/150/150?image=60)

</div>
