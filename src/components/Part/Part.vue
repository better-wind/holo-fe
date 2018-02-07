<template>
    <div>
        <div class="content-box three-list-layout list-box">
            <div class="split-title">
                {{partTitle}}
            </div>
            <div class="split-en-title">
              {{partTitleEn}}
            </div>
            <ul>
                <li v-for="(item,index) in partList" :key="index">
                        <a :href="item.router[0]" target="_blank">
                            <div class="list-item">
                            <div class="list-item-banner">
                                <img v-lazy="item.bannerSrc" alt="">
                            </div>
                            <div class="list-item-msg">
                                <div class="content-msg">
                                    <p v-for="msg in item.msg">
                                        {{msg}}
                                    </p>
                                </div>
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
            this.initView()
        },
        data:()=>({
            isPc:false,
            indexList:{
                artWork:[
                    {
                        bannerSrc:'/static/image/artWork/1.jpg',
                        msg:['人生在勤，不索何获'],
                        router:['https://mp.weixin.qq.com/s/t8QoY3ONIj8MHYeO6YCkoA']
                    },
                    {
                        bannerSrc:'/static/image/artWork/2.jpg',
                        msg:['从一支画笔开始的生活美学'],
                        router:['https://mp.weixin.qq.com/s/9kJhPSg-r4Th2rFqCb4dng']
                    },
                    {
                        bannerSrc:'/static/image/artWork/3.jpg',
                        msg:['你还认得出自己吗？'],
                        router:['https://mp.weixin.qq.com/s/hISzlQzQA3_CnJP-x7yJxA']
                    },
                    {
                        bannerSrc:'/static/image/artWork/4.jpg',
                        msg:['平凡人和大师的较量'],
                        router:['https://mp.weixin.qq.com/s/s7LvqYWFIx-dt8XJos_NPQ']
                    },
                    {
                        bannerSrc:'/static/image/artWork/5.jpg',
                        msg:['独立艺术家的自白'],
                        router:['https://mp.weixin.qq.com/s/XKV-13YXXICHw1VHtDui6A']
                    },
                    {
                        bannerSrc:'/static/image/artWork/6.jpg',
                        msg:['他们的作品，记录了假期最美好的样子'],
                        router:['https://mp.weixin.qq.com/s/oJ4hT5s-LcH37nVYM1eSgQ']
                    }
                ],
                event:[
                    {
                        bannerSrc:'/static/image/event/3.jpg',
                        msg:['谢谢闪闪发光的你们 | HOLO 年末公益画展 圆满闭幕'],
                        router:['http://mp.weixin.qq.com/s/1KRWy7X-DnmckQNiNJYz7A']
                    },
                  {
                        bannerSrc:'/static/image/event/1.jpg',
                        msg:['一支画笔开始的旅行丨 HOLO「关爱自闭症」公益画展'],
                        router:['http://mp.weixin.qq.com/s/1ysq-w21YmZuf8IbXSHcFw']
                    },
                    {
                        bannerSrc:'/static/image/event/2.jpg',
                        msg:['在 KFC 里熄灯一小时是怎样的体验？'],
                        router:['http://mp.weixin.qq.com/s/6w-Avew0CMh8uG0kN5r9bA']
                    },
                ],
                goods:[
                    {
                        bannerSrc:'/static/image/goods/1.jpg',
                        msg:['夏日心愿之Bikini 水彩手绘教程'],
                        router:['https://mp.weixin.qq.com/s/Hez-bsALY9UsrivudkxOCg']
                    },
                    {
                        bannerSrc:'/static/image/goods/2.jpg',
                        msg:['趁早星球手绘，「盐x水彩」技法大公开'],
                        router:['https://mp.weixin.qq.com/s/xKc335KrA6GeawEfrq-lVg']
                    },
                    {
                        bannerSrc:'/static/image/goods/3.jpg',
                        msg:['最有诚意的个人名片'],
                        router:['https://mp.weixin.qq.com/s/kUMI_wkEewJGe3wSbaWkEg']
                    },
                    {
                        bannerSrc:'/static/image/goods/4.jpg',
                        msg:['3分钟手帐实现你的画画梦'],
                        router:['http://mp.weixin.qq.com/s/vu3-uTBfow9PE9veiKGnwQ']
                    },
                    {
                        bannerSrc:'/static/image/goods/5.jpg',
                        msg:['奔跑吧大肥兔 激萌水彩'],
                        router:['https://mp.weixin.qq.com/s/EzRFDfL9AZwZ17bSD9iToQ']
                    },
                    {
                        bannerSrc:'/static/image/goods/6.jpg',
                        msg:['最爱那一口给你'],
                        router:['https://mp.weixin.qq.com/s/6UiG4LcuEizRswxW_Tm2Yw']
                    },
                    {
                        bannerSrc:'/static/image/goods/7.jpg',
                        msg:['又到了思念你的季节'],
                        router:['https://mp.weixin.qq.com/s/4cBHB7ZtuchzGqMIKK-IZg']
                    },
                    {
                        bannerSrc:'/static/image/goods/8.jpg',
                        msg:['现在，一起许愿吧'],
                        router:['https://mp.weixin.qq.com/s/5C_vLahFBOjKo69XmtjqZA']
                    },
                    {
                        bannerSrc:'/static/image/goods/9.jpg',
                        msg:['艺术影片及书籍推荐'],
                        router:['http://mp.weixin.qq.com/s/XeADga0TZ51JWRVKs-8Nww']
                    },
                ],
                supplies:[
                    {
                        bannerSrc:'/static/image/supplies/1.jpg',
                        msg:['插画师告诉你，哪些文具颜美又好用'],
                        router:['https://mp.weixin.qq.com/s/KYKnL2eGXlS8FLh8L7ZbrQ']
                    },
                    {
                        bannerSrc:'/static/image/supplies/2.jpg',
                        msg:['50～300元预算，如何挑对「固体水彩颜料」不踩雷？'],
                        router:['https://mp.weixin.qq.com/s/TMT5rkjNBX_dSVBgBLnlJA']
                    },
                    {
                        bannerSrc:'/static/image/supplies/3.jpg',
                        msg:['网红水彩画笔，到底值不值得买？'],
                        router:['https://mp.weixin.qq.com/s/peKbSFRfTIz6u6YO6xM4xw']
                    },
                    {
                        bannerSrc:'/static/image/supplies/4.jpg',
                        msg:['想了解留白胶？读这一篇就够了！'],
                        router:['https://mp.weixin.qq.com/s/vZlJ9tpBSjytpGjkdA-l7w']
                    },
                    {
                        bannerSrc:'/static/image/supplies/5.jpg',
                        msg:['水彩纸全攻略！答应我，别拿 A4 纸画水彩了好吗？'],
                        router:['https://mp.weixin.qq.com/s/Xf-b2mKUFP_W9rDCIZemiQ']
                    },
                ],
            },
            indexTitle:{
                artWork:'学员作品',
                event:'活动',
                goods:'免费绘画工具',
                supplies:'画材测评'
            },
          indexTitleEn:{
                artWork:'Artwork',
                event:'Event',
                goods:'Goods',
                supplies:'Supplies Testing'
            },
            partList:[],
            partTitle:'',
          partTitleEn:''
        }),
        methods:{
            initView(){
                let _chanelName = this.$route.params.name
                this.partList = this.indexList[_chanelName] ? this.indexList[_chanelName] : []
                this.partTitle = this.indexTitle[_chanelName] ? this.indexTitle[_chanelName] : ''
                this.partTitleEn = this.indexTitleEn[_chanelName] ? this.indexTitleEn[_chanelName] : ''
            },
        },
        watch:{
            '$route.params.name':function(){
                this.initView()
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

</style>
