// halt function execution for the given amount of time
async function test() {
    console.log('before', new Date().getTime());
    const sleep = (ms) => {
        return new Promise(res => setTimeout(res, ms));
    }

    await sleep(5000);
    console.log('after', new Date().getTime());
};

test();