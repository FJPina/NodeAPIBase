const express = require('express')
const config = require('./config')
const morgan = require('morgan')
const error = require('./red/errors')

const clientes = require('./modulos/clientes/rutas')

const app = express();

//Middelware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuracion
app.set('port', config.app.port);

//Rutas
app.use('/api/clientes', clientes)
app.use(error);

module.exports = app;