/**
 * 事件类
 * by BuggMaker
 */
import {
    UtilObj
} from '../utils/index'
import {
    Class
} from '../core/Class'

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
    kright: 7
}

/**
 * 导出模块
 */
export {
    Event,
    EventType
}