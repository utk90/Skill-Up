/*
const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
// Expected Output: [24, 12, 8, 6]
*/

const nums = [4, 3, 2, 1];

const prodExpSelf = (arr) => {
    const resArr = [];
    const prefixProdArr = [];
    const suffixProdArr = [];

    let prefixProd = 1;
    for (let i = 0; i < arr.length; i++) {
        prefixProdArr[i] = prefixProd;
        prefixProd *= arr[i];
    }

    let suffixProd = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        suffixProdArr[i] = suffixProd;
        suffixProd *= arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        resArr.push(prefixProdArr[i] * suffixProdArr[i]);
    }

    return resArr;
}

console.log(prodExpSelf(nums));