<template>
  <div class="swiper-box">
    <swiper :options="swiperOption" ref="mySwiper">
      <template v-for="item in swiperList">
        <swiper-slide>
          <div class="swiper-item">
            <a  v-if="item.router.length" :href="isPc ? item.router[0] : item.router[1]" target="_blank">
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
    data:()=>({
      isPc:false,
      swiperList:[
        {
          item:'',
          src:[
              '/static/image/swiper/banner-holo.jpg',
              '/static/image/swiper/banner-holo-wrap.jpg'
          ],
          router:[]

        },
        {
          item:'',
          src:[
              '/static/image/swiper/banner-art.jpg',
              '/static/image/swiper/banner-art-wrap.jpg',
          ],
          router:[]
        },
        {
          item:'',
          src:[
            '/static/image/swiper/banner-year.jpg',
            '/static/image/swiper/banner-year-wrap.jpg',
          ],
          router:['http://mp.weixin.qq.com/s/tAwWHpCEx_gSH7Mf5zdSKw','http://mp.weixin.qq.com/s/tAwWHpCEx_gSH7Mf5zdSKw']
        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        loop: true,
        grabCursor: true,
        paginationClickable: true,
      }
    }),

    components: {
      swiper,
      swiperSlide
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
