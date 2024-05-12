const arr = [0, 1, 2, 3, 4, 5, 6];
const negArr = [-1, -2, -3, -4, -5, -6];

// console.log(arr.filter(item => item % 2 === 0));

Array.prototype.customFilter = function (cb, context = this) {
    const resArr = [];
    const currArr = context;

    for (let i = 0; i < currArr.length; i++) {
        if (cb(currArr[i], i, currArr)) {
            resArr.push(currArr[i]);
        }
    }

    return resArr;
}

const evenPick = function (currEl, idx, currArr) {
    return currEl % 2 === 0;
}

console.log(arr.customFilter(evenPick, negArr));