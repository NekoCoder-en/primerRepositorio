function capitalizeFirstLetter(str) {
    return str
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '); 
}

const input = "javascript es divertido";
const result = capitalizeFirstLetter(input);
console.log(result); 