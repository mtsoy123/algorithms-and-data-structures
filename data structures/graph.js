class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    )

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    )
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
  }

  depthFirstRecursive(start) {
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    const helper = (vertex) => {
      if (!vertex) return null;
      results.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return helper(neighbor)
        }
      })

    }
    helper(start)

    return results;
  }

  depthFirstIterative(start) {
    const results = [];
    const stack = [];
    const visited = {};

    stack.push(start);
    visited[start] = true;

    let currentVertex;

    while (stack.length !== 0) {
      currentVertex = stack.pop();
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      })
    }
    return results
  }

  breadthFirst(start) {
    const queue = [];
    const result = [];
    const visited = {};

    queue.push(start);
    visited[start] = true;

    let currentNode;

    while (queue.length !== 0) {
      currentNode = queue.shift();

      result.push(currentNode);

      this.adjacencyList[currentNode].forEach(neighbor => {
//    this.adjacencyList[currentNode].slice().reverse().forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor)
        }
      })
    }

    return result;
  }
}
