function binarySearch(array, value) {
  let left = 0
  let right = array.length - 1
  let middle = Math.floor((right + left) / 2)
  while (array[middle] !== value && left <= right) {
    if (value < array[middle]) {
      right = middle - 1
    } else left = middle + 1
    middle = Math.floor((right + left) / 2)
  }
  return array[middle] === value ? middle : -1
}
