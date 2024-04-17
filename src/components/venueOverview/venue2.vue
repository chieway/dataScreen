<template>
  <div class="venueBox">
    <div class="venueLBox">

      <div class="venueLBoxOne venueLBoxBg" v-if="ShowDataFlags==1">
        <div class="venueLBoxOneTitleBox">
          <span class="venueLBoxOneTitleBoxImg"></span>
          <span class="venueLBoxOneTitleBoxtitle">主要素平均值日趋势图</span>
        </div>
        <div class="venueLBoxOneComBox">
          <venueLBoxOne />
        </div>
      </div>
      <div style="height: 14px"></div>

      <div class="venueLBoxTwo venueLBoxBg" v-if="ShowDataFlags==1">
        <div class="venueLBoxOneTitleBox">
          <span class="venueLBoxOneTitleBoxImg"></span>
          <span class="venueLBoxOneTitleBoxtitle">水质要素平均日趋势图</span>
        </div>
        <div class="venueLBoxOneComBox">
          <venueLBoxTwo />
        </div>
      </div>
      <div style="height: 14px"></div>

      <div class="venueLBoxTh venueLBoxBg" v-if="ShowDataFlags==1">
        <div class="venueLBoxOneTitleBox">
          <span class="venueLBoxOneTitleBoxImg"></span>
          <span class="venueLBoxOneTitleBoxtitle">告警趋势</span>
        </div>
        <div class="venueLBoxOneComBox" >
          <venueLBoxTh />
        </div>
      </div>
    </div>

    <div class="venueRBox">
      <div class="venueRBoxButtonBox">
        <div
          :class="
            venueRBoxButtonFlag == 1 ? 'venueRBoxButtonL' : 'venueRBoxButton'
          "
          @click="venueRBoxButtonFlag = !venueRBoxButtonFlag"
        >
          <span class="venueRBoxButtonSpan">乡村工况</span>
        </div>
        <div
          :class="
            venueRBoxButtonFlag == 0 ? 'venueRBoxButtonL' : 'venueRBoxButton'
          "
          @click="venueRBoxButtonFlag = !venueRBoxButtonFlag"
        >
          <span class="venueRBoxButtonSpan">数据总览</span>
        </div>
      </div>
      <div style="height: 12px"></div>
      <div class="venueRBoxTitle">
        <div class="venueRBoxTitleLift">
          <i class="el-icon-office-building"></i>
          &nbsp;&nbsp;<span>村庄</span>
        </div>
        <div class="venueRBoxTitleRight">
          <el-input
            size="small"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="input"
          />
        </div>
      </div>
      <div style="height: 15px"></div>

      <!-- 切换内容 -->
      <div class="venueRBoxChangeBox" v-if="venueRBoxButtonFlag == 1">
        <div class="sbBox">
          <div
            class="venueRBoxChangeBox_boxBg"
            v-for="(item, i) in venueRBoxChangeBoxData"
            :key="i"
            @click="MbanBoxFlayFunction(1)"
          >
            <div class="venueRBoxChangeBox_boxTitleBox">
              <div class="boxBgTitleBoxName">{{ item.name }}{{ i + 1 }}</div>
              <div class="boxBgTitleBoxIcon"  @click.stop="ShowDataFlagsFunction(1)"></div>
            </div>
            <div class="venueRBoxChangeBox_boxContentBox">
              <div
                class="v_boxContentBox"
                v-for="(red, j) in item.flag"
                :key="j"
                :style="{ marginLeft: j == 1 || j == 3 ? '34px' : '0px' }"
              >
                <div
                  class="v_boxContentBoxImg"
                  :style="{
                    backgroundImage: 'url(' + red.backgroundImage + ')',
                  }"
                  @mouseover="noneFunction(red)"
                  @mouseleave="noneFunction(0)"
                ></div>
                <div class="v_boxContentBoxDetailsBox">
                  <div
                    class="v_boxContentBoxDetailsTitle"
                    :style="{
                      color:
                        v_boxContentBoxDetailsTitleFlag == red.id
                          ? '#01D6FD'
                          : '#fff',
                    }"
                  >
                    {{ red.name }}
                  </div>
                  <div class="v_DetailsOne">
                    <span class="v_DetailsOneL">{{ red.detailsOne }}</span>
                    <span class="v_DetailsOneR">{{ red.detailsOnedata }}</span>
                  </div>
                  <div class="v_DetailsOne">
                    <span class="v_DetailsOneL">{{ red.detailsTwo }}</span>
                    <span class="v_DetailsOneR">{{ red.detailsTwodata }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="NoneboxFlags == item.NoneboxFlag" class="Nonebox">
              <div class="NoneboxTitle">水质信息</div>
              <div class="NoneboxData">
                <div class="NoneboxDataL">
                  <div
                    class="NoneboxDataLData"
                    v-for="(item, i) in NoneboxDataLData"
                    :key="i"
                  >
                    <span>{{ item.name }}</span>
                    <span>{{ item.data }}</span>
                  </div>
                </div>
                <div style="width: 79px"></div>
                <div class="NoneboxDataR">
                  <div
                    class="NoneboxDataRData"
                    v-for="(item, i) in NoneboxDataRData"
                    :key="i"
                  >
                    <span>{{ item.name }}</span>
                    <span>{{ item.data }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="venueRBoxChangeBox" v-if="venueRBoxButtonFlag == 0">
        <div class="venueRBoxChangeBoxTable">
          <venueRBoxChangeBoxTable />
        </div>
      </div>
    </div>

    <div class="venueCdownBox">
      <div
        v-for="(item, index) in venueCdownBoxData"
        :key="index"
        :class="index != 1 ? 'venueCdownBox_box' : 'venueCdownBox_boxTwo'"
      >
        <span
          class="venueCdownBox_boxSpan ybox"
          :style="{ backgroundColor: item.color }"
          >{{ item.state }}</span
        >
        <span
          class="venueCdownBox_boxSpan"
          v-for="(i, em) in item.flag"
          :key="em"
          >{{ i }}</span
        >
      </div>
    </div>

    <!-- 弹框Mban -->
    <div class="MbanBox" v-if="MbanBoxFlay == 1">
      <div class="MbanBoxBg">
        <div class="buttonFlagx" @click="MbanBoxFlayFunction(0)"></div>
        <div class="MbanTitle">水质信息</div>
        <div class="MbandataBox">
          <div class="MbandataBoxL">
            <p>厂家</p>
            <p>编号</p>
            <p>出厂日期</p>
          </div>
          <div class="MbandataBoxR">
            <p>某某厂家</p>
            <p>203891839</p>
            <p>2021-09-09</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import venueLBoxOne from "@/components/venueOverview/venueLBoxOne.vue";
import venueLBoxTwo from "@/components/venueOverview/venueLBoxTwo.vue";
import venueLBoxTh from "@/components/venueOverview/venueLBoxTh.vue";
import venueRBoxChangeBoxTable from "@/components/venueOverview/venueRBoxChangeBoxTable.vue";

export default {
  name: "venue",
  components: {
    venueLBoxOne,
    venueLBoxTwo,
    venueLBoxTh,
    venueRBoxChangeBoxTable,
  },
  data() {
    return {
      input: "",
      venueRBoxButtonFlag: 1,
      MbanBoxFlay: 0,
      NoneboxFlags: 0,
      ShowDataFlags: 0,
      v_boxContentBoxDetailsTitleFlag: 0,

      NoneboxDataLData: [
        {
          name: "COD",
          data: "1.3M",
        },
        {
          name: "PH",
          data: "1.3M",
        },
        {
          name: "TP",
          data: "1.3M",
        },
        {
          name: "氨氮",
          data: "1.3M",
        },
      ],
      NoneboxDataRData: [
        {
          name: "TP",
          data: "1.3M",
        },
        {
          name: "入口流量",
          data: "501.4m3/h",
        },
        {
          name: "检测时间",
          data: "2019年3月15日",
        },
        {
          name: "",
          data: "",
        },
      ],
      venueCdownBoxData: [
        {
          color: "rgba(26, 147, 234, 1)",
          state: "一般",
          long: "3",
          flag: {
            name: "寿山村",
            detailsOne: "明渠流量计",
            detailsTwo: "出水量过低异常",
          },
        },
        {
          color: "rgba(234, 26, 26, 1)",
          state: "严重",
          long: "2",
          flag: {
            name: "寿山村",
            detailsOne: "药剂底液位异常",
          },
        },
        {
          color: "rgba(248, 161, 0, 1)",
          state: "重要",
          long: "3",
          flag: {
            name: "寿山村",
            detailsOne: "明渠流量计",
            detailsTwo: "出水量过低异常",
          },
        },
      ],
      venueRBoxChangeBoxData: [
        {
          name: "村庄",
          state: "一般",
          long: "3",
          NoneboxFlag: 1,
          flag: [
            {
              id: 1,
              name: "明渠流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
              backgroundImage: require("@/assets/boxContentIconOne.png"),
              NoneboxFlag: 1,
            },
            {
              id: 2,
              name: "管道流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
              backgroundImage: require("@/assets/boxContentIconTwo.png"),
              NoneboxFlag: 1,
            },
            {
              id: 3,
              name: "用电检测",
              detailsOne: "电压",
              detailsOnedata: "220V",
              detailsTwo: "电流",
              detailsTwodata: "5A",
              backgroundImage: require("@/assets/boxContentIconTh.png"),
              NoneboxFlag: 1,
            },
            {
              id: 4,
              name: "网络摄像头",
              detailsOne: "状态 ",
              detailsOnedata: "在线",
              detailsTwo: "",
              detailsTwodata: "",
              backgroundImage: require("@/assets/boxContentIconFour.png"),
              NoneboxFlag: 1,
            },
          ],
        },
        {
          name: "村庄",
          state: "一般",
          long: "3",
          NoneboxFlag: 2,
          flag: [
            {
              id: 5,
              name: "明渠流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
              backgroundImage: require("@/assets/boxContentIconOne.png"),
              NoneboxFlag: 2,
            },
            {
              id: 6,
              name: "管道流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
              backgroundImage: require("@/assets/boxContentIconTwo.png"),
              NoneboxFlag: 2,
            },
            {
              id: 7,
              name: "用电检测",
              detailsOne: "电压",
              detailsOnedata: "220V",
              detailsTwo: "电流",
              detailsTwodata: "5A",
              backgroundImage: require("@/assets/boxContentIconTh.png"),
              NoneboxFlag: 2,
            },
            {
              id: 8,
              name: "网络摄像头",
              detailsOne: "状态 ",
              detailsOnedata: "在线",
              detailsTwo: "",
              detailsTwodata: "",
              backgroundImage: require("@/assets/boxContentIconFour.png"),
              NoneboxFlag: 2,
            },
          ],
        },
        {
          name: "村庄",
          state: "一般",
          long: "3",
          NoneboxFlag: 3,
          flag: [
            {
              id: 9,
              name: "明渠流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
              backgroundImage: require("@/assets/boxContentIconOne.png"),
              NoneboxFlag: 3,
            },
            {
              id: 10,
              name: "管道流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
              backgroundImage: require("@/assets/boxContentIconTwo.png"),
              NoneboxFlag: 3,
            },
            {
              id: 11,
              name: "用电检测",
              detailsOne: "电压",
              detailsOnedata: "220V",
              detailsTwo: "电流",
              detailsTwodata: "5A",
              backgroundImage: require("@/assets/boxContentIconTh.png"),
              NoneboxFlag: 3,
            },
            {
              id: 12,
              name: "网络摄像头",
              detailsOne: "状态 ",
              detailsOnedata: "在线",
              detailsTwo: "",
              detailsTwodata: "",
              backgroundImage: require("@/assets/boxContentIconFour.png"),
              NoneboxFlag: 3,
            },
          ],
        },
        {
          name: "村庄",
          state: "一般",
          long: "3",
          NoneboxFlag: 4,
          flag: [
            {
              id: 13,
              name: "明渠流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
              backgroundImage: require("@/assets/boxContentIconOne.png"),
              NoneboxFlag: 4,
            },
            {
              id: 14,
              name: "管道流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
              backgroundImage: require("@/assets/boxContentIconTwo.png"),
              NoneboxFlag: 4,
            },
            {
              id: 15,
              name: "用电检测",
              detailsOne: "电压",
              detailsOnedata: "220V",
              detailsTwo: "电流",
              detailsTwodata: "5A",
              backgroundImage: require("@/assets/boxContentIconTh.png"),
              NoneboxFlag: 4,
            },
            {
              id: 16,
              name: "网络摄像头",
              detailsOne: "状态 ",
              detailsOnedata: "在线",
              detailsTwo: "",
              detailsTwodata: "",
              backgroundImage: require("@/assets/boxContentIconFour.png"),
              NoneboxFlag: 4,
            },
          ],
        },
        {
          name: "村庄",
          state: "一般",
          long: "3",
          NoneboxFlag: 5,
          flag: [
            {
              id: 17,
              name: "明渠流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
              backgroundImage: require("@/assets/boxContentIconOne.png"),
              NoneboxFlag: 5,
            },
            {
              id: 18,
              name: "管道流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
              backgroundImage: require("@/assets/boxContentIconTwo.png"),
              NoneboxFlag: 5,
            },
            {
              id: 19,
              name: "用电检测",
              detailsOne: "电压",
              detailsOnedata: "220V",
              detailsTwo: "电流",
              detailsTwodata: "5A",
              backgroundImage: require("@/assets/boxContentIconTh.png"),
              NoneboxFlag: 5,
            },
            {
              id: 20,
              name: "网络摄像头",
              detailsOne: "状态 ",
              detailsOnedata: "在线",
              detailsTwo: "",
              detailsTwodata: "",
              backgroundImage: require("@/assets/boxContentIconFour.png"),
              NoneboxFlag: 5,
            },
          ],
        },
        {
          name: "村庄",
          state: "一般",
          long: "3",
          NoneboxFlag: 6,
          flag: [
            {
              id: 21,
              name: "明渠流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
              backgroundImage: require("@/assets/boxContentIconOne.png"),
              NoneboxFlag: 6,
            },
            {
              id: 22,
              name: "管道流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
              backgroundImage: require("@/assets/boxContentIconTwo.png"),
              NoneboxFlag: 6,
            },
            {
              id: 23,
              name: "用电检测",
              detailsOne: "电压",
              detailsOnedata: "220V",
              detailsTwo: "电流",
              detailsTwodata: "5A",
              backgroundImage: require("@/assets/boxContentIconTh.png"),
              NoneboxFlag: 6,
            },
            {
              id: 24,
              name: "网络摄像头",
              detailsOne: "状态 ",
              detailsOnedata: "在线",
              detailsTwo: "",
              detailsTwodata: "",
              backgroundImage: require("@/assets/boxContentIconFour.png"),
              NoneboxFlag: 6,
            },
          ],
        },
      ],
    };
  },
  mounted() {},

  methods: {
    noneFunction(v) {
      if (v != 0) {
        this.v_boxContentBoxDetailsTitleFlag = v.id;
        this.NoneboxFlags = v.NoneboxFlag;
      } else {
        this.v_boxContentBoxDetailsTitleFlag = 0;
        this.NoneboxFlags = 0;
      }
    },
    MbanBoxFlayFunction(v) {
      this.MbanBoxFlay = v;
    },
    ShowDataFlagsFunction(v) {
      this.ShowDataFlags = v;
    },
  },
};
</script>
<style src='./venueStyles.css' scoped>
</style>
