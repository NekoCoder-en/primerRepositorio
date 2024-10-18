function sumaAcumulada(arr) {
    return arr.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

let numeros = [10, 20, 30, 40];

let suma = sumaAcumulada(numeros);
console.log(suma);  