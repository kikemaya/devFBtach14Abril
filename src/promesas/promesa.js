// resolve es para cuando se genera una respuesta correcta.
// resolve es para cuando se genera una respuesta incorrecta.
// then === resolve
// catch === reject

const promesa = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout(() => {
    number > 5 ? resolve(number) : reject(new Error("Menor a 5"));
  }, 5000);
});

promesa
.then(respuesta => {
  console.log('El valor es ', respuesta);
}).catch(error => {
  console.log('error ', error);
});
