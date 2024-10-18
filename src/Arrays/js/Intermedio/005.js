function buscarIndice(arr, valor) {
    return arr.indexOf(valor);
}


let arreglo = [10, 20, 30, 40, 50];
let valorBuscado = 30;

let indice = buscarIndice(arreglo, valorBuscado);
console.log(indice);  