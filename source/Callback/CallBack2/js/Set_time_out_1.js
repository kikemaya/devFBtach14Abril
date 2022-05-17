"use strit";

//recibe dos parametros: una función y untiempo de espera
function hola() {
  return console.log("Hola Mundo!");
}

//funcion de orden superior
//funcion asincrona
setTimeout(() => {
  console.log("hola");
}, 0);

//ejecuta un código n cantidad de veces
let i = 0;
setInterval(() => {
  console.log(i++);
}, 1000);
