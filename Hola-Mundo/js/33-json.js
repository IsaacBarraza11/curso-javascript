'use strict'

// JSON (Java Script Object Notation)

window.addEventListener('load', () => {

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

var peliculas = [
    {titulo: "300", year: 2005, pais: "Grecia"},
    pelicula
];

var caja_peliculas = document.querySelector("#peliculas");
var index;
for (index in peliculas){
  var p = document.createElement("p");
  p.append(peliculas[index].titulo + " - " + peliculas[index].year);  
  console.log(p);
  caja_peliculas.append(p);
};
console.log(peliculas);
});