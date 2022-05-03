"use strict";
const principal = require("./Principal.js");
const { usuarioAsinc } = require("./Principal.js");

console.log("Incio de programa");
console.time("tiempo");

usuarioAsinc(1, (principal) => {
console.log(principal);
});

usuarioAsinc(2, (principal) => {
console.log(principal);
});

usuarioAsinc(3, (principal) => {
console.log(principal);
});
usuarioAsinc(4, (principal) => {
console.log(principal);
console.timeEnd("tiempo");
});

console.log("Fin del programa");