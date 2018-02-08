<template>
  <div class="content-box contact-box">
    <div class="split-title">
      联系我们
    </div>
    <div class="split-en-title">
      Contact Us
    </div>
    <div class="contact-box-item">
      <p>HOLO艺术给养空间 | 杭州燃巴网络科技有限公司</p>


      <p class="no-margin">杭州市西湖区 天目山路238号华鸿大厦A座1405室</p>
      <p>邮编 310012</p>
      <p @click="$root.$emit('setViewImage','/static/image/ercode/ercode.jpg',1)">微信公众号：HOLO艺术给养空间（<span class="target-link">点击查看二维码</span>）</p>
      <p><a href="https://weibo.com/holoartstudio" target="_blank">微博：HOLO艺术给养空间（<span class="target-link">点击直达主页</span>）</a></p>
      <p @click="$root.$emit('setViewImage','/static/image/ercode/customer-service.jpg','2')">客服微信：holo_creative（<span class="target-link">点击查看二维码</span>）</p>
      <p class="contact-title no-margin">商务合作</p>
      <p @click="$root.$emit('setViewImage','/static/image/ercode/wechat.jpg','3')" class="no-margin">微信：leyulue（<span class="target-link">点击查看二维码</span>）</p>
      <p>邮箱：holo@holoartstudio.com</p>

    </div>
    <div class="contact-box-icon">
      <img src="/static/image/Me/slogan.jpg" alt="">
    </div>
  </div>
</template>
