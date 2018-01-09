<template>
  <div id="app">
    <div class="layout-box">
      <v-header />
      <transition name="move" mode="out-in">
        <router-view/>
      </transition>
      <v-footer />
    </div>
    <v-ercode />

  </div>
</template>

<script>
  import vHeader from '@/components/Header/Header'
  import vFooter from '@/components/Footer/Footer'
  import vErcode from '@/components/ERcode/ERcode'
  export default {
    name: 'app',
    components:{
      vHeader,
      vFooter,
      vErcode
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "assets/style/common/layout";
</style>
