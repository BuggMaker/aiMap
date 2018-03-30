var A =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_index__ = __webpack_require__(10);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Class", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_index__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return __WEBPACK_IMPORTED_MODULE_1__events_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Evented", function() { return __WEBPACK_IMPORTED_MODULE_1__events_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geo_index__ = __webpack_require__(27);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Lnglat", function() { return __WEBPACK_IMPORTED_MODULE_2__geo_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GeoJson", function() { return __WEBPACK_IMPORTED_MODULE_2__geo_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GeoType", function() { return __WEBPACK_IMPORTED_MODULE_2__geo_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UtilObj", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isInstanceOf", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ColorRGBA", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ColorRamp", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "myFetch", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["k"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_index__ = __webpack_require__(18);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return __WEBPACK_IMPORTED_MODULE_4__map_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return __WEBPACK_IMPORTED_MODULE_4__map_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geometry_index__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Bound", function() { return __WEBPACK_IMPORTED_MODULE_5__geometry_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Square", function() { return __WEBPACK_IMPORTED_MODULE_5__geometry_index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return __WEBPACK_IMPORTED_MODULE_5__geometry_index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return __WEBPACK_IMPORTED_MODULE_5__geometry_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return __WEBPACK_IMPORTED_MODULE_5__geometry_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Segment", function() { return __WEBPACK_IMPORTED_MODULE_5__geometry_index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return __WEBPACK_IMPORTED_MODULE_5__geometry_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return __WEBPACK_IMPORTED_MODULE_5__geometry_index__["d"]; });








/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Class; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(5);
// Base class in aiMap




function Class() {}
/**
 * 判断是否为类型T的实例
 * @param {Class} T 
 */
Object.prototype.isInstanceOf = function (T) {
    return __WEBPACK_IMPORTED_MODULE_0__utils_index__["d" /* UtilObj */].isInstanceOf(this, T)
}
/**
 * 扩展当前类型(继承)
 * @param {Object} props 
 */
Class.extend = function (props) {
    var _base = this
    var NewClass = function (...args) {
        //继承父类实例属性
        _base.apply(this, args)
        var name = _base.prototype.name;

        // 父类实例,包含了实例属性和公共属性,方便子类调用
        // this.base = this.base ? UtilObj.extend(this.base, new _base(args)) : new _base(args)

        //继承其他父类
        if (props.supers) {
            props.supers.forEach(s => {
                s.apply(this, args)
                // UtilObj.extend(this.base, new s(args))
            })
        }

        //构造函数
        if (props.constructor) {
            props.constructor.apply(this, args)
        } else {
            throw `Class ${this.name} lack of constructor function`
        }
        // delete props.constructor
    }
    
    if (props.name) {
        Object.defineProperty(NewClass, 'name', {
            value: props.name,
            writable: false
        })
    } else {
        console.warn('Class lack of prop: name');
    }

    //继承父类的静态属性
    for (const key in _base) {
        if (_base.hasOwnProperty(key) && key !== '__base__') {
            NewClass[key] = _base[key];
        }
    }

    //原型继承
    //继承父类的公共属性
    var prot = Object.create(_base.prototype) // 注意:必须创建父类原型的副本
    prot.constructor = NewClass
    NewClass.prototype = prot
    NewClass.__base__ = [_base]

    //继承其他父类
    if (props.supers) {
        props.supers.forEach(s => {
            //继承父类的静态属性
            for (const key in s) {
                if (!NewClass[key] && s.hasOwnProperty(key) && key !== '__base__') {
                    NewClass[key] = s[key];
                }
            }

            //原型继承
            //继承父类的公共属性
            for (const key in s.prototype) {
                if (s.prototype.hasOwnProperty(key) && key !== 'constructor') {
                    prot[key] = s.prototype[key]
                }
            }
            NewClass.__base__.push(s)
        })
        // delete props.supers
    }

    // statics  扩展静态属性,类名'.'属性
    if (props.statics) {
        __WEBPACK_IMPORTED_MODULE_0__utils_index__["d" /* UtilObj */].extend(NewClass, props.statics)
        delete props.statics
    }
    // publics  扩展公共方法,prototype中的属性    
    if (props.publics) {
        __WEBPACK_IMPORTED_MODULE_0__utils_index__["d" /* UtilObj */].extend(prot, props.publics)
        delete props.publics
    }

    // 其他属性默认为publics 扩展公共方法,prototype中的属性 
    for (const key in props) {
        if (props.hasOwnProperty(key) && key !== 'supers' && key != 'constructor') {
            prot[key] = props[key]
        }
    }

    // 定义属性
    // getter || setter
    NewClass.prototype.defProp = function (key, customer) {
        __WEBPACK_IMPORTED_MODULE_0__utils_index__["d" /* UtilObj */].defineProp(this, key, customer)
    }

    NewClass.prototype.toString = function () {
        return NewClass.name
    }
    return NewClass
}

/** 
 * @function static(Object:statics)
 * 扩展类型静态属性 
 */
Class.static = function (statics) {
    __WEBPACK_IMPORTED_MODULE_0__utils_index__["d" /* UtilObj */].extend(this.prototype.constructor, statics)
}

/**
 * @function public(Object:publics)
 * 扩展类型公有方法
 */
Class.public = function (publics) {
    __WEBPACK_IMPORTED_MODULE_0__utils_index__["d" /* UtilObj */].extend(this.prototype, publics)
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IGeometry__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Class__ = __webpack_require__(1);




/**
 * 点类
 * 可以表示像素点或者平面坐标点(投影坐标点)
 * by BuggMaker
 */

var Point = __WEBPACK_IMPORTED_MODULE_2__core_Class__["a" /* Class */].extend({
    name: 'Point',
    constructor: function (...args) {
        var ary = []
        if (args.length === 1) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__index__["isArray"])(args[0])) {
                ary = args[0]
            } else if (!isNaN(args[0].x) && !isNaN(args[0].y)) {
                this.x = args[0].x
                this.y = args[0].y
            } else if (Object(__WEBPACK_IMPORTED_MODULE_0__index__["isArray"])(args[0])) {
                ary = args[0]
            } else {
                throw `Wrong format of Point or Array`
            }
        } else if (args.length >= 2) {
            ary = args
        } else {
            this.x = 0
            this.y = 0
        }
        if (ary.length >= 2) {
            this.x = ary[0]
            this.y = ary[1]
        }
    },
    publics: {
        distanceTo: function (other) {
            if (other.x && other.y)
                return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2))
        },
        plus(point) {
            return new Point(this.x + point.x, this.y + point.y)
        },
        reduce(point) {
            return new Point(this.x - point.x, this.y - point.y)
        },
        equal: function (point) {
            return point.x === this.x && point.y === this.y
        }
    }
})

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Graphics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Class__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Item__ = __webpack_require__(12);



/**
 * Canvas画布
 * 包括对canvas标签/绘图上下文的相关操作
 * by BuggMaker
 */

var Canvas = __WEBPACK_IMPORTED_MODULE_0__core_Class__["a" /* Class */].extend({
    name: 'Canvas',
    supers: [__WEBPACK_IMPORTED_MODULE_1__core_Item__["a" /* Item */]],
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
     * @param {Object} fill or stroke 
     */
    circle(ctx, center, radius, config) {
        ctx.beginPath()
        ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI, false)
        if (config.fill) ctx.fill()
        if (config.stroke) ctx.stroke()
    },
    /**
     * 绘制线段
     * @param {Point} from 
     * @param {Point} to 
     */
    line(ctx, from, to) {
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.stroke()
    },
    /**
     * 绘制矩形
     * @param {canvas context} ctx 
     * @param {Point} origin 
     * @param {Number} width 
     * @param {Number} height 
     * @param {Object} config 
     */
    rect(ctx, origin, width, height, config) {
        ctx.beginPath()
        ctx.moveTo(origin.x, origin.y)
        ctx.lineTo(origin.x + width, origin.y)
        ctx.lineTo(origin.x + width, origin.y + height)
        ctx.lineTo(origin.x, origin.y + height)
        ctx.lineTo(origin.x, origin.y)

        if (config.fill) ctx.fill()
        if (config.stroke) ctx.stroke()
    },
    image(ctx, img, origin, width, height) {
        ctx.beginPath()
        ctx.drawImage(img, origin.x, origin.y, width, height)
    },
    clear: function (ctx) {
        ctx.save()
        ctx.setTransform(1, 0, -0, 1, 0, 0)
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.restore()
    },
    text(ctx, txt, center, config) {
        ctx.beginPath()
        if (config.fill)
            ctx.fillText(txt, center.x, center.y)

        if (config.stroke)
            ctx.strokeText(txt, center.x, center.y)
    }
}



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bound; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Class__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Size__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vector_Point__ = __webpack_require__(2);





/**
 * 边界
 * 一般指世界坐标系的图形对象的外接矩形
 * @param {Point,Point || Array} pt1,pt2 || [[x1,y1],[x2,y2]]
 */
