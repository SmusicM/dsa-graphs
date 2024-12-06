class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    //adds v2 to v1  relationship and vise versa in the adjacent set
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const addToArrr = [start];
    const added = new Set([start]);
    const dfsArr = [];
    while (addToArrr.length) {
      let currVertex = addToArrr.pop();
      dfsArr.push(currVertex.value);
      for (let adj of currVertex.adjacent) {
        if(!added.has(adj)){
          addToArrr.push(adj);
          added.add(adj);
        }
       
      }
    }

    return dfsArr;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const addToArrr = [start];
    const dfsArr = [];
    while (addToArrr.length) {
      const currVertex = addToArrr.shift();
      if (!dfsArr.includes(currVertex.value)) {
        dfsArr.push(currVertex.value);
        addToArrr.push(...currVertex.adjacent);
      }
    }
    console.log(dfsArr);
    return dfsArr;
  }
}

module.exports = { Graph, Node };
