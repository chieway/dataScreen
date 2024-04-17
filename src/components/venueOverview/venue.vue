<template>
  <div class="venueBox">
    <div class="venueLBox">
      <div class="venueLBoxOne venueLBoxBg">
        <div class="venueLBoxOneTitleBox">
          <span class="venueLBoxOneTitleBoxImg"></span>
          <span class="venueLBoxOneTitleBoxtitle">主要素平均值日趋势图</span>
        </div>
        <div class="venueLBoxOneComBox">
          <venueLBoxOne />
        </div>
      </div>
      <div style="height: 14px"></div>
      <div class="venueLBoxTwo venueLBoxBg">
        <div class="venueLBoxOneTitleBox">
          <span class="venueLBoxOneTitleBoxImg"></span>
          <span class="venueLBoxOneTitleBoxtitle">水质要素平均日趋势图</span>
        </div>
        <div class="venueLBoxOneComBox">
          <venueLBoxTwo />
        </div>
      </div>
      <div style="height: 14px"></div>
      <div class="venueLBoxTh venueLBoxBg">
        <div class="venueLBoxOneTitleBox">
          <span class="venueLBoxOneTitleBoxImg"></span>
          <span class="venueLBoxOneTitleBoxtitle">告警趋势</span>
        </div>
        <div class="venueLBoxOneComBox">
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
          <!-- <img src="" alt=""> -->
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
        <div
          class="venueRBoxChangeBox_boxBg"
          v-for="(item, i) in venueRBoxChangeBoxData"
          :key="i"
        >
          <div class="venueRBoxChangeBox_boxTitleBox">
            <div class="boxBgTitleBoxName">{{ item.name }}{{ i + 1 }}</div>
            <div class="boxBgTitleBoxIcon"></div>
          </div>
          <div class="venueRBoxChangeBox_boxContentBox">
            <div class="v_boxContentBox" v-for="(red, j) in item.flag" :key="j">
              <div class="v_boxContentBoxImg"></div>
              <div class="v_boxContentBoxDetailsBox">
                <div class="v_boxContentBoxDetailsTitle">{{ red.name }}</div>
                <div class="v_DetailsOne">
                  <span class="v_DetailsOneL">{{red.detailsOne}}</span>
                  <span class="v_DetailsOneR">{{red.detailsOnedata}}</span>
                </div>
                <div class="v_DetailsOne">
                  <span class="v_DetailsOneL">{{red.detailsTwo}}</span>
                  <span class="v_DetailsOneR">{{red.detailsTwodata}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div class="venueRBoxChangeBox" v-if="venueRBoxButtonFlag == 0"> 

        <div class="venueRBoxChangeBoxTable">
          <venueRBoxChangeBoxTable/>
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
          flag: [
            {
              name: "明渠流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
            },
            {
              name: "管道流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
            },
             {
              name: "用电检测",
              detailsOne: "电压",
              detailsOnedata: "220V",
              detailsTwo: "电流",
              detailsTwodata: "5A",
            },
            {
              name: "网络摄像头",
              detailsOne: "状态 ",
              detailsOnedata: "在线",
              detailsTwo: "",
              detailsTwodata: "",
            },
          ],
        },
        {
          name: "村庄",
          state: "一般",
          long: "3",
          flag: [
            {
              name: "明渠流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
            },
            {
              name: "管道流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
            },
             {
              name: "用电检测",
              detailsOne: "电压",
              detailsOnedata: "220V",
              detailsTwo: "电流",
              detailsTwodata: "5A",
            },
            {
              name: "网络摄像头",
              detailsOne: "状态 ",
              detailsOnedata: "在线",
              detailsTwo: "",
              detailsTwodata: "",
            },
          ],
        },
        {
          name: "村庄",
          state: "一般",
          long: "3",
          flag: [
            {
              name: "明渠流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
            },
            {
              name: "管道流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
            },
             {
              name: "用电检测",
              detailsOne: "电压",
              detailsOnedata: "220V",
              detailsTwo: "电流",
              detailsTwodata: "5A",
            },
            {
              name: "网络摄像头",
              detailsOne: "状态 ",
              detailsOnedata: "在线",
              detailsTwo: "",
              detailsTwodata: "",
            },
          ],
        },
        {
          name: "村庄",
          state: "一般",
          long: "3",
          flag: [
            {
              name: "明渠流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
            },
            {
              name: "管道流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
            },
             {
              name: "用电检测",
              detailsOne: "电压",
              detailsOnedata: "220V",
              detailsTwo: "电流",
              detailsTwodata: "5A",
            },
            {
              name: "网络摄像头",
              detailsOne: "状态 ",
              detailsOnedata: "在线",
              detailsTwo: "",
              detailsTwodata: "",
            },
          ],
        },
        {
          name: "村庄",
          state: "一般",
          long: "3",
          flag: [
            {
              name: "明渠流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
            },
            {
              name: "管道流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
            },
             {
              name: "用电检测",
              detailsOne: "电压",
              detailsOnedata: "220V",
              detailsTwo: "电流",
              detailsTwodata: "5A",
            },
            {
              name: "网络摄像头",
              detailsOne: "状态 ",
              detailsOnedata: "在线",
              detailsTwo: "",
              detailsTwodata: "",
            },
          ],
        },
        {
          name: "村庄",
          state: "一般",
          long: "3",
          flag: [
            {
              name: "明渠流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
            },
            {
              name: "管道流量计",
              detailsOne: "流速",
              detailsOnedata: "501.4m3/h",
              detailsTwo: "总流量",
              detailsTwodata: "20501.4m3",
            },
             {
              name: "用电检测",
              detailsOne: "电压",
              detailsOnedata: "220V",
              detailsTwo: "电流",
              detailsTwodata: "5A",
            },
            {
              name: "网络摄像头",
              detailsOne: "状态 ",
              detailsOnedata: "在线",
              detailsTwo: "",
              detailsTwodata: "",
            },
          ],
        },

       

      ],
    };
  },
  mounted() {},

  methods: {},
};
</script>
<style src='./venueStyles.css' scoped>
</style>
