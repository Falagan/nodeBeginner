let server = require('./server');
let router = require('./router');
let requestHandlers = require('./requestHandlers');

let handle = {};

handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;
handle["/mostrar"] = requestHandlers.mostrar;

server.iniciar(handle, router.route);