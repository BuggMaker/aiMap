import {
    Class
} from "../../core/Class";
import {
    Bound
} from "../../geometry/Bound";
import { Point } from "../../geometry/vector/Point";

/**
 * @Const Object 
 * Web墨卡托投影
 * 将地理坐标投影为平面坐标,即平时所说的投影坐标
 * 
 */
const WebMecrator = {
    R: 6378137,
    piR:20037508.3427892,
    R_MINOR: 6356752.314245179,
    bound: new Bound([-20037508.3427892, 20037508.3427892], [20037508.3427892, -20037508.3427892]),
    project: function (lnglat) {
        var d = Math.PI / 180,
            r = this.R,
            y = lnglat.lat * d,
            tmp = this.R_MINOR / r,
            e = Math.sqrt(1 - tmp * tmp),
            con = e * Math.sin(y);

        var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
        y = -r * Math.log(Math.max(ts, 1E-10));
        return new Point(lnglat.lng * d * r, y);
    },
    unproject: function (point) {
        var d = 180 / Math.PI,
            r = this.R,
            tmp = this.R_MINOR / r,
            e = Math.sqrt(1 - tmp * tmp),
            ts = Math.exp(-point.y / r),
            phi = Math.PI / 2 - 2 * Math.atan(ts);

        for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
            con = e * Math.sin(phi);
            con = Math.pow((1 - con) / (1 + con), e / 2);
            dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
            phi += dphi;
        }
        return new Lnglat(point.x * d / r, phi * d);
    }
}

export {
    WebMecrator
}