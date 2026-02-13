# Step 2: Gather Changes

Collect all changes since the last tag and generate release notes.

## Procedure

1. Get the latest tag (from Step 1).

2. Collect merged pull requests since the last tag:
   ```bash
   gh pr list --state merged --search "merged:>=$(git log <latest-tag> -1 --format=%aI)" --json number,title,author,labels --limit 100
   ```
   - If `gh` fails, fall back to extracting PR references from merge commits:
     ```bash
     git log <latest-tag>..HEAD --oneline --grep="Merge pull request"
     ```

3. Collect commits since the last tag (excluding merge commits):
   ```bash
   git log <latest-tag>..HEAD --oneline --no-merges
   ```

4. Get a summary of file changes:
   ```bash
   git diff --stat <latest-tag>..HEAD
   ```

5. Compose the release notes in the following Markdown format:

   ```markdown
   ## What's Changed

   - <PR title or commit description> (#<PR number> or commit hash)
   - ...

   **Full Changelog**: https://github.com/subroh0508/marp-theme-canvas/compare/<latest-tag>...v<next-version>
   ```

   Guidelines:
   - Group changes by PR when possible. If a commit is part of a PR, list only the PR, not individual commits.
   - For commits not associated with any PR, list them individually.
   - Keep descriptions concise (one line per change).
   - Exclude release commits (e.g., "Release vX.Y.Z") and documentation-only changes from the changelog.

6. Display the generated release notes to the user for review before proceeding.
