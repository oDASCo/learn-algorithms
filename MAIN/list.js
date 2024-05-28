function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;

    function append(element) {
        this.dataStore[this.listSize++] = element;
    }

    function find(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }

    function remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt,1);
            --this.listSize;
            return true;
        }
        return false;
    }

    function length() {
        return this.listSize;
    }

    function toString() {
        return this.dataStore;
    }

    function insert(element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos+1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }

    function clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

    function contains(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return true;
            }
        }
    }


    function front() {
        this.pos = 0;
    }
    function end() {
        this.pos = this.listSize-1;
    }
    function prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }
    function next() {
        if (this.pos < this.listSize-1) {
            ++this.pos;
        }
    }
    function currPos() {
        return this.pos;
    }
    function moveTo(position) {
        this.pos = position;
    }
    function getElement() {
        return this.dataStore[this.pos];
    }

}

let names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString());






function List(data) {
    this.listSize = 0;
    this.dataStore = data;
    this.append = append;
    this.appendOnlyLarger = appendOnlyLarger;
    this.appendOnlySmaller = appendOnlySmaller;
    this.toString = toString;

    function append(element) {
        this.dataStore[this.listSize++] = element;
    }

    function isLetterFurtherDown(letter1, letter2) {
        const upperLetter1 = letter1.toUpperCase();
        const upperLetter2 = letter2.toUpperCase();

        const unicode1 = upperLetter1.charCodeAt(0);
        const unicode2 = upperLetter2.charCodeAt(0);

        return unicode1 > unicode2;
    }

    function appendOnlySmaller(element) {
        let count = 0;
        for (let i = 0; i < this.dataStore.length; i++) {
            if (typeof this.dataStore[i] === 'number') {
                if (element < this.dataStore[i]) {
                    count++;
                }
            } else {
                if (!isLetterFurtherDown(element[0], this.dataStore[i][0])) {
                    count++;
                }
            }
        }
        if (count === this.dataStore.length) {
            this.dataStore[this.dataStore.length++] = element;
        }
    }

    function appendOnlyLarger(element) {
        let count = 0;
        for (let i = 0; i < this.dataStore.length; i++) {
            if (typeof this.dataStore[i] === 'number') {
                if (element > this.dataStore[i]) {
                    count++;
                }
            } else {
                if (isLetterFurtherDown(element[0], this.dataStore[i][0])) {
                    count++;
                }
            }
        }
        if (count === this.dataStore.length) {
            this.dataStore[this.dataStore.length++] = element;
        }
    }

    function toString() {
        return this.dataStore;
    }
}

let nums = new List([2, 3, 4]);
nums.appendOnlyLarger(7);
nums.appendOnlyLarger(9);
nums.appendOnlySmaller(1);
console.log(nums.toString());


let words = new List(['after', 'america']);
words.appendOnlyLarger('banana');
words.appendOnlyLarger('cinnamon');
words.appendOnlyLarger('ananas');
console.log(words.toString());


function Person (name, gender) {
    this.name = name;
    this.gender = gender;
}

const peopleList = [
    new Person("Alice", "Female"),
    new Person("Bob", "Male"),
    new Person("Charlie", "Male"),
    new Person("David", "Male"),
    new Person("Eva", "Female"),
    new Person("Frank", "Male"),
    new Person("Grace", "Female"),
    new Person("Helen", "Female"),
    new Person("Ivan", "Male"),
    new Person("Jane", "Female")
];

function displayOnlyWithGender(arr, gender) {
    return arr.filter(person => person.gender === gender);
}

console.log(displayOnlyWithGender(peopleList, 'Female'));
