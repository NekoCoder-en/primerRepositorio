/**
var array = [2,2,2,1,4,6,8,5,10,20];

var repetidos = {};

array.forEach(function(numero){
  repetidos[numero] = (repetidos[numero] || 0) + 1;
});

console.log(repetidos);
*/

let valores = [1, 2, 3, 4, 2, 1, 2, 5, 2];
let valorEspecifico = 2;

let contador = valores.reduce((acum, val) => acum + (val === valorEspecifico ? 1 : 0), 0);

console.log(contador);
