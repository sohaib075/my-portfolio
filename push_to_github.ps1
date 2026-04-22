#!/usr/bin/env powershell

Set-Location "d:\my-portfolio-main"

Write-Host "=== Initializing Git Repository ===" -ForegroundColor Green
git init
Write-Host "✓ Git initialized`n" -ForegroundColor Green

Write-Host "=== Configuring Git User ===" -ForegroundColor Green
git config user.name "Muhammad Sohaib"
git config user.email "sohaibmuhammad429@gmail.com"
Write-Host "✓ Git configured`n" -ForegroundColor Green

Write-Host "=== Adding Remote Repository ===" -ForegroundColor Green
git remote add origin https://github.com/sohaib075/my-portfolio.git
Write-Host "✓ Remote added`n" -ForegroundColor Green

Write-Host "=== Staging All Files ===" -ForegroundColor Green
git add .
Write-Host "✓ Files staged`n" -ForegroundColor Green

Write-Host "=== Checking Git Status ===" -ForegroundColor Green
git status
Write-Host ""

Write-Host "=== Creating Commit ===" -ForegroundColor Green
git commit -m "Portfolio: Performance optimization and profile picture enhancement

Performance Improvements:
- Implement lazy route loading for About, Skills, Projects, Contact pages
- Reduce frontend bundle size through code splitting
- Reduce AnimatedBackground particles from 40 to 20 (-50%)
- Reduce LoadingScreen particles from 30 to 15 (-50%)
- Optimize Vite config with code splitting and minification
- Remove console logs in production build

Visual Enhancements:
- Add glowing circular border to profile picture
- Gradient border with rotating orbital rings
- Improved glass shine effect

Bug Fixes:
- Fix CV filename mismatch
- Resolve TypeScript compilation errors
- Remove unused imports"

Write-Host "✓ Commit created`n" -ForegroundColor Green

Write-Host "=== Pushing to GitHub ===" -ForegroundColor Green
git push -u origin main
Write-Host "`n✓ Push completed`n" -ForegroundColor Green

Write-Host "✅ All done! Your code is now on GitHub" -ForegroundColor Green
