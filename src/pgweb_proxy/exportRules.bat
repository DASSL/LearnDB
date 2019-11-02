@ECHO OFF
REM exportRules.bat - LearnDB

REM Adam Jeniski, Caleb Garrick

REM CC 4.0 BY-NC-SA
REM https://creativecommons.org/licenses/by-nc-sa/4.0/

REM Copyright (c) 2017- DASSL. ALL RIGHTS RESERVED.

REM ALL ARTIFACTS PROVIDED AS IS. NO WARRANTIES EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.


REM Batch file to export inbound and outbound rules from IIS ARR
REM USAGE: exportRules.bat
REM Will output 2 files named 'rules.xml' and 'outboundRules.xml'

echo "Exporting Rules:"
%windir%/System32/inetsrv/appcmd list config "Default Web Site" -section:system.webServer/rewrite/rules -xml > rules.xml
echo "Exporting Outbound Rules:"
%windir%/System32/inetsrv/appcmd list config "Default Web Site" -section:system.webServer/rewrite/outboundRules -xml > outboundRules.xml
echo "Done exporting rules.
PAUSE
