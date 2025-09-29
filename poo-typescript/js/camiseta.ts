// Interface
interface CamisetaBase{
    setEstadoPlayera(estado);
    getEstadoPlayera();

}

// Clase (es el molde del objeto)
class Camiseta implements CamisetaBase {
    
    // Propiedades (caracteristicas del objeto)
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;
    private estadoPlayera: string = "nuevo"; // para iteractuar con las propiedades privadas se tiene que realizar un metodo

        // para dar valor a las propiedades
        constructor(color, modelo, marca, talla, precio, estadoPlayera = "nuevo"){ 
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
        this.estadoPlayera = estadoPlayera;
    };

    // Metodo (funciones o acciones del objeto)
    public setEstadoPlayera(estado: string){
        if(estado === "nuevo" || estado === "usado"){
            this.estadoPlayera = estado;
        }};

    public getEstadoPlayera(){
        return this.estadoPlayera;
    };
};

// Clase hija
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    };
    getCapucha(){
        return this.capucha;
    };
};

var camiseta1 = new Camiseta("azul", "manga corta", "AE", "S", 200, "usado");
console.log(camiseta1);

var sudadera_1 = new Sudadera("verde", "manga corta", "AE", "M", 210, "usado");
sudadera_1.setCapucha(true);
sudadera_1.setEstadoPlayera("nuevo");
console.log(sudadera_1);

var tienda: Camiseta[] = [
    camiseta1,
    new Camiseta("azul", "manga corta", "AE", "L", 180),
    new Camiseta("negro", "manga corta", "AE", "S", 200),
    new Camiseta("verde", "manga corta", "AE", "M", 210, "usado"),
    new Camiseta("amarillo", "manga corta", "AE", "XL", 220, "usado"),
    new Camiseta("naranja", "manga corta", "AE", "M", 230, "usado")
];


function getCamisetasUsados(tienda){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        var usadas = tienda.filter(camisetass => camisetass.getEstadoPlayera() === "usado");
        //console.log(usadas);
        if(usadas.length > 0){
            return resolve(usadas);
        }
        else {
            reject("No Inactive user found");
        }
    }, 3000);
    });
};

getCamisetasUsados(tienda)
    .then(usadasCamisetas => {
        console.log(usadasCamisetas);
    })
    .catch(error => {
    console.error(error.message);
  });


//var camisa = new Camiseta("azul", "manga corta", "AE", "S", 200);
//camisa.setEstadoPlayera("medio");

/*

camisa.color = "rojo";
camisa.modelo = "manga corta";
camisa.marca = "Nike";
camisa.talla = "Mediana";
camisa.precio = 200;
*/
// camisa.estado = "nueva"; no es posible usar propiedades privadas de esta manera


//var playera = new Camiseta("verde", "manga corta", "AE", "M", 210, "usado"); // instance
//playera.setEstadoPlayera("no se");

/*
playera.color = "blanca";
playera.modelo = "manga corta";
playera.marca = "Adidas";
playera.talla = "Short";
playera.precio = 190;
*/


/*
function productosTienda(tienda){
    for(var i = 0; i<tienda.length; i++){
        console.log(i)
        console.log(tienda[i])
    }
}

    */

//console.log(camisa, playera);
//console.log(camisa, playera, "Estado de la playera: " + playera.getEstadoPlayera());
