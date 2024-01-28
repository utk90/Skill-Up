/*
i/p: [asyncTask(3), asyncTask(1), asyncTask(2)]
o/p: 3 1 2
*/

const asyncTaskExecuter = async (promises) => {
    promises.reduce((acc, curr) => {
        return acc.then(() => {
            return curr.then(val => {
                console.log(val);
            })
        })
    }, Promise.resolve())
}

const asyncTask = (val) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Executed after ${val} unit time`);
        })
    })
}

asyncTaskExecuter([asyncTask(3), asyncTask(1), asyncTask(2)]);