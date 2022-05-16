'use strict'

//Async-await, nos permite trabajar respuestas de promesas "asincronas" con funciones sincronas
const getData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => data)
}
const showData = async () => {
    try {
        const data = await getData()
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

showData()
