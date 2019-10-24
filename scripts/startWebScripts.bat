@echo off
cd %USERPROFILE%\Documents\Github\LearnDB\scripts\subScripts\
echo "Sarting Change Password Server..."
START startServer.bat
echo "Sarting pgweb..."
START startpgWeb.bat
PAUSE