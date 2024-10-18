function productoTotal(arr) {
    return arr.reduce((producto, valorActual) => producto * valorActual, 1);
}

let numeros = [2, 3, 4, 5];

let producto = productoTotal(numeros);
console.log(producto);  