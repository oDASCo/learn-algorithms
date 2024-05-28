

function quickFind (n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    console.log(arr);

    function isConnected(a, b) {
       return  arr[a] === arr[b];
    }


    function union(a, b) {
        let tempA = arr[a];
        let tempB = arr[b];

        for (let i = 0; i < n; i++) {
            if (arr[i] === tempA) {
                arr[i] = tempB;
            }
        }
    }


    console.log(isConnected(1, 3));
    union(1, 3);
    console.log(isConnected(1, 3));
    console.log(isConnected(1, 4));
    union(4, 3);
    console.log(isConnected(1, 4));
}

quickFind(5);

