function sortedInsert(head, data) {
  const newNode = new DoublyLinkedListNode(data)
  let current = head
  if (head === null) {
    return newNode
  }
  if (head.next === null && newNode.data >= head.data) {
    head.next = newNode
    newNode.prev = head
    return head
  }
  if (newNode.data < head.data) {
    newNode.next = head
    head.prev = newNode
    return newNode
  } else {
    while (current.data < newNode.data) {
      current = current.next
    }
    let beforeNode = current.prev
    if (current.next !== null) {
      let afterNode = current
      beforeNode.next = newNode
      newNode.next = afterNode
      afterNode.prev = newNode
      newNode.prev = beforeNode
      return head
    } else {
      beforeNode.next = newNode
      newNode.prev = beforeNode
      return head
    }
  }
}

// let newNode = new DoublyLinkedListNode(data);
// if(!head){
//     head = newNode;
//     return head;
// }
// if(data <head.data){
//     newNode.next = head;
//     head.prev = newNode;
//     return newNode;
// }

// let currentNode = head;
// while(data > currentNode.data){
//     let refNode = currentNode;
//     currentNode = currentNode.next;
//     if(refNode.next === null){
//         refNode.next = newNode;
//         newNode.next = null;
//         newNode.prev = refNode;
//         return head;
//     }
// }
// let leadingPosition = currentNode.prev;
// leadingPosition.next = newNode;
// newNode.next = currentNode;
// currentNode.prev = newNode;
// newNode.prev = leadingPosition;

// return head;
