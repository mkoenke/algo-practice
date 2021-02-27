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
  dijkstras(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    let path = [] //to be returned at end
    let smallest
    ///initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }
    ///as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().value
      if (smallest === finish) {
        /// finished - build up path to return at end
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          ///find neighbor node
          let nextNode = this.adjacencyList[smallest][neighbor]
          ///calc new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          if (candidate < distances[nextNeighbor]) {
            /// update new smallest distance to neighbor
            distances[nextNeighbor] = candidate
            //update previous - how we got to neighbor
            previous[nextNeighbor] = smallest
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }
    return path.concat(smallest).reverse()
  }
}

///slow bc not binary heap
// class PriorityQueue {
//   constructor() {
//     this.values = []
//   }
//   enqueue(value, priority) {
//     this.values.push({ value, priority })
//     this.sort()
//   }
//   dequeue() {
//     return this.values.shift()
//   }
//   sort() {
//     this.values.sort((a, b) => a.priority - b.priority)
//   }
// }

class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority)
    this.values.push(newNode)
    // this.bubbleUp(newNode)
    this.bubbleUp()
  }
  //   bubbleUp(newNode) {
  bubbleUp() {
    let index = this.values.length - 1
    const newNode = this.values[index]
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]
      if (newNode.priority >= parent.priority) break
      //   if (newNode.priority < parent.priority) {
      this.values[parentIndex] = newNode
      this.values[index] = parent
      index = parentIndex
      //   }
    }
  }
  dequeue() {
    const min = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return min
  }

  sinkDown() {
    let index = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild, rightChild
      let swapIndex = null
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild.priority < element.priority) {
          swapIndex = leftChildIndex
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if (
          (swapIndex === null && rightChild.priority < element.priority) ||
          (swapIndex !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIndex = rightChildIndex
        }
      }

      if (swapIndex === null) break
      this.values[index] = this.values[swapIndex]
      this.values[swapIndex] = element
      index = swapIndex
    }
  }
}
class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

let g = new WeightedGraph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A", "B", 4)
g.addEdge("A", "C", 2)
g.addEdge("B", "E", 3)
g.addEdge("C", "D", 2)
g.addEdge("C", "F", 4)
g.addEdge("D", "E", 3)
g.addEdge("D", "F", 1)
g.addEdge("E", "F", 1)

g.dijkstras("A", "E")
