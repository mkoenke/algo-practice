function firstDuplicateValue(array) {
  // Write your code here.
  const seen = new Set()
  for (const value of array) {
    if (seen.has(value)) return value
    seen.add(value)
  }
  return -1
}

function firstDuplicateValue(array) {
  for (const value of array) {
    const abV = Math.abs(value)
    if (array[abV - 1] < 0) return abV
    array[abV - 1] *= -1
  }
  return -1
}
