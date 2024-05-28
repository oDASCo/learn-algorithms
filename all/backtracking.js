
// 9 3 7
// 13

function calc(arr, target, ind, res) {
    if (ind === arr.length) {
        return res === target;
    }

    return calc(arr, target, ind + 1, res + arr[ind]) || calc(arr, target, ind + 1, res - arr[ind]);
}

function solve (arr, target) {
    if (arr.length === 0) {return false}

    return calc(arr, target, 1, arr[0]);
}


console.log(solve([9, 3, 7, 9], 13));
console.log(solve([9, 3, 7], 13));
