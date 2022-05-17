"use strict";

const promesa = new Promise((resolve, reject) => {
  //console.log("JAJAJ");
  const number = Math.floor(Math.random() * 10);

  setTimeout(() => {
    number > 1 ? resolve(number) : reject(`Todo mal!, el número es ${number}`);
  }, 1000);
});

function suma(num1, num2) {
  return num1 + num2;
}
function mult(num1, num2) {
  return num1 * num2;
}

promesa
  .then((response) => {
    console.log("r1", response);
    return suma(response, 5);
  })
  .then((response) => {
    console.log("r2", response);
    return mult(response, 5);
  })
  .then((response) => {
    console.log("r3", response);
    console.log(`Fin de operaciones el valor total es: ${response}`);
  })
  .catch((error) => {
    console.log("error", error);
  });
