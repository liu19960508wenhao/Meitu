webpackJsonp([5],{"4nB1":function(t,s){},m8vp:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("mtWM"),i=a.n(e),r={data:function(){return{username:"",nickname:"",pass:"",repass:"",gender:"",payway:""}},methods:{reg:function(){var t=this;this.pass==this.repass?i()({url:"http://localhost:3000/register",params:{name:this.username,password:this.pass,nickname:this.nickname,gender:this.gender,payway:this.payway}}).then(function(s){console.log(s),t.$router.push("/login")}):confirm("密码不一致")}}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("div",{staticClass:"register-box"},[a("div",{staticClass:"form-box"},[a("div",{staticClass:"row row-input clearfix"},[t._m(0),t._v(" "),a("div",{staticClass:"row-r"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input_box",attrs:{placeholder:"输入手机号/邮箱/昵称"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row row-input clearfix"},[t._m(1),t._v(" "),a("div",{staticClass:"row-r"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],staticClass:"input_box",attrs:{placeholder:"输入密码"},domProps:{value:t.pass},on:{input:function(s){s.target.composing||(t.pass=s.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row row-input clearfix"},[t._m(2),t._v(" "),a("div",{staticClass:"row-r"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.repass,expression:"repass"}],staticClass:"input_box",attrs:{placeholder:"再次输入密码"},domProps:{value:t.repass},on:{input:function(s){s.target.composing||(t.repass=s.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row row-input clearfix"},[t._m(3),t._v(" "),a("div",{staticClass:"row-r"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],staticClass:"input_box",attrs:{placeholder:"输入昵称"},domProps:{value:t.nickname},on:{input:function(s){s.target.composing||(t.nickname=s.target.value)}}})])]),a("div",{staticClass:"row row-input clearfix"},[t._m(4),t._v(" "),a("div",{staticClass:"row-r"},[a("span",[t._v("性别")]),t._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],staticClass:"btn-radio",attrs:{type:"radio",name:"radio1",id:"nan",value:"男",checked:""},domProps:{checked:t._q(t.gender,"男")},on:{change:function(s){t.gender="男"}}}),a("label",{attrs:{for:"nan"}},[t._v("男")])]),t._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],staticClass:"btn-radio",attrs:{type:"radio",name:"radio1",id:"nv",value:"女"},domProps:{checked:t._q(t.gender,"女")},on:{change:function(s){t.gender="女"}}}),a("label",{attrs:{for:"nv"}},[t._v("女")])])])]),a("div",{staticClass:"row row-input clearfix"},[t._m(5),t._v(" "),a("div",{staticClass:"row-r"},[a("span",[t._v("支付方式")]),t._v(" "),a("label",{staticStyle:{color:"#24a82e"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.payway,expression:"payway"}],staticClass:"btn-radio",attrs:{id:"weixin",value:"微信",type:"radio",name:"radio2",checked:""},domProps:{checked:t._q(t.payway,"微信")},on:{change:function(s){t.payway="微信"}}}),a("label",{attrs:{for:"weixin"}},[t._v("微信")])]),t._v(" "),a("label",{staticStyle:{color:"#2d95de"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.payway,expression:"payway"}],staticClass:"btn-radio",attrs:{id:"card",value:"银行卡",type:"radio",name:"radio2"},domProps:{checked:t._q(t.payway,"银行卡")},on:{change:function(s){t.payway="银行卡"}}}),a("label",{attrs:{for:"card"}},[t._v("银行卡")])])])]),t._v(" "),t._m(6),t._v(" "),a("div",{staticClass:"row row-btn"},[a("a",{staticClass:"green-btn",on:{click:t.reg}},[t._v("确定")])])])]),t._v(" "),t._m(7)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row-l fl"},[s("i",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row-l fl"},[s("i",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row-l fl"},[s("i",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row-l fl"},[s("i",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row-l fl"},[s("i",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row-l fl"},[s("i",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row row-txt"},[s("p",[s("input",{staticClass:"checkbox",attrs:{type:"checkbox",name:"checkbox"}}),this._v("已阅读并同意"),s("a",{attrs:{href:"user_xieyi.html"}},[this._v("《微风向用户协议》")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"register-table"},[a("table",[a("tr",[a("th",[t._v("非会员/会员权限对比")]),a("th",[t._v("非会员")]),a("th",[t._v("会员")])]),t._v(" "),a("tr",[a("td",{staticClass:"td-1"},[t._v("无限使用"),a("span",[t._v("贴贴")]),t._v("功能")]),t._v(" "),a("td",{staticClass:"td-2"},[t._v("仅限浏览")]),t._v(" "),a("td",{staticClass:"td-3"},[t._v("无限使用")])]),t._v(" "),a("tr",[a("td",{staticClass:"td-1"},[t._v("无限使用"),a("span",[t._v("美拍")]),t._v("功能")]),t._v(" "),a("td",{staticClass:"td-2"},[t._v("仅限浏览")]),t._v(" "),a("td",{staticClass:"td-3"},[t._v("无限使用")])]),t._v(" "),a("tr",[a("td",{staticClass:"td-1"},[t._v("无限使用"),a("span",[t._v("美言")]),t._v("功能")]),t._v(" "),a("td",{staticClass:"td-2"},[t._v("仅限浏览")]),t._v(" "),a("td",{staticClass:"td-3"},[t._v("无限使用")])]),t._v(" "),a("tr",[a("td",{staticClass:"td-1"},[t._v("无限使用"),a("span",[t._v("美视")]),t._v("功能")]),t._v(" "),a("td",{staticClass:"td-2"},[t._v("仅限浏览购买")]),t._v(" "),a("td",{staticClass:"td-3"},[t._v("无限使用")])]),t._v(" "),a("tr",[a("td",{staticClass:"td-1"},[t._v("无限使用"),a("span",[t._v("美视")]),t._v("功能")]),t._v(" "),a("td",{staticClass:"td-2"},[t._v("仅限浏览购买")]),t._v(" "),a("td",{staticClass:"td-3"},[t._v("无限使用")])]),t._v(" "),a("tr",[a("td",{staticClass:"td-1"},[t._v("一键生成"),a("span",[t._v("推广")]),t._v("二维码")]),t._v(" "),a("td",{staticClass:"td-2"},[t._v("×")]),t._v(" "),a("td",{staticClass:"td-3"},[t._v("无限使用")])]),t._v(" "),a("tr",[a("td",{staticClass:"td-1"},[t._v("分销系统帮你"),a("span",[t._v("赚钱")])]),t._v(" "),a("td",{staticClass:"td-2"},[t._v("×")]),t._v(" "),a("td",{staticClass:"td-3"},[t._v("无限使用")])]),t._v(" "),a("tr",[a("td",{staticClass:"td-1"},[t._v("社区"),a("span",[t._v("促销奖励")]),t._v("活动")]),t._v(" "),a("td",{staticClass:"td-2"},[t._v("×")]),t._v(" "),a("td",{staticClass:"td-3"},[t._v("√")])]),t._v(" "),a("tr",[a("td",{staticClass:"td-1"},[a("span",[t._v("会费")])]),t._v(" "),a("td",{staticClass:"td-2"},[t._v("免费")]),t._v(" "),a("td",{staticClass:"td-3"},[t._v("50元一次性")])])])])}]};var l=a("VU/8")(r,n,!1,function(t){a("4nB1")},null,null);s.default=l.exports}});
//# sourceMappingURL=5.97d38f84c8030df88cdf.js.map