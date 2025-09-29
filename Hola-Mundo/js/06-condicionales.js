'use strict'

// condicional IF


// mayor que: >
// menor que que: <
// mayor o igual que: >=
// menor o igual que: <=
// igual: ==
// distinto: !=

var edad = 19;
var edad2 = 100;
var name = "Isaac Barraza";
if(edad > edad2){
    console.log('edad1 es mayor a edad2');
}
else {
    console.log('edad1 es menor a edad2');
}

if(edad >= 18){
    // es mayor de edad
    console.log(name + ' tiene ' + edad + ' años, es mayor de edad');
    if(edad <= 33){
        console.log('aun eres joven');
    }
    else if(edad > 33){
        console.log('ya eres viejito');
    }
}
else {
    // es menor de edad
    console.log(name + ' tiene ' + edad + ' años, es menor de edad');
}


// operadores logicos


// AND: &&
// OR: ||
// Negacion: !

var year = 2025;

// Negacion
if (year != 2020) {
    console.log('el año es:' + year);
}

//AND
if (year >= 2020 && year <= 2020 && year != 2018) {
    console.log('era actual');
}
else {
    console.log('ya pasamos la era actual');
}

// OR
if (year == 2008 || year == 2018 || year == 2028) {
    console.log('el año termina en 8');
}
else {
    console.log('el año no esta registrado');
}