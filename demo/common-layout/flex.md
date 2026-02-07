---
marp: true
theme: default
paginate: true
footer: scss/canvas/common-layout/_flex.scss
---

## justify-content utilities

| Class | Value |
|-------|-------|
| `justify-start` | `flex-start` |
| `justify-end` | `flex-end` |
| `justify-center` | `center` |
| `justify-between` | `space-between` |
| `justify-around` | `space-around` |
| `justify-evenly` | `space-evenly` |

---

## align-items utilities

| Class | Value |
|-------|-------|
| `items-start` | `flex-start` |
| `items-end` | `flex-end` |
| `items-center` | `center` |
| `items-baseline` | `baseline` |
| `items-stretch` | `stretch` |

---

<!-- _class: justify-center -->

## `justify-center`

Content is centered vertically (main axis).

---

<!-- _class: items-center -->

## `items-center`

Content is centered horizontally (cross axis).

---

<!-- _class: justify-center items-center -->

## `justify-center items-center`

Content is centered both horizontally and vertically.

---

<!-- _class: justify-end items-end -->

## `justify-end items-end`

Content is aligned to the bottom-right corner.

---

<!-- _class: justify-between -->

## `justify-between`

First item

Second item

Third item

---

<!-- _class: justify-evenly -->

## `justify-evenly`

First item

Second item

Third item

---

<!-- _class: cols items-center -->

## Combine with columns: `cols items-center`

<div class="col">

![](https://picsum.photos/400/600?image=30)

</div>
<div class="col">

**Vertically centered text**

Content is aligned to the center of the image height.

- Point A
- Point B
- Point C

</div>

---

<!-- _class: cols items-end -->

## Combine with columns: `cols items-end`

<div class="col">

![](https://picsum.photos/400/600?image=40)

</div>
<div class="col">

**Bottom aligned text**

Content is aligned to the bottom of the image.

</div>

---

<!-- _class: cols -->

## Apply to col

<div class="col justify-center">

`col justify-center`

Content is vertically centered within the column.

</div>
<div class="col">

`col`

Content starts from the top.

- Item A
- Item B
- Item C
- Item D

</div>

---

<!-- _class: cols -->

## Apply to col

<div class="col items-center">

`col items-center`

Horizontally centered within column.

</div>
<div class="col items-end">

`col items-end`

Aligned to the right edge.

</div>

---

<!-- _class: cols -->

## Apply to col

<div class="col justify-center items-center">

`col justify-center items-center`

Both vertically and horizontally centered within column.

</div>
<div class="col">

`col`

Content starts from top-left.

- Item A
- Item B
- Item C

</div>
