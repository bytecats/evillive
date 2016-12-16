webpackJsonp([7,5],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(44),o=a(r),i=n(29),s=a(i),u=n(133),d=a(u),c=n(108),l=a(c),f=n(57),p=a(f),m=n(58),g=a(m),v=n(56),x=a(v),h=n(104),_=a(h);o.default.use(s.default),o.default.use(d.default),o.default.use(x.default);var b=(new o.default,new d.default({history:!1,routes:p.default})),y=new s.default.Store(g.default);window.localStorage.userinfo&&y.dispatch("UPDATE_USERINFO",JSON.parse(window.localStorage.userinfo)),_.default.attach(document.body),b.beforeEach(function(e,t,n){y.commit("UPDATE_LOADING",!0),e.matched.some(function(e){return e.meta.bodyClass})?document.body.className=e.meta.bodyClass:document.body.className="",e.matched.some(function(e){return e.meta.requiresAuth})?y.state.userInfo.username||localStorage.userinfo?n():n({path:"/login",query:{redirect:e.fullPath}}):n()}),window.__lendApp__=new o.default({el:"#app",router:b,store:y,render:function(e){return e(l.default)}})},28:function(e,t,n){var a,r;n(102);var o=n(130);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,r._scopeId="data-v-6a6ebbde",e.exports=a},45:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(30),o=a(r),i=n(29),s=n(110),u=a(s);t.default={computed:(0,o.default)({},(0,i.mapGetters)({isLoading:"getLoading",message:"getMessage"})),mounted:function(){},components:{loading:u.default}}},47:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{show:Boolean,text:{type:String,default:"Loading"},position:{type:String,default:"top"}}}},49:function(e,t,n){(function(e){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=a(r),i=n(6),s=a(i),u=n(30),d=a(u),c=n(29),l=n(11),f=(a(l),n(28)),p=a(f),m=n(135);t.default={data:function(){return{homeData:{}}},computed:(0,d.default)({},(0,c.mapGetters)({userInfo:"getUserInfo"})),methods:{getContent:function(){var t=this;return(0,s.default)(o.default.mark(function n(){var a;return o.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(t.$appConfig.api.home+"&member_id="+t.userInfo.member_id);case 2:return a=n.sent,n.next=5,a.json();case 5:t.homeData=n.sent.datas,t.$store.commit("UPDATE_LOADING",!1);case 7:case"end":return n.stop()}},n,t)}))()}},mounted:function(){this.getContent()},components:{navBar:p.default,Swipe:m.Swipe,SwipeItem:m.SwipeItem}}}).call(t,n(10))},52:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),o=a(r);t.default={created:function(){document.body.className="gray-bg"},mounted:function(){this.$store.commit("UPDATE_LOADING",!1)},components:{navBar:o.default}}},53:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),o=a(r);t.default={data:function(){return{transitionName:"slide-left"}},components:{navBar:o.default}}},55:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={created:function(){document.body.className="gray-bg"},methods:{quitLogin:function(){console.log("quit"),this.$router.push({path:"/"}),localStorage.removeItem("userinfo"),this.$store.dispatch("UPDATE_USERINFO","")}},mounted:function(){this.$store.commit("UPDATE_LOADING",!1)}}},56:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={install:function(e){var t="http://zf.lbjet.com/";e.prototype.$appConfig={url:{homepage:"/contacts"},api:{home:t+"mobile/index.php?act=travel_index&op=index_now&dev=wx",getSmsCode:t+"mobile/index.php?act=login&op=sms&dev=wx",login:t+"mobile/index.php?act=login&op=index&dev=wx",areaList:t+"mobile/index.php?act=member_address_add&op=area_list&dev=wx",register:t+"mobile/index.php?act=login&op=register",forgetSms:t+"mobile/index.php?act=member_index&op=sms&dev=wx",forgetPwd:t+"mobile/index.php?act=member_index&op=forget_password&dev=wx"},tips:{serverError:"服务器异常",noData:"暂无数据",loadError:"加载失败",loading:"加载中..."},reg:{mainlandIdCard:{regex:/(^\d{15}$)|(^\d{17}([0-9]|X)$)/,alertText:"大陆身份证输入有误"},customerName:{regex:/^([\u4E00-\u9FA5]{2,7}|[a-zA-Z]+)$/,alertText:"姓名输入有误"},url:{regex:/^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i,alertText:"网址输入不正确"},qq:{regex:/^[1-9][0-9]{4,}$/,alertText:"QQ号码输入不正确（非零开头的四位以上的数字）"},telephone:{regex:/^(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/,alertText:"电话号码输入不正确"},mobile:{regex:/^1[3|4|5|6|7|8]\d{9}$/,alertText:"手机号码输入不正确"},mobileAndTel:{regex:/(^(\d{3,4})?\d{7,8})$|(1[3|4|5|6|7|8][0-9]{9})/,alertText:"电话或手机号码输入不正确"},zip:{regex:/^[1-9]\d{5}$/,alertText:"邮政编码输入不正确"},email:{regex:/^[a-zA-Z0-9_\.\-]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/,alertText:"邮箱地址输入不正确"},money:{regex:/^[0-9]+(.[0-9]{2})?$/,alertText:"金额格式输入不正确"},integer:{regex:/^\d+$/,alertText:"输入值必须是正整数"},double:{regex:/^[0-9]+(.[0-9]+)?$/,alertText:"输入值必须是数值"},digit:{regex:/^[0-9]+$/,alertText:"只能输入数字"},letter:{regex:/^[a-zA-Z]+$/,alertText:"只能输入英文"},chinese:{regex:/^[\u0391-\uFFE5]+$/,alertText:"只能输入中文"},noSpecialCaracters:{regex:/^[0-9a-zA-Z]+$/,alertText:"不能输入字母和数字之外的特殊字符"},CnEnNum:{regex:/^[\u4e00-\u9fa5_0-9a-zA-Z]+$/,alertText:"只能是中英文与数字的组合"}},verify:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n&&""===e?"输入不能为空":"string"==typeof e&&this.reg[t].regex.test(e)?"":this.reg[t].alertText}}}}},57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(112),r=n(116),o=function(e){return n.e(1,function(t){var n=[t(113)];e.apply(null,n)}.bind(this))},i=function(e){return n.e(0,function(t){var n=[t(115)];e.apply(null,n)}.bind(this))},s=function(e){return n.e(3,function(t){var n=[t(111)];e.apply(null,n)}.bind(this))},u=n(117),d=n(119),c=function(e){return n.e(2,function(t){var n=[t(118)];e.apply(null,n)}.bind(this))},l=function(e){return n.e(4,function(t){var n=[t(114)];e.apply(null,n)}.bind(this))},f="",p=[{path:"",redirect:{name:"home"}},{path:"/",component:a,name:"home"},{path:"/trip",component:r,name:"trip"},{path:"/login",component:o,name:"login",meta:{bodyClass:"reg-bg"}},{path:"/register",component:i,name:"register",meta:{bodyClass:"reg-bg"}},{path:"/forgetpwd",component:s,name:"forgetpwd",meta:{bodyClass:"reg-bg"}},{path:"/ucenter",component:u,meta:{requiresAuth:!0},children:[{path:"",component:d,name:"userhome"},{path:"setting",component:c,name:"setting"}]}].map(function(e){return e.path=f+e.path,e});p.push({path:"*",component:l,name:"notfound"}),t.default=p},58:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={state:{message:"加载中...",isLoading:!1,userInfo:{}},mutations:{UPDATE_LOADING:function(e,t){e.isLoading=t},UPDATE_MESSAGE:function(e,t){e.message=t},UPDATE_USERINFO:function(e,t){e.userInfo=t}},actions:{UPDATE_LOADING:function(e,t){var n=e.commit;n("UPDATE_LOADING",t)},UPDATE_MESSAGE:function(e,t){var n=e.commit;n("UPDATE_MESSAGE",t)},UPDATE_USERINFO:function(e,t){var n=e.commit;n("UPDATE_USERINFO",t)}},getters:{getLoading:function(e){return e.isLoading},getMessage:function(e){return e.message},getUserInfo:function(e){return e.userInfo}}}},98:function(e,t){},100:function(e,t){},101:function(e,t){},102:function(e,t){},103:function(e,t){},108:function(e,t,n){var a,r;n(100),a=n(45);var o=n(127);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=a},110:function(e,t,n){var a,r;n(98),a=n(47);var o=n(120);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,r._scopeId="data-v-0632436b",e.exports=a},112:function(e,t,n){var a,r;n(101),a=n(49);var o=n(128);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=a},116:function(e,t,n){var a,r;a=n(52);var o=n(129);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=a},117:function(e,t,n){var a,r;a=n(53);var o=n(132);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=a},119:function(e,t,n){var a,r;n(103),a=n(55);var o=n(131);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=a},120:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"weui_loading_toast",class:{loading_top:"top"==e.position,loading_bottom:"bottom"==e.position,loading_center:"center"==e.position}},[t("div",{staticClass:"weui_mask_transparent"})," ",t("div",{staticClass:"weui_toast"},[t("div",{staticClass:"weui_loading"})," ",t("p",{staticClass:"weui_toast_content"},[e._s(e.text),e._t("default")])])])},staticRenderFns:[]}},127:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{attrs:{id:"app"}},[t("loading",{attrs:{show:e.isLoading,text:e.message}})," ",t("router-view")])},staticRenderFns:[]}},128:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",[t("swipe",{staticClass:"swiper_home",attrs:{speed:600}},[e._l(e.homeData.topimage_ary,function(e){return t("swipe-item",{staticClass:"slide1"},[t("img",{attrs:{src:e,alt:""}})])})])," ",t("div",{staticClass:"inner bar-title dpr-bottom"},[t("h1",[e._s(e.homeData.user_name)])," ",t("p",["即将开启您的旅程，体验家的感觉"])])," ",t("h1",["home"])," ",t("router-link",{attrs:{to:{name:"trip"}}},["to list"])," ",t("div",{staticClass:"demo px-t"},["\n      asd  \n    "])," ",t("div",{staticClass:"demo px-b"},["\n      asd  \n    "])," ",t("br")," ",t("div",{staticClass:"demo px-tb"},["\n      asd  \n    "])," ",t("div",{staticClass:"demo px-l"},["\n      asd  \n    "])," ",t("div",{staticClass:"demo px-r"},["\n      asd  \n    "])," ",t("div",{staticClass:"demos px-all",staticStyle:{margin:"20px"}},["\n      sd\n    "])," ",e._m(0)," ",t("nav-bar")])},staticRenderFns:[function(){var e=this,t=e.$createElement;return t("div",{staticClass:"flexbox"},[t("div",{staticClass:"flex"},["1"])," ",t("div",{staticClass:"flex"},["2"])])}]}},129:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",[t("h1",["trip"])," ",t("nav-bar")])},staticRenderFns:[]}},130:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{staticClass:"navbar"},[t("div",{staticClass:"flex-box"},[t("router-link",{staticClass:"flex",attrs:{tag:"div",to:{name:"home"},exact:!0,"active-class":"active"}},[t("i",{staticClass:"icon-home"}),"首页"])," ",t("router-link",{staticClass:"flex",attrs:{tag:"div",to:{name:"trip"},exact:!0,"active-class":"active"}},[t("i",{staticClass:"icon-map"}),"旅程"])," ",t("router-link",{staticClass:"flex",attrs:{tag:"div",to:{name:"userhome"},exact:!0,"active-class":"active"}},[t("i",{staticClass:"icon-user"}),"个人"])])])},staticRenderFns:[]}},131:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{staticClass:"inner"},[t("h1",["userHome"])," ",t("router-link",{attrs:{to:{name:"setting"}}},["to setting"])," ",t("span",{staticClass:"reg-btn reg-btn-red",on:{click:e.quitLogin}},["退出登录"])," ",t("div",{staticClass:"ll"},["\n\t\ta\n\t"])])},staticRenderFns:[]}},132:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",[t("transition",{attrs:{name:e.transitionName}},[t("router-view",{staticClass:"child-view"})])," ",t("nav-bar")])},staticRenderFns:[]}}});
//# sourceMappingURL=app.55d6ff398fb69ea9c063.js.map