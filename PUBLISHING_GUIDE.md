# Publishing Guide

## Access Rule

Do not share your GitHub password or recovery codes.

Use one of these safe options:

- GitHub connector in Codex, if available.
- GitHub CLI with `gh auth login`.
- GitHub Desktop.
- A fine-scoped GitHub token only if absolutely necessary.

## Option A - Publish as a Portfolio Repository

Repository:

`omadigital23/PapaAmadouFall`

Suggested commands after GitHub authentication:

```powershell
cd "C:\Users\fallp\Music\bank of document\Papa_Amadou_Fall_GitHub_Portfolio"
git init
git add .
git commit -m "Polish bilingual technical support portfolio"
git remote add origin https://github.com/omadigital23/PapaAmadouFall.git
git push -u origin main
```

Then enable GitHub Pages:

- Settings
- Pages
- Source: GitHub Actions
- Run the `Deploy GitHub Pages` workflow

## Option B - Publish Profile README

Create a repository with the exact same name as your GitHub username.

Example:

If your GitHub username is `omadigital23`, create:

`omadigital23/omadigital23`

Then copy:

`profile-readme/README.md`

into that repository as:

`README.md`

## Before Publishing

Replace these placeholders:

- GitHub profile link
- LinkedIn URL
- Canadian phone number
- portfolio URL
- project repository links

## Recommended First Public Repositories

1. `technical-support-knowledge-base`
2. `bilingual-support-ticket-simulator`
3. `it-support-automation-scripts`
4. `oma-digital-portfolio`
5. `papa-amadou-fall-portfolio`
