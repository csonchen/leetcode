function sortRemove(arr) {
  var fastPoint = 0
  var slowPoint = 0

  for (var i = 0, len = arr.length; i < len; i++) {
    if (fastPoint == len) {
      break
    }

    if (arr[fastPoint] === arr[slowPoint]) {
      fastPoint = fastPoint + 1
    } else {
      fastPoint = fastPoint + 1
      slowPoint = slowPoint + 1
    }
  }
  return slowPoint + 1
}

function mergeArr(arr1, arr2) {
  var result = []

  while(arr1.length || arr2.length) {
    if (arr1.length === 0) {
      result.push(arr2.shift())
      continue
    }

    if (arr2.length === 0) {
      result.push(arr1.shift())
      continue
    }

    const a = arr1[0]
    const b = arr2[0]

    if (a > b) {
      result.push(arr2.shift())
    } else {
      result.push(arr1.shift())
    }
  }
  return result
}

module.exports = {
  sortRemove,
  mergeArr,
}