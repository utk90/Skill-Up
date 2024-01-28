/*
i/p: [asyncTask(3), asyncTask(1), asyncTask(2)]
o/p: 3 1 2
*/

const asyncTaskExecuter = async (promises) => {
    const currPromise = promises.shift();
    currPromise.then(data => {
        console.log(data);
        if (promises.length > 0) {
            asyncTaskExecuter(promises);
        }
    })
}

const asyncTask = (val) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Executed after ${val} unit time`);
        })
    })
}

asyncTaskExecuter([asyncTask(3), asyncTask(1), asyncTask(2)]);