function isMonotonic(array) {
  let isMonotonic = false
  if (array.length < 2) return true
  if (array[0] <= array[1]) {
    for (let i = 1; i < array.length; i++) {
      console.log(i)
      if (array[i] >= array[i - 1]) {
        isMonotonic = true

        if (i === array.length - 1) {
          return isMonotonic
        }
      } else {
        isMonotonic = false
        break
      }
    }
  }
  if (array[0] >= array[1]) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] <= array[i - 1]) {
        isMonotonic = true
        if (i === array.length - 1) {
          return isMonotonic
        }
      } else {
        isMonotonic = false
        break
      }
    }
  }

  return isMonotonic
}

console.log(
  isMonotonic([-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11])
)
console.log(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]))
