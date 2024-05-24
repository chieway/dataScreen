import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts'
import * as echartsGL from 'echarts-gl' // 引入echarts
Vue.prototype.$echartsGL = echartsGL // 引入组件（将echarts注册为全局）
// import * as china from './map/js/china'
import guangzejson from './map/json/province/fujian-guangze.json'
import VueAMap from 'vue-amap'
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'cd98d5df93d1f37ff7a34e5871bae2f8',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.ControlBar','AMap.MouseTool','AMap.GeometryUtil','AMap.DistrictSearch'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
  uiVersion:'1.0.11'
});

window.echarts = echarts
Vue.prototype.$echarts = echarts
// Vue.prototype.$china = china
// eslint-disable-next-line
echarts.registerMap("guangze", guangzejson)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
