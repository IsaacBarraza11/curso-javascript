'use strict'
while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){ // la funcion isNaN es para indicar que si no es numero
    var numero1 = prompt("escribe el primer numero");
    var numero2 = prompt("escribe el segundo numero");
}

if (numero1 > numero2 && numero1 != numero2) {
    alert('el numero mayor es: ' + numero1);
    alert('el numero menor es: ' + numero2);
}
else if(numero1 < numero2 && numero1 != numero2){
    alert('el numero mayor es: ' + numero2);
    alert('el numero menor es: ' + numero1);
}
else{
    alert('son iguales');
}