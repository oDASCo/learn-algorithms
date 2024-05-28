function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.enqueueBack = enqueueBack;
    this.dequeue = dequeue;
    this.dequeueBack = dequeueBack;
    this.front = front;
    this.back = back;
    this.toString = toString;

    this.empty = empty;
}
function enqueue(element) {
    this.dataStore.push(element);
}
function dequeue() {
    var priority = this.dataStore[0];
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] > priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority,1);
}

function enqueueBack(element) {
    this.dataStore.unshift(element);
}
function dequeueBack() {
    return this.dataStore.pop();
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length-1];
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

let str = 'abba';
function isPalindrome(word) {
    const deque = new Queue();
    for (let char of word) {
        deque.enqueueBack(char);
    }

    while (deque.dataStore.length > 1) {
        if (deque.dequeue() !== deque.dequeueBack()) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome(str));



let nums = new Queue();

nums.enqueue(2);
nums.enqueue(4);
nums.enqueue(1);
nums.enqueue(7);
nums.enqueue(3);

nums.dequeue();
console.log(nums.toString());
