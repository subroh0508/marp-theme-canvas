---
marp: true
theme: default
paginate: true
footer: scss/canvas/token/_typography.scss
---

## Font Size

Base size: `--font-size-base` = 40px

| CSS Variable | Value | px |
|--------------|-------|----|
| `--font-size-3xs` | 0.5em | 20px |
| `--font-size-xxs` | 0.6em | 24px |
| `--font-size-xs` | 0.7em | 28px |
| `--font-size-s` | 0.85em | 34px |
| `--font-size-m` | 1em | 40px |
| `--font-size-l` | 1.15em | 46px |
| `--font-size-xl` | 1.3em | 52px |
| `--font-size-xxl` | 2em | 80px |
| `--font-size-3xl` | 2.5em | 100px |

---

## Font Size Preview

<div style="line-height: 1.4;">
<div style="font-size: 0.5em;">3XS (0.5em / 20px)</div>
<div style="font-size: 0.6em;">XXS (0.6em / 24px)</div>
<div style="font-size: 0.7em;">XS (0.7em / 28px)</div>
<div style="font-size: 0.85em;">S (0.85em / 34px)</div>
<div style="font-size: 1em;">M (1em / 40px)</div>
<div style="font-size: 1.15em;">L (1.15em / 46px)</div>
<div style="font-size: 1.3em;">XL (1.3em / 52px)</div>
<div style="font-size: 2em;">XXL (2em / 80px)</div>
</div>

---

## Font Weight

| CSS Variable | Value |
|--------------|-------|
| `--font-weight-normal` | 400 |
| `--font-weight-bold` | 700 |
| `--font-weight-black` | 900 |

<div style="margin-top: 1em;">
<div style="font-weight: 400;">Normal (400)</div>
<div style="font-weight: 700;">Bold (700)</div>
<div style="font-weight: 900;">Black (900)</div>
</div>

---

## Line Height

| CSS Variable | Value |
|--------------|-------|
| `--line-height-tight` | 1.2 |
| `--line-height-normal` | 1.45 |
| `--line-height-loose` | 2 |

---

## Line Height Preview

<div style="display: flex; gap: 24px; font-size: 0.8em;">
<div style="line-height: 1.2; flex: 1; padding: 8px; background: var(--color-grey-lightest, #f0f0f0); border-radius: 8px;">
<strong>Tight (1.2)</strong><br>
Line height is compressed. Suitable for headings.
</div>
<div style="line-height: 1.45; flex: 1; padding: 8px; background: var(--color-grey-lightest, #f0f0f0); border-radius: 8px;">
<strong>Normal (1.45)</strong><br>
Standard line height. Suitable for body text.
</div>
<div style="line-height: 2; flex: 1; padding: 8px; background: var(--color-grey-lightest, #f0f0f0); border-radius: 8px;">
<strong>Loose (2)</strong><br>
Expanded line height. Suitable for lists.
</div>
</div>
