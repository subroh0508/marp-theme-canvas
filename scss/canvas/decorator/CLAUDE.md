# decorator

Manages decorative styles that require explicit class specification to apply

Includes both text decorations (emphasis, highlights) and visual decorations (borders, shadows, backgrounds).

## Definition Method

- Define as SCSS @mixin
- All variables are defined as mixin arguments
- Use semantic argument names
- Classes must be explicitly specified in Markdown to apply

## File Structure Template

```scss
// ===== _filename.scss =====
// Decorator description

@mixin configure($arg1, $arg2, $arg3: default) {
  :root {
    --decorator-arg1: #{$arg1};
    --decorator-arg2: #{$arg2};
    --decorator-arg3: #{$arg3};
  }

  section.classname {
    property: var(--decorator-arg1);
  }
}
```

## CSS Variable Naming Convention

CSS variable name: `--{decorator-name}-{argument-name}`
