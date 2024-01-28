/*
call promises parallely and resolve with the value of the first promise with the most priority,
if all the promises fail then reject with a custom error
*/

// const promises = [
//     new Promise.resolve({ status: 'resolve', priority: 4 }),
//     { status: 'reject', priority: 1 },
//     { status: 'resolve', priority: 2 },
//     { status: 'reject', priority: 3 },
// ]

// {status: 'resolve', priority: 2}

const resolvePromisesWithPriority = (promises) => {
    // sort the promises based on priority
    promises.sort((a, b) => a.priority - b.priority);

    // track rejected promises
    let rejected = {};

    // track result
    let result = {};

    // track the position of the most priority
    let mostPriority = 0;

    // track no. of promises executed
    let taskCompleted = 0;

    return new Promise((resolve, reject) => {
        // run each task in parallel
        promises.forEach(({ task, priority }, i) => {
            // if task is done, store it in result
            task.then(value => {
                result[priority] = value;
            }).catch(error => {
                // if task rejected, track the rejected promises just for reference
                rejected[priority] = true;
                // if rejecte task is the least priority one, move to the next least priority
                if (priority === promises[mostPriority].priority) {
                    mostPriority++;
                }
            }).finally(() => {
                // if the value priority is not rejcted and is the least priority, resolve with these value
                if (!rejected[priority] && priority === promises[mostPriority].priority) {
                    console.log(rejected);
                    resolve(priority);
                }
                
                // track no. of tasks completed
                taskCompleted++;
                // if all tasks are finished and none of them have been resolved
                // reject with custom error
                if (taskCompleted === promises.length) {
                    reject("All apis failed");
                }
            })

        })
    })
}

// Input
function createAsyncTask() {
    const value = Math.floor(Math.random() * 10);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value < 7) {
                reject();
            } else {
                resolve(value);
            }
        }, value * 100);
    })
};

const promises = [
    { task: createAsyncTask(), priority: 1 },
    { task: createAsyncTask(), priority: 4 },
    { task: createAsyncTask(), priority: 3 },
    { task: createAsyncTask(), priority: 2 }
];

resolvePromisesWithPriority(promises).then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
})