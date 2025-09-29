'use strict'

var numero = parseInt(prompt('cual tabla de multiplicar quieres?'));

document.write("<h1>" + 'Tabla del ' + numero + "</h1>");
for (var i = 1; i<=10; i++) {
    var multiplicacion = numero * i;
    document.write("<br/>" + numero + ' x ' + i + ' = ' + multiplicacion);
}