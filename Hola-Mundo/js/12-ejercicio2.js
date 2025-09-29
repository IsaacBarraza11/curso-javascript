'use strict'

var suma = 0;
var media = 0;

do{
    var numero = parseInt(prompt('ingresa un numero (escribe uno negativo para terminar)', 0));
    if (numero >= 0) {
        suma = suma + numero;
        media++;
        console.log('la suma es:' + suma);
        console.log('la media es:' + media);
    }
}
while(numero > 0)

    media=media-1;
    alert('la suma es:' + suma);
    alert('la media es:' + (suma/media));