function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adios, " + nombre);
    otroCallback();
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla bla");
    callbackHablar();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre,callback);
  }
}
console.log("Iniciando Proceso");

// hola('Javier',adios)

hola("Paco", function (nombre) {
  conversacion(nombre, 5, function () {
    console.log("Proceso Terminado");
  });
});

// hola("paco", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         hablar(function () {
//           adios(nombre, function () {
//             console.log("Terminando Proceso");
//           });
//         });
//       });
//     });
//   });
// });
