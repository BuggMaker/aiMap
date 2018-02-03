import {
    IRender
} from "../map/IRender";
import {
    Item
} from "../core/index";
import {
    Bound
} from "./Bound";
import { GeoJson } from "../geo/GeoJson";

/**
 * 几何类型接口
 */

var IGeometry = IRender.extend({
    name: 'IGeometry',
    supers: [Item],
    /**
     * 创建几何要素
     * 参数需要为标准GeoJson格式或者coordinates数组
     * @param{Coordiantes || Lnglat Array} ary
     */
    constructor: function (ary) {
        this.id = ''
        this.properties = {}
        this.geometry = new GeoJson({
            type:this.type,
            coordinates:ary
        })
        this.bound = new Bound()
        this.points = []    
    },
    publics: {
        contains:function(geometry){
            throw `function 'contains' of ${this.name} is unrealized!`
        }
    }
})