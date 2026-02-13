# Step 1: Pre-check

Verify the repository state and determine the next version.

## Procedure

1. Read `package.json` and display the current version.

2. Verify you are on the `main` branch:
   ```bash
   git branch --show-current
   ```
   - If not on `main`, **stop execution** and notify the user.

3. Get the latest tag:
   ```bash
   git describe --tags --abbrev=0
   ```

4. Check if there are changes in `css/` directory compared to the latest tag:
   ```bash
   git diff <latest-tag> HEAD -- css/
   ```
   - If there are no changes (diff is empty), use **AskUserQuestion** to ask whether to continue or abort:
     - header: "No changes"
     - question: "`css/` に前回リリース以降の変更がありません。リリースを続行しますか？"
     - options: "Continue" / "Abort"
   - If the user chooses to abort, **stop execution**.

5. Use **AskUserQuestion** to ask for the next version:
   - header: "Version"
   - question: "次のバージョンを入力してください（現在: v<current-version>）"
   - options: Suggest reasonable next versions based on the current version (patch, minor, major). The user can also enter a custom version via "Other".
