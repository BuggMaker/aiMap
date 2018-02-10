/**
 * 对象工具类 
 * by 倒霉蛋儿
 */

/**
 * @function extend(object:des,any:...props)
 * 对象属性扩展
 */
export const extend = function (des, ...props) {
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
export const replace = function (des, ...props) {
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

export const copy = function (s) {
    var res = {}
    for (const key in s) {
        if (s.hasOwnProperty(key)) {
            res[key] = s[key];
        }
    }
    return res
}
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
export const isInstanceOf = function (S, T) {
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
/**
 * @function definProp(Object:des,String:key,any:value,Object:customer)
 * 定义属性
 * customer为自定义get和set,使用'=>'表达式
 * {
 *   get:(val)=>{ do soming and return the changed val },
 *   set:(val)=>{ do soming and return the changed val }
 * }
 */
export const defineProp = function (des, key, customer) {
    Object.defineProperty(des, key, {
        enumerable: customer.enumerable || true,
        // writable: customer.writable || true,
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
                customer.set(newValue)
                // 属性变化钩子函数
                this.fire(key + 'change')
            } else {
                throw `property ${key} is readonly!`
            }
        }
    })
}