//1.utilizo una libreria que me va a permitir tener acceso aun objeto desde node para poder hacer peticiones. el objeto HML
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//protocolo de transferencia de hipertexto
//hace petciones con verbos: get, post, put, patch y delete.

//2.url a la que hay que hacer la peticion
let url = "https://rickandmortyapi.com/api/character/";
//al final de una api, agregar una/

//2.5 funcion para obtener data o de peticion
function getData(url, callback) {
  //3.crear un objeto a partir de la clase XMLHttpRequest
  //XML - PETICION, HTTP- POR DONDE - REQUEST -PETICIÓN
  let xhttp = new XMLHttpRequest();
  //instacia de una clase (new) = objeto
  // el objeto xhttp es una instancia de la clase XML...
  //utilizo un objeto para poder utilizar sus metodos y propiedades

  //5.Abrimos una peticion get para pedir datos a la url que defini arriba
  xhttp.open("GET", url, true);

  //6. ejecuto un funcion, la funcion la traes desde la clase xmlhttprequest
  //cuando haya una respuesta, queremos preguntar

  xhttp.onreadystatechange = () => {
    //7.si la respuesta ya esta lista, entonces...
    //ready state  = 4 estados de una peticion, 4 = lista
    if (xhttp.readyState === 4) {
      //8.una vez la que la respuesta ya se proceso,  me va a dar un status 100,200,300,400  200 = ok
      // Y... si mi objeto tiene un status satisfactorio
      if (xhttp.status === 200) {
        //el objeto responde con texto
        //console.log(xhttp.responseText);
        //9. entonces... ejecuta una callback, que reciba como parametro   un  error (null) no hay error,
        //y que la respuesta me la pasee  aún JSON.
        callback(null, JSON.parse(xhttp.responseText));
        //los callbacks, por convencion y como primer parametro piden que se les pase un error, y como segundo parametro, la respuesta se la pedimos en texto convetido a JSON (Objeto de arreglos).
      } else {
        //10. Si la respuesta no es satsifactoria, creo una variable que se llama error, y usamos la clase error de JS,  que va a recibir una cadena de texto que se llama error, y que me diga de donde viene el error url
        let error = new Error("Error: " + url);
        //regresa un callback que tenga un error y que no tenga respuesta.
        //imprimo error, no hay respuesta, pero si hay error.
        return callback(error, null);
      }
    }
  };

  xhttp.send();
}

//11.llamo a la funcion getaData, get data hace la peticion para traerse los datos de la APIS.
//recibe como parametro un url y una funcion, al ser un callback le puede pasar la funcion anónima.
//al callback le estoy pasando dos parametros un error y una data

getData(url, (error, data) => {
  //si hay un error, muestrame el error.
  if (error) return console.error(error);
  //si no hay un error imprimeme la data
  console.log("data", data);
  // `https://rickandmortyapi.com/api/character/1`
  //yo puedo hacer callbacks anidados o encadenamiento de callbacks
  //12. retorno la funcion get data, coloco la url y a esa url le voy a concatenar el id del personaje al quequiero acceder, tambien va a esperar un error o una neuva data.
  return getData(url + data.results[0].id, (error2, data2) => {
    if (error2) return console.error(error2);
    console.log("data2", data2);
    //encadeno esta funcion y le voy a pasar la data de la primer funcion para obetener una segunda o tercer data.
    return getData(url + data.results[1].id, (error3, data3) => {
      if (error3) return console.error(error3);
      console.log("data3", data3);
    });
  });
});
