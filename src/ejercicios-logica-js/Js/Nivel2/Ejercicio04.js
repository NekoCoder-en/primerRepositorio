const celsiusInput = prompt("Ingrese la temperatura en grados Celsius:");
if (validarNumero(celsiusInput)) {
    const celsius = parseFloat(celsiusInput);
    const fahrenheit = celsiusAFahrenheit(celsius);
    console.log(`${celsius}°C es igual a ${fahrenheit}°F`);
} else {
    console.error("Error: Por favor ingrese un número válido para la temperatura.");
}