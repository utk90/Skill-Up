// create a filter fn that takes a callback fn as input and returns
// a new array with all elements that have passed the test implemented in the callback fn

const arr = [[1, [2, [3, 'foo', { 'a': 1, 'b': 2 }]], 'bar']];

const filter = (arr, cb) => {
    const result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            const output = filter(item, cb);
            result.push(output);
        } else {
            if (cb(item)) {
                result.push(item);
            }
        }
    }

    return result;
}

// const filtered = filter(arr, (e) => typeof e === 'string');

// console.log('After filter', JSON.stringify(filtered));

// extending the method and implementing a multiFilter on array's prototype itself

Array.prototype.multiFilter = function (test) {
    const ogArr = this;

    const filter = (arr, cb) => {
        const result = [];

        for (let item of arr) {
            if (Array.isArray(item)) {
                const output = filter(item, cb);
                result.push(output);
            } else {
                if (cb(item)) {
                    result.push(item);
                }
            }
        }

        return result;
    }

    return filter(ogArr, test);
}

const filtered = arr.multiFilter((e) => typeof e === 'string');

console.log('After filter', JSON.stringify(filtered));