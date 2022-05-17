"use strict";

const promesa = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout(() => {
    number > 5 ? resolve(number) : reject(new Error("El numero es menor a 5"));
  }, 1000);
});

promesa
  .then((respuesta) => {
    console.log("El valor es:", respuesta);
  })
  .catch((error) => {
    console.log("El error es:", error);
  });
