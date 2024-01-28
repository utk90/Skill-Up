// write a polyfill for the groupBy() method that accepts a collection and iteratee as arguments
// and returns the object that has grouped the collection values using iteratee's value as the key

// groupBy([6.1, 4.2, 6.3], Math.floor);
// [6: [6.1, 6.3], 4: [4.2]]

// groupBy(['one', 'two', 'three'], 'length')
// [3: ['one', 'two'], 5: ['three']]

const groupBy = function (values, keyFinder) {
    // using reduce to aggregate values
    return values.reduce((acc, curr) => {
        const key = typeof keyFinder === 'function' ? keyFinder(curr) : curr[keyFinder];
        if (!acc[key]) {
            acc[key] = [curr];
        } else {
            acc[key].push(curr);
        }

        return acc;
    }, {})
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(['one', 'two', 'three'], 'length'));