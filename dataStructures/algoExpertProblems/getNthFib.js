function getNthFib(n) {
  // Write your code here.
  let fibArray = [0, 1]

  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2])
  }
  return fibArray[n - 1]
}

function getNthFib(n) {
  if (n === 1) {
    return 0
  } else if (n === 2) {
    return 1
  } else return getNthFib(n - 1) + getNthFib(n - 2)
}

function getNthFib(n) {
  prevTwo = [0, 1]
  let counter = 3
  while (counter <= n) {
    const nextNum = prevTwo[0] + prevTwo[1]
    prevTwo[0] = prevTwo[1]
    prevTwo[1] = nextNum
    counter++
  }

  if (n > 1) {
    return prevTwo[1]
  } else {
    return prevTwo[0]
  }
}

console.log(getNthFib(2))
console.log(getNthFib(5))
