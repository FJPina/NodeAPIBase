const bcrypt = require('bcrypt');
const auth = require('../../auth');
const tabla = 'auth';


module.exports = function(dbIny){

    let db = dbIny;

    if(!db){
        db = require('../../db/mysql');
    }
    
    async function Agregar(data){

        const authData = {
            id: data.id,
            usuario: data.usuario,
            password: await bcrypt.hash(data.password.toString(), 5)
        }
        return db.Agregar(tabla, authData);
    }

    async function login(data){
        const res = await db.query(tabla, {usuario: data.usuario});

        console.log(res[0], "11111111111111111111111111111111")
        if(res[0] != undefined){
            return bcrypt.compare(data.password, res[0].password).then(function(result) {
                if(result){
                    token = auth.AsignarToken(...res);
                    return token;
                }else{
                    throw new Error('Credenciales invalidas');
                }
            });
        }
        throw new Error('Credenciales invalidas');
    }
    
    return{
        Agregar,
        login
    }
}