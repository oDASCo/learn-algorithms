function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;

    function push(element) {
        this.dataStore[this.top++] = element;
    }

    function pop() {
        return this.dataStore[--this.top];
    }

    function peek() {
        return this.dataStore[this.top-1];
    }

    function length() {
        return this.top;
    }

    function clear() {
        this.top = 0;
    }
}

let s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");

console.log(s.length());
console.log(s.peek());



// Multiple Base Conversions
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

let num = 32;
let base = 2;
let newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);


function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return true;
    }
    else {
        return false;
    }
}



function checkParentheses (string) {
    let stack = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') {
            stack.push(i);
        } else if (string[i] === ')') {
            if (stack.length === 0) {
                return i;
            }
            stack.pop();
        }
    }
    if (stack.length > 0) {
        return stack.pop();
    }

    return -1;
}

console.log(checkParentheses('2.3 + 23 / 12 + (3.14159 + 1'));


function calculatePostfixExpression(expression) {
    let stack = [];

    for (const token of expression.split(' ')) {
        if (!isNaN(token)) {  // Use isNaN to check if a value is a number
            stack.push(Number(token));  // Convert the string to a number before pushing
        } else {
            let operand2 = stack.pop();
            let operand1 = stack.pop();

            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
                default:
                    throw new Error('Invalid operator: ' + token);
            }
        }
    }

    return stack[0];
}


console.log(calculatePostfixExpression('2 3 + 5 *'));



function removeYellow (candies) {
    let stack = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] !== 'yellow') {
            stack.push(candies[i]);
        }
    }
    return stack;
}

console.log(removeYellow(['red', 'yellow', 'red', 'blue', 'yellow', 'pink']));
