let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:")); 

let suma = num1 + num2; 
let resta = num1 - num2; 
let multiplicacion = num1 * num2; 
let division = num2 !== 0 ? num1 / num2 : "No se puede dividir por cero"; // Manejo de división por cero

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
