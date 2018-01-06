<template>
  <div class="content-box">
    <div v-for="item in list" class="list-box" >
      <ul class="card-wrap">
        <li v-for="subItem in item">
          <div class="card-item-img-box">
            <img  v-lazy="subItem.url" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    created(){},
    data:()=>({
       list:[
         [
           {
             url:'http://asset.ibanquan.com/image/571841075492c129b9000fcc/s_w330h330.png?v=1'
           },
           {
             url:'http://asset.ibanquan.com/image/571841315492c129d800105c/s_w330h330.png?v=2'
           },
           {
             url:'http://asset.ibanquan.com/image/571841535492c129d800105f/s_w330h330.png?v=3'
           }
         ],
         [
           {
             url:'http://asset.ibanquan.com/image/571841075492c129b9000fcc/s_w330h330.png?v=4'
           },
           {
             url:'http://asset.ibanquan.com/image/571841315492c129d800105c/s_w330h330.png?v=5'
           },
           {
             url:'http://asset.ibanquan.com/image/571841535492c129d800105f/s_w330h330.png?v=6'
           }
         ],
         [
           {
             url:'http://asset.ibanquan.com/image/571841075492c129b9000fcc/s_w330h330.png?v=7'
           },
           {
             url:'http://asset.ibanquan.com/image/571841315492c129d800105c/s_w330h330.png?v=8'
           },
           {
             url:'http://asset.ibanquan.com/image/571841535492c129d800105f/s_w330h330.png?v=9'
           }
         ]
       ]
    }),
    directives: {
      lazyLod: {
        // 指令的定义
        inserted: function (el) {
          let _src = el.getAttribute('data-src')
          console.log(_src)
          el.src = _src
        }
      }
    }
  }
</script>
