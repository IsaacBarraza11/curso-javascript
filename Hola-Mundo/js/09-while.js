'use strict'

// While
var year = 1996;
while(year <= 2025){
    console.log('the year is:' + year);
    year++;
    if(year == 2022){ // se puede poner un break para decir hasta donde queremos que llegue
        break;
    }
}


// Do While
var years = 30;
do{
    alert('hasta que sea mayor a 33');
    years++;
}
while(years < 33) // hasta que sea menor a 33