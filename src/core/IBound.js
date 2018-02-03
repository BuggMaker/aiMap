import {
    Class
} from "./Class";
import {
    Size
} from "./Size";
import {
    Extent
} from "./Extent";
import {
    UtilObj
} from "../index";
import { Point } from "../geometry/vector/Point";

/**
 * 边界(外接矩形框) 暂时废弃
 */ 
var Bound = Class.extend({
    name: 'Bound',
    constructor: function (...args) {
        this.extent = new Extent()
        UtilObj.defineProp(this, 'size', {
            get: () => {
                return new Size(this.extent.maxX - this.extent.minX, this.extent.maxY - this.extent.minY)
            }
        })

        UtilObj.defineProp(this, 'center', {
            get: () => {
                 return new Point(this.extent.maxX - this.extent.minX, this.extent.maxY - this.extent.minY)
            }
        })
    },
    publics: {
        // 判断是否相较
        intersectWith: function (bound) {
            throw `function 'intersect' of ${this.name} is unrealized!`
        },
        // 取交集
        intersection: function (bound) {
            throw `function 'intersection' of ${this.name} is unrealized!`
        },
        // 取并集
        union: function (bound) {
            throw `function 'union' of ${this.name} is unrealized!`
        }
    }
})

export {
    IBound
}