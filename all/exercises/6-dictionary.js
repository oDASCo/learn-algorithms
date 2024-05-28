function Dictionary() {
    this.dataStore = {};
    this.add = add;
    this.remove = remove;
    this.show = show;
    this.showOne = showOne;
    this.clear = clear;


    function add(key, value) {
        this.dataStore[key] = value;
    }

    function remove(key) {
        delete this.dataStore[key];
    }

    function showOne(key) {
        return this.dataStore[key];
    }

    function show() {
        console.log(this.dataStore);
    }

    function clear() {
        for (let key of Object.keys(this.dataStore)) {
            delete this.dataStore[key];
        }
    }

}

let dict = new Dictionary();

dict.add('Dasc', 23411234);
dict.add('Niki', 13111123);
dict.add('Clover', 45433310);

dict.show();
console.log(dict.showOne('Dasc'));
dict.clear();
dict.show();


function DictionaryWords(text) {
    this.text = text;
    this.dataStore = {};

    this.countOccurrences = countOccurrences;

    function countOccurrences() {
        for (let word of this.text.split(' ')) {
            if (!this.dataStore[word]) {
                this.dataStore[word] = 1;
            } else {
                this.dataStore[word] = this.dataStore[word] + 1;
            }
        }

        const sortedWords = Object.keys(this.dataStore).sort((a, b) => this.dataStore[b] - this.dataStore[a]);

        for (let word of sortedWords) {
            console.log(`${word}: ${this.dataStore[word]} occurrences`);
        }

        return this.dataStore;
    }
}



let text = new DictionaryWords('the brown fox jumped over the blue fox');
console.log(text.countOccurrences());



let anagram = (a, b) => {
    return [...a.toLowerCase()].sort().join('') === [...b.toLowerCase()].sort().join('');
}

console.log(anagram('friend', 'finder'));
