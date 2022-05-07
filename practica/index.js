'use strict'
//const URL = 'https://api.thecatapi.com/v1/images/search'
//fetch(URL)
//.then(res => res.json())
//.then(data => {
    //const img = document.querySelector('img');
    //img.src = data[0].url;
//});


const ApiGatitos = 'https://api.thecatapi.com/v1/images/search';


const fotosDgatitos = async () => {
    const response = await fetch(ApiGatitos);
    const data = await response.json();
    const img = document.querySelector('img');
    img.src = data[0].url;
};

fotosDgatitos();

const button = document.querySelector('#actualizar');
button.onclick = fotosDgatitos;



