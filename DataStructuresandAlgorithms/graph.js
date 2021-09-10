class Graph{
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vertex){
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2){
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(v1, v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }
  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      var adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  DFS(vertex){
    var visited = {};
    var results = [];
    var adjacencyList = this.adjacencyList;

    function innerFunction(vertex) {
      if (visited[vertex]) {
        return;
      }
      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          innerFunction(neighbor);
        }
      })
    }
    innerFunction(vertex)
    return results;
  }
  DFSI(start) {
    var stack = [];
    var visited = {};
    var result = [];
    stack.push(start);
    while (stack.length){
      var vertex = stack.pop();
      if (visited[vertex] === undefined) {
        result.push(vertex);
        visited[vertex] = true;
        this.adjacencyList[vertex].forEach(neighbor => {
          stack.push(neighbor);
        })
      }
    }
    return result;
  }
  BFS(start){
    var queue = [start];
    var visited = {};
    var result = [];
    var vertex;
    while (queue.length) {
      vertex = queue.shift();
      if (visited[vertex] === undefined) {
        result.push(vertex);
        visited[vertex] = true;
        this.adjacencyList[vertex].forEach(neighbor => {
          queue.push(neighbor)
        })
      }
    }
    return result;
  }
}

var g = new Graph;
// g.addVertex('San Diego');
// g.addVertex('Austin');
// g.addVertex('Garden City');
// g.addVertex('Seattle');
// g.addVertex('San Antonio');
// g.addVertex('National City');
// g.addEdge('Austin', 'San Diego');
// g.addEdge('National City', 'San Diego');
// g.addEdge('Seattle', 'Austin');
// g.removeEdge('Austin', 'San Diego');
// g.removeVertex('San Diego');
// console.log(g.DFSI('San Diego'));
// console.log(g.BFS('San Diego'));

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A','B');
g.addEdge('A','C');
g.addEdge('B','D');
g.addEdge('C','E');
g.addEdge('D','E');
g.addEdge('D','F');
g.addEdge('E','F');
// console.log(g.adjacencyList);
console.log(g.DFS('A'));
console.log(g.BFS('A'));