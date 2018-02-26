import {
    Point, UtilObj
} from "../../..";
import { Coord } from "../Coord";
// 矩形坐标系
var SquareCoord = Coord.extend({
    name: 'SquareCoord',
    constructor: function (config) {
        UtilObj.extend(this, config)
    },
    publics: {
        getCoord: function (mapPos) {
            let y = (mapPos.y - this.origin.y) / this.unit,
                x = (mapPos.x - this.origin.x) / this.unit;
            return new Point(Math.floor(x), Math.floor(y));
        }
    }
})

export {
    SquareCoord
}