var Bound = __WEBPACK_IMPORTED_MODULE_0__core_Class__["a" /* Class */].extend({
    name: 'Bound',
    constructor: function (...args) {
        // 范围
        this.min = new __WEBPACK_IMPORTED_MODULE_3__vector_Point__["a" /* Point */](Number.MAX_VALUE, Number.MAX_VALUE)
        this.max = new __WEBPACK_IMPORTED_MODULE_3__vector_Point__["a" /* Point */](Number.MIN_VALUE, Number.MIN_VALUE)
        //根据参数 重新计算范围
        var points = []
        if (args.length == 1 && Object(__WEBPACK_IMPORTED_MODULE_2__index__["isArray"])(args[0]) && args[0].length >= 2) {
            var ary = args[0]
            for (let index = 0; index < ary.length; index++) {
                var pt = new __WEBPACK_IMPORTED_MODULE_3__vector_Point__["a" /* Point */](ary[index])
                points.push(pt1)
            }
        } else if (args.length == 2) {
            var pt1 = new __WEBPACK_IMPORTED_MODULE_3__vector_Point__["a" /* Point */](args[0]),
                pt2 = new __WEBPACK_IMPORTED_MODULE_3__vector_Point__["a" /* Point */](args[1])
            points.push(pt1)
            points.push(pt2)
        }
        points.forEach(pt => {
            this.min.x = Math.min(pt.x, this.min.x)
            this.min.y = Math.min(pt.y, this.min.y)
            this.max.x = Math.max(pt.x, this.max.x)
            this.max.y = Math.max(pt.y, this.max.y)
        })

        // 尺寸
        this.defProp('size', {
            get: () => {
                return new __WEBPACK_IMPORTED_MODULE_1__core_Size__["a" /* Size */](this.max.x - this.min.x, this.max.y - this.min.y)
            }
        })
        // 中心
        this.defProp('center', {
            get: () => {
                return new __WEBPACK_IMPORTED_MODULE_3__vector_Point__["a" /* Point */](this.min.x + this.size.width / 2, this.min.y + this.size.height / 2)
            }
        })
        // 右上角
        this.defProp('leftTop', {
            get: () => {
                return this.min
            }
        })
        // 右上角
        this.defProp('rightTop', {
            get: () => {
                return new __WEBPACK_IMPORTED_MODULE_3__vector_Point__["a" /* Point */](this.max.x, this.min.y)
            }
        })
        // 右下角
        this.defProp('rightBottom', {
            get: () => {
                return this.max
            }
        })
        // 左下角
        this.defProp('leftBottom', {
            get: () => {
                return new __WEBPACK_IMPORTED_MODULE_3__vector_Point__["a" /* Point */](this.min.x, this.max.y)
            }
        })
    },
    publics: {
        /**
         * 取交集
         * @param {Bound} bound
         * @return {Bound} 新的Bound对象
         */
        intersection: function (bound) {
            // throw `function 'intersect' of ${this.name} is unrealized!`
            if (!bound.isInstanceOf(Bound)) throw 'param is not instance of Bound'
            var result = new Bound()
            var tarMin = bound.min,
                tarMax = bound.max
            result.min.x = Math.max(tarMin.x, this.min.x)
            result.min.y = Math.max(tarMin.y, this.min.y)
            result.max.x = Math.min(tarMax.x, this.max.x)
            result.max.y = Math.min(tarMax.y, this.max.y)
            return result
        },
        /**
         * 取并集 
         * @param {Bound} bound
         * @return {Bound} 返回新的Bound对象
         */
        union: function (bound) {
            if (!bound.isInstanceOf(Bound)) throw 'param is not instance of Bound'
            var result = new Bound()
            var tarMin = bound.min,
                tarMax = bound.max
            result.min.x = Math.min(tarMin.x, this.min.x)
            result.min.y = Math.min(tarMin.y, this.min.y)
            result.max.x = Math.max(tarMax.x, this.max.x)
            result.max.y = Math.max(tarMax.y, this.max.y)
            return result
        },
        /**
         * 扩充当前范围
         * @param {Bound} bound
         * @return {this}
         */
        extend: function (bound) {
            if (!bound.isInstanceOf(Bound)) throw 'param is not instance of Bound'
            var tarMin = bound.min,
                tarMax = bound.max
            this.min.x = Math.min(tarMin.x, this.min.x)
            this.min.y = Math.min(tarMin.y, this.min.y)
            this.max.x = Math.max(tarMax.x, this.max.x)
            this.max.y = Math.max(tarMax.y, this.max.y)

            return this
        },
        /**
         * 边界四周扩张同等距离
         * @param {Number} offset
         */
        expand: function (offset) {
            this.min.x -= offset
            this.min.y -= offset
            this.max.x += offset
            this.max.y += offset
        },
        /**
         * 边界四周缩小同等距离
         * @param {Number} offset
         */
        shrink: function (offset) {
            this.min.x += offset
            this.min.y += offset
            this.max.x -= offset
            this.max.y -= offset
            if (this.min.x > this.max.x || this.min.y > this.max.y) {
                throw 'offset is too big'
            }
        },
        /**
         * 判断是否相交
         * @param {Bound} bound
         * @return {Boolean}
         */
        intersectWith: function (bound) {
            if (!bound.isInstanceOf(Bound)) throw 'param is not instance of Bound'
            var tarMin = bound.min,
                tarMax = bound.max
            var intersectX = (tarMax.x >= this.min.x) && (tarMin.x <= this.max.x),
                intersectY = (tarMax.y >= this.min.y) && (tarMin.y <= this.max.y)
            return intersectX && intersectY
        },
        /**
         * 判断是否存在重叠区域
         * @param {Bound} bound
         * @return {Boolean} 
         */
        overlapWith: function (bound) {
            if (!bound.isInstanceOf(Bound)) throw 'param is not instance of Bound'
            var tarMin = bound.min,
                tarMax = bound.max
            var overlapX = (tarMax.x > this.min.x) && (tarMin.x < this.max.x),
                overlapY = (tarMax.y > this.min.y) && (tarMin.y < this.max.y)
            return overlapX && overlapY
        },
        /**
         * 判断是否完全覆盖目标范围,cover
         * @param {Bound} bound
         */
        coverWidth: function (bound) {
            if (!bound.isInstanceOf(Bound)) throw 'param is not instance of Bound'
            var tarMin = bound.min,
                tarMax = bound.max
            var overlapX = (tarMax.x <= this.max.x) && (tarMin.x >= this.min.x),
                overlapY = (tarMax.y <= this.max.y) && (tarMin.y >= this.min.y)
            return overlapX && overlapY
        },
        containsPoint: function (point) {
            return point.x >= this.min.x && point.x <= this.max.x && point.y >= this.min.y && point.y <= this.max.y
        }
    }
})



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UtilObject__ = __webpack_require__(11);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__UtilObject__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__UtilObject__["extend"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__UtilObject__["merge"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__UtilObject__["replace"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__UtilObject__["copy"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__UtilObject__["isInstanceOf"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UtilColor__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__UtilColor__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__UtilColor__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__UtilColor__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__UtilColor__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Util__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__Util__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UtilFetch__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__UtilFetch__["a"]; });












/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lnglat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);


/**
 * 经纬度类
 * 参数:先经度,后纬度
 * @param {Object || Array || Number} args 
 */
var Lnglat = function (...args) {
    var lng = 0,
        lat = 0
    if (args.length == 1) {
        var ele = args[0]
        if (Object(__WEBPACK_IMPORTED_MODULE_0__index__["isArray"])(ele) && ele.length >= 2) {
            lng = ele[0]
            lat = ele[1]
        } else if (ele.lng !== undefined && ele.lat !== undefined) {
            lat = ele.lat
            lng = ele.lng
        }
    } else if (args.length >= 2) {
        lng = args[0]
        lat = args[1]
    } else {
        throw 'Invalid parama for Lnglat!'
    }
    this.lng = lng % 360
    this.lat = lat
}
Lnglat.prototype = {
    constructor: Lnglat,
    // 变换为绘图坐标
    transToPoint: function () {},
    // 到某点的距离
    distanceTo: function (other) {}
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bound__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Bound__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_index__ = __webpack_require__(29);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__grid_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__grid_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vector_index__ = __webpack_require__(32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__vector_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__vector_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__vector_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__vector_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__vector_index__["e"]; });




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IGeometry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_IRender__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Bound__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geo_GeoJson__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_Util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_Event__ = __webpack_require__(9);







/**
 * 几何类型接口
 */

var IGeometry = __WEBPACK_IMPORTED_MODULE_0__map_IRender__["a" /* IRender */].extend({
    name: 'IGeometry',
    supers: [__WEBPACK_IMPORTED_MODULE_1__core_index__["b" /* Item */]],
    /**
     * 创建几何要素
     * 参数需要为标准GeoJson格式或者coordinates数组
     */
    constructor: function (config) {
        this.id = ''
        // 属性
        this.properties = {}
        // 几何类型及坐标点
        this.geometry = {}
        // new GeoJson({
        //     type: GeoType.Feature,
        //     coordinates: []
        // })
        var _bound = new __WEBPACK_IMPORTED_MODULE_2__Bound__["a" /* Bound */]()
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

        // 是否在视口范围内
        this.defProp('isIinView', {
            get: () => {
                return this.parent && this.parent.parent ? this.bound.intersectWith(this.parent.parent.viewBound) : false
            }
        })
        // 是否需要渲染:可视且在被渲染范围内
        this.defProp('isNeedRender', {
            get: () => {
                return this.visable && (this.parent && this.parent.parent ? this.bound.intersectWith(this.parent.parent.renderBound) : false)
            }
        })

        // 初始化鼠标事件
        this.on(__WEBPACK_IMPORTED_MODULE_5__events_Event__["b" /* EventType */].menter, function (mpos) {
            this.isMousehover = true
            this.parent.parent.container.style['cursor'] = 'pointer'
        })
        this.on(__WEBPACK_IMPORTED_MODULE_5__events_Event__["b" /* EventType */].mleave, function (mpos) {
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
            this.parent.bound.extend(this.bound)
            return this
        },
        // 从父容器中移除
        remove: function () {
            if (this.parent) {
                this.parent.geometryAry.remove(this)
                this.parent.updateBound()
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
        // 投影
        project: function (crs) {
            throw `function project of ${this.name} is unrealized`
        }
    }
})



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EventType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Class__ = __webpack_require__(1);
/**
 * 事件类
 * by BuggMaker
 */



/**
 * Class Event(Object:target,EventType || String:type,function:callback,bool:once)
 * 事件数据结构
 * 记录事件的目标对象,类型.是否执行一次,回调函数
 * 参数:触发事件的对象/事件类型/回调函数/是否只执行一次
 */
var Event = function (target, type, callback, once = false) {
    this.target = target
    this.type = type
    this.once = once
    this.callback = callback
} //)

/**
 * 事件类型枚举
 */
const EventType = {
    mclick: 0,
    mdbclick: 2,
    mmove: 4,
    mdown: 6,
    mdrag: 8,
    menter: 10,
    mhover: 12,
    mleave: 14,
    mup: 16,
    kup: 1,
    kdown: 3,
    kleft: 5,
    kright: 7,
    update:100
}

/**
 * 导出模块
 */


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Size__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__Size__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Class__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Item__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Item__["a"]; });






/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * 对象工具类 
 * by 倒霉蛋儿
 */

/**
 * @function extend(object:des,any:...props)
 * 对象属性扩展
 */
const extend = function (des, ...props) {
    if (des) {
        props.forEach(arg => {
            for (const key in arg) {
                // if (arg.hasOwnProperty(key)) {
                des[key] = arg[key]
                // }
            }
        })
    }
    return des
}
/* harmony export (immutable) */ __webpack_exports__["extend"] = extend;


// /**
//  * @function merge(Object:des,any:...props)
//  * 对象属性合并,取并集
//  */
// export const merge = function (des, ...props) {

// }
/**
 * @function replace(Object:des,any:...props)
 * 对象属性替换 和extend区别???
 */
const replace = function (des, ...props) {
    if (des) {
        props.forEach(arg => {
            for (const key in arg) {
                if (typeof des[key] !== 'undefined') {
                    des[key] = arg[key]
                }
            }
        })
    }
}
/* harmony export (immutable) */ __webpack_exports__["replace"] = replace;


const copy = function (s) {
    var res = {}
    for (const key in s) {
        if (s.hasOwnProperty(key)) {
            res[key] = s[key];
        }
    }
    return res
}
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;

// //废弃
// inherit1: function (base) {
//     var sub = this.constructor
//     var pro = Object(base.prototype)
//     pro.constructor = sub
//     sub.prototype = pro

//     for (const key in base) {
//         if (base.hasOwnProperty(key)) {
//             sub[key] = base[key]
//         }
//     }
//     sub.base = base
//     return sub
// },
// /**
//  * @function inherit(function:SubClass,any:...bases)
//  * 多继承:SubClass继承bases中多个类别    
//  * 手段:分别合并类型的实例属性和静态属性 
//  */
// inherit: function (sub, ...bases) {
//     var pro = {}
//     bases.forEach(base => {
//         pro = this.extend(pro, Object(base.prototype))
//         //继承静态属性
//         this.extend(sub, base)
//     })

//     pro.constructor = sub
//     sub.prototype = pro

//     sub.base = bases
//     return sub
// }


/**
 * @function instanceof(Object:S,function:T)
 * 判断S是否为T的实例
 * 由于该继承方式,不能通过系统instanceof方法判断类别
 * 暂时通过以下两点判断:
 * 1.判断实例对象是否拥有目标类型的实例属性 
 * 2.判断实例对象的构造函数是否拥有目标类型的静态属性
 */
const isInstanceOf = function (S, T) {
    var target = new T()
    //盘算实例属性
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            if (S[key] !== target[key] && S[key] === undefined) {
                return false
            }
        }
    }
    //公共属性
    for (const key in T.prototype) {
        if (T.prototype.hasOwnProperty(key)) {
            if (!S.__proto__[key])
                return false
        }
    }
    //判断静态属性    
    for (const key in T) {
        if (T.hasOwnProperty(key) && key !== '__base__') {
            if (!existsStaticProp(S, key))
                return false
        }
    }

    function existsStaticProp(src, key) {
        if (src.__proto__.constructor[key] !== T[key] && S.__proto__.constructor[key] === undefined) {
            src = src.__proto__
            return existsStaticProp(src, key)
        }
        return true
    }
    return true
}
/* harmony export (immutable) */ __webpack_exports__["isInstanceOf"] = isInstanceOf;

/**
 * @function definProp(Object:des,String:key,any:value,Object:customer)
 * 定义属性
 * customer为自定义get和set,使用'=>'表达式
 * {
 *   get:(val)=>{ do soming and return the changed val },
 *   set:(val)=>{ do soming and return the changed val }
 * }
 */
const defineProp = function (des, key, customer) {
    Object.defineProperty(des, key, {
        enumerable: customer.enumerable || true,
        configurable: customer.configurable || true,
        get: function () {
            if (customer.get) {
                return customer.get()
            } else {
                throw `property ${key} define error,lack of getter!`
            }
        },
        set: function (newValue) {
            if (customer.set) {
                if (des[key] !== newValue) {
                    customer.set(newValue)
                    // 属性变化钩子函数
                    this.fire(key + 'change',newValue)
                }
            } else {
                throw `property ${key} is readonly!`
            }
        }
    })
}
/* harmony export (immutable) */ __webpack_exports__["defineProp"] = defineProp;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Class__ = __webpack_require__(1);


/**
 * 子元素
 * 如图层/要素等需要加入父容器的子元素
 */

var Item = __WEBPACK_IMPORTED_MODULE_0__Class__["a" /* Class */].extend({
    name:'Item',
    constructor:function(){
        this.parent = null
    },
    publics:{
        // 添加至父容器
        addTo:function(parent){
            throw  `function 'addTo' of ${this.name} is unrealized`
        },
        // 从父容器移除
        remove:function(){
            throw  `function 'remove' of ${this.name} is unrealized`   
        }
    }
})


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Event__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Event__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Evented__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Evented__["a"]; });




