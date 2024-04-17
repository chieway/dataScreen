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
            <img
              @click="value2 = !value2"
              v-show="value2"
              src="../../assets/three/offo777 .png"
            />
            <img
              @click="value2 = !value2"
              v-show="!value2"
              src="../../assets/three/no777.png"
            />
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
              overflow: hidden;
            "
          >
            {{ detail }}{{ deg1 }}
          </div>
        </div>
        <div class="okButton center-center" @click="handleOk">确认</div>
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
          msg: "xx事件",
          address: "xxx栋xxx座xx层",
          time: "2021.06.24 13:24:25",
          state: "严重",
        },
        {
          msg: "xx事件",
          address: "xxx栋xxx座xx层",
          time: "2021.06.24 13:24:25",
          state: "一般",
        },
      ],
      grade: "一级",
      address: "xxx栋xxx座xx层",
      detail:
        "设备详情设备详情设备详情设备详情设备详情设备详情设备详情设设备详情设备详情设备详情设备详情设备详情设备详情设备详情设设备详情设备详情设备详情设备详情设备详情设备详情设备详情设设备详情设备详情设备详情设备详情设备详情设备详情设备详情设设备详情设备详情设备详情设备详情设备详情设备详情设备详情设设备详情设备详情设备详情设备详情设备详情设备详情设备详情设设备详情设备详情设备详情设备详情设备详情设备详情设备详情设设备详情设备详情设备详情设备详情设备详情设备详情设备详情设备详情设备详情设备详情",
    };
  },
  mounted() {},
  methods: {
    handleOk() {
      console.log("确认");
    },
  },
};
</script>
<style src='./styles.css' scoped>
</style>