'use strict'

// Funciones anonimas
// es una funcion que no tiene nombre

var pelicula = function(nombre) {
    return "La pelicula es: " + nombre; // en consola se usa la funcion de la siguiente manera: pelicula("nombre parametro")
}

var sumame = function(numero1, numero2, sumaYmuestra, sumaPorDos){
    var suma = numero1 + numero2;
    sumaYmuestra(suma);
    sumaPorDos(suma);
    return suma;
}

sumame(5, 7, 
    function(dato){ // las funciones de flecha se usan de esta manera para sustituir la palabra function: (dato) => { console.log("La suma es: ", dato); }
        console.log("La suma es: ", dato);
},
    (dato) => {
        console.log("La suma por dos es:", (dato*2));
    }
);

// console.log(sumame(4, 8));