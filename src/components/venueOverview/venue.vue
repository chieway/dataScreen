<template>
  <div class="venueBox">
    <div class="venueLBox">
      <div class="venueLBoxOne venueLBoxBg">
        <div class="venueLBoxOneTitleBox">
          <span class="venueLBoxOneTitleBoxImg"></span>
          <span class="venueLBoxOneTitleBoxtitle">市场销售趋势图 | 月度</span>
        </div>
        <div class="venueLBoxOneComBox">
          <venueLBoxOne />
        </div>
      </div>
      <div style="height: 14px"></div>
      <div class="venueLBoxTwo venueLBoxBg">
        <div class="venueLBoxOneTitleBox">
          <span class="venueLBoxOneTitleBoxImg"></span>
          <span class="venueLBoxOneTitleBoxtitle">设备产销趋势图 | 月度</span>
        </div>
        <div class="venueLBoxOneComBox">
          <venueLBoxTwo />
        </div>
      </div>
      <div style="height: 14px"></div>
      <div class="venueLBoxTh venueLBoxBg">
        <div class="venueLBoxOneTitleBox">
          <span class="venueLBoxOneTitleBoxImg"></span>
          <span class="venueLBoxOneTitleBoxtitle">售后服务趋势图 | 月度</span>
        </div>
        <div class="venueLBoxOneComBox">
          <venueLBoxTh />
        </div>
      </div>
    </div>

    <div class="venueCBox">
      <!-- <mapScreen /> -->
      <test />
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

    <div class="venueRBox">
      <div class="venueRBoxButtonBox">
        <div
          :class="
            venueRBoxButtonFlag == 1 ? 'venueRBoxButtonL' : 'venueRBoxButton'
          "
          @click="venueRBoxButtonFlag = !venueRBoxButtonFlag"
        >
          <span class="venueRBoxButtonSpan">产品矩阵</span>
        </div>
        <div
          :class="
            venueRBoxButtonFlag == 0 ? 'venueRBoxButtonL' : 'venueRBoxButton'
          "
          @click="venueRBoxButtonFlag = !venueRBoxButtonFlag"
        >
          <span class="venueRBoxButtonSpan">智慧工厂</span>
        </div>
      </div>
      <div style="height: 12px"></div>
      <div class="venueRBoxTitle">
        <div class="venueRBoxTitleLift">
          <!-- <img src="" alt=""> -->
          <i class="el-icon-office-building"></i>
          &nbsp;&nbsp;<span>产品中心</span>
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
  </div>
</template>
<script>
import venueLBoxOne from "@/components/venueOverview/venueLBoxOne.vue";
import venueLBoxTwo from "@/components/venueOverview/venueLBoxTwo.vue";
import venueLBoxTh from "@/components/venueOverview/venueLBoxTh.vue";
import venueRBoxChangeBoxTable from "@/components/venueOverview/venueRBoxChangeBoxTable.vue";
import mapScreen from '@/components/venueOverview/mapScreen.vue'
import test from '@/components/venueOverview/test'

