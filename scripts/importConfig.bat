@echo off
echo "Importing Rules:"
%windir%/System32/inetsrv/appcmd set config "Default Web Site" -in < files/rules.xml
echo "Importing Outbound Rules:"
%windir%/System32/inetsrv/appcmd set config "Default Web Site" -in < files/outboundRules.xml
echo "Done importing rules."
PAUSE