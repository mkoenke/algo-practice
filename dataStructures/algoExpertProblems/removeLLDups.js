class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let node = linkedList
  while (node !== null) {
    let nextNode = node.next
    while (nextNode !== null && nextNode.value === node.value) {
      nextNode = nextNode.next
    }
    node.next = nextNode
    node = nextNode
  }
  return linkedList
}
