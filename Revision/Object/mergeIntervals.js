// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// algo
// 1. sort the array
// 2. compare the arr[i][0] with merged[i-1][1] if arr[i][0] <= merged[i-1][1] => condition of overlap (update merged[merged.length-1][1] to whichever max value)
// 3. if non-overlap just push arr[i] to merged array
// 4. return merged array

const mergeIntervals = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    arr.sort((a, b) => a[0] - b[0]);

    const merged = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] <= merged[merged.length - 1][1]) {
            merged[merged.length - 1][1] = Math.max(arr[i][1], merged[merged.length - 1][1]);
        } else{
            merged.push(arr[i]);
        }
    }

    return merged;
}

console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));