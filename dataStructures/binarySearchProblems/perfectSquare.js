function perfectSquare(n) {
  let i = 0
  while (i * i <= n) {
    if (i * i !== n) {
      i++
    } else {
      return true
    }
  }
  return false
}