export default {
  name: "venue",
  components: {
    venueLBoxOne,
    venueLBoxTwo,
    venueLBoxTh,
    venueRBoxChangeBoxTable,
    mapScreen,
    test
  },
  data() {
    return {
      timer: null,
      input: "",
      venueRBoxButtonFlag: 1,
      venueCdownBoxData: [
        {
          color: "rgba(26, 147, 234, 1)",
          state: "一般",
          long: "3",
          flag: {
            name:'有12%的设备即将启动例行巡检，注意人员调配。',
            // name: "寿山村",
            // detailsOne: "明渠流量计",
            // detailsTwo: "出水量过低异常",
          },
        },
        {
          color: "rgba(234, 26, 26, 1)",
          state: "严重",
          long: "2",
          flag: {
            name: '自动化设备',
            // name: "寿山村",
            // detailsOne: "药剂底液位异常",
          },
        },
        {
          color: "rgba(248, 161, 0, 1)",
          state: "重要",
          long: "3",
          flag: {
            name: '自动化设备',
            // name: "寿山村",
            // detailsOne: "明渠流量计",
            // detailsTwo: "出水量过低异常",
          },
        },
      ],
      venueRBoxChangeBoxData: [
        {
          name: "雷神系列 | 切割",
          state: "一般",
          long: "3",
          flag: [
            {
              name: "金属切割Ⅰ",
              detailsOne: "激光类型",
              detailsOnedata: "光纤",
              detailsTwo: "平均功耗",
              detailsTwodata: "3000W",
            },
            {
              name: "塑料切割 Ⅱ",
              detailsOne: "激光类型",
              detailsOnedata: "CO₂",
              detailsTwo: "平均功耗",
              detailsTwodata: "100W",
            },
             {
              name: "玻璃切割 Ⅲ",
              detailsOne: "激光类型",
              detailsOnedata: "CO₂",
              detailsTwo: "平均功耗",
              detailsTwodata: "600W",
            },
            {
              name: "炭纤维切割 Ⅳ",
              detailsOne: "激光类型 ",
              detailsOnedata: "飞秒",
              detailsTwo: "平均功耗",
              detailsTwodata: "500W",
            },
          ],
        },
        {
          name: "火神系列 | 焊接",
          state: "一般",
          long: "3",
          flag: [
            {
              name: "金属焊接",
              detailsOne: "激光类型",
              detailsOnedata: "光纤",
              detailsTwo: "平均功耗",
              detailsTwodata: "3000W",
            },
            {
              name: "塑料焊接",
              detailsOne: "激光类型",
              detailsOnedata: "CO₂",
              detailsTwo: "平均功耗",
              detailsTwodata: "100W",
            },
             {
              name: "玻璃焊接",
              detailsOne: "激光类型",
              detailsOnedata: "CO₂",
              detailsTwo: "平均功耗",
              detailsTwodata: "600W",
            },
            {
              name: "炭纤维焊接",
              detailsOne: "激光类型 ",
              detailsOnedata: "飞秒",
              detailsTwo: "平均功耗",
              detailsTwodata: "500W",
            },
          ],
        },
        {
          name: "电神系列 | 打标",
          state: "一般",
          long: "3",
          flag: [
            {
              name: "金属打标",
              detailsOne: "激光类型",
              detailsOnedata: "光纤",
              detailsTwo: "平均功耗",
              detailsTwodata: "1000W",
            },
            {
              name: "塑料打标",
              detailsOne: "激光类型",
              detailsOnedata: "CO₂",
              detailsTwo: "平均功耗",
              detailsTwodata: "100W",
            },
             {
              name: "玻璃打标",
              detailsOne: "激光类型",
              detailsOnedata: "CO₂",
              detailsTwo: "平均功耗",
              detailsTwodata: "300W",
            },
            {
              name: "炭纤维打标",
              detailsOne: "激光类型 ",
              detailsOnedata: "飞秒",
              detailsTwo: "平均功耗",
              detailsTwodata: "300W",
            },
          ],
        },
        {
          name: "雅典娜系列 | 自动化",
          state: "一般",
          long: "3",
          flag: [
            {
              name: "自动上料线",
              detailsOne: "机械自动化",
            },
            {
              name: '视觉识别归整',
              detailsOne: "视觉自动化",
            },
            {
              name: '自动包装覆膜',
              detailsOne: "机械自动化",
            },
            {
              name: '残次品筛选',
              detailsOne: "视觉自动化",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.venueRBoxButtonFlag = this.venueRBoxButtonFlag === 0 ? 1 : 0
    },5000)
  },

  methods: {},
  beforeDestroy() {
    if(this.timer) {
      clearInterval(this.timer)
    }
  },
};
</script>
<style src='./venueStyles.css' scoped>
</style>
