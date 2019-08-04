/**
 * main-config.js - LearnDB
 *
 * Kevin Kelly
 * Data Science & Systems Lab (DASSL)
 * https://dassl.github.io/
 * 
 * (C) 2019- DASSL. ALL RIGHTS RESERVED.
 * 
 * PROVIDED AS IS. NO WARRANTIES EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 *
 * This file contains the server configuration related to error handling
 */


(function (appConfig) {
  // *** main dependencies *** //
  const bodyParser = require('body-parser');

  appConfig.init = function (app) {
    app.set('view engine', 'html');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
  };
}(module.exports));
