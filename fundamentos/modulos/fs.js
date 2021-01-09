const fs = require("fs");

function leer(path, callback) {
  fs.readFile(path, (err, data) => {
    callback(data.toString());
  });
}

function escribir(path, contenido) {
  fs.writeFile(path, contenido, function (err, data) {
    if (err) {
      console.error("No he podido escribirlo...", error);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}

function eliminar(path, cb) {
  fs.unlink(path, cb);
}

leer(__dirname + "/archivo2.txt", console.log);
// escribir(
//   __dirname + "/archivo2.txt",
//   "Este es otro archvio \n que debe de tener mas lineas de codigo"
// );

eliminar(__dirname + "/archivo.txt", console.log);
