let arreglo1 = [3, 6, 1];
let arreglo2 = [8, 2, 4];
let arreglo3 = [7, 5, 9];

// Combinar los arreglos
let arregloCombinado = arreglo1.concat(arreglo2, arreglo3);

// Ordenar el arreglo de menor a mayor
const arregloOrdenado = arregloCombinado.sort((a, b) => a - b);

console.log(arregloOrdenado);
