webpackJsonp([11,9],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=n(79),r=o(a),i=n(83),s=o(i),u=n(146),d=o(u),l=n(122),c=o(l),p=n(97),f=o(p),m=n(98),g=o(m),x=n(96),h=o(x),_=n(121),b=o(_);r.default.use(s.default),r.default.use(d.default),r.default.use(h.default);var v=(new r.default,new d.default({history:!1,routes:f.default}));b.default.attach(document.body);var y=new s.default.Store(g.default);window.localStorage.userinfo&&y.dispatch("UPDATE_USERINFO",JSON.parse(window.localStorage.userinfo)),v.beforeEach(function(e,t,n){y.commit("UPDATE_LOADING",!1),console.log(e,t,n),e.matched.some(function(e){return e.meta.bodyClass})?document.body.className=e.meta.bodyClass:document.body.className="",e.matched.some(function(e){return e.meta.requiresAuth})?y.state.userInfo.username?n():n({path:"/login",query:{redirect:e.fullPath}}):n()}),window.__lendApp__=new r.default({el:"#app",router:v,store:y,render:function(e){return e(c.default)}})},86:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(84),r=o(a),i=n(83),s=n(124),u=o(s);t.default={computed:(0,r.default)({},(0,i.mapGetters)({isLoading:"getLoading",message:"getMessage"})),mounted:function(){},components:{loading:u.default}}},88:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{show:Boolean,text:{type:String,default:"Loading"},position:{type:String,default:"top"}}}},96:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={install:function(e){var t="http://zf.lbjet.com/";e.prototype.$appConfig={url:{homepage:"/contacts"},api:{home:t+"mobile/index.php?act=travel_index&op=index_now&dev=wx",getSmsCode:t+"mobile/index.php?act=login&op=sms&dev=wx",login:t+"mobile/index.php?act=login&op=index&dev=wx",areaList:t+"mobile/index.php?act=member_address_add&op=area_list&dev=wx",register:t+"mobile/index.php?act=login&op=register",forgetSms:t+"mobile/index.php?act=member_index&op=sms&dev=wx",forgetPwd:t+"mobile/index.php?act=member_index&op=forget_password&dev=wx"},tips:{serverError:"服务器异常",noData:"暂无数据",loadError:"加载失败",loading:"加载中..."},reg:{mainlandIdCard:{regex:/(^\d{15}$)|(^\d{17}([0-9]|X)$)/,alertText:"大陆身份证输入有误"},customerName:{regex:/^([\u4E00-\u9FA5]{2,7}|[a-zA-Z]+)$/,alertText:"姓名输入有误"},url:{regex:/^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i,alertText:"网址输入不正确"},qq:{regex:/^[1-9][0-9]{4,}$/,alertText:"QQ号码输入不正确（非零开头的四位以上的数字）"},telephone:{regex:/^(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/,alertText:"电话号码输入不正确"},mobile:{regex:/^1[3|5|7|8]\d{9}$/,alertText:"手机号码输入不正确"},mobileAndTel:{regex:/(^(\d{3,4})?\d{7,8})$|(1[3|5|7|8][0-9]{9})/,alertText:"电话或手机号码输入不正确"},zip:{regex:/^[1-9]\d{5}$/,alertText:"邮政编码输入不正确"},email:{regex:/^[a-zA-Z0-9_\.\-]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/,alertText:"邮箱地址输入不正确"},money:{regex:/^[0-9]+(.[0-9]{2})?$/,alertText:"金额格式输入不正确"},integer:{regex:/^\d+$/,alertText:"输入值必须是正整数"},double:{regex:/^[0-9]+(.[0-9]+)?$/,alertText:"输入值必须是数值"},digit:{regex:/^[0-9]+$/,alertText:"只能输入数字"},letter:{regex:/^[a-zA-Z]+$/,alertText:"只能输入英文"},chinese:{regex:/^[\u0391-\uFFE5]+$/,alertText:"只能输入中文"},noSpecialCaracters:{regex:/^[0-9a-zA-Z]+$/,alertText:"不能输入字母和数字之外的特殊字符"},CnEnNum:{regex:/^[\u4e00-\u9fa5_0-9a-zA-Z]+$/,alertText:"只能是中英文与数字的组合"}},verify:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n&&""===e?"输入不能为空":"string"==typeof e&&this.reg[t].regex.test(e)?"":this.reg[t].alertText}}}}},97:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return n.e(0,function(t){var n=[t(126)];e.apply(null,n)}.bind(this))},a=function(e){return n.e(5,function(t){var n=[t(130)];e.apply(null,n)}.bind(this))},r=function(e){return n.e(2,function(t){var n=[t(127)];e.apply(null,n)}.bind(this))},i=function(e){return n.e(1,function(t){var n=[t(129)];e.apply(null,n)}.bind(this))},s=function(e){return n.e(3,function(t){var n=[t(125)];e.apply(null,n)}.bind(this))},u=function(e){return n.e(4,function(t){var n=[t(131)];e.apply(null,n)}.bind(this))},d=function(e){return n.e(6,function(t){var n=[t(133)];e.apply(null,n)}.bind(this))},l=function(e){return n.e(7,function(t){var n=[t(132)];e.apply(null,n)}.bind(this))},c=function(e){return n.e(8,function(t){var n=[t(128)];e.apply(null,n)}.bind(this))},p="",f=[{path:"",redirect:{name:"home"}},{path:"/",component:o,name:"home"},{path:"/trip",component:a,name:"trip"},{path:"/login",component:r,name:"login",meta:{bodyClass:"reg-bg"}},{path:"/register",component:i,name:"register",meta:{bodyClass:"reg-bg"}},{path:"/forgetpwd",component:s,name:"forgetpwd",meta:{bodyClass:"reg-bg"}},{path:"/ucenter",component:u,meta:{requiresAuth:!0},children:[{path:"",component:d,name:"userhome",meta:{bodyClass:"gray-bg"}},{path:"setting",component:l,name:"setting",meta:{bodyClass:"gray-bg"}}]}].map(function(e){return e.path=p+e.path,e});f.push({path:"*",component:c,name:"notfound"}),t.default=f},98:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={state:{message:"加载中...",isLoading:!1,userInfo:{}},mutations:{UPDATE_LOADING:function(e,t){e.isLoading=t},UPDATE_MESSAGE:function(e,t){e.message=t},UPDATE_USERINFO:function(e,t){e.userInfo=t}},actions:{UPDATE_LOADING:function(e,t){var n=e.commit;n("UPDATE_LOADING",t)},UPDATE_MESSAGE:function(e,t){var n=e.commit;n("UPDATE_MESSAGE",t)},UPDATE_USERINFO:function(e,t){var n=e.commit;n("UPDATE_USERINFO",t)}},getters:{getLoading:function(e){return e.isLoading},getMessage:function(e){return e.message},getUserInfo:function(e){return e.userInfo}}}},115:function(e,t){},119:function(e,t){},122:function(e,t,n){var o,a;n(119),o=n(86);var r=n(141);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},124:function(e,t,n){var o,a;n(115),o=n(88);var r=n(134);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},134:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"weui_loading_toast",class:{loading_top:"top"==e.position,loading_bottom:"bottom"==e.position,loading_center:"center"==e.position}},[t("div",{staticClass:"weui_mask_transparent"})," ",t("div",{staticClass:"weui_toast"},[t("div",{staticClass:"weui_loading"})," ",t("p",{staticClass:"weui_toast_content"},[e._s(e.text),e._t("default")])])])},staticRenderFns:[]}},141:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{attrs:{id:"app"}},[t("loading",{attrs:{show:e.isLoading,text:e.message}})," ",t("router-view")])},staticRenderFns:[]}},148:function(e,t){}});
//# sourceMappingURL=app.cd508e9b03d3b2afd069.js.map