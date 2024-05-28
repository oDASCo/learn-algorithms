function Set() {
    this.dataStore = [];
    this.add = add;
    this.show = show;
    this.higher = higher;

    function add(item) {
        if (this.dataStore.indexOf(item) < 0) {
            this.dataStore.push(item);
        }
        this.dataStore.sort((a, b) => a - b);
    }

    function show() {
        return this.dataStore;
    }

    function higher(elem) {
        return this.dataStore[this.dataStore.findIndex(item => item === elem) + 1] || 'No elem';
    }
}

let sortedSet = new Set();

sortedSet.add(4);
sortedSet.add(6);
sortedSet.add(1);
sortedSet.add(10);
console.log(sortedSet.show());
console.log(sortedSet.higher(6));
