function removeSpecialCharacters(str) {
    return str.replace(/[^a-zA-Z0-9]/g, ''); 
}

const input = "Hola@mundo!";
const result = removeSpecialCharacters(input);
console.log(result); 