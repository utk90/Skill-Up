/*
Given an unsorted array of size n. Array elements are in the range of 1 to n. One number from set {1, 2, …n} 
is missing and one number occurs twice in the array. Find these two numbers.
*/

const missingPair = (arr) => {
    let repeated = -1;
    let missing = -1;
    for (let i = 0; i < arr.length; i++) {
        const absVal = Math.abs(arr[i]);
        if (arr[absVal - 1] < 0) {
            repeated = absVal;
            break;
        } else {
            arr[absVal - 1] = -arr[absVal - 1];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            missing = i + 1;
        }
    }

    return {
        repeated, missing
    }
}

console.log(missingPair([4, 3, 6, 2, 1, 1]))
console.log(missingPair([3,3,1]))