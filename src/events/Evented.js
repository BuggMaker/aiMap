/**
 * 事件集合类
 * by BuggMaker
 */
import {
    Class
} from '../core/Class'
import {
    Event,
    EventType
} from './Event'
import {
    UtilObj
} from '../utils/index';
import {
    isArray
} from '../index';

/**
 * Class Events
 * 事件集合类
 * 注意:callback函数必须是function类型,不可以是lambda表达式
 */
var Evented = Class.extend({
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
                    targetTypes.push(EventType[tn])
                })
            } else if (isArray(types)) {
                types.forEach(tn => {
                    if (typeof tn === 'string') {
                        targetTypes.push(EventType[tn])
                    } else {
                        targetTypes.push(tn)
                    }
                })
            }else if(typeof types === 'number'){
                targetTypes.push(types)
            }
            targetTypes.forEach(t => {
                let ary = []
                if (this.eventsDic.has(t)) {
                    ary = this.eventsDic.get(t)
                }
                let ev = new Event(this, t, callback, once)
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
export {
    Evented
}