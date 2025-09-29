var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        this.color = "verde"; // valores por defecto
        this.velocidad = 0; // valores por defecto
        if (modelo == null) {
            this.modelo = "BMW"; // valores por defecto
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    return Coche;
}());
var coche = new Coche();
coche.acelerar();
coche.acelerar();
coche.acelerar();
var coche1 = new Coche();
coche1.setModelo('avenger');
coche1.setColor('azul marino');
coche1.setVelocidad(150);
/*
var coche2 = new Coche(color1, "Tacoma", 180);
var color3 = coche2.setColor('gris grafito');

var coche3 = new Coche(color1, "Hilux", 140);
var color4 = coche3.setColor('gris');
*/
//console.log(coche, coche1, coche2, coche3);
console.log(coche, coche1);
console.log("La velocidad del coche 1 es:" + coche.getVelocidad());
coche.frenar();
console.log("La velocidad del coche 1 despues de frenar es:" + coche.getVelocidad());
