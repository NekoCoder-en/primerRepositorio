function convertirACamelCase(frase) {
    return frase
        .toLowerCase() 
        .split(' ') 
        .map((palabra, index) => {
            if (index === 0) {
                return palabra; 
            }
            return palabra.charAt(0).toUpperCase() + palabra.slice(1);
        })
        .join('');
}


const resultado = convertirACamelCase("hola mundo en javascript");
console.log(resultado); 
