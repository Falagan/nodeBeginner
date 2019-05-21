let exec = require('child_process').exec;
let queryString = require('querystring'), fs = require('fs');
let formidable = require('formidable');

function iniciar(response, postData) {
    console.log('Handler iniciar llamado');

    let body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" ' +
        'content="text/html; charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/subir" enctype="multipart/form-data" ' +
        'method="post">' +
        '<input type="file" name="subir">' +
        '<input type="submit" value="Upload file" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(body);
    response.end();

}


function subir(response, request) {
    console.log('Handler subir');

    let form = new formidable.IncomingForm();
    console.log('Vamos a parsear la request.');
    form.parse(request, (error, fields, files) => {
        console.log('parseo listo.');
        fs.rename(files.upload.path, "./tmp/test.png", function (error) {
            if (error) {
                fs.unlink("./tmp/test.png");
                fs.rename(files.upload.path, "./tmp/test.png");
            }
        });

    })



    response.writeHead(200, { "Content-Type": "text/html" });
    response.write('received image:<br/>');
    response.write("<img src='/mostrar' />");
    response.end();
}

function mostrar(response) {
    console.log('Handler mostrar llamado.');
    response.writeHead(200, { 'Content-type': 'image/png' });
    fs.createReadStream('./tmp/test.png').pipe(response);
}

exports.iniciar = iniciar;
exports.subir = subir;
exports.mostrar = mostrar;