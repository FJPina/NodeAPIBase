

const tabla = 'clientes';

module.exports = function(dbIny){

    let db = dbIny;

    if(!db){
        db = require('../../db/mysql');
    }

    function Listar(){
        return db.Listar(tabla);
    }
    
    function Buscar(id){
        return db.Buscar(tabla, id);
    }
    
    function Eliminar(id){
        return db.Eliminar(tabla, id);
    }
    
    function Agregar(data){
        return db.Agregar(tabla, data);
    }
    
    function Modificar(data){
        return db.Modificar(tabla, data);
    }
    
    return{
        Listar,
        Buscar,
        Eliminar,
        Agregar,
        Modificar
    }
}