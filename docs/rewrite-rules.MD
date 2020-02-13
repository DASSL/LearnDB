This document describes the procedure to import and export rewrite rules. 
It also describes the actual rewrites the rules perform.

## Overview

The rule files and the batch commands to import/export rules are in the
directory `/src/pgweb_proxy`:

- **`rules.xml`:** This file defines just one rule, the rule to rewrite any
  incoming URL on the proxy to a URL on pgweb. For example, the rule modifies 
  the incoming URL `learndb.example.com/query` to `localhost:8081/query`. 
  This example assumes `learndb.example.com` is the proxy's URL, and pgweb 
  listens on port 8081 on the same machine as the proxy.

  **Note:** Edit the value of the `url` attribute on Line 21 of the rule file 
  such that the attribute's value matches your pgweb deployment.

- **`outboundRules.xml`:** This file defines 12 rules, all of which modify
  the content pgweb returns. Collectively, the rules make the following changes
  to pgweb content:
  - Change the title of all pages
  - Change heading on login page
  - Reorder input boxes on login page
  - Add a "Change Password" link to login page
  - Add an "About" tab to the query page

- **`importRules.bat`:** This batch command imports rules from the two rule
  files into Internet Information Server (IIS).

- **`exportRules.bat`:** This batch command exports rules from IIS to the 
  two rule files. The rule files are overwritten if they already exist.


## Importing and exporting rules

To import/export rules, open a command window and naviagate to the directory 
containing the rule files and batch commands. Then, run the appropriate batch 
command. 

The batch commands use [AppCmd](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/jj635852(v=ws.11)),
a program distributed with IIS.

Both the import and export batch commands configure the "Default Web Site" in 
the IIS instance on the machine on which the commands are run. Edit the 
command files to change the value of the `config` parameter to suit your 
deployment. Consult the AppCmd documentation for details.

## Manually adding rules

The import batch command all the necessary rules, but this section outlines
the procedure to manually add rules in the event customization is required;

### Adding inbound rules

For each inbound URL that needs to be rewritten:
1. Add a reverse proxy rule.
2. Set the input field within the "Inbound Rules" section to the URL/IP 
   address of the application/server for which you wish to rewrite URL.
3. Click `OK` at the bottom of the form.

The import command included adds a rule to rewrite just one incoming URL

| Original URL | URL after rewrite |
|-------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `localhost` | `localhost:8081` |

## Adding outbound rules

For each content revision to perform:
1. Add a blank outbound rule.
2. Give the rule an appropriate title.
3. Set the "Pattern" field of the "Match" section to the value under 
   "Original content".
4. Set the "Value" field of the "Action" section to the corresponding value 
   under "Rewrite result".
5. Click `Apply` in the top right, in the "Action" section.
  
The remainder of this document shows the actual rewrites performed by the
rules the file `outboundRules.xml`.

#### Change title and heading
| Original content | Rewrite result |
|:-------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `<title>pgweb</title>` | `<title>LearnDB</title>` |
| `<h1>pgweb</h1>` | `<h2 style="text-align: center;text-shadow: 0px 1px 0px #fff;color: #999;font-weight: normal;">LearnDB</h2>` |
| `<div class="version"></div>` | `<span class="header" style="font-size: 12px;  color: #aaa; display: flex; align-items: center; justify-content: center;">(Based on <a href="https://github.com/sosedoff/pgweb" target="_blank">&nbsp;pgweb&nbsp;</a><span class="version"></span>)</span>` |

#### Reorganize input boxes on login page 
| Original content | Rewrite result |
|:-------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `<label class="col-sm-3 control-label">Username</label>` | `<label class="col-sm-3 control-label" name="labelDB">Database</label>` |
| `<input type="text" id="pg_user" class="form-control" />` | `<input type="text" id="pg_db" name="inputDB" class="form-control" />` |
| `<label class="col-sm-3 control-label">Password</label>` | `<label class="col-sm-3 control-label" name="labelUsr">Username</label>` |
| `<input type="password" id="pg_password" class="form-control" />` | `<input type="text" id="pg_user" name="inputUsr" class="form-control" />` |
| `<label class="col-sm-3 control-label">Database</label>` | `<label class="col-sm-3 control-label" name="labelPasswd">Password</label>` |
| `<input type="text" id="pg_db" class="form-control" />` | `<input type="password" id="pg_password" name="inputPasswd" class="form-control" />` |

#### Add a "Change Password" link to login page 
| Original content | Rewrite result |
|:-------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `<button type="button" id="close_connection_window"  class="btn btn-block btn-default">Cancel</button>` | `<button type="button" id="close_connection_window" class="btn btn-block btn-default">Cancel</button></div><div style="text-align:center;" class="col-sm-12" name="divChangePasswd"><p class="help-block"><a href="http://localhost:5000">Change Password</a></p>` |

#### Add an "About" tab to the query page 
| Original content | Rewrite result |
|:-------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `<li id="table_connection">Connection</li>` | `<li id="table_connection">Connection</li><li id="table_about" onclick="loadAbout();">About</li>` |
| `</head>` | `<script type="text/javascript">function loadAbout() {UrlDecode:%7B}  $("#input").hide(); $("#body").addClass("full"); setCurrentTab("table_about"); document.getElementById("output").innerHTML = '<div class="wrapper"> <table id="results" class="table"><thead id="results_header"><th class="table-header-col" data-name="attribute">About</th><th class="table-header-col" data-name="value"></th></thead><tbody id="results_body"><tr><td data-col="0">LearnDB is a Graphical User Interface for interaction with PostgrSQL and ClassDB. The current implementaion depends on pgweb.</td></tr></tbody></div>';{UrlDecode:%7D}</script></head>` |

