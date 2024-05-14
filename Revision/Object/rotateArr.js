/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
*/

const rotateArr = (arr, k) => {
    k %= arr.length;

    // reverse the entire array
    reverse(arr, 0, arr.length-1);
    // reverse first half
    reverse(arr, 0, k-1);
    // reverse second half
    reverse(arr, k, arr.length-1);

    return arr;
}

const reverse = (arr, i, j) => {
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++; j--;
    }
}

console.log(rotateArr([1,2,3,4,5,6,7], 3));