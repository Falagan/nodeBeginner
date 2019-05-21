function route(handle, pathName, response, request) {
    console.log(`Apunto de router la ruta: ${pathName}`);

    if (typeof handle[pathName] === 'function') {
        return handle[pathName](response, request);
    } else {
        console.log(`No se encontro manipulador para: ${pathName}`);
        return "404 No Encontrado";
    }
}

exports.route = route;