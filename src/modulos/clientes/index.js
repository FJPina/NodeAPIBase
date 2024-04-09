const db = require('../../db/mysql');
const controlador = require('./controlador');

module.exports = controlador(db);