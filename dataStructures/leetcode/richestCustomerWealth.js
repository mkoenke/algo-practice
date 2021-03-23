var maximumWealth = function (accounts) {
  let maxSum = 0
  accounts.forEach((account) => {
    let sum = 0
    account.forEach((value) => {
      sum += value
    })
    if (sum > maxSum) {
      maxSum = sum
    }
  })
  return maxSum
}
