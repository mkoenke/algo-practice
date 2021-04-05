function taleOfTwoStacks(input) {
  const inputArr = input.split('\n')
  const inQueue = []
  const outQueue = []
  let length
  function stacksToQueue() {
    if (outQueue.length === 0) {
      length = inQueue.length

      while (length-- > 0) {
        outQueue.push(inQueue.pop())
      }
    }
  }
  for (let i = 1; i < inputArr.length; i++) {
    let swCase = inputArr[i].split(' ')
    switch (swCase[0]) {
      case '1':
        inQueue.push(swCase[1])
        break
      case '2':
        stacksToQueue()
        outQueue.pop()
        break
      case '3':
        stacksToQueue()
        console.log(outQueue[outQueue.length - 1])
        break
      default:
        break
    }
  }
}
