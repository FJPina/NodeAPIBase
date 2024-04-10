const auth = require("../../auth")

module.exports = function validarToken(){
    function middleware(req, res, next){
        auth.validarToken.confirmarToken(req);
        next();
    }
    return middleware
}