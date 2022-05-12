//importo el paquete de npm, para poder usarlo en este archivo

// XMLHttpRequest = clase creada por microsoft, para hacer peticiones HTTP usando verbos HTTP como GET, POST, PUT, PATCH, DELETE, etc
// es modules = webpack, nos permie trabajar de forma
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

//url a la que hay que hacer la peticion
let url = 'https://rickandmortyapi.com/api/character/'

//declaramos funcion para traer data. Le pasamos la url y un callback como params
function getData(url, callback) {

  //crear un objeto llamado xhttp, a partir de la clase XMLHttpRequest
  let xhttp = new XMLHttpRequest()

  //abrimos una peticion con el metodo http de tipo GET, la ruta y si es una request asincrona
  xhttp.open('GET', url, true)

  //Creamos la estructura de la peticion
  xhttp.onreadystatechange = () => {

    //si la respuesta ya esta lista
    if (xhttp.readyState === 4) {
      //si la respuesta es satisfactoria = 'Ok'
      if (xhttp.status === 200) {
        //console.log(xhttp.responseText);
        //ejecutamos el callback que habiamos recibido como param y le pasamos el error, en este caso nulo y la respuesta
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        //si la respuesta no es satisfactoria, creo un nuevo error
        let error = new Error('Error: ' + url)
        //ejecutamos el callback que habiamos recibido como param y le pasamos el error, en este caso si hay y la respuesta quedò nula
        return callback(error, null)
      }
    }
  }
  //por ùltimo, enviamos la peticiòn
  xhttp.send()

}

//usamos la funcion para generar peticiones encadenadas, basadas en callbacks.
getData(url, (error, data) => {

  if (error) return console.error(error)
  console.log(data);
  return getData(url + data.results[0].id, (error2, data2) => {

    if (error2) return console.error(error2)
    console.log(data2);
    return getData(url + data.results[0].id, (error3, data3) => {

      if (error3) return console.error(error3)
      console.log(data3);

    })

  })

});