import {
    Class
} from "../core/Class";
import {
    WebMecrator
} from "./WebMecrator";
import {
    Point
} from "../../geometry/vector/Point";
import {
    Lnglat
} from "../Lnglat";

var CRS = Class.extend({
    constrructor: function (tileWidth) {
        this.projection = WebMecrator
        this.viewmatrix = new ViewMartix()
        this.rate = 2 * this.projection.piR / tileWidth
    },
    publics: {
        /**
         * 经纬度 转 地图坐标
         */
        lnglatToMapPoint: function (lnglat) {
            var piR = this.projection.piR
            var pt = this.projection.project(lnglat)
            var px = pt.x >= piR ? pt.x - piR : piR + pt.x,
                py = piR - pt.y
            pt = new Point(px, py)
            return new Point(pt.x / this.rate, pt.y / this.rate)
        },
        /**
         * 地图坐标 转 经纬度
         */
        mapPointToLnglat: function (point) {
            var piR = this.projection.piR
            var prjPt = new Point(point.x * this.rate, point.y * this.rate)
            var px = prjPt.x >= piR ? prjPt.x + piR : prjPt.x - piR,
                py = piR - prjPt.y
            return this.projection.unproject(new Point(px, py))
        },
        /**
         * 经纬度 转 屏幕坐标
         */
        lnglatToScreenPoint: function (lnglat) {
            var lyPt = this.lnglatToMapPoint(lnglat)
            return this.viewmatrix.toScreen(lyPt.x,lyPt.y)
        },
        /**
         * 屏幕坐标 转 经纬度
         */
        screenPointToLnglat: function (point) {
            var spt = this.viewmatrix.toWorld(point.x, point.y)
            return this.mapPointToLnglat(spt)
        },
        getProjectedBound: function (level) {}
    }
})

export{
    CRS
}