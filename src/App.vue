<template>
  <div id="app">
    <div class="layout-box">
      <v-header />
      <router-view/>
      <v-footer />
    </div>
  </div>
</template>

<script>
  import vHeader from '@/components/Header/Header'
  import vFooter from '@/components/Footer/Footer'
  export default {
    name: 'app',
    components:{
      vHeader,
      vFooter
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "assets/style/common/layout";
</style>
