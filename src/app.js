/**
 * app.js - LearnDB
 *
 * Kevin Kelly
 * Data Science & Systems Lab (DASSL)
 * https://dassl.github.io/
 * 
 * (C) 2019- DASSL. ALL RIGHTS RESERVED.
 * Licensed to others under CC 4.0 BY-SA-NC
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 * 
 * PROVIDED AS IS. NO WARRANTIES EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 * 
 * This file is the base startup config for LearnDB
 */


const express = require('express');

const appConfig = require('./config/main-config.js');
const routeConfig = require('./config/route-config.js');
const errorConfig = require('./config/error-config.js');


// *** express instance *** //
const app = express();


// *** config *** //
appConfig.init(app, express);
routeConfig.init(app);
errorConfig.init(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);