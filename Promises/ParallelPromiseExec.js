/*
i/p: [asyncTask(3), asyncTask(1), asyncTask(2)]
o/p: [2,1,3] (order of execution)
*/

const asyncTaskExecuter = (tasks, cb) => {
    const results = [];
    let tasksCompleted = 0;
    tasks.forEach(promise => {
        promise.then(data => {
            results.push(data);
            tasksCompleted++;
            if (tasksCompleted >= tasks.length) {
                cb(results);
            }
        })

    })
}

const asyncTask = (val) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Executed after ${val} unit time`);
        })
    })
}

const allFinished = (process) => {
    process.forEach(curr => {
        console.log(curr);
    })
}

asyncTaskExecuter([asyncTask(Math.random() * 10), asyncTask(Math.random() * 10), asyncTask(Math.random() * 10)], allFinished);