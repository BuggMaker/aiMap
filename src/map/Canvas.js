import {
    Class
} from "../core/Class";
import {
    Item
} from "../core/Item";

/**
 * Canvas画布
 * 包括对canvas标签/绘图上下文的相关操作
 * by BuggMaker
 */

var Canvas = Class.extend({
    name: 'Canvas',
    supers: [Item],
    constructor: function (layer) {
        this.clientSize = layer.parent.clientSize
        this.container = layer.parent.container
        //canvas标签
        var _canvas = document.createElement('canvas');
        var options = {
            id: 'layer_' + layer.index,
            width: this.clientSize.width,
            height: this.clientSize.height,
            style: {
                zIndex: layer.index,
                position: 'absolute',
                top: '0',
                left: '0'
            }
        }
        _canvas.width = this.clientSize.width;
        _canvas.height = this.clientSize.height;
        _canvas.style.zIndex = layer.index
        _canvas.style.position = 'absolute'
        _canvas.style.top = 0
        _canvas.style.left = 0
        _canvas.id = 'layer_' + layer.index
        this.container.appendChild(_canvas)

        this.canvas = _canvas
        this.context = this.canvas.getContext('2d')
    },
    publics: {
        // 从父容器中移除canvas标签
        remove: function () {
            this.container.removeChild(this.canvas)
        }
    },
    statics: {
        /**
         * 视图变换
         */
        transform: function (disX, disY, scale, roate) {
            var matrix = []
            matrix[0] = matrix[3] = Math.cos(roate) * scale
            matrix[2] = -(matrix[1] = Math.sin(roate) * scale)
            matrix[5] = disX
            matrix[6] = disY
            ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5], matrix[6])
        },
        /**
         * 绘制圆
         */
        drawCircle: function (ctx, center, radius) {
            ctx.beginPath()
            ctx.arc(center.x, center.y, radius)
            ctx.stroke()
        },
        /**
         * 填充圆
         */
        fillCircle: function (ctx, center, radius) {
            ctx.beginPath()
            ctx.arc(center.x, center.y, radius)
            ctx.fill()
        }
    }
})

var Graphics = {
    /**
     * 绘制圆形
     * @param {Point} center 
     * @param {Number} radius 
     * @param {Boolean} isFill 
     */
    circle(ctx, center, radius, isFill) {
        ctx.beginPath()
        ctx.arc(center.x, center.y, radius,0,2*Math.PI,false)
        if (isFill) ctx.fill()
        else ctx.stroke()
    },
    line(){}
}

export {
    Canvas,
    Graphics
}