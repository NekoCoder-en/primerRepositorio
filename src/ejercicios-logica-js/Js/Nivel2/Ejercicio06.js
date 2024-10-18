const palabraInput = prompt("Ingrese una palabra:");
if (esPalindromo(palabraInput)) {
    console.log(`${palabraInput} es un palíndromo.`);
} else {
    console.log(`${palabraInput} no es un palíndromo.`);
}