/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IRender; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(0);
/**
 * 地图渲染接口
 * 主要包括图形的样式属性及绘图函数
 * by BuggMaker
 */




var IRender = __WEBPACK_IMPORTED_MODULE_0__events_index__["b" /* Evented */].extend({
  name: "IRender",
  constructor: function(config) {
    //样式对象
    //可以办函绘图上下文所支持所有样式
    //如fillStyle/strokeStyle/lineWidth等等
    var _style = config.style || {
      fillStyle: "dodgerblue",
      strokeStyle: "forestgreen",
      lineJoin: "round",
      lineCap: "round",
      textAlign: "center",
      textBaseLine: "middle"
    };
    this.defProp("style", {
      get: () => {
        return _style;
      },
      set: val => {
        __WEBPACK_IMPORTED_MODULE_1__index__["UtilObj"].extend(_style, val);
      }
    });
    delete config.style;
    // 鼠标捕获后的样式
    var _interactiveStyle = config.interactiveStyle || {
      fillStyle: "forestgreen",
      strokeStyle: "dodgerblue",
      lineJoin: "round",
      lineCap: "round",
      font: "32px Arial"
    };
    this.defProp("interactiveStyle", {
      get: () => {
        return _interactiveStyle;
      },
      set: val => {
        __WEBPACK_IMPORTED_MODULE_1__index__["UtilObj"].extend(_interactiveStyle, val);
      }
    });
    delete config.interactiveStyle;
    //是否可交互
    this.interactive = config.interactive || false;
    delete config.interactive;
    // 相对于stroke,渲染时是否以某颜色填充(针对面状图形)
    this.fill = config.fill || false;
    delete config.fill;
    // 描边
    this.stroke = config.stroke || true;
    delete config.stroke;

    // 可视性
    var _vis = config.visable || true;
    this.defProp("visable", {
      get: () => {
        return _vis;
      },
      set: val => {
        _vis = val;
      }
    });
    delete config.visable;
  },
  publics: {
    /**
     * @function draw(Object:ctx)
     * 绘图函数
     * @param:绘图上下文
     */
    render: function(ctx) {
      throw "function 'render' unrealized";
      // if (!ctx) throw 'ctx is unavaliable!'
      // for (const key in this.style) {
      //     if (style.hasOwnProperty(key)) {
      //         ctx[key] = style[key];
      //     }
      // }
    }
  }
});




/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Size; });
/**
 * 尺寸大小类
 * @param {Number} width 
 * @param {Number} height 
 */
var Size = function (width, height) {
    this.width = width
    this.height = height
}



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isArray;
function isArray(ary) {
    return ary instanceof Array || Array.isArray(ary)
}

Array.prototype.remove = function (item) {
    var index = this.indexOf(item)
    this.splice(index, 1)
    return this
}

String.prototype.split1 = function (str, NoEmpty = true) {
    var res = this.split(str)
    if (NoEmpty) {
        for (let index = 0; index < res.length;) {
            if (res[index].length == 0) {
                res.splice(index, 1)
            } else {
                index++
            }
        }
    }
    return res
}

String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}
String.format = function () {
    if (arguments.length == 0)
        return null;

    var str = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GeoType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);


/**
 * GeoJson类
 * 检测GeoJso数据格式是否正确
 * @param {GeoJson} data 
 */
var GeoJson = function (data) {
    if (!GeoType[data.type]) throw `not format GeoJson, wrong 'type'`
    this.type = data['type']
    switch (this.type) {
        case GeoType.FeatureColledtion:
            var features = data['features']
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__index__["isArray"])(features)) throw `not format GeoJson, wrong 'features'`
            this.features = []
            features.forEach(feature => {
                this.features.push(new GeoJson(feature))
            });
            break
        case GeoType.GeometryCollection:
            var geometries = data['geometries']
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__index__["isArray"])(geometries)) throw `not format GeoJson, wrong 'geometries'`
            this.geometries = []
            geometries.forEach(feature => {
                this.geometries.push(new GeoJson(feature))
            });
            break
        case GeoType.Feature:
            var geometry = data['geometry']
            if (!geometry) throw `not format GeoJson, wrong 'geometry'`
            for (const key in data) {
                if (data.hasOwnProperty(key) && key !== 'geometry') {
                    this[key] = data[key]
                }
            }
            this.geomrtry = new GeoJson(geometry)
            break
        case GeoType.Point:
        case GeoType.MultiPoint:
        case GeoType.LineString:
        case GeoType.MultiLineString:
        case GeoType.Polygon:
        case GeoType.MultiPolygon:
            var coordinates = data['coordinates']
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__index__["isArray"])(coordinates)) throw `not format GeoJson, wrong 'coordinates'`
            this.coordinates = coordinates
            break
    }
}

GeoJson.check = function (data) {
    try {
        var gj = new GeoJson(data)
    } catch (e) {
        return false
    }
    return true
}

var GeoType = {
    Point: 'Point',
    MultiPoint: 'MultiPoint',
    LineString: 'LineString',
    MultiLineString: 'MultiLineString',
    Polygon: 'Polygon',
    MultiPolygon: 'MultiPolygon',
    Feature: 'Feature',
    FeatureColledtion: 'FeatureColledtion',
    GeometryCollection: 'GeometryCollection'
}



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Map__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layer__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Layer__["a"]; });



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Square; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector_Rectangle__ = __webpack_require__(30);



