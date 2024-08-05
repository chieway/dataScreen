<template >
  <el-container id="container"> </el-container>
</template>
<script>
export default {
  data() {
    return {
      marker: {}, //点标记
      markers: [], //点集合
      map: {}, //地图对象
      infoWindow: null,
      infoWindowVisible: false,
      infoContent: [],
      intervalId: null,
      currentIndex: 0
    };
  },
  methods: {
    //初始化地图
    initMap() {
      //创建地图
      this.map = new AMap.Map("container", {
        // cursor: "default",
        mapStyle: 'amap://styles/darkblue',
        // mapStyle: 'amap://styles/db9efe6a1745ac24b7269b862f359536',
        // mapStyle: 'amap://styles/twilight',
        resizeEnable: true, //是否监控地图容器尺寸变化，默认值为false
        expandZoomRange: true, //是否支持可以扩展最大缩放级别,和zooms属性配合使用设置为true的时候，zooms的最大级别在PC上可以扩大到20级，移动端还是高清19/非高清20
        // gestureHandling: "greedy",//谷歌里面的// hybrid包含卫星和地名
        zooms: [4, 20],
        zoom: 11,
        // center: [113.280637, 23.125178],
        // center: [],
        defaultCursor: "pointer", //变成小手 地图默认鼠标样式。参数defaultCursor应符合CSS的cursor属性规范
        showLabel: true, //显示地图文字标记
        // features: ['bg'],
        layers: [
          // new AMap.TileLayer.Satellite() //默认卫星
          // new AMap.TileLayer.RoadNet(), //地图路网
          // new AMap.Buildings({// 楼块图层
          //   zooms: [16, 18],
          //   zIndex: 10,
          //   heightFactor: 2 //2倍于默认高度，3D下有效
          // })
        ] //Satellite卫星地图，RoadNet路网，地图图层数组，数组可以是图层 中的一个或多个，默认为普通二维地图。当叠加多个图层时，普通二维地图需通过实例化一个TileLayer类实现
        // viewMode: "3D", //是否3d视角
        // pitch: 40 //俯仰角度，默认0，[0,83]，2D地图下无效 。（自V1.4.0开始支持）
      });
      
      //行政区域
      AMapUI.loadUI(["geo/DistrictExplorer"], DistrictExplorer => {
        //创建一个实例
        var districtExplorer = new DistrictExplorer({
          eventSupport: true,
          map: this.map
        });
        //feature被点击
        // districtExplorer.on("featureClick", (e, feature) => {});
        //外部区域被点击
        // districtExplorer.on("outsideClick", e => {});

        //内部区域feature被点击
        districtExplorer.on("featureClick", (e, feature) => {
          console.log("feature", feature);
          this.currentIndex = 0;
          adcodes = []; //清空区码数组
          adcodes = [feature.properties.adcode]; //绘制地图区域
          // this.initCity(feature); //调用city城市地图
          districtExplorer.loadMultiAreaNodes(adcodes, (error, areaNodes) => {
            //设置定位节点，支持鼠标位置识别
            console.log("areaNodes", areaNodes);
            //注意节点的顺序，前面的高优先级
            districtExplorer.setAreaNodesForLocating(areaNodes);
            //清除已有的绘制内容
            districtExplorer.clearFeaturePolygons();
            for (var i = 0, len = areaNodes.length; i < len; i++) {
              renderAreaNode(areaNodes[i]);
              this.initTown(areaNodes[i]);
            }
            //更新地图视野
            this.map.setFitView(districtExplorer.getAllFeaturePolygons());
            if(feature.properties.adcode === 440000) {
              this.infoContent = ['广州市','深圳市','东莞市','肇庆市','佛山市','惠州市','珠海市','中山市','江门市']
              this.intervalId = setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.infoContent.length;
                var content = this.infoContent[this.currentIndex];

                
                if(this.infoWindow) {
                  this.infoWindow.close()
                }
                this.renderInfoWindow(content,null)
              }, 5000)
            }
          });
        });
        //外部区域被点击
        districtExplorer.on("outsideClick", e => {
          this.removeArea(); //清除地图上的文字marker标记
          //setTimeout(() => {
            //this.map.setCenter([119.92, 28.45]); //设置地图中心
          //}, 1000);

          /***清空监听的项目名称id和adcode***/
          adcodes = [];
          adcodes = [
            // 100000
            440000
            // 440000 //浙江
          ];
          // this.initCity(); //获取城市区域
          districtExplorer.loadMultiAreaNodes(adcodes, (error, areaNodes) => {
            //设置定位节点，支持鼠标位置识别
            //注意节点的顺序，前面的高优先级
            districtExplorer.setAreaNodesForLocating(areaNodes);
            //清除已有的绘制内容
            districtExplorer.clearFeaturePolygons();
            for (var i = 0, len = areaNodes.length; i < len; i++) {
              renderAreaNode(areaNodes[i]);
              this.initTown(areaNodes[i]);
            }
            //更新地图视野 下钻上浮效果
            this.map.setFitView(districtExplorer.getAllFeaturePolygons());
          });
        });

        //设置绘制的子区域和父区域的自身属性（包括线颜色，透明度等）
        function renderAreaNode(areaNode) {
          //绘制子级区划
          districtExplorer.renderSubFeatures(areaNode, function(feature, i) {
            return {
              cursor: "default",
              bubble: true,
              // strokeColor: "#00a4ce", //线颜色
              // strokeColor: "#03d7a1",
              strokeColor: 'blue',
              strokeOpacity: 1, //线透明度
              strokeWeight: 1.5, //线宽
              // fillColor: "#09152a", //填充色
              // fillColor: "#072942",
              fillColor: 'blue',
              fillOpacity: 0.5 //填充透明度
            };
          });
          //绘制父区域
          districtExplorer.renderParentFeature(areaNode, {
            cursor: "default",
            bubble: true,
            // strokeColor: "#00a4ce", //线颜色
            // strokeColor: "#03d7a1",
            // strokeColor: 'blue',
            strokeColor: 'rgb(43,115,214)',
            strokeOpacity: 1, //线透明度
            strokeWeight: 1.5, //线宽
            // fillColor: "#09152a", //填充色
            // fillColor: "#072942",
            fillColor: 'rgb(2,22,96)',
            // fillColor: 'blue',
            fillOpacity: 0.5 //填充透明度
          });
        }
        var adcodes = [];
        //根据角色来绘制不同的区域
        adcodes = [
          // 100000,
          440000, //广东
          // 820000, // 澳门
          // 810000, // 香港
        ];
        // this.initCity();
        //绘制多区域
        districtExplorer.loadMultiAreaNodes(adcodes, (error, areaNodes) => {
          //设置定位节点，支持鼠标位置识别
          //注意节点的顺序，前面的高优先级
          districtExplorer.setAreaNodesForLocating(areaNodes);
          //清除已有的绘制内容
          districtExplorer.clearFeaturePolygons();
          console.log('adcodesadcodes',adcodes)
          for (var i = 0, len = areaNodes.length; i < len; i++) {
            renderAreaNode(areaNodes[i]);
            this.initTown(areaNodes[i]);
          }
          if(adcodes.join('') === '100000') {
            this.infoContent = ['广东省','香港特别行政区','澳门特别行政区']
            this.intervalId = setInterval(() => {
              this.currentIndex = (this.currentIndex + 1) % this.infoContent.length;
              var content = this.infoContent[this.currentIndex];
              if(this.infoWindow) {
                this.infoWindow.close()
              }
              this.renderInfoWindow(content,null)
            }, 5000)
          }else if(adcodes.join('') === '440000') {
            this.infoContent = ['广州市','深圳市','东莞市','肇庆市','佛山市','惠州市','珠海市','中山市','江门市']
            this.intervalId = setInterval(() => {
              this.currentIndex = (this.currentIndex + 1) % this.infoContent.length;
              var content = this.infoContent[this.currentIndex];
              const areaNode = areaNodes[0]._data.geoData.lngLatSubList
              // console.log('kkkkk',areaNode)
              const center = areaNode.filter(item => item.properties.name.includes(content)).map(item => item.properties.center)
              const a = [center[0][0],center[0][1]]
              if(this.infoWindow) {
                this.infoWindow.close()
              }
              this.renderInfoWindow(content,a)
            }, 5000)
          }
          //更新地图视野 下钻效果
          this.map.setFitView(districtExplorer.getAllFeaturePolygons());
        });
      });

      const proviceList = ['广东省','香港','澳门']
      proviceList.forEach(item => {
        this.areaBg(this.map,item)
      })
    },

    areaBg(map,cityName) {
      AMap.service('AMap.DistrictSearch', function () {
        if(this.infoWindow) {
          this.infoWindow.close()
          clearInterval(this.intervalId)
          if(cityName === '广东省') {
            this.infoContent = ['广州市','深圳市','东莞市','肇庆市','佛山市','惠州市','珠海市','中山市','江门市']
            this.intervalId = setInterval(() => {
              this.currentIndex = (this.currentIndex + 1) % this.infoContent.length;
              var content = this.infoContent[this.currentIndex];
              if(this.infoWindow) {
                this.infoWindow.close()
              }
              this.renderInfoWindow(content,null)
            }, 5000)
          }
        }
            let opts = {
                subdistrict: 1,   // 返回下一级行政区
                extensions: 'all',  // 返回行政区边界坐标组等具体信息
                level: 'city'  // 查询行政级别为市
            };
            // 实例化DistrictSearch
            let district = new AMap.DistrictSearch(opts);
            district.setLevel('district');
            // 行政区查询
            district.search(cityName, function (status, result) {
              // console.log('resultttt',result)
                // 获取边界信息
                let bounds = result.districtList[0].boundaries;
                // console.log('bounds',bounds)
                let polygons = [];
                if (bounds) {
                    for (let i = 0, l = bounds.length; i < l; i++) {
                        // 生成行政区划polygon
                        let polygon = new AMap.Polygon({
                            map: map,
                            strokeWeight: 1,
                            path: bounds[i],
                            fillOpacity: 0.2,
                            fillColor: 'rgb( 0,152,253)',
                            strokeColor: 'rgb(1,144,218)',
                            // fillColor: 'rgba(71,228,194,0.44)',
                            // strokeColor: 'rgba(83,204,79,0.65)'
                        });
                        polygons.push(polygon);
                    }
                }
            });
        });
    },

    renderInfoWindow(name,center) {
      const data = [
        {city: '广州市',one: 67691,two: 16923,three: 14215,four: 15569,five: 20984,six: 67691},
        {city: '佛山市',one: 79421,two: 19855,three: 16678,four: 18267,five: 24621,six: 79421},
        {city: '肇庆市',one: 23818,two: 5955,'three': 5002,'four': 5478,'five': 7384,'six': 23818},
        {city: '深圳市',one: 16128,'two': 4032,'three': 3387,'four': 3709,'five': 5000,'six': 16128},
        {city: '东莞市',one: 115612,'two': 28903,'three': 24279,'four': 26591,'five': 35840,'six': 115612},
        {city: '惠州市',one: 58551,'two': 14638,'three': 12296,'four': 13467,'five': 18151,'six': 58551},
        {city: '珠海市',one: 43486,'two': 10872,'three': 9132,'four': 10002,'five': 13481,'six': 43486},
        {city: '中山市',one: 51225,'two': 12806,'three': 10757,'four': 11782,'five': 15880,'six': 51225},
        {city: '江门市',one: 36891,'two': 9223,'three': 7747,'four': 8485,'five': 11436,'six': 36891},
        {city: '香港',one: 128,'two': 32,'three': 27,'four': 29,'five': 40,'six': 128},
        {city: '澳门',one: 69,'two': 17,'three': 14,'four': 16,'five': 21,'six': 69},
        {city: '深汕特别合作区',one: 8563,'two': 2141,'three': 1798,'four': 1969,'five': 2655,'six': 8563},
        {city: '广东省',one: 501386,two: 125347,three: 105291,four: 115319,five: 155430,six: 501386},
        {city: 'all',one: 501583,'two': 125396,'three': 105332,'four': 115364,'five': 155491,'six': 501583},
      ]

      let filterData = data.filter(item => name.includes(item.city))
      let renderData = {}
      if(filterData.length) {
        renderData = filterData[0]
      }

      const renderContent = `<div class="info-window-wrap">
        <div class="city">${name}</div>
          <div class="item" style="color: yellow" >
            <span class="label">设备总数：</span>
            <span class="value">${renderData.one || 0}台</span>
          </div>
          <div class="item" >
            <span class="label">切割设备：</span>
            <span class="value">${renderData.two || 0}台</span>
          </div>
          <div class="item">
            <span class="label">焊接设备：</span>
            <span class="value">${renderData.three || 0}台</span>
          </div>
          <div class="item">
            <span class="label">打标设备：</span>
            <span class="value">${renderData.four || 0}台</span>
          </div>
          <div class="item">
            <span class="label">自动化设备：</span>
            <span class="value">${renderData.five || 0}台</span>
          </div>
          <div class="item">
            <span class="label">售后服务：</span>
            <span class="value">${renderData.six || 0}次</span>
          </div>
        </div>`

      this.infoWindow = new AMap.InfoWindow({
        isCustom: true,
        content: renderContent,
        // template: '',
        anchor: "top-left",
        position: center,
        autoMove: true,
        retainWhenClose: true,
        // offset: new AMap.Pixel(10, -33),
        visible: this.infoWindowVisible,
      });
      // this.infoWindow.open(this.map,this.map.getCenter())
      this.infoWindow.open(this.map,center || this.map.getCenter())
    },

    /**各市级地图***这里要想渲染点标记就需要后台接口给你全部数据来循环里面的详细内容或者自己点出来*****/
    initCity(feature) {
      if (
        feature.properties.adcode == undefined ||
        feature.properties.adcode == null ||
        feature.properties.adcode == ""
      ) {
        adcode = "";
      }
      this.removeArea(); //清空文字点标记
      this.marker = new AMap.Marker({
        content: `<div class ="markerCss">${feature.properties.name} </div>`,
        position: [feature.properties.center[0], feature.properties.center[1]],
        offset: new AMap.Pixel(0, 0)
      });
      this.markers.push(this.marker);
      this.map.add(this.markers);
    },
    //多个县级名称
    initTown(AreaNode) {
      if (
        AreaNode.adcode == undefined ||
        AreaNode.adcode == null ||
        AreaNode.adcode == ""
      ) {
        adcode = "";
      }
      this.removeArea(); //清空文字点标记
      if (AreaNode._data.geoData.lngLatSubList) {
        AreaNode._data.geoData.lngLatSubList.forEach(item => {
          const {adcode,level,center} = item.properties
          if(level === 'province' && adcode !== 440000 && adcode !== 810000 && adcode !== 820000) {
            return
          }
          this.marker = new AMap.CircleMarker({
            center: [center[0], center[1]],
            radius: 10,
            strokeColor: "white", //轮廓线颜色
            strokeWeight: 2, //轮廓线宽度
            strokeOpacity: 0.5, //轮廓线透明度
            fillColor: "rgba(0,0,255,1)", //多边形填充颜色
            fillOpacity: 0.5, //多边形填充透明度
            zIndex: 10, //多边形覆盖物的叠加顺序
            cursor: "pointer", //鼠标悬停时的鼠标样式
            extData: {
              name: item.properties.name,
              center
            }
          });
          this.marker.on('click', (e) => {
            const {name} = e.target.w.extData
            this.renderInfoWindow(name,center)
            // infoWindow.open(map, map.getCenter());
            // infoWindow.open(map, marker.getPosition());
          });
          this.markers.push(this.marker);
        });
      }else{
        this.initCity(AreaNode._data.geoData.parent)
      }

      this.map.add(this.markers);
    },
    /******清空省市区域坐标**/
    removeArea() {
      this.map.remove(this.markers);
      this.markers = [];
      
      this.infoWindowVisible = false
      if(this.infoWindow) {
        this.infoWindow.close()
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.initMap();
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  }
};
</script>
<style>
#container {
  padding:0px;
  margin: 0px;
  /* height: calc(100% - 100px); */
  height: calc(100% - 66/10.8*1vh);
  width: 100%;
  /* background: url('../../assets//mapBg.png') no-repeat center; */
  /* background-size: cover; */
}
.markerCss {
  font-size: 12px;
  /* font-weight: 600; */
  color: #fff;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #fff;
}
.info-window-wrap {
  border: 1px solid yellow;
  background-color: rgba(0,0,0,0.3);
  color: #fff;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.info-window-wrap .city {
  font-size: 16px;
  font-weight: bold;
  color: yellow;
}
.info-window-wrap .item {
  margin-bottom: 4px;
}
</style>
