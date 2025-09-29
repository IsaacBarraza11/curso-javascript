var bicileta = {
    color: "rojo",
    modelo: "bmx",
    frenos: "De disco",
    velocidadMaxima: "60km",
    cambiarColor: function(nuevo_color){ // funcion 
        //bicileta.color = nuevo_color;
        this.color = nuevo_color; // es lo mismo de arriba, se llama a bicicleta con this
    } 
};

bicileta.cambiarColor("blanco");
console.log(bicileta);