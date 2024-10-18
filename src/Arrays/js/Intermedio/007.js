function todosMayoresQue(arr, n) {
    return arr.every(num => num > n);
}

let numeros = [15, 25, 30, 45, 60];
let n = 10;

let resultado = todosMayoresQue(numeros, n);
console.log(resultado); 