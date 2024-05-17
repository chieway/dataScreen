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
        zoom: 10,
        center: [116.397428, 39.90923] // 初始化地图中心点
      });
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