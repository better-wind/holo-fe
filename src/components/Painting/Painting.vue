<template>
    <div>
        <div class="content-box one-list-layout list-box">
          <div class="split-title">
            原创画材
          </div>
          <div class="split-en-title">
            Painting Supplies
          </div>
            <ul>
                <li v-for="(item,index) in indexList" :key="index">
                    <a :href="isPc ? item.router[0] : item.router[1]" target="_blank">
                        <div class="list-item">
                            <div class="list-item-banner">
                                <img v-lazy="item.bannerSrc" alt="">
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
    import vSwiper from '@/components/Swiper/Swiper'
    export default{
        created(){
            this.isPc = IsPC()
        },
        data:()=>({
            isPc:false,
            indexList:[
                {
                    bannerSrc:'/static/image/painting/1.jpg',
                    msg:['黄色水彩本'],
                    router:['https://item.taobao.com/item.htm?id=561861631835&_u=9181ut05bb0','http://shop2605575155184.t16.ltd/detail/561861631835']
                },
                {
                    bannerSrc:'/static/image/painting/2.jpg',
                    msg:['黑色速写本'],
                    router:['https://item.taobao.com/item.htm?id=563357599765&_u=9181ut09bf4','http://shop2605575155184.t16.ltd/detail/563357599765']
                },
            ],

        }),
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

</style>
