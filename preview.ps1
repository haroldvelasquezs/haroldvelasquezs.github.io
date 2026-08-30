# Local Jekyll preview — same flow as jekyll_rouge.txt
# Usage:  .\preview.ps1
# Then open http://localhost:4000

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

function Refresh-Path {
  $machine = [Environment]::GetEnvironmentVariable("Path", "Machine")
  $user = [Environment]::GetEnvironmentVariable("Path", "User")
  $env:Path = "$machine;$user"
}

Refresh-Path

if (-not (Get-Command ruby -ErrorAction SilentlyContinue)) {
  Write-Error "Ruby is not installed. Install Ruby+DevKit 3.2 (see https://jekyllrb.com/docs/installation/windows/) then reopen this terminal."
}

if (-not (Get-Command bundle -ErrorAction SilentlyContinue)) {
  gem install bundler
  Refresh-Path
}

Write-Host "Installing gems (first time can take a few minutes)..."
bundle install

Write-Host "Starting http://localhost:4000  — edit files and refresh the browser."
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --watch --force_polling
