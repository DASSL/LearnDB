/**
 * base.js - LearnDB
 *
 * Kevin Kelly
 * Data Science & Systems Lab (DASSL)
 * https://dassl.github.io/
 * 
 * (C) 2019- DASSL. ALL RIGHTS RESERVED.
 * 
 * PROVIDED AS IS. NO WARRANTIES EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 *
 * This file contains the basic routes and exports the router
 */


const express = require('express');
const router = express.Router();


// Default route
router.get('/', (req, res) => {
  res.send('Hello World!'); 
});



module.exports = router;
