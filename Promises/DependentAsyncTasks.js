// A,B,C -> independent   D -> A,B   E -> D,C

class Task {
    // accept the dependencies list and the callback
    constructor(dependencies = [], job) {
        // filter the dependencies that are not yet completed
        this.dependencies = dependencies ? dependencies.filter(dependency => dependency instanceof Task && !dependency.isCompleted) : [];
        this.currentDependencyCount = this.dependencies.length;

        this.job = job;

        this.isCompleted = false;

        // store dependencies list callback to execute in sequence
        this.subscribedList = [];

        // start job
        this.processJob();
    }

    processJob() {
        // if there is dependency, subscribe to each of them
        if (this.dependencies && this.dependencies.length) {
            for (let dependency of this.dependencies) {
                dependency.subscribe(this.trackDependency.bind(this));
            }
        } else {
            // else invoke the callback directly
            this.job(this.done.bind(this));
        }
    }

    // if all dependencies are executed
    // invoke the callback
    trackDependency() {
        this.currentDependencyCount--;
        if (this.currentDependencyCount === 0) {
            this.job(this.done.bind(this));
        }
    }

    // push callback to the list
    subscribe(cb) {
        this.subscribedList.push(cb);
    }

    // if current task is done
    // mark it as complete
    // invoke all the dependency callbacks, to print it in sequence
    done() {
        this.isCompleted = true;
        for (const callback of this.subscribedList) {
            callback();
        }
    }
}

// input
const processA = new Task(null, (done) => {
    setTimeout(() => {
        console.log('Process A');
        done();
    }, 100);
})

const processB = new Task(null, (done) => {
    setTimeout(() => {
        console.log('Process B');
        done();
    }, 1500);
})

const processC = new Task(null, (done) => {
    setTimeout(() => {
        console.log('Process C');
        done();
    }, 1000);
})

const processD = new Task([processA, processB], (done) => {
    setTimeout(() => {
        console.log('Process D');
        done();
    }, 1000);
})

const processE = new Task([processC, processD], (done) => {
    setTimeout(() => {
        console.log('Process E');
        done();
    }, 100);
})

const createAllDoneInstance = (allDoneCallback) => new Task([processA, processB, processC, processD, processE], allDoneCallback);

createAllDoneInstance((done) => {
    console.log('All is done!');
    done();
})