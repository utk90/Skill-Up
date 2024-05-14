/*

*/

const sort012 = (arr) => {
    let start = 0;
    let mid = 0;
    let end = arr.length - 1;

    while (mid <= end) {
        if (arr[mid] === 0) {
            swap(arr, mid, start);
            start++;
            mid++;
        } else if (arr[mid] === 2) {
            swap(arr, mid, end);
            end--;
        } else {
            mid++;
        }
    }

    return arr;
}

const swap = (arr, i1, i2) => {
    const temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

console.log(sort012([2, 0, 2, 1, 1, 0]))