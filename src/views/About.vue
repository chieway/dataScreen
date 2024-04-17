<template>
  <div style="height: 100%;width: 100%;">
  <!-- <div class="about"> -->
    <!-- <h1>This is an about page</h1> -->
    <Index msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
// @ is an alias to /src
import Index from '@/components/Index.vue'

export default {
  name: 'about',
  components: {
    Index
  }
}
</script>