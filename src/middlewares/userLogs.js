const fs = require('fs');
const path = require('path');

const userLogs = (req, res, next) =>{

    // Guardar la  ruta al archivo en una variable const
    const rutaArchivo = path.join(__dirname, '..', 'logs', 'userLogs.txt');

    // Escribir el archivo
    // "El usuario ingresó a la ruta: " + var
    fs.appendFileSync( rutaArchivo , `El usuario ingresó a la ruta: ${req.url} con el método http de: ${req.method}
    ` )

    next()
}

module.exports = userLogs;