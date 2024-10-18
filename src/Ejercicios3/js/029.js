function removeConsecutiveDuplicates(str) {
    return str
        .split('') 
        .filter((char, index, arr) => char !== arr[index - 1])
        .join(''); 
}


const input = "aabbccdde";
const result = removeConsecutiveDuplicates(input);
console.log(result); 