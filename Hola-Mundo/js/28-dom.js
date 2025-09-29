'use strict'

// DOM Domain Object Model

//var caja = document.getElementById("micaja"); // se usa para seleccionar unicamente por id
var caja = document.querySelector("#micaja");

function cambiarColor(color){
    caja.style.color = color;
}

caja.innerHTML = "modicamos la caja desde JS";
caja.style.background = "blue";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "rojo";

// conseguir elementos por etiquetas
var todosLosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var content = todosLosDivs[2];
content.innerHTML = "this is a new text!";
content.style.background = "green";

var valor;
    for(valor in todosLosDivs){
        if(typeof todosLosDivs[valor].textContent == 'string'){
            var parrafo = document.createElement("p");
            var texto = document.createTextNode(todosLosDivs[valor].textContent);
            parrafo.append(texto);
            document.querySelector("#miseccion").append(parrafo);
        }
    };

seccion.append(hr);


// CONSEGUIR ELEMENTOS POR SU cLASE CSS

var divRojos = document.getElementsByClassName('rojo');
var divAmarillos = document.getElementsByClassName('amarillo');
divAmarillos[1].style.background = "yellow";
console.log(divAmarillos);

for (var divs in divRojos) {
    if(divRojos[divs].className == "rojo"){
        divRojos[divs].style.background = "red";
    }
}


// Query selector
var id = document.querySelector("#encabezado");
console.log(id);
var claseRojo = document.querySelector(".rojo"); // o puede ser div.rojo (en el HTML se ve como <div class="rojo">)
console.log(claseRojo);
var etiqueta = document.querySelector("div");
console.log(etiqueta);


//console.log(divRojos);
//console.log(caja);
//console.log(todosLosDivs);
//console.log(content);