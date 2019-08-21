/**
 * route-config.js - LearnDB
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
 * This file sets up the base routes for the express router.
 */
(function (routeConfig) {
  routeConfig.init = function (app) {
    // *** routes *** //
    const baseRoutes = require('../routes/base.js');
    const usersRoutes = require('../routes/users.js');

    // *** register routes *** //
    app.use('/', baseRoutes);
    app.use('/users', usersRoutes);

  };
}(module.exports));
