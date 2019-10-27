@echo off
echo "Exporting Rules:"
%windir%/System32/inetsrv/appcmd list config "Default Web Site" -section:system.webServer/rewrite/rules -xml > rules.xml
echo "Exporting Outbound Rules:"
%windir%/System32/inetsrv/appcmd list config "Default Web Site" -section:system.webServer/rewrite/outboundRules -xml > outboundRules.xml
echo "Done exporting rules.
PAUSE