let http = require("http");
const path = require("node:path");

http
  .createServer(function (request, response) {
    // console.log(request, response);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("hello!");
    response.end();
  })
  .listen(8080);

console.log("test");
