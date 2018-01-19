<template>
  <div class="h-fix">
    <div class="header-box content-box">
      <div class="header-icon-item">
        <router-link to="/">
          <img src="/static/image/icon/icon.svg" alt="">
        </router-link>

      </div>
      <div class="header-web-menu clear-float">
        <ul>
          <li v-for="(item,index) in menuList" :key="index" :class="onRoutes == item.router? 'active' : ''">
            <template v-if="item.isHref">
              <a :href="item.routers[0]" target="_blank">{{item.name}}</a>
            </template>
            <router-link v-else :to="item.router" tag="span">{{item.name}}</router-link>
          </li>
          <li class="split">|</li>
          <li :class="onRoutes == '/about'? 'active' : ''">
            <router-link  to="/about" tag="span">关于HOLO</router-link>
          </li>
          <li class="er-code">
            <span>联系我们</span>
            <div v-if="isPc" class="header-er">
              <div class="header-er-item">
                <img :src="'/static/image/ercode/customer-service.jpg'" alt="">
                <span>扫码咨询客服</span>
              </div>
              <div class="header-er-item">
                <img :src="'/static/image/ercode/wechat.jpg'" alt="">
                <span>商务合作</span>
              </div>

            </div>
          </li>
        </ul>
      </div>
      <div class="header-wrap-menu">
        <div @click="activeMenu">
          <div class="menu-col"></div>
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="wrapMenuActive" class="wrap-menu" @click="activeMenu">
        <div :class="['menu-left']">
          <ul >
            <li @click.stop="preMenu" v-for="(item,index) in menuList" :key="index" :class="onRoutes == item.router? 'active' : ''">
              <template v-if="item.isHref">
                <a :href="isPc ? item.routers[0] : isWX ? item.routers[1] : item.routers[2]" target="_blank">{{item.name}}</a>
              </template>
              <router-link v-else :to="item.router" tag="span">{{item.name}}</router-link>
            </li>
            <li class="split"></li>
            <li :class="onRoutes == '/about'? 'active' : ''">
              <router-link  to="/about" tag="span">关于HOLO</router-link>
            </li>
            <li :class="onRoutes == '/me'? 'active' : ''">
              <router-link  to="/me" tag="span">联系我们</router-link>
            </li>
          </ul>
        </div>
      </div>
    </transition>

  </div>
</template>
<script>
  export default{
    created(){
      this.isPc = IsPC()
      this.isWX = IsWX()
    },
    computed:{
      onRoutes(){
        return this.$route.path;
      }
    },
    data:()=>({
      isPc:false,
      isWX:false,
      menuList:[
        {
          name:'首页',
          router:'/'
        },
        {
          name:'艺术课程',
          routers:['https://shop260557515.taobao.com/shop/view_shop.htm?shop_id=260557515',
            'https://weidian.com/?userid=1154739560&p=iphone&wfr=BuyercopyURL',
            'https://shop260557515.m.taobao.com/'],
          isHref:true
        },
        {
          name:'学员作品',
          router:'/part/artWork'
        },
        {
          name:'绘画工具',
          router:'/painting'
        }
      ],
      wrapMenuActive:false,
    }),
    methods:{
        activeMenu(){
          this.wrapMenuActive = !this.wrapMenuActive
        },
        preMenu(){
            let _self = this
            setTimeout(function(){
                _self.wrapMenuActive = false
            },300)

        }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-30px);
    opacity: 1;
  }
</style>


