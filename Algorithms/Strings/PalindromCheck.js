// input: nayan
// output: true

const checkPalindrome = (str) => {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str.charAt(start) !== str.charAt(end)) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

console.log(checkPalindrome('nayan'));
console.log(checkPalindrome('nayana'));