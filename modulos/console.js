var tabla = [
  {
    nombre: "Luis",
    apellido: "Lora",
    edad: 22,
  },
  {
    nombre: "Agustín",
    apellido: "Morán",
    edad: 19,
  },
];

console.log("algo");
console.error("error");
console.warn("Posible error");
console.table(tabla);

const dias = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

console.group("diasSemana");
for (let i = 0; i < dias.length; i++) {
  console.log(dias[i]);
}
console.groupEnd();

function limpiarConsola() {
  setTimeout(() => {
    console.clear("Limpiando cada 5 segs");
  }, 10000);
}
// limpiarConsola();

console.count("Veces");
console.count("Veces");
console.countReset("Veces");
console.count("Veces");
console.count("Veces");

console.time("100-elementos");

for (let i = 0; i < 100; i++) {}

console.timeEnd("100-elementos");
