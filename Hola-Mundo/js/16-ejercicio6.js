'use strict'

var numero = parseInt(prompt('ingresa un numero'));

while (isNaN(numero)){
    numero = parseInt(prompt('ingresa un numero'));
}

if (numero%2 == 0) {
    alert(numero + ' es par');
}
else {
    alert(numero + ' es impar');
}