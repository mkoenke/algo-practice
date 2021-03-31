function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    let first = a.shift()
    a.push(first)
  }
  return a
}
