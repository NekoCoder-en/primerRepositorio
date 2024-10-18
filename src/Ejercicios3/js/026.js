function findLongestWord(str) {
    const words = str.split(' '); 
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word; 
        }
    }

    return longestWord;
}


const input = "Aprender JavaScript es emocionante";
const result = findLongestWord(input);
console.log(result); 