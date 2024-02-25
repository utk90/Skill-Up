const promise1 = new Promise((resolve, reject) => setTimeout(() => {
    resolve('resolved after 3s');
}, 3000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => {
    resolve('resolved after 1s');
}, 1000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => {
    reject('rejected after 2s');
}, 2000));

// Promise.all([promise1, promise2, promise3])
//     .then((res) => console.log('resolved', res))
//     .catch((rej) => console.log('rejected', rej));

// 1. if all promises resolved, will return a promise with an array of resolved results as resolved value
// 2. if any promise gets rejected, will return a promise with rejected reason of failed promise as rejected value

Promise.customPromiseAll = function (promises) {
    return new Promise((res, rej) => {
        if (!promises || !promises.length) {
            res([]);
        }

        const resolvedRes = [];
        let completedCount = 0;

        for (let promise of promises) {
            promise.then(promiseRes => {
                resolvedRes.push(promiseRes);
                completedCount++;

                if (completedCount === promises.length) {
                    res(resolvedRes);
                }
            }).catch(promiseRej => {
                rej(promiseRej);
            })
        }
    })
}

Promise.customPromiseAll([promise1, promise2, promise3])
    .then((res) => console.log('resolved', res))
    .catch((rej) => console.log('rejected', rej));
