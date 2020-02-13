@ECHO OFF
REM importRules.bat - LearnDB

REM Adam Jeniski, Caleb Garrick

REM CC 4.0 BY-NC-SA
REM https://creativecommons.org/licenses/by-nc-sa/4.0/

REM Copyright (c) 2019- DASSL. ALL RIGHTS RESERVED.

REM ALL ARTIFACTS PROVIDED AS IS. NO WARRANTIES EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.


REM Batch file to import inbound and outbound rules to IIS ARR from 'rules.xml' and 'outboundRules.xml'
REM USAGE: importRules.bat
REM Uses the AppCmd program included with IIS
REM https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/jj635852(v=ws.11)

echo "Importing rules:"
%windir%/System32/inetsrv/appcmd set config "Default Web Site" -in < rules.xml
echo "Importing outbound rules:"
%windir%/System32/inetsrv/appcmd set config "Default Web Site" -in < outboundRules.xml
echo "Done importing all rules."
PAUSE
