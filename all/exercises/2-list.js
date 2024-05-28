

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
