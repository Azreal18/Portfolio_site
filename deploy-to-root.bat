@echo off
echo Building site...
call npm run build

echo.
echo Copying built files to root...

REM Remove old build files from root (but keep source files)
if exist assets rmdir /s /q assets
if exist backup rmdir /s /q backup

REM Copy dist contents to root
xcopy /E /I /Y dist\assets assets
xcopy /E /I /Y dist\backup backup
copy /Y dist\index.html index-built.html

echo.
echo ===================================
echo Build complete!
echo.
echo NEXT STEPS:
echo 1. Review index-built.html
echo 2. Replace your index.html with index-built.html:
echo    move /Y index-built.html index.html
echo 3. Commit and push to GitHub
echo ===================================
pause
