import {
    Point
} from "../../geometry/vector/Point";

/**
 * 视图变化矩阵
 * 记录视图的缩放平移能操作引起的视图矩阵的变化
 * 方便返回当前视图以及位置坐标计算
 * by BuggMaker
 */
//变换矩阵
export let ViewMartix = function () {
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
        return new Point(xx * m[0] + yy * m[2], xx * m[1] + yy * m[3])
    },
    // function to transform to screen space
    toScreen: function (x, y) {
        let xx, yy, m;
        m = this.inverseMatrix;
        yy = (x * m[1] - y * m[0]) / (m[1] * m[2] - m[0] * m[3])
        xx = (x - yy * m[2]) / m[0]

        return new Point(xx + this.matrix[4], yy + this.matrix[5])
    }
}