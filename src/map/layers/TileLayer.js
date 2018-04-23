import { Layer } from "./Layer";
import { SquareCoord } from "../../geo/prj/coords";
import { Point, Tile, EventType, UtilObj } from "../index";
import { Graphics } from "./Canvas";

// 地图万片层
export var TileLayer = Layer.extend({
  name: "TileLayer",
  constructor: function(config) {
    this.urlTemplate =
      config.urlTemplate ||
      `http://mt2.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}`;
    // 层次
    // 根据不同层次改变格网单元大小,进而加载不同瓦片
    var _level = -1;
    this.defProp("level", {
      get: () => {
        return _level;
      },
      set: val => {
        _level = Math.round(val);
      }
    });
    // 格网单元大小
    this.defProp("unit", {
      get: () => {
        return 2 * this.parent.crs.projection.PI_R / Math.pow(2, this.level);
      }
    });
    // 矩形格网坐标系
    this.defProp("coord", {
      get: () => {
        return new SquareCoord({
          origin: new Point(0, 0),
          unit: this.unit
        });
      }
    });
    // 存储瓦片对象的键值对
    // 以level为键,以当前level的瓦片字典为值
    this.tileDictionary = new Map();
    this.defProp("totalTiles", {
      get: () => {
        var num = 0;
        this.tileDictionary.forEach(dic => {
          num += dic.size;
        });
        return num;
      }
    });

    // this.on('levelchange', function () {
    //     _update.call(this)
    // })
    // this.on(EventType.mdrag, function () {
    //     _update.call(this)
    // })
  },
  publics: {
    render: function() {
      this.update();
      var ctx = this.canvas.context;
      ctx.save();
      Graphics.clear(ctx);
      for (let i = this.level; i >= 0; i--) {
        var map = this.tileDictionary.get(this.level - i);
        map &&
          map.forEach(tile => {
            if (tile.isNeedRender) {
              ctx.save();
              UtilObj.replace(ctx, tile.style);
              UtilObj.replace(ctx, tile.interactiveStyle);
              tile.render(ctx);
              ctx.restore();
            }
          });
      }
      ctx.restore();
    },
    update: function() {
      // 计算需要显示的tile,没有的添加
      var from = this.coord.getCoord(this.parent.renderBound.leftTop),
        to = this.coord.getCoord(this.parent.renderBound.rightBottom),
        coordOrigin = this.coord.origin;

      var dic = this.tileDictionary.get(this.level) || new Map();
      for (let r = from.y; r <= to.y; r++) {
        if (r >= 0 && r < Math.pow(2, this.level)) {
          for (let c = from.x; c <= to.x; c++) {
            // if (c >= 0) {
            var sn = Math.pow(2, this.level);
            var col = c % sn >= 0 ? c % sn : c % sn + sn;
            var org = new Point(
              coordOrigin.x + c * this.unit,
              coordOrigin.y + r * this.unit
            );
            var t = new Tile(org, this.unit, {
                level: this.level,
                coord: [c, r],
                imgCoord: [col, r],
                urlTemplate: this.urlTemplate
              }),
              key = `${c}_${r}`;
            // 判断tile是否存在,不存在添加,保证每个tile对象只实例化一次
            if (!dic.has(key)) {
              dic.set(key, t);
              t.parent = this;
            }
            // }
          }
        }
      }
      !this.tileDictionary.get(this.level) &&
        this.tileDictionary.set(this.level, dic);
      // 后续可设置上限,以免过多内存消耗
    }
  }
});
