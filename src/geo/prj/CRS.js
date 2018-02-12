import {
    Class
} from "../../core/Class";
import {
    WebMecrator
} from "./WebMecrator";
import {
    Point
} from "../../geometry/vector/Point";
import {
    Lnglat
} from "../Lnglat";
import { ViewMartix } from "./ViewMartix";

var CRS = Class.extend({
    constructor: function (tileWidth) {
        this.projection = WebMecrator
        this.viewmatrix = new ViewMartix
        this.rate = 1 //2 * this.projection.PI_R / tileWidth
    },
    publics: {
        /**
         * 经纬度 转 地图坐标
         */
        lnglatToMapPoint: function (lnglat) {
            var PI_R = this.projection.PI_R
            var pt = this.projection.project(lnglat)
            var px = pt.x >= PI_R ? pt.x - PI_R : PI_R + pt.x,
                py = PI_R - pt.y
            pt = new Point(px, py)
            return new Point(pt.x / this.rate, pt.y / this.rate)
        },
        /**
         * 地图坐标 转 经纬度
         */
        mapPointToLnglat: function (point) {
            var PI_R = this.projection.PI_R
            var prjPt = new Point(point.x * this.rate, point.y * this.rate)
            var px = prjPt.x >= PI_R ? prjPt.x + PI_R : prjPt.x - PI_R,
                py = PI_R - prjPt.y
            return this.projection.unproject(new Point(px, py))
        },
        /**
         * 经纬度 转 屏幕坐标
         */
        lnglatToScreenPoint: function (lnglat) {
            var lyPt = this.lnglatToMapPoint(lnglat)
            return this.mapPointToScreenPoint(lypt) //this.viewmatrix.toScreen(lyPt.x,lyPt.y)
        },
        /**
         * 屏幕坐标 转 经纬度
         */
        screenPointToLnglat: function (point) {
            var spt = this.screenPointToMapPoint(point)//this.viewmatrix.toWorld(point.x, point.y)
            return this.mapPointToLnglat(spt)
        },
        // 屏幕坐标 转 地理坐标
        screenPointToMapPoint(point){
            return this.viewmatrix.toWorld(point.x, point.y)
        },
        // 地理坐标转屏幕坐标
        mapPointToScreenPoint(point){
            return this.viewmatrix.toScreen(point.x,point.y)
        },
        transform(disX,disY,scale,rotate){
            this.viewmatrix.transform(disX,disY,scale,rotate)
        }
    }
})

export{
    CRS
}