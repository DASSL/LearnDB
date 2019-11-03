# Outline
This solution uses Internet Information Services(IIS) and Application Request Routing(ARR) to change :
  * Change the title and header of the homepage
  * Reorganize the input boxes on the homepage
  * Add the "Change Password" link on the homepage
  * Add the "About" tab within the DB viewer of pgweb
  
  This solution also includes two scripts:
  
  *  **importRules.bat** imports HTML rewrite rules into IIS ARR.
  
  *  **exportRules.bat** is an optional file to export inbound and outbound rules from IIS ARR.
# Installation:
* Install IIS, following the instructions as described [here](https://github.com/DASSL/LearnDB/wiki/How-to-get-and-setup-a-free-SSL-certificate-for-Windows-Server-2016) under the heading "Add IIS Manager".
* Install the URL-rewrite 2.1 extension as described [here](https://github.com/DASSL/LearnDB/wiki/Setup-pgweb-on-Windows-Server-2016-to-use-HTTPS) under the heading "Setting up the reverse proxy for HTTPS connections".
  * Additional context for several steps:
    * Step 1:
      * Within IIS, open up the "Default Web Site" by expanding the tabs in the "Connections" window and double click on the site. The "Bindings..." option will appear in the "Actions" window on the far right, under the "Edit Site" tab.
    * Step 7:
      * Enter localhost:8081 into the only active input box, then stop after step 7. We do not need to allow "Rewrite the domain names of links in HTTP responses".
* Install and enable ARR for IIS, which can be downloaded [here](https://www.iis.net/downloads/microsoft/application-request-routing).
* Download/Install node.js with npm via [this link](https://nodejs.org/en/download/). The Long Term Support version is suggested.
* Clone, (fork, or download) the LearnDB [GitHub repo](https://github.com/DASSL/LearnDB) in order to work with the files locally.
  * To install the specific npm packages/modules required, navigate to the `src` fold of the LearnDB clone, then run the command `npm install`
* To install pgweb, follow the directions as described [here](https://github.com/DASSL/LearnDB/wiki/pgweb-as-a-service).
# How to import rules:
* Go to the `/src/pgweb_proxy` folder of the cloned LearnDB repo.
* Run the importRules.bat script
* This will read 2 files named 'rules.xml' and 'outboundRules.xml' with the inbound and outbound rules for the "Default Web Site" server running in IIS.
# How to export rules:
* Go to the `/src/pgweb_proxy` folder of the cloned LearnDB repo.
* Run the exportRules.bat script
* This will output 2 files named 'rules.xml' and 'outboundRules.xml' with the current inbound and outbound rules of the "Default Web Site" server running in IIS.

# ARR Inbound Rules Implemented in LearnDB
* For each of the rules implemented below, follow these steps:
  1. Add an reverse proxy rule.
  2. Set the input field within the "Inbound Rules" section to the URL/IP address of the application/server for which you wish to do the URL rewrite.
  3. Click `OK` at the bottom of the form.
### Rule to do the URL Rewrite:
| URL prior to rewrite | URL after to rewrite |
|:-------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `localhost` | `localhost:8081` |

# ARR Outbound Rules Implemented in LearnDB
* For each of the rules implemented below, follow these steps:
  1. Add an outbound blank rule.
  2. Add an appropriate title for the rule.
  2. Set the "Pattern" field of the "Match" section to the value under "HTML Prior to rewrite".
  3. Set the "Value" field of the "Action" section to the corresponding value under "HTML after rewrite".
  4. Click `Apply` in the top right, in the "Action" section.
  
# Changes in HTML made by ARR Outound Rules at runtime
### Change the title and header of the page
| HTML Prior to rewrite | HTML after rewrite |
|:-------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `<title>pgweb</title>` | `<title>LearnDB</title>` |
| `<h1>pgweb</h1>` | `<h2 style="text-align: center;text-shadow: 0px 1px 0px #fff;color: #999;font-weight: normal;">LearnDB</h2>` |
| `<div class="version"></div>` | `<span class="header" style="font-size: 12px;  color: #aaa; display: flex; align-items: center; justify-content: center;">(Based on <a href="https://github.com/sosedoff/" target="_blank">&nbsp;pgweb&nbsp;</a><span class="version"></span>)</span>` |
### Reorganize the input boxes on the homepage 
| HTML Prior to rewrite | HTML after rewrite |
|:-------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `<label class="col-sm-3 control-label">Username</label>` | `<label class="col-sm-3 control-label" name="labelDB">Database</label>` |
| `<input type="text" id="pg_user" class="form-control" />` | `<input type="text" id="pg_db" name="inputDB" class="form-control" />` |
| `<label class="col-sm-3 control-label">Password</label>` | `<label class="col-sm-3 control-label" name="labelUsr">Username</label>` |
| `<input type="password" id="pg_password" class="form-control" />` | `<input type="text" id="pg_user" name="inputUsr" class="form-control" />` |
| `<label class="col-sm-3 control-label">Database</label>` | `<label class="col-sm-3 control-label" name="labelPasswd">Password</label>` |
| `<input type="text" id="pg_db" class="form-control" />` | `<input type="password" id="pg_password" name="inputPasswd" class="form-control" />` |

### Add the "Change Password" link on the homepage 
| HTML Prior to rewrite | HTML after rewrite |
|:-------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `<button type="button" id="close_connection_window"  class="btn btn-block btn-default">Cancel</button>` | `<button type="button" id="close_connection_window" class="btn btn-block btn-default">Cancel</button></div><div style="text-align:center;" class="col-sm-12" name="divChangePasswd"><p class="help-block"><a href="http://localhost:5000">Change Password</a></p>` |
### Add the "About" tab within the DB viewer of pgweb 
| HTML Prior to rewrite | HTML after rewrite |
|:-------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `<li id="table_connection">Connection</li>` | `<li id="table_connection">Connection</li><li id="table_about" onclick="loadAbout();">About</li>` |
| `</head>` | `<script type="text/javascript">function loadAbout() {UrlDecode:%7B}  $("#input").hide(); $("#body").addClass("full"); setCurrentTab("table_about"); document.getElementById("output").innerHTML = '<div class="wrapper"> <table id="results" class="table"><thead id="results_header"><th class="table-header-col" data-name="attribute">About</th><th class="table-header-col" data-name="value"></th></thead><tbody id="results_body"><tr><td data-col="0">LearnDB is a Graphical User Interface for interaction with PostgrSQL and ClassDB. The current implementaion depends on pgweb.</td></tr></tbody></div>';{UrlDecode:%7D}</script></head>` |

