"use strict";

const { usuarioSinc, usuarioAsinc } = require("./principal.js");

console.log("Inicio del programa");
console.time("Inicio");

console.log(usuarioSinc(1));
console.log(usuarioSinc(2));
console.log(usuarioSinc(3));
console.log(usuarioSinc(4 > 8));
console.log(usuarioSinc(5 + 5));
console.log(usuarioSinc(4 < 3));
console.log(usuarioSinc(4 == 4));
console.log(usuarioSinc(5 * 5));
console.log(usuarioSinc(5 < 6));

console.timeEnd("Inicio");
console.log("Fin del programa");