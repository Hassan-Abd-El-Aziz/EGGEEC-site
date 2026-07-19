@echo off
cd /d "%~dp0"
echo Starting dev server... (open http://localhost:5173)
call npm run dev
pause
