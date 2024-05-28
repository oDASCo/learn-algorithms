




function lengthOfLIS(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const dp = new Array(nums.length).fill(1);

    //console.log(dp);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    //console.log(dp);
    return Math.max(...dp);
}

// Example usage:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const result = lengthOfLIS(nums);
//console.log(result);






//
// let arr1 = [1, 2, 3, 9];
// let arr2 = [1, 2, 4, 4];
//
//
// function findPairForSum (arr, value) {
//     let res = [];
//     let left = 0;
//     let right = arr.length - 1;
//
//
//     while (left < right) {
//         let currentSum = arr[left] + arr[right];
//         console.log(currentSum);
//         if (currentSum === value) {
//             res = [arr[left], arr[right]];
//             break;
//         } else if (currentSum > value) {
//             right--;
//         } else {
//             left++;
//         }
//     }
//
//     return res.length ? res : 'Not found';
// }

//console.log(findPairForSum(arr1, 8));
//console.log(findPairForSum(arr2, 8));



// var merge = function(nums1, m, nums2, n) {
//     let i = m - 1; // Pointer for nums1
//     let j = n - 1; // Pointer for nums2
//     let k = m + n - 1; // Pointer for the result array
//
//     // Merge in reverse order without using extra space
//     while (i >= 0 && j >= 0) {
//         console.log('nums1[i]: ' + nums1[i]);
//         console.log('nums2[j]: ' + nums2[j]);
//         if (nums1[i] > nums2[j]) {
//             console.log('k: ' + k, 'nums1[k]: ' + nums1[k]);
//             nums1[k] = nums1[i];
//             i--;
//         } else {
//             console.log('k: ' + k, 'nums1[k]: ' + nums1[k]);
//             nums1[k] = nums2[j];
//             j--;
//         }
//         k--;
//     }

    // If there are remaining elements in nums2, copy them to nums1
//     while (j >= 0) {
//         nums1[k] = nums2[j];
//         j--;
//         k--;
//     }
//     return nums1;
// };

//console.log(merge([1, 2, 3, 4], 3, [2, 5, 6], 3));




// var isHappy = function(n) {
//     let res = n;
//     let arr = n.toString().split('');
// if (n === 1) {
//     return true;
// }
//
//     while (res > 1) {
//         console.log(res);
//         res = sum(res);
//     }
//
//
//     function sum (newNum) {
//         let arr = newNum.toString().split('');
//         return arr.reduce((acc, item) => {
//             console.log(item);
//             return acc + (item * item);
//         }, 0);
//     }
//
//     return res === 1 ? "Yes" : "No";
// };
//
//
// console.log(isHappy(19));
// console.log(isHappy(2));
// let fibGenerator = function*() {
//     let first = 0;
//     let second = 1;
//     let result = 0;
//
//     while (true) {
//         first = second;
//         second = result;
//         result = first + second
//         yield(result);
//     }
// };
//
// const gen = fibGenerator();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);



// let str = "As sly as a fox, as strong as an ox";
// let target = "as";
//
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) !== -1) {
//     alert( pos );
// }

// let str = 'As sly as a fox, as strong as an ox';
//
// let target = 'as'; // let's look for it
//
// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos === -1) break;
//
//     console.log( `Found at ${foundPos}` );
//     pos = foundPos + 1; // continue the search from the next position
// }

// var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
// var total = 0;
// var average = 0.0;
// for (var col = 0; col < grades.length; col++) {
//     for (var row = 0; row < grades[col].length; row++) {
//         total += grades[row][col];
//     }
//     average = total / grades[col].length;
//     console.log("Test " + parseInt(col+1) + " average: " +
//         average.toFixed(2));
//     total = 0;
//     average = 0.0;
// }

function generatePermutations(str) {
    const result = [];

    // Вспомогательная рекурсивная функция для генерации всех перестановок
    function permute(current, remaining) {
        // Если нет оставшихся символов, добавляем текущую перестановку в результат
        if (remaining.length === 0) {
            result.push(current);
            return;
        }

        // Перебираем оставшиеся символы и рекурсивно вызываем функцию для каждой возможной комбинации
        for (let i = 0; i < remaining.length; i++) {
            const nextCurrent = current + remaining[i]; // Добавляем текущий символ к текущей перестановке
            const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1); // Удаляем текущий символ из оставшихся
            console.log('nextCurrent:', nextCurrent, 'nextRemaining:', nextRemaining);
            permute(nextCurrent, nextRemaining); // Рекурсивно вызываем функцию с обновленными параметрами
        }
    }

    permute('', str); // Начинаем с пустой строки и всей строки в качестве оставшихся символов

    return result;
}

// Пример использования
const str = 'abc';
// console.log(generatePermutations(str));



var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0; // If the array is empty, there are no duplicates
    }

    let uniqueCount = 1; // Initialize uniqueCount to 1 since the first element is always unique

    // Start the loop from the second element
    for (let j = 1; j < nums.length; j++) {
        // If the current element is different from the previous unique element
        if (nums[j] !== nums[j - 1]) {
            // Move the unique element to the next position
            nums[uniqueCount] = nums[j];
            uniqueCount++; // Increment uniqueCount
        }
    }

    // The length of the array up to uniqueCount represents the number of unique elements
    return nums;
};

//console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 3, 3]));


var rotate = function(nums, k) {
    console.log(k % nums.length);
    k %= nums.length;
    console.log(k);
    const lastElems = nums.splice(nums.length - k);

    nums.unshift(...lastElems);
    console.log(nums);
};

//rotate([1, 2, 3, 4, 5], 2);



var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);
    let i = 0;
    let j = 1;

    while (j < intervals.length) {
        if (intervals[i][1] >= intervals[j][0] && intervals[i][0] <=  intervals[j][0]) {
            intervals[i] = [intervals[i][0], Math.max(intervals[j][1], intervals[i][1])];
            intervals.splice(j, 1);
        }
        i++;
        j++;
    }

    return intervals;
};

// console.log('last');
// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// console.log(merge([[1,3],[0,4]]));



function spiralMatrix (matrix) {
    let result = [];
    let rowStart = 0, rowEnd = matrix.length - 1;
    let colStart = 0, colEnd = matrix[0].length - 1;

    while (rowStart <= rowEnd && colStart <= colEnd) {

        for (let i = colStart; i <= colEnd; i++) {
            result.push(matrix[rowStart][i]);
        }
        rowStart++;

        for (let i = rowStart; i <= rowEnd; i++) {
            result.push(matrix[i][colEnd]);
        }
        colEnd--;

        if (rowStart <= rowEnd) {
            for (let i = colEnd; i >= colStart; i--) {
                result.push(matrix[rowEnd][i]);
            }
            rowEnd--;
        }

        if (colStart <= colEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                result.push(matrix[i][colStart]);
            }
            colStart++;
        }

    }



    return result;
}

console.log(spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
