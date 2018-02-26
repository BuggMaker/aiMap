import {
    Class
} from "../core/Class";
import {
    Size
} from "../core/Size";
import {
    UtilObj,
    isArray
} from "../index";
import {
    Point
} from "./vector/Point";

/**
 * 边界
 * 一般指世界坐标系的图形对象的外接矩形
 * @param {Point,Point || Array} pt1,pt2 || [[x1,y1],[x2,y2]]
 */
var Bound = Class.extend({
    name: 'Bound',
    constructor: function (...args) {
        // 范围
        this.min = new Point(Number.MAX_VALUE, Number.MAX_VALUE)
        this.max = new Point(Number.MIN_VALUE, Number.MIN_VALUE)
        //根据参数 重新计算范围
        var points = []
        if (args.length == 1 && isArray(args[0]) && args[0].length >= 2) {
            var ary = args[0]
            for (let index = 0; index < ary.length; index++) {
                var pt = new Point(ary[index])
                points.push(pt1)
            }
        } else if (args.length == 2) {
            var pt1 = new Point(args[0]),
                pt2 = new Point(args[1])
            points.push(pt1)
            points.push(pt2)
        }
        points.forEach(pt => {
            this.min.x = Math.min(pt.x, this.min.x)
            this.min.y = Math.min(pt.y, this.min.y)
            this.max.x = Math.max(pt.x, this.max.x)
            this.max.y = Math.max(pt.y, this.max.y)
        })

        // 尺寸
        this.defProp('size', {
            get: () => {
                return new Size(this.max.x - this.min.x, this.max.y - this.min.y)
            }
        })
        // 中心
        this.defProp('center', {
            get: () => {
                return new Point(this.min.x + this.size.width / 2, this.min.y + this.size.height / 2)
            }
        })
        // 右上角
        this.defProp('leftTop', {
            get: () => {
                return this.min
            }
        })
        // 右上角
        this.defProp('rightTop', {
            get: () => {
                return new Point(this.max.x, this.min.y)
            }
        })
        // 右下角
        this.defProp('rightBottom', {
            get: () => {
                return this.max
            }
        })
        // 左下角
        this.defProp('leftBottom', {
            get: () => {
                return new Point(this.min.x, this.max.y)
            }
        })
    },
    publics: {
        /**
         * 取交集
         * @param {Bound} bound
         * @return {Bound} 新的Bound对象
         */
        intersection: function (bound) {
            // throw `function 'intersect' of ${this.name} is unrealized!`
            if (!bound.isInstanceOf(Bound)) throw 'param is not instance of Bound'
            var result = new Bound()
            var tarMin = bound.min,
                tarMax = bound.max
            result.min.x = Math.max(tarMin.x, this.min.x)
            result.min.y = Math.max(tarMin.y, this.min.y)
            result.max.x = Math.min(tarMax.x, this.max.x)
            result.max.y = Math.min(tarMax.y, this.max.y)
            return result
        },
        /**
         * 取并集 
         * @param {Bound} bound
         * @return {Bound} 返回新的Bound对象
         */
        union: function (bound) {
            if (!bound.isInstanceOf(Bound)) throw 'param is not instance of Bound'
            var result = new Bound()
            var tarMin = bound.min,
                tarMax = bound.max
            result.min.x = Math.min(tarMin.x, this.min.x)
            result.min.y = Math.min(tarMin.y, this.min.y)
            result.max.x = Math.max(tarMax.x, this.max.x)
            result.max.y = Math.max(tarMax.y, this.max.y)
            return result
        },
        /**
         * 扩充当前范围
         * @param {Bound} bound
         * @return {this}
         */
        extend: function (bound) {
            if (!bound.isInstanceOf(Bound)) throw 'param is not instance of Bound'
            var tarMin = bound.min,
                tarMax = bound.max
            this.min.x = Math.min(tarMin.x, this.min.x)
            this.min.y = Math.min(tarMin.y, this.min.y)
            this.max.x = Math.max(tarMax.x, this.max.x)
            this.max.y = Math.max(tarMax.y, this.max.y)

            return this
        },
        /**
         * 边界四周扩张同等距离
         * @param {Number} offset
         */
        expand: function (offset) {
            this.min.x -= offset
            this.min.y -= offset
            this.max.x += offset
            this.max.y += offset
        },
        /**
         * 边界四周缩小同等距离
         * @param {Number} offset
         */
        shrink: function (offset) {
            this.min.x += offset
            this.min.y += offset
            this.max.x -= offset
            this.max.y -= offset
            if (this.min.x > this.max.x || this.min.y > this.max.y) {
                throw 'offset is too big'
            }
        },
        /**
         * 判断是否相交
         * @param {Bound} bound
         * @return {Boolean}
         */
        intersectWith: function (bound) {
            if (!bound.isInstanceOf(Bound)) throw 'param is not instance of Bound'
            var tarMin = bound.min,
                tarMax = bound.max
            var intersectX = (tarMax.x >= this.min.x) && (tarMin.x <= this.max.x),
                intersectY = (tarMax.y >= this.min.y) && (tarMin.y <= this.max.y)
            return intersectX && intersectY
        },
        /**
         * 判断是否存在重叠区域
         * @param {Bound} bound
         * @return {Boolean} 
         */
        overlapWith: function (bound) {
            if (!bound.isInstanceOf(Bound)) throw 'param is not instance of Bound'
            var tarMin = bound.min,
                tarMax = bound.max
            var overlapX = (tarMax.x > this.min.x) && (tarMin.x < this.max.x),
                overlapY = (tarMax.y > this.min.y) && (tarMin.y < this.max.y)
            return overlapX && overlapY
        },
        /**
         * 判断是否完全覆盖目标范围,cover
         * @param {Bound} bound
         */
        coverWidth: function (bound) {
            if (!bound.isInstanceOf(Bound)) throw 'param is not instance of Bound'
            var tarMin = bound.min,
                tarMax = bound.max
            var overlapX = (tarMax.x <= this.max.x) && (tarMin.x >= this.min.x),
                overlapY = (tarMax.y <= this.max.y) && (tarMin.y >= this.min.y)
            return overlapX && overlapY
        },
        containsPoint: function (point) {
            return point.x >= this.min.x && point.x <= this.max.x && point.y >= this.min.y && point.y <= this.max.y
        }
    }
})

export {
    Bound
}