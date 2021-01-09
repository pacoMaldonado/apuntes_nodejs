async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

async function adios(nombre) {
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
      resolve(nombre);
      //   reject("Error");
    }, 1000);
  });
}

console.log("Iniciando Proceso...");

async function main(nombre) {
  await hola(nombre);
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("Termina el proceso ----");
}

console.log("Empezamos el proceso ----");
main(" Paco ");
