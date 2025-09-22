@echo off
echo Starting ERP-Lite Application...
echo.
echo Starting Frontend Server (with integrated API routes)...
start "Frontend Server" cmd /k "cd frontend && npm run dev"
echo.
echo Server is starting...
echo Application: http://localhost:3000
echo.
pause

