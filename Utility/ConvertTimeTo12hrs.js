// given a time in 24hrs format, convert it into 12 hrs format

// input
// "00:00"
// "12:33"

// output
// "12:00 AM"
// "12:33 PM"

// 0-1 -> 12:() AM   1-12 -> ():() AM    12-13 -> 12:() PM      13-24 -> ():() PM

const convertTimeTo12hrs = (time) => {
    const [hrStr, min] = time.split(":");
    const hr = Number(hrStr);
    let convertedTime = '';

    if (hr >= 0 && hr < 1) {
        convertedTime = `12:${min}AM`;
    } else if (hr >= 1 && hr < 12) {
        convertedTime = `${hr}:${min}AM`;
    } else if (hr >= 12 && hr < 13) {
        convertedTime = `12:${min}PM`;
    } else if (hr >= 13 && hr < 24) {
        convertedTime = `${hr}:${min}PM`;
    } else {
        throw new Error('invalid format entered');
    }

    return convertedTime;
}

console.log(convertTimeTo12hrs('00:00'));
console.log(convertTimeTo12hrs('12:33'));
