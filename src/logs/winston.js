/**
 * winston.js - LearnDB
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
 * This file contains the logging functionality
 */


const { createLogger, format, transports } = require('winston');

const {
  combine, timestamp, printf,
} = format;

const myFormat = printf(info => `${info.timestamp} ${info.level}: ${info.message}`);

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    myFormat,
  ),
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
  ],
});

module.exports = logger;
module.exports.stream = {
  write(message) {
    logger.info(message);
  },
};