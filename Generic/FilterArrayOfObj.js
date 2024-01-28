// implement a function that filters an array of objects based on the value or index
// eg:
// const arr = [
//     { name: 'Yogi', id: '1' },
//     { name: 'Swami', id: '2' },
//     { name: 'Drishti', id: '0' }
// ]

// console.log(filterObject(arr, 0)); // {name: 'Yogi', id: '1'}
// console.log(filterObject(arr, 'Swami')); // {name: 'Swami', id: '2'}
// console.log(filterObject(arr, '0')); // {name: 'Drishti', id: '0'}

const filterObject = (dataArr, idxOrVal) => {
    const filterRes = dataArr.filter(({ name, id }) => name === idxOrVal || id === idxOrVal);
    return filterRes.length ? filterRes : dataArr[idxOrVal] ?? 'NA';
}

const arr = [
    { name: 'Yogi', id: '1' },
    { name: 'Swami', id: '2' },
    { name: 'Drishti', id: '0' }
]

console.log(filterObject(arr, 0)); // {name: 'Yogi', id: '1'}
console.log(filterObject(arr, 'Swami')); // {name: 'Swami', id: '2'}
console.log(filterObject(arr, '0')); // {name: 'Drishti', id: '0'}

