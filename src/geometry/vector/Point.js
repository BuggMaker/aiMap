import {
    isArray
} from "../../index";

/**
 * 点类
 * 可以表示像素点或者平面坐标点(投影坐标点)
 * by BuggMaker
 */

export var Point = Geometry.extend({
    name:'Point',
    constructor: function (...args) {
        var ary = []
        if (args.length === 1) {
            if (isArray(args[0])) {
                ary = args[0]
            } else if (!isNaN(args[0].x) && !isNaN(args[0].y)) {
                return new Point(args[0].x, args[0].y)
            } else {
                throw `Wrong format of Point or Array`
            }
        } else {
            ary = args
        }

        if (ary.length >= 2) {
            this.x = ary[0]
            this.y = ary[1]
        }
    },
    publics: {
        distanceTo: function (other) {
            if (other.x && other.y)
                return Math.sqrt(Math.pow(this.x - ohter.x, 2), Math.pow(this.y - ohter.y, 2))
        }
    }
})