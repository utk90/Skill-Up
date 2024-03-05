// Input: "hello"
// Output: "olleh"

const reverseStr = (str) => {
    return str.split('').reverse().join('');
}

console.log(reverseStr('hello'));

