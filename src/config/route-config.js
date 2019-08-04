/**
 * route-config.js - LearnDB
 *
 * Kevin Kelly
 * Data Science & Systems Lab (DASSL)
 * https://dassl.github.io/
 * 
 * (C) 2019- DASSL. ALL RIGHTS RESERVED.
 * 
 * PROVIDED AS IS. NO WARRANTIES EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 *
 * This file sets up the base routes for the express router.
 */
(function (routeConfig) {
  routeConfig.init = function (app) {
    // *** routes *** //
    const routes = require('../routes/base');

    // *** register routes *** //
    app.use('/', routes);

  };
}(module.exports));
