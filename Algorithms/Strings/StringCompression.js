/*
Input: "aabcccccaaa"
Output: "a2b1c5a3"
*/

const compressStr = (str) => {
    let compressed = '';
    let charCount = 1;
    for (let i = 0; i < str.length; i++) {
        const currChar = str.charAt(i);
        const nextChar = str.charAt(i + 1);
        if (currChar === nextChar) {
            charCount++;
        } else {
            compressed += currChar + charCount;
            charCount = 1;
        }
    }

    return compressed.length < str.length ? compressed : str;
}

console.log(compressStr('aabcccccaaa'));
console.log(compressStr('aa'));