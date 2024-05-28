

function isUniqueString(s) {
    let chars = new Set();

    for (let char of s) {
        if (chars.has(char)) {
            return false
        } else {
            chars.add(char);
        }
    }

    return true;
}

// function isUniqueString(s) {
//     for (let i = 0; i < s.length - 1; i++) {
//         for (let j = i + 1; j < s.length; j++) {
//             if (s[i] === s[j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

//console.log(isUniqueString('anna'));
//console.log(isUniqueString('clover'));


// function isPermutation(s, t) {
//     let letters = new Map();
//
//     for (let i = 0; i < s.length; i++) {
//         if (letters.has(s[i])) {
//             letters.set(s[i], letters.get(s[i]) + 1);
//         } else {
//             letters.set(s[i], 1);
//         }
//     }
//
//     for (let i = 0; i < t.length; i++) {
//         if (letters.has(t[i])) {
//             if (letters.get(t[i]) === 1) {
//                 letters.delete(t[i]);
//             } else {
//                 letters.set(t[i], letters.get(t[i]) - 1);
//             }
//         } else {
//             return false;
//         }
//     }
//
//     return !letters.size;
// }


function isPermutation(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const charCounts = new Array(256).fill(0);

    for (let i = 0; i < s.length; i++) {
        charCounts[s.charCodeAt(i)]++;
        charCounts[t.charCodeAt(i)]--;
    }

    for (let count of charCounts) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
}

console.log(isPermutation('lovel', 'olevl'));
console.log(isPermutation('lovel', 'olevle'));


function replaceURL(urlString) {
    return urlString.replaceAll(' ', '%20');
}

function replaceURLFor(urlString) {
    let result = '';
    for (let char of urlString) {
        if (char === ' ') {
            result += '%20'
        } else {
            result += char;
        }
    }
    return result;
}

console.log(replaceURL('Hello, my friend! '));
console.log(replaceURLFor('Hello, my friend! '));


function canBePalindrome (s) {
    let wordsMap = new Map();
    for (let char of s) {
        if (wordsMap.has(char)) {
            wordsMap.set(char, wordsMap.get(char) + 1);
        } else {
            wordsMap.set(char, 1);
        }
    }

    let oddCount = 0;
    for (let count of wordsMap.values()) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount <= 1;

}

console.log(canBePalindrome('level'));


function isSimilarWords(s, t) {
    let longerWord = s.length >= t.length ? s : t;
    let shorterWord = s.length < t.length ? s : t;

    if (longerWord.length - shorterWord.length > 1) {
        return false;
    }

    let edits = 0;
    let i = 0; //for long
    let j = 0; //for short

    while (i < longerWord.length && j < shorterWord.length) {
        if (longerWord[i] !== shorterWord[j]) {

            edits++;
            if (edits > 1) {
                return false;
            }

            if (longerWord.length !== shorterWord.length) {
                i++;
                continue;
            }
        }

        i++;
        j++;
    }

    return true;
}

console.log(isSimilarWords('pale', 'bale'));


function compressString(s) {
    let result = '';
    let stack = [];

    for (let i = 0; i <= s.length; i++) {
        if (stack[stack.length - 1] === s[i] && s[i] !== s[i+1]) {
            stack.push(s[i]);
            result = result + s[i] + stack.length;
            stack = [];
        } else if (stack.length === 0 && s[i] !== s[i+1]) {
            result = result + s[i] + 1;
        } else {
            stack.push(s[i]);
        }
    }

    return result.length < s.length ? result : s;
}

console.log(compressString('aaaabbcdddddddd'));
console.log(compressString('bb'));
console.log(compressString('aba'));
console.log(compressString('rrrrrii'));



function rotateImage(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < Math.floor(matrix.length / 2); j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix.length - 1 - j];
            matrix[i][matrix.length - 1 - j] = temp;
        }
    }

    console.log(matrix);

}

rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);


function zeroMatrix(matrix) {
    let zeroRows = null;
    let zeroCols = null;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroRows = i;
                zeroCols = j;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (zeroRows === i || zeroCols === j) {
                matrix[i][j] = 0;
            }
        }
    }

    console.log(matrix);

}

zeroMatrix([[1, 0, 3], [4, 5, 6], [7, 8, 9]]);

function isRotation(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    let s1s1 = s1 + s1;

    return s1s1.includes(s2);
}

