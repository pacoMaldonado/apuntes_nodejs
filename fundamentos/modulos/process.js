process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});

/*
    Este evento se dispara cuando el proceso ya ha terminado,
    Si hay un proceso asyncrono dentro del evento exit,
    nunca se va a ejecutar, y eso puede llegar a ser un foco de
    problemas
  */

process.on("exit", () => {
  console.log("El proceso ha terminado");
  setTimeout(() => {
    console.log("Nunca voy a ejecutarme");
  }, 0);
});

/*
    Es muy util capturar una excepcion, para evitar que se pare todo el proceso
  */
process.on("uncaughtException", (error, origin) => {
  console.log("Se me olvidó capturar el error");
  console.error(error.message);
});

// Manejo de errores, IMPORTANTE
try {
  hola();
} catch (error) {
  console.log(error.message);
}

console.log("Esto se ejecuta, siempre y cuando los errores esten controlados");
process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

/*
  Este evento se dispara cuando el proceso ya ha terminado,
  Si hay un proceso asyncrono dentro del evento exit,
  nunca se va a ejecutar, y eso puede llegar a ser un foco de
  problemas
*/

process.on('exit', () => {
  console.log('El proceso ha terminado');
  setTimeout(() => {
    console.log('Nunca voy a ejecutarme');
  }, 0);
});

/*
  Es muy util capturar una excepcion, para evitar que se pare todo el proceso
*/
process.on('uncaughtException', (error, origin) => {
  console.log('Se me olvidó capturar el error');
  console.error(error.message);
});

// Manejo de errores, IMPORTANTE
try {
  hola();
} catch(error){
  console.log(error.message);
}

console.log('Esto se ejecuta, siempre y cuando los errores esten controlados');