<template>
  <div class="l-box" style="float: left; width: 100%; height: 100%">
    <div class="l-top">
      <div :class="!tag ? 'hover_2' : null" @click="tag = !tag">
        <img
          v-show="!tag"
          class="img_2"
          src="../../assets/biaoshi.png"
          alt=""
        />
        <img
          v-if="!tag"
          class="img_1"
          src="../../assets/3x.png"
          alt=""
        />
        <img
          v-if="tag"
          class="img_1"
          src="../../assets/3x.png"
          alt=""
        />
        <p :style="{ color: !tag ? '#01D8FF' : '#fff' }">摄像头</p>
      </div>

      <div :class="!tag1 ? 'hover_2' : null" @click="tag1 = !tag1">
        <img
          v-show="!tag1"
          class="img_2"
          src="../../assets/biaoshi.png"
          alt=""
        />
        <img
          v-if="!tag1"
          class="img_1"
          src="../../assets/hongwai.png"
          alt=""
        />
        <img
          v-if="tag1"
          class="img_1"
          src="../../assets/hongwai1.png"
          alt=""
        />
        <p :style="{ color: !tag1 ? '#01D8FF' : '#fff' }">红外</p>
      </div>

      <div :class="!tag2 ? 'hover_2' : null" @click="tag2 = !tag2">
        <img
          v-show="!tag2"
          class="img_2"
          src="../../assets/biaoshi.png"
          alt=""
        />
        <img
          v-if="!tag2"
          class="img_1"
          src="../../assets/anfang.png"
          alt=""
        />
        <img
          v-if="tag2"
          class="img_1"
          src="../../assets/anfang1.png"
          alt=""
        />
        <p :style="{ color: !tag2 ? '#01D8FF' : '#fff' }">安防</p>
      </div>
    </div>
    <div class="l-select">
      <!-- <el-select
        v-model="value"
        style="background: transparent; color: #fff"
        size="small"
      > -->
       <el-select
            ref="selectTree"
            v-model="form.Id"
            filterable
            placeholder="请选择..."
          >
        <!-- <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <span style="float: left">{{ item.label }}</span>
          <el-checkbox style="float: right" v-model="checked" />
        </el-option> -->

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
              :data="options"
              :props="defaultProps"
              :node-key="defaultProps.value"
              @node-click="handleNodeClick"
              default-expand-all
            />
      </el-select>
    </div>
    <div class="centerBg">
      <div
        v-for="(item, i) in CameraNoneData"
        :key="i"
        class="CameraNone"
        :style="item.style"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "oneLeft",

  data() {
    return {
      tag: true,
      tag1:true,
      tag2: true,
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
      options: [
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
        // {
        //   value: "停车场",
        //   Id: 1,
        //   label: "停车场",
        //   children: [
        //     {
        //       Id: 11,
        //       value: "一号楼",
        //       label: "一号楼",
        //       children: [
        //         {
        //           value: "一楼",
        //           label: "一楼",
        //         },
        //         {
        //           value: "二楼",
        //           label: "二楼",
        //         },
        //         {
        //           value: "三楼",
        //           label: "三楼",
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
      value: "一楼",
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
        { style: "top:19%;left:70%", id: 17 },
      ],
    };
  },
  mounted() {},
  methods: {
    funSelect(v) {
      return <span>{{ v }}</span>;
    },
    clickHover(v) {
      this.tag = v;
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
<style src='./styles.css' scoped>
</style>

