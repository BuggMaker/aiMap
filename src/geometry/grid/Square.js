
import {
    Rectangle
} from "../vector/Rectangle";

/**
 * 正方形格网
 */

export var Square = Rectangle.extend({
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