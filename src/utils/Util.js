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

String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}
String.format = function () {
    if (arguments.length == 0)
        return null;

    var str = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
}