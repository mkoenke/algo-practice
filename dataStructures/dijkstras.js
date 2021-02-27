class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight: weight })
    this.adjacencyList[v2].push({ node: v1, weight: weight })
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(value, priority) {
    this.values.push({ value, priority })
    this.sort()
  }
  dequeue() {
    return this.values.shift()
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}
