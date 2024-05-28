
function binarySearch1(arr, key) {
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

console.log(binarySearch1([1, 2, 4, 6, 7, 8], 6));


const array = [1, 2, 4, 6, 11, 23, 56, 67, 77];

let binarySearch2 = (arr, x, start, end) => {
    let middle = Math.floor((start + end) / 2);
    if (x === arr[middle]) {
        return middle;
    }
    if (x < arr[middle]) {
        return binarySearch2(arr, x, start, middle - 1);
    } else {
        return binarySearch2(arr, x, middle + 1, end);
    }

};


console.log(binarySearch2(array, 4, 0, array.length));
