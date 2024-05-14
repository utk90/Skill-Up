/*
Given an image represented by n*m matrix, rotate the image by 90 degrees in clockwise direction.

Matrix: 1  2  3
        4  5  6
        7  8  9

Output: 7  4  1
        8  5  2
        9  6  3

s1: first transpose matrix
s2: interchange starting and ending columns
*/

const rotateImage = (arr) => {
    // transpose
    transposeMx(arr);
    // interchange cols
    interchangeCols(arr);

    return arr;
}

const transposeMx = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log('arr',arr)
        for (let j = i+1; j < arr[0].length; j++) {
            if (i < j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

const interchangeCols = (arr) => {
    for (let j = 0; j < arr[0].length / 2; j++) {
        for (let i = 0; i < arr.length; i++) {
            let lastEl = arr[i][arr[0].length - 1 - j];
            let temp = arr[i][j];
            arr[i][j] = lastEl;
            arr[i][arr[0].length - 1 - j] = temp;
        }
    }
}

console.log(rotateImage([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]]
));