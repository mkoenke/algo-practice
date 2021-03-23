function seatArrangement(n, seats) {
  let count = 0
  if ((seats.length === 1 && seats[0] === 0) || n === 0) return true
  for (let i = 0; i < seats.length; i++) {
    if (
      seats[i] === 0 &&
      (seats[i - 1] === 0 || seats[i - 1] === undefined) &&
      (seats[i + 1] === 0 || seats[i + 1] === undefined)
    ) {
      seats[i] = 1
      console.log(seats)
      count++
      console.log(count)
    }
  }
  return count >= n
}

// console.log(seatArrangement(2, [0, 0, 1, 0, 0, 0, 1]))
// console.log(seatArrangement(1, [0, 1, 0]))
// console.log(seatArrangement(1, [0]))
// console.log(seatArrangement(2, [0, 0, 0]))
// console.log(seatArrangement(0, []))
console.log(seatArrangement(1, [0, 0, 0]))
