const { exec, spawn } = require("child_process");
// const exec = requiere("child_process").exec;
const fs = require("fs");

// exec("dir", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   fs.writeFile(__dirname + "/archivo2.txt", stdout, function (err, data) {
//     if (err) {
//       console.error("No he podido escribirlo...", error);
//     } else {
//       console.log("Se ha escrito correctamente");
//     }
//   });

//   console.log(stdout);
// });

let proceso = spawn("dir", ["/ad"]);

console.log(proceso);

proceso.stdout.on("data", function (dato) {
  console.log(dato.toString());
});

proceso.on("exit", function () {
  console.log("El proceso termino");
});
