<template>
  <div id="app">
    <div class="layout-box">
      <v-header />
      <transition name="move" mode="out-in">
        <div class="content-box-wrap">
          <router-view/>
        </div>

      </transition>
      <v-footer />
    </div>
    <template v-if="isPc">
      <v-ercode />
    </template>
    <v-image />
  </div>
</template>

<script>
  import vHeader from '@/components/Header/Header'
  import vFooter from '@/components/Footer/Footer'
  import vErcode from '@/components/ERcode/ERcode'
  import vImage from '@/components/viewImage/view'
  export default {
    name: 'app',
    created(){
      this.isPc = IsPC()

    },
    components:{
      vHeader,
      vFooter,
      vErcode,
      vImage
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "assets/style/common/layout";
</style>
