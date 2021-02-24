function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i]
    let j = i - 1
    for (let j = i - 1; j > -1 && array[j] > currentVal; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = currentVal
  }
  return array
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    // Choosing the first element in our unsorted subarray
    let current = array[i]
    // The last element of our sorted subarray
    let j = i - 1
    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = current
  }
  return array
}
