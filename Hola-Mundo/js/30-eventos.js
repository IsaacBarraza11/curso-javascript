'use strict'

// Eventos del mouse

// esta funcion ayuda a que se pueda poner el script de la pagina al inicio y cargue todo sin problema
window.addEventListener('load', () => { // funcion tipo flecha


    var boton = document.querySelector("#boton");

    function cambiarColor(){
        console.log("click");
        var bg = boton.style.background;
        if(bg == "green") {
            boton.style.background = "red";
        }
        else {
            boton.style.background = "green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc"
        return true;
    }

    // evento click
    boton.addEventListener('click', function(){
        cambiarColor();
        this.style.border = "5px solid black";
        console.log(this);
    });


    // Evento Mouse over
    boton.addEventListener('mouseover', function(){
        boton.style.background = "pink"; // es decir que cuando se le ponga el mous encima cambiara de color a rosa (pink)
    });

    // Mouseout
    boton.addEventListener('mouseout', function(){
        boton.style.background = "blue"; // cuando el mouse salga del area del boton se pondra azul
    });


    // Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function() { // al darle click dentro del input lanzara ese mensaje de consola
        console.log("[Focus] estas dentro del input");
    });
    // Blur
    input.addEventListener('blur', function() { // al darle click fuera del input lanzara ese mensaje de consola
        console.log("[Blur] estas fuera del input");
    });

    // Keydown
    input.addEventListener('keydown', function() { //cada tecla que sean pulsadas se capturas
        console.log("[Keydown] Pulsando una tecla", String.fromCharCode(event.keyCode));
    });

    // Keypress
    input.addEventListener('keypress', function() { //cada tecla que deje de presionar mientras se escribe
        console.log("[keypress] Tecla presionada", String.fromCharCode(event.keyCode));
    });

    // Keyup
    input.addEventListener('keyup', function() { //cada que se levanta el dedo de la tecla
        console.log("[keyup] Tecla presionada", String.fromCharCode(event.keyCode));
    });

});