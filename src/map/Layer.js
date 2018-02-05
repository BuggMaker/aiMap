/**
 * 图层类
 * by BuggMaker
 */
import {
    IRender
} from './IRender'
import {
    Bound
} from '../geometry/index'
import {
    Canvas
} from './Canvas'
import {
    Item
} from '../core/Item';

var Layer = IRender.extend({
    name: 'Layer',
    supers: [Item],
    /**
     * @function Layer(Object:options)
     * 图层
     * 参数包括:index,title,style
     */
    constructor: function (config) {
        for (const key in config) {
            if (config.hasOwnProperty(key)) {
                const element = config[key];
                this[key] = element
            }
        }
        //数据范围
        this.bound = new Bound()
        //画布
        this.canvas = null
        //集合要素 数组
        this.geometryAry = []
        //地图
        this.parent = null
        //是否可见
        this.visable = true

        // 事件
        this.on('mousemove', function (mpos) {
            this.geometryAry.forEach(geo => {
                if (!geo.interactive) return
                if (geo.contains(mpos, 0)) {
                    if (!geo.isMouseover) {
                        geo.fire('mouseenter', mpos)

                        geo.render(this.canvas.context)
                    } else {
                        geo.fire('mousemove', mpos)
                    }
                } else if (geo.isMouseover) {
                    geo.fire('mouseleave', mpos)

                    geo.render(this.canvas.context)
                }
            })
        })
    },
    publics: {
        // 添加要素到图层
        addGeometry: function (geometry) {
            //合并范围
            this.bound.extend(geometry.bound)
            this.geometryAry.push(geometry)
            return this
        },
        // 添加图层到地图
        addTo: function (map) {
            if (map) {
                this.parent = map
                map.layersDic.set(this.index, this)
                this.canvas = new Canvas(this)
            }
            return this
        },
        // 从地图移除图层
        remove: function () {
            if (this.parent) {
                this.parent.layersDic.delete(this.index)
                this.canvas.remove()
                this.parent = null
            }
        },
        // 渲染
        render: function () {
            if (this.visable) {
                this.geometryAry.forEach(geometry => {
                    geometry.render(this.canvas.context)
                });
            }
            return this
        }
    },
    statics: {}
})

export {
    Layer
}