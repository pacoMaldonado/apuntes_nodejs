const { Console } = require("console");
const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva peticion");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.writeHead(201, { "Content-Type": "text/plain" });
      res.writeHead(201, { Javier: "Maldonado" });
      res.write("Hola, que tal?");
      res.end();
      break;

    default:
      res.write("como estan morros");
      res.end();
      break;
  }

  //   res.write("Hola ya se ocupar http de nodejs");
  //   res.end();
}

console.log("Escuchando http en el puerto: 3000 ");
