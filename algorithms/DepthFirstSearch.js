/**
 * Depth First Search
 * Below code is tested on this sample graph
 */

// graph = {
//   A: ["B", "C"],
//   B: ["A", "D", "E"],
//   C: ["A", "F"],
//   D: ["B"],
//   E: ["B", "F"],
//   F: ["C", "E"],
// };
// console.log(DepthFirstSearch(graph  ,"B"))

function DepthFirstSearch(graph, startNode) {
  let stack = [startNode];
  let isVisited = new Set();
  isVisited.add(startNode);
  let res = [];
  while (stack.length > 0) {
    let currentNode = stack.pop();
    res.push(currentNode);
    for (sisterNode of graph[currentNode]) {
      if (!isVisited.has(sisterNode)) {
        isVisited.add(sisterNode);
        stack.push(sisterNode);
      }
    }
  }
  return res;
}

module.exports = DepthFirstSearch;