/**
 * 正方形格网
 */

var Square = __WEBPACK_IMPORTED_MODULE_0__vector_Rectangle__["a" /* Rectangle */].extend({
    name:'Square',
    /**
     * 正方形
     * @param [Point] origin 右上角点
     */
    constructor: function (origin, width) {
        // 边长
        this.height = width
    },
    publics: {
    }
})

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Segment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IGeometry__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Point__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_Canvas__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Bound__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geo_Lnglat__ = __webpack_require__(6);







/**
 * 线段
 */

var Segment = __WEBPACK_IMPORTED_MODULE_0__IGeometry__["a" /* IGeometry */].extend({
    name: 'Segment',
    constructor: function (config) {
        if (!config.from) throw 'Segment config lack of from'
        if (!config.to) throw 'Segment config lack of to'
        var _from = new __WEBPACK_IMPORTED_MODULE_1__Point__["a" /* Point */](),
            _to = new __WEBPACK_IMPORTED_MODULE_1__Point__["a" /* Point */]()
        this.defProp('from', {
            get: () => {
                return _from
            },
            set: (val) => {
                _from = val
            }
        })
        this.defProp('to', {
            get: () => {
                return _to
            },
            set: (val) => {
                _to = val
            }
        })
        // 线宽
        this.defProp('width', {
            get: () => {
                return this.style.lineWidth
            },
            set: (val) => {
                this.style.lineWidth = val
            }
        })
        // 长度
        this.defProp('length', {
            get: () => {
                var disY = this.from.y - this.to.y,
                    disX = this.from.x - this.to.x
                return this.Math.sqrt(disX * disX + disY + disY)
            }
        })
        this.on('fromchange tochange', _calBound)

        // 参数赋值
        this.from = new __WEBPACK_IMPORTED_MODULE_1__Point__["a" /* Point */](config.from)
        delete config.from
        this.to = new __WEBPACK_IMPORTED_MODULE_1__Point__["a" /* Point */](config.to)
        delete config.to

        __WEBPACK_IMPORTED_MODULE_2__index__["UtilObj"].extend(this, config)

        function _calBound() {
            this.bound = new __WEBPACK_IMPORTED_MODULE_4__Bound__["a" /* Bound */](this.from, this.to)
            this.bound.expand(this.width / 2)
        }
    },
    publics: {
        render: function (ctx) {
            __WEBPACK_IMPORTED_MODULE_3__map_Canvas__["b" /* Graphics */].line(ctx, this.from, this.to)
            return this
        },
        containsPoint: function (point, tolerance) {
            if (!this.bound.containsPoint(point)) return false
            var disY = this.from.y - this.to.y,
                disX = this.from.x - this.to.x,
                t = this.width / 2 + (tolerance || this.tolerance)
            if (disX == 0) {
                if (Math.abs(point.x - this.from.x) <= t) return true
            } else {
                var k = disY / disX,
                    b = this.from.y - k * this.from.x
                if (k == 0) {
                    if (Math.abs(point.y - this.from.y) <= t) return true
                } else {
                    var tmpY = k * point.x + b
                    if (Math.abs(tmpY - point.y) <= t) return true
                }
            }
            return false
        },
        project: function (crs) {
            this.from = crs.lnglatToMapPoint(new __WEBPACK_IMPORTED_MODULE_5__geo_Lnglat__["a" /* Lnglat */](this.from.x, this.from.y))
            this.to = crs.lnglatToMapPoint(new __WEBPACK_IMPORTED_MODULE_5__geo_Lnglat__["a" /* Lnglat */](this.to.x, this.to.y))
            return this
        }
    }
})



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Polyline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IGeometry__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Segment__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Bound__ = __webpack_require__(4);





/**
 * 折线
 */
var Polyline = __WEBPACK_IMPORTED_MODULE_0__IGeometry__["a" /* IGeometry */].extend({
    name: 'Polyline',
    constructor: function (config) {
        if (!config.points || !Object(__WEBPACK_IMPORTED_MODULE_1__index__["isArray"])(config.points)) throw `wrong param 'points' of Polyline constructor`
        // 线段集合
        var _segments = []
        this.defProp('segments', {
            get: () => {
                return _segments
            },
            set: val => {
                _segments = val
            }
        })

        // 线宽
        this.defProp('width', {
            get: () => {
                return this.style.lineWidth
            },
            set: (val) => {
                this.style.lineWidth = val
            }
        })
        // 长度
        this.defProp('length', {
            get: () => {
                var length = 0
                this.segments.forEach(seg => {
                    length += seg.length
                })
                return length
            }
        })
        this.on('segmentschange', _calBound)
        // 参数赋值
        var coordinates = config.points
        delete config.points
        coordinates.forEach(ary1 => {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__index__["isArray"])(ary1[0][0])) {
                this.multiple = true
                ary1.forEach(ary2 => {
                    var segs = create(ary2)
                    this.parts.push(segs)
                    this.segments = this.segments.concat(segs)
                })
            } else {
                this.segments = create(ary1)
            }

            function create(ary) {
                var segs = []
                for (let i = 0; i < ary.length - 1; i++) {
                    var seg = new __WEBPACK_IMPORTED_MODULE_2__Segment__["a" /* Segment */]({
                        from: ary[i],
                        to: ary[i + 1]
                    })
                    __WEBPACK_IMPORTED_MODULE_1__index__["UtilObj"].extend(seg, config)
                    segs.push(seg)
                }
                return segs
            }
        })
        __WEBPACK_IMPORTED_MODULE_1__index__["UtilObj"].extend(this, config)

        function _calBound() {
            this.segments.forEach(seg => {
                this.bound.extend(seg.bound)
            })
        }
    },
    publics: {
        render: function (ctx) {
            this.segments.forEach(seg => {
                seg.render(ctx)
            })
            return this
        },
        containsPoint: function (point) {
            var rel = false
            if (this.multiple) {
                this.parts.forEach(segs => {
                    rel = rel ? rel : contain(segs)
                })
            } else {
                rel = contain(this.segments)
            }
            return rel

            function contain(segs) {
                for (let i = 0; i < segs.length; i++) {
                    const seg = this.segments[i];
                    if (seg.containsPoint(point)) return true
                }
                return false
            }
        },
        project: function (crs) {
            this.bound = new __WEBPACK_IMPORTED_MODULE_3__Bound__["a" /* Bound */]()
            this.segments.forEach(seg => {
                seg.project(crs)
                this.bound.extend(seg.bound)
            })
            return this
        }
    }
})



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SquareCoord__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__SquareCoord__["a"]; });


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IRender__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geometry_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Canvas__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Item__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_Event__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(0);
/**
 * 图层类
 * by BuggMaker
 */







var Layer = __WEBPACK_IMPORTED_MODULE_0__IRender__["a" /* IRender */].extend({
  name: "Layer",
  supers: [__WEBPACK_IMPORTED_MODULE_3__core_Item__["a" /* Item */]],
  /**
   * @function Layer(Object:options)
   * 图层
   * 参数包括:index,title,style
   */
  constructor: function(config) {
    for (const key in config) {
      if (config.hasOwnProperty(key)) {
        const element = config[key];
        this[key] = element;
        delete config[key];
      }
    }
    //数据范围
    this.bound = new __WEBPACK_IMPORTED_MODULE_1__geometry_index__["a" /* Bound */]();
    //画布
    this.canvas = null;
    //集合要素 数组
    this.geometryAry = [];
    //地图
    this.parent = null;

    // 事件
    this.on(__WEBPACK_IMPORTED_MODULE_4__events_Event__["b" /* EventType */].mmove, function(mpos) {
      var update = false;
      this.geometryAry.forEach(geo => {
        if (!geo.interactive || !geo.isNeedRender) return;
        if (geo.containsPoint(mpos, 0)) {
          if (!geo.isMousehover) {
            geo.fire(__WEBPACK_IMPORTED_MODULE_4__events_Event__["b" /* EventType */].menter, mpos);
            update = true;
          } else {
            geo.fire(__WEBPACK_IMPORTED_MODULE_4__events_Event__["b" /* EventType */].mmove, mpos);
          }
        } else if (geo.isMousehover) {
          geo.fire(__WEBPACK_IMPORTED_MODULE_4__events_Event__["b" /* EventType */].mleave, mpos);
          update = true;
        }
      });
      update && this.render();
    });
  },
  publics: {
    // 添加要素到图层
    addGeometry: function(geometry) {
      //合并范围
      geometry.addTo(this);
      return this;
    },
    clearAll() {
      this.geometryAry = []
      return this
    },
    // 添加图层到地图
    addTo: function(map) {
      if (map) {
        this.parent = map;
        this.parent.layersDic.set(this.index, this);
        this.parent.bound.extend(this.bound);
        this.canvas = new __WEBPACK_IMPORTED_MODULE_2__Canvas__["a" /* Canvas */](this);
      }
      return this;
    },
    // 从地图移除图层
    remove: function() {
      if (this.parent) {
        this.parent.layersDic.delete(this.index);
        this.parent.updateBound();
        this.canvas.remove();
        this.parent = null;
      }
    },
    // 渲染
    render: function() {
      if (this.visable) {
        var ctx = this.canvas.context;
        __WEBPACK_IMPORTED_MODULE_2__Canvas__["b" /* Graphics */].clear(ctx);
        var hoverGeo = [];
        this.geometryAry.forEach(geometry => {
          if (geometry.isNeedRender) {
            if (geometry.isMousehover) {
              hoverGeo.push(geometry);
            } else {
              ctx.save();
              __WEBPACK_IMPORTED_MODULE_5__index__["UtilObj"].replace(ctx, geometry.style);
              geometry.render(ctx);
              ctx.restore();
            }
          }
        });
        hoverGeo.forEach(geometry => {
          if (geometry.isNeedRender) {
            ctx.save();
            __WEBPACK_IMPORTED_MODULE_5__index__["UtilObj"].replace(ctx, geometry.style);
            __WEBPACK_IMPORTED_MODULE_5__index__["UtilObj"].replace(ctx, geometry.interactiveStyle);
            geometry.render(ctx);
            ctx.restore();
          }
        });
      }
      return this;
    },
    setTransform(m) {
      this.canvas.context.lineWidth = 1 / this.parent.crs.viewmatrix.scale;
      this.canvas.context.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);
    },
    updateBound: function() {
      this.bound = new __WEBPACK_IMPORTED_MODULE_1__geometry_index__["a" /* Bound */]();
      this.geometryAry.forEach(geometry => {
        this.bound.extend(geometry.bound);
      });
    }
  },
  statics: {}
});




