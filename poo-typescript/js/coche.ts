class Coche {
    public color: string;
    public modelo: string;
    public velocidad: number = 0;

    constructor(modelo = null){
        this.color = "verde"; // valores por defecto
        this.velocidad = 0; // valores por defecto
        if(modelo == null){
            this.modelo = "BMW"; // valores por defecto
        }
        else {
            this.modelo = modelo;
        }
    }

    public getModelo(){
        return this.modelo;
    }
    public setModelo(modelo:string){
        this.modelo = modelo;
    }

    public getColor(){
        return this.color;
    }
    public setColor(color){
        this.color = color;
    }

    public acelerar(){
        this.velocidad++;
    }
    public frenar(){
        this.velocidad--;
    }

    public getVelocidad():number{ // en :number indica que se debe regresar un tipo number
        return this.velocidad;
    }
    public setVelocidad(velocidad){
        this.velocidad = velocidad;
    }
}

var coche = new Coche();
coche.acelerar();
coche.acelerar();
coche.acelerar();

var coche1 = new Coche();
coche1.setModelo('avenger')
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
