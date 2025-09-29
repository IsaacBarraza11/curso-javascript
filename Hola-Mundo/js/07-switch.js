'use strict'

var edad = 25;
var imprime = " ";
var adulto = edad > 18 && edad < 40;

switch(edad) {
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres adulto";
    break;
    case 40:
        imprime = "Crisis de los 40";
    break;
    case 75:
        imprime = "Ya eres viejito";
    break;
    default:
        imprime = "Tu edad es neutra";
}
console.log(imprime);