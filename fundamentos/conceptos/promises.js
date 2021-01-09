function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios, " + nombre);
      resolve(nombre);
    }, 2000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla bla");
      //   resolve(nombre);
      reject("Error");
    }, 1000);
  });
}

function conversacion(nombre, veces) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, hablar);
    });
  } else {
    adios(nombre);
  }
}
console.log("Iniciando Proceso...");

hola("Paco")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    setTimeout(() => {
      console.log("Terminando proceso");
    }, 1000);
  })
  .catch((error) => {
    console.error("Ha ocurrido un error!! ");
    console.error(error);
  });
