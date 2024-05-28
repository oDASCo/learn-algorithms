const array = [1, 2, 4, 6, 11, 23, 56, 67, 77];

// let binarySearch = (arr, x) => {
//     let start = 0;
//     let end = arr.length;
//     let middle;
//     let found = false;
//     let position = -1;
//
//     while (found === false && start <= end) {
//         middle = Math.floor((start + end) / 2);
//         if (arr[middle] === x) {
//             found = true;
//             position = middle
//             return position;
//         }
//         if (x < arr[middle]) {
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//     }
//     return position;
// };

let binarySearch = (arr, x, start, end) => {
    let middle = Math.floor((start + end) / 2);
    if (x === arr[middle]) {
        return middle;
    }
    if (x < arr[middle]) {
        return binarySearch(arr, x, start, middle - 1);
    } else {
        return binarySearch(arr, x, middle + 1, end);
    }

};


console.log(binarySearch(array, 4, 0, array.length));
