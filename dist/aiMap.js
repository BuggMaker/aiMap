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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UtilObject__ = __webpack_require__(9);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__UtilObject__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__UtilObject__["extend"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__UtilObject__["merge"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__UtilObject__["replace"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__UtilObject__["isInstanceOf"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UtilColor__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__UtilColor__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__UtilColor__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__UtilColor__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__UtilColor__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Util__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__Util__["a"]; });









/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Class; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(0);
// Base class in aiMap




function Class() {}
/**
 * 判断是否为类型T的实例
 * @param {Class} T 
 */
Class.prototype.isInstanceOf = function (T) {
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

        //父类实例,包含了实例属性和公共属性,方便子类调用
        this.base = this.base ? __WEBPACK_IMPORTED_MODULE_0__utils_index__["d" /* UtilObj */].extend(this.base, new _base(args)) : new _base(args)

        //继承其他父类
        if (props.supers) {
            props.supers.forEach(s => {
                s.apply(this, args)
                __WEBPACK_IMPORTED_MODULE_0__utils_index__["d" /* UtilObj */].extend(this.base, new s(args))
            })
        }

        //构造函数
        if (props.constructor) {
            props.constructor.apply(this, args)
        }
        // delete props.constructor
    }    
    if (props.name)
        Object.defineProperty(NewClass, 'name', {
            value: props.name,
            writable: false
        })

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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_index__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Extent", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_index__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return __WEBPACK_IMPORTED_MODULE_1__events_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Evented", function() { return __WEBPACK_IMPORTED_MODULE_1__events_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geo_index__ = __webpack_require__(15);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GeoJson", function() { return __WEBPACK_IMPORTED_MODULE_2__geo_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GeoJsonType", function() { return __WEBPACK_IMPORTED_MODULE_2__geo_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UtilObj", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isInstanceOf", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ColorRGBA", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ColorRamp", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_index__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_index__ = __webpack_require__(17);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return __WEBPACK_IMPORTED_MODULE_4__map_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return __WEBPACK_IMPORTED_MODULE_4__map_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geometry_index__ = __webpack_require__(4);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_5__geometry_index__) if(["Size","Extent","EventType","Evented","GeoJson","GeoJsonType","UtilObj","extend","merge","replace","isInstanceOf","Color","ColorRGBA","ColorRamp","colors","isArray","Map","Layer","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_5__geometry_index__[key]; }) }(__WEBPACK_IMPORT_KEY__));








/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Event__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Event__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Evented__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Evented__["a"]; });




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bound__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Bound", function() { return __WEBPACK_IMPORTED_MODULE_0__Bound__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_index__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__grid_index__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__grid_index__) if(["Bound","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__grid_index__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vector_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vector_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vector_index__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_2__vector_index__) if(["Bound","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_2__vector_index__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Size__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Size__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Extent__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Extent__["a"]; });




/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Extent; });
var Extent = function () {
    this.minX = this.minY = Number.MAX_VALUE
    this.maxX = this.maxY = Number.MIN_VALUE
}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EventType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Class__ = __webpack_require__(1);
/**
 * 事件类
 * by BuggMaker
 */



/**
 * Class Event(Object:target,EventType:type,function:callback,bool:once)
 * 事件数据结构
 * 记录事件的目标对象,类型.是否执行一次,回调函数
 * 参数:触发事件的对象/事件类型/回调函数/是否只执行一次
 */
var Event = function(target,type, callback, once = false) {
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
    mdrap: 8,
    menter: 10,
    mhover: 12,
    mleave: 14,
    kup: 1,
    kdown: 3,
    kleft: 5,
    kright: 7
}

/**
 * 导出模块
 */


/***/ }),
/* 9 */
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


/**
 * @function merge(Object:des,any:...props)
 * 对象属性合并,取并集
 */
const merge = function (des, ...props) {

}
/* harmony export (immutable) */ __webpack_exports__["merge"] = merge;

/**
 * @function replace(Object:des,any:...props)
 * 对象属性替换 和extend区别???
 */
