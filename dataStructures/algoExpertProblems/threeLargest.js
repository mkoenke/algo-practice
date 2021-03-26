function findThreeLargestNumbers(array) {
  let firstL = -Infinity
  let secondL = -Infinity
  let thirdL = -Infinity
  for (let i = 0; i < array.length; i++) {
    if (array[i] > firstL) {
      let tempL = firstL
      let tempS = secondL
      firstL = array[i]
      secondL = tempL
      thirdL = tempS
    } else if (array[i] > secondL && array[i] <= firstL) {
      let tempS = secondL
      secondL = array[i]
      thirdL = tempS
    } else if (array[i] > thirdL && array[i] <= secondL) {
      thirdL = array[i]
    }
  }
  return [thirdL, secondL, firstL]
}
