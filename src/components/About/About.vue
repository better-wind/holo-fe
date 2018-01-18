<template>
  <div class="content-box about-box">
    <div class="about-msg">
      <p>
        HOLO 艺术给养空间，是一家专注于女性艺术潜能开发的教育机构。
      </p>
      <p>
        HOLO 是一种自我探索的精神，是一种生活方式和审美趣味。
      </p>
      <p>“HOLO”源于拉丁语前缀，中文音译：合乐，意为：全部；整个；完整。意指由艺术潜能促成人格圆满。
      </p>
      <p>
        纯粹的知识和道德说教，培养了不少不被社会遗弃的规规矩矩的人，想让这规规矩矩的人重新活泼起来的，是艺术教育。<br/>
        而艺术的本质是表达。HOLO 围绕“表达”本身，提供了轻松愉悦的上课氛围，深入浅出的课程内容，因材施教的作业点评，真诚有效的激励系统，日常生活的分享交流，构成了 HOLO 艺术课程的完整体验。最终你的进步不止是体现在纸面上，而是在观察周围生活所增加的知识上。
      </p>
      <p>
        课程以及课后的一切，不止是手绘一个绘画技能，而是让你通过艺术找到自我，成为更圆满的人，帮助我们在当下活得更美更好。
      </p>
      <p>
        HOLO 团队里有中国原创插画师、中国色彩搭配师、美国伊利诺伊艺术史学士、中国美院中国画研究生、浙江理工大学美术系硕士、30 年幼儿教育经验的专家等，我们很荣幸成为向导，陪伴鼓励并协助着你，挖掘出连自己都没意识到的潜能。
      </p>
      <p>
        在这里，我们尊重每个人的独特性。<br/>
        在这里，你可以成为你自己。
      </p>
     </div>
    <div class="about-pic">
      <div class="about-pic-wrap">
        <img src="/static/image/icon/user.jpg" alt="">
      </div>
      <p class="about-pic-title">
        创始人 乐宇略
      </p>
      <div class="about-pic-msg">
        <p>浙江省第一位酒店试睡员</p>
        <p>微博 @乐宇略 月阅读量过千万</p>
        <p>《悦游》杂志特约插画师，</p>
        <p>色彩搭配师二级（中国流行色协会认证）</p>
        <p>前 Apple Creative ( 苹果创意培训师)</p>

      </div>
    </div>
  </div>

</template>
<script>
  export default {
    created(){
      this.isPc = IsPC()
    },

    data:()=>({
      isPc:false,
    }),
    methods:{

    }


  }
</script>
