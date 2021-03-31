function minimumAbsoluteDifference(arr) {
  let minDiff = Infinity
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) < minDiff) {
        minDiff = Math.abs(arr[i] - arr[j])
      }
    }
  }
  return minDiff
}

function minimumAbsoluteDifference(arr) {
  let minDiff = Infinity
  const sorted = arr.sort((a, b) => a - b)
  for (let i = 0; i < sorted.length; i++) {
    let current = arr[i]
    let next = arr[i + 1]
    let diff = Math.abs(current - next)
    if (diff < minDiff) {
      minDiff = diff
    }
  }
  return minDiff
}
