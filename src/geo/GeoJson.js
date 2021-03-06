import {
    isArray
} from "../index";

/**
 * GeoJson类
 * 检测GeoJso数据格式是否正确
 * @param {GeoJson} data 
 */
var GeoJson = function (data) {
    if (!GeoType[data.type]) throw `not format GeoJson, wrong 'type'`
    this.type = data['type']
    switch (this.type) {
        case GeoType.FeatureColledtion:
            var features = data['features']
            if (!isArray(features)) throw `not format GeoJson, wrong 'features'`
            this.features = []
            features.forEach(feature => {
                this.features.push(new GeoJson(feature))
            });
            break
        case GeoType.GeometryCollection:
            var geometries = data['geometries']
            if (!isArray(geometries)) throw `not format GeoJson, wrong 'geometries'`
            this.geometries = []
            geometries.forEach(feature => {
                this.geometries.push(new GeoJson(feature))
            });
            break
        case GeoType.Feature:
            var geometry = data['geometry']
            if (!geometry) throw `not format GeoJson, wrong 'geometry'`
            for (const key in data) {
                if (data.hasOwnProperty(key) && key !== 'geometry') {
                    this[key] = data[key]
                }
            }
            this.geomrtry = new GeoJson(geometry)
            break
        case GeoType.Point:
        case GeoType.MultiPoint:
        case GeoType.LineString:
        case GeoType.MultiLineString:
        case GeoType.Polygon:
        case GeoType.MultiPolygon:
            var coordinates = data['coordinates']
            if (!isArray(coordinates)) throw `not format GeoJson, wrong 'coordinates'`
            this.coordinates = coordinates
            break
    }
}

GeoJson.check = function (data) {
    try {
        var gj = new GeoJson(data)
    } catch (e) {
        return false
    }
    return true
}

var GeoType = {
    Point: 'Point',
    MultiPoint: 'MultiPoint',
    LineString: 'LineString',
    MultiLineString: 'MultiLineString',
    Polygon: 'Polygon',
    MultiPolygon: 'MultiPolygon',
    Feature: 'Feature',
    FeatureColledtion: 'FeatureColledtion',
    GeometryCollection: 'GeometryCollection'
}

export {
    GeoJson,
    GeoType
}