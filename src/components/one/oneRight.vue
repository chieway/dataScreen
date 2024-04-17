<template>
  <div
    ref="box"
    style="
      height: 100%;
      width: 100%;
      position: relative;
      float: right;
      right:0%;
      transition: right 0.3s;
    "
  >
    <div class="btn" @click="offOn">
      <span v-show="!tag"> <i
              class='el-icon-arrow-left'
            ></i> 展开 </span>
      <span v-show="tag"> 
      <i
              class='el-icon-arrow-right'
            ></i>
             收起 </span>
    </div>
    <div class="r-box">
      <div class="top">
        <div class="t-item">
          <div class="center">
            <div class="l center-center">
              <img style="width: 100%" src="../../assets/wendu.png" alt="" />
            </div>
            <div class="r">
              <p style="paddingbottom: 5px; color: #fff; font-size: 14px">
                当前温度
              </p>
              <p style="color: #01d8ff; font-size: 22px">{{temperature[0]}}</p>
            </div>
          </div>
        </div>
        <div class="t-item">
          <div class="center">
            <div class="l center-center">
              <img style="width: 100%" src="../../assets/shuidi.png" alt="" />
            </div>
            <div class="r">
              <p style="paddingbottom: 5px; color: #fff; font-size: 14px">
                当前湿度
              </p>
              <p style="color: #01d8ff; font-size: 22px">{{temperature[1]}}</p>
            </div>
          </div>
        </div>
        <div class="t-item">
          <div class="center">
            <div class="l center-center">
              <img style="width: 100%" src="../../assets/wendu.png" alt="" />
            </div>
            <div class="r">
              <p style="paddingbottom: 5px; color: #fff; font-size: 14px">
                今日最大温度
              </p>
              <p style="color: #01d8ff; font-size: 22px">{{temperature[2]}}</p>
            </div>
          </div>
        </div>
        <div class="t-item">
          <div class="center">
            <div class="l center-center">
              <img style="width: 100%" src="../../assets/shuidi.png" alt="" />
            </div>
            <div class="r">
              <p style="paddingbottom: 5px; color: #fff; font-size: 14px">
                今日最大湿度
              </p>
              <p style="color: #01d8ff; font-size: 22px">{{temperature[3]}}</p>
            </div>
          </div>
        </div>
        <div class="t-item">
          <div class="center">
            <div class="l center-center">
              <img style="width: 100%" src="../../assets/wendu.png" alt="" />
            </div>
            <div class="r">
              <p style="paddingbottom: 5px; color: #fff; font-size: 14px">
                今日最小温度
              </p>
              <p style="color: #01d8ff; font-size: 22px">{{temperature[4]}}</p>
            </div>
          </div>
        </div>
        <div class="t-item">
          <div class="center">
            <div class="l center-center">
              <img style="width: 100%" src="../../assets/shuidi.png" alt="" />
            </div>
            <div class="r">
              <p style="paddingbottom: 5px; color: #fff; font-size: 14px">
                今日最小湿度
              </p>
              <p style="color: #01d8ff; font-size: 22px">{{temperature[5]}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div
          @click="funbgcolor(0)"
          :class="flag === 0 ? 'bgcolor center-center' : 'center-center'"
        >
          <footer>
            <p v-if="flag === 0"><img src="../../assets/kaimen.png" alt="" /></p>
            <p v-if="flag !== 0"><img src="../../assets/kaimen_1.png" alt="" /></p>
            <p>开门</p>
          </footer>
        </div>
        <div
          @click="funbgcolor(1)"
          :class="flag === 1 ? 'bgcolor center-center' : 'center-center'"
        >
          <footer>
            <p v-if="flag === 1"><img src="../../assets/guanmen.png" alt="" /></p>
            <p v-if="flag !== 1"><img src="../../assets/guanmen_1.png" alt="" /></p>
            <p>关门</p>
          </footer>
        </div>
        <div style="visibility: hidden"></div>
        <div style="visibility: hidden"></div>
      </div>
      <div class="footer">
        <div
          @click="funbgcolor_1(0)"
          :class="flag_1 === 0 ? 'bgcolor center-center' : 'center-center'"
        >
          <footer>
            <p v-if="flag_1 === 0"><img src="../../assets/kaideng.png" alt="" /></p>
            <p v-if="flag_1 !== 0"><img src="../../assets/guandeng.png" alt="" /></p>
            <p>开灯</p>
          </footer>
        </div>
        <div
          @click="funbgcolor_1(1)"
          :class="flag_1 === 1 ? 'bgcolor center-center' : 'center-center'"
        >
          <footer>
            <p v-if="flag_1 === 1"><img src="../../assets/kaideng.png" alt="" /></p>
            <p v-if="flag_1 !== 1"><img src="../../assets/guandeng.png" alt="" /></p>
            <p>关灯</p>
          </footer>
        </div>
        <div
          @click="funbgcolor_1(2)"
          :class="flag_1 === 2 ? 'bgcolor center-center' : 'center-center'"
        >
          <footer>
            <p v-if="flag_1 === 2"><img src="../../assets/tiaoguan.png" alt="" /></p>
            <p v-if="flag_1 !== 2"><img src="../../assets/tiaoguan_1.png" alt="" /></p>
            <p>调关</p>
          </footer>
        </div>
        <div style="visibility: hidden"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
// import "./styles.css";

export default {
  name: "oneRight",
  data() {
    return {
      tag: true,
      flag: 0,
      flag_1: 0,
      temperature: ['37℃','30%','37℃','30%','37℃','30%']
    };
  },
  mounted() {},
  methods: {
    offOn() {
      const box = this.$refs.box;
      if (this.tag) {
        box.style.right = "-100%";
      } else {
        box.style.right = "0%";
      }
      this.tag = !this.tag;
    },
    funbgcolor(v) {
      this.flag = v;
    },
    funbgcolor_1(v) {
      this.flag_1 = v;
    },
  },
};
</script>

<style src='./styles.css' scoped>
</style>

