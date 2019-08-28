/**
 * users.js - LearnDB
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
 * This file contains the users routes and exports the router
 */


const express = require('express');
const router = express.Router();
const dbConnectionCreator = require('../db/db.js');
const logger = require('../logs/winston.js');


/**
 *  This route is currently configured to return successful unless the username
 *   parameter is "error"
 *
 * @param {string} host is the PostgreSQL server domain/ip
 * @param {string} port is the PostgreSQL server port
 * @param {string} database is the database name user has access to
 * @param {string} username is the user's ID
 * @param {string} currentPassword is the user's current password to the database
 * @param {string} newPassword is the password user wants to switch to
 * @param {string} confirmNewPassword is the password user wants to switch to
 */
router.post('/change-password', (req, res) => {
  let host = (req.body.host + '').trim();
  let port = (req.body.port + '').trim(); 
  let database = (req.body.database + '').trim();
  let username = (req.body.username + '').trim();
  let currentPassword = (req.body.currentPassword + '').trim();
  let newPassword = (req.body.newPassword + '').trim();
  let confirmNewPassword = (req.body.confirmNewPassword + '').trim();

  logger.info(`(Change-Password) User: ${username} attempting to change password`);

  if (username.length < 1) {
    logger.info(`(Change-Password) User: ${username} did not provide username`);
    return res.status(500).json({
      status: "error",
      message: "Username is required"
    }); 
  }

  if (newPassword.length < 1) {
    logger.info(`(Change-Password) User: ${username} did not provide new password`);
    return res.status(500).json({
      status: "error",
      message: "New password is required"
    }); 
  }

  if (newPassword !== confirmNewPassword) {
    logger.info(`(Change-Password) User: ${username} new password and its confirmation did not match`);
    return res.status(500).json({
      status: "error",
      message: "The new password and its confirmation must match"
    }); 
  }

  const db = dbConnectionCreator({username: username,
                                  password: currentPassword,
                                  host: host,
                                  port: port,
                                  database: database});
  db.any(`ALTER USER ${username} WITH ENCRYPTED PASSWORD ` +
         `'${newPassword}';`)
    .then(() => {
      logger.info(`(Change-Password) User: ${username} successfully changed password`);
      return res.status(200).json({
        status: "success",
        data: "Password changed successfully"
      }); 
    })
    .catch((error) => {
      switch (error.code) {
        case 'ETIMEDOUT':
        case 'ENOTFOUND':
        case 'ECONNREFUSED':
          logMessage = "was unable to connect to host";
          responseMessage = "Unable to connect to host";
          break;
        case '28P01':
          logMessage = "supplied incorrect username or password";
          responseMessage = "Username or password is incorrect";
          break;
        case '3D000':
          logMessage = "supplied database that does not exist";
          responseMessage = "Database does not exist";
          break;
        case '42501':
          logMessage = "supplied database that user does not have permission on";
          responseMessage = `You do not have connect permission on database ${database}`;
          break;
        default:
          logger.error(`(Change-Password) User: ${username} could not change password because server error`);
          return res.status(500).json({
            status: "error",
            message: "An error occurred"
          });
      }

      logger.info(`(Change-Password) User: ${username} ${logMessage}`);
      return res.status(500).json({
        status: "error",
        message: responseMessage
      });
    })
    .finally(() => {
      db.$pool.end();// explicity close db connection
    });
});



module.exports = router;
