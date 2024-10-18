//Escribe una función que reciba un arreglo y un valor, y retorne true si el valor existe en el arreglo y false si no.
let arr = [];
let valor;
while (true) {
    let num = prompt("Ingresa un valor para el array o 'salir' para terminar: ");
    if (num == "salir") {
        break;
    } else {
        arr.push(num);
    }

}
valor = prompt("Ingresa un valor para buscar en el array:  ");
function existeValor(arr, valor) {
    return arr.indexOf(valor) !== -1;
}
console.log(existeValor(arr, valor)); // true
