# Demo Files

This directory contains demo files for previewing Marp Theme Canvas styles.

## Directory Structure

```
demo/
├── token/                  # Design token demos
│   ├── color.md            # Color palette
│   ├── typography.md       # Font size, weight, line height
│   └── corner-radius.md    # Border radius tokens
├── element/                # HTML element demos
│   ├── heading.md          # H1-H6 headings
│   ├── paragraph.md        # Paragraph text
│   ├── list.md             # Unordered/ordered lists
│   ├── link.md             # Links
│   ├── blockquote.md       # Blockquotes
│   ├── table.md            # Tables
│   ├── code.md             # Inline code and code blocks
│   ├── hr.md               # Horizontal rules
│   ├── text-decorator.md   # Strong, mark, ruby
│   └── prettylights.md     # Syntax highlighting
├── component/              # Component demos
│   ├── section.md          # Slide base layout
│   ├── header.md           # Header
│   ├── footer.md           # Footer
│   └── pagination.md       # Page numbers
├── common-layout/          # Common layout demos
│   └── columns.md          # Multi-column layout
└── slide-pattern/          # Slide pattern demos
    ├── title.md            # Title page
    ├── section.md          # Section divider
    ├── toc.md              # Table of contents
    ├── agenda.md           # Agenda page
    └── display.md          # Display (text/image emphasis)
```

## Usage

### Preview with Theme

Use the serve scripts to preview with a specific theme:

```bash
# Preview with white-canvas theme
pnpm serve:white

# Preview with black-canvas theme
pnpm serve:black
```

Then open `http://localhost:8080` in your browser.

### Demo File Format

Each demo file follows this format:

1. **Title slide**: File name and SCSS path
2. **Default display**: Basic preview of the element/component
3. **CSS Variables**: List of customizable variables
4. **Customization example**: Override example using `<style scoped>`

### Theme Switching

All demo files use `theme: default` in the frontmatter. The actual theme is applied via CLI `--theme` option in the serve scripts.
