// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello NodeApp!! \n");
});

// listen on localhost:8000
server.listen(5000);
console.log("Server listening on port 5000 :  http://192.168.10.84:5000");
