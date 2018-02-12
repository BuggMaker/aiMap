import {
    isArray
} from "../../index";
import {
    IGeometry
} from "../IGeometry";
import {
    Class
} from "../../core/Class";

/**
 * 点类
 * 可以表示像素点或者平面坐标点(投影坐标点)
 * by BuggMaker
 */

export var Point = Class.extend({
    name: 'Point',
    constructor: function (...args) {
        var ary = []
        if (args.length === 1) {
            if (isArray(args[0])) {
                ary = args[0]
            } else if (!isNaN(args[0].x) && !isNaN(args[0].y)) {
                this.x = args[0].x
                this.y = args[0].y
            } else if (isArray(args[0])) {
                ary = args[0]
            } else {
                throw `Wrong format of Point or Array`
            }
        } else if (args.length >= 2) {
            ary = args
        } else {
            this.x = 0
            this.y = 0
        }
        if (ary.length >= 2) {
            this.x = ary[0]
            this.y = ary[1]
        }
    },
    publics: {
        distanceTo: function (other) {
            if (other.x && other.y)
                return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2))
        },
        plus(point) {
            return new Point(this.x + point.x, this.y + point.y)
        },
        reduce(point) {
            return new Point(this.x - point.x, this.y - point.y)
        }
    }
})