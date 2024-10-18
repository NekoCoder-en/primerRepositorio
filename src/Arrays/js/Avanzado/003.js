function flattenArray(arr) {
    return arr.flat();
}


const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); 