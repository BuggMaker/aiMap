import {
    Square
} from "./Square";
import {
    Graphics
} from "../../map/Canvas";
import {
    Point
} from "..";
import {
    UtilObj
} from "../..";

// var Tile = function (level, row, col) {
//     this.level = level
//     this.row = row
//     this.col = col
// }
// Tile.prototype.toString = function () {
//     return `(${this.level,this.row,this.col})`
// }

// function Square(orign, width) {
//     this.orign = orign
//     this.width = width
//     this.level = 0
//     this.coord = new Point(0, 0)
//     this.center = new Point(this.orign.x + width / 2, this.orign.y + width / 2)
// }
// Square.prototype = {
//     constructor: Square,
//     render: function (ctx) {
//         ctx.beginPath()
//         ctx.moveTo(this.orign.x, this.orign.y)
//         ctx.lineTo(this.orign.x + this.width, this.orign.y)
//         ctx.lineTo(this.orign.x + this.width, this.orign.y + this.width)
//         ctx.lineTo(this.orign.x, this.orign.y + this.width)
//         ctx.closePath()
//         ctx.stroke()
//     },
//     renderText: function (ctx) {
//         ctx.save()
//         ctx.font = `${32/Math.pow(2,level)}px sans-serif`
//         ctx.textAlign = 'center'
//         ctx.textBaseline = 'middle'
//         ctx.fillText(this.toString(), this.center.x, this.center.y)
//         ctx.restore()
//     },
//     renderImage: function (ctx) {
//         var url =
//             `http://c.tile.opencyclemap.org/cycle/${this.level}/${this.coord.x}/${this.coord.y}.png`

//         var googleMapTypes = {
//             skeleton: 'h',
//             defalut: 'm',
//             terrain: 'p',
//             hybrid: 'y'
//         }
//         url =
//             `http://mt2.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&x=${this.coord.x}&y=${this.coord.y}&z=${this.level}`
//         var image = new Image()
//         image.src = url
//         image.zoom = 'zoom'
//         image.onload = () => {
//             ctx.drawImage(image, this.orign.x, this.orign.y, this.width, this.width)
//             if (typeof this.onImageLoad === 'function') this.onImageLoad.call(this)
//         }
//     },
//     quatuor: function () {
//         var ary = []
//         for (let col = 0; col < 2; col++) {
//             for (let row = 0; row < 2; row++) {
//                 var or = new Point(this.orign.x + col * this.width / 2, this.orign.y + row *
//                     this.width / 2)
//                 var tmp = new Square(or, this.width / 2)
//                 tmp.level = this.level + 1
//                 tmp.coord = new Point(col + this.orign.x / tmp.width, row + this.orign.y /
//                     tmp.width)
//                 ary.push(tmp)
//             }
//         }
//         return ary
//     },
//     toString: function () {
//         return `(${this.level},${this.coord.x},${this.coord.y})`
//     }
// }

export var Tile = Square.extend({
    name: 'Tile',
    constructor: function (origin, width, config) {
        var _level = config.level || 0
        this.defProp('level', {
            get: () => {
                return _level
            }
        })
        delete config.level
        var _coord = new Point(config.coord)
        this.defProp('coord', {
            get: () => {
                return _coord
            }
        })
        delete config.coord
        var _imgCoord = new Point(config.imgCoord)
        this.defProp('imgCoord', {
            get: () => {
                return _imgCoord
            }
        })
        delete config.imgCoord
        // 替换模板中的x/y/z,得到tile的URL
        if (!config.urlTemplate) throw `lack of urlTemplate`
        var _url = config.urlTemplate
        var reg = new RegExp("({x})", "g");
        _url = _url.replace(reg, this.imgCoord.x);
        reg = new RegExp("({y})", "g");
        _url = _url.replace(reg, this.imgCoord.y);
        reg = new RegExp("({z})", "g");
        _url = _url.replace(reg, this.level);
        this.defProp('url', {
            get: () => {
                return _url
            }
        })
        // 创建图片标签，用于绘图
        this.img = new Image()
        this.img.src = this.url
        this.img.onload = () => {
            this.loaded = true
        }
        UtilObj.extend(this, config)
        this.timerId = -1
    },
    publics: {
        render: function (ctx) {
            // 如果已加载 直接渲染
            if (this.loaded) {
                // Graphics.image(ctx, this.img, this.origin, this.width, this.height)
                _render.call(this)
            } else {
                // 如果未加载 加载后渲染
                if (this.timerId > 0) clearInterval(this.timerId)
                this.timerId = setInterval(() => {
                    if (this.loaded) {
                        clearInterval(this.timerId)
                        this.timerId = -1
                        //Graphics.image(ctx, this.img, this.origin, this.width, this.height)
                        _render.call(this)
                    }
                }, 16)
            }

            function _render() {
                Graphics.image(ctx, this.img, this.origin, this.width, this.height)
                if (this.showCoord)
                    Graphics.rect(ctx, this.origin, this.width, this.height, {
                        stroke: true
                    })
                // if (this.showCoord) {
                //     ctx.save()
                //     ctx.transform(1,0,0,1,0,0)
                //     Graphics.text(ctx, `(${this.level},${this.coord.x},${this.coord.y})`, new Point(0,0), {
                //         fill: this.fill,
                //         stroke: this.stroke
                //     })
                //     ctx.restore()
                // }
            }
        }
    }
})