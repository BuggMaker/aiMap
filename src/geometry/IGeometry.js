import {
    IRender
} from "../map/IRender";
import {
    Item
} from "../core/index";
import {
    Bound
} from "./Bound";
import {
    GeoJson,
    GeoType
} from "../geo/GeoJson";
import {
    isArray
} from "../utils/Util";
import {
    EventType
} from "../events/Event";

/**
 * 几何类型接口
 */

var IGeometry = IRender.extend({
    name: 'IGeometry',
    supers: [Item],
    /**
     * 创建几何要素
     * 参数需要为标准GeoJson格式或者coordinates数组
     */
    constructor: function () {
        this.id = ''
        // 属性
        this.properties = {}
        // 几何类型及坐标点
        this.geometry = {}
        // new GeoJson({
        //     type: GeoType.Feature,
        //     coordinates: []
        // })
        var _bound = new Bound()
        this.defProp('bound', {
            get: () => {
                return _bound
            },
            set: (val) => {
                _bound = val
            }
        })
        // 其他部分 和自己是同等类型即Multiple
        this.multiple = false
        var _parts = []
        this.defProp('parts', {
            get: () => {
                return _parts
            },
            set: (val) => {
                _parts = val
            }
        })
        // 鼠标捕获容差 平面坐标（米、像素）
        this.tolerance = 5
        // 鼠标悬停
        this.isMousehover = false

        // 初始化鼠标事件
        this.on(EventType.menter, function (mpos) {
            this.isMousehover = true
            this.parent.parent.container.style['cursor'] = 'pointer'
        })
        this.on(EventType.mleave, function (mpos) {
            this.isMousehover = false
            this.parent.parent.container.style['cursor'] = 'default'   
        })
    },
    publics: {
        // 主要用于检测点是否与几何要素有交集(鼠标点在要素边上或者内部,以实现鼠标对要素的捕获)
        containsPoint: function (point, tolerance) {
            throw `function 'containsPoint(Point:point,Number:tolerance)' of ${this.name} is unrealized!`
        },
        // 添加至图层
        addTo: function (ly) {
            ly.geometryAry.push(this)
            this.parent = ly
            return this
        },
        // 从父容器中移除
        remove: function () {
            if (this.parent) {
                this.parent.geometryAry.remove(this)
            }
            return this
        },
        // 主动重新渲染
        reRender() {
            this.parent && this.parent.render()
            return this
        },
        // 添加部分
        addPart: function (geo) {
            this.parts.publics(geo)
        },
        // 移除部分
        removePart: function (geo) {
            this.parts.remove(geo)
        },
        project:function(crs){
            throw `function project of ${this.name} is unrealized`
        }
    }
})

export {
    IGeometry
}