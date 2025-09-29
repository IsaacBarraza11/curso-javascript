'use strict'

var numero1 = 4;
var numero2 = 11;
var numero3 = 1996;
var operacion = numero1 + numero2 + numero3;

alert("El resultado de la operacion es: " + operacion);

// Tipos de datos
var numeros = 2011;
var textos = "hola mundo";
var boolean_True_False = true; 
var numero_falso = "2025";
var concatenado = Number(numero3) + operacion; // la funcion Number combierte el string a numero
var decimal = 11.12;
var parseInt_function = parseInt(decimal); // la funcion parseInt combierte a solo entero el numero

console.log(Number(numero_falso)+operacion);
console.log(concatenado);
console.log(parseInt_function);

console.log(typeof numeros); // la funcion typeof devuelve el tipo de contenido que tiene la variable
console.log(typeof textos); // string
console.log(typeof boolean_True_False); // boolean
console.log(typeof numero_falso); // string 
console.log(typeof concatenado); // number