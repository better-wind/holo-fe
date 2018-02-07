<template>

  <!--<transition name="slide-fade" >-->
  <!--</transition>-->
  <div class="view-image-wrap" v-if="isShowView" :style="isShowViewFade ? 'background-color: rgba(0,0,0,.8);' : 'background-color: rgba(0,0,0,0);'">
    <div class="view-image-cont-box" >
      <div class="view-image-box">
        <div class="text-item">
          <p class="title">{{typeMap[isType].title}}</p>
          <p>{{typeMap[isType].msg}}</p>
        </div>
        <div class="img-item">
          <img :src="viewSrc" alt="">
        </div>

      </div>
      <div class="view-image-menu">
        <img @click="closeView" src="/static/image/icon/icn_close.svg" alt="">
      </div>
    </div>


  </div>



</template>
<script>
  export default{
      created(){
        let _self = this
        this.$root.$on('setViewImage',(src,type)=>{
          _self.openViewImage(src,type)
        })
      },
      data:()=>({
        isShowView:false,
        isShowViewFade:false,
        viewSrc:'',
        isType:'',
        typeMap:{
          1:{
            title:'扫码关注公众号',
            msg:'HOLO艺术给养空间'
          },
          2:{
            title:'扫码添加客服微信',
            msg:'holo_creative'
          },
          3:{
            title:'扫码添加微信',
            msg:'leyulue'
          }
        }
      }),
      methods:{
        closeView(){
          this.isShowView = false
          this.isShowViewFade = false
          this.viewSrc = ''
          this.isType = ''
        },
        openViewImage(src,type){
          this.viewSrc = src
          this.isShowView = true
          this.isShowViewFade = true
          this.isType = type
        }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(-100px);
    opacity: 1;
  }
</style>
