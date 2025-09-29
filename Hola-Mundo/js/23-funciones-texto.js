'use strict'

// Transformacion de textos
var numero = 4491570808;
var texto1 = "     Welcome to JavaScript exercises developed by me given by Victor robles     ";
var texto2 = "this is an awesome course";

var dato = numero.toString(); // .toString() convierte numero a strings
    dato = texto1.toUpperCase(); // .toUpperCase() convierte a mayusculas un string
    // dato = texto1.toLowerCase(); // .toLowerCase() convierte a minusculas un string
console.log(typeof dato);
console.log(dato);


// Calcula longitud
var nombre = "Isaac Barraza Hernandez";
    // nombre = ["Isaac", "Barraza", "Hernandez"]; // en este caso arrojaria los elementos que tiene el array, 3
console.log(nombre.length); // .length es para indicar la longitud de el elemento


// Concatenar (es para unir textos)
//var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" " + texto2); // .concat() une los textos
console.log(textoTotal);


// Metodo de busqueda
// var busqueda = texto1.indexOf("by"); // .indexOf() cuenta el numero de caracteres hasta encontrar el texto con coincidencia en este caso ('by')
//var busqueda = texto1.search("by"); // es lo mismo que .indexOf()
//var busqueda = texto1.match("by"); // regresa donde se encuentra la palabra que busco en un array
//var busqueda = texto1.substr(11,4); // .substr extrae el string desde donde se le indica, en este caso a partir del caracter numero 11 va a mostrar los 4 caracteres que le siguen
//var busqueda = texto1.startsWith("to", 8); // a partir del caracter 8 revisa que se comience con 'to'
//var busqueda = texto1.includes("me"); // busque que en la cadena de caracteres se encuentre el texto 'me'


// Transformacion de textos
//var busqueda = texto1.replace("developed", "created"); // .replace() reemplaza el strig dentro de la cadena por el nuevo string
//var busqueda = texto1.slice(30); // .slice() corta el texto hasta el caracter numero 30
//var busqueda = texto1.split(); // convierte la cadena a un array
//var busqueda = texto1.split(", "); //convierte la cadena a un array y las divide por el espacio ", "
var busqueda = texto1.trim(); // .trim() quita los espacios sobrantes
console.log(busqueda);