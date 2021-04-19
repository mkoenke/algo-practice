function selectionSort(array) {
  let start = 0

  while (start < array.length - 1) {
    let smallest = start
    for (let i = start + 1; i < array.length; i++) {
      if (array[smallest] > array[i]) smallest = i
    }
    let temp = array[smallest]
    array[smallest] = array[start]
    array[start] = temp
    start++
  }
  return array
}
