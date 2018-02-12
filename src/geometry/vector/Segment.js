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
import {
    Lnglat
} from "../../geo/Lnglat";

/**
 * 线段
 */

var Segment = IGeometry.extend({
    name: 'Segment',
    constructor: function (config) {
        if (!config.from) throw 'Segment config lack of from'
        if (!config.to) throw 'Segment config lack of to'
        var _from = new Point(),
            _to = new Point()
        this.defProp('from', {
            get: () => {
                return _from
            },
            set: (val) => {
                _from = val
            }
        })
        this.defProp('to', {
            get: () => {
                return _to
            },
            set: (val) => {
                _to = val
            }
        })
        // 线宽
        this.defProp('width', {
            get: () => {
                return this.style.lineWidth
            },
            set: (val) => {
                this.style.lineWidth = val
            }
        })
        // 长度
        this.defProp('length', {
            get: () => {
                var disY = this.from.y - this.to.y,
                    disX = this.from.x - this.to.x
                return this.Math.sqrt(disX * disX + disY + disY)
            }
        })
        this.on('fromchange tochange', _calBound)

        // 参数赋值
        this.from = new Point(config.from)
        delete config.from
        this.to = new Point(config.to)
        delete config.to

        UtilObj.extend(this, config)

        function _calBound() {
            this.bound = new Bound(this.from, this.to)
            this.bound.expand(this.width / 2)
        }
    },
    publics: {
        render: function (ctx) {
            Graphics.line(ctx, this.from, this.to)
            return this
        },
        containsPoint: function (point, tolerance) {
            if (!this.bound.containsPoint(point)) return false
            var disY = this.from.y - this.to.y,
                disX = this.from.x - this.to.x,
                t = this.width / 2 + (tolerance || this.tolerance)
            if (disX == 0) {
                if (Math.abs(point.x - this.from.x) <= t) return true
            } else {
                var k = disY / disX,
                    b = this.from.y - k * this.from.x
                if (k == 0) {
                    if (Math.abs(point.y - this.from.y) <= t) return true
                } else {
                    var tmpY = k * point.x + b
                    if (Math.abs(tmpY - point.y) <= t) return true
                }
            }
            return false
        },
        project: function (crs) {
            this.from = crs.lnglatToMapPoint(new Lnglat(this.from.x, this.from.y))
            this.to = crs.lnglatToMapPoint(new Lnglat(this.to.x, this.to.y))
            return this
        }
    }
})

export {
    Segment
}