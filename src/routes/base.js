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
 * This file contains the basic routes and exports the router
 */


const express = require('express');
const router = express.Router();
const path = require('path');


// Default route
router.get('/', (req, res) => {
  res.sendFile(path.join(
    __dirname, '..', 'client', 'views', 'index.html',
  ));
});



module.exports = router;
