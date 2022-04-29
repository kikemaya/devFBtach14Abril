function sumaNumeros(num1, num2){
    let total = num1 + num2
    return total
}
console.log(sumaNumeros( 3, 4))



function calculadora(n1, n2, computo){
    return computo(n1,n2)
}

function suma(n1, n2) {
    return console.log(n1 + n2)
}
function resta(n1, n2) {
    return console.log(n1 - n2)
}
function multiplicar(n1, n2) {
    return console.log(n1 * n2)
}
function dividir(n1, n2){
    return console.log(n1/n2)
}

calculadora(10, 2, resta)
