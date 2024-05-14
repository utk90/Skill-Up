const threeSum = (arr, target) => {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++) {
        let t1 = arr[i];
        let remTar = target - t1;

        let start = i + 1;
        let end = arr.length - 1;

        while (start < end) {
            let currTar = arr[start] + arr[end];
            if (currTar > remTar) {
                end--;
            } else if (currTar < remTar) {
                start++;
            } else {
                return {
                    [i]: t1, [start]: arr[start],[end]: arr[end]
                }
            }
        }
    }
}

console.log(threeSum([1, 2, 3, 4, 5], 9))