/**
 * 经纬度类
 * 参数:先经度,后纬度
 * @param {Object || Array || Number} args 
 */
var Lnglat = function (...args) {
    var lng = 0,
        lat = 0
    if (args.length == 1) {
        var ele = args[0]
        if (ele instanceof Array && ele.length >= 2) {
            lng = ele[0]
            lat = ele[1]
        } else if (ele.lng !== undefined && ele.lat !== undefined) {
            lat = ele.lat
            lng = ele.lng
        }
    } else if (args.length >= 2) {
        lng = args[0]
        lat = args[1]
    } else {
        throw 'Invalid parama for Lnglat!'
    }
    this.lng = lng % 360
    this.lat = lat
}
Lnglat.prototype = {
    constructor: Lnglat,
    // 变换为绘图坐标
    transToPoint: function () {},
    // 到某点的距离
    distanceTo: function (other) {}
}

export {
    Lnglat
}