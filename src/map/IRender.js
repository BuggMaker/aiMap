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
    constructor: function () {
        //样式对象
        //可以办函绘图上下文所支持所有样式
        //如fillStyle/strokeStyle/lineWidth等等
        var _style = {
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
        // 鼠标捕获后的样式
        var _interactiveStyle = {
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
        //是否可交互
        this.interactive = true
        // 相对于stroke,渲染时是否以某颜色填充(针对面状图形)
        this.fill = false
        // 描边
        this.stroke = true
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