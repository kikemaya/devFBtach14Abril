"use strict";

const promesa = new Promise((resolve, reject) => {
  console.log("jajaja");
  const number = Math.floor(Math.random() * 10);
  setTimeout(() => {
    number > 1 ? resolve(number) : reject(`Todo mal el número es ${number}`);
  }, 2000);
});

function suma(num1, num2) {
  console.log(num1, num2);
  return num1 + num2;
}
function multiplicacion(num1, num2) {
  console.log(num1, num2);
  return num1 * num2;
}

promesa
  .then((response) => {
    console.log("response1", response);
    return suma(response, 5);
  })
  .then((response) => {
    console.log("response2 - suma", response);
    return multiplicacion(response, 5);
  })
  .then((response) => {
    console.log("Fin de operaciones, el valor obtenido de la *, es:", response);
  })
  .catch((error) => {
    console.log("error", error);
  });
