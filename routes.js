const url = require('url');
let fs = require('fs');

function render(path, response) {
    fs.readFile(path, null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('file not found');
        } else {
            response.write(data);
        }
        response.end();
    });
}


module.exports = {
    handleRequest(request, response) {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        let path = url.parse(request.url).pathname;

        switch (path) {
            case '/':
            case '/index':
            case '/index.html':
                render('./index.html', response);
                break;
            case '/about':
            case '/about.html':
                render('./about.html', response);
                break;
            default:
                render('./not-found.html', response);
        }
    }
}