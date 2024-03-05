// Reverse the elements of an array in-place.
// input
// [1, 2, 3, 4, 5]

// output
// [5, 4, 3, 2, 1]


const reverseArr = (arr) => {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx < rightIdx) {
        [arr[leftIdx], arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]];
        leftIdx++; rightIdx--;
    }

    return arr;
}

console.log(reverseArr([1, 2, 3, 4, 5]));
console.log(reverseArr([]));