'use strict'

// Arrays, arreglos, matrices
var nombres = ["Isaac", "Diana", "Victoria", "Yarely", 29, 27, 1, 1, true];
var lenguajes = new Array('PHP', 'Java', 'JavaScript');

console.log(nombres[2]); // arrojara Victoria porque se comienza con 0 (si pusiera 0 mostraria Isaac)
console.log(lenguajes);
console.log(nombres.length);

/*
var elemento = parseInt(prompt('Que elemento del array quieres?'));
if(elemento >= nombres.length) {
    alert('Ingresa un numero menor a ' + nombres.length);
}
else {
    alert(nombres[elemento]);
}
    */

document.write("<h1>el contenido del array es: </h1>");
document.write('<ul>');

for(var i = 0; i < nombres.length; i++) { // mientras que i sea menor o igual a
    document.write('<li>' + nombres[i] + '</li>');
}
document.write('</ul>');


document.write("<h1>el contenido del array es: </h1>");
document.write('<ul>');

nombres.forEach((nombres) => {
    document.write('<li>' + nombres + '</li>');
});

document.write('</ul>');
