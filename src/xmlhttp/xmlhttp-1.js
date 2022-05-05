const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

//url a la que hay que hacer la peticion
let url = 'https://rickandmortyapi.com/api/character/'

function getData(url, callback) {
  //crear un objeto a partir de la clase XMLHttpRequest
  let xhttp = new XMLHttpRequest()
  
  xhttp.open('GET', url, true)
  
  xhttp.onreadystatechange = () => {
  
  //si la respuesta ya esta lista
  if (xhttp.readyState === 4) {
    //si la respuesta es satisfactoria
    if (xhttp.status === 200) {
        //console.log(xhttp.responseText);
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        let error = new Error('Error: ' + url)
        return callback(error, null)
      }
    }
  }
  
  xhttp.send()
  
}

getData(url, (error, data) => {
  if (error) return console.error(error)
  console.log(data.results[0].name)
});
