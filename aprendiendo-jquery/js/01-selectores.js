'use strict'

$(document).ready(function(){ // el signo de dolar siempre se refiere a JQuery
    console.log("estamos listos!!!");

    // Selector de ID

    var rojo = $("#rojo").css("background","red")
                         .css("color","white");

    var amarillo = $("#amarillo").css("background","yellow")
                                 .css("color","blue");

    var verde = $("#verde").css("background","green")
                           .css("color","gray");

    // Selectores de Clase
    var mi_clase = $(".zebra").css("padding","5px");
    mi_clase.css("border", "5px dashed black");
    console.log(mi_clase);

    $(".sin_borde").click(function(){
        $(this).addClass('zebra');
    });


    // Selectores de etiquetas
    var parrafos = $('p').css('cursor', 'pointer'); // el cursor pointer le permite modificar el cursor
    parrafos.click(function(){
        var thiss = $(this); // para simplificar el uso de $(this)
        if(!thiss.hasClass('grande')){
            thiss.addClass('grande');
        }
        else{
            thiss.removeClass('grande');
        }
    });


    // Selectores de atributo
    $('[title="Perfil"]').css('background', "#27F5F5");
    $('[title="Linkedin"]').css('background', "#0DE010");
    $('[title="ChatGPT"]').css('background', "#BDE00D");


    // Otros
    $('p, a').addClass('margen-superior'); // se pueden seleccionar dos elementos p y a

    var busqueda = $('#caja').find('.resaltado');
    var busqueda2 = $('#caja.resaltado');
    console.log(busqueda);
    console.log(busqueda2);

    // Parents
    var parent = $('#elemento2').parent().parent().find('.resaltado'); // sale de dos elementos (por los dos parents) para buscar todo lo que tenga class="resaltado"
    console.log(parent);
});