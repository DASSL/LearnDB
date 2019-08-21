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
 */
router.post('/change-password', (req, res) => {
  if (req.body.username === "error") {
    return res.status(500).json({
      status: "error",
      message: "An error occurred"
    }); 
  }
  return res.status(200).json({
    status: "success",
    data: "Got to route successfully"
  });
});



module.exports = router;
