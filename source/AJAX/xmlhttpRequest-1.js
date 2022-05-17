const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let url = "https://rickandmortyapi.com/api/character/";

function getData(url, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        let error = new Error("Error: " + url);
        return callback(error, null);
      }
    }
  };

  xhttp.send();
}

getData(url, (error, data) => {
  if (error) return console.error(error);
  console.log("data", data);
  return getData(url + data.results[0].id, (error2, data2) => {
    if (error2) return console.error(error2);
    console.log("data2", data2);
  });
});
