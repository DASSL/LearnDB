# Installation:
* Install IIS, following the instructions as described [here](https://github.com/DASSL/LearnDB/wiki/How-to-get-and-setup-a-free-SSL-certificate-for-Windows-Server-2016) under the heading "Add IIS Manager".
* Install the URL-rewrite 2.1 extension as described [here](https://github.com/DASSL/LearnDB/wiki/Setup-pgweb-on-Windows-Server-2016-to-use-HTTPS) under the heading "Setting up the reverse proxy for HTTPS connections".
  * Additional context for several steps:
    * Step 1:
      * Within IIS, open up the "Default Web Site" by expanding the tabs in the "Connections" window and double click on the site. The "Bindings..." option will appear in the "Actions" window on the far right, under the "Edit Site" tab.
    * Step 7:
      * Enter localhost:8081 into the only active input box, then stop after step 7. We do not need to allow "Rewrite the domain names of links in HTTP responses".
* Install and enable ARR for IIS, which can be downloaded [here](https://www.iis.net/downloads/microsoft/application-request-routing).
* Download/Install node.js with npm via [this link](https://nodejs.org/en/download/). I used the Long Term Support version.
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
### Rule to do the URL Rewrite:

# ARR Outbound Rules Implemented in LearnDB
### Rules to Change the Title and Header of the page:
* Change `<title>pgweb</title>` to `<title>LearnDB</title>`
* Change `<h1>pgweb</h1>` to `<h1>LearnDB</h1>`
### Rules to Reorganize the input boxes on the homepage:
* Add an outbound blank rule titled "Change Username Label to Database"
  * Set the "Pattern" field of the "Match" section to `<label class="col-sm-3 control-label">Username</label>`
  * Set the "Value" field of the "Action" section to `<label class="col-sm-3 control-label" name="labelDB">Database</label>`
* Add an outbound blank rule titled "Change Username Input to Database Input"
  * Set the "Pattern" field of the "Match" section to `<input type="text" id="pg_user" class="form-control" />`
  * Set the "Value" field of the "Action" section to `<input type="text" id="pg_db" name="inputDB" class="form-control" />`
* Add an outbound blank rule titled "Change Password Label to Username"
  * Set the "Pattern" field of the "Match" section to `<label class="col-sm-3 control-label">Password</label>`
  * Set the "Value" field of the "Action" section to `<label class="col-sm-3 control-label" name="labelUsr">Username</label>`
* Add an outbound blank rule titled "Change Password Input to Username Input"
  * Set the "Pattern" field of the "Match" section to `<input type="password" id="pg_password" class="form-control" />`
  * Set the "Value" field of the "Action" section to `<input type="text" id="pg_user" name="inputUsr" class="form-control" />`
* Add an outbound blank rule titled "Change Database Label to Password Label"
  * Set the "Pattern" field of the "Match" section to `<label class="col-sm-3 control-label">Database</label>`
  * Set the "Value" field of the "Action" section to `<label class="col-sm-3 control-label" name="labelPasswd">Password</label>`
* Add an outbound blank rule titled "Change Database Input to Password Input"
  * Set the "Pattern" field of the "Match" section to `<input type="text" id="pg_db" class="form-control" />`
  * Set the "Value" field of the "Action" section to `<input type="password" id="pg_password" name="inputPasswd" class="form-control" />`
### Rules to Add the "Change Password" link on the homepage:
* Add an outbound blank rule titled "Add Link to Change Password Server After Connect Button"
  * Set the "Pattern" field of the "Match" section to `<button type="button" id="close_connection_window" class="btn btn-block btn-default">Cancel</button>`
  * Set the "Value" field of the "Action" section to `<button type="button" id="close_connection_window" class="btn btn-block btn-default">Cancel</button></div><div class="col-sm-12" name="divChangePasswd"><p class="help-block"><a href="http://localhost:5000">Change Password</a></p>`
### Rules to Add the "About" tab within the DB viewer of pgweb:
* Add an outbound blank rule titled "Add About Tab after Connections"
  * Set the "Pattern" field of the "Match" section to `<li id="table_connection">Connection</li>`
  * Set the "Value" field of the "Action" section to `<li id="table_connection">Connection</li><li id="table_about">About</li>`
* Add an outbound blank rule titled "Change pgweb's app.js to my js file to control the Tabs"
  * Set the "Pattern" field of the "Match" section to `<li id="table_connection">Connection</li><li id="table_about">About</li>`
  * Set the "Value" field of the "Action" section to `<script type="text/javascript" src="http://localhost:5000/javascript/pgweb_app.js"></script>`
