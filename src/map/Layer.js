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
import {
    EventType
} from '../events/Event';

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
        this.on(EventType.mmove, function (mpos) {
            var update = false
            this.geometryAry.forEach(geo => {
                if (!geo.interactive) return
                if (geo.containsPoint(mpos, 0)) {
                    if (!geo.isMousehover) {
                        geo.fire(EventType.menter, mpos)
                        update = true
                    } else {
                        geo.fire(EventType.mmove, mpos)
                    }
                } else if (geo.isMousehover) {
                    geo.fire(EventType.mleave, mpos)
                    update = true
                }
            })
            update && this.render()
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
                this.canvas.context.save()
                this.canvas.context.setTransform(1, 0, -0, 1, 0, 0)
                this.canvas.context.clearRect(0, 0, this.canvas.clientSize.width, this.canvas.clientSize.height)
                this.canvas.context.restore()
                this.geometryAry.forEach(geometry => {
                    if (geometry.bound.intersectWith(this.parent.viewbound)) {
                        geometry.render(this.canvas.context)
                    }
                });
            }
            return this
        },
        setTransform(m) {
            this.canvas.context.lineWidth = 1 / this.parent.crs.viewmatrix.scale
            this.canvas.context.setTransform(m[0], m[1], m[2], m[3], m[4], m[5])

        }
    },
    statics: {}
})

export {
    Layer
}