webpackJsonp([4],{GbGe:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("mNlw");var s=i("7+uW"),a={created:function(){this.isPc=IsPC()},computed:{onRoutes:function(){return this.$route.path}},data:function(){return{isPc:!1,menuList:[{name:"首页",router:"/"},{name:"艺术课程",routers:["https://shop260557515.taobao.com/shop/view_shop.htm?shop_id=260557515","http://shop2605575155184.t16.ltd/detail/563357599765"],isHref:!0},{name:"学员作品",router:"/part/artWork"},{name:"绘画工具",router:"/painting"}],wrapMenuActive:!1}},methods:{activeMenu:function(){this.wrapMenuActive=!this.wrapMenuActive},preMenu:function(){var t=this;setTimeout(function(){t.wrapMenuActive=!1},300)}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"h-fix"},[i("div",{staticClass:"header-box content-box"},[t._m(0),t._v(" "),i("div",{staticClass:"header-web-menu clear-float"},[i("ul",[t._l(t.menuList,function(e,s){return i("li",{key:s,class:t.onRoutes==e.router?"active":""},[e.isHref?[i("a",{attrs:{href:e.routers[0],target:"_blank"}},[t._v(t._s(e.name))])]:i("router-link",{attrs:{to:e.router,tag:"span"}},[t._v(t._s(e.name))])],2)}),t._v(" "),i("li",{staticClass:"split"},[t._v("|")]),t._v(" "),i("li",[t._v("关于HOLO")]),t._v(" "),i("li",{staticClass:"er-code"},[i("span",[t._v("联系我们")]),t._v(" "),t.isPc?i("div",{staticClass:"header-er"},[i("div",{staticClass:"header-er-item"},[i("img",{attrs:{src:"/static/image/ercode/customer-service.jpg",alt:""}}),t._v(" "),i("span",[t._v("扫码咨询客服")])]),t._v(" "),i("div",{staticClass:"header-er-item"},[i("img",{attrs:{src:"/static/image/ercode/wechat.jpg",alt:""}}),t._v(" "),i("span",[t._v("商务合作")])])]):t._e()])],2)]),t._v(" "),i("div",{staticClass:"header-wrap-menu"},[i("div",{on:{click:t.activeMenu}},[i("div",{staticClass:"menu-col"})])])]),t._v(" "),i("transition",{attrs:{name:"slide-fade"}},[t.wrapMenuActive?i("div",{staticClass:"wrap-menu",on:{click:t.activeMenu}},[i("div",{class:["menu-left"]},[i("ul",[t._l(t.menuList,function(e,s){return i("li",{key:s,class:t.onRoutes==e.router?"active":"",on:{click:function(e){e.stopPropagation(),t.preMenu(e)}}},[e.isHref?[i("a",{attrs:{href:e.routers[1],target:"_blank"}},[t._v(t._s(e.name))])]:i("router-link",{attrs:{to:e.router,tag:"span"}},[t._v(t._s(e.name))])],2)}),t._v(" "),i("li",{staticClass:"split"}),t._v(" "),i("li",[t._v("关于HOLO")]),t._v(" "),i("li",[t._v("联系我们")])],2)])]):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-icon-item"},[e("img",{attrs:{src:"/static/image/icon/icon.svg",alt:""}})])}]};var r={created:function(){this.isPc=IsPC()},data:function(){return{isPc:!1,isReady:!0,list:[{item:"微信公众号",src:"/static/image/ercode/ercode.jpg"},{item:"客服微信",src:"/static/image/ercode/customer-service.jpg"},{item:"商务合作 | 微信",src:"/static/image/ercode/wechat.jpg"}]}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isReady?i("div",{staticClass:"footer-layout"},[i("div",{staticClass:"footer-box"},[t._m(0),t._v(" "),t.isPc?i("div",{staticClass:"f-icon"},t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"f-icon-item"},[i("p",[t._v(t._s(e.item))]),t._v(" "),i("div",[i("img",{attrs:{src:e.src,alt:""}})])])})):t._e()])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"f-p-title"},[this._v("联系我们 | HOLO艺术给养空间")]),this._v(" "),e("p",{staticClass:"f-p-msg"},[this._v("客服电话：0571-87382643")]),this._v(" "),e("p",{staticClass:"f-p-msg"},[this._v("商务合作：holo@holoartstudio.com")]),this._v(" "),e("p",{staticClass:"f-p-icp"},[this._v("© 2018 杭州燃巴网络科技有限公司 浙ICP备17057557号-1")])])}]};var o={created:function(){this.isPc=IsPC()},data:function(){return{isPc:!1}},methods:{toTop:function(){window.backToTop(4)}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fix-er"},[this.isPc?e("ul",[e("li",[e("span",[this._v("微信客服")]),this._v(" "),e("div",{staticClass:"er-code-wrap"},[e("img",{attrs:{src:"/static/image/ercode/customer-service.jpg",alt:""}}),this._v(" "),e("span",[this._v("扫码咨询客服")])])]),this._v(" "),e("li",[e("span",[this._v("公众号")]),this._v(" "),e("div",{staticClass:"er-code-wrap"},[e("img",{attrs:{src:"/static/image/ercode/ercode.jpg",alt:""}}),this._v(" "),e("span",[this._v("关注公众号")])])]),this._v(" "),e("li",[e("span",[this._v("商务合作")]),this._v(" "),e("div",{staticClass:"er-code-wrap"},[e("img",{attrs:{src:"/static/image/ercode/wechat.jpg",alt:""}}),this._v(" "),e("span",[this._v("商务合作")])])]),this._v(" "),e("li",{staticClass:"back-top",on:{click:this.toTop}},[e("img",{attrs:{src:"/static/image/icon/btt.png",alt:""}})])]):this._e()])},staticRenderFns:[]};var u={name:"app",components:{vHeader:i("VU/8")(a,n,!1,function(t){i("nFh2")},null,null).exports,vFooter:i("VU/8")(r,c,!1,function(t){i("GbGe")},null,null).exports,vErcode:i("VU/8")(o,l,!1,function(t){i("wbU8")},"data-v-67a5ae56",null).exports}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"layout-box"},[e("v-header"),this._v(" "),e("transition",{attrs:{name:"move",mode:"out-in"}},[e("div",{staticClass:"content-box-wrap"},[e("router-view")],1)]),this._v(" "),e("v-footer")],1),this._v(" "),e("v-ercode")],1)},staticRenderFns:[]};var p=i("VU/8")(u,v,!1,function(t){i("yG3P")},null,null).exports,d=i("/ocq");s.a.use(d.a);var m=new d.a({routes:[{path:"/",name:"Home",component:function(t){return Promise.all([i.e(0),i.e(3)]).then(function(){var e=[i("wqTG")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/part/:name",name:"Part",component:function(t){return Promise.all([i.e(0),i.e(1)]).then(function(){var e=[i("YwAY")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/painting",name:"Painting",component:function(t){return Promise.all([i.e(0),i.e(2)]).then(function(){var e=[i("zbyf")];t.apply(null,e)}.bind(this)).catch(i.oe)}}]});m.afterEach(function(t,e){e.name&&window.backToTop(2)});var h=m,_=i("cTzj"),f=i.n(_);s.a.use(f.a),s.a.use(f.a,{preLoad:1.3,loading:"http://asset.ibanquan.com/image/571841535492c129d800105f/s_w330h330.png?v=11",attempt:1}),s.a.config.productionTip=!1,new s.a({el:"#app",router:h,template:"<App/>",components:{App:p}})},mNlw:function(t,e){window.requestAnimationFrame||(requestAnimationFrame=function(t){setTimeout(t,17)});window.backToTop=function(t){var e=document.body.scrollTop?document.body:document.documentElement,i=e.scrollTop;!function s(){(i+=(0-i)/t)<1?e.scrollTop=0:(e.scrollTop=i,requestAnimationFrame(s))}()},window.IsPC=function(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],i=!0,s=0;s<e.length;s++)if(t.indexOf(e[s])>0){i=!1;break}return i}},nFh2:function(t,e){},wbU8:function(t,e){},yG3P:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.12aa68254902f304fa4c.js.map