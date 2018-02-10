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
import { EventType } from "../events/Event";

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
        this.bound = new Bound()
        // 点集
        this.points = []
        // 其他部分(伙伴)
        this.partners = []
        // 鼠标捕获容差
        this.tolerance = 5
        // 鼠标悬停
        this.isMousehover = false

        // 初始化鼠标事件
        this.on(EventType.menter, function (mpos) {
            this.isMousehover = true
            // this.onmouseenter && this.onmouseenter(mpos)
        })
        this.on(EventType.mleave, function (mpos) {
            this.isMousehover = false
            // this.onmouseleave && this.onmouseleave(mpos)
        })
    },
    publics: {
        // 主要用于检测点是否与几何要素有交集(鼠标点在要素边上或者内部,以实现鼠标对要素的捕获)
        containsPoint: function (point, tolerance) {
            throw `function 'contains' of ${this.name} is unrealized!`
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
        }
    }
})

export {
    IGeometry
}