function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.findPrevious = findPrevious;
    this.insert = insert;
    this.remove = remove;
    this.display = display;

    function find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    function insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    function display() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    function findPrevious(item) {
        var currNode = this.head;
        while (!(currNode.next == null) &&
        (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    function remove(item) {
        var prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }


}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();




function Node(element) {
    this.element = element;
    this.next = null;
    this.previos = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.findPrevious = findPrevious;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.nextStep = nextStep;
    this.prevStep = prevStep;
    this.advance = advance;
    this.back = back;
    this.step = 0;
    this.show = show;

    function find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    function nextStep() {
        this.step++;
    }

    function prevStep() {
        this.step--;
    }

    function show() {
        let curr = this.head;
        for (let i = 0; i < this.step; i++) {
            curr = curr.next;
        }

        return curr;
    }

    function advance (n) {
        let curr = this.head;
        while (n > 0) {
            curr = curr.next;
            n--;
        }

        this.head = curr;

        return curr;
    }

    function back (n) {
        let curr = this.head;
        let prev = null;
        for (let i = 0; i < n && curr !== null; i++) {
            prev = curr;
            curr = curr.next;
        }

        if (curr === null) {
            this.head = this.head;
        } else {
            this.head = prev;
        }

        return this.head;
    }

    function insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previos = current;
        current.next = newNode;
    }

    function display() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    function findPrevious(item) {
        var currNode = this.head;
        while (!(currNode.next == null) &&
        (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    function remove(item) {
        var prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.insert("Darya", "Alma");
cities.insert("Mikita", "Darya");
cities.insert("Sasha", "Mikita");
cities.insert("Inesa", "Sasha");
cities.insert("Vika", "Inesa");
cities.insert("Ilia", "Vika");
cities.display();

//cities.nextStep();
//console.log(cities.advance(7));
console.log(cities.nextStep());
console.log(cities.nextStep());
console.log(cities.nextStep());
console.log(cities.show());

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function josephusCircle(n, m) {
    // Create a circular linked list with n nodes
    let head = new Node(1);
    let current = head;
    for (let i = 2; i <= n; i++) {
        current.next = new Node(i);
        current = current.next;
    }
    current.next = head; // Make it circular

    // Eliminate every mth person until only the last two are left
    while (current.next !== current) {
        for (let i = 1; i < m - 1; i++) {
            current = current.next;
        }
        // Remove the mth person
        current.next = current.next.next;
    }

    // The last two remaining people
    return [current.value, current.next.value];
}

// Example usage
const n = 40; // Number of people
const m = 3;  // Kill every 3rd person
const result = josephusCircle(n, m);
console.log("Last two survivors:", result);
