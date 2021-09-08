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
}

var g = new Graph;
g.addVertex('San Diego');
g.addVertex('Austin');
g.addVertex('Garden City');
g.addVertex('Seattle');
g.addVertex('San Antonio');
g.addVertex('National City');
g.addEdge('Austin', 'San Diego');
g.addEdge('National City', 'San Diego');
g.addEdge('Seattle', 'Austin');
// g.removeEdge('Austin', 'San Diego');
g.removeVertex('San Diego');
console.log(g.adjacencyList);