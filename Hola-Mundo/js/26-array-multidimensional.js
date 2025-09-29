'use stric'

var peliculas = ['toy story', 'nemo', 'up', 'wall-e', 'mulan'];
var categorias = ['miedo', 'accion', 'caricaturas'];
var cine = [peliculas,categorias];

console.log(cine[1][2]); // trae categorias [1], de ahi llama el elemento [2] caricaturas
console.log(cine[0][0]);

peliculas.push('300');


var nuevaPeli = '';

do{
    nuevaPeli = prompt('ingresa una nueva pelicula');
    peliculas.push(nuevaPeli);
}
while(nuevaPeli != 'acabar');

peliculas.pop(); // .pop() elimina el ultimo elemento de un array

// eliminar registros a partir de ese index, incluyendolo
var index = peliculas.indexOf('wall-e'); // es para encontrar el index

if(index > -1){ // el -1 es para decir que si no es diferente de 1 va a hacer
    //peliculas.splice(index); // asi borra todos los que estan a partir del index
    peliculas.splice(index,1); // asi se borra solamente 1 (el que pusimos en el index)
}

// convertir string a aray
var texto = 'anita, lava, la, tina';
var cadena = texto.split(", ");

// ordenar arreglos por orden alfabetico
peliculas.sort();

// le da la vuelta al array donde el ultimo sera el primero
categorias.reverse();


// uso de For in ( recorrer array )
for(let pelicula in peliculas) {
    document.write("<li>" + peliculas[pelicula] + "</li>");
}


// busquedas dentro de array
pelis = 'toy story'
var busqueda = peliculas.find(function(pelicula){
    return pelicula == pelis;
});

console.log(peliculas);
console.log(categorias);
console.log(cadena);
console.log(busqueda);