function rotLeft(array, d) {
  numMoves = d / array.length
  //   let newArray = []

  for (let i = 0; i < array.length; i++) {
    let start = array[0]
    if (array[i + 1]) {
      newArray[i] = array[i + 1]
      newArray.push(start)
    }

    //   }

    // for (let i = 0; i < array.length; i++){

    // }
  }

  // [1,2,3,4,5], 4 = [5,1,2,3,4]

  // 0+ (4-3) = 1

  // for(int i = 0; i < lengthOfArray; i++){
  //     int newLocation = (i + (lengthOfArray - shiftAmount)) % lengthOfArray;
  //     a[newLocation] = in.nextInt();
}
