@echo off
title Robert & Diana Wedding Site Deploy

echo Adding files...
git add .

echo Committing changes...
git commit -m "Website update" 2>nul

echo Pushing to GitHub...
git push origin main

echo.
echo Site URL:
echo https://el-diablo457.github.io/robert-diana-wedding/

start https://el-diablo457.github.io/robert-diana-wedding/

pause