webpackJsonp([6],{"+aDP":function(t,e){},BTO4:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("mNlw");var s=i("7+uW"),a={created:function(){this.isPc=IsPC(),this.isWX=IsWX()},computed:{onRoutes:function(){return this.$route.path}},data:function(){return{isPc:!1,isWX:!1,isClick:!1,menuList:[{name:"首页",router:"/"},{name:"艺术课程",routers:["https://shop260557515.taobao.com/shop/view_shop.htm?shop_id=260557515","https://weidian.com/?userid=1154739560&p=iphone&wfr=BuyercopyURL","https://shop260557515.m.taobao.com/"],isHref:!0},{name:"学员作品",router:"/part/artWork"},{name:"原创画材",router:"/painting"}],wrapMenuList:[{name:"首页",router:"/"},{name:"HOLO 艺术课程",routers:["https://shop260557515.taobao.com/shop/view_shop.htm?shop_id=260557515","https://weidian.com/?userid=1154739560&p=iphone&wfr=BuyercopyURL","https://shop260557515.m.taobao.com/"],isHref:!0},{name:"HOLO 原创画材",router:"/painting"},{name:"HOLO 学员作品",router:"/part/artWork"},{name:"免费绘画教程",router:"/part/goods"},{name:"画材测评",router:"/part/supplies"},{name:"活动",router:"/part/event"}],wrapMenuActive:!1,wrapMenuActiveOpacity:!1}},methods:{activeMenu:function(){this.wrapMenuActive=!this.wrapMenuActive,this.isClick=!0},preMenu:function(){var t=this;this.wrapMenuActiveOpacity=!0,setTimeout(function(){t.wrapMenuActive=!1,t.wrapMenuActiveOpacity=!1,t.isClick=!1},300)}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"h-fix"},[i("div",{staticClass:"header-box content-box"},[i("div",{staticClass:"header-icon-item"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:"/static/image/icon/icon.svg",alt:""}})])],1),t._v(" "),i("div",{staticClass:"header-web-menu clear-float"},[i("ul",[t._l(t.menuList,function(e,s){return i("li",{key:s,class:t.onRoutes==e.router?"active":""},[e.isHref?[i("a",{attrs:{href:e.routers[0],target:"_blank"}},[t._v(t._s(e.name))])]:i("router-link",{attrs:{to:e.router,tag:"span"}},[t._v(t._s(e.name))])],2)}),t._v(" "),i("li",{staticClass:"split"},[t._v("|")]),t._v(" "),i("li",{class:"/about"==t.onRoutes?"active":""},[i("router-link",{attrs:{to:"/about",tag:"span"}},[t._v("关于 HOLO")])],1),t._v(" "),i("li",{staticClass:"er-code"},[i("span",[t._v("联系我们")]),t._v(" "),t.isPc?i("div",{staticClass:"header-er"},[i("div",{staticClass:"header-er-item"},[i("img",{attrs:{src:"/static/image/ercode/customer-service.jpg",alt:""}}),t._v(" "),i("span",[t._v("扫码咨询客服")])]),t._v(" "),i("div",{staticClass:"header-er-item"},[i("img",{attrs:{src:"/static/image/ercode/wechat.jpg",alt:""}}),t._v(" "),i("span",[t._v("商务合作")])])]):t._e()])],2)]),t._v(" "),i("div",{staticClass:"header-wrap-menu"},[i("div",{on:{click:t.activeMenu}},[i("div",{staticClass:"menu-col"})])])]),t._v(" "),t.isPc?t._e():[i("div",{class:["mask-wrap",t.wrapMenuActive?"show":t.isClick?"hide":""],style:t.wrapMenuActiveOpacity?"opacity:0":""}),t._v(" "),i("transition",{attrs:{name:"slide-fade"}},[t.wrapMenuActive?i("div",{staticClass:"wrap-menu",style:t.wrapMenuActiveOpacity?"opacity:0":""},[i("div",{class:["menu-left"]},[i("div",{staticClass:"close-wrap"},[i("img",{attrs:{src:"/static/image/icon/icn_navi_close.svg",alt:""},on:{click:t.activeMenu}})]),t._v(" "),i("ul",[t._l(t.wrapMenuList,function(e,s){return i("li",{key:s,class:t.onRoutes==e.router?"active":""},[i("p",{on:{click:function(e){return e.stopPropagation(),t.preMenu(e)}}},[e.isHref?[i("a",{attrs:{href:t.isPc?e.routers[0]:t.isWX?e.routers[1]:e.routers[2],target:"_blank"}},[t._v(t._s(e.name))])]:i("router-link",{attrs:{to:e.router,tag:"span"}},[t._v(t._s(e.name))])],2)])}),t._v(" "),i("li",{staticClass:"split"}),t._v(" "),i("li",{class:"/about"==t.onRoutes?"active":""},[i("p",{on:{click:function(e){return e.stopPropagation(),t.preMenu(e)}}},[i("router-link",{attrs:{to:"/about",tag:"span"}},[t._v("关于 HOLO")])],1)]),t._v(" "),i("li",{class:"/me"==t.onRoutes?"active":""},[i("p",{on:{click:function(e){return e.stopPropagation(),t.preMenu(e)}}},[i("router-link",{attrs:{to:"/me",tag:"span"}},[t._v("联系我们")])],1)])],2)]),t._v(" "),i("div",{staticClass:"wrap-menu-me"},[i("div",{staticClass:"wrap-menu-me-img-wrap"},[i("img",{staticClass:"margin-img-right",attrs:{src:"/static/image/icon/icn_wechat.svg",alt:""},on:{click:function(e){t.$root.$emit("setViewImage","/static/image/ercode/ercode.jpg",1)}}}),t._v(" "),i("a",{attrs:{href:"https://weibo.com/holoartstudio",target:"_blank"}},[i("img",{attrs:{src:"/static/image/icon/icn_weibo.svg",alt:""}})])]),t._v(" "),i("p",{staticClass:"wrap-menu-me-p"},[t._v("© 2018 杭州燃巴网络科技有限公司")])])]):t._e()])]],2)},staticRenderFns:[]};var o={created:function(){"Me"==this.$route.name&&(this.isShow=!1),this.isPc=IsPC()},data:function(){return{isPc:!1,isReady:!0,isShow:!0,list:[{item:"微信公众号",src:"/static/image/ercode/ercode.jpg"},{item:"客服微信",src:"/static/image/ercode/customer-service.jpg"},{item:"商务合作 | 微信",src:"/static/image/ercode/wechat.jpg"}]}},methods:{},watch:{$route:function(t,e){"Me"==t.name?this.isShow=!1:this.isShow=!0}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isReady&&t.isShow?i("div",{staticClass:"footer-layout"},[i("div",{staticClass:"footer-box"},[t._m(0),t._v(" "),t.isPc?i("div",{staticClass:"f-icon"},t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"f-icon-item"},[i("p",[t._v(t._s(e.item))]),t._v(" "),i("div",[i("img",{attrs:{src:e.src,alt:""}})])])})):t._e(),t._v(" "),t.isPc?t._e():i("div",{staticClass:"wrap-me"},[i("p",{staticClass:"f-p-title"},[t._v("关注我们")]),t._v(" "),i("img",{staticClass:"margin-img-right",attrs:{src:"/static/image/icon/icn_wechat.svg",alt:""},on:{click:function(e){t.$root.$emit("setViewImage","/static/image/ercode/ercode.jpg",1)}}}),t._m(1)])])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"f-p-title"},[this._v("联系我们")]),this._v(" "),e("p",{staticClass:"f-p-msg"},[this._v("客服电话：17706420959")]),this._v(" "),e("p",{staticClass:"f-p-msg"},[this._v("商务合作：holo@holoartstudio.com")]),this._v(" "),e("p",{staticClass:"f-p-icp"},[this._v("© 2018 杭州燃巴网络科技有限公司 | 浙ICP备17057557号-1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://weibo.com/holoartstudio",target:"_blank"}},[e("img",{attrs:{src:"/static/image/icon/icn_weibo.svg",alt:""}})])}]};var c={created:function(){this.isPc=IsPC(),this.inShowHide()},mounted:function(){this.hideShow()},data:function(){return{isPc:!1,isShow:!1}},methods:{toTop:function(){window.backToTop(4)},hideShow:function(){var t=this;window.addEventListener("scroll",function(e){var i=document.body.scrollTop||document.documentElement.scrollTop;"Home"==t.$route.name&&(t.isShow=i>370)},!1)},inShowHide:function(){this.isShow=!1,"Home"!=this.$route.name&&(this.isShow=!0)}},watch:{$route:function(t,e){this.inShowHide()}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShow?i("div",{staticClass:"fix-er"},[t.isPc?i("ul",[i("li",[i("span",[t._v("微信客服")]),t._v(" "),i("div",{staticClass:"er-code-wrap"},[i("img",{attrs:{src:"/static/image/ercode/customer-service.jpg",alt:""}}),t._v(" "),i("span",[t._v("扫码咨询客服")])])]),t._v(" "),i("li",[i("span",[t._v("公众号")]),t._v(" "),i("div",{staticClass:"er-code-wrap"},[i("img",{attrs:{src:"/static/image/ercode/ercode.jpg",alt:""}}),t._v(" "),i("span",[t._v("关注公众号")])])]),t._v(" "),i("li",[i("span",[t._v("商务合作")]),t._v(" "),i("div",{staticClass:"er-code-wrap"},[i("img",{attrs:{src:"/static/image/ercode/wechat.jpg",alt:""}}),t._v(" "),i("span",[t._v("商务合作")])])]),t._v(" "),i("li",{staticClass:"back-top",on:{click:t.toTop}},[i("img",{attrs:{src:"/static/image/icon/icn_btt.svg",alt:""}})])]):t._e()]):t._e()},staticRenderFns:[]};var l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShowView?i("div",{staticClass:"view-image-wrap",style:t.isShowViewFade?"background-color: rgba(0,0,0,.8);":"background-color: rgba(0,0,0,0);"},[i("div",{staticClass:"view-image-cont-box"},[i("div",{staticClass:"view-image-box"},[i("div",{staticClass:"text-item"},[i("p",{staticClass:"title"},[t._v(t._s(t.typeMap[t.isType].title))]),t._v(" "),i("p",[t._v(t._s(t.typeMap[t.isType].msg))])]),t._v(" "),i("div",{staticClass:"img-item"},[i("img",{attrs:{src:t.viewSrc,alt:""}})])]),t._v(" "),i("div",{staticClass:"view-image-menu"},[i("img",{attrs:{src:"/static/image/icon/icn_close.svg",alt:""},on:{click:t.closeView}})])])]):t._e()},staticRenderFns:[]};var p={name:"app",created:function(){this.isPc=IsPC()},components:{vHeader:i("VU/8")(a,n,!1,function(t){i("+aDP")},"data-v-bd13cd9e",null).exports,vFooter:i("VU/8")(o,r,!1,function(t){i("owfj")},null,null).exports,vErcode:i("VU/8")(c,u,!1,function(t){i("bp+X")},"data-v-647346fa",null).exports,vImage:i("VU/8")({created:function(){var t=this;this.$root.$on("setViewImage",function(e,i){t.openViewImage(e,i)})},data:function(){return{isShowView:!1,isShowViewFade:!1,viewSrc:"",isType:"",typeMap:{1:{title:"扫码关注公众号",msg:"HOLO艺术给养空间"},2:{title:"扫码添加客服微信",msg:"holo_creative"},3:{title:"扫码添加微信",msg:"leyulue"}}}},methods:{closeView:function(){this.isShowView=!1,this.isShowViewFade=!1,this.viewSrc="",this.isType=""},openViewImage:function(t,e){this.viewSrc=t,this.isShowView=!0,this.isShowViewFade=!0,this.isType=e}}},l,!1,function(t){i("BTO4")},"data-v-5afb1141",null).exports}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"layout-box"},[e("v-header"),this._v(" "),e("transition",{attrs:{name:"move",mode:"out-in"}},[e("div",{staticClass:"content-box-wrap"},[e("router-view")],1)]),this._v(" "),e("v-footer")],1),this._v(" "),this.isPc?[e("v-ercode")]:this._e(),this._v(" "),e("v-image")],2)},staticRenderFns:[]};var m=i("VU/8")(p,v,!1,function(t){i("s71t")},null,null).exports,h=i("/ocq");s.a.use(h.a);var d=new h.a({routes:[{path:"/",name:"Home",component:function(t){return Promise.all([i.e(0),i.e(1)]).then(function(){var e=[i("wqTG")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/part/:name",name:"Part",component:function(t){return Promise.all([i.e(0),i.e(3)]).then(function(){var e=[i("YwAY")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/painting",name:"Painting",component:function(t){return Promise.all([i.e(0),i.e(2)]).then(function(){var e=[i("zbyf")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/about",name:"About",component:function(t){return i.e(5).then(function(){var e=[i("DbT+")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/me",name:"Me",component:function(t){return i.e(4).then(function(){var e=[i("ZZtN")];t.apply(null,e)}.bind(this)).catch(i.oe)}}]});d.afterEach(function(t,e){e.name&&window.backToTop(2)});var _=d,w=i("cTzj"),f=i.n(w);s.a.use(f.a),s.a.use(f.a,{preLoad:1.3,attempt:1}),s.a.config.productionTip=!1,new s.a({el:"#app",router:_,template:"<App/>",components:{App:m}})},"bp+X":function(t,e){},mNlw:function(t,e){window.requestAnimationFrame||(requestAnimationFrame=function(t){setTimeout(t,17)});window.backToTop=function(t){var e=document.body.scrollTop?document.body:document.documentElement,i=e.scrollTop;!function s(){(i+=(0-i)/t)<1?e.scrollTop=0:(e.scrollTop=i,requestAnimationFrame(s))}()},window.IsPC=function(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],i=!0,s=0;s<e.length;s++)if(t.indexOf(e[s])>0){i=!1;break}return i},window.IsWX=function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}},owfj:function(t,e){},s71t:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.944d2bd2680702d62474.js.map