/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ColorRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ColorRamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return colors; });
/**
 * RGB颜色
 * @param {int} r 0-255
 * @param {int} g 0-255
 * @param {int} b 0-255
 */
var Color = function(r, g, b) {
  if (isNaN(r) || isNaN(g) || isNaN(b)) throw "Wrong r,g,b for Color!";
  this.r = r;
  this.g = g;
  this.b = b;
  Color.valid(this);
};
Color.prototype.toString = function() {
  return `rgb(${r},${g},${b})`;
};
/**
 * Color有效性验证
 * @param {Color} color
 */
Color.valid = function(color) {
  if (!(color instanceof Color)) throw "Wrong Color instance!";

  color.r = valid(color.r);
  color.g = valid(color.g);
  color.b = valid(color.b);

  function valid(val) {
    if (val < 0) val = 0;
    else if (val > 255) val = 255;
    return val;
  }

  return color;
};
/**
 * RGBA颜色 含透明度
 * @param {Number} alpha 0-1
 * @param {int || Color} r,g,b || color
 */
var ColorRGBA = function(alpha, ...args) {
  if (args.length >= 3) {
    this.color = new Color(args[0], args[1], args[2]);
  } else if (args.length == 1 && args[0] instanceof Color) {
    this.color = args[0];
  } else {
    throw "Wrong params for ColorRGBA!";
  }
  this.alpha = alpha;
};
ColorRGBA.prototype.toString = function() {
  return `rgba(${this.color.r},${this.color.g},${this.color.b},${this.alpha})`;
};

/**
 * Color 颜色枚举
 */
var colors = {
  red: new Color(255, 0, 0),
  orange: "orange",
  yellow: "yellow",
  green: new Color(0, 255, 0),
  blue: new Color(0, 0, 255),
  purple: "purple"
};
/**
 * 颜色坡道
 * 默认为'红-橙-黄-绿-蓝'渐变
 * 如果fromColor和toColor不为空,则在两者间渐变
 * @param {Number} alpha 0-1
 * @param {Color} fromColor
 * @param {Color} toColor
 */
var ColorRamp = function(alpha, fromColor, toColor) {
  this.alpha = alpha || 1;
  this.fromColor = fromColor;
  this.toColor = toColor;
};
/**
 * 取颜色值
 * @param {Number} val 0-100
 */
ColorRamp.prototype.getColor = function(val) {
  var r = 0,
    g = 0,
    b = 0;
  if (this.fromColor && this.toColor) {
    var disR = this.fromColor.r - this.toColor.r,
      disG = this.fromColor.g - this.toColor.g,
      disB = this.fromColor.b - this.toColor.b;
    r = Math.round(this.fromColor.r - disR / 100 * val);
    g = Math.round(this.fromColor.g - disG / 100 * val);
    b = Math.round(this.fromColor.b - disB / 100 * val);
  } else {
    if (val < 25) {
      b = 255;
      g = val * 10;
    } else if (val >= 25 && val < 50) {
      b = 255 - (val - 25) * 10;
      g = 255;
    } else if (val >= 50 && val < 75) {
      g = 255;
      r = (val - 50) * 10;
    } else if (val >= 75 && val <= 100) {
      g = 255 - (val - 75) * 10;
      r = 255;
    }
  }
  var resultColor = new Color(r, g, b);
  if (this.alpha !== undefined) return new ColorRGBA(this.alpha, resultColor);
  else return resultColor;
};




/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = myFetch;
/**
 * 异步请求
 * @param {String} url : 请求路径
 * @param {Obje} options : 请求配置信息,如下
 * method(请求方法):'GET' || 'POST'
 * hedaers(请求头): new Headers() || {key,val}
 * credentials(强制带Cookie):'omit' || 'include'
 * data(参数): {key,val} || [[key,val]]
 */
function myFetch(url, options) {
  let init = {};
  init.method = options.method || "GET";
  init.headers = options.headers || {};
  init.credentials = options.credentials || "omit";

  // 跨域?
  // init.mode = options.mode || "cors";

  if (init.method.toUpperCase() === "GET" && options.data) {
    // 可以直接通过二维Array或者Object实例得到查询部分的URL
    // let paramsAry = Object.keys(options.data).map(key => {
    //   return [key, options.data[key]];
    // });
    url += `?${new URLSearchParams(options.data).toString()}`;
  } else if (init.method.toUpperCase() === "POST") {
    init.body = options.data || {};
  }
  // 请求的返回值类型
  const responseType = options.responseType || "";
  return fetch(url, init).then(res => {
    if (res.ok) {
      // 根据返回类型 返回不同的数据形式
      switch (responseType) {
        case "blob":
          return res.blob();
          break;
        case "json":
          return res.json();
          break;
        case "formData":
          return res.formData();
          break;
        case "arrayBuffer":
          return res.arrayBuffer();
        case "":
        case "text":
          return res.text();
      }
    }
  });
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Evented; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Class__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(0);
/**
 * 事件集合类
 * by BuggMaker
 */





/**
 * Class Events
 * 事件集合类
 * 注意:callback函数必须是function类型,不可以是lambda表达式
 */
var Evented = __WEBPACK_IMPORTED_MODULE_0__core_Class__["a" /* Class */].extend({
    name: 'Evented',
    constructor: function () {
        // 事件字典
        // key为事件类型,value为Event对象
        this.eventsDic = new window.Map()
    },
    publics: {
        /**
         * funtion on(EventType || String || Array:types,function:callback,bool:once)
         * 绑定事件
         * 参数:时间类型/回调函数/是否只执行一次
         */
        on: function (types, callback, once = false) {
            var targetTypes = []
            if (typeof types === 'string') {
                types = types.split1(' ')
                types.forEach(tn => {
                    if (__WEBPACK_IMPORTED_MODULE_1__Event__["b" /* EventType */][tn])
                        targetTypes.push(__WEBPACK_IMPORTED_MODULE_1__Event__["b" /* EventType */][tn])
                    else
                        targetTypes.push(tn)
                })
            } else if (Object(__WEBPACK_IMPORTED_MODULE_3__index__["isArray"])(types)) {
                types.forEach(tn => {
                    if (__WEBPACK_IMPORTED_MODULE_1__Event__["b" /* EventType */][tn])
                        targetTypes.push(__WEBPACK_IMPORTED_MODULE_1__Event__["b" /* EventType */][tn])
                    else
                        targetTypes.push(tn)
                })
            } else if (typeof types === 'number') {
                targetTypes.push(types)
            }
            targetTypes.forEach(t => {
                let ary = []
                if (this.eventsDic.has(t)) {
                    ary = this.eventsDic.get(t)
                }
                let ev = new __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* Event */](this, t, callback, once)
                ary.push(ev)
                this.eventsDic.set(t, ary)
            })
            return this
        },
        /**
         * funtion once(EventType:type,function:callback)
         * 绑定事件 只执行一次
         * 参数:时间类型/回调函数
         */
        once: function (type, callback) {
            this.on(type, callback, true)
        },
        /**
         * function off(EventType:type,function:fn)
         * 移除事件绑定
         * 参数:事件类型/函数
         */
        off: function (type, ...callbacks) {
            if (callbacks.length > 0) {
                callbacks.forEach(fn => {
                    var evAry = this.get(type)
                    for (let index = 0; index < evAry.length; index++) {
                        const ev = evAry[index];
                        if (ev.callback === fn) {
                            evAry.splice(index, 1)
                            index--
                            break
                        }
                    }
                });
            } else {
                this.eventsDic.delete(type)
            }
        },
        /**
         * function fire(EventType:type)
         * 触犯函数
         * 参数:函数类型
         */
        fire: function (type, ...content) {
            var evAry = this.get(type)
            for (let index = 0; index < evAry.length; index++) {
                const ev = evAry[index];
                //执行回调函数
                ev.callback.apply(this, content)
                if (ev.once) {
                    evAry.splice(index)
                    index--
                }
            }
        },
        /**
         * function exists(EventType:type)
         * 判断事件函数是否存在
         * 参数:事件类型
         */
        exists: function (type) {
            return this.eventsDic.has(type) && this.eventsDic.get(type).length > 0
        },
        /**
         * function get(EventType:type)
         * 获取事件回调函数数组
         * 参数:时间类型
         */
        get: function (type) {
            return this.exists(type) ? this.eventsDic.get(type) : []
        }
    },
    statics: {

    }
})

/**
 * 导出模块
 */


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GeoJson__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__GeoJson__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__GeoJson__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Lnglat__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__Lnglat__["a"]; });



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Map; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IRender__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geo_prj_CRS__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geometry_vector_Point__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geo_Lnglat__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8____ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geo_prj_coords__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__TileLayer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Canvas__ = __webpack_require__(3);
/**
 * 地图
 * 作为一个容器,本质是一个div标签,
 * 其包含不同的图层以及具有一定功能的DOM元素 
 * by BuggMaker
 */














