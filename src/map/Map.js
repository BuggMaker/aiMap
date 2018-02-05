/**
 * 地图
 * 作为一个容器,本质是一个div标签,
 * 其包含不同的图层以及具有一定功能的DOM元素 
 * by BuggMaker
 */

import {
    Bound
} from '../geometry/index'
import {
    UtilObj
} from '../utils/index'
import {
    IRender
} from './IRender';
import {
    EventType
} from '../events/index'
import {
    Size
} from '../core/index'
import {
    CRS
} from '../geo/prj/CRS';
import {
    Point
} from '../geometry/vector/Point';

export let Map = IRender.extend({
    name: 'Map',
    // 其他待继承的父类
    constructor: function (parentId) {
        var self = this
        // 创建div标签，并加入父容器
        this.parent = add2Parent(parentId)
        // 图层字典
        this.layersDic = new window.Map()
        this.crs = new CRS(256)
        // 视口范围
        this.bound = new Bound()
        // 绘图范围
        this.renderBound = new Bound()
        // 视口中心
        var _center
        UtilObj.defineProp(this, 'center', {
            // writable:false,
            get: (val) => {
                return this.viewBound.center
            },
            set: (val) => {

            }
        })

        // 获取父容器
        // 创建div、设置样式/尺寸并添加至父容器
        // 绑定事件
        function add2Parent(parentId) {
            let parent = document.getElementById(parentId)
            if (!parent)
                throw 'parent tag not exists'
            let width = parent.clientWidth || 300,
                height = parent.clientHeight || 150;

            //div标签大小
            self.clientSize = new Size(width, height)

            let mapDiv = document.createElement('div')
            mapDiv.style.width = width + 'px'
            mapDiv.style.height = height + 'px'
            mapDiv.id = 'aiMap'
            mapDiv.style.position = 'relative'
            parent.appendChild(mapDiv)
            // 容器
            self.container = mapDiv

            //绑定事件
            for (const key in parent) {
                if (key.substr(0, 2) === 'on') {
                    if (self[key])
                        parent[key] = function (e) {
                            self[key](e)
                        }
                }
            }
            return parent
        }
    },
    publics: {
        addControl: function () {},
        addLayer: function (layer) {
            //添加canvas标签
            layer.addTo(this)
            return this
        },
        // 设置地图中心
        setCenter: function (point) {
            return this
        },
        // 渲染图层
        render: function () {
            this.layersDic.forEach(ly => {
                ly.render()
            });
            return this
        },
        // 事件
        onmousemove: function (e) {
            // this.fire('mousemove')
            var mpos = new Point(e.offsetX, e.offsetY)
            this.layersDic.forEach(ly => {
                ly.fire('mousemove', mpos)
            })
        }
    }
})