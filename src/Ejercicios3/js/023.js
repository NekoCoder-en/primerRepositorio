function truncarCadena(cadena, maxCaracteres) {
    if (cadena.length > maxCaracteres) {
        return cadena.slice(0, maxCaracteres) + '...';
    }
    return cadena;
}


const resultado = truncarCadena("JavaScript es genial", 10);
console.log(resultado); 
