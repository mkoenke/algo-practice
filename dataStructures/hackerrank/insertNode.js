function insertNodeAtPosition(head, data, position) {
  const newNode = new SinglyLinkedListNode(data)
  let current = head
  let counter = 0
  while (counter !== position - 1) {
    current = current.next
    counter++
  }
  let temp = current.next
  current.next = newNode
  newNode.next = temp
  return head
}
