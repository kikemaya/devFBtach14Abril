"use strict";

const promesa = new Promise((resolve, reject) => {
  if (true) {
    resolve("Resuelta");
  } else {
    reject("Rechazada");
  }
});

promesa
  .then((response) => console.log(response))
  .then(() => console.log("Hola"))
  .then(() => {
    console.log("Mundo");
    return 150;
  })
  .then((cientocincuenta) => console.log(cientocincuenta))

  .catch((error) => console.error(error));
