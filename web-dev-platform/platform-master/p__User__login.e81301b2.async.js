(self.webpackChunkplatform_master=self.webpackChunkplatform_master||[]).push([[673],{88569:function(g){g.exports={main:"main___3ipCw",icon:"icon___P3cg6",other:"other___3uIfA",register:"register___3Mz8E",prefixIcon:"prefixIcon___Tvd5H"}},54512:function(g,f,e){"use strict";e.r(f);var w=e(69220),B=e(83327),J=e(88369),I=e(26717),C=e(31674),Q=e(65750),u=e(12963),M=e(33593),A=e(84838),X=e(85443),R=e(55746),K=e(9754),P=e.n(K),U=e(25567),b=e(81914),W=e(83798),y=e(45051),Z=e(15500),x=e(88991),N=e(43702),a=e(2784),F=e(53708),c=e(29801),S=e(78030),j=e(76558),p=e(57487),z=e(33756),G=e(88569),t=e.n(G),v=function(_){var l=_.content;return a.createElement(R.Z,{style:{marginBottom:24},message:l,type:"error",showIcon:!0})},$=function(_){var l=_.userLogin,D=l===void 0?{}:l,E=_.submitting,O=D.status,h=D.type,V=(0,a.useState)("account"),L=(0,A.Z)(V,2),d=L[0],H=L[1],n=(0,p.YB)(),Y=function(s){var r=_.dispatch;r({type:"login/login",payload:(0,M.Z)((0,M.Z)({},s),{},{type:d})})};return a.createElement("div",{className:t().main},a.createElement(F.ZP,{initialValues:{autoLogin:!0},submitter:{render:function(s,r){return r.pop()},submitButtonProps:{loading:E,size:"large",style:{width:"100%"}}},onFinish:function(s){return Y(s),Promise.resolve()}},a.createElement(u.Z,{activeKey:d,onChange:H},a.createElement(u.Z.TabPane,{key:"account",tab:n.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"Account password login"})}),a.createElement(u.Z.TabPane,{key:"mobile",tab:n.formatMessage({id:"pages.login.phoneLogin.tab",defaultMessage:"Mobile phone number login"})})),O==="error"&&h==="account"&&!E&&a.createElement(v,{content:n.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"Incorrect account or password\uFF08admin/ant.design)"})}),d==="account"&&a.createElement(a.Fragment,null,a.createElement(c.Z,{name:"userName",fieldProps:{size:"large",prefix:a.createElement(U.Z,{className:t().prefixIcon})},placeholder:n.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"Username: admin or user"}),rules:[{required:!0,message:"\u7528\u6237\u540D\u662F\u5FC5\u586B\u9879\uFF01"}]}),a.createElement(c.Z.Password,{name:"password",fieldProps:{size:"large",prefix:a.createElement(b.Z,{className:t().prefixIcon})},placeholder:n.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"Password: ant.design"}),rules:[{required:!0,message:"\u5BC6\u7801\u662F\u5FC5\u586B\u9879\uFF01"}]})),O==="error"&&h==="mobile"&&!E&&a.createElement(v,{content:"Verification code error"}),d==="mobile"&&a.createElement(a.Fragment,null,a.createElement(c.Z,{fieldProps:{size:"large",prefix:a.createElement(W.Z,{className:t().prefixIcon})},name:"mobile",placeholder:n.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"Phone number"}),rules:[{required:!0,message:"\u624B\u673A\u53F7\u662F\u5FC5\u586B\u9879\uFF01"},{pattern:/^1\d{10}$/,message:"\u4E0D\u5408\u6CD5\u7684\u624B\u673A\u53F7\uFF01"}]}),a.createElement(S.Z,{fieldProps:{size:"large",prefix:a.createElement(y.Z,{className:t().prefixIcon})},captchaProps:{size:"large"},placeholder:n.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"Please enter verification code"}),captchaTextRender:function(s,r){return s?"".concat(r," ").concat(n.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"Get verification code"})):n.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"Get verification code"})},name:"captcha",rules:[{required:!0,message:"\u9A8C\u8BC1\u7801\u662F\u5FC5\u586B\u9879\uFF01"}],onGetCaptcha:function(){var i=(0,C.Z)(P().mark(function s(r){var T;return P().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,z.m)(r);case 2:if(T=o.sent,T!==!1){o.next=5;break}return o.abrupt("return");case 5:I.default.success("Get the verification code successfully! The verification code is: 1234");case 6:case"end":return o.stop()}},s)}));return function(s){return i.apply(this,arguments)}}()})),a.createElement("div",{style:{marginBottom:24}},a.createElement(j.Z,{noStyle:!0,name:"autoLogin"},"\u81EA\u52A8\u767B\u5F55"),a.createElement("a",{style:{float:"right"}},"\u5FD8\u8BB0\u5BC6\u7801 ?"))),a.createElement(B.Z,{className:t().other},"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F :",a.createElement(Z.Z,{className:t().icon}),a.createElement(x.Z,{className:t().icon}),a.createElement(N.Z,{className:t().icon})))};f.default=(0,p.$j)(function(m){var _=m.login,l=m.loading;return{userLogin:_,submitting:l.effects["login/login"]}})($)}}]);
