const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const routes = require("./routes");
const server = http.createServer(routes.handleRequest);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});