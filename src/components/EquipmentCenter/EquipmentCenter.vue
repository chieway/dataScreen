<template>
  <div
    style="
      width: calc(100% - 82px);
      height: calc(100% - 149px);
      padding: 10px 20px;
      margin: 19px;
      border: 1px solid #21599d;
      position: relative;
    "
  >
    <el-row class="queryBox" type="flex">
      <div class="queryBoxL">
        <div class="queryBoxLShow">
          <img
            src="../../assets/imgcenter/queryBoxButtonImg.png"
            alt=""
            align="Asbmiddle"
          />
          <span class="queryBxtoxLShowText">设备类型</span>
        </div>
        <div
          class="queryBoxLSelse"
          @click="queryBoxLSelseBoxFlag = !queryBoxLSelseBoxFlag"
        >
          <span class="queryBoxLSelseInput">{{ queryBoxLSelseInputData }}</span>
          <img
            src="../../assets/imgcenter/downIcon.png"
            class="queryBoxLSelseIcon"
            alt=""
          />
          <div v-show="queryBoxLSelseBoxFlag" class="queryBoxLSelseBox">
            <div
              class="queryBoxLSelseBoxText"
              @click="getBoxLSelseBoxText"
              v-for="(item, i) in queryBoxLSelseBoxTextData"
              :key="i"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      <div class="queryBoxC">
        <div class="queryBoxCL">
          <div class="queryBoxLShow">
            <img
              src="../../assets/imgcenter/queryBoxButtonImg.png"
              alt=""
              align="Asbmiddle"
            />
            <span class="queryBxtoxLShowText">设备名称</span>
          </div>
          <div
            class="queryBoxLSelse"
            @click="queryBoxLSelseBoxFlagC = !queryBoxLSelseBoxFlagC"
          >
            <span class="queryBoxLSelseInput">{{
              queryBoxLSelseInputDataC
            }}</span>
            <img
              src="../../assets/imgcenter/downIcon.png"
              class="queryBoxLSelseIcon"
              alt=""
            />
            <div v-show="queryBoxLSelseBoxFlagC" class="queryBoxLSelseBox">
              <div
                class="queryBoxLSelseBoxText"
                @click="getBoxLSelseBoxTextC"
                v-for="(item, i) in queryBoxLSelseBoxTextData"
                :key="i"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
        <div class="queryCBoxButton">查询</div>
      </div>
      <div class="queryBoxR">
        <div class="queryBoxLShow queryBoxRShow" >
          <img
            src="../../assets/imgcenter/queryBoxButtonImg.png"
            alt=""
            align="Asbmiddle"
          />
          <span class="queryBxtoxLShowText">筛选</span>
        </div>
        <div class="queryCBoxButton">告警设备</div>
        <div class="queryCBoxButton">掉线设备</div>
        <div class="queryCBoxButton">保修设备</div>
        <div class="queryCBoxButton">报废设备</div>
      </div>
    </el-row>
    <el-row class="dataStatisticsBox">
      <div class="dataStatisticsBoxTitle">
        <div class="dataStatisticsBoxTitlLine">
          <img
            src="../../assets/imgcenter/dataStatisticsBoxTitleImg.png"
            class="dataStatisticsBoxTitleImg"
          />
          <span class="dataStatisticsBoxText">数据统计</span>
        </div>
      </div>
      <div class="dataStatisticsBoxList">
        <div
          class="dataStatisticsBoxListBox"
          v-for="(item, i) in dataStatisticsListData"
          :key="i"
        >
          <div class="dataStatisticsBoxListBoximg"><img :src="item.img" /></div>
          <div class="dataStatisticsBoxListBoxText">
            <span>{{ item.name }}</span>
            <br />
            <span>{{ item.number }}台</span>
          </div>
        </div>
      </div>
    </el-row>
    <el-row class="cardBox" :gutter="80">
      <el-col
        :span="6"
        v-for="(item, i) in dataCard"
        :key="i"
        :class="
          i <= 3
            ? 'cardStyleW'
            : 3 < i && i <= 7
            ? 'cardStyleW2'
            : 'cardStyleW3'
        "
      >
        <div class="grid-content bg-purple cardStyle">
          <div class="cardStyleTitle">
            <img
              src="../../assets/imgcenter/cardStyleTitleImg.png"
              align="Absmiddle"
              class="cardStyleTitleImg"
            /><span class="cardStyleTitleText">{{ item.label }}</span
            ><el-checkbox
              v-model="item.checked"
              class="cardStyleCheckbox"
            ></el-checkbox>
          </div>

          <div class="cardStyleConter">
            <div
              :class="
                i <= 3
                  ? 'cardStyleConterImgY'
                  : 3 < i && i <= 7
                  ? 'cardStyleConterImgC'
                  : 'cardStyleConterImgG'
              "
            >
              <span
                class="cardStyleConterFalgName"
                :style="{ color: item.color }"
                >{{ item.falgName }}</span
              >
            </div>
            <div class="cardStyleConterR">
              <div class="cardStyleConterRImgU">
                <div class="text">运行状态</div>
              </div>
              <div class="cardStyleConterRImgD"></div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import "./EquipmentCenter.css";
