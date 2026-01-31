# token

Design token configuration for black-canvas theme

## Purpose

Calls mixins defined in `canvas/token` and sets theme-specific values.

## File Structure

- `typography.scss` - Typography settings (uses default values)
- `color.scss` - Color palette settings

## Color Palette Settings

Dark theme color palette based on Tailwind CSS slate 50-300, 800-950.

| Argument | Value | Tailwind |
|----------|-------|----------|
| `$color-blue` | `#60a5fa` | blue-400 |
| `$color-black` | `#000` | - |
| `$color-white` | `#fff` | - |
| `$color-grey-lightest` | `#f8fafc` | slate-50 |
| `$color-grey-lighter` | `#f1f5f9` | slate-100 |
| `$color-grey-light` | `#e2e8f0` | slate-200 |
| `$color-grey-medium` | `#cbd5e1` | slate-300 |
| `$color-grey-dark` | `#1e293b` | slate-800 |
| `$color-grey-darker` | `#0f172a` | slate-900 |
| `$color-grey-darkest` | `#020617` | slate-950 |
