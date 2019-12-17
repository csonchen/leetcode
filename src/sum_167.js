
/**
 * [2, 7, 11, 29], 9
 * [1, 2]
 * @param {*} nums 
 * @param {*} target 
 */
function sum(nums, target) {
  // hashmap
  var hashmap = {}

  for (var i = 0, length = nums.length; i < length; i++) {
    var num = nums[i]
    if (hashmap[target - num] !== void 0) {
      return [hashmap[target - num], i + 1]
    }
    hashmap[num] = i + 1
  }
  return []
}
console.log(sum([2, 7, 11, 29], 9))

var jsObj = {
  name: 'sam',
  age: 19,
  address: 'zj'
}
console.log(JSON.stringify(jsObj))
console.log(JSON.stringify(jsObj, ["name", "age"], '--'))
console.log(JSON.stringify(jsObj, function(key, value) {
  if (typeof value === 'string') {
    return undefined
  }
  return value
}))