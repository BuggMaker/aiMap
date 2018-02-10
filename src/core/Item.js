import { Class } from "./Class";

/**
 * 子元素
 * 如图层/要素等需要加入父容器的子元素
 */

var Item = Class.extend({
    name:'Item',
    constructor:function(){
        this.parent = null
    },
    publics:{
        // 添加至父容器
        addTo:function(parent){
            throw  `function 'addTo' of ${this.name} is unrealized`  
            // this.parents.push(parent)
            // parent.addItem(this)
        },
        // 从父容器移除
        remove:function(){
            throw  `function 'remove' of ${this.name} is unrealized`   
        }
    }
})
export{Item}