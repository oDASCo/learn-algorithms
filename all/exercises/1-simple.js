
function Grade () {
    this.grades = [];
    this.addGrade = addGrade;
    this.showAverage = showAverage;

    function addGrade (grade) {
        this.grades.push(grade);
    }

    function showAverage () {
        let sum = this.grades.reduce((res, item) => {
            res += item;
            return res;
        });
        return sum / this.grades.length;
    }
}

let grades = new Grade();

grades.addGrade(10);
grades.addGrade(6);
grades.addGrade(7);
grades.addGrade(8);
grades.addGrade(9);
grades.addGrade(9);
grades.addGrade(9);

console.log(grades.showAverage());


let arr = ['hello', 'dasc', 'world', 'Krakow'];
console.log(arr);
console.log(arr.reverse());




function WeekTemps() {
    this.dataStore = [
        [20],
        [10]
    ];
    this.add = add;
    this.yearAverage = yearAverage;
    this.monthAverage = monthAverage;
}
function add(month, temp) {
    if (month >= 0 && month <= 11) {
        this.dataStore[month].push(temp);
    } else {
        console.log('Invalid month');
    }
}
function yearAverage() {
    var total = 0;
    let count = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
        for (var j = 0; j < this.dataStore[i].length; ++j) {
            total += this.dataStore[i][j];
            count++;
        }
    }
    return total / count;
}

function monthAverage(month) {
    var total = 0;
    for (var i = 0; i < this.dataStore[month].length; ++i) {
        total += this.dataStore[month][i];
    }
    return total / this.dataStore[month].length;
}

let temps = new WeekTemps();

console.log(temps.monthAverage(0));
console.log(temps.yearAverage());




function Letters (letters) {
    this.letters = letters;
    this.getWord = getWord;

    function getWord() {
        return this.letters.join('');
    }
}

let letters = new Letters(['D', 'a', 'r', 'y', 'a']);
console.log(letters.getWord());
