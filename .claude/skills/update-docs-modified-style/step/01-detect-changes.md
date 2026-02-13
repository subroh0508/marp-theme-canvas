# Step 1: Detect Changes

Detect modified SCSS files in `scss/canvas/` by comparing with the main branch.

## Procedure

1. Detect modified files (status: M) from the diff with the main branch:
   ```bash
   # Committed changes
   git diff --name-status $(git merge-base HEAD main)...HEAD -- scss/canvas/

   # Uncommitted staged/unstaged changes
   git diff --name-status HEAD -- scss/canvas/
   ```

2. From all results, filter only **modified files** (status `M`). Exclude `CLAUDE.md` and `_index.scss` files.

3. For each modified file, show the diff and determine the type of changes:
   ```bash
   git diff $(git merge-base HEAD main)...HEAD -- {file-path}
   ```

   Classify changes into:
   - **Mixin argument added/removed/renamed**: Changes to `@mixin configure()` parameter list
   - **CSS variable added/removed/renamed**: Changes to CSS variable declarations (`--*`)
   - **Selector added/removed/changed**: Changes to CSS selectors
   - **Property changed**: Changes to CSS property values or rules

4. Display the detection results as a list:

   ```
   Detected modified SCSS files:
   - scss/canvas/{category}/_{name}.scss (category: {category})
     Changes: {list of change types}
   ```

5. If no modified files are detected, notify the user and **stop execution** (do not proceed to subsequent steps):

   ```
   No modified SCSS files detected. Nothing to do.
   ```
