function activityNotifications(expenditure, d) {
  let numNotifications = 0
  if (expenditure.length <= d) return 0
  let median
  for (let i = 0; i < d; i++) {
    ///find median
    sortedArray = expenditure.slice(0, d).sort((a, b) => a - b)
    if (sortedArray.length % 2 !== 0) {
      median = sortedArray[Math.ceil(sortedArray.length / 2)]
    } else {
      median =
        (sortedArray[sortedArray.length / 2] +
          sortedArray[sortedArray.length / 2 - 1]) /
        2
    }
  }

  return median
}

activityNotifications([10, 20, 30, 40, 50], 3)
activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)
