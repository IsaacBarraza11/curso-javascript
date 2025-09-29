var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase (es el molde del objeto)
var Camiseta = /** @class */ (function () {
    // Metodo (funciones o acciones del objeto)
    function Camiseta(color, modelo, marca, talla, precio, estadoPlayera) {
        if (estadoPlayera === void 0) { estadoPlayera = "nuevo"; }
        this.estadoPlayera = "nuevo"; // para iteractuar con las propiedades privadas se tiene que realizar un metodo
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
        this.estadoPlayera = estadoPlayera;
    }
    ;
    Camiseta.prototype.setEstadoPlayera = function (estado) {
        if (estado === "nuevo" || estado === "usado") {
            this.estadoPlayera = estado;
        }
    };
    ;
    Camiseta.prototype.getEstadoPlayera = function () {
        return this.estadoPlayera;
    };
    ;
    return Camiseta;
}());
;
// Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    ;
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    ;
    return Sudadera;
}(Camiseta));
;
var camiseta1 = new Camiseta("azul", "manga corta", "AE", "S", 200, "usado");
console.log(camiseta1);
var sudadera_1 = new Sudadera("verde", "manga corta", "AE", "M", 210, "usado");
sudadera_1.setCapucha(true);
sudadera_1.setEstadoPlayera("nuevo");
console.log(sudadera_1);
var tienda = [
    camiseta1,
    new Camiseta("azul", "manga corta", "AE", "L", 180),
    new Camiseta("negro", "manga corta", "AE", "S", 200),
    new Camiseta("verde", "manga corta", "AE", "M", 210, "usado"),
    new Camiseta("amarillo", "manga corta", "AE", "XL", 220, "usado"),
    new Camiseta("naranja", "manga corta", "AE", "M", 230, "usado")
];
function getCamisetasUsados(tienda) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var usadas = tienda.filter(function (camisetass) { return camisetass.getEstadoPlayera() === "usado"; });
            //console.log(usadas);
            if (usadas.length > 0) {
                return resolve(usadas);
            }
            else {
                reject("No Inactive user found");
            }
        }, 3000);
    });
}
;
getCamisetasUsados(tienda)
    .then(function (usadasCamisetas) {
    console.log(usadasCamisetas);
})
    .catch(function (error) {
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
