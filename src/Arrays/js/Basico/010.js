// Crea una función que multiplique cada número de un arreglo por 2 usando map()
let arr = [];
while (true) {
    let num = prompt("Ingresa un valor para el array o 'salir' para terminar: ");
    if (num === "salir") {
        break; 
    } else {
        arr.push(Number(num)); 
    }
}
function newArr() {
    let multiplica = arr.map((num) => num * 2); 
    console.log(multiplica); 
}
newArr(arr);
