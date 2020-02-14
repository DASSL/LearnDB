This document provides an overview of the Query server component of LearnDB.
It also lists the steps to install the Query server. 

## Overview
The Query server combines [pgweb](https://github.com/sosedoff/pgweb/releases) 
with a proxy web server. (The `README` in the root directory of this repo 
provides an architectural overview of LearnDB.)

The proxy is a web front-end and redirects incoming requests to pgweb. It then
dynamically rewrites some of the content pgweb returns so that the end result 
meets the requirements of LearnDB. 

Presently, the proxy server uses Microsoft Internet Information Services (IIS) 
and a couple of its extensions. However, the proxy could be any web server 
that acts as front-end, redirects incoming requests to pagweb, and rewrites 
pgweb content prior to returning a response to the client.

__Note:__ The proxy also provides an opportunity to provide secure transport 
(that is, support _https_).
  

## Installation
1. Install pgweb. Use the `--sessions` command-line option so that multiple 
   users/sessions are supported simultaneously. On Windows, it is better to 
   run pgweb as a [service](https://github.com/DASSL/LearnDB/wiki/pgweb-as-a-service)

2. Install IIS. A possibly-outdated [installation guide](https://github.com/DASSL/LearnDB/wiki/How-to-get-and-setup-a-free-SSL-certificate-for-Windows-Server-2016#add-iis-manager)
   is available, but please consult the documentation for your version of 
   Windows and IIS

3. Install the IIS extension ["URL Rewrite 2"](https://www.iis.net/downloads/microsoft/url-rewrite)
 
4. In the default site within IIS, configure the "URL Rewrite" item to forward 
   incoming requests to pgweb. In the first text field under "Inbound Rules", 
   enter the server and port where pgweb is listening. For example, if pgweb 
   listens on port 8081 on the same machine, enter `localhost:8081`

5. Install the IIS extension ["Application Request Routing"](https://www.iis.net/downloads/microsoft/application-request-routing)

6. Import rewrite rules into IIS: Navigate to the `/src/pgweb_proxy` directory
   and run the batch command `importRules.bat`. See the `/docs` directory 
   for details on importing and exporting rules, as well as details of the 
   actual rewrites performed.