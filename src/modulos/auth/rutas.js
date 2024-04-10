const express = require('express');
const respuestas = require('../../red/repuestas');
const controlador = require('./index');

const router = express.Router();

//Rutas
router.post('/login', login);

async function login(req, res, next){
    try {
        const token = await controlador.login(req.body);
        respuestas.success(req, res, token, 200);
    } catch (err) {
        next(err);
    }
}

module.exports =router;