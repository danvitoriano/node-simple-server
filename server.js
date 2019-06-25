const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const routes = require("./routes");
const server = http.createServer(routes.handleRequest);

let buf = Buffer.from('This is my pretty example');
let json = JSON.stringify(buf);
let string = buf.toString();

console.log("buf: ", buf.length);
console.log("json: ", json);
console.log("string: ", string);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});