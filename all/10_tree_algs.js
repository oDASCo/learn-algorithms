const tree = [
    {
        v: 7,
        c: [
            {
                v:10,
                c: [
                    {
                        v:11,
                    }
                ]
            },
            {
                v:1,
                c: [
                    {
                        v:5,
                        c: [
                            {
                                v:18
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 8,
        c: [
            {
                v:22
            },
            {
                v:15
            }
        ]
    }
]

const recursive = (tree) => {
    let sum = 0;
    tree.forEach(node => {
        sum += node.v
        if(!node.c) {
            return node.v
        }
        sum += recursive(node.c)
    })
    return sum
}

const iteration = (tree) => {
    if (!tree.length) {
        return 0
    }
    let sum = 0
    let stack = []
    tree.forEach(node => stack.push(node));
    console.log('stack before while: ' + JSON.stringify(stack));
    while (stack.length) {

        const node = stack.pop()
        console.log('stack after pop in while: ' + JSON.stringify(stack));

        sum += node.v
        console.log('Node: ' + JSON.stringify(node));
        if (node.c) {
            node.c.forEach(child => stack.push(child))
        }
    }
    return sum
}

console.log(iteration(tree))
// console.log(recursive(tree))
