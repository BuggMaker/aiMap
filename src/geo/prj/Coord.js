import {
    Point, Class
} from "../..";

var Coord = Class.extend({
    name:'Coord',
    cnostructor: function (config) {
        // 坐标原点
        var _origin = config.origin || new Point(0, 0)
        this.defProp('origin', {
            get: () => {
                return _origin
            },
            set: val => {
                _origin = val
            }
        })
        delete config.origin
        // 单位长度
        var _unit = config.unit || 100
        this.defProp('unit', {
            get: () => {
                return _unit
            },
            set: val => {
                _unit = val
            }
        })
        delete config.unit
    },
    publics: {
        /**
         * 根据直角坐标计算屏幕坐标
         * @param [Point] coord
         * @return [Point] 
         */
        getCenter: function (coord) {
            throw `function getCenter of${this.name} is unrealized`
        },
        /**
         * 通过鼠标位置的画布坐标获取hexCoord
         * @param [point] pixelPosition
         * @return [coord]
         */
        getCoord: function (pixelPosition) {
            //根据屏幕坐标 大致计算在哪个格子(结果不是整数)
            //这里的计算就是getCenterPixel的逆过程
            throw `function getCenter of${this.name} is unrealized`
        },
    }
})

export {
    Coord
}