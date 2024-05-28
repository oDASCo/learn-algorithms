// function Node(data, left, right) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//     this.show = show;
// }
// function show() {
//     return this.data;
// }
//
// function BST() {
//     this.root = null;
//     this.insert = insert;
//     this.inOrder = inOrder;
//     this.countNodes = countNodes;
//     this.countEdges = countEdges;
//
//     function countNodes() {
//         return recursiveCount(this.root);
//     }
//
//     function recursiveCount(node) {
//         if (node == null) {
//             return 0;
//         } else {
//             return 1 + recursiveCount(node.left) + recursiveCount(node.right);
//         }
//     }
//
//     function countEdges() {
//         return this.countNodes() - 1; // !!!! Number of edges is one less than the number of nodes
//     }
//
//     function insert(data) {
//         var n = new Node(data, null, null);
//         if (this.root == null) {
//             this.root = n;
//         }
//         else {
//             var current = this.root;
//             var parent;
//             while (true) {
//                 parent = current;
//                 if (data < current.data) {
//                     current = current.left;
//                     if (current == null) {
//                         parent.left = n;
//                         break;
//                     }
//                 }
//                 else {
//                     current = current.right;
//                     if (current == null) {
//                         parent.right = n;
//                         break;
//                     }
//                 }
//             }
//         }
//     }
//
//
//
//     function inOrder(node) {
//         if (!(this.root == null)) {
//             inOrder(node.left);
//             console.log(node.show() + " ");
//             inOrder(node.right);
//         }
//     }
//
//     function preOrder(node) {
//         if (!(node == null)) {
//             console.log(node.show() + " ");
//             preOrder(node.left);
//             preOrder(node.right);
//         }
//     }
//
//     function postOrder(node) {
//         if (!(node == null)) {
//             postOrder(node.left);
//             postOrder(node.right);
//             console.log(node.show() + " ");
//         }
//     }
//
//     function getMin() {
//         var current = this.root;
//         while (!(current.left == null)) {
//             current = current.left;
//         }
//         return current.data;
//     }
//
//     function getMax() {
//         var current = this.root;
//         while (!(current.right == null)) {
//             current = current.right;
//         }
//         return current.data;
//     }
//
//     function find(data) {
//         var current = this.root;
//         while (current.data != data) {
//             if (data < current.data) {
//                 current = current.left;
//             }
//             else {
//                 current = current.right;
//             }
//             if (current == null) {
//                 return null;
//             }
//         }
//         return current;
//     }
//
//     function remove(data) {
//         root = removeNode(this.root, data);
//     }
//     function removeNode(node, data) {
//         if (node == null) {
//             return null;
//         }
//         if (data == node.data) {
//             // node has no children
//             if (node.left == null && node.right == null) {
//                 return null;
//             }
//             // node has no left child
//             if (node.left == null) {
//                 return node.right;
//             }
//             // node has no right child
//             if (node.right == null) {
//                 return node.left;
//             }
//             // node has two children
//             var tempNode = getSmallest(node.right);
//             node.data = tempNode.data;
//             node.right = removeNode(node.right, tempNode.data);
//             return node;
//         }
//     }
// }
//
//
//
//
//
// let nums = new BST();
// nums.insert(23);
// nums.insert(45);
// nums.insert(16);
// nums.insert(37);
// nums.insert(3);
// nums.insert(99);
// nums.insert(22);
// console.log("Count: ");
// nums.inOrder();
//
// console.log(nums.countNodes());
// console.log(nums.countEdges());



class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    preOrderTraversal(node = this.root, result = []) {
        if (node) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }

    postOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}

// Example usage
// const bst = new BinarySearchTree();
// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);
// bst.insert(12);
// bst.insert(18);
// bst.insert(1);
//
// console.log("In-order traversal:", bst.inOrderTraversal());
// console.log("Pre-order traversal:", bst.preOrderTraversal());
// console.log("Post-order traversal:", bst.postOrderTraversal());
