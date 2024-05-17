<template>
  <div style="float: left; width: 100%; height: 100%">
    <div style="width: 100%; height: 100%" class="card">
      <div
        class="recycle-record"
        style="
          /* padding: 10px; */
          /* width: calc(100% - 30px); */
          height: calc(100% - 5px);
        "
      >
        <div style="height: 100%; width: 100%">
          <div style="height: calc(95% - 8px)">
            <div
              class="recycle-record-title"
              style="
                height: calc(40 / 10.8 * 1vh);
                width: 100%;
                /* overflow-y: auto; */
                background-color: rgb(255, 0, 0, 0);
              "
            >
              <div style=" width: 20%; float: left; margin-right: 10px; text-align: center">
                客户名称
              </div>
              <div style=" float: left; width: 15%; margin-right: 10px; text-align: center">
                设备数量
              </div>
              <div style=" float: left; width: 15%; margin-right: 10px; text-align: left">
                正常运行
              </div>
              <div style=" float: left; width: 15%; margin-right: 10px; text-align: left">
                停止运行
              </div>
              <div style=" float: left; width: 15%; margin-right: 10px; text-align: left">
                检修状态
              </div>
              <div style=" float: left; width: 20%; text-align: left">累计运行小时</div>
            </div>
            <div class="recycle-record-content">
              <div
                class="recycle-record-content-line"
                style="
                  height: calc(45 / 10.8 * 1vh);
                  border-bottom: 1px solid #0081ff;
                "
                v-for="(line, i) in recycleRecords"
                :key="i"
              >
                <div
                  class="recycle-record-content-item"
                  :title="line.name"
                  style="
                    width: 25%;
                    float: left;
                    text-align: left;
                    position: relative;
                    height: calc(35 / 10.8 * 1vh);
                  "
                >
                  <div
                    class="lineStateClassD"
                    style="background-color: rgba(224, 32, 32, 0)"
                  >
                    {{ line.name }}
                  </div>
                </div>

                <div
                  class="recycle-record-content-item"
                  :title="line.channelFlowmeter"
                  style="
                    width: 15%;
                    float: left;
                    text-align: left;
                    position: relative;
                    height: calc(35 / 10.8 * 1vh);
                  "
                >
                  <div
                    class="lineStateClassD"
                    :style="{  color: line.channelFlowmeter == '异常' ? 'red' : '', }"
                  >
                    {{ line.channelFlowmeter }}
                  </div>
                </div>

                <div
                  class="recycle-record-content-item"
                  :title="line.pipelineFlowmeter"
                  style="
                    width: 15%;
                    float: left;
                    text-align: left;
                    position: relative;
                    height: calc(35 / 10.8 * 1vh);
                  "
                >
                  <div
                    class="lineStateClassD"
                    :style="{ color: line.pipelineFlowmeter == '异常' ? 'red' : ''}"
                  >
                    {{ line.pipelineFlowmeter }}
                  </div>
                </div>

                <div
                  class="recycle-record-content-item"
                  :title="line.powerConsumption"
                  style="
                    width: 10%;
                    float: left;
                    text-align: left;
                    position: relative;
                    height: calc(35 / 10.8 * 1vh);
                  "
                >
                  <div
                    class="lineStateClassD"
                    :style="{ color: line.powerConsumption == '异常' ? 'red' : '' }"
                  >
                    {{ line.powerConsumption }}
                  </div>
                </div>

                <div
                  class="recycle-record-content-item"
                  :title="line.Webcam"
                  style="
                    width: 15%;
                    float: left;
                    text-align: left;
                    position: relative;
                    height: calc(35 / 10.8 * 1vh);
                  "
                >
                  <div
                    class="lineStateClassD"
                    :style="{ color: line.Webcam == '异常' ? 'red' : ''}"
                  >
                    {{ line.Webcam }}
                  </div>
                </div>

                <div
                  class="recycle-record-content-item"
                  :title="line.state"
                  style="
                    width: 25%;
                    float: left;
                    text-align: left;
                    position: relative;
                    height: calc(35 / 10.8 * 1vh);
                  "
                >
                  <div
                    class="lineStateClassD"
                    :style="{ color:line.state == '离线' ? '#A8A8A8' : '#00FF55', }"
                  >
                    {{ line.state }}
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rightTh",

  data() {
    return {
      rightThTitle: "",
      recycleRecords: [
        {
          name: "新宇科技",
          channelFlowmeter: "12",
          pipelineFlowmeter: "12",
          powerConsumption: "0",
          Webcam: "0",
          state: "2431245",
        },
        {
          name: "莱福光电",
          channelFlowmeter: "9",
          pipelineFlowmeter: "8",
          powerConsumption: "0",
          Webcam: "1",
          state: "102365",
        },
        {
          name: "金瀚新材",
          channelFlowmeter: "25",
          pipelineFlowmeter: "24",
          powerConsumption: "1",
          Webcam: "0",
          state: "569843",
        },
        {
          name: "鸿山制造",
          channelFlowmeter: "6",
          pipelineFlowmeter: "6",
          powerConsumption: "0",
          Webcam: "0",
          state: "56312",
        },
        {
          name: "裕华股份",
          channelFlowmeter: "16",
          pipelineFlowmeter: "16",
          powerConsumption: "0",
          Webcam: "0",
          state: "769541",
        },
        {
          name: "建邺宏发",
          channelFlowmeter: "16",
          pipelineFlowmeter: "15",
          powerConsumption: "0",
          Webcam: "1",
          state: "513218",
        },
          {
          name: "建才加工",
          channelFlowmeter: "23",
          pipelineFlowmeter: "22",
          powerConsumption: "1",
          Webcam: "0",
          state: "223684",
        },
        {
          name: "杭建裕隆",
          channelFlowmeter: "18",
          pipelineFlowmeter: "18",
          powerConsumption: "0",
          Webcam: "0",
          state: "369846",
        },
        {
          name: "西语加工",
          channelFlowmeter: "17",
          pipelineFlowmeter: "16",
          powerConsumption: "0",
          Webcam: "1",
          state: "665489",
        },
        {
          name: "建发制造",
          channelFlowmeter: "6",
          pipelineFlowmeter: "6",
          powerConsumption: "0",
          Webcam: "0",
          state: "31269",
        },
        {
          name: "宏宇制造",
          channelFlowmeter: "23",
          pipelineFlowmeter: "22",
          powerConsumption: "0",
          Webcam: "1",
          state: "126175",
        },
        {
          name: "健华材料",
          channelFlowmeter: "13",
          pipelineFlowmeter: "12",
          powerConsumption: "0",
          Webcam: "1",
          state: "322151",
        },
          {
          name: "龙杰科技",
          channelFlowmeter: "12",
          pipelineFlowmeter: "12",
          powerConsumption: "0",
          Webcam: "0",
          state: "2433245",
        },
        {
          name: "耀福塑胶",
          channelFlowmeter: "9",
          pipelineFlowmeter: "8",
          powerConsumption: "0",
          Webcam: "1",
          state: "107665",
        },
        {
          name: "海涵磨具",
          channelFlowmeter: "25",
          pipelineFlowmeter: "24",
          powerConsumption: "1",
          Webcam: "0",
          state: "569843",
        },
        {
          name: "太神制药",
          channelFlowmeter: "6",
          pipelineFlowmeter: "6",
          powerConsumption: "0",
          Webcam: "0",
          state: "56312",
        },
        {
          name: "华泰股份",
          channelFlowmeter: "16",
          pipelineFlowmeter: "16",
          powerConsumption: "0",
          Webcam: "0",
          state: "762541",
        },
        {
          name: "侨商制造",
          channelFlowmeter: "16",
          pipelineFlowmeter: "15",
          powerConsumption: "0",
          Webcam: "1",
          state: "513218",
        },
          {
          name: "乐语电器",
          channelFlowmeter: "23",
          pipelineFlowmeter: "22",
          powerConsumption: "1",
          Webcam: "0",
          state: "212681",
        },
        {
          name: "金桥集团",
          channelFlowmeter: "18",
          pipelineFlowmeter: "18",
          powerConsumption: "0",
          Webcam: "0",
          state: "362846",
        },
        {
          name: "乐达科技",
          channelFlowmeter: "17",
          pipelineFlowmeter: "16",
          powerConsumption: "0",
          Webcam: "1",
          state: "665423",
        },
        {
          name: "隆迈制造",
          channelFlowmeter: "6",
          pipelineFlowmeter: "6",
          powerConsumption: "0",
          Webcam: "0",
          state: "31862",
        },
        {
          name: "車骅纸业",
          channelFlowmeter: "23",
          pipelineFlowmeter: "22",
          powerConsumption: "0",
          Webcam: "1",
          state: "126935",
        },
        {
          name: "勒泰科技",
          channelFlowmeter: "13",
          pipelineFlowmeter: "12",
          powerConsumption: "0",
          Webcam: "1",
          state: "329631",
        },
        {
          name: "大乐科技",
          channelFlowmeter: "6",
          pipelineFlowmeter: "6",
          powerConsumption: "0",
          Webcam: "0",
          state: "31861",
        },
        {
          name: "宇泰制造",
          channelFlowmeter: "23",
          pipelineFlowmeter: "22",
          powerConsumption: "0",
          Webcam: "1",
          state: "126975",
        },
        {
          name: "金叶科技",
          channelFlowmeter: "13",
          pipelineFlowmeter: "12",
          powerConsumption: "0",
          Webcam: "1",
          state: "329651",
        },
        {
          name: "豪瀚铝业",
          channelFlowmeter: "12",
          pipelineFlowmeter: "12",
          powerConsumption: "0",
          Webcam: "0",
          state: "2235245",
        },
        {
          name: "德化化工",
          channelFlowmeter: "9",
          pipelineFlowmeter: "8",
          powerConsumption: "0",
          Webcam: "1",
          state: "105665",
        },
        {
          name: "祥华纸业",
          channelFlowmeter: "25",
          pipelineFlowmeter: "24",
          powerConsumption: "1",
          Webcam: "0",
          state: "569843",
        },
        {
          name: "吉野制造",
          channelFlowmeter: "6",
          pipelineFlowmeter: "6",
          powerConsumption: "0",
          Webcam: "0",
          state: "56116",
        },
      ],
      itemNumber: [],
    };
  },
  mounted() {
    // const testJson = require("../../static/test.json");
    // const { rightThTitle, recycleRecordsD, itemNumber } = testJson;
    // this.rightThTitle = rightThTitle;
    // this.recycleRecords = recycleRecordsD;
    // this.itemNumber = itemNumber;
  },
};
</script>
<style scoped>
.styleThisPage {
  padding: calc(2 / 10.8 * 1vh) 5%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.item {
  height: calc(18 / 10.8 * 1vh);
  width: calc(5 / 19.2 * 1vw);
  background-color: #999;
  border-radius: calc(2 / 19.2 * 1vw);
}
</style>


