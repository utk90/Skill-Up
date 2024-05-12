const maxSubarray = (arr) => {
    let currSum = arr[0];
    let maxSum = 0;

    for (let item of arr) {
        currSum = Math.max(item, currSum + item);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));