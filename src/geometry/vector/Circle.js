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
import {
    Bound
} from "../Bound";

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
        this.defProp( 'center', {
            get: () => {
                return _center
            },
            set: (val) => {
                if (!val.isInstanceOf(Point)) throw 'new value of center is not instance of Point!'
                _center = val
            }
        })
        // 半径
        if (isNaN(radius)) throw 'radius is not a Number!'
        var _radius = radius
        this.defProp( 'radius', {
            get: () => {
                return _radius
            },
            set: (val) => {
                _radius = val
            }
        })
        // 边界
        this.defProp('bound', {
            get: () => {
                var lt = this.center.reduce(new Point(this.radius, this.radius)),
                    rb = this.center.plus(new Point(this.radius, this.radius))
                return new Bound(lt, rb)
            }
        })
        if (style) {
            UtilObj.extend(this.style, style)
        }
    },
    publics: {
        render: function (ctx) {
            ctx.save()
            if (this.isMousehover) UtilObj.replace(ctx, this.interactiveStyle)
            else UtilObj.replace(ctx, this.style)
            if (this.fill) {
                Graphics.circle(ctx, this.center, this.radius, true)
            }
            if (this.stroke) {
                Graphics.circle(ctx, this.center, this.radius, false)
            }
            ctx.restore()
            return this
        },
        containsPoint(point, tolerance) {
            if (!point.isInstanceOf(Point)) throw 'param is not instance of Point'
            return this.center.distanceTo(point) <= this.radius * 1.1
        }
    }
})

export {
    Circle
}