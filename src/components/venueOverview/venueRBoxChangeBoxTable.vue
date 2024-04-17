<template>
  <div style="float: left; width: 100%; height: 100%">
    <div style="width: 100%; height: 100%" class="card">
      <div
        class="recycle-record"
        style="
          padding: 10px;
          width: calc(100% - 30px);
          height: calc(100% - 5px);
        "
      >
        <div style="height: 100%; width: 100%">
          <div style="height: calc(95% - 8px)">
            <div
              class="recycle-record-title"
              style="
                height: calc(40 / 10.8 * 1vh);
                background-color: rgb(255, 0, 0, 0);
              "
            >
              <div style="width: 10%; float: left; text-align: center">
                村名
              </div>
              <div style="width: 20%; float: left; text-align: center">
                明渠流量计
              </div>
              <div style="width: 20%; float: left; text-align: left">
                管道流量计
              </div>
              <div style="width: 20%; float: left; text-align: left">
                用电监测
              </div>
              <div style="width: 20%; float: left; text-align: left">
                网络摄像头
              </div>
              <div style="width: 10%; float: left; text-align: left">状态</div>
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
                    width: 20%;
                    float: left;
                    text-align: left;
                    position: relative;
                    height: calc(35 / 10.8 * 1vh);
                  "
                >
                  <div
                    class="lineStateClassD"
                    style="backgroundcolor: rgba(224, 32, 32, 0)"
                  >
                    {{ line.name }}
                  </div>
                </div>

                <div
                  class="recycle-record-content-item"
                  :title="line.channelFlowmeter"
                  style="
                    width: 20%;
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
                    width: 20%;
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
                    width: 20%;
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
                    width: 20%;
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
                    width: 10%;
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
          name: "高盖村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "异常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "三角村",
          channelFlowmeter: "异常",
          pipelineFlowmeter: "正常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "高盖村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "正常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "三角村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "正常",
          powerConsumption: "异常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "高盖村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "异常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "三角村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "正常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "离线",
        },
          {
          name: "高盖村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "异常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "三角村",
          channelFlowmeter: "异常",
          pipelineFlowmeter: "正常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "高盖村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "正常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "三角村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "正常",
          powerConsumption: "异常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "高盖村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "异常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "三角村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "正常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "离线",
        },
          {
          name: "高盖村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "异常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "三角村",
          channelFlowmeter: "异常",
          pipelineFlowmeter: "正常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "高盖村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "正常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "三角村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "正常",
          powerConsumption: "异常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "高盖村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "异常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "三角村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "正常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "离线",
        },
          {
          name: "高盖村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "异常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "三角村",
          channelFlowmeter: "异常",
          pipelineFlowmeter: "正常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "高盖村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "正常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "三角村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "正常",
          powerConsumption: "异常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "高盖村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "异常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "在线",
        },
        {
          name: "三角村",
          channelFlowmeter: "正常",
          pipelineFlowmeter: "正常",
          powerConsumption: "正常",
          Webcam: "正常",
          state: "离线",
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


