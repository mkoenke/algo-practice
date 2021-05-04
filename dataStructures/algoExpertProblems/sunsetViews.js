function sunsetViews(buildings, direction) {
  // Write your code here.
  const buildingsWithViews = []
  const start = direction === 'WEST' ? 0 : buildings.length - 1
  const step = direction === 'WEST' ? 1 : -1
  let i = start
  let runningHeight = 0
  while (i >= 0 && i < buildings.length) {
    const height = buildings[i]
    if (height > runningHeight) buildingsWithViews.push(i)
    runningHeight = Math.max(runningHeight, height)
    i = i + step
  }
  if (direction === 'EAST') buildingsWithViews.reverse()
  return buildingsWithViews
}
