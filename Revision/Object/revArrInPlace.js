// Reverse the elements of an array in-place.
// input
// [1, 2, 3, 4, 5]

// output
// [5, 4, 3, 2, 1]

const revArrInPlace = (arr) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= arr.length / 2) {
        swap(start++, end--, arr);
    }

    return arr;
}

const swap = (idx1, idx2, arr) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

console.log(revArrInPlace([1, 2, 3, 3, 4, 5, 6]));