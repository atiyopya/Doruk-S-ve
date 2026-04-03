@echo off
setlocal

REM Doruk Söve Dev Launcher
REM Assumes this script resides in the project root on Desktop
set "ROOT_DIR=%~dp0"
if "%ROOT_DIR:~-1%"=="\\" set "ROOT_DIR=%ROOT_DIR:~0,-1%"

echo [Doruk Söve] Development launcher starting in: %ROOT_DIR%
cd /d "%ROOT_DIR%" 2>NUL
if errorlevel 1 (
  echo Could not access project root: %ROOT_DIR%
  pause
  exit /b 1
)

if not exist "package.json" (
  echo package.json not found in %ROOT_DIR%. Ensure you are in the project root.
  pause
  exit /b 1
)

REM Install dependencies if missing
if not exist "node_modules" (
  echo Installing dependencies...
  REM Use PowerShell to tee output to log if available, otherwise fallback
  where powershell >nul 2>&1
  if %ERRORLEVEL%==0 (
    powershell -Command "npm.cmd install 2>&1 | Tee-Object -FilePath '%ROOT_DIR%\\setup_dev.log' -Append" 
  ) else (
    npm.cmd install >> "%ROOT_DIR%\\setup_dev.log" 2>&1
  )
  if errorlevel 1 (
    echo Dependency installation failed. See setup_dev.log for details.
    pause
    exit /b 1
  )
)

REM Start dev server in a new window
echo Starting Next.js dev server...
set "PORT=%~1"
if "%PORT%"=="" set "PORT=3000"
echo Starting Next.js dev server on port %PORT%...
start "Doruk Söve - Dev" cmd /k "set PORT=%PORT% & cd /d \"%ROOT_DIR%\" & npm.cmd run dev"

REM Let user know how to access
echo Dev server launched. Open http://localhost:3000
pause
