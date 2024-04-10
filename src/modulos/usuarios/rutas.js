const express = require('express');
const respuestas = require('../../red/repuestas');
const controlador = require('./index');

const router = express.Router();
const seguridad = require('./seguridad');

//Rutas
router.get('/', Listar);
router.get('/:id', Buscar);
router.delete('/:id', seguridad(), Eliminar);
router.put('/', Modificar);
router.post('/', seguridad(), Agregar);


//Funciones
async function Listar(req, res, next){
    try{
        const Listado = await controlador.Listar();
        respuestas.success(req, res, Listado, 200);
    }catch(err){
        next(err);
    }
}

async function Buscar(req, res, next){
    try{
        const cliente = await controlador.Buscar(req.params.id);
        respuestas.success(req, res, cliente, 200);
    }catch(err){
        next(err);
    }
}

async function Eliminar(req, res, next){
    try{
        const cliente = await controlador.Eliminar(req.params.id);
        respuestas.success(req, res, cliente, 200);
    }catch(err){
        next(err);
    }
}

async function Agregar(req, res, next){
    try{
        const cliente = await controlador.Agregar(req.body);
        respuestas.success(req, res, cliente, 200);
    }catch(err){
        next(err);
    }
}

async function Modificar(req, res, next){
    try{
        const cliente = await controlador.Modificar(req.body);
        respuestas.success(req, res, cliente, 200);
    }catch(err){
        next(err);
    }
}

module.exports =router;