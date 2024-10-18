function charFrequency(str) {
    const frequency = {};
    
    for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1; 
    }
    
    return frequency;
}

const input = "abbccc";
const result = charFrequency(input);
console.log(result); 