const array = [3, 2, 23, 4, 1];

let bubbleSort1 = (arr) => {
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


console.log(bubbleSort1(array));


function bubbleSort2() {
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer-1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner+1]) {
                swap(this.dataStore, inner, inner+1);
            }
        }
        console.log(this.toString());
    }
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
