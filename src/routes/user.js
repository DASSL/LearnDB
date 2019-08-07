/**
 * base.js - LearnDB
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
 * This file contains the user routes and exports the router
 */


const express = require('express');
const router = express.Router();


/**
 *  This route is used to open an unreal server instance on a specific port
 *
 * @param {string} port the port that unreal engine server should be opened on
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
