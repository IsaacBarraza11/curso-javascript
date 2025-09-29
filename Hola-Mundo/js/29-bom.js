'use strict'

// BOM - Browser Object Model


function getBom (){
console.log(window.innerHeight); // mide la altura de la pantalla sin contar si esta abierto la consola
console.log(window.innerWidth); // mide el ancho de la pantalla sin contar si esta abierto la consola
console.log(screen.height); // mide la altura de la pantalla en general
console.log(screen.width); // mide el ancho de la pantalla en general
console.log(window.location); // donde se encuentra el archivo que utilizamos para la pagina
console.log(window.location.href);
}

function redirect(url){
    window.location.href = url; // direcciona a la url que le mandemos 
}

function abrirVentana(url) {
    //window.open(url); // abre una nueva pestania con la url que queramos
    window.open(url, "", "width=400, height=400"); // abre una nueva ventana
}

getBom();