let Map = __WEBPACK_IMPORTED_MODULE_2__IRender__["a" /* IRender */].extend({
    name: 'Map',
    // 其他待继承的父类
    constructor: function (config) {
        // 创建div标签，并加入父容器
        if (!config.cid) throw 'lack of container id cid'
        this.parent = _add2Parent.call(this, config.cid)
        // 图层字典
        this.layersDic = new window.Map()
        // 参考系 暂时为 web mecrator
        this.crs = new __WEBPACK_IMPORTED_MODULE_5__geo_prj_CRS__["a" /* CRS */]()
        // 数据范围
        this.bound = new __WEBPACK_IMPORTED_MODULE_0__geometry_index__["a" /* Bound */]()
        // 视口范围
        this.defProp('viewBound', {
            get: () => {
                var lt = this.crs.screenPointToMapPoint(new __WEBPACK_IMPORTED_MODULE_6__geometry_vector_Point__["a" /* Point */](0, 0)),
                    rb = this.crs.screenPointToMapPoint(new __WEBPACK_IMPORTED_MODULE_6__geometry_vector_Point__["a" /* Point */](this.clientSize.width, this.clientSize.height))
                return new __WEBPACK_IMPORTED_MODULE_0__geometry_index__["a" /* Bound */](lt, rb)
            }
        })
        // 绘图范围
        this.defProp('renderBound', {
            get: () => {
                var offset = 100 / this.crs.viewmatrix.scale,
                    tmpPt = new __WEBPACK_IMPORTED_MODULE_6__geometry_vector_Point__["a" /* Point */](offset, offset)
                var lt = this.viewBound.leftTop.reduce(tmpPt),
                    rb = this.viewBound.rightBottom.plus(tmpPt)
                return new __WEBPACK_IMPORTED_MODULE_0__geometry_index__["a" /* Bound */](lt, rb)
            }
        })
        // 视口中心
        this.defProp('center', {
            get: (val) => {
                return this.viewBound.center
            },
            set: (val) => {
                var dis = this.center.reduce(new __WEBPACK_IMPORTED_MODULE_6__geometry_vector_Point__["a" /* Point */](val)),
                    lt = this.viewBound.leftTop.reduce(dis),
                    rb = this.viewBound.rightBottom.reduce(dis)
                this.viewBound = new __WEBPACK_IMPORTED_MODULE_0__geometry_index__["a" /* Bound */](lt, rb)
            }
        })
        // 地图层级
        var _level = -1
        this.defProp('level', {
            get: () => {
                return _level
            },
            set: val => {
                _level = val
            }
        })
        this.on('levelchange', function () {
            if (this.tileLayer)
                this.tileLayer.level = this.level
        })
        // 瓦片地图
        if (config.tile) {
            this.tileLayer = new __WEBPACK_IMPORTED_MODULE_10__TileLayer__["a" /* TileLayer */]({
                index: 0,
                title: 'Tile Layer',
                urlTemplate: config.tile
            }).addTo(this)
        }

        this.rendering = false
        this.firstRender = true

        // 获取父容器
        // 创建div、设置样式/尺寸并添加至父容器
        // 绑定事件
        function _add2Parent(parentId) {
            let parent = document.getElementById(parentId)
            if (!parent)
                throw 'parent tag not exists'
            let width = parent.clientWidth || 300,
                height = parent.clientHeight || 150;

            //div标签大小
            this.clientSize = new __WEBPACK_IMPORTED_MODULE_4__core_index__["c" /* Size */](width, height)

            let mapDiv = document.createElement('div')
            mapDiv.style.width = width + 'px'
            mapDiv.style.height = height + 'px'
            mapDiv.id = 'aiMap'
            mapDiv.style.position = 'relative'
            parent.appendChild(mapDiv)
            // 容器
            this.container = mapDiv
            //绑定事件
            for (const key in parent) {
                if (key.substr(0, 2) === 'on') {
                    if (this[key])
                        parent[key] = (e) => {
                            this[key](e)
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
        setCenter: function (mpt, level) {
            // var mpt = this.crs.getMapPoint(new Lnglat(lnglat)), 1, 0)
            this.transform(this.center.x - mpt.x, this.center.y - mpt.y, 1, 0)
            this.zoom(mpt, Math.pow(2, level || this.level))
            return this
        },
        setCenterLngLat: function (lnglat, level) {
            var mpt = this.getMapPoint(new __WEBPACK_IMPORTED_MODULE_7__geo_Lnglat__["a" /* Lnglat */](lnglat))
            this.setCenter(mpt, level)
            return this
        },
        // 渲染图层
        render: function () {
            if (this.rendering) return
            this.rendering = true

            if (this.firstRender) {
                this.setCenterLngLat([0, 0])
                this.firstRender = false
            }
            // 渲染图层
            this.layersDic.forEach(ly => {
                ly.render()
            });
            // 最后渲染图名/图例层,待补充

            this.rendering = false
            return this
        },
        // 通过经纬度得到地图点
        getMapPoint(...lnglat) {
            return this.crs.lnglatToMapPoint(new __WEBPACK_IMPORTED_MODULE_7__geo_Lnglat__["a" /* Lnglat */](...lnglat))
        },
        // 通过屏幕点得到经纬度
        getLnglat(mpos) {
            return this.crs.screenPointToLnglat(mpos)
        },
        // 鼠标移动事件
        onmousemove: function (e) {
            var eType = __WEBPACK_IMPORTED_MODULE_3__events_index__["a" /* EventType */].mmove
            if (this.isMousedown && !this.isMousedrag) {
                this.isMousedrag = true
                eType = __WEBPACK_IMPORTED_MODULE_3__events_index__["a" /* EventType */].mdrag
            }
            var mpos = new __WEBPACK_IMPORTED_MODULE_6__geometry_vector_Point__["a" /* Point */](e.offsetX, e.offsetY)
            var mapPos = this.crs.screenPointToMapPoint(mpos)
            // 触发鼠标移动或拖拽事件
            this.fire(eType, mapPos)
            this.layersDic.forEach(ly => {
                ly.fire(eType, mapPos)
            })
        },
        // 鼠标滚轮事件
        onmousewheel: function (e) {
            var mpos = new __WEBPACK_IMPORTED_MODULE_6__geometry_vector_Point__["a" /* Point */](e.offsetX, e.offsetY),
                mapPos = this.crs.screenPointToMapPoint(mpos)
            if (e.wheelDelta > 0) {
                this.zoom(mapPos, 2)
            } else {
                this.zoom(mapPos, 1 / 2)
            }
        },
        // 鼠标点下事件
        onmousedown: function (e) {
            var downDate = Date.now()
            this.isMousedown = true
            var mpos = new __WEBPACK_IMPORTED_MODULE_6__geometry_vector_Point__["a" /* Point */](e.offsetX, e.offsetY),
                startPos = this.crs.screenPointToMapPoint(mpos),
                totalOffset = new __WEBPACK_IMPORTED_MODULE_6__geometry_vector_Point__["a" /* Point */](0, 0)
            // 触发点击事件
            this.fire(__WEBPACK_IMPORTED_MODULE_3__events_index__["a" /* EventType */].mdown, startPos, downDate)
            this.layersDic.forEach(ly => {
                ly.fire(__WEBPACK_IMPORTED_MODULE_3__events_index__["a" /* EventType */].mdown, startPos, downDate)
            })
            // 绑定鼠标拖拽事件
            this.on(__WEBPACK_IMPORTED_MODULE_3__events_index__["a" /* EventType */].mdrag, function (endPos) {
                var offset = endPos.reduce(startPos)
                this.isMousedrag = false
                this.transform(offset.x, offset.y, 1, 0)
                totalOffset = totalOffset.plus(offset)
            })
            // 绑定鼠标弹起事件
            this.on(__WEBPACK_IMPORTED_MODULE_3__events_index__["a" /* EventType */].mup, function (endPos, upDate) {
                var disDate = upDate - downDate;
                if (disDate > 1000 * 0.3) return
                var vx = Math.abs(totalOffset.x) / disDate,
                    vy = Math.abs(totalOffset.y) / disDate,
                    ax = vx / 60,
                    ay = vy / 60,
                    dirx = totalOffset.x > 0 ? 1 : -1,
                    diry = totalOffset.y > 0 ? 1 : -1;
                this.off(__WEBPACK_IMPORTED_MODULE_3__events_index__["a" /* EventType */].mup)


                var self = this,
                    animating = false
                frame()

                function frame() {
                    animating = true
                    vx -= ax
                    vy -= ay

                    vx = vx <= 0 ? 0 : vx
                    vy = vy <= 0 ? 0 : vy

                    if (vx == 0 && vy == 0 || !animating) {
                        return
                    }

                    self.transform(vx * dirx, vy * diry, 1, 0)
                    requestAnimationFrame(frame)
                }
            })
        },
        onmouseup: function (e) {
            var upDate = Date.now()
            var mpos = new __WEBPACK_IMPORTED_MODULE_6__geometry_vector_Point__["a" /* Point */](e.offsetX, e.offsetY),
                mapPos = this.crs.screenPointToMapPoint(mpos)
            this.isMousedown = false
            // 解除鼠标拖拽事件
            this.off(__WEBPACK_IMPORTED_MODULE_3__events_index__["a" /* EventType */].mdrag)
            this.fire(__WEBPACK_IMPORTED_MODULE_3__events_index__["a" /* EventType */].mup, mapPos, upDate)
            this.layersDic.forEach(ly => {
                ly.fire(__WEBPACK_IMPORTED_MODULE_3__events_index__["a" /* EventType */].mup, mapPos, upDate)
            })
        },
        // 视图变换
        transform: function (disX, disY, scale, rotate, reRender = true) {
            this.crs.transform(disX, disY, scale, rotate)
            this.layersDic.forEach(ly => {
                ly.setTransform(this.crs.viewmatrix.matrix)
            })
            this.level = Math.log2(this.crs.viewmatrix.scale / (128 / this.crs.projection.PI_R))
            if (reRender)
                this.render()
        },
        // 视图缩放
        zoom(center, scale) {
            this.transform(center.x * (1 / scale - 1), center.y * (1 / scale - 1), scale, 0)
        },
        project(crs) {
            if (crs) this.crs = crs
            this.transform(0, 0, 128 / this.crs.projection.PI_R, 0)
            return this
        },
        updateBound: function () {
            this.bound = new __WEBPACK_IMPORTED_MODULE_0__geometry_index__["a" /* Bound */]()
            this.layersDic.forEach(ly => {
                this.bound.extend(ly.bound)
            })
        }
    }
})

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Square__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Square__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tile__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Tile__["a"]; });



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rectangle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IGeometry__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_Canvas__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Point__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(7);
/**
 * 矩形
 */







/**
 * 正方形格网
 */

var Rectangle = __WEBPACK_IMPORTED_MODULE_0__IGeometry__["a" /* IGeometry */].extend({
    name: 'Rectangle',
    /**
     * 矩形
     * @param [Point] origin 右上角点
     */
    constructor: function (origin, width, height) {
        // 起点
        var _origin = new __WEBPACK_IMPORTED_MODULE_2__Point__["a" /* Point */](origin)
        this.defProp('origin', {
            get: () => {
                return _origin
            },
            set: val => {
                _origin = val
            }
        })
        // 宽度
        var _width = !isNaN(width) ? width : 10
        this.defProp('width', {
            get: () => {
                return _width
            },
            set: val => {
                _width = val
            }
        })
        // 高度
        var _height = !isNaN(height) ? height : !isNaN(width) ? width : 10
        this.defProp('height', {
            get: () => {
                return _height
            },
            set: val => {
                _height = val
            }
        })

        // 重新计算边界        
        _calBound.call(this)
        this.on('originchange widthchange heightchange', _calBound)

        function _calBound() {
            var lt = this.origin,
                rb = this.origin.plus({
                    x: this.width,
                    y: this.height
                })
            this.bound = new __WEBPACK_IMPORTED_MODULE_3____["a" /* Bound */](lt, rb)
        }
    },
    publics: {
        render: function (ctx) {
            __WEBPACK_IMPORTED_MODULE_1__map_Canvas__["b" /* Graphics */].rect(ctx, this.origin, this.width, this.height, {
                fill: this.fill,
                stroke: this.stroke
            })
            return this
        },
        containsPoint: function (pt) {
            return this.bound.containsPoint(pt)
        },
        project: function (crs) {
            this.origin = crs.lnglatToMapPoint(new Lnglat(this.origin.x, this.origin.y))
            return this
        }
    }
})

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Square__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_Canvas__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(0);





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

var Tile = __WEBPACK_IMPORTED_MODULE_0__Square__["a" /* Square */].extend({
    name: 'Tile',
    constructor: function (origin, width, config) {
        var _level = config.level || 0
        this.defProp('level', {
            get: () => {
                return _level
            }
        })
        delete config.level
        var _coord = new __WEBPACK_IMPORTED_MODULE_2____["c" /* Point */](config.coord)
        this.defProp('coord', {
            get: () => {
                return _coord
            }
        })
        delete config.coord
        var _imgCoord = new __WEBPACK_IMPORTED_MODULE_2____["c" /* Point */](config.imgCoord)
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
        __WEBPACK_IMPORTED_MODULE_3____["UtilObj"].extend(this, config)
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
                __WEBPACK_IMPORTED_MODULE_1__map_Canvas__["b" /* Graphics */].image(ctx, this.img, this.origin, this.width, this.height)
                if (this.showCoord)
                    __WEBPACK_IMPORTED_MODULE_1__map_Canvas__["b" /* Graphics */].rect(ctx, this.origin, this.width, this.height, {
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

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Point__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Point__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Circle__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Circle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Segment__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__Segment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Polyline__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__Polyline__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Polygon__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__Polygon__["a"]; });






/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Circle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IGeometry__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Point__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_Canvas__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Bound__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geo_Lnglat__ = __webpack_require__(6);







/**
 * 圆
 */

var Circle = __WEBPACK_IMPORTED_MODULE_0__IGeometry__["a" /* IGeometry */].extend({
  name: "Circle",
  /**
   * @function Circle(Point || Lnglat:center, Number:radius, Object:style)
   * 圆形要素
   * 参数:中心坐标,半径,以及渲染样式
   */
  constructor: function(config) {
    if (!config.center) throw "Circle config lack of center";
    // 圆心
    var _center;
    this.defProp("center", {
      get: () => {
        return _center;
      },
      set: val => {
        //if (!val.isInstanceOf(Point)) throw 'new value of center is not instance of Point!'
        _center = new __WEBPACK_IMPORTED_MODULE_1__Point__["a" /* Point */](val);
      }
    });
    // 半径
    if (isNaN(config.radius)) throw "Circle radius is not a Number!";
    var _radius = 0;
    this.defProp("radius", {
      get: () => {
        return _radius;
      },
      set: val => {
        _radius = val;
      }
    });
    // 重新计算边界
    this.on("centerchange radiuschange", _calBound);

    // 参数赋值
    this.center = new __WEBPACK_IMPORTED_MODULE_1__Point__["a" /* Point */](config.center);
    delete config.center;
    __WEBPACK_IMPORTED_MODULE_2__index__["UtilObj"].extend(this, config);

    // 重新计算边界
    function _calBound() {
      var lt = this.center.reduce(new __WEBPACK_IMPORTED_MODULE_1__Point__["a" /* Point */](this.radius, this.radius)),
        rb = this.center.plus(new __WEBPACK_IMPORTED_MODULE_1__Point__["a" /* Point */](this.radius, this.radius));
      this.bound = new __WEBPACK_IMPORTED_MODULE_4__Bound__["a" /* Bound */](lt, rb);
    }
  },
  publics: {
    render: function(ctx) {
      // if (this.fill) {
      __WEBPACK_IMPORTED_MODULE_3__map_Canvas__["b" /* Graphics */].circle(ctx, this.center, this.radius, {
        fill: this.fill,
        stroke: this.stroke
      });
      // }
      // if (this.stroke) {
      //     Graphics.circle(ctx, this.center, this.radius, false)
      // }
      return this;
    },
    containsPoint(point, tolerance) {
      if (!point.isInstanceOf(__WEBPACK_IMPORTED_MODULE_1__Point__["a" /* Point */])) throw "param is not instance of Point";
      return (
        this.bound.containsPoint(point) &&
        this.center.distanceTo(point) <=
          this.radius + (tolerance || this.tolerance)
      );
    },
    project: function(crs) {
      this.center = crs.lnglatToMapPoint(
        new __WEBPACK_IMPORTED_MODULE_5__geo_Lnglat__["a" /* Lnglat */](this.center.x, this.center.y)
      );
      return this;
    }
  }
});




/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Polygon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Polyline__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_UtilObject__ = __webpack_require__(11);



/**
 * 多边形
 */

var Polygon = __WEBPACK_IMPORTED_MODULE_0__Polyline__["a" /* Polyline */].extend({
    name: 'Polygon',
    publics: {
        render: function (ctx) {
            if (this.multiple) {
                this.parts.forEach(segs => {
                    renderPart.call(this,segs)
                });
            } else {
                renderPart.call(this,this.segments)
            }

            function renderPart(segs) {
                ctx.beginPath()
                ctx.moveTo(segs[0].from.x, segs[0].from.y)
                for (let i = 1; i < segs.length; i++) {
                    const seg = segs[i];
                    ctx.lineTo(seg.from.x, seg.from.y)
                }
                ctx.lineTo(segs[0].from.x, segs[0].from.y)
                if (this.stroke) ctx.stroke()
                if (this.fill) ctx.fill()
            }
        },
        containsPoint: function (point, tolerance) {
            let rel = false
            if (this.multiple) {
                this.parts.forEach(segs => {
                    rel = rel ? rel : contain(segs)
                })
            } else {
                rel = contain(this.segments)
            }
            return rel;

            function contain(segs) {
                let rel = false,
                    start = 0,
                    index = segs.length - 1;
                for (let i = start; i < segs.length; i++) {
                    var pre = segs[i].from,
                        next = segs[index].from

                    if (pre.y < point.y && next.y >= point.y ||
                        next.y < point.y && pre.y >= point.y) {
                        if (pre.x + (point.y - pre.y) / (next.y - pre.y) * (next.x - pre.x) < point.x) {
                            rel = !rel;
                        }
                    }
                    index = i;
                }
                return rel
            }
        }
    }
})



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CRS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Class__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WebMecrator__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geometry_vector_Point__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Lnglat__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ViewMartix__ = __webpack_require__(37);






// 坐标参照系
var CRS = __WEBPACK_IMPORTED_MODULE_0__core_Class__["a" /* Class */].extend({
    constructor: function (tileWidth) {
        this.projection = __WEBPACK_IMPORTED_MODULE_1__WebMecrator__["a" /* WebMecrator */]
        this.viewmatrix = new __WEBPACK_IMPORTED_MODULE_4__ViewMartix__["a" /* ViewMartix */]
    },
    publics: {
        /**
         * 经纬度 转 地图坐标
         */
        lnglatToMapPoint: function (lnglat) {
            var PI_R = this.projection.PI_R
            var pt = this.projection.project(lnglat)
            var px = pt.x >= PI_R ? pt.x - PI_R : PI_R + pt.x,
                py = PI_R - pt.y
            pt = new __WEBPACK_IMPORTED_MODULE_2__geometry_vector_Point__["a" /* Point */](px, py)
            return new __WEBPACK_IMPORTED_MODULE_2__geometry_vector_Point__["a" /* Point */](pt.x, pt.y)
        },
        /**
         * 地图坐标 转 经纬度
         */
        mapPointToLnglat: function (point) {
            var PI_R = this.projection.PI_R
            var prjPt = new __WEBPACK_IMPORTED_MODULE_2__geometry_vector_Point__["a" /* Point */](point.x, point.y)
            var px = prjPt.x >= PI_R ? prjPt.x + PI_R : prjPt.x - PI_R,
                py = PI_R - prjPt.y
            return this.projection.unproject(new __WEBPACK_IMPORTED_MODULE_2__geometry_vector_Point__["a" /* Point */](px, py))
        },
        /**
         * 经纬度 转 屏幕坐标
         */
        lnglatToScreenPoint: function (lnglat) {
            var lyPt = this.lnglatToMapPoint(lnglat)
            return this.mapPointToScreenPoint(lypt) //this.viewmatrix.toScreen(lyPt.x,lyPt.y)
        },
        /**
         * 屏幕坐标 转 经纬度
         */
        screenPointToLnglat: function (point) {
            var spt = this.screenPointToMapPoint(point) //this.viewmatrix.toWorld(point.x, point.y)
            return this.mapPointToLnglat(spt)
        },
        // 屏幕坐标 转 地理坐标
        screenPointToMapPoint(point) {
            return this.viewmatrix.toWorld(point.x, point.y)
        },
        // 地理坐标转屏幕坐标
        mapPointToScreenPoint(point) {
            return this.viewmatrix.toScreen(point.x, point.y)
        },
        transform(disX, disY, scale, rotate) {
            this.viewmatrix.transform(disX, disY, scale, rotate)
        }
    }
})



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebMecrator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Class__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geometry_Bound__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geometry_vector_Point__ = __webpack_require__(2);




/**
 * @Const Object 
 * Web墨卡托投影
 * 将地理坐标投影为平面坐标,即平时所说的投影坐标
 * 
 */
const WebMecrator = {
    R: 6378137,
    PI_R:20037508.3427892,
    R_MINOR: 6356752.314245179,
    bound: new __WEBPACK_IMPORTED_MODULE_1__geometry_Bound__["a" /* Bound */]([-20037508.3427892, 20037508.3427892], [20037508.3427892, -20037508.3427892]),
    project: function (lnglat) {
        var d = Math.PI / 180,
            r = this.R,
            y = lnglat.lat * d,
            tmp = this.R_MINOR / r,
            e = Math.sqrt(1 - tmp * tmp),
            con = e * Math.sin(y);

        var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
        y = -r * Math.log(Math.max(ts, 1E-10));
        return new __WEBPACK_IMPORTED_MODULE_2__geometry_vector_Point__["a" /* Point */](lnglat.lng * d * r, y);
    },
    unproject: function (point) {
        var d = 180 / Math.PI,
            r = this.R,
            tmp = this.R_MINOR / r,
            e = Math.sqrt(1 - tmp * tmp),
            ts = Math.exp(-point.y / r),
            phi = Math.PI / 2 - 2 * Math.atan(ts);

        for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
            con = e * Math.sin(phi);
            con = Math.pow((1 - con) / (1 + con), e / 2);
            dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
            phi += dphi;
        }
        return new Lnglat(point.x * d / r, phi * d);
    }
}



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMartix; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry_vector_Point__ = __webpack_require__(2);


/**
 * 视图变化矩阵
 * 记录视图的缩放平移能操作引起的视图矩阵的变化
 * 方便返回当前视图以及位置坐标计算
 * by BuggMaker
 */
//变换矩阵
let ViewMartix = function () {
    this.matrix = [1, 0, 0, 1, 0, 0]; // normal matrix
    this.inverseMatrix = [1, 0, 0, 1]; // inverse matrix
    this.offset = {
        x: 0,
        y: 0
    };
    this.scale = 1;
    this.rotate = 0;
}
ViewMartix.prototype = {
    /**
     * 视图变换
     */
    transform: function (disX, disY, scale, rotate) {
        this.scale *= scale;
        this.rotate += rotate;

        this.offset.x += disX * this.scale;
        this.offset.y += disY * this.scale;

        let m = this.matrix; // just to make it easier to type and read
        let im = this.inverseMatrix; // just to make it easier to type and read
        // create the scale and rotation part of the matrix
        m[3] = m[0] = Math.cos(this.rotate) * this.scale;
        m[2] = -(m[1] = Math.sin(this.rotate) * this.scale);
        // translation
        m[4] = this.offset.x;
        m[5] = this.offset.y;

        // calculate the inverse transformation
        // first get the cross product of x axis and y axis
        let cross = m[0] * m[3] - m[1] * m[2];
        // now get the inverted axies
        im[0] = m[3] / cross;
        im[1] = -m[1] / cross;
        im[2] = -m[2] / cross;
        im[3] = m[0] / cross;
        this.matrix = m;
        this.inverseMatrix = im;
    },
    // function to transform to world space
    toWorld: function (x, y) {
        let xx, yy, m;
        m = this.inverseMatrix;
        xx = x - this.matrix[4];
        yy = y - this.matrix[5];
        return new __WEBPACK_IMPORTED_MODULE_0__geometry_vector_Point__["a" /* Point */](xx * m[0] + yy * m[2], xx * m[1] + yy * m[3])
    },
    // function to transform to screen space
    toScreen: function (x, y) {
        let xx, yy, m;
        m = this.inverseMatrix;
        yy = (x * m[1] - y * m[0]) / (m[1] * m[2] - m[0] * m[3])
        xx = (x - yy * m[2]) / m[0]

        return new __WEBPACK_IMPORTED_MODULE_0__geometry_vector_Point__["a" /* Point */](xx + this.matrix[4], yy + this.matrix[5])
    }
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SquareCoord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Coord__ = __webpack_require__(39);


// 矩形坐标系
var SquareCoord = __WEBPACK_IMPORTED_MODULE_1__Coord__["a" /* Coord */].extend({
    name: 'SquareCoord',
    constructor: function (config) {
        __WEBPACK_IMPORTED_MODULE_0____["UtilObj"].extend(this, config)
    },
    publics: {
        getCoord: function (mapPos) {
            let y = (mapPos.y - this.origin.y) / this.unit,
                x = (mapPos.x - this.origin.x) / this.unit;
            return new __WEBPACK_IMPORTED_MODULE_0____["Point"](Math.floor(x), Math.floor(y));
        }
    }
})



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(0);


var Coord = __WEBPACK_IMPORTED_MODULE_0____["Class"].extend({
    name:'Coord',
    cnostructor: function (config) {
        // 坐标原点
        var _origin = config.origin || new __WEBPACK_IMPORTED_MODULE_0____["Point"](0, 0)
        this.defProp('origin', {
            get: () => {
                return _origin
            },
            set: val => {
                _origin = val
            }
        })
        delete config.origin
        // 单位长度
        var _unit = config.unit || 100
        this.defProp('unit', {
            get: () => {
                return _unit
            },
            set: val => {
                _unit = val
            }
        })
        delete config.unit
    },
    publics: {
        /**
         * 根据直角坐标计算屏幕坐标
         * @param [Point] coord
         * @return [Point] 
         */
        getCenter: function (coord) {
            throw `function getCenter of${this.name} is unrealized`
        },
        /**
         * 通过鼠标位置的画布坐标获取hexCoord
         * @param [point] pixelPosition
         * @return [coord]
         */
        getCoord: function (pixelPosition) {
            //根据屏幕坐标 大致计算在哪个格子(结果不是整数)
            //这里的计算就是getCenterPixel的逆过程
            throw `function getCenter of${this.name} is unrealized`
        },
    }
})



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Layer__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geo_prj_coords__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Canvas__ = __webpack_require__(3);





// 地图万片层
var TileLayer = __WEBPACK_IMPORTED_MODULE_0__Layer__["a" /* Layer */].extend({
    name: 'TileLayer',
    constructor: function (config) {
        this.urlTemplate = config.urlTemplate || `http://mt2.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}`
        // 层次
        // 根据不同层次改变格网单元大小,进而加载不同瓦片
        var _level = -1
        this.defProp('level', {
            get: () => {
                return _level
            },
            set: val => {
                _level = Math.round(val)
            }
        })
        // 格网单元大小
        this.defProp('unit', {
            get: () => {
                return 2 * this.parent.crs.projection.PI_R / (Math.pow(2, this.level))
            }
        })
        // 矩形格网坐标系
        this.defProp('coord', {
            get: () => {
                return new __WEBPACK_IMPORTED_MODULE_1__geo_prj_coords__["a" /* SquareCoord */]({
                    origin: new __WEBPACK_IMPORTED_MODULE_2____["Point"](0, 0),
                    unit: this.unit
                })
            }
        })
        // 存储瓦片对象的键值对
        // 以level为键,以当前level的瓦片字典为值
        this.tileDictionary = new Map()
        this.defProp('totalTiles', {
            get: () => {
                var num = 0
                this.tileDictionary.forEach(dic => {
                    num += dic.size
                });
                return num
            }
        })

        // this.on('levelchange', function () {
        //     _update.call(this)
        // })
        // this.on(EventType.mdrag, function () {
        //     _update.call(this)
        // })
    },
    publics: {
        render: function () {
            this.update()
            var ctx = this.canvas.context
            ctx.save()
            __WEBPACK_IMPORTED_MODULE_3__Canvas__["b" /* Graphics */].clear(ctx)
            for (let i = this.level; i >= 0; i--) {
                var map = this.tileDictionary.get(this.level - i)
                map && map.forEach(tile => {
                    if (tile.isNeedRender) {
                        ctx.save()
                        __WEBPACK_IMPORTED_MODULE_2____["UtilObj"].replace(ctx, tile.style)
                        __WEBPACK_IMPORTED_MODULE_2____["UtilObj"].replace(ctx, tile.interactiveStyle)
                        tile.render(ctx)
                        ctx.restore()
                    }
                })
            }
            ctx.restore()
        },
        update: function () {
            // 计算需要显示的tile,没有的添加
            var from = this.coord.getCoord(this.parent.renderBound.leftTop),
                to = this.coord.getCoord(this.parent.renderBound.rightBottom),
                coordOrigin = this.coord.origin

            var dic = this.tileDictionary.get(this.level) || new Map()
            for (let r = from.y; r <= to.y; r++) {
                if (r >= 0 && r < Math.pow(2, this.level)) {
                    for (let c = from.x; c <= to.x; c++) {
                        // if (c >= 0) {
                        var sn = Math.pow(2, this.level)
                        var col = c % sn >= 0 ? c % sn : (c % sn + sn)
                        var org = new __WEBPACK_IMPORTED_MODULE_2____["Point"](coordOrigin.x + c * this.unit, coordOrigin.y + r * this.unit)
                        var t = new __WEBPACK_IMPORTED_MODULE_2____["Tile"](org, this.unit, {
                                level: this.level,
                                coord: [c, r],
                                imgCoord: [col, r],
                                urlTemplate: this.urlTemplate
                            }),
                            key = `${c}_${r}`
                        // 判断tile是否存在,不存在添加,保证每个tile对象只实例化一次
                        if (!dic.has(key)) {
                            dic.set(key, t)
                            t.parent = this
                        }
                        // }
                    }
                }
            }!this.tileDictionary.get(this.level) && this.tileDictionary.set(this.level, dic)
            // 后续可设置上限,以免过多内存消耗
        }
    }
})

/***/ })
/******/ ]);