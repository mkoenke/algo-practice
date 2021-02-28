function countingValleys(steps, path) {
  let nums = []
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "U") {
      nums.push(1)
    }
    if (path[i] === "D") {
      nums.push(-1)
    }
  }
  let count = 0
  let sum = 0
  for (let i = 0; i < steps; i++) {
    sum += nums[i]
    if (sum === -1 && sum + nums[i + 1] === 0) {
      count++
    }
  }
  return count
}
