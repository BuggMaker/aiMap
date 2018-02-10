export function isArray(ary) {
    return ary instanceof Array || Array.isArray(ary)
}

Array.prototype.remove = function (item) {
    var index = this.indexOf(item)
    this.splice(index, 1)
    return this
}

String.prototype.split1 = function (str, NoEmpty = true) {
    var res = this.split(str)
    if (NoEmpty) {
        for (let index = 0; index < res.length;) {
            if (res[index].length == 0) {
                res.splice(index, 1)
            } else {
                index++
            }
        }
    }
    return res
}