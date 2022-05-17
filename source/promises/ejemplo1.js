"use strcit";
//definir la estructura de mi promesa
let x = 10;
const promesa = new Promise((resolve, reject) => {
  if (x === 10) {
    resolve("La varaible es igual a 10");
  } else {
    reject("la variale no es igual a 10");
  }
});

//recibir la data de mi promesa
promesa
  .then((response) => {
    console.log("Success: " + response);
  })
  .catch((error) => console.error("Error" + error));

let nombre = "paco";
const promesa1 = new Promise((resolve, reject) => {
  if (nombre === "paco") {
    resolve("El nombre es igual a paco");
  } else {
    reject("El nombre no es paco");
  }
});

promesa
  .then((response) => {
    console.log("Success: " + response);
  })
  .catch((error) => console.error("Error" + error));

//promesa 2
let carro = "ferrari";
const promesa2 = new Promise((resolve, reject) => {
  if (carro === "ferrari") {
    resolve("El carro es un ferrari");
  } else {
    reject("El carro no es un ferrari");
  }
});

promesa2
  .then((response) => {
    console.log("Success: " + response);
  })
  .catch((error) => console.error("Error" + error));

//promesa 3

let perro = "pitbull";
const promesa3 = new Promise((resolve, reject) => {
  if (perro === "pitbull") {
    resolve("La raza del perro es American Pitbull Terrier");
  } else {
    reject("La raza del perro es American Pitbull Terrier");
  }
});

promesa3
  .then((response) => {
    console.log("Success: " + response);
  })
  .catch((error) => console.error("Error" + error));

//promesa 4
let deporte = "box";

const promesa4 = new Promise((resolve, reject) => {
  if (deporte === "box") {
    resolve("El deporte es box");
  } else {
    reject("El deporte no es el box");
  }
});

promesa4
  .then((response) => {
    console.log("Sucess: " + response);
  })
  .catch((error) => {
    console.error("Error" + error);
  });

//promesa 5
let pasion = "coding";

const promesa5 = new Promise((resolve, reject) => {
  if (pasion === "coding") {
    resolve("Mi pasion es codear");
  } else {
    reject("Mi pasión no es codear");
  }
});

promesa5
  .then((response) => {
    console.log("Success" + response);
  })
  .catch((error) => {
    console.error("Error" + error);
  });

/*
promesa
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data));
*/
