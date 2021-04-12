var checkIfExist = function (arr) {
  return arr.filter((e) => arr.includes(e * 2))
}

var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; i++) {
      if (arr[i] === arr[j] * 2 && i !== j) return true
    }
  }
  return false
}
