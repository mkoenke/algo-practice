function maxSubArraySum(array, num) {
  let maxSum = 0
  let tempSum = 0
  if (array.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum += array[i]
  }
  tempSum = maxSum
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

function minSubArrayLen(nums, sum) {
  let total = 0
  let start = 0
  let end = 0
  let minLen = Infinity

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end]
      end++
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start)
      total -= nums[start]
      start++
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break
    }
  }

  return minLen === Infinity ? 0 : minLen
}

function minSubArrayLen(array, num) {
  let start = 0
  let end = 0
  let minLength = Infinity
  let sum = 0
  while (start < nums.length) {
    if (sum < num && end < array.length) {
      sum += array[end]
      end++
    } else if (sum >= num) {
      minLength = Math.min(minLength, end - start)
      sum -= array[start]
      start++
    } else {
      break
    }
  }
  return minLength === Infinity ? 0 : minLength
}
// findLongestSubstring Solution
function findLongestSubstring(str) {
  let longest = 0
  let seen = {}
  let start = 0

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (seen[char]) {
      start = Math.max(start, seen[char])
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1)
    // store the index of the next char so as to not double count
    seen[char] = i + 1
  }
  return longest
}
