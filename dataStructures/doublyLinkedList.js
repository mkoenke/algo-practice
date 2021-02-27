class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }
  shift() {
    if (!this.head) return undefined
    let oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }
  unshift(value) {
    let newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  // get(index) {
  //   if (index < 0 || index >= this.length) return null
  //   if (index <= this.length / 2) {
  //     let count = 0
  //     let current = this.head
  //     while (count !== index) {
  //       current = current.next
  //       count++
  //     }
  //     return current
  //   } else {
  //     let count = this.length - 1
  //     let current = this.tail
  //     while (count !== index) {
  //       current = current.prev
  //       count--
  //     }
  //     return current
  //   }
  // }
  get(index) {
    if (index < 0 || index > this.length - 1) return null
    if (index < this.length / 2) {
      let current = this.head
      // let count = 0
      // while (count !==index){
      //   current = current.next
      //   count++
      // }
      // return current
      for (let i = 0; i < index; i++) {
        current = current.next
        return current
      }
    } else {
      let current = this.tail
      for (let i = this.length - 1; i >= index; i--) {
        current = current.prev
        return current
      }
      // } else {
      //   let count = this.length -1
      //   let current = this.tail
      //   while(count !== index){
      //     current = current.prev
      //     count --
      //   }
      //   return current
    }
  }

  set(index, value) {
    let foundNode = this.get(index)
    if (!foundNode) {
      return false
    } else {
      foundNode.val = value
      return true
    }
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) return false
    if (index === 0) return !!this.unshift(value)
    if (index === this.length) return !!this.push(value)
    let newNode = newNode(value)
    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next
    beforeNode.next = newNode
    newNode.prev = beforeNode
    newNode.next = afterNode
    afterNode.prev = newNode
    this.length++
    return true
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    let removedNode = this.get(index)
    // removedNode.prev.next = removedNode.next
    // removedNode.next.prev = removedNode.prev
    let beforeNode = removedNode.prev
    let afterNode = removedNode.next
    beforeNode.next = afterNode
    afterNode.prev = before
    removedNode.next = null
    removedNode.prev = null
    this.length--
    return removedNode
  }
}
