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
      <vueSeamlessScroll :data="dataCard" class="warp">
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
            <div :class="item.color === '#0DFF8A' ? 'cardStyleConterImgG' : item.color === '#D1AD2A' ? 'cardStyleConterImgC' : 'cardStyleConterImgY'">
              <span
                class="cardStyleConterFalgName"
                :style="{ color: item.color }"
                >{{ item.color === '#0DFF8A' ? '良好' : item.color === '#D1AD2A' ? '一般' : '' }}</span
              >
            </div>
            <div class="cardStyleConterR">
              <div class="cardStyleConterRImgU">
                <div class="text">运行状态</div>
                <div class="value">{{ item.runStatus }}</div>
              </div>
              <div class="cardStyleConterRImgD">
                <div class="text">在线状态</div>
                <div class="value">{{ item.onlineStatus }}</div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </vueSeamlessScroll>
    </el-row>
  </div>
</template>
<script>
import "./EquipmentCenter.css";
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
  name: "equipmentCenter",
  components: {
    vueSeamlessScroll
  },
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
      /**
       * color
       * 良好---#0DFF8A
       * 一般---#D1AD2A
       * 严重---red
       * */
      dataCard: [
        {
          label: "大光新材-LS101S86",
          color: "red",
          checked: false,
          runStatus: '关闭',
          onlineStatus: '离线',
        },
        {
          label: "大光新材-LS101S87",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "大光新材-LS101S88",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "大光新材-HS102S62",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "大光新材-HS101S63",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "大光新材-DS103S91",
          color: "#D1AD2A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "大光新材-LS101C09",
          color: "red",
          checked: false,
          runStatus: '关闭',
          onlineStatus: '离线',
        },
        {
          label: "兴宁制造-YD105D23",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "兴宁制造-YD105D24",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "兴宁制造-YD105D25",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },	
        {
          label: "兴宁制造-YD105D26",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "兴宁制造-LS101C51",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "兴宁制造-HS108G22",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "兴宁制造-HS108G23",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "兴宁制造-HS108G24",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },	
        {
          label: "新筑光电-LS101C52",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "新筑光电-LS101C53",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "新筑光电-LS101C54",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "新筑光电-DS103S92",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "新筑光电-DS103S93",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },		
        {
          label: "新筑光电-DS103S94",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "裕农机械-LS101C55",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "裕农机械-LS101C56",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "裕农机械-YD105D27",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "裕农机械-YD105D28",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },	
        {
          label: "裕农机械-YD105D29",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "裕农机械-YD105D30",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "裕农机械-YD105D31",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "沐沐加工-LS101F31",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "沐沐加工-LS101F32",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "沐沐加工-LS101F33",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "沐沐加工-LS101F34",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "沐沐加工-HS108G25",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "沐沐加工-HS108G26",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "沐沐加工-HS108G27",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },	
        {
          label: "沐沐加工-HS108G28",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "沐沐加工-HS108G29",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "沐沐加工-HS108G30",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "三阳加工-LS101F35",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "三阳加工-YD105D32",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "三阳加工-YD105D33",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "三阳加工-YD105D34",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "三阳加工-YD105D35",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "三阳加工-YD105D36",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "三阳加工-YD105D37",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "三阳加工-HS108G30",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "三阳加工-HS108G31",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "瀚海制造-DS103H26",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "瀚海制造-DS103H27",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "瀚海制造-DS103H28",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "瀚海制造-DS103H29",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "瀚海制造-DS103H30",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "瀚海制造-DS103H31",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "瀚海制造-DS103H32",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },
        {
          label: "瀚海制造-DS103H33",
          color: "#0DFF8A",
          checked: false,
          runStatus: '开启',
          onlineStatus: '在线',
        },	
        {
          label: "新宇科技-LS101A23",
          color: "red",
          checked: false,
          runStatus: '关闭',
          onlineStatus: '离线',
        },
        {
          label: "莱福光电-LS101A24",
          color: "red",
          checked: false,
          runStatus: '关闭',
          onlineStatus: '离线',
        },
        {
          label: "金瀚新材-LS101A25",
          color: "red",
          checked: false,
          runStatus: '关闭',
          onlineStatus: '离线',
        },
        {
          label: "鸿山制造-LS101A26",
          color: "red",
          checked: false,
          runStatus: '关闭',
          onlineStatus: '离线',
        },
        {
          label: "裕华股份-LS101A27",
          color: "red",
          checked: false,
          runStatus: '关闭',
          onlineStatus: '离线',
        },	
        {
          label: "建邺宏发-HS108A14",
          color: "red",
          checked: false,
          runStatus: '关闭',
          onlineStatus: '离线',
        },
        {
          label: "建才加工-HS108A15",
          color: "red",
          checked: false,
          runStatus: '关闭',
          onlineStatus: '离线',
        },
        {
          label: "杭建裕隆-LS101A27",
          color: "red",
          checked: false,
          runStatus: '关闭',
          onlineStatus: '离线',
        },
        {
          label: "西语加工-LS101A28",
          color: "red",
          checked: false,
          runStatus: '关闭',
          onlineStatus: '离线',
        },
        {
          label: "建发制造-LS101C18",
          color: "red",
          checked: false,
          runStatus: '关闭',
          onlineStatus: '离线',
        },
        {
          label: "宏宇制造-DS103A36",
          color: "red",
          checked: false,
          runStatus: '关闭',
          onlineStatus: '离线',
        },
        {
          label: "健华材料-LS101A92",
          color: "red",
          checked: false,
          runStatus: '关闭',
          onlineStatus: '离线',
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
