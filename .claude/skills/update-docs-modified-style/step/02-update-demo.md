# Step 2: Update Demo File

Update the existing demo file to reflect the SCSS changes.

## Procedure

1. Read the modified SCSS file and review the diff to understand what changed:
   - New/removed/renamed CSS variables
   - New/removed/changed selectors or class names
   - Changed default values

2. Read the corresponding `demo/{category}/{name}.md` file.

3. Update the demo file based on the type of changes:

### CSS Variables Added

- Add the new variable(s) to the "CSS Variables" table
- If the variable significantly changes behavior, add or update a customization example

### CSS Variables Removed

- Remove the variable(s) from the "CSS Variables" table
- Remove any customization examples that reference the removed variable(s)

### CSS Variables Renamed

- Update the variable name in the "CSS Variables" table
- Update all references in the customization examples (`<style scoped>` blocks and YAML code blocks)

### Selector/Class Name Changed

- Update the preview slides to use the new selector/class name
- Update any `<!-- _class: ... -->` directives
- Update `<style scoped>` blocks to target the new selector

### Default Value Changed

- Update the "Default" column in the "CSS Variables" table
- Update preview content if the visual appearance changed significantly

### New Functionality Added

- Add new preview slides demonstrating the new functionality
- Add corresponding CSS Variables entries if applicable

## Commit

After updating the demo file(s), commit and push:

```
docs: update demo for {name} to reflect SCSS changes
```
