/*
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate(nums, k);
console.log(nums);
// Expected Output: [5, 6, 7, 1, 2, 3, 4]
*/

// [7,6,5,4,3,2,1] (reverse entire array)
// [5,6,7,4,3,2,1] (reverse first k elements)
// [5,6,7,1,2,3,4] (reverse last k elements)

const rotateArr = (arr, k) => {
    k %= arr.length;

    // reverse entire array
    reverseArr(arr, 0, arr.length - 1);
    // reverse first k elements
    reverseArr(arr, 0, k - 1);
    // reverse last k elements
    reverseArr(arr, k, arr.length - 1);

    return arr;
}

const reverseArr = (arr, startIdx, endIdx) => {
    while (startIdx < endIdx) {
        [arr[startIdx], arr[endIdx]] = [arr[endIdx], arr[startIdx]];
        startIdx++; endIdx--;
    }
}

console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 3));
