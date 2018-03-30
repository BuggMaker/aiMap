import { IGeometry } from "../IGeometry";
import { Point } from "./Point";
import { UtilObj } from "../../index";
import { Graphics } from "../../map/Canvas";
import { Bound } from "../Bound";
import { Lnglat } from "../../geo/Lnglat";

/**
 * 圆
 */

var Circle = IGeometry.extend({
  name: "Circle",
  /**
   * @function Circle(Point || Lnglat:center, Number:radius, Object:style)
   * 圆形要素
   * 参数:中心坐标,半径,以及渲染样式
   */
  constructor: function(config) {
    if (!config.center) throw "Circle config lack of center";
    // 圆心
    var _center;
    this.defProp("center", {
      get: () => {
        return _center;
      },
      set: val => {
        //if (!val.isInstanceOf(Point)) throw 'new value of center is not instance of Point!'
        _center = new Point(val);
      }
    });
    // 半径
    if (isNaN(config.radius)) throw "Circle radius is not a Number!";
    var _radius = 0;
    this.defProp("radius", {
      get: () => {
        return _radius;
      },
      set: val => {
        _radius = val;
      }
    });
    // 重新计算边界
    this.on("centerchange radiuschange", _calBound);

    // 参数赋值
    this.center = new Point(config.center);
    delete config.center;
    UtilObj.extend(this, config);

    // 重新计算边界
    function _calBound() {
      var lt = this.center.reduce(new Point(this.radius, this.radius)),
        rb = this.center.plus(new Point(this.radius, this.radius));
      this.bound = new Bound(lt, rb);
    }
  },
  publics: {
    render: function(ctx) {
      // if (this.fill) {
      Graphics.circle(ctx, this.center, this.radius, {
        fill: this.fill,
        stroke: this.stroke
      });
      // }
      // if (this.stroke) {
      //     Graphics.circle(ctx, this.center, this.radius, false)
      // }
      return this;
    },
    containsPoint(point, tolerance) {
      if (!point.isInstanceOf(Point)) throw "param is not instance of Point";
      return (
        this.bound.containsPoint(point) &&
        this.center.distanceTo(point) <=
          this.radius + (tolerance || this.tolerance)
      );
    },
    project: function(crs) {
      this.center = crs.lnglatToMapPoint(
        new Lnglat(this.center.x, this.center.y)
      );
      return this;
    }
  }
});

export { Circle };
