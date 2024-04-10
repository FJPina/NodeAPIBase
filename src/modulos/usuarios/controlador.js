const auth = require('../auth');

const tabla = 'usuarios';

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
    
    async function Agregar(data){
        const usuario = {
            nombre: data.nombre,
            activo: data.activo
        }
 
        const res = await db.Agregar(tabla, usuario);
        var insertId = res.insertId;

        if(data.usuario && data.password){
            res2 = await auth.Agregar({
                id: insertId,
                usuario: data.usuario,
                password: data.password
            })
        }

        return res2;
    }
    
    async function Modificar(data){
        const usuario = {
            id: data.id,
            nombre: data.nombre,
            activo: data.activo
        } 
 
        const res = db.Modificar(tabla, usuario);
        let res2;
        
        if(data.usuario && data.password){
            res2 = await auth.Agregar({
                id: data.id,
                usuario: data.usuario,
                password: data.password
            })
        }

        return res2;
    }
    
    return{
        Listar,
        Buscar,
        Eliminar,
        Agregar,
        Modificar
    }
}