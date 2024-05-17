<template>
  <div style="width: 100%; height: 100%">
    <div id="ThW" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "venueLBoxTh",

  data() {
    return {
      sData: [],
    };
  },
  mounted() {
    const testJson = require("../../static/test.json");
    const { sData } = testJson;
    this.sData = sData;

    this.initCommunityEquipment();
    window.addEventListener("resize", () => {
      this.$echarts.init(document.getElementById("ThW")).resize();
    });
  },
  methods: {
    initCommunityEquipment() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("ThW"));
      // 绘制图表
      let option = {
        tooltip: {
          trigger: "axis",
        },
        // legend: {
        //   itemWidth: 6,
        //   itemHeight: 6,
        //   show: true,
        //   x: "center",
        //   top: "2%",
        //   y: "35",
        //   icon: "stack",
        //   itemWidth: 10,
        //   itemHeight: 10,
        //   textStyle: {
        //     color: "#FFFFFF",
        //   },
        //   data: ["阀门", "闸门", "附属设施", "助航设施", "水工建筑物"],
        // },
        grid: {
          left: "6%",
          right: "4%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: [0, 0.01],
          axisLine: { show: true },
          axisLabel: { color: "#C1EDFF", formatter: "{value}%" },
          axisLabel: {
            width: 68,
            interval: 0,
            height: 34,
            margin: 8.5,
            color: "#C1EDFF"
          },
          data: [
            "切割设备",
            "焊接设备",
            "打标设备",
            "自动化设备",
          ],
        },
        yAxis: {
          type: "value",
          name: '（次）',
          nameTextStyle: {
            color:"#fff"
          },
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { color: "#C1EDFF" },
          splitLine: {
            // interval: 101,
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#00AACF",
            },
          },
        },
        series: [
          {
            name: "故障报工",
            type: "bar",
            barGap: 0,
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "red",
            },
            data: [12,16,11,21],
          },
          {
            name: "现场检修",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "#1A93EA",
            },
            data: [8, 12,5,15],
          },
          {
            name: "更换零件",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "#1ADB99",
            },
            data: [5,5,3,8],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>


