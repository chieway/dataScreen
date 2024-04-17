<template>
  <div style="width: 100%; height: 100%">
    <div id="OneW" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "venueLBoxOne",

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
      this.$echarts.init(document.getElementById("OneW")).resize();
    });
  },
  methods: {
    initCommunityEquipment() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("OneW"));
      // 绘制图表
       let option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          itemWidth: 6,
          itemHeight: 6,
          icon: "circle",
          show: true,
          x: "right",
          top: "2%",
          y: "35",
          // icon: "stack",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#C1EDFF",
          },
        },
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
            "PC",
            "己内酰胺",
            "尼龙6",
            "多元醇",
            "瑞恒硝基氯丙苯",
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
            name: "运行指标完成率",
            type: "line",
            barGap: 0,
            symbolSize: 0,
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "#009CDE",
            },

            data: [150, 332, 301, 334, 390],
          },
       
          {
            name: "技术指标完成率",
            type: "line",
             symbolSize: 0,
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "#FFB557",
            },
            data: [350, 232, 201, 154, 190],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>


