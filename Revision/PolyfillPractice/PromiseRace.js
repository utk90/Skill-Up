const p1 = new Promise((res, rej) => {
    setTimeout(() => { res('resolved after 1000') }, 1000);
})

const p2 = new Promise((res, rej) => {
    setTimeout(() => { rej('rejected after 400') }, 400);
})

const p3 = new Promise((res, rej) => {
    setTimeout(() => { rej('rejected after 800') }, 800);
})

Promise.race([p1, p2, p3]).then(resolved => {
    console.log('resolved res', resolved);
}).catch(rejected => {
    console.log('rejected res', rejected);
})

Promise.customRace = function (promiseArr) {
    return new Promise((resolve, reject) => {
        for (let promise of promiseArr) {
            promise.then(res => {
                resolve(res);
            }).catch(rej => {
                reject(rej);
            })
        }
    })
}

Promise.customRace([p1, p2, p3]).then(res => {
    console.log('resolved res', res);
}).catch(rej => {
    console.log('rejected res', rej);
})