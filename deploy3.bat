@echo off
title Robert & Diana Wedding Site Deploy

echo.
echo ==========================================
echo Deploying Robert & Diana Wedding Website
echo ==========================================
echo.

git add .

git commit -m "Website update"

git push origin main

echo.
echo ==========================================
echo Deployment Complete!
echo ==========================================
echo.

echo Repository:
echo https://github.com/El-Diablo457/robert-diana-wedding

echo.
echo Website:
echo https://el-diablo457.github.io/robert-diana-wedding/

echo.

start https://el-diablo457.github.io/robert-diana-wedding/

pause
