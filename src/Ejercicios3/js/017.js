const texto = prompt("Escribe tu palabra: ")

const cantidadPalabras = texto.trim().split(/\s+/).filter(Boolean).length;
console.log(`Número de palabras: ${cantidadPalabras}`);