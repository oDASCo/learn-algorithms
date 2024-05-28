function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    this.showWordDef = showWordDef;
    //this.get = get;
}
function put(data) {
    var pos = this.simpleHash(data.word);
    this.table[pos] = data.def;
}


// function put(key, data) {
//     var pos = this.betterHash(key);
//     if (this.table[pos] == undefined) {
//         this.table[pos] = key;
//         this.values[pos] = data;
//     }
//     else {
//         while (this.table[pos] != undefined) {
//             pos++;
//         }
//         this.table[pos] = key;
//         this.values[pos] = data;
//     }
// }
function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

function showWordDef(word) {
    let wordHash = this.simpleHash(word);

    let arr = Object.entries(this.table);
    for (var i = 0; i < arr.length; ++i) {
        return arr[i][0] == wordHash ? arr[i][1] : 'Not exist'
    }
}


var dict = [
    {
        word: 'milk',
        def: 'white water',
    },
    {
        word: 'sun',
        def: 'orange sphere',
    },
    {
        word: 'horse',
        def: "big dog from the dog's perspective",
    }
];
var hTable = new HashTable();
for (var i = 0; i < dict.length; ++i) {
    hTable.put(dict[i]);
}
hTable.showDistro();








console.log(hTable.showWordDef('horse'));
