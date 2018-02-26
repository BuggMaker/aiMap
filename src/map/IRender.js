/**
 * 地图渲染接口
 * 主要包括图形的样式属性及绘图函数
 * by BuggMaker
 */

import {
    Evented
} from '../events/index'
import {
    UtilObj
} from '../index';

var IRender = Evented.extend({
    name: 'IRender',
    constructor: function (config) {
        //样式对象
        //可以办函绘图上下文所支持所有样式
        //如fillStyle/strokeStyle/lineWidth等等
        var _style = config.style || {
            fillStyle: 'dodgerblue',
            strokeStyle: 'forestgreen',
            lineJoin: 'round',
            lineCap: 'round'
        }
        this.defProp('style', {
            get: () => {
                return _style
            },
            set: val => {
                UtilObj.extend(_style, val)
            }
        })
        delete config.style
        // 鼠标捕获后的样式
        var _interactiveStyle = config.interactiveStyle || {
            fillStyle: 'forestgreen',
            strokeStyle: 'dodgerblue',
            lineJoin: 'round',
            lineCap: 'round'
        }
        this.defProp('interactiveStyle', {
            get: () => {
                return _interactiveStyle
            },
            set: val => {
                UtilObj.extend(_interactiveStyle, val)
            }
        })
        delete config.interactiveStyle
        //是否可交互
        this.interactive = config.interactive || true
        delete config.interactive
        // 相对于stroke,渲染时是否以某颜色填充(针对面状图形)
        this.fill = config.fill || false
        delete config.fill
        // 描边
        this.stroke = config.stroke || true
        delete config.stroke

        // 可视性
        var _vis = config.visable || true
        this.defProp('visable', {
            get: () => {
                return _vis
            },
            set: val => {
                _vis = val
            }
        })
        delete config.visable
    },
    publics: {
        /**
         * @function draw(Object:ctx)
         * 绘图函数
         * @param:绘图上下文
         */
        render: function (ctx) {
            throw "function 'render' unrealized"
            // if (!ctx) throw 'ctx is unavaliable!'
            // for (const key in this.style) {
            //     if (style.hasOwnProperty(key)) {
            //         ctx[key] = style[key];
            //     }
            // }
        }
    }
})

export {
    IRender
}