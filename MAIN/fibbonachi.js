function fibbonachi(x) {
    console.log('1: ' + x);

    if (x === 1 || x === 2) {
        return 1;
    }

    return fibbonachi(x - 1) + fibbonachi(x - 2);

}

//console.log(fibbonachi.js(6));


function dynFib(n) {
    var val = [];
    if (n === 1 || n === 2) {
        return 1;
    }
    else {
        val[1] = 1;
        val[2] = 2;
        for (var i = 3; i <= n; i++) {
            val[i] = val[i-1] + val[i-2];
        }
        return val[n-1];
    }
}

console.log(dynFib(4));

function iterFib(n) {
    var last = 1;
    var nextLast = 1;
    var result = 1;
    for (var i = 2; i < n; ++i) {
        result = last + nextLast;
        nextLast = last;
        last = result;
    }
    return result;
}
