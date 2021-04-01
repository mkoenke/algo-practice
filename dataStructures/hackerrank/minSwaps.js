function minimumSwaps(arr) {
  let swapCount = 0

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], i + 1)
    if (arr[i] !== i + 1) {
      let swpIdx = arr.indexOf(i + 1)
      let temp = arr[i]
      arr[i] = arr[swpIdx]
      arr[swpIdx] = temp
      swapCount++
    }
  }

  return swapCount
}

function minimumSwaps(arr) {
  let swapCount = 0
  let hash = {}

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
    }
  }

  return swapCount
}
