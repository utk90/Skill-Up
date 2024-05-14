/*
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
*/

const twoSum = (arr, target) => {
    const tObj = {};

    for (let i = 0; i < arr.length; i++) {
        const currVal = arr[i];
        const complVal = target - currVal;

        if (tObj.hasOwnProperty(complVal)) {
            return [tObj[complVal], i];
        }

        tObj[currVal] = i;
    }
}

console.log(twoSum([2, 11, 15, 7], 9))