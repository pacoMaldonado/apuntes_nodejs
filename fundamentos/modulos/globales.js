let i = 0;

let intervalo = setInterval(() => {
  console.log("Hola");
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);

setImmediate(() => {
  console.log("Adios");
});

console.log(__dirname);
console.log(__filename);

// Variables Globales

globalThis.miVariable = "elValor";

console.log(miVariable);
