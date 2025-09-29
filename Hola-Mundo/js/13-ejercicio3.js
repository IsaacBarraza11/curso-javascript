'use strict'

var numero1 = parseInt(prompt('introduce el primero numero'));
var numero2 = parseInt(prompt('introduce el segundo numero'));

document.write("Del "+ numero1 + " a " + numero2 + " estan los numeros: ");
for (var i = numero1; i <= numero2; i++) {
    document.write("<br/>" + i);
}