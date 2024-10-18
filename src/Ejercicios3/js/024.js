
function containsOnlyNumbers(str) {
    if (str === null || str.length === 0) {
        return false;
    }
    return /^\d+$/.test(str);
}


const input = "12345";
const result = containsOnlyNumbers(input);
console.log(result); 
