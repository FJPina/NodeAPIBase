const mysql = require('mysql2');
const config = require('../config');

const prueba = {
    id:1,
    nombre:'juan',
    edad:43
}

const dbConfig = {
    host: config.mysql.host,
    //port: config.mysql.port,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let conexion;

function conMysql(){
    conexion = mysql.createConnection(dbConfig);

    conexion.connect((err) =>{
        if(err){
            console.log('[db err]', err);
            setTimeout(conMysql, 200);
        }else{
            console.log(['Conexion exitosa!']);
        }
    });
    conexion.on('error', err =>{
        console.log('[db err]', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conMysql();
        }else{
            throw err;
        }
    });
}

conMysql();

function Listar(tabla){
    return new Promise((resolve, reject) => {
        conexion.query(`select * from ${tabla};`, (error, result)=>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function Buscar(tabla,id){
    return new Promise((resolve, reject) => {
        conexion.query(`select * from ${tabla} where id = ${id};`, (error, result)=>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function Eliminar(tabla, id){
    return new Promise((resolve, reject) => {
        conexion.query(`delete from ${tabla} where id = ${id};`, (error, result)=>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function Agregar(tabla, data){
    return new Promise((resolve, reject) => {
        conexion.query(`insert into clientes (nombre, edad, profesion) values ('${data.nombre}', ${data.edad}, '${data.profesion}');`, (error, result)=>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function Modificar(tabla, data){
    return new Promise((resolve, reject) => {
        conexion.query(`update clientes set nombre = '${data.nombre}', edad = ${data.edad}, profesion = '${data.profesion}' where id = ${data.id};`, (error, result)=>{
            return error ? reject(error) : resolve(result);
        });
    });
}

module.exports = {
    Listar,
    Buscar,
    Agregar,
    Eliminar,
    Modificar
}