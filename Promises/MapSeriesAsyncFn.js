/*
executes promises of the map sequentially, stops the execution if any promise fails
*/

const mapSeries = (arr, fn) => {
    return new Promise((res, rej) => {
        const final = arr.reduce((acc, curr) => {
            return acc.then(val => {
                return new Promise((res, rej) => {
                    fn(curr, (error, result) => {
                        if (error) {
                            rej(error);
                        } else {
                            res([...val, result]);
                        }
                    })
                })
            })
        }, Promise.resolve([]));

        final.then(result => {
            res(result);
        }).catch(err => {
            rej(err);
        })
    })
}

// let numPromisePass = mapSeries([1, 2, 3, 4, 5], (num, callback) => {
//     setTimeout(() => {
//         num = num * 2;
//         console.log(num);

//         if (num === 12) {
//             callback(true);
//         } else {
//             callback(null, num);
//         }
//     }, 1000);
// })

let numPromiseFail = mapSeries([1, 2, 3, 4, 5], (num, callback) => {
    setTimeout(() => {
        num = num * 2;
        console.log(num);

        if (num === 8) {
            callback(true);
        } else {
            callback(null, num);
        }
    }, 1000);
})

// numPromisePass.then(result => { console.log('success:', result) })
//     .catch(() => console.log('no success'));
numPromiseFail.then(result => { console.log('success:', result) })
    .catch(() => console.log('no success'));