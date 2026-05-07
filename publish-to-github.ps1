param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubUsername,

    [string]$RepoName = "papa-amadou-fall-portfolio"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path ".git")) {
    git init -b main
}

$remoteUrl = "https://github.com/$GitHubUsername/$RepoName.git"

$existingRemote = git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0 -and $existingRemote) {
    git remote set-url origin $remoteUrl
} else {
    git remote add origin $remoteUrl
}

git branch -M main
git status

Write-Host ""
Write-Host "Remote configured:" $remoteUrl
Write-Host "Pushing to GitHub. If Git asks you to sign in, use the browser login window."
Write-Host ""

git push -u origin main

