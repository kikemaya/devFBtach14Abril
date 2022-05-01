'use strict'
//ejemplos de: ¿què se ejecuta primero?
//Ej. 1
console.log('1');
console.log('2');

setTimeout(() => {
    return console.log('3');
}, 3000);

setTimeout(() => {
    return console.log('4');
}, 2000);

console.log('5');

//Ej. 2
setTimeout(() => {
    return console.log('tres');
}, 0);
console.log('1');                

console.log('2');


for (let i = 0; i < 100; i++) {
    console.log(i)
}
console.log('4');