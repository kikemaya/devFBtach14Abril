'use strict'

//para convertir un string a un json en condiciones "normales"
// JSON.parse(string) = json

//para convertir un string a un json que viene de una promesa
// string.json()

const getData = () => {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            let res = response.json()
            console.log(res)
            return res
        })
        .then((data) => {
            console.log(data)
            return 4
        })
        .then(cuatro => console.log(cuatro))
        .catch(error => console.error(error))

}

getData()