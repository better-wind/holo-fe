<template>
    <div>
        <div class="content-box one-list-layout list-box">
            <ul>
                <li v-for="(item,index) in indexList" :key="index">
                    <a :href="item.router[0]" target="_blank">
                        <div class="list-item">
                            <div class="list-item-banner">
                                <img :src="item.bannerSrc" alt="">
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

        data:()=>({
            indexList:[
                {
                    bannerSrc:'/static/image/painting/1.jpg',
                    msg:['黄色水彩本'],
                    router:['http://mp.weixin.qq.com/s/1ysq-w21YmZuf8IbXSHcFw']
                },
                {
                    bannerSrc:'/static/image/painting/2.jpg',
                    msg:['黑色速写本'],
                    router:['http://mp.weixin.qq.com/s/6w-Avew0CMh8uG0kN5r9bA']
                },
            ],

        }),
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

</style>
