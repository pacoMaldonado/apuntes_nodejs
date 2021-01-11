const fs = require("fs");

const server = require("http").createServer();

server.on("request", (request, response) => {
  console.log("server: listen 3000");
  fs.readFile("./big.txt", (error, data) => {
    if (error) {
      console.log("error :", error);
    }
    response.end(data);
  });
});

server.listen(3000);
console.log("Servidor en la url http://localhost:3000");
