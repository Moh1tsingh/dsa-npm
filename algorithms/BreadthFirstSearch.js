/**
 * Breadth First Search
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

function BreadthFirstSearch(graph, startNode){
    let queue = [startNode];
    let isVisited = new Set();
    isVisited.add(startNode);
    while(queue.length > 0) {
        let currentNode = queue.shift();
        console.log(currentNode);
        let sisterNodes = graph[currentNode];
        for (let sisterNode of sisterNodes) {
            if(!isVisited.has(sisterNode)){
                isVisited.add(sisterNode);
                queue.push(sisterNode);
            }
        }
    }
}

module.exports = BreadthFirstSearch;