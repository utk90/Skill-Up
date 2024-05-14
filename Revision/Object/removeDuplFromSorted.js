/*
Given a sorted array arr[] of size N, the task is to remove the duplicate elements from the array.
Input: arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5}
Output: arr[] = {1, 2, 3, 4, 5}
s1 - place i=0, j=1
s2 - if (a[i]==a[j]) j++    if (a[i]!=a[j]) i++; a[i] = a[j]; j++
s3 - no. of unique elements = (i+1)
s4 - elements after i are duplicate enteries and before are unique
*/

const removeDupl = (arr) => {
    let i = 0, j = 1;

    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            j++;
        } else {
            i++;
            arr[i] = arr[j];
            j++;
        }
    }

    console.log('number of unique elements', i + 1);
    return arr;
}

console.log(removeDupl([1, 2, 2, 3, 4, 4, 4, 5, 5]))