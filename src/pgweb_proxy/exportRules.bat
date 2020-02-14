@ECHO OFF
REM exportRules.bat - LearnDB

REM Adam Jeniski, Caleb Garrick

REM Licensed to other under CC 4.0 BY-NC-SA
REM https://creativecommons.org/licenses/by-nc-sa/4.0/

REM Copyright (c) 2019- DASSL. ALL RIGHTS RESERVED.

REM ALL ARTIFACTS PROVIDED AS IS. NO WARRANTIES EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

REM Batch file to export inbound and outbound rules from IIS ARR to 'rules.xml' and 'outboundRules.xml'
REM USAGE: exportRules.bat
REM Uses the AppCmd program included with IIS
REM https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/jj635852(v=ws.11)


echo "Exporting rules:"
%windir%/System32/inetsrv/appcmd list config "Default Web Site" -section:system.webServer/rewrite/rules -xml > rules.xml
echo "Exporting outbound rules:"
%windir%/System32/inetsrv/appcmd list config "Default Web Site" -section:system.webServer/rewrite/outboundRules -xml > outboundRules.xml
echo "Done exporting all rules.
PAUSE
