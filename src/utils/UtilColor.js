/**
 * RGB颜色
 * @param {int} r 0-255
 * @param {int} g 0-255
 * @param {int} b 0-255
 */
var Color = function (r, g, b) {
    if (isNaN(r) || isNaN(g) || isNaN(b)) throw 'Wrong r,g,b for Color!'
    this.r = r
    this.g = g
    this.b = b
    Color.valid(this)
}
Color.prototype.toString = function () {
    return `rgb(${r},${g},${b})`
}
Color.prototype.decrease = function (other) {
    if (other instanceof Color)
        return new Color(this.r - other.r, this.g - other.g, this.b - other.b)
    else throw "Invalid Color 'other'"
}
/**
 * Color有效性验证
 * @param {Color} color 
 */
Color.valid = function (color) {
    if (!(color instanceof Color)) throw 'Wrong Color instance!'

    color.r = valid(color.r)
    color.g = valid(color.g)
    color.b = valid(color.b)

    function valid(val) {
        if (val < 0) val = 0
        else if (val > 255) avl = 255
        return val
    }

    return color
}
/**
 * RGBA颜色 含透明度
 * @param {Number} alpha 0-1
 * @param {int || Color} r,g,b || color
 */
var ColorRGBA = function (alpha, ...args) {
    if (args.length >= 3) {
        this.color = new Color(args[0], args[1], args[2])
    } else if (args.length == 1 && args[0] instanceof Color) {
        this.color = args[0]
    } else {
        throw 'Wrong params for ColorRGBA!'
    }
    this.alpha = alpha
}
ColorRGBA.prototype.toString = function () {
    return `rgba(${this.color.r},${this.color.g},${this.color.b},${this.alpha})`
}

/**
 * Color 颜色枚举
 */
var colors = {
    red: new Color(255, 0, 0),
    orange: 'orange',
    yellow: 'yellow',
    green: new Color(0, 255, 0),
    blue: new Color(0, 0, 255),
    purple: 'purple'
}
/**
 * 颜色坡道
 * 默认为'红-橙-黄-绿-蓝'渐变
 * 如果fromColor和toColor不为空,则在两者间渐变
 * @param {Number} alpha 0-1
 * @param {Color} fromColor 
 * @param {Color} toColor 
 */
var ColorRamp = function (alpha, fromColor, toColor) {
    this.alpha = alpha || 1
    this.fromColor = fromColor
    this.toColor = toColor
}
/**
 * 取颜色值
 * @param {Number} val 0-100
 */
ColorRamp.prototype.getColor = function (val) {
    var r = g = b = 0;
    if (this.fromColor && this.toColor) {
        var disColor = fromColor.decrease(toColor)
        r = Math.round(fromColor.r + disColor.r / 100 * val)
        g = Math.round(fromColor.g + disColor.g / 100 * val)
        b = Math.round(fromColor.b + disColor.b / 100 * val)
    } else {
        if (val < 25) {
            b = 255;
            g = val * 10;
        } else if (val >= 25 && val < 50) {
            b = 255 - (val - 25) * 10;
            g = 255;
        } else if (val >= 50 && val < 75) {
            g = 255;
            r = (val - 50) * 10;
        } else if (val >= 75 && val <= 100) {
            g = 255 - (val - 75) * 10;
            r = 255;
        }
    }
    var resultColor = new Color(r, g, b)
    if (this.alpha !== undefined)
        return new ColorRGBA(this.alpha, resultColor)
    else
        return resultColor
}

export {
    Color,
    ColorRGBA,
    ColorRamp,
    colors
}