<template>
  <div style="height: 100%; width: 100%; position: relative" class="box">
    <img
      class="boxDownImg"
      style="
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -2;
      "
      src="../assets/bg.png"
    />
    <div
      style="
        width: 100%;
        height: 85px;
        position: relative;
        text-align: center;
        display: flex;
      "
    >
      <img
        style="
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          z-index: -1;
        "
        src="../assets/header.png"
      />
      <div class="header_left">
        <img src="../assets/logo.png" class="logo" alt="title" />
        <span class="text">绍辉超级激光物联大数据平台</span>
        <!-- <img src="../assets/logoTitle.png" alt="title" /> -->
      </div>
      <div class="header_center">
        <!-- <div
          :class="msg === '0' ? 'hover_1 header_1' : 'header_1'"
          @click="clickHover('0')"
        >
          <span>
            <img src="../assets/venueVerview.png" alt="" /><span
              >场馆总览
            </span>
          </span>
        </div> -->
        <div
          :class="msg === '4' ? 'hover_1 header_1' : 'header_1'"
          @click="clickHover('4')"
        >
          <span
            ><img src="../assets/virtualSpace.png" alt="" />
            <span>指挥中心</span>
          </span>
        </div>
        <div
          :class="msg === '3' ? 'hover_1 header_1' : 'header_1'"
          @click="clickHover('3')"
        >
          <span
            ><img src="../assets/virtualSpace.png" alt="" />
            <span>管理中心</span>
          </span>
        </div>
        <div
          :class="msg === '2' ? 'hover_1 header_1' : 'header_1'"
          @click="clickHover('2')"
        >
          <span
            ><img src="../assets/EquipmentCenter.png" alt="" />
            <span>设备中心</span>
          </span>
        </div>
        <div
          :class="msg === '1' ? 'hover_1 header_1' : 'header_1'"
          @click="clickHover('1')"
        >
          <span
            ><img src="../assets/monitoringCenter.png" alt="" />
            <span>数智制造</span>
          </span>
        </div>
      </div>
      <div class="header_right">
        <div>
          <p
            style="
              width: 86px;
              font-size: 19px;
              font-family: PangMenZhengDao;
              font-weight: 400;
              color: #ffffff;
              line-height: 50px;
              margin: 0px;
            "
          >
            {{ time }}
          </p>
          <p
            style="
              width: 79px;
              font-size: 15px;
              font-family: PangMenZhengDao;
              font-weight: 400;
              color: #7db1f8;
              margin: 0px;
            "
          >
            {{ date }}
          </p>
        </div>
        <div
          style="
            width: 1px;
            height: 41px;
            background: #092c3a;
            border: 1px solid #ffffff;
            opacity: 0.4;
            margin-left: 20px;
            margin-right: 20px;
          "
        ></div>
        <div class="a1"><img src="../assets/logoRightOne.png" alt="" /></div>
        <div class="a1"><img src="../assets/logoRightTwo.png" alt="" /></div>
        <div class="a2"><img src="../assets/logoRightTh.png" alt="" /></div>
        <div class="a2"><img src="../assets/logoRightFour.png" alt="" /></div>
        <div class="a2"><img src="../assets/logoRightFive.png" alt="" /></div>
      </div>
    </div>
    <div
      v-if="msg === '0'"
      style="
        width: calc(100% - 62px);
        height: calc(100% - 149px);
        padding: 10px 0px 10px 20px;
        margin: 19px;
        border: 1px solid #21599d;
        overflow: hidden;
      "
    >
      <!-- 左 -->
      <div style="float: left; width: 75%; height: 100%">
        <oneLeft v-if="varChangeFlag == 'buttonTitleO'" />
      </div>

      <!-- 中间 -->

      <!-- 右 -->
      <div style="float: left; width: 25%; height: 100%; ">
        <oneRight v-if="varChangeFlag == 'buttonTitleO'" />
      </div>
    </div>
    <Two v-if="msg === '1'" />
    <EquipmentCenter v-if="msg === '2'" />
    <Three v-if="msg === '3'" />
    <Four v-if="msg === '4'" />
  </div>
</template>

<script>
import Vue from "vue";
import oneLeft from "@/components/one/oneLeft.vue";
import oneRight from "@/components/one/oneRight.vue";
import Two from "@/components/archives.vue";
import Three from "@/components/three";
import Four from "@/components/venueOverview/venue.vue";
import EquipmentCenter from "@/components/EquipmentCenter/EquipmentCenter.vue";
import dayjs from "dayjs";

export default {
  name: "Index",
  components: {
    oneLeft,
    oneRight,
    Two,
    Three,
    Four,
    EquipmentCenter,
  },
  data() {
    return {
      time: "",
      msg: "4",
      date: "",
      varChangeFlag: "buttonTitleO",
      timer: null,
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.date = dayjs().format('YYYY.MM.DD')
      this.time = dayjs().format('HH:mm:ss')
    },1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    clickHover(v) {
      this.msg = v;
    },
  },
};
</script>

<style>
@import "./styles.css";
/* @import './assets/css/b.min.css' */
.header_1 {
  width: 170px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #67abff;
  background: linear-gradient(
    180deg,
    rgba(106, 215, 255, 0) 0%,
    rgba(73, 174, 211, 0.2) 100%
  );
  opacity: 1;
}
.header_left {
  width: 30%;
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 30px;
  /* justify-content: center; */
}
.header_left .logo {
  width: 130px;
  height: 50px;
}
.header_left .text {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}
.header_center {
  width: 50%;
  display: flex;
  align-items: center;
  height: 100%;
  /* justify-content: center; */
}
.header_right {
  width: 20%;
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 30px;
  justify-content: flex-end;
}
.header_center .header_1 {
  width: 170px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    180deg,
    rgba(106, 215, 255, 0) 0%,
    rgba(73, 174, 211, 0.2) 100%
  );
  opacity: 1;
}
.header_center .header_1 span {
  /* width: 87px; */
  height: 30px;
  font-size: 22px;
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  line-height: 30px;
  opacity: 1;
}
.header_center .header_1 img {
  margin-bottom: -3px;
  margin-right: 5px;
}
.hover_1 {
  background: url(../assets/caidanjiantou.png) no-repeat bottom center !important;
  background-size: 100% 100%;
  color: #ffffff !important;
}
</style>
