"use strict";

console.log("1");
console.log("2");

setTimeout(() => {
  return console.log("3");
}, 3000);

setTimeout(() => {
  return console.log("4");
}, 2000);

console.log("5");
