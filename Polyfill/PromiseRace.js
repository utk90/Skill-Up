const promise1 = new Promise((resolve, reject) => setTimeout(() => {
    resolve('resolved after 3s');
}, 3000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => {
    resolve('resolved after 1s');
}, 1000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => {
    reject('rejected after 0.5s');
}, 500));

// Promise.race([promise1, promise2, promise3])
//     .then((res) => console.log('resolved', res))
//     .catch((rej) => console.log('rejected', rej));

Promise.customRace = function (promises) {
    return new Promise((resolve, reject) => {
        if (!promises.length) {
            resolve();
        }

        for (let promise of promises) {
            promise.then(promiseRes => {
                resolve(promiseRes);
            }, (promiseRej) => {
                reject(promiseRej);
            })
        }
    })
}

Promise.customRace([promise1, promise2, promise3])
    .then((res) => console.log('resolved', res))
    .catch((rej) => console.log('rejected', rej));