const replace = function (des, ...props) {

}
/* harmony export (immutable) */ __webpack_exports__["replace"] = replace;

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
        // writable: customer.writable || true,
        configurable: customer.configurable || true,
        get: function () {
            if (customer)
                return customer.get(value)
            else
                return value;
        },
        set: function (newValue) {
            if (value !== newValue) {
                if (customer)
                    value = customer.set(value)
                else
                    value = newValue;
            }
        }
    })
}
/* harmony export (immutable) */ __webpack_exports__["defineProp"] = defineProp;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IRender; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_index__ = __webpack_require__(3);
/**
 * 地图渲染接口
 * 主要包括图形的样式属性及绘图函数
 * by BuggMaker
 */



var IRender = __WEBPACK_IMPORTED_MODULE_0__events_index__["b" /* Evented */].extend({
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



/***/ }),
/* 11 */
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
/* 12 */
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
var Color = function (r, g, b) {
    if (isNaN(r) || isNaN(g) || isNaN(b)) throw 'Wrong r,g,b for Color!'
    this.r = r
    this.g = g
    this.b = b
    Color.valid(this)
}
Color.prototype.toString = function () {
    return `rgb(${r},${g},${b})`
}
Color.prototype.decrease = function (other) {
    if (other instanceof Color)
        return new Color(this.r - other.r, this.g - other.g, this.b - other.b)
    else throw "Invalid Color 'other'"
}
/**
 * Color有效性验证
 * @param {Color} color 
 */
Color.valid = function (color) {
    if (!(color instanceof Color)) throw 'Wrong Color instance!'

    color.r = valid(color.r)
    color.g = valid(color.g)
    color.b = valid(color.b)

    function valid(val) {
        if (val < 0) val = 0
        else if (val > 255) avl = 255
        return val
    }

    return color
}
/**
 * RGBA颜色 含透明度
 * @param {Number} alpha 0-1
 * @param {int || Color} r,g,b || color
 */
var ColorRGBA = function (alpha, ...args) {
    if (args.length >= 3) {
        this.color = new Color(args[0], args[1], args[2])
    } else if (args.length == 1 && args[0] instanceof Color) {
        this.color = args[0]
    } else {
        throw 'Wrong params for ColorRGBA!'
    }
    this.alpha = alpha
}
ColorRGBA.prototype.toString = function () {
    return `rgba(${this.color.r},${this.color.g},${this.color.b},${this.alpha})`
}

/**
 * Color 颜色枚举
 */
var colors = {
    red: new Color(255, 0, 0),
    orange: 'orange',
    yellow: 'yellow',
    green: new Color(0, 255, 0),
    blue: new Color(0, 0, 255),
    purple: 'purple'
}
/**
 * 颜色坡道
 * 默认为'红-橙-黄-绿-蓝'渐变
 * 如果fromColor和toColor不为空,则在两者间渐变
 * @param {Number} alpha 0-1
 * @param {Color} fromColor 
 * @param {Color} toColor 
 */
var ColorRamp = function (alpha, fromColor, toColor) {
    this.alpha = alpha || 1
    this.fromColor = fromColor
    this.toColor = toColor
}
/**
 * 取颜色值
 * @param {Number} val 0-100
 */
