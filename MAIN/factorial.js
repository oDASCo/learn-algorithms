function factorial1(x) {
    if (x === 1) {
        return 1
    }

    return x * factorial1(x - 1);

}

function factorial2(number) {
    if (number === 1) {
        return number;
    }
    else {
        return number * factorial2(number-1);
    }
}

console.log(factorial2(3));


function fact(n) {
    let res = 1;

    for (let i= 1; i <= n; i++) {
        res *= i;
    }

    return res;
}

//console.log(fact(50));
