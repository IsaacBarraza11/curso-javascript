'use strict'

// Parametros Rest y Spread

 function listaFrutas(fruta1, fruta2, ...resto_de_frutas) { // los tres puntos se utilizan para indicar que los demas parametros ingresados se ingresaran a un array
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(resto_de_frutas); // imprime ['Durazno', 'Sandia', 'Platano']
 }


listaFrutas("Melon", "Mango", "Durazno", "Sandia", "Platano");
listaFrutas("cereza", "ciruela", "frambuesa", "fresa", "granada", "guayaba", "mandarina", "naranja", "melon", "membrillo");

var frutas = ["frambuesa", "fresa"];
listaFrutas(frutas, "granada"); // imprime de la siguiente manera:          Fruta 1: frambuesa,fresa    Fruta 2: granada
listaFrutas(...frutas, "granada"); // imprime de la siguiente manera:       Fruta 1: frambuesa          Fruta 2: fresa      ['granada']