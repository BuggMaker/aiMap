import {
    IGeometry
} from "../IGeometry";
import {
    Point
} from "./Point";
import {
    UtilObj
} from "../../index";
import {
    Graphics
} from "../../map/Canvas";

/**
 * 圆
 */

var Circle = IGeometry.extend({
    name: 'Circle',
    /**
     * @function Circle(Point:center, Number:radius, Object:style)
     * 圆形要素
     * 参数:中心坐标,半径,以及渲染样式
     */
    constructor: function (center, radius, style) {
        if (!center.isInstanceOf(Point)) throw 'center is not instance of Point!'
        // 圆心
        var _center = center
        UtilObj.defineProp(this, 'center', {
            get: () => {
                return _center
            },
            set: (val) => {
                if (!val.isInstanceOf(Point)) throw 'new value of center is not instance of Point!'
                _center = val
                // 圆心变化钩子函数
                this.fire('centerchange')
            }
        })
        // 半径
        if (isNaN(radius)) throw 'radius is not a Number!'
        var _radius = radius
        UtilObj.defineProp(this, 'radius', {
            get: () => {
                return _radius
            },
            set: (val) => {
                _radius = val
                this.fire('radiuschange')
            }
        })
        if (style) {
            UtilObj.extend(this.style, style)
        }
        // 事件
        var oldStyle = {}
        this.on('mouseenter', function (mpos) {
            this.isMouseover = true
            oldStyle = UtilObj.copy(this.style)
            this.style.fillStyle = 'forestgreen'            
        })
        this.on('mouseleave', function (mpos) {
            this.isMouseover = false
            this.style = UtilObj.copy(oldStyle)
        })
    },
    publics: {
        render: function (ctx) {
            ctx.save()
            UtilObj.replace(ctx, this.style)
            Graphics.circle(ctx, this.center, this.radius, this.fill)
            ctx.restore()
        },
        contains(point, tolerance) {
            if (!point.isInstanceOf(Point)) throw 'param is not instance of Point'
            return this.center.distanceTo(point) <= this.radius + (tolerance || this.tolerance)
        }
    }
})

export {
    Circle
}