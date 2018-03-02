# aiMap
A geo-data visualization platform
# Tile load
```javascript
//创建加载瓦片的地图
 var map = new A.Map({
                cid: 'container',
                tile: `http://mt2.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&x={0}&y={1}&z={2}`
            }).project()
```
#### Impression drawing is as follows
![效果图](https://github.com/BuggMaker/aiMap/blob/master/resources/img/map.png)
# Layer adn Geometry Render
If the layer is a GIS layer,you need to use the function project to convert the geo-coordinate LangLat to map point.
```javascript
//添加一个图层
var ly1 = new A.Layer({
                index: 1,
                title: 'point'
            }).addTo(map)
//添加中国行政区划
            china.features.forEach(fea => {
                var geo = fea.geometry
                if (fea.properties.name === '广东') {
                    console.log('000')
                }
                new A.Polygon({
                    points: geo.coordinates,
                    width: 10000,
                    interactive: true,
                    fill: true,
                    style: {
                        strokeStyle: '#4B4B4B',
                        fillStyle: '#242424',
                        globalAlpha: 0.4
                    },
                    interactiveStyle: {
                        strokeStyle: '#4B4B4B',
                        fillStyle: '#242424',
                        shadowBlur: 10,
                        shadowColor: 'white',
                        globalAlpha: 0.5
                    }
                }).project(map.crs).addTo(ly1)
            })
            //设置视图中心
            map.setCenterLngLat([103.35, 37], 5)
            //渲染地图
            map.render()
```
#### Impression drawing is as follows
![效果图](https://github.com/BuggMaker/aiMap/blob/master/resources/img/geo-json.png)
