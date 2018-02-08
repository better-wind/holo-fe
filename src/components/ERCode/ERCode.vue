<template>
    <div v-if="isShow" class="fix-er">
        <ul v-if="isPc">
            <li>
                <span>微信客服</span>
                <div class="er-code-wrap">
                    <img :src="'/static/image/ercode/customer-service.jpg'" alt="">
                    <span>扫码咨询客服</span>
                </div>
            </li>
            <li>
                <span>公众号</span>
                <div class="er-code-wrap">
                    <img :src="'/static/image/ercode/ercode.jpg'" alt="">
                    <span>关注公众号</span>
                </div>
            </li>
            <li>
                <span>商务合作</span>
                <div class="er-code-wrap">
                    <img :src="'/static/image/ercode/wechat.jpg'" alt="">
                    <span>商务合作</span>
                </div>
            </li>
            <li class="back-top" @click="toTop">
                <img src="/static/image/icon/icn_btt.svg" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
      created(){
        this.isPc = IsPC()

      },
      mounted(){
        this.hideShow()
      },
        data:()=>({
          isPc:false,
          isShow:true,
        }),
        methods:{
            toTop(){
                window.backToTop(4)
            },
          hideShow(){
            let _self = this
            window.addEventListener('scroll',function(e){
                let _height = document.body.scrollTop || document.documentElement.scrollTop
                if(_height > 370){
                  _self.isShow = true
                } else {
                  _self.isShow = false
                }

            },false)
          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .fix-er{
        position: fixed;
        width: 200px;
        height: 270px;
        /*background-color: rgba(0,0,0,.5);*/
        left:50%;
        bottom: 420px;
        transform: translateX(530px);
        z-index: 99;
        >ul{
            width: 88px;
            height: 270px;
            border-radius: 11px;
            background-color: #ffc207;
            border: solid 2px #d89931;
            >li{
                position: relative;
                height: 69px;
                line-height: 69px;
                font-size: 14px;
                font-weight: 600;
                text-align: center;
                color: #4a4a4a;
                cursor: pointer;
                border-bottom: solid 1px #d99930;
                >.er-code-wrap{
                    display: none;
                    position: absolute;
                    top:0;
                    left:-130px;
                    width: 112px;
                    height: 134px;
                    background-color: #ffffff;
                    border: solid 1px rgba(136, 136, 136, 0.3);
                    text-align: center;
                    line-height: 0px;
                    >img{
                        margin-top: 5px;
                        width: 100px;
                        height: 100px;
                    }
                    >span{
                        font-size: 14px;
                        color: #4e4e4e;
                        line-height: 22px;
                    }
                }
                &.back-top{
                    height: 60px;
                    border: none;
                    img{
                        width: 88px;
                        height: 60px;
                    }
                }
                &:hover{
                    >.er-code-wrap{
                        display: block;
                    }
                }
            }
        }
    }
</style>
