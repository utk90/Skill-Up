const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const negArr = [-1, -2, -3, -4, -5, -6, -7, -8];

// console.log(arr.map(item => item * 2));

Array.prototype.customMap = function (cb, context = this) {
    const resArr = [];
    const currArr = context;

    for (let i = 0; i < currArr.length; i++) {
        resArr.push(cb(currArr[i], i, currArr));
    }

    return resArr;
}

const doubleTheArr = function (currEl, idx, currArr) {
    return currEl * 2;
}

console.log(arr.customMap(doubleTheArr, negArr));