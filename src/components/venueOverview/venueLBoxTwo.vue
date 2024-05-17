<template>
  <div style="width: 100%; height: 100%">
    <div id="TWOW" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "venueLBoxTwo",

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
      this.$echarts.init(document.getElementById("TWOW")).resize();
    });
  },
  methods: {
    initCommunityEquipment() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("TWOW"));
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
          // axisLabel: { color: "#C1EDFF", formatter: "{value}%" },
          axisLabel: {
            // width: 68,
            // interval:3,
            // height: 34,
            // margin: 8.5,
            color: "#C1EDFF",
            // formatter: "{value}%"
          },
          data: [
            "切割设备",
            "焊接设备",
            "打标设备",
            "自动化设备",
          ],
          // data: [
          //   "切割设备",
          //   "","","",
          //   "焊接设备",
          //   "","","",
          //   "打标设备",
          //   "","","",
          //   "自动化设备",
          // ],
        },
        yAxis: {
          type: "value",
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { 
            color: "#C1EDFF",
            // formatter: '{value} 万'
          },
          name: '（台）',
          nameTextStyle: {
            color:"#fff"
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#00AACF",
            },
          },
        },

        series: [
          {
            name: "生产设备数量",
            type: "line",
            barGap: 0,
             symbolSize: 0,
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "#009CDE",
            },
            areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(25,163,223,.2)"
                    },
                    {
                        offset: 1,
                        color: "rgba(25,163,223, 0.1)"
                    }
                ], false),
                shadowColor: 'rgba(25,163,223, 0.3)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        // data: [34,0,0,0,22,0,0,0,18,0,0,0,36],
        data: [34,22,18,36],
            // data: [320, 332, 301, 334, 390,332, 301, 334,332, 301, 334,332, 301,],
          },
          {
            name: "交付设备数量",
            type: "line",
             symbolSize: 0,
            emphasis: {
              focus: "series",
            },
            itemStyle: {
               color: "#FFB557",
            },
            areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(255, 148, 61, 1)"
                    },
                    {
                        offset: .4,
                        color: "rgba(255, 148, 61, 0.5)"
                    },
                    {
                        offset: 1,
                        color: "rgba(25,163,223, 0.1)"
                    }
                ], false),
                shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        // data: [26,100,100,100,18,100,100,100,24,100,100,100,20],
        data: [26,18,24,20],
            // data: [220, 182,334, 390,332, 301, 334,332, 301, 191,182,334, 234,],
          },
        
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>


