function sumDigits(num) {
  let string = num.toString()
  let sum = 0
  for (let i = 0; i < string.length; i++) {
    sum = sum + parseInt(string[i])
  }
  return sum
}

function sumDigits(num) {
  let sum = 0

  while (num) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  return sum
}
