/**
 * 地图渲染接口
 * 主要包括图形的样式属性及绘图函数
 * by BuggMaker
 */

import {
    Evented
} from '../events/index'

var IRender = Evented.extend({
    name: 'IRender',
    constructor: function () {
        //样式对象
        //可以办函绘图上下文所支持所有样式
        //如fillStyle/strokeStyle/lineWidth等等
        this.style = {}
        //是否可交互
        this.interactive = true
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