const promise1 = new Promise((resolve, reject) => setTimeout(() => {
    resolve('resolved after 3s');
}, 3000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => {
    reject('rejected after 1s');
}, 1000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => {
    reject('rejected after 2s');
}, 2000));

// Promise.any([promise1, promise2, promise3])
//     .then((res) => console.log('resolved', res))
//     .catch((rej) => console.log('rejected', rej));

Promise.customAny = function (promises) {
    return new Promise((resolve, reject) => {
        if (!promises.length) {
            resolve();
        }

        const resArr = [];
        let completedCount = 0;

        for (let promise of promises) {
            promise.then(promiseRes => {
                resolve(promiseRes);
            }, promiseRej => {
                completedCount++;
                resArr.push(promiseRej);

                if (completedCount === promises.length) {
                    reject(resArr);
                }
            })
        }
    })
}

Promise.customAny([promise1, promise2, promise3])
    .then((res) => console.log('resolved', res))
    .catch((rej) => console.log('rejected', rej));