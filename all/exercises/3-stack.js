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
