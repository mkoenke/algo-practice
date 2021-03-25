function sortedSquaredArray(array) {
  const squaredArray = []
  for (let i = 0; i < array.length; i++) {
    squaredArray.push(array[i] ** 2)
  }
  squaredArray.sort((a, b) => a - b)
  return squaredArray
}

function sortedSquaredArray(array) {
  let squaredArray = []
  let left = 0
  let right = array.length - 1

  for (let i = array.length - 1; i >= 0; i--) {
    let leftValue = array[left]
    let rightValue = array[right]

    if (Math.abs(leftValue) > Math.abs(rightValue)) {
      squaredArray[i] = leftValue ** 2
      left++
    } else {
      squaredArray[i] = rightValue ** 2
      right--
    }
  }
  return squaredArray
}

// function sortedSquaredArray(array) {
//   // Write your code here.
// 	let squaredArray = new Array(array.length)
// 	let left = 0
// 	let right = array.length-1

// 	for (let i = 0; i < array.length; i++){
// 		let leftValue = array[left]
// 		let rightValue = array[right]

// 		if(Math.abs(leftValue) >= Math.abs(rightValue)){
// 			squaredArray[i] = rightValue**2
// 			right--
// 		} else {
// 			squaredArray[i] = leftValue**2
// 			left++
// 		}
// 	}
//   return squaredArray;
// }
