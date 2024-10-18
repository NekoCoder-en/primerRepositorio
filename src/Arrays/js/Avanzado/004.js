function replaceNegativesWithAbs(arr) {
    return arr.map(num => Math.abs(num));
}

const numbers = [-1, -2, 3, -4, 5];
const absoluteValues = replaceNegativesWithAbs(numbers);
console.log(absoluteValues);