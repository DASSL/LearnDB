@echo off
echo "Exporting Rules:"
%windir%/System32/inetsrv/appcmd list config "Default Web Site" -section:system.webServer/rewrite/rules -xml > "xml rules/rules.xml"
echo "Exporting Outbound Rules:"
%windir%/System32/inetsrv/appcmd list config "Default Web Site" -section:system.webServer/rewrite/outboundRules -xml > "xml rules/outboundRules.xml"
echo "Done exporting rules.
PAUSE