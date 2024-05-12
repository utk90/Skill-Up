// write a polyfill for the groupBy() method that accepts a collection and iteratee as arguments
// and returns the object that has grouped the collection values using iteratee's value as the key

// groupBy([6.1, 4.2, 6.3], Math.floor);
// [6: [6.1, 6.3], 4: [4.2]]

// groupBy(['one', 'two', 'three'], 'length')
// [3: ['one', 'two'], 5: ['three']]


const segArr = function (arr, resObj, param) {
    const isProperty = typeof param === 'string';
    for (let item of arr) {
        let propVal = isProperty ? item[param] : param(item);
        if (!resObj[propVal]) {
            resObj[propVal] = [item];
        } else {
            resObj[propVal].push(item);
        }
    }
}

const groupBy = function (arr, param) {
    const resObj = {};
    segArr(arr, resObj, param);
    console.log(resObj);
}

groupBy([6.1, 4.2, 6.3], Math.floor);
// [6: [6.1, 6.3], 4: [4.2]]

groupBy(['one', 'two', 'three'], 'length')
// [3: ['one', 'two'], 5: ['three']]
//