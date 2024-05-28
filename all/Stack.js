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
