function arrayOfProducts(array) {
  const productArray = []

  for (let i = 0; i < array.length; i++) {
    let product = 1
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        product *= array[j]
      }
      productArray[i] = product
    }
  }
  return productArray
}
