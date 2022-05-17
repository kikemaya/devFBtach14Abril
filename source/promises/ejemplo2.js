"use strict";

let x = 12;
const promesa = new Promise((resolve, reject) => {
  if (x === 12) {
    setTimeout(() => {
      x = x * 5;
      console.log("2. Terminé...");
      resolve(x);
    }, 2000);
  } else {
    reject("Promesa incumplida...");
  }
});

console.log("1. Proceso inciado...");

promesa
  .then((response) => {
    console.log("3. El resultado es:" + response);
  })
  .catch((error) => {
    console.error(error);
  });
