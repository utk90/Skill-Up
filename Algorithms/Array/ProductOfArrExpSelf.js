/*
const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
// Expected Output: [24, 12, 8, 6]
*/

const prodArrExpSelf = (arr) => {
    const prefixProdArr = [];
    const suffixProdArr = [];
    const resArr = [];

    let prefix = 1;
    for (let i = 0; i < arr.length; i++) {
        prefixProdArr[i] = prefix;
        prefix *= arr[i];
    }

    let suffix = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        suffixProdArr[i] = suffix;
        suffix *= arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        resArr[i] = prefixProdArr[i] * suffixProdArr[i];
    }

    return resArr;
}

console.log(prodArrExpSelf([1, 2, 3, 4]));