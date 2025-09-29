'use strict'

var numero = parseInt(prompt('Ingresa un numero'));

document.write("Los numeros que dividen al "+ numero + " son: ");

for (var i = numero; i >= 0; i--){
    var divisor = numero / i;
    if(divisor == parseInt(divisor)) { // se puede usar tambien divisor%i == 0 (el % es para indicar que es el restante) borrando divisor
        document.write("<br/>" + divisor);
    }
}