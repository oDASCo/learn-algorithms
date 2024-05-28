const array = [3, 4, 23, 4, 1, 6, 54, 7, 11];

let linearSearch = (arr, x) => {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return null;
};


console.log(linearSearch(array, 55));
