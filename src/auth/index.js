const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../middleware/errors')

const secret = config.jwt.secret;

function AsignarToken(data){
    return jwt.sign(data, secret);
}

function verificarToken(token){
    return jwt.verify(token, secret);
}

const validarToken = {
    confirmarToken: function(req){
        const decodificado = decodeHeader(req);
    }
}

function obtenerToken(autorizacion){
    if(!autorizacion){
        throw error('Token no recibido', 401);
    }

    if(autorizacion.indexOf('Bearer') == -1){
        throw error('Token con formato invalido', 401);
    }

    let token = autorizacion.replace('Bearer ', '');
    return token;
}

function decodeHeader(req){
    const autorizacion = req.headers.authorization || '';
    const token = obtenerToken(autorizacion);
    const verificado = verificarToken(token);

    req.user = verificado;
    return verificado;
}

module.exports = {
    AsignarToken,
    validarToken
}