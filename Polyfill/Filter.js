const arr = [1, 2, 3, 4, 5];
const negArr = [-1, -2, -3, -4, -5];
// const filterOdds = arr.filter((item, index) => item % 2 !== 0, arr);
// console.log(filterOdds);

Array.prototype.customFilter = function (cb, context = this) {
    const resArr = [];
    const currArr = context;

    for (let i = 0; i < currArr.length; i++) {
        if (cb.call(context, currArr[i], i)) {
            resArr.push(currArr[i]);
        }
    }

    return resArr;
}

const isOdd = (item, index) => {
    return item % 2 !== 0;
}

console.log(arr.customFilter(isOdd));
console.log(arr.customFilter(isOdd, negArr));