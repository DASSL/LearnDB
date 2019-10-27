@echo off
echo "Importing Rules:"
%windir%/System32/inetsrv/appcmd set config "Default Web Site" -in < rules.xml
echo "Importing Outbound Rules:"
%windir%/System32/inetsrv/appcmd set config "Default Web Site" -in < outboundRules.xml
echo "Done importing rules."
PAUSE