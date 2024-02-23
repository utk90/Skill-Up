const arr = [1, 2, 3, 4];
const negArr = [-1, -2, -3, -4];

// const doubleArr = arr.map((item, index) => item * 2, arr);
// console.log(doubleArr);

Array.prototype.customMap = function (cb, context = this) {
    const resArr = [];
    const currArr = context;

    for (let i = 0; i < currArr.length; i++) {
        resArr.push(cb.call(context, currArr[i], i));
    }

    return resArr;
}

const doubleItem = (item, index) => {
    return item * 2;
}

console.log('customMap', arr.customMap(doubleItem));
console.log('customMap', arr.customMap(doubleItem, negArr));