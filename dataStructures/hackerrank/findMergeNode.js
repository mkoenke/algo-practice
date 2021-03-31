function findMergeNode(headA, headB) {
  let currentA = headA
  let currentB = headB

  while (currentA !== currentB) {
    if (currentA.next === null) {
      currentA = headB
    } else {
      currentA = currentA.next
    }

    if (currentB.next === null) {
      currentB = headA
    } else {
      currentB = currentB.next
    }
  }
  return currentA.data
}

// int FindMergeNode(Node headA, Node headB) {
//   Node currA = headA;
//   Node currB = headB;

//   while (currA != currB) {
//       if (currA.next == null) {
//           currA = headB;
//       } else {
//           currA = currA.next;
//       }

//       if (currB.next == null) {
//           currB = headA;
//       } else {
//           currB = currB.next;
//       }
//   }
//   return currA.data;
// }
