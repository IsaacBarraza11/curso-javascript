// String
let cadena: string = "Isaac Barraza Hernandez";

// Number
let edad: number = 11;

// Boleano
let verdadero_falso: boolean = true;

// Any
let cualquiera: any = "hola";

// Arrays
var lenguajes: Array<string> = ["Java", "JS", "TS"]; // solo acepta tipo string
var edades: Array<number> = [29, 27, 1];            // solo acepta tipo string
var cualquiera2: Array<any> = ["Java", "JS", "TS"]; // acepta cualquiera

let years: number[] = [12, 13, 14]; // es lo mismo de string, number, any


// Mutiples tipos
let mutile: string | number = 'Isaac'; // se le pueden dar dos o mas tipos de datos
mutile = 15; // no habra error porque los dos son correctos
// mutile = true; daria error


// Se pueden personalizar tipos de datos
type alfanumerico = string | number; // se crea la alfanumerico(puede ser otro nombre) y se le dice que tipo quiere asigarse
let dosTipos: alfanumerico = "hola";
dosTipos = 12;
// dosTipos = true; daria error porque no esta agregado en el typo

console.log(cadena, edad, verdadero_falso, lenguajes, years, mutile);