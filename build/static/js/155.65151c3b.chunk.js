(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[155],{1045:function(e,r,t){"use strict";t.r(r);var n=t(1),a=t(627),c=t.n(a),s=t(628),i=t(2),u=t(623),o=t(1157),d=t(880),p=t(906),l=t(881),b=t(636),f=t(639),j=t(37),m=t(22),O=t(630),v=t(688),h=t(701),w=t(3);r.default=Object(j.b)((function(e){return{submitting:e.auth.submitting,isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{resetPassword:function(r){return e(Object(v.h)(r))},forgotPasswordVerify:function(r){return e(Object(v.e)(r))}}}))((function(e){var r,t,a=e.submitting,j=e.resetPassword,v=e.forgotPasswordVerify,q=Object(m.useHistory)(),x=Object(m.useLocation)(),g=x.pathname.split("/")[2],y=x.pathname.split("token=")[1],k=Object(f.e)({resolver:h.d,defaultValues:{password:"",confirmPassword:""}}),P=k.register,S=k.handleSubmit,C=k.formState.errors,N=Object(i.useCallback)(function(){var e=Object(s.a)(c.a.mark((function e(r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(r);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[v]);Object(i.useEffect)((function(){N({email:g,token:y})}),[N,g,y]);var B=function(){var e=Object(s.a)(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={email:g,password:null===r||void 0===r?void 0:r.password},e.next=3,j(t);case 3:200===e.sent.status&&q.push("/login");case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{id:"page--reset-password",className:"h-100",children:Object(w.jsx)("div",{className:"w-100 h-100 page--wrapper",children:Object(w.jsx)("div",{className:"d-flex flex-column align-items-start justify-content-center py-5 px-4 reset-password_form",children:Object(w.jsxs)(u.a,{border:"light",className:"w-100 mx-auto px-4 pt-3 pb-4 my-5",style:{maxWidth:500},children:[Object(w.jsx)(u.a.Header,{children:"Reset Password"}),Object(w.jsx)(u.a.Body,{children:Object(w.jsx)(o.a,{onSubmit:S(B),children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(p.a,{xs:12,children:Object(w.jsx)(O.a,Object(n.a)(Object(n.a)({id:"password",type:"password",name:"password",label:"Password"},P("password")),{},{error:null===(r=C.password)||void 0===r?void 0:r.message}))}),Object(w.jsx)(p.a,{xs:12,children:Object(w.jsx)(O.a,Object(n.a)(Object(n.a)({id:"confirmPassword",type:"password",name:"confirmPassword",label:"Confirm Password"},P("confirmPassword")),{},{error:null===(t=C.confirmPassword)||void 0===t?void 0:t.message}))}),Object(w.jsx)(p.a,{xs:12,className:"pt-4 position-relative",children:Object(w.jsxs)(l.a,{type:"submit",variant:"primary",size:"lg",className:"w-100",disabled:a,children:[!a&&Object(w.jsx)("span",{children:"Submit"}),a&&Object(w.jsx)(b.a,{animation:"border"})]})})]})})})]})})})})}))},629:function(e,r,t){"use strict";var n=t(1),a=(t(2),t(881)),c=t(3),s=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t={size:22};return"lg"===r?t.size=32:"sm"===r&&(t.size=18),Object(c.jsx)(e.type,Object(n.a)(Object(n.a)({},e.props),t))},i=function(e){var r=e.variant,t=e.className,n=e.onClick,i=e.size,u=e.isLoading,o=e.disabled,d=e.children,p=e.icon;return Object(c.jsx)(a.a,{variant:r,className:"btn-icon ".concat(i?"btn-icon-".concat(i):""," ").concat(u?"btn-icon-loading":""," ").concat(t),onClick:n,size:i,disabled:u||o,children:Object(c.jsxs)("span",{children:[s(p,i),d&&Object(c.jsx)("span",{children:d})]})})};i.defaultProps={variant:"default",className:"",size:"",onClick:function(){return null},isLoading:!1,disabled:!1,icon:null},r.a=i},630:function(e,r,t){"use strict";var n=t(1),a=t(13),c=t(12),s=t(2),i=t.n(s),u=t(756),o=t(73),d=t(209),p=t(629),l=t(3),b=["className","onChange","onBlur","label","id","error","isClearable","hint","type"],f=i.a.forwardRef((function(e,r){var t=e.className,i=e.onChange,f=e.onBlur,j=e.label,m=e.id,O=e.error,v=e.isClearable,h=e.hint,w=e.type,q=Object(c.a)(e,b),x=Object(s.useState)(Object(u.a)()),g=Object(a.a)(x,2),y=g[0],k=g[1],P=Object(s.useState)(w),S=Object(a.a)(P,2),C=S[0],N=S[1];return Object(l.jsxs)("span",{className:"d-inline-block w-100 position-relative pt-2 pb-4 input__wrapper ".concat(O?"error":""),ref:r,children:[Object(l.jsx)("input",Object(n.a)({id:"input-".concat(m),type:C,className:"".concat(t).concat(v?" input-clearable":""),onChange:i,onBlur:f,placeholder:j,step:"any"},function(){var e=Object(n.a)({},q);return e.defaultValue=e.value||"",delete e.value,e}()),"input-".concat(y)),Object(l.jsx)("label",{htmlFor:"input-".concat(m),children:j}),Object(l.jsx)("span",{className:"input-error",children:O}),v&&Object(l.jsx)(o.e,{className:"input-clear-btn",size:18,onClick:function(){i({target:{value:""}}),k(Object(u.a)())}}),"password"===w&&Object(l.jsx)(p.a,{icon:"password"===C?Object(l.jsx)(d.d,{}):Object(l.jsx)(d.c,{}),variant:"outline-link",onClick:function(){return N("password"===C?"text":"password")},className:"p-0 m-0 position-absolute btn--show-password"}),""!==h&&Object(l.jsx)("span",{style:{fontSize:"12px",color:"#c1b1b1"},children:h})]})}));f.defaultProps={className:"",onChange:function(){return null},onBlur:function(){return null},label:"",id:Object(u.a)(),error:"",isClearable:!1,type:"text",hint:""},r.a=f},686:function(e,r,t){"use strict";t.d(r,"a",(function(){return h})),t.d(r,"b",(function(){return w}));var n=t(627),a=t.n(n),c=t(628),s=t(632),i=t.n(s),u=t(268),o=t(700),d=t(1155),p=t(208),l=t(162),b=t(217),f={variant:"error"},j=function(e){return d.a.isString(e)?e:e.error?(d.a.isString(e.error)||console.log(e.error),e.error):"Something went wrong"},m=function(e){var r=e.status,t=e.data;switch(r){case 401:case 400:case 403:case 422:b.b.dispatch(Object(p.b)({message:j(t),options:f}));break;case 404:b.b.dispatch(Object(p.b)({message:"Resource not found",options:f}));break;default:b.b.dispatch(Object(p.b)({message:"Something went wrong",options:f}))}},O=function(){var e=Object(c.a)(a.a.mark((function e(){var r,t,n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=b.b.getState(),(t=r.auth.token)&&t.access.token&&t.refresh.token){e.next=4;break}return e.abrupt("return",null);case 4:if(n=Object(o.a)(t.access.token),(c=new Date(0)).setUTCSeconds(n.exp),!(c.valueOf()<(new Date).valueOf())){e.next=19;break}return e.prev=8,e.next=11,i.a.post("".concat(u.b,"/").concat(u.c.REFRESH_TOKEN),{refreshToken:t.refresh.token});case 11:return s=e.sent,b.b.dispatch(Object(l.w)({token:s.data.data})),e.abrupt("return",s.data.data.accessToken);case 16:e.prev=16,e.t0=e.catch(8),m(e.t0.response);case 19:return e.abrupt("return",t.access.token);case 20:case"end":return e.stop()}}),e,null,[[8,16]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(c.a)(a.a.mark((function e(t,n){var c,s,o,d,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o={baseURL:u.b,headers:{"Content-Type":"application/json",reason:(null===(c=r.data)||void 0===c?void 0:c.reason)||null},timeout:6e4},null===(s=r.data)||void 0===s||delete s.reason,d=i.a.create(o),e.next=6,O();case 6:return(p=e.sent)&&d.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(p),e})),e.abrupt("return",d(r).then((function(e){return t(e.data)})).catch((function(e){return m(e.response?e.response:{status:500}),n(e.response&&e.response.data.error?e.response.data.error:"Something went wrong")})));case 11:e.prev=11,e.t0=e.catch(0),m({status:500}),n(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(e){var r=e.url,t=e.params,n=void 0===t?{}:t,a=e.data;return v({url:r,method:"get",params:n,data:void 0===a?{}:a})},w=function(e){var r=e.url,t=e.params,n=void 0===t?{}:t,a=e.data;return v({url:r,method:"post",params:n,data:void 0===a?{}:a})};r.c=u.c},688:function(e,r,t){"use strict";t.d(r,"f",(function(){return l})),t.d(r,"g",(function(){return b})),t.d(r,"a",(function(){return f})),t.d(r,"i",(function(){return j})),t.d(r,"d",(function(){return m})),t.d(r,"c",(function(){return O})),t.d(r,"e",(function(){return v})),t.d(r,"h",(function(){return h})),t.d(r,"b",(function(){return w}));var n=t(627),a=t.n(n),c=t(628),s=t(208),i=t(162),u=t(632),o=t.n(u),d=t(268),p=t(686);function l(){return function(){var e=Object(c.a)(a.a.mark((function e(r){var t,n,c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(Object(s.a)()),r(Object(i.a)()),e.prev=2,e.next=5,o.a.get("".concat(d.b,"admin"));case 5:return u=e.sent,r(Object(i.c)(null===u||void 0===u||null===(t=u.data)||void 0===t||null===(n=t.docs)||void 0===n?void 0:n.data)),r(Object(s.b)({message:null===u||void 0===u||null===(c=u.data)||void 0===c?void 0:c.msg,options:{variant:"success"}})),e.abrupt("return",u);case 11:return e.prev=11,e.t0=e.catch(2),r(Object(i.b)()),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(r){return e.apply(this,arguments)}}()}function b(e){return function(){var r=Object(c.a)(a.a.mark((function r(t){var n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(Object(s.a)()),t(Object(i.g)()),r.prev=2,r.next=5,o.a.post("".concat(d.b,"admin/login"),e);case 5:return 200===(n=r.sent).status?(t(Object(i.i)({token:n.data.token,user:n.data.user,role:null})),t(Object(s.b)({message:"Logged in successfully!",options:{variant:"success"}}))):t(Object(s.b)({message:n.data.error||"Something went wrong!",options:{variant:"error"}})),r.abrupt("return",n);case 10:return r.prev=10,r.t0=r.catch(2),t(Object(s.b)({message:"Something went wrong!",options:{variant:"error"}})),t(Object(i.h)()),r.abrupt("return",!1);case 15:case"end":return r.stop()}}),r,null,[[2,10]])})));return function(e){return r.apply(this,arguments)}}()}function f(e){return function(){var r=Object(c.a)(a.a.mark((function r(t){var n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(Object(s.a)()),t(Object(i.q)()),r.prev=2,r.next=5,o.a.post("".concat(d.b,"admin/uploads"),e);case 5:return n=r.sent,t(Object(i.s)(n.data)),t(Object(s.b)({message:"Admin Image Add Successfully",options:{variant:"success"}})),r.abrupt("return",n);case 11:return r.prev=11,r.t0=r.catch(2),t(Object(i.r)()),r.abrupt("return",!1);case 15:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(e){return r.apply(this,arguments)}}()}function j(e){return function(){var r=Object(c.a)(a.a.mark((function r(t){var n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(Object(s.a)()),t(Object(i.q)()),r.prev=2,r.next=5,o.a.post("".concat(d.b,"admin/signup"),e);case 5:return n=r.sent,t(Object(i.s)(n.data)),t(Object(s.b)({message:"Sign Up Successfully",options:{variant:"success"}})),r.abrupt("return",n);case 11:return r.prev=11,r.t0=r.catch(2),t(Object(i.r)()),r.abrupt("return",!1);case 15:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(e){return r.apply(this,arguments)}}()}function m(e){return function(){var r=Object(c.a)(a.a.mark((function r(t){var n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(Object(i.B)(!0)),r.prev=1,r.next=4,o.a.post("".concat(d.b,"admin/forgot-password"),e);case 4:return n=r.sent,t(Object(s.b)({message:"Verification Link Send to the Email.",options:{variant:"success"}})),r.abrupt("return",n.data);case 9:return r.prev=9,r.t0=r.catch(1),r.abrupt("return",!1);case 12:return r.prev=12,t(Object(i.B)(!1)),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[1,9,12,15]])})));return function(e){return r.apply(this,arguments)}}()}function O(e){return function(){var r=Object(c.a)(a.a.mark((function r(t){var n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(Object(i.B)(!0)),t(Object(i.t)()),r.prev=2,r.next=5,Object(p.b)({url:p.c.VERIFY_EMAIL,data:e});case 5:return(n=r.sent)?(t(Object(i.v)(n.data)),t(Object(s.b)({message:n.message,options:{variant:"success"}}))):t(Object(s.b)({message:n.message,options:{variant:"success"}})),r.abrupt("return",n);case 10:r.prev=10,r.t0=r.catch(2),t(Object(i.u)(r.t0));case 13:return r.prev=13,t(Object(i.B)(!1)),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[2,10,13,16]])})));return function(e){return r.apply(this,arguments)}}()}function v(e){return function(){var r=Object(c.a)(a.a.mark((function r(t){var n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(Object(i.k)()),r.prev=1,r.next=4,o.a.post("".concat(d.b,"admin/verify-token"),e);case 4:return(n=r.sent)?(t(Object(i.m)()),t(Object(s.b)({message:"Email Token Verified",options:{variant:"success"}}))):t(Object(s.b)({message:"Invalid Token",options:{variant:"error"}})),r.abrupt("return",n);case 9:r.prev=9,r.t0=r.catch(1),t(Object(i.l)(r.t0));case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()}function h(e){return function(){var r=Object(c.a)(a.a.mark((function r(t){var n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(Object(i.B)(!0)),t(Object(i.x)()),r.prev=2,r.next=5,o.a.post("".concat(d.b,"admin/reset-password"),e);case 5:return n=r.sent,t(Object(i.z)(n)),t(Object(s.b)({message:"Password Reset Successfully",options:{variant:"success"}})),r.abrupt("return",n);case 11:return r.prev=11,r.t0=r.catch(2),t(Object(i.y)(r.t0)),r.abrupt("return",!1);case 15:return r.prev=15,t(Object(i.B)(!1)),r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[2,11,15,18]])})));return function(e){return r.apply(this,arguments)}}()}function w(e){return function(){var r=Object(c.a)(a.a.mark((function r(t){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(Object(s.a)()),t(Object(i.q)()),r.prev=2,r.next=5,o.a.delete("".concat(d.b,"admin/").concat(e));case 5:return t(Object(i.s)()),t(Object(s.b)({message:"Admin Delete Successfully",options:{variant:"success"}})),r.abrupt("return",!0);case 10:return r.prev=10,r.t0=r.catch(2),t(Object(i.r)()),r.abrupt("return",!1);case 14:case"end":return r.stop()}}),r,null,[[2,10]])})));return function(e){return r.apply(this,arguments)}}()}},701:function(e,r,t){"use strict";t.d(r,"c",(function(){return s})),t.d(r,"e",(function(){return i})),t.d(r,"a",(function(){return u})),t.d(r,"d",(function(){return o})),t.d(r,"b",(function(){return d}));var n=t(642),a=t(641),c=/^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/,s=Object(n.a)(a.c({email:a.e().email().required(),password:a.e().required()}).required()),i=Object(n.a)(a.c({email:a.e().email().required(),password:a.e().required(),firstName:a.e().required(),lastName:a.e().required(),mobileNumber:a.e().required()}).required()),u=Object(n.a)(a.c({name:a.e().required(),password:a.e().required(),confirmpassword:a.e().required()}).required()),o=(Object(n.a)(a.c({otp:a.e().required()}).required()),Object(n.a)(a.c({password:a.e().required()}).required()),Object(n.a)(a.c({passcode:a.b().typeError("Passcode is required.").required()}).required()),Object(n.a)(a.c({firstName:a.e().required(),lastName:a.e().required(),countryCode:a.e().required(),mobile:a.e().test("is-mobile","Mobile number is not valid",(function(e){return!e||c.test(e)})),password:a.e().required(),confirmPassword:a.e().test("passwords-match","Passwords must match",(function(e){return this.parent.password===e}))})),Object(n.a)(a.c({email:a.e().email().required(),role:a.e().required()}).required()),Object(n.a)(a.c({name:a.e().required(),description:a.e().required(),isSuperAdmin:a.a()}).required()),Object(n.a)(a.c({password:a.e().required(),confirmPassword:a.e().test("passwords-match","Passwords must match",(function(e){return this.parent.password===e}))}))),d=Object(n.a)(a.c({email:a.e().email().required()}).required());Object(n.a)(a.c({name:a.e().required(),isoCode:a.e().required(),financialStartDate:a.e().required(),financialQuarterOne:a.e().required(),financialQuarterTwo:a.e().required(),financialQuarterThree:a.e().required(),financialQuarterFour:a.e().required()}).required()),Object(n.a)(a.c({name:a.e(),dateFormat:a.e().required(),distanceUnit:a.e().required()}).required()),Object(n.a)(a.c({name:a.e().required(),isoCode:a.e().required(),countryCode:a.e().required()}).required()),Object(n.a)(a.c({name:a.e().required(),countryCode:a.e().required(),stateCode:a.e().required()}).required()),Object(n.a)(a.c({name:a.e().required()}).required()),Object(n.a)(a.c({name:a.e().required(),amount:a.b().typeError("Plan Price is required.").required("Plan Price is required.").test("maxDigitsAfterDecimal","Plan Price field must have 2 digits after decimal or less.",(function(e){return/^\d+(\.\d{1,2})?$/.test(e)})),total:a.b().required(),description:a.e().required()}).required()),Object(n.a)(a.c({name:a.e().required(),amount:a.b().typeError("Plan Price is required.").required("Plan Price is required.").test("maxDigitsAfterDecimal","Plan Price field must have 2 digits after decimal or less.",(function(e){return/^\d+(\.\d{1,2})?$/.test(e)})),total:a.b().required(),description:a.e().required()}).required()),Object(n.a)(a.c({name:a.e().required(),isoCode:a.e().required(),phonecode:a.e().required(),currency:a.e().required()}).required()),Object(n.a)(a.c({title:a.e().required(),content:a.e().required()}).required()),Object(n.a)(a.c({value:a.b().required()}).required())}}]);
//# sourceMappingURL=155.65151c3b.chunk.js.map