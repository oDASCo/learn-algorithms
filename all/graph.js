// function Graph(v) {
//     this.vertices = v;
//     this.edges = 0;
//     this.adj = [];
//     for (var i = 0; i < this.vertices; ++i) {
//         this.adj[i] = [];
//     }
//     this.dfs = dfs;
//     this.bfs = bfs;
//     this.addEdge = addEdge;
//     this.showGraph = showGraph;
//     this.marked = [];
//     for (var i = 0; i < this.vertices; ++i) {
//         this.marked[i] = false;
//     }
//     this.edgeTo = [];
//     this.pathTo = pathTo;
//     this.hasPathTo = hasPathTo;
// }
//
// function addEdge(v, w) {
//     this.adj[v].push(w);
//     this.adj[w].push(v);
//     this.edges++;
// }
//
// function showGraph() {
//     for (var i = 0; i < this.vertices; ++i) {
//         console.log(i + " -> " + this.adj[i].join(' '));
//     }
// }
//
// function dfs(v) {
//     var start = new Date().getTime();
//     this.marked[v] = true;
//
//     if (this.adj[v] != undefined) {
//         console.log("Visited vertex: " + v);
//     }
//
//     for (let i = 0; i < this.adj[v].length; i++) {
//         let w = this.adj[v][i];
//         if (!this.marked[w]) {
//             this.dfs(w);
//         }
//     }
//
//     var stop = new Date().getTime();
//     var elapsed = stop - start;
//     console.log("The DFS time was: " + elapsed +
//         " milliseconds.");
// }
//
// function bfs(s) {
//     var start = new Date().getTime();
//
//     var queue = [];
//     this.marked[s] = true;
//     queue.push(s);
//
//     console.log(s);
//
//     while (queue.length > 0) {
//         var v = queue.shift();
//         console.log(v);
//         // if (v == undefined) {
//         //     console.log("Visited vertex: " + v);
//         // }
//
//         for (var i = 0; i < this.adj[v].length; i++) {
//             var w = this.adj[v][i];
//             if (!this.marked[w]) {
//                 this.edgeTo[w] = v;
//                 this.marked[w] = true;
//                 queue.push(w);
//             }
//         }
//     }
//
//     var stop = new Date().getTime();
//     var elapsed = stop - start;
//     console.log("The BFS time was: " + elapsed +
//         " milliseconds.");
// }
//
// function pathTo(v) {
//     var source = 0;
//     if (!this.hasPathTo(v)) {
//         return undefined;
//     }
//     var path = [];
//     for (var i = v; i !== source; i = this.edgeTo[i]) {
//         path.push(i);
//     }
//     path.push(source);
//     return path.reverse(); // Reverse the path to get it in the correct order
// }
//
// function hasPathTo(v) {
//     return this.marked[v];
// }
//
// function generateRandomGraph(vertices, edges) {
//     const g = new Graph(vertices);
//
//     for (let i = 0; i < edges; i++) {
//         const source = Math.floor(Math.random() * vertices);
//         let destination = Math.floor(Math.random() * vertices);
//
//         // Ensure the source and destination are different
//         while (destination === source) {
//             destination = Math.floor(Math.random() * vertices);
//         }
//
//         g.addEdge(source, destination);
//     }
//
//     return g;
// }
//
// // Example usage:
// const largeGraph = generateRandomGraph(5, 5); // 1000 vertices, 5000 edges
//
// console.log(largeGraph);
//
// largeGraph.bfs(5);
// largeGraph.dfs(990);

// var vertex = 4;
// var paths = g.pathTo(vertex);
//
// if (paths !== undefined) {
//     while (paths.length > 0) {
//         if (paths.length > 1) {
//             console.log(paths.pop() + '-');
//         } else {
//             console.log(paths.pop());
//         }
//     }
// } else {
//     console.log("No path to vertex " + vertex);
// }


class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return "Invalid vertex";
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    bfs(startVertex) {
        const visited = {};
        const queue = [startVertex];
        const result = [];

        visited[startVertex] = true;

        while (queue.length) {
            const currentVertex = queue.shift();
            console.log(queue, currentVertex);
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                console.log(neighbor);
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
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

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfsRecursive(neighbor);
                }
            });
        };

        dfsRecursive(startVertex);
        return result;
    }
}

// Example usage
const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// graph.addEdge("C", "E");
// graph.addEdge("C", "F");

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

console.log(graph);

console.log("BFS:", graph.bfs("A"));
console.log("DFS:", graph.dfs("A"));
