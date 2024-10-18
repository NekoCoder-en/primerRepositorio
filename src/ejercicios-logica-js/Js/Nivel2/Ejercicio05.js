const numeroInput = prompt("Ingrese un número:");
if (validarNumero(numeroInput)) {
    console.log(`El número ingresado es: ${numeroInput}`);
} else {
    console.error("Error: Por favor ingrese un número válido.");
}