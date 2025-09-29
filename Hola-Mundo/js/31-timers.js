'use strict'

window.addEventListener('load', () => { // recordar que es funcion y se puede escribi tambien 'load', function() {

    // Timers
    function intervalo(){
        var tiempo = setInterval(function(){ // la funcion setInterval se va a ejecutar cada tiempo ingresado
            console.log("Set interval ejecutado");
            var size = document.querySelector("h1");
            if(size.style.fontSize == "50px") {
                size.style.fontSize = '40px';
            }
            else {
                size.style.fontSize = '50px';
            }

        }, 1000);

        return tiempo;
    }

    var tiempo = intervalo();
    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function (){
        clearInterval(tiempo);
        alert('se detuvo el intervalo');
    });

    var start = document.querySelector("#start");

    start.addEventListener("click", function (){
        intervalo();
    });
});