ColorRamp.prototype.getColor = function (val) {
    var r = g = b = 0;
    if (this.fromColor && this.toColor) {
        var disColor = fromColor.decrease(toColor)
        r = Math.round(fromColor.r + disColor.r / 100 * val)
        g = Math.round(fromColor.g + disColor.g / 100 * val)
        b = Math.round(fromColor.b + disColor.b / 100 * val)
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
    var resultColor = new Color(r, g, b)
    if (this.alpha !== undefined)
        return new ColorRGBA(this.alpha, resultColor)
    else
        return resultColor
}



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isArray;
function isArray(ary) {
    return ary instanceof Array || Array.isArray(ary)
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Evented; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Class__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__(0);
/**
 * 事件集合类
 * by BuggMaker
 */




/**
 * Class Events
 * 事件集合类
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
         * funtion on(EventType:type,function:callback,bool:once)
         * 绑定事件
         * 参数:时间类型/回调函数/是否只执行一次
         */
        on: function (type, callback, once = false) {
            let ary = []
            if (this.eventsDic.has('type')) {
                ary = this.eventsDic.get(type)
            }
            let ev = new __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* Event */](this, type, callback, once)
            ary.add(ev)
            this.eventsDic.set(type, ary)
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
        fire: function (type, content) {
            var evAry = this.get(type)
            for (let index = 0; index < evAry.length; index++) {
                const ev = evAry[index];
                //执行回调函数
                ev.callback.call(this, content)
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
            return this.eventsDic.has('type') && this.eventsDic.get('type').length > 0
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GeoJson__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__GeoJson__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__GeoJson__["b"]; });


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GeoJsonType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);


/**
 * GeoJson类
 * 检测GeoJso数据格式是否正确
 * @param {GeoJson} data 
 */
var GeoJson = function (data) {
    if (!GeoJsonType[data.type]) throw `not format GeoJson, wrong 'type'`
    this.type = data['type']
    switch (this.type) {
        case GeoJsonType.FeatureColledtion:
            var features = data['features']
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__index__["isArray"])(features)) throw `not format GeoJson, wrong 'features'`
            this.features = []
            features.forEach(feature => {
                this.features.push(new GeoJson(feature))
            });
            break
        case GeoJsonType.GeometryCollection:
            var geometries = data['geometries']
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__index__["isArray"])(geometries)) throw `not format GeoJson, wrong 'geometries'`
            this.geometries = []
            geometries.forEach(feature => {
                this.geometries.push(new GeoJson(feature))
            });
            break
        case GeoJsonType.Feature:
            var geometry = data['geometry']
            if (!geometry) throw `not format GeoJson, wrong 'geometry'`
            for (const key in data) {
                if (data.hasOwnProperty(key) && key !== 'geometry') {
                    this[key] = data[key]
                }
            }
            this.geomrtry = new GeoJson(geometry)
            break
        case GeoJsonType.Point:
        case GeoJsonType.MultiPoint:
        case GeoJsonType.LineString:
        case GeoJsonType.MultiLineString:
        case GeoJsonType.Polygon:
        case GeoJsonType.MultiPolygon:
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

var GeoJsonType = {
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Map__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layer__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Layer__["a"]; });



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Map; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IRender__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_index__ = __webpack_require__(5);
/**
 * 地图
 * 作为一个容器,本质是一个div标签,
 * 其包含不同的图层以及具有一定功能的DOM元素 
 * by BuggMaker
 */







let Map = __WEBPACK_IMPORTED_MODULE_2__IRender__["a" /* IRender */].extend({
    name: 'Map',
    // 其他待继承的父类
    constructor: function (parentId) {
        var self = this
        // 创建div标签，并加入父容器
        this.parent = add2Parent(parentId)
        // 图层字典
        this.layersDic = new window.Map()
        // 视口范围
        this.bound = new __WEBPACK_IMPORTED_MODULE_0__geometry_index__["Bound"]()
        // 绘图范围
        this.renderBound = new __WEBPACK_IMPORTED_MODULE_0__geometry_index__["Bound"]()
        // 视口中心
        __WEBPACK_IMPORTED_MODULE_1__utils_index__["d" /* UtilObj */].defineProp(this, 'center', {
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
            self.clientSize = new __WEBPACK_IMPORTED_MODULE_4__core_index__["b" /* Size */](width, height)

            let mapDiv = document.createElement('div')
            mapDiv.style.width = width + 'px'
            mapDiv.style.height = height + 'px'
            mapDiv.id = 'aiMap'
            mapDiv.style.position='relative'
            parent.appendChild(mapDiv)
            // 容器
            self.container = mapDiv

            //绑定事件
            for (const key in parent) {
                if (key.substr(0, 2) === 'on') {
                    if (self[key])
                        parent[key] = self[key]
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
            document.title = e.offsetX + ' ' + e.offsetY
        }
    }
})

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bound; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_IBound__ = __webpack_require__(20);




/**
 * 边界(矩形框)
 */
var Bound = __WEBPACK_IMPORTED_MODULE_0__core_IBound__["a" /* IBound */].extend({
    name: 'Bound',
    constructor: function (...args) {
        
    },
    publics: {
        // 判断是否相较
        contains: function (bound) {},
        // 取交集
        intersect: function (bound) {},
        // 取并集
        union: function (bound) {}
    }
})


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IBound; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Class__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Size__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Extent__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geometry_vector_Point__ = __webpack_require__(21);






/**
 * 边界(矩形框)
 */
var IBound = __WEBPACK_IMPORTED_MODULE_0__Class__["a" /* Class */].extend({
    name: 'IBound',
    constructor: function (...args) {
        this.extent = new __WEBPACK_IMPORTED_MODULE_2__Extent__["a" /* Extent */]()
        __WEBPACK_IMPORTED_MODULE_3__index__["UtilObj"].defineProp(this, 'size', {
            get: () => {
                return new __WEBPACK_IMPORTED_MODULE_1__Size__["a" /* Size */](this.extent.maxX - this.extent.minX, this.extent.maxY - this.extent.minY)
            }
        })

        __WEBPACK_IMPORTED_MODULE_3__index__["UtilObj"].defineProp(this, 'size', {
            get: () => {
                 return new __WEBPACK_IMPORTED_MODULE_4__geometry_vector_Point__["a" /* Point */](this.extent.maxX - this.extent.minX, this.extent.maxY - this.extent.minY)
            }
        })
    },
    publics: {
        // 判断是否相较
        intersectWith: function (bound) {
            throw `function 'intersect' of ${this.name} is unrealized!`
        },
        // 取交集
        intersection: function (bound) {
            throw `function 'intersection' of ${this.name} is unrealized!`
        },
        // 取并集
        union: function (bound) {
            throw `function 'union' of ${this.name} is unrealized!`
        }
    }
})



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);


/**
 * 点类
 * 可以表示像素点或者平面坐标点(投影坐标点)
 * by BuggMaker
 */

var Point = Geometry.extend({
    name:'Point',
    constructor: function (...args) {
        var ary = []
        if (args.length === 1) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__index__["isArray"])(args[0])) {
                ary = args[0]
            } else if (!isNaN(args[0].x) && !isNaN(args[0].y)) {
                return new Point(args[0].x, args[0].y)
            } else {
                throw `Wrong format of Point or Array`
            }
        } else {
            ary = args
        }

        if (ary.length >= 2) {
            this.x = ary[0]
            this.y = ary[1]
        }
    },
    publics: {
        distanceTo: function (other) {
            if (other.x && other.y)
                return Math.sqrt(Math.pow(this.x - ohter.x, 2), Math.pow(this.y - ohter.y, 2))
        }
    }
})

