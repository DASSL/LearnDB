/**
 * db.js - LearnDB
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
 * This file contains the db connection functionality
 */

 // Loading and initializing the library:
const pgp = require('pg-promise')({
    // Initialization Options: http://vitaly-t.github.io/pg-promise/module-pg-promise.html
});

/**
 * Exporting a function that will create a database connection.
 *  Default values are automatically used for parameters that are empty or undefined  
 *  More information on how those defaults are set can be found here: 
 *  https://www.postgresql.org/docs/11/libpq-connect.html#LIBPQ-CONNSTRING
 *
 * @param {string} username The username of user to connecting to database
 * @param {string} password The password associated with the database role
 * @param {string} host The host server domain
 * @param {string} port The host server port
 * @param {string} database The database
 */
module.exports = function ({username, password, host,port,  database }) {
    const connectionString = `postgresql://${username}:${password}`
                           + `@${host}:${port}/${database}?application_name=LearnDB`;                       
    return db = pgp(connectionString);
};
