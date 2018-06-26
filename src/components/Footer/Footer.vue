<template>
    <!--<transition name="fade">-->
        <!---->
    <!--</transition>-->
    <div v-if="isReady && isShow" class="footer-layout">
        <div class="footer-box">
            <div>
                <p class="f-p-title">联系我们</p>
                <p class="f-p-msg">客服电话：17706420959</p>
                <p class="f-p-msg">商务合作：holo@holoartstudio.com</p>
                <p class="f-p-icp">© 2018 杭州燃巴网络科技有限公司 | 浙ICP备17057557号-1</p>
            </div>
            <div v-if="isPc" class="f-icon">
                <div v-for="(item,index) in list" :key="index" class="f-icon-item">
                    <p>{{item.item}}</p>
                    <div>
                        <img :src="item.src" alt="">
                    </div>
                </div>
            </div>
            <div v-if="!isPc" class="wrap-me">
              <p class="f-p-title">关注我们</p>
              <img  @click="$root.$emit('setViewImage','/static/image/ercode/ercode.jpg',1)" class="margin-img-right" src="/static/image/icon/icn_wechat.svg" alt=""><a href="https://weibo.com/holoartstudio" target="_blank"><img src="/static/image/icon/icn_weibo.svg" alt=""></a>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        created(){
          if(this.$route.name == 'Me'){
              this.isShow = false
          }
          this.isPc = IsPC()
        },
        data:()=>({
            isPc:false,
            isReady:true,
            isShow:true,
            list:[
                {
                    item:'微信公众号',
                    src:'/static/image/ercode/ercode.jpg',
                },
                {
                    item:'客服微信',
                    src:'/static/image/ercode/customer-service.jpg'
                },
                {
                    item:'商务合作 | 微信',
                    src:'/static/image/ercode/wechat.jpg'
                }
            ],
        }),
        methods:{

        },
      watch: {
        '$route' (to, from) {
          if (to.name == 'Me') {
            this.isShow = false
          } else {
            this.isShow = true
          }
        }
      },

    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }
</style>

