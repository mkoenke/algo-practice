function selectionSort(array) {
  const swap = (array, index1, index2) =>
    ([array[index1], array[index2]] = [array[index2], array[index1]])
  for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    if (i !== min) {
      swap(array, min, i)
    }
  }
  return array
}
