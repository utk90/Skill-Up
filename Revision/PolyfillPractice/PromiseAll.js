const p1 = new Promise((res, rej) => {
    setTimeout(() => { res('resolved after 1000') }, 1000);
})

const p2 = new Promise((res, rej) => {
    setTimeout(() => { res('resolved after 400') }, 400);
})

const p3 = new Promise((res, rej) => {
    setTimeout(() => { rej('rejected after 800') }, 800);
})

// Promise.all([p1, p2, p3]).then(resolved => {
//     console.log('resolved res', resolved);
// }).catch(rejected => {
//     console.log('rejected res', rejected);
// })

Promise.customPromiseAll = function (promiseArr) {
    return new Promise((resolve, reject) => {
        if (!promiseArr.length) {
            resolve([]);
        }

        const resArr = [];
        let completedCount = 0;

        for (let promise of promiseArr) {
            promise.then((res) => {
                completedCount++;
                resArr.push(res);

                if (completedCount === promiseArr.length) {
                    resolve(resArr);
                }
            }).catch((rej) => {
                reject(rej);
            });
        }
    })
}

Promise.customPromiseAll([p1, p2, p3]).then(resolved => {
    console.log('resolved res', resolved);
}).catch(rejected => {
    console.log('rejected res', rejected);
})