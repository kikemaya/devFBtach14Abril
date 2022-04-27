//crean las funciones para restar, multiplicar
//y dividir dos numeros
function suma(num1, num2) {
    return console.log(num1 + num2)
}
//funcion de orden superior = funcion(otraFuncion)
function calculadora(num1, num2, computo) {
    //callback = funcion de orden superior, que invoca a su parametro
    return computo(num1, num2)
}

calculadora(98, 16, suma)

function resta(num3, num4){
    return console.log(num3 - num4)
}
function restar(num3, num4, resta) {
    return resta(num3, num4)
}
restar(98, 16, resta)

function dividir(num5, num6){
    return console.log(num5 / num6)
}
function diviciones(num5, num6, divicion) {
    return divicion(num5, num6)
}
diviciones(98, 16, dividir)
