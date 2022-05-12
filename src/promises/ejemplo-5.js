'use strict'

//podemos hacer peticiones HTTP
//fetch nos devuelve una promesa
const showData = async () => {
    try {
        const resultado = await getData()
        console.log(`Url del gato ${resultado[0].url}`);
    } catch (error) {
        console.error(error);
    }
}

//Se usa para acceder a los valores de una promesa, por fuera de esa promesa
//siempre que use async await, debo de usar las dos palabras
// Siempre colocar async antes de declarar la funcion
//podemos quitar el catch de la promesa

const getData = () => {
    return fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => data)
}

showData()