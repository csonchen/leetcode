function validparenttheses (str) {
    var defineObj = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    var keys = Object.keys(defineObj)
    var originStack = []

    for (var i in str) {
        var item = str[i]
        if (keys.indexOf(item) > -1) {
            originStack.push(item)
        } else {
            var pop = originStack.pop()
            if (item !== defineObj[pop]) {
                return false
            }
        }
    }

    if (originStack.length > 0) return false
    return true
}

module.exports = {
    validparenttheses
}