let http = require('http');
let url = require('url');

function iniciar(handle, router) {

    function onRequest(request, response) {
        console.log('Peticion Recibida.')
        let pathName = url.parse(request.url).pathname;
        console.log(`Url requerida: ${pathName}`);
        router(handle, pathName, response, request);
    }

    http.createServer(onRequest).listen(5000);
    console.log('Servidor Iniciado');
}


exports.iniciar = iniciar;