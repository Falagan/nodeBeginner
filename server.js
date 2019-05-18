let http = require('http');

function iniciar () {
    function onRequest(req, response) {
        console.log('Peticion Recibida.')
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