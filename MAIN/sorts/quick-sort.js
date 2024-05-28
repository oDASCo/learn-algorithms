const array = [3, 4, 23, 4, 1, 13, 6, 54, 7, 11, 11, 23];

let quickSort1 = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue
        }
        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    return [...quickSort1(less), pivot, ...quickSort1(greater)];
};


console.log(quickSort1(array));


function quicksort2(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    return quicksort2(left).concat(pivot, quicksort2(right));
}
