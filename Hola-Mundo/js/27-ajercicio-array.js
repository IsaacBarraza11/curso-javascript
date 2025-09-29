'use strict'

var numeros;
var arreglo=[];

    for(var i = 1; i <= 6; i++){
        numeros = parseInt(prompt('Ingresa un numero'));
        arreglo.push(numeros);
        console.log(numeros);
    }

    var busquedaInput = parseInt(prompt('cual numero quieres buscar'));
    var posicion;
    var esta = false;
    var busqueda = arreglo.find(function(buscar){
        if(buscar == busquedaInput) {
            posicion = arreglo.indexOf(busquedaInput) + 1;
            return esta = true;
        }
        else {
            return esta = false;
        }
        });

    console.log(arreglo);
    document.write(
        `
        <h1>Arreglos</h1>
        <h3>2. el arreglo es: ${arreglo}</h3>
        <h3>3. el arreglo ordenado es: ${arreglo.sort(function(a, b){return a-b})}</h3>
        <h3>4. el arreglo en reversa es: ${arreglo.reverse()}</h3>
        <h3>5. la longitud del arreglo es: ${arreglo.length}</h3>
        <h3>6. fue encontrado?: ${esta} y la posicion es ${posicion}</h3>
        `
    );
