// Importamos express y lo asignamos
// const express = require('express');
import  express  from "express";
import router from './routes/index.js'
import db from "./config/db.js";

// Funcion para ejecutar express, asignada a app
const app = express();

// Conectar la base de datos
db.authenticate()
    .then(() => console.log('Conexion exitosa'))
    .catch( error => console.log(error) )

// Definir puerto
// process.env - son lo que se conocen como variables de entorno, cuando se haga el deployment se ejecutara , en este caso se ejecutara en el 4000
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( ( req, res, next ) => {
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = 'Agencia de Viajes'
    next();
})

// Definir la carpeta publica
app.use( express.static('public'))

// Agregar router
app.use('/', router) // use - con tiene todo el crud

// Al app le digo que arranque el servidor con listen, sonde le pasa en puerto y el callback que en este caso es el log
app.listen( port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})