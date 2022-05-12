'use strict'

const promesa = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout(() => {
    // Se escribe asi si no lleva coma `Todo bien! El numero es ${number}`
    number > 1 ? resolve(number) : reject(`Todo mal!, el numero es ${number} :(`);
  }, 1000);
})

function suma(num1, num2) {
  return num1 + num2
}

function multi(num1, num2) {
  return num1 * num2
}

promesa
.then((response) => {
  console.log('response1 ', response);
  return suma(response, 5);
}).then(response => {
  console.log('response2 ', response);
  return multi(response, 5);
}).then(response => {
  console.log('Fin de operaciones el valor obtenido es: ', response);
}).catch((error) => {
  console.log('error ', error);
})
