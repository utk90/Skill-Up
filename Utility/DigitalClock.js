// create a digital clock that shows the current time in HH:MM:SS format
// eg:
// 10:57:23
// 10:57:24
// 10:57:25
// 10:57:26
// 10:57:27

const clock = () => {
    const time = new Date();
    const hrs = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    const formattedTime = `${add0Padding(hrs, 2)}:${add0Padding(min, 2)}:${add0Padding(sec, 2)}`

    return formattedTime;
}

setInterval(() => {
    console.log(clock());
}, 1000);

const add0Padding = (num, digits) => {
    return String(num).padStart(digits, '0');
}