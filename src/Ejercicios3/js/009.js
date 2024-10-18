function primeraLetraMayuscula() {
    let cadena = prompt("Introduce una cadena");
    console.log(cadena.charAt(0).toUpperCase() + cadena.slice(1));
}
primeraLetraMayuscula();