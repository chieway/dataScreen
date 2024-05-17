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
            "切割设备",
            "焊接设备",
            "打标设备",
            "自动化设备",
          ],
        },
        yAxis: {
          type: "value",
          axisLine: { show: false },
          axisTick: { show: false },
          name: '（万元）',
          nameTextStyle: {
            color:"#fff"
          },
          axisLabel: { 
            color: "#C1EDFF",
            // formatter: '{value} 万'
          },
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
            name: "签约合同金额",
            type: "line",
            barGap: 0,
            symbolSize: 0,
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "#009CDE",
            },
            data: [340,220,280,360]
          },
          {
            name: "回款合同金额",
            type: "line",
             symbolSize: 0,
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "#FFB557",
            },
            data: [263,281,364,317],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>


