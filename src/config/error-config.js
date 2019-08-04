/**
 * error-config.js - LearnDB
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


(function (errorConfig) {

  'use strict';

  // *** error handling *** //

  errorConfig.init = function (app) {

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
      const err = new Error('Not Found');
      err.status = 404;
      next(err);
    });


    // development error handler (will print stacktrace)
    if (app.get('env') === 'development') {
      app.use(function(err, req, res, next) {
        res.status(err.status || 500).send({
          message: err.message,
          error: err
        });
      });
    }

    
    // production error handler (no stacktraces leaked to user)
    app.use(function(err, req, res, next) {
      res.status(err.status || 500).send({
        message: err.message,
        error: {}
      });
    });

  };

})(module.exports);
