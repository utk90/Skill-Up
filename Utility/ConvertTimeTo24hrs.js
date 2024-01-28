// given a time in 12 hrs format, convert it into 24 hrs format

// input
// 12:10 AM
// 12:33 PM

// output
// 00:10
// 12:33

// AM -> 12-1 AM -> 00:00 hrs              1-12 AM -> 1-12 hrs
// PM -> 12-1 PM -> 12:00 hrs              1-11:59 PM -> 12 + () hrs        

const convertTimeTo24hrs = (time) => {
    let convertedTime = '';
    if (time.includes('AM')) {
        const numericTime = time.replace("AM", "");
        const [hr, min] = numericTime.split(":");

        if (Number(hr) === 12) {
            convertedTime = `00:${min}`;
        } else {
            convertedTime = `${hr.padStart(2, 0)}:${min}`;
        }
    } else if (time.includes('PM')) {
        const numericTime = time.replace("PM", "");
        const [hr, min] = numericTime.split(":");

        if (Number(hr) === 12) {
            convertedTime = `12:${min}`;
        } else {
            convertedTime = `${12 + hr}:${min}`;
        }
    } else {
        throw new Error('invalid format entered');
    }
    
    return convertedTime;
}

console.log(convertTimeTo24hrs('12:10AM'));
console.log(convertTimeTo24hrs('12:33PM'));