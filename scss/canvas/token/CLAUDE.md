# token

Manages design tokens (numeric values)

## Purpose

- Color palette
- Font sizes
- Font weights
- Line heights

## Definition Method

Define as CSS variables with semantic names.

## File Structure

- `_typography.scss` - Font-related tokens
- `_color.scss` - Color palette

## Typography Tokens

### Font Size

Base size: `--font-size-base` = 40px

Each size is defined in `em` units as relative values to the base size.

| Token Name | CSS Variable | Value | px Value |
|------------|--------------|-------|----------|
| 3XS | `--font-size-3xs` | 0.5em | 20px |
| XXS | `--font-size-xxs` | 0.6em | 24px |
| XS | `--font-size-xs` | 0.7em | 28px |
| S | `--font-size-s` | 0.85em | 34px |
| M | `--font-size-m` | 1em | 40px |
| L | `--font-size-l` | 1.15em | 46px |
| XL | `--font-size-xl` | 1.3em | 52px |
| XXL | `--font-size-xxl` | 2em | 80px |
| 3XL | `--font-size-3xl` | 2.5em | 100px |

### Font Weight

| Token Name | CSS Variable | Value |
|------------|--------------|-------|
| normal | `--font-weight-normal` | 400 |
| bold | `--font-weight-bold` | 700 |
| black | `--font-weight-black` | 900 |

### Line Height

| Token Name | CSS Variable | Value |
|------------|--------------|-------|
| tight | `--line-height-tight` | 1.2 |
| normal | `--line-height-normal` | 1.45 |
| loose | `--line-height-loose` | 2 |

## Color Palette Tokens

### Arguments

All arguments are required. Specify appropriate values for each theme.

| Argument | Description |
|----------|-------------|
| `$color-blue` | Accent color (links, etc.) |
| `$color-black` | Black |
| `$color-white` | White |
| `$color-grey-lightest` | Lightest grey |
| `$color-grey-lighter` | Lighter grey |
| `$color-grey-light` | Light grey |
| `$color-grey-medium` | Medium grey |
| `$color-grey-dark` | Dark grey |
| `$color-grey-darker` | Darker grey |
| `$color-grey-darkest` | Darkest grey |

### CSS Variables

| Variable | Description |
|----------|-------------|
| `--color-black` | Black |
| `--color-white` | White |
| `--color-grey-lightest` | Lightest grey |
| `--color-grey-lighter` | Lighter grey |
| `--color-grey-light` | Light grey |
| `--color-grey-medium` | Medium grey |
| `--color-grey-dark` | Dark grey |
| `--color-grey-darker` | Darker grey |
| `--color-grey-darkest` | Darkest grey |
| `--color-blue` | Accent color |
