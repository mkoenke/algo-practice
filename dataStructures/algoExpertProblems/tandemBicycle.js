function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b)
  blueShirtSpeeds.sort((a, b) => a - b)

  if (!fastest) reverseSorting(redShirtSpeeds)

  let totalSpeed = 0
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    const first = redShirtSpeeds[i]
    const second = blueShirtSpeeds[blueShirtSpeeds.length - 1 - i]
    totalSpeed += Math.max(first, second)
  }
  return totalSpeed
}

function reverseSorting(array) {
  let start = 0
  let end = array.length - 1

  while (start < end) {
    const temp = array[start]
    array[start] = array[end]
    array[end] = temp
    start++
    end--
  }
}
