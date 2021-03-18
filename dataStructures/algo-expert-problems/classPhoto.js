function classPhotosWithStudentsInOrder(
  redShirtHeightsSorted,
  blueShirtHeightsSorted
) {
  if (redShirtHeightsSorted[0] < blueShirtHeightsSorted[0]) {
    for (let i = 0; i < redShirtHeightsSorted.length; i++) {
      if (redShirtHeightsSorted[i] > blueShirtHeightsSorted[i]) {
        return false
      }
    }
  } else {
    for (let i = 0; i < redShirtHeightsSorted.length; i++) {
      if (redShirtHeightsSorted[i] < blueShirtHeightsSorted[i]) {
        return false
      }
    }
  }
  return true
}
function classPhotos(redShirtsArray, blueShirtsArray) {
  let redSorted = redShirtsArray.sort((a, b) => b - a)
  let blueSorted = blueShirtsArray.sort((a, b) => b - a)
  return classPhotosWithStudentsInOrder(redSorted, blueSorted)
}
