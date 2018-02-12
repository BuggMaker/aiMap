import {
    Polyline
} from "./Polyline";
import {
    replace
} from "../../utils/UtilObject";

/**
 * 多边形
 */

var Polygon = Polyline.extend({
    name: 'Polygon',
    publics: {
        render: function (ctx) {
            ctx.beginPath()
            if (this.multiple) {
                this.parts.forEach(segs => {
                    renderPart.call(this,segs)
                });
            } else {
                renderPart.call(this,this.segments)
            }

            function renderPart(segs) {
                ctx.moveTo(segs[0].from.x, segs[0].from.y)
                for (let i = 1; i < segs.length; i++) {
                    const seg = segs[i];
                    ctx.lineTo(seg.from.x, seg.from.y)
                }
                ctx.lineTo(segs[0].from.x, segs[0].from.y)
                if (this.stroke) ctx.stroke()
                if (this.fill) ctx.fill()
            }
        },
        containsPoint: function (point, tolerance) {
            let rel = false
            if (this.multiple) {
                this.parts.forEach(segs => {
                    rel = rel ? rel : contain(segs)
                })
            } else {
                rel = contain(this.segments)
            }
            return rel;

            function contain(segs) {
                let rel = false,
                    start = 0,
                    index = segs.length - 1;
                for (let i = start; i < segs.length; i++) {
                    var pre = segs[i].from,
                        next = segs[index].from

                    if (pre.y < point.y && next.y >= point.y ||
                        next.y < point.y && pre.y >= point.y) {
                        if (pre.x + (point.y - pre.y) / (next.y - pre.y) * (next.x - pre.x) < point.x) {
                            rel = !rel;
                        }
                    }
                    index = i;
                }
                return rel
            }
        }
    }
})

export {
    Polygon
}