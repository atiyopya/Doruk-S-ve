@echo off
setlocal

REM Doruk Söve All-in-One Dev Launcher
REM Usage: setup_dev_all.bat [port]
set "ROOT_DIR=%~dp0"
if "%ROOT_DIR:~-1%"=="\\" set "ROOT_DIR=%ROOT_DIR:~0,-1%"
cd /d "%ROOT_DIR%" 2>NUL
if errorlevel 1 (
  echo Could not access project root: %ROOT_DIR%
  pause
  exit /b 1
)

set PORT=%~1
if "%PORT%"=="" set PORT=3000
echo Starting Next.js dev server on port %PORT%...

if not exist "node_modules" (
  echo Installing dependencies (npm.cmd install) ...
  npm.cmd install
  if errorlevel 1 (
    echo Dependency installation failed. See logs for details.
    pause
    exit /b 1
  )
)

start "Doruk Söve - Dev" cmd /k "set PORT=%PORT% & cd /d \"%ROOT_DIR%\" & npm.cmd run dev"
echo Dev server launched. Open http://localhost:%PORT%
pause
