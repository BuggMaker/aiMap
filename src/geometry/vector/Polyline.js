import {
    IGeometry
} from "../IGeometry";
import {
    isArray,
    UtilObj
} from "../../index";
import {
    Segment
} from "./Segment";
import {
    Bound
} from "../Bound";

/**
 * 折线
 */
var Polyline = IGeometry.extend({
    name: 'Polyline',
    constructor: function (config) {
        if (!config.points || !isArray(config.points)) throw `wrong param 'points' of Polyline constructor`
        // 线段集合
        var _segments = []
        this.defProp('segments', {
            get: () => {
                return _segments
            },
            set: val => {
                _segments = val
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
                var length = 0
                this.segments.forEach(seg => {
                    length += seg.length
                })
                return length
            }
        })
        this.on('segmentschange', _calBound)
        // 参数赋值
        var coordinates = config.points
        delete config.points
        coordinates.forEach(ary1 => {
            if (isArray(ary1[0][0])) {
                this.multiple = true
                ary1.forEach(ary2 => {
                    var segs = create(ary2)
                    this.parts.push(segs)
                    this.segments = this.segments.concat(segs)
                })
            } else {
                this.segments = create(ary1)
            }

            function create(ary) {
                var segs = []
                for (let i = 0; i < ary.length - 1; i++) {
                    var seg = new Segment({
                        from: ary[i],
                        to: ary[i + 1]
                    })
                    UtilObj.extend(seg, config)
                    segs.push(seg)
                }
                return segs
            }
        })
        UtilObj.extend(this, config)

        function _calBound() {
            this.segments.forEach(seg => {
                this.bound.extend(seg.bound)
            })
        }
    },
    publics: {
        render: function (ctx) {
            this.segments.forEach(seg => {
                seg.render(ctx)
            })
            return this
        },
        containsPoint: function (point) {
            var rel = false
            if (this.multiple) {
                this.parts.forEach(segs => {
                    rel = rel ? rel : contain(segs)
                })
            } else {
                rel = contain(this.segments)
            }
            return rel

            function contain(segs) {
                for (let i = 0; i < segs.length; i++) {
                    const seg = this.segments[i];
                    if (seg.containsPoint(point)) return true
                }
                return false
            }
        },
        project: function (crs) {
            this.bound = new Bound()
            this.segments.forEach(seg => {
                seg.project(crs)
                this.bound.extend(seg.bound)
            })
            return this
        }
    }
})

export {
    Polyline
}