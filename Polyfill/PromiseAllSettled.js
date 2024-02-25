const promise1 = new Promise((resolve, reject) => setTimeout(() => {
    resolve('resolved after 3s');
}, 3000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => {
    resolve('resolved after 1s');
}, 1000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => {
    reject('rejected after 2s');
}, 2000));

// Promise.allSettled([promise1, promise2, promise3])
//     .then((res) => console.log('resolved', res))
//     .catch((rej) => console.log('rejected', rej));

Promise.customAllSettled = function (promises) {
    return new Promise((resolve, reject) => {
        if (!promises.length) {
            resolve([]);
        }

        const resArr = [];
        let completedCount = 0;

        for (let promise of promises) {
            promise.then(promiseRes => {
                completedCount++;
                resArr.push({ status: 'fulfilled', value: promiseRes })
            }).catch(promiseRej => {
                completedCount++;
                resArr.push({ status: 'rejected', reason: promiseRej })
            }).finally(() => {
                if (completedCount === promises.length)
                    resolve(resArr);
            });
        }

    })
}

Promise.customAllSettled([promise1, promise2, promise3])
    .then((res) => console.log('resolved', res));