/***/ }),
/* 22 */
/***/ (function(module, exports) {



/***/ }),
/* 23 */
/***/ (function(module, exports) {



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IRender__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geometry_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Canvas__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Item__ = __webpack_require__(11);
/**
 * 图层类
 * by BuggMaker
 */





var Layer = __WEBPACK_IMPORTED_MODULE_0__IRender__["a" /* IRender */].extend({
    name:'Layer',
    supers:[__WEBPACK_IMPORTED_MODULE_3__core_Item__["a" /* Item */]],
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
        this.bound = new __WEBPACK_IMPORTED_MODULE_1__geometry_index__["Bound"]()
        //画布
        this.canvas = null
        //集合要素 数组
        this.geometryAry = []
        //地图
        this.parent = null
        //是否可见
        this.visable = true
    },
    publics: {
        // 添加要素到图层
        addGeometry: function (geometry) {
            //合并范围
            this.bound.union(geometry.bound)
            this.geometryAry.push(geometry)
            return this
        },
        // 添加图层到地图
        addTo: function (map) {
            if (map) {
                this.parent = map
                map.layersDic.set(this.index, this)
                this.canvas = new __WEBPACK_IMPORTED_MODULE_2__Canvas__["a" /* Canvas */](this)                
            }
            return this
        },
        // 从地图移除图层
        remove:function(){
            if(this.parent){
                this.parent.layersDic.delete(this.index)
                this.canvas.remove()
                this.parent = null
            }
        },
        // 渲染
        render: function () {
            if (this.visable) {
                this.geometryAry.forEach(geometry => {
                    geometry.render(this.canvas.context)
                });
            }
            return this
        }
    },
    statics: {}
})



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Canvas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Class__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Item__ = __webpack_require__(11);



/**
 * Canvas画布
 * 包括对canvas标签/绘图上下文的相关操作
 * by BuggMaker
 */

var Canvas = __WEBPACK_IMPORTED_MODULE_0__core_Class__["a" /* Class */].extend({
    name:'Canvas',
    supers:[__WEBPACK_IMPORTED_MODULE_1__core_Item__["a" /* Item */]],
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
        drawCircle: function (ctx, center, radius) {

        }
    }
})



/***/ })
/******/ ]);