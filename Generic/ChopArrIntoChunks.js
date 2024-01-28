// implement a function to chop an array into chunks of a given length and return each
// chunk as an array without modifying the input array

// input
// [1,2,3,4,5,6,7,8,9,10]
// 3

// output
// [[1,2,3], [4,5,6], [7,8,9], [10]]

const chopIntoChunks = (arr, limit) => {
    let remLen = arr.length;
    const finalArr = [];
    let idx = 0;

    while (remLen > 0) {
        let chopLimit = limit;
        const chopArr = [];
        while (chopLimit > 0 && remLen > 0) {
            chopArr.push(arr[idx++]);
            chopLimit--;
            remLen--;
        }
        finalArr.push(chopArr);
    }

    return finalArr;
}

console.log(chopIntoChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));