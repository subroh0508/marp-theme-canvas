# Step 1: Detect Changes

Detect newly added SCSS files in `scss/canvas/` by comparing with the main branch.

## Procedure

1. Get the current branch name:
   ```bash
   git branch --show-current
   ```

2. Detect newly added files (status: A) from the diff with the main branch:
   ```bash
   # Committed changes
   git diff --name-status $(git merge-base HEAD main)...HEAD -- scss/canvas/

   # Uncommitted staged changes
   git diff --name-status HEAD -- scss/canvas/

   # Untracked files
   git ls-files --others --exclude-standard -- scss/canvas/
   ```

3. From all results, filter only **new files** (status `A` from git diff, or untracked files). Exclude `CLAUDE.md` and `_index.scss` files.

4. Determine the category for each file based on the directory path:
   - `scss/canvas/token/` → token
   - `scss/canvas/component/` → component
   - `scss/canvas/common-layout/` → common-layout
   - `scss/canvas/decorator/` → decorator
   - `scss/canvas/slide-pattern/` → slide-pattern

5. Display the detection results as a list:

   ```
   Detected new SCSS files:
   - scss/canvas/{category}/_{name}.scss (category: {category})
   ```

6. If no new files are detected, notify the user and **stop execution** (do not proceed to subsequent steps):

   ```
   No new SCSS files detected. Nothing to do.
   ```
