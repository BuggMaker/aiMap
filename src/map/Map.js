/**
 * 地图
 * 作为一个容器,本质是一个div标签,
 * 其包含不同的图层以及具有一定功能的DOM元素
 * by BuggMaker
 */

import { Bound } from "../geometry/index";
import { UtilObj } from "../utils/index";
import { IRender } from "./IRender";
import { EventType } from "../events/index";
import { Size } from "../core/index";
import { CRS } from "../geo/prj/CRS";
import { Point } from "../geometry/vector/Point";
import { Lnglat } from "../geo/Lnglat";
import { SquareCoord } from "../geo/prj/coords";
import { TileLayer } from "./layers/index";
import { Canvas } from "./Canvas";

export let Map = IRender.extend({
  name: "Map",
  // 其他待继承的父类
  constructor: function(config) {
    // 创建div标签，并加入父容器
    if (!config.cid) throw "lack of container id cid";
    this.parent = _add2Parent.call(this, config.cid);
    // 图层字典
    this.layersDic = new window.Map();
    // 参考系 暂时为 web mecrator
    this.crs = new CRS();
    // 数据范围
    this.bound = new Bound();
    // 视口范围
    this.defProp("viewBound", {
      get: () => {
        var lt = this.crs.screenPointToMapPoint(new Point(0, 0)),
          rb = this.crs.screenPointToMapPoint(
            new Point(this.clientSize.width, this.clientSize.height)
          );
        return new Bound(lt, rb);
      }
    });
    // 绘图范围
    this.defProp("renderBound", {
      get: () => {
        var offset = 100 / this.crs.viewmatrix.scale,
          tmpPt = new Point(offset, offset);
        var lt = this.viewBound.leftTop.reduce(tmpPt),
          rb = this.viewBound.rightBottom.plus(tmpPt);
        return new Bound(lt, rb);
      }
    });
    // 视口中心
    this.defProp("center", {
      get: val => {
        return this.viewBound.center;
      },
      set: val => {
        var dis = this.center.reduce(new Point(val)),
          lt = this.viewBound.leftTop.reduce(dis),
          rb = this.viewBound.rightBottom.reduce(dis);
        this.viewBound = new Bound(lt, rb);
      }
    });
    // 地图层级
    var _level = -1;
    this.defProp("level", {
      get: () => {
        return _level;
      },
      set: val => {
        _level = val;
      }
    });
    this.on("levelchange", function() {
      if (this.tileLayer) this.tileLayer.level = this.level;
    });
    // 瓦片地图
    if (config.tile) {
      this.tileLayer = new TileLayer({
        index: 0,
        title: "Tile Layer",
        urlTemplate: config.tile
      }).addTo(this);
    }

    this.rendering = false;
    this.firstRender = true;

    // 获取父容器
    // 创建div、设置样式/尺寸并添加至父容器
    // 绑定事件
    function _add2Parent(parentId) {
      let parent = document.getElementById(parentId);
      if (!parent) throw "parent tag not exists";
      let width = parent.clientWidth || 300,
        height = parent.clientHeight || 150;

      //div标签大小
      this.clientSize = new Size(width, height);

      let mapDiv = document.createElement("div");
      mapDiv.style.width = width + "px";
      mapDiv.style.height = height + "px";
      mapDiv.id = "aiMap";
      mapDiv.style.position = "relative";
      parent.appendChild(mapDiv);
      // 容器
      this.container = mapDiv;
      //绑定事件
      for (const key in parent) {
        if (key.substr(0, 2) === "on") {
          if (this[key])
            parent[key] = e => {
              this[key](e);
            };
        }
      }
      return parent;
    }
  },
  publics: {
    addControl: function() {},
    addLayer: function(layer) {
      //添加canvas标签
      layer.addTo(this);
      return this;
    },
    // 设置地图中心
    setCenter: function(mpt, level) {
      // var mpt = this.crs.getMapPoint(new Lnglat(lnglat)), 1, 0)
      this.transform(this.center.x - mpt.x, this.center.y - mpt.y, 1, 0);
      this.zoom(mpt, Math.pow(2, level || this.level));
      return this;
    },
    setCenterLngLat: function(lnglat, level) {
      var mpt = this.getMapPoint(new Lnglat(lnglat));
      this.setCenter(mpt, level);
      return this;
    },
    // 渲染图层
    render: function() {
      if (this.rendering) return;
      this.rendering = true;

      if (this.firstRender) {
        this.setCenterLngLat([0, 0]);
        this.firstRender = false;
      }
      // 渲染图层
      this.layersDic.forEach(ly => {
        ly.render();
      });
      // 最后渲染图名/图例层,待补充

      this.rendering = false;
      return this;
    },
    // 通过经纬度得到地图点
    getMapPoint(...lnglat) {
      return this.crs.lnglatToMapPoint(new Lnglat(...lnglat));
    },
    // 通过屏幕点得到经纬度
    getLnglat(mpos) {
      return this.crs.screenPointToLnglat(mpos);
    },
    // 鼠标移动事件
    onmousemove: function(e) {
      var eType = EventType.mmove;
      if (this.isMousedown && !this.isMousedrag) {
        this.isMousedrag = true;
        eType = EventType.mdrag;
      }
      var mpos = new Point(e.offsetX, e.offsetY);
      var mapPos = this.crs.screenPointToMapPoint(mpos);
      // 触发鼠标移动或拖拽事件
      this.fire(eType, mapPos);
      this.layersDic.forEach(ly => {
        ly.fire(eType, mapPos);
      });
    },
    // 鼠标滚轮事件
    onmousewheel: function(e) {
      var mpos = new Point(e.offsetX, e.offsetY),
        mapPos = this.crs.screenPointToMapPoint(mpos);
      if (e.wheelDelta > 0) {
        this.zoom(mapPos, 2);
      } else {
        this.zoom(mapPos, 1 / 2);
      }
    },
    // 鼠标点下事件
    onmousedown: function(e) {
      var downDate = Date.now();
      this.isMousedown = true;
      var mpos = new Point(e.offsetX, e.offsetY),
        startPos = this.crs.screenPointToMapPoint(mpos),
        totalOffset = new Point(0, 0);
      // 触发点击事件
      this.fire(EventType.mdown, startPos, downDate);
      this.layersDic.forEach(ly => {
        ly.fire(EventType.mdown, startPos, downDate);
      });
      // 绑定鼠标拖拽事件
      this.on(EventType.mdrag, function(endPos) {
        var offset = endPos.reduce(startPos);
        this.isMousedrag = false;
        this.transform(offset.x, offset.y, 1, 0);
        totalOffset = totalOffset.plus(offset);
      });
      // 绑定鼠标弹起事件
      this.on(EventType.mup, function(endPos, upDate) {
        var disDate = upDate - downDate;
        if (disDate > 1000 * 0.3) return;
        var vx = Math.abs(totalOffset.x) / disDate,
          vy = Math.abs(totalOffset.y) / disDate,
          ax = vx / 60,
          ay = vy / 60,
          dirx = totalOffset.x > 0 ? 1 : -1,
          diry = totalOffset.y > 0 ? 1 : -1;
        this.off(EventType.mup);

        var self = this,
          animating = false;
        frame();

        function frame() {
          animating = true;
          vx -= ax;
          vy -= ay;

          vx = vx <= 0 ? 0 : vx;
          vy = vy <= 0 ? 0 : vy;

          if ((vx == 0 && vy == 0) || !animating) {
            return;
          }

          self.transform(vx * dirx, vy * diry, 1, 0);
          requestAnimationFrame(frame);
        }
      });
    },
    onmouseup: function(e) {
      var upDate = Date.now();
      var mpos = new Point(e.offsetX, e.offsetY),
        mapPos = this.crs.screenPointToMapPoint(mpos);
      this.isMousedown = false;
      // 解除鼠标拖拽事件
      this.off(EventType.mdrag);
      this.fire(EventType.mup, mapPos, upDate);
      this.layersDic.forEach(ly => {
        ly.fire(EventType.mup, mapPos, upDate);
      });
    },
    // 视图变换
    transform: function(disX, disY, scale, rotate, reRender = true) {
      this.crs.transform(disX, disY, scale, rotate);
      this.layersDic.forEach(ly => {
        ly.setTransform(this.crs.viewmatrix.matrix);
      });
      this.level = Math.log2(
        this.crs.viewmatrix.scale / (128 / this.crs.projection.PI_R)
      );
      if (reRender) this.render();
    },
    // 视图缩放
    zoom(center, scale) {
      this.transform(
        center.x * (1 / scale - 1),
        center.y * (1 / scale - 1),
        scale,
        0
      );
    },
    project(crs) {
      if (crs) this.crs = crs;
      this.transform(0, 0, 128 / this.crs.projection.PI_R, 0);
      return this;
    },
    updateBound: function() {
      this.bound = new Bound();
      this.layersDic.forEach(ly => {
        this.bound.extend(ly.bound);
      });
    }
  }
});
