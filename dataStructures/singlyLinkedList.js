class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode //or this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  //   traverse(){
  //       let current = this.head
  //       while (current){
  //           current = current.next
  //       }
  //   }
  pop() {
    if (!this.head) {
      return undefined
    }
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift() {
    if (!this.head) return undefined
    let currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead
  }
  unshift(val) {
    let newHead = new Node(val)
    if (!this.head) {
      this.head = newHead
      this.tail = newHead //or this.tail
    } else {
      newHead.next = this.head
      this.head = newHead
    }
    this.length++
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) return null
    let counter = 0
    let current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
    // let current = this.head
    // for (let i = 0; i < this.length; i++) {
    //   current = current.next
    //   if (i === index) {
    //     return current
    //   }
    // }
  }
  set(index, value) {
    let target = this.get(index)
    if (target) {
      target.val = value
      return true
    }
    return false
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === 0) {
      return !!this.unshift(value)
    }
    if (index === this.length) {
      return !!this.push(value)
    }
    let newNode = new Node(value)
    let prev = this.get(index - 1)
    let temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return true
  }
  remove(index) {
    if (index >= this.length || index < 0) return undefined
    if (index === this.length - 1) {
      return this.pop()
    }
    if (index === 0) {
      return this.shift()
    }

    let prev = this.get(index - 1)
    let removed = prev.next
    prev.next = removed.next
    this.length--
    return removed
  }
}
