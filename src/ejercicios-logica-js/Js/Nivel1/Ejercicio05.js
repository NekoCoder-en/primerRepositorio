let numero1 = parseFloat(prompt("Ingrese el primer número:")); 
let numero2 = parseFloat(prompt("Ingrese el segundo número:")); 

if (numero1 > numero2) {
    console.log("El primer número es mayor que el segundo.");
} else if (numero1 < numero2) {
    console.log("El segundo número es mayor que el primero.");
} else {
    console.log("Los dos números son iguales.");
}
