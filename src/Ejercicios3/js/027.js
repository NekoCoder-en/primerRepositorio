function toSnakeCase(str) {
    return str
        .toLowerCase() 
        .replace(/\s+/g, '_') 
        .replace(/[^\w-]+/g, ''); 
}


const input = "Hola Mundo";
const result = toSnakeCase(input);
console.log(result);