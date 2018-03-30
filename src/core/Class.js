// Base class in aiMap

import {
    UtilObj
} from '../utils/index'


function Class() {}
/**
 * 判断是否为类型T的实例
 * @param {Class} T 
 */
Object.prototype.isInstanceOf = function (T) {
    return UtilObj.isInstanceOf(this, T)
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
        UtilObj.extend(NewClass, props.statics)
        delete props.statics
    }
    // publics  扩展公共方法,prototype中的属性    
    if (props.publics) {
        UtilObj.extend(prot, props.publics)
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
        UtilObj.defineProp(this, key, customer)
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
    UtilObj.extend(this.prototype.constructor, statics)
}

/**
 * @function public(Object:publics)
 * 扩展类型公有方法
 */
Class.public = function (publics) {
    UtilObj.extend(this.prototype, publics)
}

export {
    Class
}