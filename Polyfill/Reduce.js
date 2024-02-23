const arr = [1, 2, 3, 4, 5];
// console.log(arr.reduce((acc, curr, currIdx, currArr) => acc += curr, 0));

Array.prototype.customReduce = function (cb, defaultValue) {
    let acc = defaultValue;
    const currArr = this;
    for (let i = 0; i < currArr.length; i++) {
        acc = cb(acc, currArr[i], i, this);
    }
    return acc;
}

const sumOperation = (acc, curr, currIdx, currArr) => {
    return acc + curr;
}

console.log(arr.customReduce(sumOperation,1));