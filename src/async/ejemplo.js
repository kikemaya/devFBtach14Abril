'use strict'

const { get } = require("express/lib/response")

// //Con un solo parametro se puede sacar los parentesis y se puede poner en una sola linea sin ser una funcion 
// const getData = () => {
//     return fetch("https://jsonplaceholder.typicode.com/")
//         .then(response => response.json())
//         .then(data => data )
// }

// const outData = getData()
// console.log(outData)

const showData = async() =>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/")
        const data = data
        console.log(data)
    }
    catch(error){
        console.error(error)
    }
}

getData()