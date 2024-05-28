class LinkedList {
    constructor() {
        this.size = 0
        this.root = null
    }

    add(value) {
        if (this.size === 0) {
            this.root = new Node(value);
            this.size += 1;
            return true;
        }
        let node = this.root
        while (node.next) {
            node = node.next
        }
        let newNode = new Node(value)
        node.next = newNode
        this.size += 1
    }

    getSize() {
        return this.size
    }


    print() {
        let result = []
        let node = this.root
        while (node) {
            result.push(node.value)
            node = node.next
        }
        console.log(result);
    }

    deleteDuplicates() {
        let dupSet = new Set();
        let current = this.root;
        let previous = null;

        while (current !== null) {
            if (dupSet.has(current.value)) {
                previous.next = current.next;
            } else {
                dupSet.add(current.value);
                previous = current;
            }
            current = current.next;
        }
    }

    // deleteDuplicates() {
    //     let current = this.root;
    //
    //     while (current !== null) {
    //         let runner = current;
    //         while (runner.next !== null) {
    //             if (runner.next.value === current.value) {
    //                 runner.next = runner.next.next;
    //             } else {
    //                 runner = runner.next;
    //             }
    //         }
    //         current = current.next;
    //     }
    // }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const list = new LinkedList()
list.add(5)
list.add(3)
list.add(2)
list.add(5)
list.add(7)
list.add(3)
list.add(7)
list.add(17)

list.print()
list.deleteDuplicates()
list.print()

