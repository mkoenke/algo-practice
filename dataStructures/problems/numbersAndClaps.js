// Given an integer n, return a list with each
// number from 1 to n, except if it's a multiple
// of 3 or has a 3, 6, or 9 in the number,
// it should be the string "clap".

// Note: return the number as a string.

// Input
// n = 16
// Output
// ["1", "2", "clap", "4", "5", "clap", "7", "8", "clap", "10", "11", "clap", "clap", "14", "clap", "clap"]
// Explanation
// 3, 6, 9, 12, and 15 are replaced by "clap" since they are divisible by 3.
// 13 is replaced since it has a 3 in the number.
// 16 is replaced since it has a 6 in the number.

function numAndClaps(num) {
  let array = []
  for (let i = 0; i < num; i++) {
    array.push((i + 1).toString())
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      array[i] = 'clap'
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].includes('3') ||
      array[i].includes('6') ||
      array[i].includes('9')
    ) {
      array[i] = 'clap'
    }
  }
  return array
}

numAndClaps(16)
