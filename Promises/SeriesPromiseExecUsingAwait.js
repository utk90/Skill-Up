/*
i/p: [asyncTask(3), asyncTask(1), asyncTask(2)]
o/p: 3 1 2
*/

const asyncTaskExecuter = async (callbacks) => {
    for (const cb of callbacks) {
        await cb();
    }
}

const asyncTask = async (val) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Executed after ${val}`)
            resolve();
        }, val)
    });
}

asyncTaskExecuter([async () => asyncTask(3), async () => asyncTask(1), async () => asyncTask(2)]);