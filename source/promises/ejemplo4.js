const promesa = new Promise((resolve, reject) => {
  if (false) {
    resolve("Resuelto");
  } else {
    reject("Rechazada");
  }
});

promesa
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

//ejemplo de kike
const promesa1 = new Promise((resolve, reject) => {
  if (true) {
    resolve("Resuelta");
  } else {
    reject("Rechazada");
  }
});

promesa1
  .then((response) => {
    console.log(response);
  })
  .then(() => {
    console.log("Hola");
    return "tienes mucha tarea";
  })
  .then((respuesta) => {
    console.log("Mundo!");
    return { nombre: "Samantha, " + respuesta };
  })
  .then((respuesta) => {
    console.log(respuesta.nombre + "de matemáticas!");
  })
  .catch((error) => {
    console.log(error);
  });
