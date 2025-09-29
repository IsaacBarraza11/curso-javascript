'use strict'

function holaMundo(texto) {
    var hola_mundo = "Texto dentro de funcion"; // esta variable no puede ser leida fuera de la funcion
    console.log(texto);
    console.log(numero.toString()); // el .toString convierte el numero a string()
    console.log(hola_mundo);

}

var numero = 11; // estas variables pueden ser leidas fuera y dentro de todos lados porque estan globales
var texto = "Hola mundo soy una variable global"; // estas variables pueden ser leidas fuera y dentro de todos lados porque estan globales

holaMundo(texto);