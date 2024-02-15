// Find max occur element and its frequency

// input
// [1,1,2,1,3,3,3,3,2]

// output
// {value: 1, count: 3}

const maxFreqElement = (arr) => {
    const map = new Map();

    for (let item of arr) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    }

    let maxCount = 0;
    let output = {};

    for (let [val, freq] of map) {
        if (freq > maxCount) {
            output = { value: val, count: freq };
            maxCount = freq;
        }
    }

    return output;
}

console.log(maxFreqElement([1,1,2,1,3,3,3,3,2]));