const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  let body = [];

  if (req.method === "POST") {
    switch (req.url) {
      case "/echo":
        req
          .on("data", (chuck) => {
            body.push(chuck);
          })
          .on("end", () => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            body = Buffer.concat(body).toString();
            res.end(body);
          });
        break;
      case "/date":
        req
          .on("data", (chuck) => {
            body.push(chuck);
          })
          .on("end", () => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            body = Buffer.concat(body).toString();
            let fecha = new Date(body);
            let dia = diaSemana(fecha.getDay());
            res.end(dia);
          });
        break;
      default:
        res.statusCode = 404;
        res.end();
        break;
    }
  }
});

server.listen(8001);
console.log("Servidor en la url http://localhost:8001");

let diaSemana = (dia) => {
  let diaNombre = "";
  switch (dia) {
    case 0:
      diaNombre = "Domingo";
      break;
    case 1:
      diaNombre = "Lunes";
      break;
    case 2:
      diaNombre = "Martes";
      break;
    case 3:
      diaNombre = "Miercoles";
      break;
    case 4:
      diaNombre = "Jueves";
      break;
    case 5:
      diaNombre = "Viernes";
      break;
    case 6:
      diaNombre = "Sabado";
      break;
  }
  return diaNombre;
};
