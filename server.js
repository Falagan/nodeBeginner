let http = require('http');
let url = require('url');

function iniciar(handle, router) {
    function onRequest(request, response) {
        console.log('Peticion Recibida.')
        let pathName = url.parse(request.url).pathname;
        console.log(`Url requerida: ${pathName}`);

        router(handle, pathName);

        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write('Hello World');
        response.end();
    }
    http.createServer(onRequest).listen(5000);
    console.log('Servidor Iniciado');
}


exports.iniciar = iniciar;