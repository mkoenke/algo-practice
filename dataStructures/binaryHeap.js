class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(element) {
    this.values.push(element)
    this.bubbleUp(element)
  }
  bubbleUp(element) {
    let index = this.values.length - 1
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]
      if (element < parent) break
      if (element > parent) {
        this.values[parentIndex] = element
        this.values[index] = parent
        index = parentIndex
      }
    }
  }
  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
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
        if (leftChild > element) {
          swapIndex = leftChildIndex
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if (
          (swapIndex === null && rightChild > element) ||
          (swapIndex !== null && rightChild > leftChild)
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
