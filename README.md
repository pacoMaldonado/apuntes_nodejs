# Apuntes del Curso de NodeJS Platzi

Notas sobre el curso de NodeJS, esto es para practicar y entender mejor el funcionamiento de NodeJS.

# Node JS

Es un entorno de ejecución creado en 2009 y es **orientado a servidores**.

> NodeJS es una de las formas más rapidas y escalables para correr código desde el servidor.

- Sirve para contruir herramientas
  - Transpiladores
  - Scraping
  - Automatizacion

## Características

- Concurrencia
  - Monohilo con entradas y salidas asincronas. Un proceso por cada nucleo del procesador.
- Moto 8:
  - Entorno de ejecución de JS, creado por Google y liberado en el 2008.
  - Escrito en C++.
  - Convierte el Javascript en codigo maquina en lugar de interpretarlo.
- Centrado en módulos.
- Orientado a eventos.

## EventLoop

Asincronía por diseño

> Un proceso con un **bucle** que gestiona, de forma asíncrona, todos los eventos de tu apicación.

![Event Loop](./image/event-loop.png "Event Loop")

## Variables de entorno

Las variables de entorno son una forma de llamar información de afuera a nuestro software, sirve para definir parámetros sencillos de configuración de los programas de modo que puedan ejecutarse en diferentes ambiente sin necesidad de modificar el código fuente de un script.

El objeto process nos da información sobre el procesos que está ejecutando este script.
La propiedad env es la que nos da acceso a las variables de entorno de manera sencilla.

Para el caso de Linux

```shell
  VARIABLE=valor VARIABLE2=valor node archivo.js
```

Para el caso de CMD en windows

```shell
  set VARIABLE=valor & set VARIABLE2=valor &  node archivo.js
```

Para el caso de Power Shell en Windows

```shell
  $env:VARIABLE="valor"; $env:VARIBLE2="valor"; node archivo.js
```

## Herramientas para node

### nodemon

Para dejar corriendo el server y cada que se agrega un nuevo cambio y se guarda el servidor vuelve a cargar todo para ejecutar todo.

```sh
  nodemon archivo.js
```

### PM2

Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7.

Voy a poner monitorizar el código para saber si algo se rompe.
Me permite ver dashboards de mi código, puedo ver que está corriendo.
Puedo ver el rendimiento de mi cpu
Con: pm2 stop + id —> me detiene el proceso que está en ejecución con ese ID.

[PM2](https://pm2.keymetrics.io/)

## Funciones CallBack

Una funcion callback es una funcion que es pasada como argumento a otra funcion, para ser llamada(called back) en otro momento.
La funcion que recibe como argumento otras funciones es denominada funcion de orden superior (higher-order function), esta contiene la logica correspondiente para ejecutar adecuadamente la funcion callback.

```js
function miFunction(callBack) {
  callBack();
}

miFunction(function () {
  console.log("Mensaje del callback");
});
```

### Funciones Callback Hell

Los callback Hell se dan cuando empiezo a pasar una función como parámetro que a su vez llama a otra función como parámetro, y así hasta n.
Una estrategia para trabajar con estas estructuras lógicas tan monolíticas es usar estructuras de control y funciones recursivas.

Las funciones recursivas se llaman así mismas y mediante la estructura de control le digo cuantas veces voy a necesitar llamar la función así misma.

## Promesas

Las promesas son una sintaxis mas elegante y legible de realizar callbacks, creando así un código mucho más escalable y entendible para todas las personas.
Una promesa al final no deja de ser un callback, solo que, con la novedad de tener estados, las promesas cuentan con 3 estados, resuelta, en progreso y en fallo.
Para utilizar una promesa solo debemos de instanciar una nueva, una promesa en si es una función que recibe dos parámetros, resolve y reject, que son los dos estados de una promesa.

Utilizamos resolve para retornar el valor deseado cuando una función se ejecute y utilizamos reject para cuando una función retorna un valor no deseado.

## Async / Await

Para evitar que todo se vea asíncrono, y que la sintáxis sea más legible las operaciones secuenciales como hacer un archivo que se procese, subirlo para tener una URL y de ahí mandarla a una base de datos.
Async y Await nos permite definir una función de forma explícita como asíncrona y esperar a que la función termine. No estará bloqueando el hilo principal, pues estará esperando a que se resuelva con el event loop

## Global

En Node tenemos el objecto **global** que contiene los metodos y propiedades basicas que usamos Node; _ej (setTimeOut)_.

> **global** es equivalente de **this** en el navegador

En node **this** es un alias de **global**.

```js
this === global; // true
```

Algunos metodos que se incluyen en el **global** objecto son:

- **setTimeOut**: se encarga de llamar a otra función despues de un periodo de tiempo.
- **setInterval**: llama a otra función cada intervalo de tiempo.
- **setImmediate**: Equivalente a setTimeOut pero con tiempo 0.
- **clearTimeOut**: detiene un setTimeOut.
- **clearInterval**: detiene un setInterval.

## Consele

Con console podemos imprimir todo tipo de valores por
nuestra terminal.

console.log: recibe cualquier tipo y lo muestra en el consola.
console.info: es equivalente a log pero es usado para informar.
console.error: es equivalente a log pero es usado para errores.
console.warn: es equivalente a log pero es usado para warning.
console.table: muestra una tabla a partir de un objeto.
console.count: inicia un contador autoincremental.
console.countReset: reinicia el contador a 0.
console.time: inicia un cronometro en ms.
console.timeEnd: Finaliza el cronometro.
console.group: permite agrupar errores mediante identación.
console.groupEnd: finaliza la agrupación.
console.clear: Limpia la consola.

## Child Process

En node podemos crear procesos hijos que ejecuten cualquier accion de nuestro sistema operativo, como si nos encontraramos en la linea de comandos.

Podemos llamar a exec para ejecuciones sencillas:

```js
const { exec } = require("child_process");
exec("ls", (e, stdout) => {
  e ? console.log(e) : console.log(stdout);
});
```

Podemos llamar a spawn para obtener el proceso: La ventaja de este enfoque es que obtienes mayor control del proceso, y del estado en el que se encuenta

```js
const { spawn } = require("child_process");
const myprocess = spawn("ls");

process.stdout.on("data", (data) => console.log(data.toString()));
process.on("exit", () => console.log("process end"));
```
