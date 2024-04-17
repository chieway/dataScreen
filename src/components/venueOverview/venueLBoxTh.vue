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
            "经营活动现金流",
            "经营活动现金流系数",
            "投资活动现金流",
            "自由现金流",
          ],
        },
        yAxis: {
          type: "value",
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
            name: "",
            type: "bar",
            barGap: 0,
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "red",
            },

            data: [320, 332, 301, 334, 390],
          },
          {
            name: " ",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "#1A93EA",
            },
            data: [220, 182, 191, 234, 290],
          },
          {
            name: "",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "#1ADB99",
            },
            data: [150, 232, 201, 154, 190],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>


