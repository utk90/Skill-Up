/*
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6 (The subarray [4, -1, 2, 1] has the maximum sum of 6.)

Input: [-1, -2, -3, -4]
Output: -1 (The subarray [-1] has the maximum sum of -1.)
*/

const maxSubarraySum = (arr) => {
    if (arr.length === 0) return;

    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubarraySum([-1, -2, -3, -4]));