export default {
  name: "equipmentCenter",
  data() {
    return {
      timeInfo: {},
      queryBoxLSelseBoxFlag: false,
      queryBoxLSelseBoxFlagC: false,
      queryBoxLSelseInputData: "切割设备",
      queryBoxLSelseInputDataC: "请输入",
      queryBoxLSelseBoxTextData: ["切割设备", "焊接设备", "打标设备","自动化设备"],
      dataStatisticsListData: [
        {
          id: "1",
          name: "设备数量",
          number: "501583",
          img: require("../../assets/imgcenter/tem.png"),
        },
        {
          id: "2",
          name: "在线设备",
          number: "463377",
          img: require("../../assets/imgcenter/temT.png"),
        },
        {
          id: "3",
          name: "掉线设备",
          number: "86",
          img: require("../../assets/imgcenter/temg.png"),
        },
        {
          id: "4",
          name: "告警设备",
          number: "12",
          img: require("../../assets/imgcenter/temD.png"),
        },
        {
          id: "5",
          name: "保修设备",
          number: "38268",
          img: require("../../assets/imgcenter/temF.png"),
        },
        {
          id: "6",
          name: "报废设备",
          number: "38120",
          img: require("../../assets/imgcenter/temJ.png"),
        },
      ],
      dataCard: [
        {
          Id: 1,
          label: "大光新材-LS101S86",
          checked: true,
          color: "red",
          falgName: "",
        },
        {
          Id: 2,
          label: "照明设备001—— xx栋xx楼",
          checked: true,
          falgName: "",
          color: "red",
        },
        {
          Id: 3,
          label: "照明设备001—— xx栋xx楼",
          checked: true,
          falgName: "",
          color: "red",
        },
        {
          Id: 4,
          label: "照明设备001—— xx栋xx楼",
          checked: true,
          falgName: "",
          color: "red",
        },
        {
          Id: 5,
          label: "照明设备004—— xx栋xx楼",
          checked: false,
          falgName: "一般",
          color: "#D1AD2A",
        },
        {
          Id: 6,
          label: " 照明设备004—— xx栋xx楼",
          checked: false,
          falgName: "一般",
          color: "#D1AD2A",
        },
        {
          Id: 7,
          label: "照明设备004—— xx栋xx楼",
          checked: false,
          falgName: "一般",
          color: "#D1AD2A",
        },
        {
          Id: 8,
          label: "照明设备004—— xx栋xx楼",
          checked: false,
          falgName: "一般",
          color: "#D1AD2A",
        },
        {
          Id: 9,
          label: "照明设备007—— xx栋xx楼",
          checked: true,
          falgName: "良好",
          color: "#0DFF8A",
        },
        {
          Id: 10,
          label: "照明设备007—— xx栋xx楼",
          checked: true,
          falgName: "良好",
          color: "#0DFF8A",
        },
        {
          Id: 11,
          label: " 照明设备007—— xx栋xx楼",
          checked: true,
          falgName: "良好",
          color: "#0DFF8A",
        },
        {
          Id: 12,
          label: "照明设备007—— xx栋xx楼",
          checked: true,
          falgName: "良好",
          color: "#0DFF8A",
        },
      ],
    };
  },
  mounted() {
    const testJson = require(".././../static/test.json");
    const { index, indexW } = testJson;
    // this.timeInfo = indexW;
    // this.data = index;
  },

  methods: {
    // queryBoxLSelseButton() {

    // },

    //节点点击事件
    getBoxLSelseBoxText(e) {
      this.queryBoxLSelseInputData = e.target.outerText;
    },
    getBoxLSelseBoxTextC(e) {
      this.queryBoxLSelseInputDataC = e.target.outerText;
    },
  },
};
</script>
<style>
/* @import "./EquipmentCenter.css"; */
/* @import './assets/css/b.min.css' */
</style>
