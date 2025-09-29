'use strict'

window.addEventListener('load', () => {

    //Local storage
    if(typeof(storage) !== 'undefined'){
        console.log("Localstorage disponible!");
    }
    else{
        console.log("Incompatible con Localstorage!");
    }

    // Guardar datos
    localStorage.setItem("titulo", "Curso de JS de Barraza");

    // Recuperar elemento
    document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

    // Guardar onjetos
    var usuario = {
        nombre: "Isaac Barraza",
        email: "isaacbarraza26@gmail.com",
        web: "isaacbarraza.mx"
    };

    // los datos no se pueden mandar como JSON, se tienen que guardar como String

    localStorage.setItem("usuario", JSON.stringify(usuario)); // Cons el stringify se puede convertir de JSON a string

    // Recuperar objeto
    var userJSON = JSON.parse(localStorage.getItem("usuario"));
    console.log(userJSON);

    document.querySelector("#datos").append(" " + userJSON.email + " - " + userJSON.nombre);

    // elimina localtorage de un dato en especifico
    localStorage.removeItem("usuario");
    
    // elimina todo de localstorage
    localStorage.clear();
});