//iterative

function fibonacci(n) {
  const fibArray = [0, 1]
  for (let i = 2; i <= n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2])
  }
  return fibArray[n]
}

// recursive

function fibonacci(n) {
  if (n < 2) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// memoized recursive

function fib(n, memo) {
  if (n < 2) {
    return n
  }
  if (!memo[n]) {
    // when the object doesn't have the property of n
    // store the result of the call inside memo[n]
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  }
  return memo[n]
}
