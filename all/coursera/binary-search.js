

function binarySearch(arr, key) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (key < arr[mid]) {
            right = mid;
        } else if (key > arr[mid]) {
            left = mid;
        } else {
            return mid;
        }

    }

    return -1;
}

console.log(binarySearch([1, 2, 4, 6, 7, 8], 6));
