const arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr.reduce((acc, curr, idx, arr) => acc += curr, 2))

Function.prototype.customReduce = function (cb, defaultVal) {
    let acc = defaultVal;
    const currArr = this;

    for (let i = 0; i < currArr.length; i++) {
        acc = cb(acc, curr, i, currArr);
    }

    return acc;
}

const sumArr = function(acc, curr, idx, currArr){
    return acc + curr;
}

console.log(arr.reduce(sumArr));