# Step 3: Update CLAUDE.md

Update the CLAUDE.md files in the `scss/canvas/` directory to document the new SCSS file.

## Procedure

1. Read the new SCSS file and understand:
   - CSS selectors / class names used
   - Purpose of the file
   - `@mixin configure()` arguments and their mapping to CSS variables

2. Read the existing `scss/canvas/{category}/CLAUDE.md` file.

3. Add a new row to the appropriate table.

## Table Formats by Category

### component

Add to the "Existing Components" table:

```markdown
| File | Selector | Purpose |
|------|----------|---------|
| `_{name}.scss` | `{selectors}` | {purpose} |
```

### common-layout

Add to the "Existing Layouts" table:

```markdown
| File | Selector | Purpose |
|------|----------|---------|
| `_{name}.scss` | `{selectors}` | {purpose} |
```

### decorator

Add to the "Existing Decorators" table:

```markdown
| File | Class | Purpose |
|------|-------|---------|
| `_{name}.scss` | `{class-names}` | {purpose} |
```

### token

Add to the "File Structure" list and add new token tables if applicable.

### slide-pattern

Add to the "Pattern List" table:

```markdown
| File | Class Name | Purpose |
|------|------------|---------|
| `_{name}.scss` | `{class-name}` | {purpose} |
```

Also add an "Argument to CSS Variable Mapping" section:

```markdown
### _{name}.scss

| Argument | CSS Variable | Target |
|----------|--------------|--------|
| `${arg-name}` | `--{css-var-name}` | {target-selector} |
```

## Additional Updates

4. If applicable, update `scss/canvas/CLAUDE.md`:
   - Update the "Directory Structure" section if a new subdirectory was added

## Commit

After updating the CLAUDE.md file(s), commit and push:

```
docs: update CLAUDE.md for {name}
```
