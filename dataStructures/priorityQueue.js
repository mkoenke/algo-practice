class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}
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
//min heap with priority queue
let ER = new PriorityQueue()
ER.enqueue("common cold", 5)
ER.enqueue("GSW", 1)
ER.enqueue("fever", 4)
ER.enqueue("broken arm", 2)
ER.enqueue("gaping wound", 3)
