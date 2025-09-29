'use strict'


// test con var
var numero = 40;
console.log(numero); //imprime 40

if(true){
 var numero = 50;
 console.log(numero); //imprime 40
}

console.log(numero); //imprime 40


// test con let

var texto = "curo de JavaScript";
console.log(texto); // imprime "curo de JavaScript"

if(true){
    let texto = "este es otro ejemplo";
    console.log(texto); // imprime "este es otro ejemplo"
}

console.log(texto); // imprime "curo de JavaScript"