function algunPar(arr) {
    return arr.some(num => num % 2 === 0);
}

let numeros = [15, 23, 31, 45, 60];

let resultado = algunPar(numeros);
console.log(resultado);  