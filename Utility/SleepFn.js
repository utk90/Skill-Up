// halt function execution for a given amount of time

const sleep = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

sleep(500).then(() => {
    console.log('I run after 500 ms');
})

const performAction = async () => {
    await sleep(2000);
    console.log('I run after 2000 ms');
}

performAction();

