<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  name: "map-view",
  data() {
    return {
      map: null,
      district: null,
      bounds: null,
      line: null
    }
  },
  mounted() {
    // this.initAMap();
    this.initAMap()
  },
  beforeDestroy() {
    if(this.map) {
      this.map.destroy();
    }
  },
  methods: {
    initMap() {
      this.map = new AMap.Map('map', {
        resizeEnable: true,
        expandZoomRange: true,
        gestureHandling: 'greedy',

        // zoom: 10,
        defaultCursor: 'pointer',
        mapStyle: "amap://styles/f6e3818366ba5268d50ea3f2296eb3eb",
        showLabel: true,
        center: [116.397428, 39.90923] // 初始化地图中心点

      });
      this.typhoonLayer = new AMap.OverlayGroup(); //覆盖物集合创建
      this.typhoonLayer.setMap(this.map)
      this.map.on("complete", () => {
        if(window.screen.width>=1600&&window.screen.height>900){
          this.map.setZoom(8)
          this.map.setCenter([119.846375,29.10946])
        }else{
          this.map.setZoom(7.5)
          this.map.setCenter([119.759863,29.3437])
        }

                // setTimeout(()=>{
                //   $(".leftOne").css({ "opacity": "1", "top": "20px", "left": "20px"});
                //   $(".leftTwo").css({ "opacity": "1", "top": "35%", "left": "20px"});
                //   $(".leftThree").css({ "opacity": "1", "bottom": "20px", "left": "20px"});
                // },500)
            });
            // AMap.event.addListener(that.map, 'click', getLnglat); //点击事件
            // function getLnglat(e) {
            // var x = e.lnglat.getLng();
            // var y = e.lnglat.getLat();
            // console.log(x,y);
            // }
    },

    initAMap() {
      window._AMapSecurityConfig = {
        securityJsCode: "ff5b1980449126948362d23ebfdf3bad",
      };
      AMapLoader.load({
        key: "cd98d5df93d1f37ff7a34e5871bae2f8", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.Scale","AMap.DistrictSearch"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
      })
        .then((AMap) => {
          console.log('AMap--',AMap)
          this.map = new AMap.Map("container", {
            // 设置地图容器id
            viewMode: "3D", // 是否为3D地图模式
            zoom: 11, // 初始化地图级别
            center: [116.397428, 39.90923], // 初始化地图中心点位置
          });
          console.log('this.map',this.map)
        })
        .catch((e) => {
          console.log(e,'------');
        });
    },
    loadDistrict() {
      this.district = new AMap.DistrictSearch({
        level: 'city',
        extensions: 'all',
        subdistrict: 0
      });
 
      this.district.on('load', (result) => {
        this.bounds = result.bounds;
        this.map.setBounds(this.bounds);
        this.drawPolyline();
      });
 
      this.district.search('北京市');
    },
  },
};
</script>

<style  scoped>
  #container{
    padding:0px;
    margin: 0px;
    width: 100%;
    height: 800px;
  }
</style>