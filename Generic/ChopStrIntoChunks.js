// implement a function to chop string into chunks of given length and return it
// as an array

// input
// 'javascript'
// 3

// output
// ['jav', 'asc', 'rip', 't']

const chopIntoChunks = (str, limit) => {
    let idx = 0;
    const finalArr = [];
    
    while (idx < str.length) {
        let chopLimit = limit;
        let currChopStr = '';
        while (chopLimit > 0 && idx < str.length) {
            currChopStr += str.charAt(idx++);
            chopLimit--;
        }
        finalArr.push(currChopStr);
    }
    return finalArr;
}

console.log(chopIntoChunks('javascript', 3));