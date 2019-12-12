function reArray(arr1, arr2) {
  var result = []
  var hashObj = {}

  for (var i = 0, len = arr1.length; i < len; i++) {
    hashObj[arr1[i]] = arr1[i]
  }

  for (var i = 0, len = arr2.length; i < len; i++) {
    var num = arr2[i]
    if (hashObj[num] !== undefined) {
      result.push(num)
      hashObj[num] = undefined
    }
  }
  console.log(result)
}

reArray([1, 2, 2, 3, 2], [2, 3, 1])
reArray([1, 2, 2, 3, 2], [2, 3, 2])
reArray([1, 2, 2, 1], [2, 2])
reArray([4, 9, 5], [9, 4, 9, 8, 4])