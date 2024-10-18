function palabrasLargas(palabras, n) {
    return palabras.filter(palabra => palabra.length > n);
}


const arregloDePalabras = ["Parangaricutirimicuaro", "Albert", "Pato", "Zacualtipan", "Tamatea"];
const n = 4;

const resultado = palabrasLargas(arregloDePalabras, n);
console.log(resultado); 