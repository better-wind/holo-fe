<template>
    <transition name="fade">
        <div v-if="isReady" class="footer-layout">
            <div class="footer-box">
                <div>
                    <p class="f-p-title">联系我们 | HOLO艺术给养空间</p>
                    <p class="f-p-msg">客服电话：0571-87382643</p>
                    <p class="f-p-msg">商务合作：holo@holoartstudio.com</p>
                    <p class="f-p-icp">© 2018 杭州燃巴网络科技有限公司 浙ICP备17057557号-1</p>
                </div>
                <div class="f-icon">
                    <div v-for="(item,index) in list" :key="index" class="f-icon-item">
                        <p>{{item.item}}</p>
                        <div>
                            <img v-lazy="item.src" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>

</template>
<script>
    export default {
        created(){
            let _this = this
            setTimeout(function(){
                _this.isReady = true
            },800)
        },
        data:()=>({
            isReady:false,
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

