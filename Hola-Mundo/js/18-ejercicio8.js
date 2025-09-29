'use strict'

var numero1 = parseInt(prompt('Ingresa el primero numero'));

while (isNaN(numero1) || numero1==0) {
    numero1 = parseInt(prompt('Ingresa el primero numero'));
}

var numero2 = parseInt(prompt('Ingresa el segundo numero'));
while (isNaN(numero2) || numero2==0) {
    numero2 = parseInt(prompt('Ingresa el segundo numero'));
}

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicar = numero1 * numero2;
var dividir = numero1 / numero2;

    var sumaT = numero1 + ' + ' + numero2 + ' = ' + suma;
    var restaT = numero1 + ' - ' + numero2 + ' = ' + resta;
    var multiplicarT = numero1 + ' * ' + numero2 + ' = ' + multiplicar;
    var dividirT = numero1 + ' / ' + numero2 + ' = ' + dividir;

document.write( sumaT + '<br/>' + restaT + '<br/>' + multiplicarT + '<br/>' + dividirT);
alert(sumaT + '\n' + restaT + '\n' + multiplicarT + '\n' + dividirT);
console.log(sumaT + '\n' + restaT + '\n' + multiplicarT + '\n' + dividirT);