const array = [3, 2, 23, 4, 1];

let bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr);
        for (let j = 0; j < arr.length; j++) {

            if (arr[j + 1] < arr[j]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};


console.log(bubbleSort(array));
