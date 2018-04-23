/**
 * 图层类
 * by BuggMaker
 */
import { IRender } from "../IRender";
import { Bound } from "../../geometry/index";
import { Canvas, Graphics } from "./Canvas";
import { Item } from "../../core/Item";
import { EventType } from "../../events/Event";
import { UtilObj } from "../../index";

var Layer = IRender.extend({
  name: "Layer",
  supers: [Item],
  /**
   * @function Layer(Object:options)
   * 图层
   * 参数包括:index,title,style
   */
  constructor: function(config) {
    for (const key in config) {
      if (config.hasOwnProperty(key)) {
        const element = config[key];
        this[key] = element;
        delete config[key];
      }
    }
    //数据范围
    this.bound = new Bound();
    //画布
    this.canvas = null;
    //集合要素 数组
    this.geometryAry = [];
    //地图
    this.parent = null;

    // 事件
    this.on(EventType.mup, function(mpos) {
      var update = false;
      this.geometryAry.forEach(geo => {
        if (!geo.interactive || !geo.isNeedRender) return;
        if (geo.containsPoint(mpos, 0)) {
          if (!geo.isMousehover) {
            geo.fire(EventType.menter, mpos);
            update = true;
          } else {
            geo.fire(EventType.mmove, mpos);
          }
        } else if (geo.isMousehover) {
          geo.fire(EventType.mleave, mpos);
          update = true;
        }
      });
      update && this.render();
    });
  },
  publics: {
    // 添加要素到图层
    addGeometry: function(geometry) {
      //合并范围
      geometry.addTo(this);
      return this;
    },
    clearAll() {
      this.geometryAry = []
      return this
    },
    // 添加图层到地图
    addTo: function(map) {
      if (map) {
        this.parent = map;
        this.parent.layersDic.set(this.index, this);
        this.parent.bound.extend(this.bound);
        this.canvas = new Canvas(this);
      }
      return this;
    },
    // 从地图移除图层
    remove: function() {
      if (this.parent) {
        this.parent.layersDic.delete(this.index);
        this.parent.updateBound();
        this.canvas.remove();
        this.parent = null;
      }
    },
    // 渲染
    render: function() {
      if (this.visable) {
        var ctx = this.canvas.context;
        Graphics.clear(ctx);
        var hoverGeo = [];
        this.geometryAry.forEach(geometry => {
          if (geometry.isNeedRender) {
            if (geometry.isMousehover) {
              hoverGeo.push(geometry);
            } else {
              ctx.save();
              UtilObj.replace(ctx, geometry.style);
              geometry.render(ctx);
              ctx.restore();
            }
          }
        });
        hoverGeo.forEach(geometry => {
          if (geometry.isNeedRender) {
            ctx.save();
            UtilObj.replace(ctx, geometry.style);
            UtilObj.replace(ctx, geometry.interactiveStyle);
            geometry.render(ctx);
            ctx.restore();
          }
        });
      }
      return this;
    },
    setTransform(m) {
      this.canvas.context.lineWidth = 1 / this.parent.crs.viewmatrix.scale;
      this.canvas.context.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);
    },
    updateBound: function() {
      this.bound = new Bound();
      this.geometryAry.forEach(geometry => {
        this.bound.extend(geometry.bound);
      });
    }
  },
  statics: {}
});

export { Layer };
