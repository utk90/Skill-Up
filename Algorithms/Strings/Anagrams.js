/*
Input: "listen", "silent"
Output: true (Both strings are anagrams)

Input: "hello", "world"
Output: false (Different lengths)

Input: "rail safety", "fairy tales"
Output: true
*/

const checkAnagrams = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const map = new Map();
    for (let currChar of str1) {
        if (map.has(currChar)) {
            map.set(currChar, map.get(currChar) + 1);
        } else {
            map.set(currChar, 1);
        }
    }

    for (let currChar of str2) {
        if (!map.has(currChar)) {
            return false;
        } else {
            const charCount = map.get(currChar) - 1;
            map.set(currChar, charCount);
            if (charCount === 0) {
                map.delete(currChar);
            }
        }
    }

    return true;
}

console.log(checkAnagrams('rail safety', 'fairy tales'));