'use strict'

function porPantalla (numero1, numero2) {
    document.write('suma:' + (numero1 + numero2) + '<br/>');
    document.write('resta:' + (numero1 - numero2) + '<br/>');
    document.write('multiplicacion:' + (numero1 * numero2) + '<br/>');
    document.write('division:' + (numero1 / numero2) + '<br/>');
}

function porConsola (numero1, numero2) {
    console.log('suma:' + (numero1 + numero2) + '\n');
    console.log('resta:' + (numero1 - numero2) + '\n');
    console.log('multiplicacion:' + (numero1 * numero2) + '\n');
    console.log('division:' + (numero1 / numero2) + '\n');
}

function calculadora (numero1, numero2, estado = false) { // se pueden mandar los parametros ya con info por ejemplo numero1 = 2
        if(estado == false){
        porConsola(numero1, numero2);
    }
    else{
        porPantalla(numero1, numero2);
    }

    return "Hola soy la calculadora!!";
}

// invocar o llamar funcion

calculadora(20, 2, true);
calculadora(20, 9);
/*
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        calculadora(i, j);
    }
}
    */
   
//console.log(calculadora());