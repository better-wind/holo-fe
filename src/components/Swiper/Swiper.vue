<template>
  <div class="swiper-box" id="SwiperBox">
    <swiper :options="swiperOption" ref="mySwiper">
      <template v-for="item in swiperList">
        <swiper-slide>
          <div class="swiper-item">
            <a  v-if="item.router.length" :href="isPc ? item.router[0] : item.router[0]" target="_blank">
              <img :src="isPc ? item.src[0] : item.src[1]" alt="">
            </a>
            <img v-else :src="isPc ? item.src[0] : item.src[1]" alt="">
          </div>
        </swiper-slide>
      </template>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    created(){
      this.isPc = IsPC()
    },
    mounted(){
        if(this.isPc){
          this.initView()
        }
    },
    data:()=>({
      isPc:false,
      swiperList:[
        {
          item:'',
          src:[
            '/static/image/swiper/banner-51.jpg',
            '/static/image/swiper/banner-51-wrap.jpg',
          ],
          router:['https://mp.weixin.qq.com/s/-2KuarDKQ5vizhzE0-21oQ']
        },
//        {
//          item:'',
//          src:[
//              '/static/image/swiper/banner-art.jpg',
//              '/static/image/swiper/banner-art-wrap.jpg',
//          ],
//          router:[]
//        },
        {
          item:'',
          src:[
            '/static/image/swiper/banner-holo.jpg',
            '/static/image/swiper/banner-holo-wrap.jpg'
          ],
          router:[]

        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        loop: true,
      }
    }),

    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods:{
      initView(){
        let _self = this
        const dom = document.querySelector('#SwiperBox')
        dom.addEventListener('mouseover',function(){
          _self.swiper.autoplay.stop()
        },false)
        dom.addEventListener('mouseout',function(){
          _self.swiper.autoplay.start()
        },false)
      },
    }


  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .swiper-box{
    width: 100%;
    line-height: 0;
    .swiper-item{
      height: auto;
      img{
        width: 100%;
      }
    }
    .swiper-pagination-bullet-active{
      background: #fff!important;
    }
  }
</style>
