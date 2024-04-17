<template>
  <div
    style="
      width: calc(100% - 62px);
      height: calc(100% - 149px);
      padding: 10px 20px;
      margin: 19px;
      border: 1px solid #21599d;
    "
  >
    <div class="boxC">
      <div class="up">
        <div class="inputSelect">
          <el-select
            ref="selectTree"
            v-model="form.Id"
            filterable
            placeholder="请选择..."
          >
            <el-option
              :key="form.Id"
              :value="form.Id"
              :label="form.label"
              style="height: auto"
              hidden
            />
            <el-tree
              style="backgroundcolor: RGBA(12, 28, 71, 1); color: #fff"
              ref="tree"
              :data="data"
              :props="defaultProps"
              :node-key="defaultProps.value"
              @node-click="handleNodeClick"
              default-expand-all
            />
          </el-select>
          
        </div>
        <div class="buttonSelect">
          <div
            class="buttonSelectStyle"
            v-for="(item, i) in upRightData"
            :key="i"
            @click="item.flag = !item.flag"
          >
            <img
              v-if="item.flag"
              src="../assets/img/tureImg.png"
              class="tureImgStyle"
            />
            <img
              :src="[item.flag ? item.imgOneL : item.imgOne]"
              height="24"
              width="24"
              align="AbsMiddle"
            />
            <span v-if="item.flag" style="color: rgb(1, 216, 255)">{{
              item.imgOneName
            }}</span>
            <span v-if="!item.flag">{{ item.imgOneName }}</span>
          </div>
        </div>
        <div
          v-for="(item, i) in CameraNoneData"
          :key="i"
          class="CameraNone"
          :style="item.style"
        ></div>
      </div>

      <div class="down">
        <div class="downSkink">
        
          <span class="downSkinkButton" @click="downSkinkButton" v-show='!varChangeFlag'>
    &nbsp; 展开 &nbsp;
            <i
              :class="[
                varChangeFlag ? 'el-icon-arrow-down' : 'el-icon-arrow-up',
              ]"
            ></i>
            &nbsp;
          </span>
          <span class="downSkinkButton" @click="downSkinkButton" v-show='varChangeFlag'>
            &nbsp; 收起 &nbsp;
            <i
              :class="[
                varChangeFlag ? 'el-icon-arrow-down' : 'el-icon-arrow-up',
              ]"
            ></i>
            &nbsp;
          </span>
        </div>

        <div class="downContent">
          <div class="downContentOneLine">
            <div v-for="(item, i) in listOneLine" :key="i" class="downContentModel">
              <div class="downContentModelUP">
                <div class="downContentModelUpModel">
                  <div><img src="../assets/img/temperature.png" /></div>
                  <div>
                    <span class="downContentModelUpModelStyleOne">{{
                      item.temperature
                    }}</span
                    ><br />
                    <span class="downContentModelUpModelStyleTwo">{{
                      item.temperatureValue
                    }}</span>
                  </div>
                </div>
                <div class="downContentModelUpModel">
                  <div><img src="../assets/img/humidity.png" /></div>
                  <div>
                    <span class="downContentModelUpModelStyleOne">{{
                      item.humidity
                    }}</span
                    ><br />
                    <span class="downContentModelUpModelStyleTwo">30%</span>
                  </div>
                </div>
              </div>
              <div style="height: 15px"></div>
            </div>
          </div>
          <div class="downContentTwoLine">
            <div v-for="(item, i) in listTwoLine" :key="i" class="downContentModelL">
              <div class="downContentModelDown">
                <div style="width: 90px">
                  <div :class="[item.imgOne ? 'boxFalg' : 'boxFalgNoBorder']">
                    <img :src="item.imgOne" align="AbsMiddle" />{{
                      item.imgOneName
                    }}
                  </div>
                  <div style="height: 16px"></div>
                  <div
                    :class="[
                      item.buttonImgOneStatus == true
                        ? 'boxButton'
                        : 'boxButtonBlue',
                    ]"
                    @click="item.buttonImgOneStatus = !item.buttonImgOneStatus"
                  >
                    <img
                      :src="[
                        item.buttonImgOneStatus == true
                          ? item.buttonImgOneL
                          : item.buttonImgOne,
                      ]"
                    />{{ item.buttonImgOneName }}
                  </div>
                  <div style="height: 15px"></div>
                </div>

                <div style="width: 90px">
                  <div :class="[item.imgTwo ? 'boxFalg' : 'boxFalgNoBorder']">
                    <img :src="item.imgTwo" align="AbsMiddle" />{{
                      item.imgTwoName
                    }}
                  </div>
                  <div style="height: 16px"></div>
                  <div
                    :class="[
                      item.buttonImgTwoStatus == true
                        ? 'boxButton'
                        : 'boxButtonBlue',
                    ]"
                    @click="item.buttonImgTwoStatus = !item.buttonImgTwoStatus"
                  >
                    <img
                      :src="[
                        item.buttonImgTwoStatus == true
                          ? item.buttonImgTwoL
                          : item.buttonImgTwo,
                      ]"
                    />{{ item.buttonImgTwoName }}
                  </div>
                  <div style="height: 15px"></div>
                </div>

                <div style="width: 90px">
                  <div :class="[item.imgTh ? 'boxFalg' : 'boxFalgNoBorder']">
                    <img :src="item.imgTh" align="AbsMiddle" />{{
                      item.imgThName
                    }}
                  </div>
                  <div style="height: 16px"></div>
                  <div
                    :class="[
                      item.buttonImgThStatus == true
                        ? 'boxButton'
                        : 'boxButtonBlue',
                    ]"
                    @click="item.buttonImgThStatus = !item.buttonImgThStatus"
                  >
                    <img
                      :src="[
                        item.buttonImgThStatus == true
                          ? item.buttonImgThL
                          : item.buttonImgTh,
                      ]"
                    />{{ item.buttonImgThName }}
                  </div>
                  <div style="height: 15px"></div>
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
  name: "archives",
  data() {
    return {
      timeInfo: {},
      data: [
        {
          Id: 1,
          label: " 停车场",
          children: [
            {
              Id: 11,
              label: "1号楼",
            },
            {
              Id: 12,
              label: "2层",
            },
            {
              Id: 13,
              label: "3层",
            },
            {
              Id: 14,
              label: "4层",
            },
          ],
        },
      ],
      upRightData: [
        {
          imgOneL: require("../assets/img/internalUnitOfAirConditionerL.png"),
          imgOne: require("../assets/img/internalUnitOfAirConditioner.png"),
          imgOneName: "空调内机",
          flag: false,
        },

        {
          imgOneL: require("../assets/img/waterImmersionSensorL.png"),
          imgOne: require("../assets/img/waterImmersionSensor.png"),

          imgOneName: "水浸传感器",
          flag: false,
        },
        {
          imgOneL: require("../assets/img/humiditySensorL.png"),
          imgOne: require("../assets/img/humiditySensor.png"),

          imgOneName: "湿度传感器",
          flag: false,
        },
        {
          imgOneL: require("../assets/img/temperatureSensorL.png"),
          imgOne: require("../assets/img/temperatureSensor.png"),

          imgOneName: "温度传感器",
          flag: true,
        },
        {
          imgOneL: require("../assets/img/CameraL.png"),
          imgOne: require("../assets/img/Camera.png"),
          imgOneName: "摄像头",
          flag: true,
        },
      ],
      CameraNoneData: [
        { style: "top:56px;left:302px", id: 1 },
        { style: "top:229px;left:428px", id: 2 },
        { style: "top:37.79%;left:5.08%", id: 3 },
        { style: "top:32.5%;left:15.5%", id: 4 },
        { style: "top:52.7%;left:3.39%", id: 5 },
        { style: "top:55%;left:13.4%", id: 6 },
        { style: "top:39.17%;left:11.88%", id: 7 },
        { style: "top:24.07%;left:52%", id: 8 },
        { style: "top:28.7%;left:71.27%", id: 9 },
        { style: "top:46.39%;left:68.7%", id: 10 },
        { style: "top:15.7%;left:90.3%", id: 11 },
        { style: "top:13.24%;left:80.21%", id: 12 },
        { style: "top: 45.5%;left: 57.2%", id: 13 },
        { style: "top: 38.5%;left: 59.2%", id: 14 },
        { style: "top: 33.5%;left: 86.3%", id: 15 },
        { style: "top:88.7%;;left:90.3", id: 16 },
        { style: "top:19%;left:70%", id: 17 },
      ],
      treeList: [],
      defaultProps: {
        /** 唯一标识 **/
        value: "Id",
        /** 标签显示 **/
        label: "label",
        /** 子级 **/
        children: "children",
      },

      form: {
        Id: "",
        label: "",
      },

      varChangeFlag: true,
      listOneLine: [
        // '当前温度','今日平均温度', '今日最大温度', '今日最小温度'
        {
          temperature: "当前温度",
          temperatureValue: "37℃",
          humidity: "当前湿度",
          humidityValue: "30%",
          imgOne: require("../assets/img/accessControl.png"),
          imgOneName: "门禁",
          imgTh: require("../assets/img/lighting.png"),
          imgThName: "照明",
          buttonImgOneL: require("../assets/img/openDoorL.png"),
          buttonImgOne: require("../assets/img/openDoor.png"),
          buttonImgOneName: "开门",
          buttonImgOneStatus: true,
          buttonImgTwo: require("../assets/img/closeDoor.png"),
          buttonImgTwoL: require("../assets/img/closeDoorL.png"),
          buttonImgTwoName: "关门",
          buttonImgTwoStatus: false,
          buttonImgThL: require("../assets/img/openLight.png"),
          buttonImgTh: require("../assets/img/closeLight.png"),
          buttonImgThName: "开灯",
          buttonImgThStatus: true,
        },
        {
          temperature: "今日平均温度",
          temperatureValue: "37℃",
          humidity: "今日平均湿度",
          humidityValue: "30%",
          imgTh: require("../assets/img/airConditioner.png"),
          imgThName: "空调",
          buttonImgOne: require("../assets/img/closeLight.png"),
          buttonImgOneL: require("../assets/img/openLight.png"),
          buttonImgOneName: "关灯",
          buttonImgOneStatus: false,
          buttonImgTwo: require("../assets/img/TurnOff.png"),
          buttonImgTwoL: require("../assets/img/TurnOffL.png"),
          buttonImgTwoName: "调关",
          buttonImgTwoStatus: false,
          buttonImgThL: require("../assets/img/openLight.png"),
          buttonImgTh: require("../assets/img/closeLight.png"),
          buttonImgThName: "开灯",
          buttonImgThStatus: true,
        },
        {
          temperature: "今日最大温度",
          temperatureValue: "37℃",
          humidity: "今日最大湿度",
          humidityValue: "30%",
          imgTh: require("../assets/img/fan.png"),
          imgThName: "风机",
          buttonImgOne: require("../assets/img/closeLight.png"),
          buttonImgOneL: require("../assets/img/openLight.png"),
          buttonImgOneName: "关灯",
          buttonImgOneStatus: false,
          buttonImgTwo: require("../assets/img/temperatureRegulation.png"),
          buttonImgTwoL: require("../assets/img/temperatureRegulationL.png"),
          buttonImgTwoName: "调温",
          buttonImgTwoStatus: false,
          buttonImgThL: require("../assets/img/openLight.png"),
          buttonImgTh: require("../assets/img/closeLight.png"),
          buttonImgThName: "开灯",
          buttonImgThStatus: true,
        },
        {
          temperature: "今日最小温度",
          temperatureValue: "37℃",
          humidity: "今日最小湿度",
          humidityValue: "30%",
          imgTwo: require("../assets/img/infra-red.png"),
          imgTwoName: "红外",
          buttonImgOne: require("../assets/img/close.png"),
          buttonImgOneL: require("../assets/img/closeL.png"),
          buttonImgOneName: "关闭",
          buttonImgOneStatus: true,
          buttonImgTwo: require("../assets/img/deployTroopsForDefence.png"),
          buttonImgTwoL: require("../assets/img/deployTroopsForDefenceL.png"),

          buttonImgTwoName: "布防",
          buttonImgTwoStatus: false,
          buttonImgTh: require("../assets/img/disarm.png"),
          buttonImgThL: require("../assets/img/disarmL.png"),

          buttonImgThName: "撤防",
          buttonImgThStatus: true,
        },
        // {temperature:'今日最小温度',temperatureValue:'37℃',humidity:'今日最小湿度',humidityValue:'30%'},
      ],
      listTwoLine:[
        // '当前温度','今日平均温度', '今日最大温度', '今日最小温度'
        {
          temperature: "当前温度",
          temperatureValue: "37℃",
          humidity: "当前湿度",
          humidityValue: "30%",
          imgOne: require("../assets/img/accessControl.png"),
          imgOneName: "门禁",
          imgTh: require("../assets/img/lighting.png"),
          imgThName: "照明",
          buttonImgOneL: require("../assets/img/openDoorL.png"),
          buttonImgOne: require("../assets/img/openDoor.png"),
          buttonImgOneName: "开门",
          buttonImgOneStatus: true,
          buttonImgTwo: require("../assets/img/closeDoor.png"),
          buttonImgTwoL: require("../assets/img/closeDoorL.png"),
          buttonImgTwoName: "关门",
          buttonImgTwoStatus: false,
          buttonImgThL: require("../assets/img/openLight.png"),
          buttonImgTh: require("../assets/img/closeLight.png"),
          buttonImgThName: "开灯",
          buttonImgThStatus: true,
        },
        {
          temperature: "今日平均温度",
          temperatureValue: "37℃",
          humidity: "今日平均湿度",
          humidityValue: "30%",
          imgTh: require("../assets/img/airConditioner.png"),
          imgThName: "空调",
          buttonImgOne: require("../assets/img/closeLight.png"),
          buttonImgOneL: require("../assets/img/openLight.png"),
          buttonImgOneName: "关灯",
          buttonImgOneStatus: false,
          buttonImgTwo: require("../assets/img/TurnOff.png"),
          buttonImgTwoL: require("../assets/img/TurnOffL.png"),
          buttonImgTwoName: "调关",
          buttonImgTwoStatus: false,
          buttonImgThL: require("../assets/img/openLight.png"),
          buttonImgTh: require("../assets/img/closeLight.png"),
          buttonImgThName: "开灯",
          buttonImgThStatus: true,
        },
        {
          temperature: "今日最大温度",
          temperatureValue: "37℃",
          humidity: "今日最大湿度",
          humidityValue: "30%",
          imgTh: require("../assets/img/fan.png"),
          imgThName: "风机",
          buttonImgOne: require("../assets/img/closeLight.png"),
          buttonImgOneL: require("../assets/img/openLight.png"),
          buttonImgOneName: "关灯",
          buttonImgOneStatus: false,
          buttonImgTwo: require("../assets/img/temperatureRegulation.png"),
          buttonImgTwoL: require("../assets/img/temperatureRegulationL.png"),
          buttonImgTwoName: "调温",
          buttonImgTwoStatus: false,
          buttonImgThL: require("../assets/img/openLight.png"),
          buttonImgTh: require("../assets/img/closeLight.png"),
          buttonImgThName: "开灯",
          buttonImgThStatus: true,
        },
        {
          temperature: "今日最小温度",
          temperatureValue: "37℃",
          humidity: "今日最小湿度",
          humidityValue: "30%",
          imgTwo: require("../assets/img/infra-red.png"),
          imgTwoName: "红外",
          buttonImgOne: require("../assets/img/close.png"),
          buttonImgOneL: require("../assets/img/closeL.png"),
          buttonImgOneName: "关闭",
          buttonImgOneStatus: true,
          buttonImgTwo: require("../assets/img/deployTroopsForDefence.png"),
          buttonImgTwoL: require("../assets/img/deployTroopsForDefenceL.png"),

          buttonImgTwoName: "布防",
          buttonImgTwoStatus: false,
          buttonImgTh: require("../assets/img/disarm.png"),
          buttonImgThL: require("../assets/img/disarmL.png"),

          buttonImgThName: "撤防",
          buttonImgThStatus: true,
        },
        // {temperature:'今日最小温度',temperatureValue:'37℃',humidity:'今日最小湿度',humidityValue:'30%'},
        {
          temperature: "今日最小温度",
          temperatureValue: "37℃",
          humidity: "今日最小湿度",
          humidityValue: "30%",
          imgTwo: require("../assets/img/infra-red.png"),
          imgTwoName: "红外",
          buttonImgOne: require("../assets/img/close.png"),
          buttonImgOneL: require("../assets/img/closeL.png"),
          buttonImgOneName: "关闭",
          buttonImgOneStatus: true,
          buttonImgTwo: require("../assets/img/deployTroopsForDefence.png"),
          buttonImgTwoL: require("../assets/img/deployTroopsForDefenceL.png"),

          buttonImgTwoName: "布防",
          buttonImgTwoStatus: false,
          buttonImgTh: require("../assets/img/disarm.png"),
          buttonImgThL: require("../assets/img/disarmL.png"),

          buttonImgThName: "撤防",
          buttonImgThStatus: true,
        },
      ],
    };
  },
  mounted() {
    // const testJson = require("../static/test.json");
    // const { index, indexW } = testJson;
    // this.timeInfo = indexW;
    // this.data = index;
  },

  methods: {
    downSkinkButton() {
      setTimeout(() => {
        if (document.querySelector(".down").style.bottom == "0%") {
          document.querySelector(".down").style.bottom = "35%";
          this.varChangeFlag = true;
        } else {
          this.varChangeFlag = false;
          document.querySelector(".down").style.bottom = "0%";
        }
      }, 1);
    },
    //节点点击事件
    handleNodeClick(data) {
      console.log(data);
      this.form.Id = data.Id;
      this.form.label = data.label;
      // 选择器执行完成后，使其失去焦点隐藏下拉框的效果
      this.$refs.selectTree.blur();
    },
  },
};
</script>
<style>
@import "./archivesStyles.css";
/* @import './assets/css/b.min.css' */
</style>
