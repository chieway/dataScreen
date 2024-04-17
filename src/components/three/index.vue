<template>
  <div
    style="
      width: calc(100% - 62px);
      height: calc(100% - 129px);
      padding: 10px 20px;
      border: 1px solid #21599d;
      margin: 0 auto
    "
    class="center-center"
  >
    <Left />
    <Right />
  </div>
</template>

<script>
import "./styles.css";
import Left from "./left.vue";
import Right from "./right.vue";

export default {
  name: "three",

  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    Left,
    Right,
  },
};
</script>


