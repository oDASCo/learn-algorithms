
// ALL


function factorial (n) {
    if (n === 1) {
        return 1
    }
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));


function fib(n) {
    if (n === 1 || n === 2) { return 1} else {
        return fib(n - 1 ) + fib(n - 2 )
    }
}

console.log(fib(6));


// sorted arr
function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (val < arr[mid]) {
            right = mid - 1;
        } else if (val > arr[mid]) {
            left = mid + 1;
        } else {
            return mid;
        }

    }
    return false;
}

console.log(binarySearch([1, 3, 4, 6, 7, 77, 90, 109], 90));



// O(n^2) in the worst and average cases and O(n) in the best case.
function insertionSort(arr) {
    for (let i = 0;  i < arr.length; i++) {
        for (let j = i;  j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            } else {
                break;
            }
        }
    }

    return arr;
}

//console.log(insertionSort([10, 2, 3, 1, 5, 8, 7]));


function quickSort (arr) {
    if (arr.length <= 1) {return arr}

    let lesser = [];
    let bigger = [];

    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];

    for (let i = 0; i < arr.length; i++) {
        if (i !== pivotIndex) {
            if (arr[i] < pivot) {
                lesser.push(arr[i]);
            } else {
                bigger.push(arr[i]);
            }
        }
    }
    return [...quickSort(lesser), pivot, ...quickSort(bigger)];
}

//console.log(quickSort([10, 2, 3, 1, 5, 8, 7, 10, 3, 4, 10]));


function mergeSort(arr) {
    if (arr.length <= 1) {return arr}
    let mid = Math.floor(arr.length / 2);

    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    // console.log('leftArr: ' + leftArr);
    // console.log('rightArr: ' + rightArr);

    return merge(mergeSort(leftArr), mergeSort(rightArr));

}

function merge(left, right) {
    let result = [];
    let leftPointer = 0;
    let rightPointer = 0;

    while (leftPointer < left.length && rightPointer < right.length) {
        if (left[leftPointer] < right[rightPointer]) {
            result.push(left[leftPointer]);
            leftPointer++;
        } else {
            result.push(right[rightPointer]);
            rightPointer++;
        }
    }

    return [...result, ...left.slice(leftPointer), ...right.slice(rightPointer)];

}

//console.log(mergeSort([2, 10, 20, 3, 1, 5, 8]));


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertTreeNode(this.root, newNode);
        }
    }

    insertTreeNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertTreeNode(node.left, newNode)
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertTreeNode(node.right, newNode)
            }
        }
    }

    inOrder(node = this.root, res = []) {
        if (node) {
            this.inOrder(node.left, res);
            res.push(node.value);
            this.inOrder(node.right, res);
        }
        return res;
    }

    preOrder(node = this.root, res = []) {
        if (node) {
            res.push(node.value);
            this.preOrder(node.left, res);
            this.preOrder(node.right, res);
        }
        return res;
    }

    postOrder(node = this.root, res = []) {
        if (node) {
            this.postOrder(node.left, res);
            this.postOrder(node.right, res);
            res.push(node.value);
        }
        return res;
    }

    findMin() {
        let curr = this.root;
        while (curr.left) {
            curr = curr.left;
        }

        return curr;

    }

    findMax() {
        let curr = this.root;
        while (curr.right) {
            curr = curr.right;
        }
        return curr;
    }

    findNode(val) {
        let curr = this.root;
        while (curr.value !== val) {
            if (val < curr.value) {
                curr = curr.left;
            } else if (val > curr.value) {
                curr = curr.right;
            }
        }
        return curr;
    }


}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);
bst.insert(1);
// console.log(bst);
//
// console.log("In-order traversal:", bst.inOrder());
// console.log("Pre-order traversal:", bst.preOrder());
// console.log("Post-order traversal:", bst.postOrder());
// console.log("Min val:", bst.findMin());
// console.log("Max val:", bst.findMax());
// console.log("Find 5:", bst.findNode(5));

function isBalanced(root) {

    function height(node) {
        if (node === null) return 0;

        const leftHeight = height(node.left);
        const rightHeight = height(node.right);

        if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        return Math.max(leftHeight, rightHeight) + 1;
    }

    return height(root) !== -1;
}


class Graph {
    constructor() {
        this.graphList = {};
    }

    addVertex(vertex) {
        if (!this.graphList[vertex]) {
            this.graphList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        if (this.graphList[v1] && this.graphList[v2]) {
            this.graphList[v1].push(v2);
            this.graphList[v2].push(v1);
        }
    }

    bfs(start) {
        let result = [];
        let queue = [start];
        let visited = {};

        visited[start] = true;
        while(queue.length) {
            let current = queue.shift();
            result.push(current);

            this.graphList[current].forEach(item => {
                if (!visited[item]) {
                    visited[item] = true;
                    queue.push(item);
                }
            });
        }
        return result;
    }

    dfs(startVertex) {
        const visited = {};
        const result = [];

        const dfsRecursive = vertex => {
            if (!vertex) return;
            visited[vertex] = true;
            result.push(vertex);

            this.graphList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfsRecursive(neighbor);
                }
            });
        };

        dfsRecursive(startVertex);
        return result;
    }

}

let gr = new Graph();

gr.addVertex('A');
gr.addVertex('B');
gr.addVertex('C');
gr.addVertex('D');
gr.addVertex('E');
gr.addVertex('F');

gr.addEdge('A', 'B');
gr.addEdge('B', 'C');
gr.addEdge('B', 'F');
gr.addEdge('F', 'E');
gr.addEdge('A', 'F');
gr.addEdge('C', 'D');

console.log(gr);
console.log("BFS: ", gr.bfs('A'));
console.log("DFS: ", gr.dfs('A'));

