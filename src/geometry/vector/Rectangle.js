/**
 * 矩形
 */

import {
    IGeometry
} from "../IGeometry";

import {
    Graphics
} from "../../map/Canvas";
import {
    Point
} from "./Point";
import { Bound } from "..";

/**
 * 正方形格网
 */

export var Rectangle = IGeometry.extend({
    name: 'Rectangle',
    /**
     * 矩形
     * @param [Point] origin 右上角点
     */
    constructor: function (origin, width, height) {
        // 起点
        var _origin = new Point(origin)
        this.defProp('origin', {
            get: () => {
                return _origin
            },
            set: val => {
                _origin = val
            }
        })
        // 宽度
        var _width = !isNaN(width) ? width : 10
        this.defProp('width', {
            get: () => {
                return _width
            },
            set: val => {
                _width = val
            }
        })
        // 高度
        var _height = !isNaN(height) ? height : !isNaN(width) ? width : 10
        this.defProp('height', {
            get: () => {
                return _height
            },
            set: val => {
                _height = val
            }
        })

        // 重新计算边界        
        _calBound.call(this)
        this.on('originchange widthchange heightchange', _calBound)

        function _calBound() {
            var lt = this.origin,
                rb = this.origin.plus({
                    x: this.width,
                    y: this.height
                })
            this.bound = new Bound(lt, rb)
        }
    },
    publics: {
        render: function (ctx) {
            Graphics.rect(ctx, this.origin, this.width, this.height, {
                fill: this.fill,
                stroke: this.stroke
            })
            return this
        },
        containsPoint: function (pt) {
            return this.bound.containsPoint(pt)
        },
        project: function (crs) {
            this.origin = crs.lnglatToMapPoint(new Lnglat(this.origin.x, this.origin.y))
            return this
        }
    }
})