function isArrayEmpty(arr) {
    return !Array.isArray(arr) || arr.length === 0;
}

const emptyArray = [];
const nonEmptyArray = [1, 2, 3];
console.log(isArrayEmpty(emptyArray)); 
console.log(isArrayEmpty(nonEmptyArray));