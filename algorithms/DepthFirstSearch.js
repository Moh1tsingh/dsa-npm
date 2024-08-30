/**
 * Depth First Search
 * Below code is tested on this sample graph
 * graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
    }
 */

function DepthFirstSearch(graph, startNode) {
    let stack = [startNode];
    let isVisited = new Set();
    isVisited.add(startNode);
    while (stack.length > 0) {
        let currentNode = stack.pop();
        console.log(currentNode);
        for (sisterNode of graph[currentNode]) {
            if (!isVisited.has(sisterNode)) {
                isVisited.add(sisterNode);
                stack.push(sisterNode);
            }
        }
    }
}

module.exports = DepthFirstSearch;