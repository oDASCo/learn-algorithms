
function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (val < arr[mid]) {
            right = mid - 1;
        } else if (val > arr[mid]) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return false;
}


console.log(binarySearch([1, 3, 4, 6, 7, 77, 90, 109], 90));
console.log(binarySearch([1, 3, 4, 6, 7, 77, 90, 109], 91));

console.log(runUnitTest([1, 3, 4, 6, 7, 77, 90, 109], 90, 6));
console.log(runUnitTest([1, 3, 4, 6, 7, 77, 90, 109], 4, 6));


function runUnitTest(input, targetInput, expected) {
    let res = binarySearch(input, targetInput) === expected;
    return res ? 'Passed' : 'Not passed';
}
