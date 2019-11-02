@ECHO OFF
REM importRules.bat - LearnDB

REM Adam Jeniski, Caleb Garrick

REM CC 4.0 BY-NC-SA
REM https://creativecommons.org/licenses/by-nc-sa/4.0/

REM Copyright (c) 2017- DASSL. ALL RIGHTS RESERVED.

REM ALL ARTIFACTS PROVIDED AS IS. NO WARRANTIES EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.


REM Batch file to import inbound and outbound rules to IIS ARR from 'rules.xml' and 'outboundRules.xml'
REM USAGE: importRules.bat
REM Will read 2 files named 'rules.xml' and 'outboundRules.xml' from the current directory

echo "Importing Rules:"
%windir%/System32/inetsrv/appcmd set config "Default Web Site" -in < rules.xml
echo "Importing Outbound Rules:"
%windir%/System32/inetsrv/appcmd set config "Default Web Site" -in < outboundRules.xml
echo "Done importing rules."
PAUSE
