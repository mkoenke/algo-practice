function numberOfBits(n) {
  let binary = n.toString(2)
  let count = 0
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      console.log(binary[i])
      count++
    }
  }
  return count
}

console.log(numberOfBits(1))
console.log(numberOfBits(4))
