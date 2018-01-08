<template>
  <div class="swiper-box">
    <swiper :options="swiperOption" ref="mySwiper">
      <template v-for="item in swiperList">
        <swiper-slide>
          <div class="swiper-item">
            <img :src="item.src" alt="">
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

    data:()=>({
      swiperList:[
        {
          item:'',
          src:'/static/image/swiper/banner-holo.jpg',
        },
        {
          item:'',
          src:'/static/image/swiper/banner-art.jpg'
        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2500,
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
