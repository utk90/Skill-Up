/*
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
*/

const twoSum = (arr, target) => {
    const idxObj = {};

    for (let i = 0; i < arr.length; i++) {
        const currVal = arr[i];
        const complementVal = target - currVal;

        if (idxObj.hasOwnProperty(complementVal)) {
            return [idxObj[complementVal], i];
        }

        idxObj[currVal] = i;
    }

    return [];
}

console.log(twoSum([3, 2, 4], 6));