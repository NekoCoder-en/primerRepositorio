function reemplazarPalabra(cadena, palabraBuscada, nuevaPalabra) {
    return cadena.replaceAll(palabraBuscada, nuevaPalabra);
}

const resultado = reemplazarPalabra("hola hola", "hola", "adiós");
console.log(resultado);
