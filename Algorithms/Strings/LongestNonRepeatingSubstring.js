/*
Input: "abcabcbb"
Output: 3 (substring "abc" or "bca")
*/

const longestSubstring = (str) => {
    let resStr = '';
    let max = 0;

    for (let i = 0; i < str.length; i++) {
        const currChar = str.charAt(i);

        if (resStr.indexOf(currChar) !== -1) {
            resStr = resStr.substring(resStr.indexOf(currChar) + 1);
        }

        resStr += currChar;
        max = Math.max(max, resStr.length);
    }

    return max;
}

console.log(longestSubstring('abcabcbb'));
console.log(longestSubstring('dvdf'));
console.log(longestSubstring('dv'));
console.log(longestSubstring(''));