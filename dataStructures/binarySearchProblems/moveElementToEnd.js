function moveElementToEnd(array, toMove) {
  // Write your code here.
  let i = 0
  let j = array.length - 1

  while (i < j) {
    while (i < j && array[j] === toMove) j--
    if (array[i] === toMove) {
      const temp = array[j]
      array[j] = array[i]
      array[i] = temp
    }
    i++
  }
  return array
}
