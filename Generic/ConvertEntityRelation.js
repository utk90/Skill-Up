// given an array of two entries, parent and child ([subset,set]) relation, convert the array to a relation string
// (parent -> child -> grandchild)
// (grandset -> superset -> set -> subset)

// input
// [
//     ['lion', 'cat'],
//     ['cat', 'mammal'],
//     ['dog', 'mammal'],
//     ['mammal', 'animal'],
//     ['fish', 'animal'],
//     ['shark', 'fish']
// ]

// output
// [
//     'animal -> mammal -> cat -> lion',
//     'animal -> mammal -> cat',
//     'animal -> mammal -> dog',
//     'animal -> mammal',
//     'animal -> fish',
//     'animal -> fish -> shark'
// ]

const inputArr = [
    ['lion', 'cat'],
    ['cat', 'mammal'],
    ['dog', 'mammal'],
    ['mammal', 'animal'],
    ['fish', 'animal'],
    ['shark', 'fish']
];

const ancestry = (arr) => {
    // aggregate parent/child relation
    const aggregate = (arr) => {
        // aggregate the values for easier processing
        return arr.reduce((a, b) => {
            const [child, parent] = b;
            a[child] = parent;
            return a;
        }, {})
    }

    // for a relationship from the aggregated value
    const convert = (obj) => {
        return Object.keys(obj).reduce((a, b) => {
            a.push(getKey(obj, b));
            return a;
        }, [])
    }

    // helper function to form the string
    // till the last hierarchy
    const getKey = (obj, key) => {
        const val = obj[key];
        // the formation can be reversed by changing the order of the keys
        // till the last hierarchy
        // child -> parent | parent -> child
        if (val in obj) {
            return getKey(obj, val) + '->' + key;
        } else {
            return val + "->" + key;
        }
    }

    // get the aggregated map
    const aggregatedMap = aggregate(arr);

    // return the ancestry
    return convert(aggregatedMap);
}

const formAncestry = (arr) => {
    const aggregate = (inputArr) => {
        return inputArr.reduce((acc, curr) => {
            const [child, parent] = curr;
            acc[child] = parent;
            return acc;
        }, {})
    }

    const convert = (obj) => {
        Object.keys(obj).reduce((a, b) => {
            a.push(getKey(obj, b));
            return a;
        })
    }

    const getKey = (obj, key) => {
        const val = obj[key];

        if (val in obj) {
            return getKey(obj, val) + '->' + key;
        } else {
            return val + '->' + key;
        }
    }

    const aggRes = aggregate(arr);

    const finalRes = convert(aggRes);

    return finalRes;
}

console.log(ancestry(inputArr));

