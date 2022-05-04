"use strict";

//este archivo necesita al archivo usuarios
const { usuarioAsinc } = require("./Usuarios");

console.log("Incio de programa");
console.time("inicio");

usuarioAsinc(1, (usuario) => {
console.log(usuario);
});

usuarioAsinc(2, (usuario) => {
console.log(usuario);
});

usuarioAsinc(3, (usuario) => {
console.log(usuario);
console.timeEnd("inicio");
});

console.log("Fin del programa");