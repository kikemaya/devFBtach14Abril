const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

let url = 'https://rickandmortyapi.com/api/character/'


let xhttp = new XMLHttpRequest()

xhttp.open('GET', url, true)

xhttp.onreadystatechange = () => {
  
  if (xhttp.readyState === 4) {
    if (xhttp.status === 200) {
      console.log(xhttp.responseText);
        // callback(null, JSON.parse(xhttp.responseText));
      } else {
        let error = new Error('Error: ' + url)
        console.log(error);
        // return callback(error, null)
      }
    }
  }

xhttp.send()
