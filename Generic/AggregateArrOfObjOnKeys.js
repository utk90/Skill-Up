// given an array of objects and two keys 'on' and 'who',
// aggregate the 'who' values on the 'on' values

// input
// const endorsements = [
//     { skill: 'css', user: 'Bill' },
//     { skill: 'javascript', user: 'Chad' },
//     { skill: 'javascript', user: 'Bill' },
//     { skill: 'css', user: 'Sue' },
//     { skill: 'javascript', user: 'Sue' },
//     { skill: 'html', user: 'Sue' },
// ]

// console.log(aggregate(endorsements, 'user', 'skill'));

// output
// [
//     {
//         'user': 'Bill',
//         'skill': [
//             'css',
//             'javascript'
//         ]
//     },
//     {
//         'user': 'Chad',
//         'skill': [
//             'javascript'
//         ]
//     },
//     {
//         'user': 'Sue',
//         'skill': [
//             'css',
//             'javascript',
//             'html'
//         ]
//     }
// ]

// aggragate entity based on feature
// using forEach
const aggregate = (arr, entity, feature) => {
    let results = [];

    arr.forEach(item => {
        const presentIndex = results.findIndex(res => res[entity] === item[entity]);
        if (presentIndex > -1) {
            results[presentIndex][feature].push(item[feature]);
        } else {
            results.push({
                [entity]: item[entity],
                [feature]: [item[feature]]
            })
        }
    })

    return results;
}

// using reduce
// const aggregateRed = (arr, entity, feature) => {
//     const agg = arr.reduce((a, b) => {
//         // get the value of both the keys
//         const entityVal = b[entity];
//         const featureVal = b[feature];
//         // if there is already a key present
//         // merge its value
//         if (a[entityVal]) {
//             a[entityVal] = {
//                 [entity]: entityVal,
//                 [feature]: [...a[entityVal][feature], featureVal]
//             }

//         }
//         // create a new entry on the key
//         else {
//             a[entityVal] = {
//                 [entity]: entityVal,
//                 [feature]: [featureVal]
//             }
//         }

//         return a;
//     }, {})

//     return Object.values(agg);
// }

const endorsements = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' },
]

console.log(aggregate(endorsements, 'user', 'skill'));
// console.log(aggregateRed(endorsements, 'user', 'skill'));

