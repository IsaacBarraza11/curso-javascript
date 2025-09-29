$(document).ready(function(){ // el signo de dolar siempre se refiere a JQuery

    // MouseOver y MouseOut
    var caja = $("#caja");
    /*
    caja.mouseover(function(){
        $(this).css("background", "green");
    });

    caja.mouseout(function(){
        $(this).css("background", "blue");
    });
    */

    function cambiaVerde(){
        $(this).css("background", "green");
    };

    function cambiaAzul(){
        $(this).css("background", "blue");
    };

    // Hover
    caja.hover(cambiaVerde,cambiaAzul);


    // Click, Doble click
    caja.click(function(){
        $(this).css("background", "#0D8CE0")
               .css("color", "white");
    });

    caja.dblclick(function(){
        $(this).css("background", "#b327c0ff")
               .css("color", "#27c067ff");
    });


    // focus y blur
    var nombre = $("#nombre");
    var datos = $("#datos");
    nombre.focus(function(){ // accion que hara cuando se haga focus
        $(this).css("border", "5px solid #2182c2ff");
    });

    nombre.blur(function(){
        $(this).css("border", "5px solid transparent"); // accion que se hace al quitar focus
        datos.text( $(this).val()).show(); // extrae texro de nombre y lo pone en datos
    });


    // mousedown y mouseup
    datos.mousedown(function(){
        $(this).css("border-color", "gray");
    });

    datos.mouseup(function(){
        $(this).css("border-color", "red");
    });

    
    // Mousemove
    $(document).mousemove(function(){
        //console.log("En X: " + event.clientX);
        //console.log("En Y: " + event.clientY);
        var sigueme = $("#sigueme");
        $("body").css("cursor","none"); // puede ocultar el cursor
        sigueme.css("left", event.clientX) //es para que se mueva a la direccion de X
               .css("top", event.clientY); //es para que se mueva a la direccion de Y
    });

});