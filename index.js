// Importamos express y lo asignamos
const express = require('express');

// Funcion para ejecutar express, asignada a app
const app = express();

// Definir puerto
// process.env - son lo que se conocen como variables de entorno, cuando se haga el deployment se ejecutara , en este caso se ejecutara en el 4000
const port = process.env.PORT || 4000;

// Al app le digo que arranque el servidor con listen, sonde le pasa en puerto y el callback que en este caso es el log
app.listen( port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})