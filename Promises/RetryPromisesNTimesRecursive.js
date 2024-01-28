/*
Function in JS that retries promises N number of times with a delay between each call
i/p: retry(asyncFn, retries = 3, delay = 50, finalError = 'Failed')
o/p:
attempt 1 -> failed
attempt 2 -> retry after 50ms -> failed
attempt 3 -> retry after 50ms -> failed
*/

const wait = async (ms) => {
    return new Promise((res) => setTimeout(res, ms));
}

const retryWithDelay = async (fn, retries, delay = 50, finalErr = 'Failed') => {
    try {
        await fn();
    } catch (err) {
        if (retries <= 0) {
            return Promise.reject(finalErr);
        }

        await wait();
        return retryWithDelay(fn, retries - 1, delay, finalErr);
    }
}

const getTestFunc = async () => {
    let callCounter = 0;
    return async () => {
        callCounter++;

        if (callCounter < 5) {
            throw new Error('Not yet');
        }
    }
}

const test = async () => {
    await retryWithDelay(getTestFunc(), 10);
    console.log('success');
    await retryWithDelay(getTestFunc(), 3);
    console.log('will fail before getting here');
}

test().catch(console.error);