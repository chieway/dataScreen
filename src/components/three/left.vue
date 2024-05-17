<template>
  <div class="l-box">
    <div class="header center-center">
      <div class="l center-center">
        <div></div>
        <div>
           <span
          style="
            font-size: 25px;
            font-family: SourceHanSansCN;
            font-weight: 500;
            color: #ff3a3a;
          "
          >{{ event[0].state }}</span
        >
        </div>
      </div>
      <div class="r">
        <div
          style="
            font-size: 24px;
            font-family: PingFangSC;
            font-weight: 500;
            color: #ffffff;
          "
        >
          {{ event[0].msg }}
          <span
            style="
              font-size: 14px;
              font-family: Adobe Heiti Std;
              font-weight: normal;
              color: #ffffff;
              opacity: 0.6;
            "
            >——{{ event[0].address }}</span
          >
        </div>
        <div
          style="
            font-size: 14px;
            font-family: Adobe Heiti Std;
            font-weight: normal;
            color: #ffffff;
            opacity: 0.6;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          "
        >
          <img
            style="width: 7px; height: 7px"
            src="../../assets/three/597.png"
            alt=""
          />
          <span style="line-height: 34px">{{ event[0].time }}</span>
          <img
            @click="deg === 90 ? (deg = 0) : (deg = 90)"
            :style="`transform:rotate(${deg}deg)`"
            src="../../assets/three/downbtn.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="center">
      <div
        style="
          -moz-transition: 1s;
          -webkit-transition: 1s;
          -o-transition: 1s;
          height: 100%;
        "
        :class="deg == 0 ? 'degOn' : 'degTw'"
      >
        <div class="item">
          <span class="equipment">设备等级</span>
          <span
            style="
              font-size: 18px;
              font-family: Adobe Heiti Std;
              font-weight: normal;
              color: #ffffff;
              opacity: 0.6;
            "
            >{{ grade }}</span
          >
        </div>
        <div class="item">
          <span class="equipment">设备开关</span>
          <span>
            <img
              @click="value1 = !value1"
              v-show="value1"
              src="../../assets/three/offo777 .png"
            />
            <img
              @click="value1 = !value1"
              v-show="!value1"
              src="../../assets/three/no777.png"
            />
            <!-- <img
              @click="value2 = !value2"
              v-show="value2"
              src="../../assets/three/offo777 .png"
            />
            <img
              @click="value2 = !value2"
              v-show="!value2"
              src="../../assets/three/no777.png"
            /> -->
          </span>
        </div>
        <div class="item">
          <span class="equipment">设备位置</span>
          <span
            style="
              font-size: 18px;
              font-family: Adobe Heiti Std;
              font-weight: normal;
              color: #ffffff;
              opacity: 0.6;
            "
            >{{ address }}</span
          >
        </div>
        <div style="text-align: left; padding: 15px; height: 42%">
          <div class="equipment">设备详情</div>
          <div
            :title="detail"
            style="
              padding-top: 10px;
              font-size: 16px;
              font-family: Adobe Heiti Std;
              font-weight: normal;
              color: #e9f3f5;
              opacity: 0.5;
              width: 100%;
              height: 53%;
              overflow-y: auto;
              overflow-x: hidden;
            "
          >
            {{ detail }}{{ deg1 }}
          </div>
        </div>
        <!-- <div class="okButton center-center" @click="handleOk">确认</div> -->
      </div>
    </div>

    <div class="header center-center">
      <div class="footer-l center-center">
       <div></div>
       <div>
         <span
          style="
            font-size: 25px;
            font-family: Adobe Heiti Std;
            font-weight: normal;
            color: #ffffff;
          "
          >{{ event[1].state }}</span
        >
       </div>
      </div>
       
      <div class="r">
        <div
          style="
            font-size: 24px;
            font-family: PingFangSC;
            font-weight: 500;
            color: #ffffff;
          "
        >
          {{ event[1].msg }}
          <span
            style="
              font-size: 14px;
              font-family: Adobe Heiti Std;
              font-weight: normal;
              color: #ffffff;
              opacity: 0.6;
            "
            >——{{ event[1].address }}</span
          >
        </div>
        <div
          style="
            font-size: 14px;
            font-family: Adobe Heiti Std;
            font-weight: normal;
            color: #ffffff;
            opacity: 0.6;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          "
        >
          <img
            style="width: 7px; height: 7px"
            src="../../assets/three/597.png"
            alt=""
          />
          <span style="line-height: 34px">{{ event[1].time }}</span>

          <img
            @click="deg1 === 90 ? (deg1 = 0) : (deg1 = 90)"
            :style="`transform:rotate(${deg1}deg)`"
            src="../../assets/three/downbtn.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: "left",

  data() {
    return {
      value2: false,
      value1: true,
      deg: 0,
      deg1: 0,
      event: [
        {
          msg: "设备故障",
          address: "东莞黄牛埔生产基地门式起重机故障",
          // 21分12秒前----1272
          time: dayjs().subtract(1272,'second').format('YYYY-MM-DD HH:MM:ss'),
          state: "严重",
        },
        {
          msg: "停电事件",
          address: "东莞黄江镇智能制造基地部分线路故障",
          time: dayjs().subtract(178572,'s').format('YYYY-MM-DD HH:MM:ss'),
          state: "一般",
        },
      ],
      grade: "一级",
      address: "广东东莞黄牛埔智能制造基地A栋",
      detail:
        "门式起重机是在桥式起重机基础上改良而来的，可以用在厂房的外的物料场等场所，来进行货物的装卸。这种起重机的金属结构外形类似门框，在主梁的两端分别有一条支脚，能在地面的轨道上进行载荷运动，主梁的两端还具有外伸悬臂梁的功能。因为门式起重机的场地利用率、作业半径较大以及通用性较好等优点，在一些港口、厂房中得到广泛的应用。",
    };
  },
  mounted() {
    console.log('----',dayjs().subtract(60,'second').format('YYYY-MM-DD HH:MM:ss'))
  },
  methods: {
    handleOk() {
      console.log("确认");
    },
  },
};
</script>
<style src='./styles.css' scoped>
</style>