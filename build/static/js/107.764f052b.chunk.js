(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[107],{1141:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(627),c=a.n(n),o=a(628),i=a(13),s=a(642),u=a(2),p=a(269),l=a(1157),d=a(880),b=a(906),f=a(881),j=a(636),v=a(639),O=a(210),m=a(73),h=a(37),x=a(641),y=a(630),E=a(629),g=a(633),S=a(102),_=a(708),N=a(268),A=a(3),w=x.c({clientName:x.e().required(),clientFeedback:x.e().required()}).required();t.default=Object(h.b)((function(e){return{updating:e.homepage.updating}}),(function(e){return{AddClient:function(t){return e(Object(_.g)(t))},performImageUpdate:function(t){return e(Object(_.a)(t))}}}))((function(e){var t,a,n=e.updating,h=e.performImageUpdate,x=e.AddClient,_=e.history,C=Object(v.e)({resolver:Object(s.a)(w),defaultValues:{clientName:"",clientFeedback:"",clientAddress:"",clientImage:""}}),I=C.register,P=C.handleSubmit,T=C.formState.errors,k=Object(u.useState)(!0),L=Object(i.a)(k,2),G=L[0],D=L[1],M=Object(S.a)(),U=Object(u.useState)(null),B=Object(i.a)(U,2),R=B[0],H=B[1],F=Object(u.useRef)(null),z=function(){var e=Object(o.a)(c.a.mark((function e(t){var a,r,n,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],(r=new FormData).append("resourceType","clientSlider"),r.append("clientImage",a,a.name),e.next=6,h(r);case 6:200===(n=e.sent).status&&H(null===n||void 0===n||null===(o=n.data)||void 0===o?void 0:o.imageUrl);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(o.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=t.clientAddress)&&a.length>0?t.clientAddress=a:delete t.clientAddress,n=Object(r.a)(Object(r.a)({},t),{},{resourceType:"clientSlider",clientImage:R}),e.next=5,x(n);case 5:200===e.sent.status&&_.push("/homepage");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsx)(g.a,{open:G,width:M?"100%":"60%",header:Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(E.a,{icon:Object(A.jsx)(O.a,{}),variant:"outline-link",onClick:function(){D(!1)},className:"p-0 me-2"}),Object(A.jsx)("h6",{className:"mb-0",children:"Add Client Image Slider"})]}),children:Object(A.jsx)(l.a,{onSubmit:P(q),children:Object(A.jsxs)(d.a,{children:[Object(A.jsx)(b.a,{xs:12,children:Object(A.jsx)(y.a,Object(r.a)(Object(r.a)({id:"clientName",name:"clientName",label:"client Name"},I("clientName")),{},{error:null===(t=T.clientName)||void 0===t?void 0:t.message}))}),Object(A.jsx)(b.a,{xs:12,children:Object(A.jsx)(y.a,Object(r.a)(Object(r.a)({id:"clientFeedback",name:"clientFeedback",label:"client Feedback"},I("clientFeedback")),{},{error:null===(a=T.clientFeedback)||void 0===a?void 0:a.message}))}),Object(A.jsx)(b.a,{xs:12,children:Object(A.jsx)(y.a,Object(r.a)({id:"clientAddress",name:"clientAddress",label:"client Address"},I("clientAddress")))}),Object(A.jsx)(b.a,{xs:12,children:Object(A.jsxs)("div",{className:"image-uploader-container",children:[Object(A.jsx)("div",{className:"brandimage",children:"client Image"}),Object(A.jsxs)("div",{className:"image-container",children:[R?Object(A.jsx)("img",{src:N.a+R,alt:"uploaded-item"}):Object(A.jsx)(p.a,{src:N.a+R,name:"clientName",size:"100",className:"ff-primary rounded-circle me-3"}),Object(A.jsx)("input",{id:"brandImage",type:"file",ref:F,onChange:function(e){return z(e)},style:{display:"none"}})]}),Object(A.jsx)(E.a,{className:"add-image-icon",variant:"primary",icon:{type:m.b},onClick:function(){F.current.click()}})]})}),Object(A.jsx)(b.a,{xs:8,className:"mt-4 mb-2 mx-auto",children:Object(A.jsxs)(f.a,{type:"submit",variant:"secondary",className:"px-3 mx-auto w-100 w-md-75",children:[!n&&Object(A.jsx)("span",{children:"Add"}),n&&Object(A.jsx)(j.a,{animation:"border"})]})})]})})})}))},629:function(e,t,a){"use strict";var r=a(1),n=(a(2),a(881)),c=a(3),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a={size:22};return"lg"===t?a.size=32:"sm"===t&&(a.size=18),Object(c.jsx)(e.type,Object(r.a)(Object(r.a)({},e.props),a))},i=function(e){var t=e.variant,a=e.className,r=e.onClick,i=e.size,s=e.isLoading,u=e.disabled,p=e.children,l=e.icon;return Object(c.jsx)(n.a,{variant:t,className:"btn-icon ".concat(i?"btn-icon-".concat(i):""," ").concat(s?"btn-icon-loading":""," ").concat(a),onClick:r,size:i,disabled:s||u,children:Object(c.jsxs)("span",{children:[o(l,i),p&&Object(c.jsx)("span",{children:p})]})})};i.defaultProps={variant:"default",className:"",size:"",onClick:function(){return null},isLoading:!1,disabled:!1,icon:null},t.a=i},630:function(e,t,a){"use strict";var r=a(1),n=a(13),c=a(12),o=a(2),i=a.n(o),s=a(756),u=a(73),p=a(209),l=a(629),d=a(3),b=["className","onChange","onBlur","label","id","error","isClearable","hint","type"],f=i.a.forwardRef((function(e,t){var a=e.className,i=e.onChange,f=e.onBlur,j=e.label,v=e.id,O=e.error,m=e.isClearable,h=e.hint,x=e.type,y=Object(c.a)(e,b),E=Object(o.useState)(Object(s.a)()),g=Object(n.a)(E,2),S=g[0],_=g[1],N=Object(o.useState)(x),A=Object(n.a)(N,2),w=A[0],C=A[1];return Object(d.jsxs)("span",{className:"d-inline-block w-100 position-relative pt-2 pb-4 input__wrapper ".concat(O?"error":""),ref:t,children:[Object(d.jsx)("input",Object(r.a)({id:"input-".concat(v),type:w,className:"".concat(a).concat(m?" input-clearable":""),onChange:i,onBlur:f,placeholder:j,step:"any"},function(){var e=Object(r.a)({},y);return e.defaultValue=e.value||"",delete e.value,e}()),"input-".concat(S)),Object(d.jsx)("label",{htmlFor:"input-".concat(v),children:j}),Object(d.jsx)("span",{className:"input-error",children:O}),m&&Object(d.jsx)(u.e,{className:"input-clear-btn",size:18,onClick:function(){i({target:{value:""}}),_(Object(s.a)())}}),"password"===x&&Object(d.jsx)(l.a,{icon:"password"===w?Object(d.jsx)(p.d,{}):Object(d.jsx)(p.c,{}),variant:"outline-link",onClick:function(){return C("password"===w?"text":"password")},className:"p-0 m-0 position-absolute btn--show-password"}),""!==h&&Object(d.jsx)("span",{style:{fontSize:"12px",color:"#c1b1b1"},children:h})]})}));f.defaultProps={className:"",onChange:function(){return null},onBlur:function(){return null},label:"",id:Object(s.a)(),error:"",isClearable:!1,type:"text",hint:""},t.a=f},633:function(e,t,a){"use strict";var r=a(7),n=a(13),c=a(2),o=a(22),i=a(626),s=a(643),u=a(646),p=a(3),l=function(e){var t=e.open,a=e.width,l=e.variant,d=e.header,b=e.children,f=Object(o.useHistory)(),j=Object(c.useState)(!1),v=Object(n.a)(j,2),O=v[0],m=v[1],h=function(){m(!1),setTimeout((function(){f.goBack()}),100)};return Object(c.useEffect)((function(){!0===t?m(t):!1===t&&h()}),[t]),Object(p.jsx)(i.a,{open:O,sx:{zIndex:1021},children:Object(p.jsx)(s.a,{open:O,anchor:"right",variant:l,sx:Object(r.a)({width:a,flexShrink:0},"& .MuiDrawer-paper",{width:a,boxSizing:"border-box"}),className:"portal",children:Object(p.jsxs)(u.a,{sx:{overflow:"auto",height:"100%"},children:[d&&Object(p.jsx)("div",{className:"d-flex align-items-center justify-content-start px-4 py-3 sticky-top portal__header",children:d}),Object(p.jsx)("div",{className:"px-4 py-4 portal__content",children:b||null})]})})})};l.defaultProps={width:"480px",variant:"temporary",header:null,open:!1},t.a=l},634:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},636:function(e,t,a){"use strict";var r=a(1),n=a(12),c=a(17),o=a.n(c),i=a(2),s=a(19),u=a(3),p=["bsPrefix","variant","animation","size","as","className"],l=i.forwardRef((function(e,t){var a=e.bsPrefix,c=e.variant,i=e.animation,l=e.size,d=e.as,b=void 0===d?"div":d,f=e.className,j=Object(n.a)(e,p);a=Object(s.a)(a,"spinner");var v="".concat(a,"-").concat(i);return Object(u.jsx)(b,Object(r.a)(Object(r.a)({ref:t},j),{},{className:o()(f,v,l&&"".concat(v,"-").concat(l),c&&"text-".concat(c))}))}));l.displayName="Spinner",t.a=l},643:function(e,t,a){"use strict";var r=a(6),n=a(4),c=a(2),o=a(15),i=a(206),s=a(621),u=a(613),p=a(588),l=a(61),d=a(66),b=a(20),f=a(16),j=a(101),v=a(99);function O(e){return Object(v.a)("MuiDrawer",e)}Object(j.a)("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);var m=a(3),h=["BackdropProps"],x=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],y=function(e,t){var a=e.ownerState;return[t.root,("permanent"===a.variant||"persistent"===a.variant)&&t.docked,t.modal]},E=Object(f.a)(s.a,{name:"MuiDrawer",slot:"Root",overridesResolver:y})((function(e){var t=e.theme;return{zIndex:(t.vars||t).zIndex.drawer}})),g=Object(f.a)("div",{shouldForwardProp:f.b,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:y})({flex:"0 0 auto"}),S=Object(f.a)(p.a,{name:"MuiDrawer",slot:"Paper",overridesResolver:function(e,t){var a=e.ownerState;return[t.paper,t["paperAnchor".concat(Object(l.a)(a.anchor))],"temporary"!==a.variant&&t["paperAnchorDocked".concat(Object(l.a)(a.anchor))]]}})((function(e){var t=e.theme,a=e.ownerState;return Object(n.a)({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},"left"===a.anchor&&{left:0},"top"===a.anchor&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},"right"===a.anchor&&{right:0},"bottom"===a.anchor&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},"left"===a.anchor&&"temporary"!==a.variant&&{borderRight:"1px solid ".concat((t.vars||t).palette.divider)},"top"===a.anchor&&"temporary"!==a.variant&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider)},"right"===a.anchor&&"temporary"!==a.variant&&{borderLeft:"1px solid ".concat((t.vars||t).palette.divider)},"bottom"===a.anchor&&"temporary"!==a.variant&&{borderTop:"1px solid ".concat((t.vars||t).palette.divider)})})),_={left:"right",right:"left",top:"down",bottom:"up"};var N=c.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiDrawer"}),s=Object(d.a)(),p={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},f=a.anchor,j=void 0===f?"left":f,v=a.BackdropProps,y=a.children,N=a.className,A=a.elevation,w=void 0===A?16:A,C=a.hideBackdrop,I=void 0!==C&&C,P=a.ModalProps,T=(P=void 0===P?{}:P).BackdropProps,k=a.onClose,L=a.open,G=void 0!==L&&L,D=a.PaperProps,M=void 0===D?{}:D,U=a.SlideProps,B=a.TransitionComponent,R=void 0===B?u.a:B,H=a.transitionDuration,F=void 0===H?p:H,z=a.variant,q=void 0===z?"temporary":z,V=Object(r.a)(a.ModalProps,h),J=Object(r.a)(a,x),W=c.useRef(!1);c.useEffect((function(){W.current=!0}),[]);var Y=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?_[t]:t}(s,j),K=j,Q=Object(n.a)({},a,{anchor:K,elevation:w,open:G,variant:q},J),X=function(e){var t=e.classes,a=e.anchor,r=e.variant,n={root:["root"],docked:[("permanent"===r||"persistent"===r)&&"docked"],modal:["modal"],paper:["paper","paperAnchor".concat(Object(l.a)(a)),"temporary"!==r&&"paperAnchorDocked".concat(Object(l.a)(a))]};return Object(i.a)(n,O,t)}(Q),Z=Object(m.jsx)(S,Object(n.a)({elevation:"temporary"===q?w:0,square:!0},M,{className:Object(o.a)(X.paper,M.className),ownerState:Q,children:y}));if("permanent"===q)return Object(m.jsx)(g,Object(n.a)({className:Object(o.a)(X.root,X.docked,N),ownerState:Q,ref:t},J,{children:Z}));var $=Object(m.jsx)(R,Object(n.a)({in:G,direction:_[Y],timeout:F,appear:W.current},U,{children:Z}));return"persistent"===q?Object(m.jsx)(g,Object(n.a)({className:Object(o.a)(X.root,X.docked,N),ownerState:Q,ref:t},J,{children:$})):Object(m.jsx)(E,Object(n.a)({BackdropProps:Object(n.a)({},v,T,{transitionDuration:F}),className:Object(o.a)(X.root,X.modal,N),open:G,ownerState:Q,onClose:k,hideBackdrop:I,ref:t},J,V,{children:$}))}));t.a=N},646:function(e,t,a){"use strict";var r=a(4),n=a(6),c=a(2),o=a(634),i=a(156),s=a(368),u=a(648),p=a(211),l=a(3),d=["className","component"];var b=a(566),f=a(299),j=a(103),v=Object(f.b)(),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themeId,a=e.defaultTheme,b=e.defaultClassName,f=void 0===b?"MuiBox-root":b,j=e.generateClassName,v=Object(i.a)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(s.a),O=c.forwardRef((function(e,c){var i=Object(p.a)(a),s=Object(u.a)(e),b=s.className,O=s.component,m=void 0===O?"div":O,h=Object(n.a)(s,d);return Object(l.jsx)(v,Object(r.a)({as:m,ref:c,className:Object(o.a)(b,j?j(f):f),theme:t&&i[t]||i},h))}));return O}({themeId:j.a,defaultTheme:v,defaultClassName:"MuiBox-root",generateClassName:b.a.generate});t.a=O},648:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(26),n=a(4),c=a(6),o=a(266),i=a(157),s=["sx"];function u(e){var t,a=e.sx,u=function(e){var t,a,r={systemProps:{},otherProps:{}},n=null!=(t=null==e||null==(a=e.theme)?void 0:a.unstable_sxConfig)?t:i.a;return Object.keys(e).forEach((function(t){n[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r}(Object(c.a)(e,s)),p=u.systemProps,l=u.otherProps;return t=Array.isArray(a)?[p].concat(Object(r.a)(a)):"function"===typeof a?function(){var e=a.apply(void 0,arguments);return Object(o.b)(e)?Object(n.a)({},p,e):p}:Object(n.a)({},p,a),Object(n.a)({},l,{sx:t})}},708:function(e,t,a){"use strict";a.d(t,"e",(function(){return O})),a.d(t,"d",(function(){return m})),a.d(t,"f",(function(){return h})),a.d(t,"a",(function(){return x})),a.d(t,"h",(function(){return y})),a.d(t,"g",(function(){return E})),a.d(t,"j",(function(){return g})),a.d(t,"i",(function(){return S})),a.d(t,"c",(function(){return _})),a.d(t,"b",(function(){return N}));var r=a(627),n=a.n(r),c=a(628),o=a(32),i=function(e){return{type:o.a.POST_HOMEPAGE_SUCCESS,payload:e}},s=function(e){return{type:o.a.UPDATE_HOMEPAGE_SUCCESS,payload:e}},u=function(e){return{type:o.a.POST_IMAGE_HOMEPAGE_SUCCESS,payload:e}},p=function(e){return{type:o.a.POST_CLIENT_SUCCESS,payload:e}},l=function(e){return{type:o.a.POST_IMAGE_CLIENT_SUCCESS,payload:e}},d=function(e){return{type:o.a.UPDATE_CLIENT_SUCCESS,payload:e}},b=a(208),f=a(632),j=a.n(f),v=a(268);function O(){return function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(b.a)()),t({type:o.a.GET_HOMEPAGE_LIST_BEGIN}),e.prev=2,e.next=5,j.a.get("".concat(v.b,"homepage"));case 5:return a=e.sent,t((n=a.data,{type:o.a.GET_HOMEPAGE_LIST_SUCCESS,payload:n})),t(Object(b.b)({message:"Homepages Retrieved Successfully",options:{variant:"success"}})),e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(2),t((r=void 0,{type:o.a.GET_HOMEPAGE_LIST_FAILURE,payload:r})),e.abrupt("return",!1);case 15:case"end":return e.stop()}var r,n}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}function m(){return function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(b.a)()),t({type:o.a.GET_CLIENT_LIST_BEGIN}),e.prev=2,e.next=5,j.a.get("".concat(v.b,"client"));case 5:return a=e.sent,t((n=a.data,{type:o.a.GET_CLIENT_LIST_SUCCESS,payload:n})),t(Object(b.b)({message:"Client data Retrieved Successfully",options:{variant:"success"}})),e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(2),t((r=void 0,{type:o.a.GET_CLIENT_LIST_FAILURE,payload:r})),e.abrupt("return",!1);case 15:case"end":return e.stop()}var r,n}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}function h(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(b.a)()),a({type:o.a.POST_IMAGE_HOMEPAGE_BEGIN}),t.prev=2,t.next=5,j.a.post("".concat(v.b,"homepage/uploads"),e);case 5:return r=t.sent,a(u(r.data)),a(Object(b.b)({message:"Homepage Image Add Successfully",options:{variant:"success"}})),t.abrupt("return",r);case 11:return t.prev=11,t.t0=t.catch(2),a((n=void 0,{type:o.a.POST_IMAGE_HOMEPAGE_FAILURE,payload:n})),t.abrupt("return",!1);case 15:case"end":return t.stop()}var n}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function x(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(b.a)()),a({type:o.a.POST_IMAGE_CLIENT_BEGIN}),t.prev=2,t.next=5,j.a.post("".concat(v.b,"client/uploads"),e);case 5:return r=t.sent,a(l(r.data)),a(Object(b.b)({message:"Client Image Add Successfully",options:{variant:"success"}})),t.abrupt("return",r);case 11:return t.prev=11,t.t0=t.catch(2),a((n=void 0,{type:o.a.POST_IMAGE_CLIENT_FAILURE,payload:n})),t.abrupt("return",!1);case 15:case"end":return t.stop()}var n}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function y(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(b.a)()),a({type:o.a.POST_HOMEPAGE_BEGIN}),t.prev=2,t.next=5,j.a.post("".concat(v.b,"homepage"),e);case 5:return r=t.sent,a(i(r.data)),a(Object(b.b)({message:"Homepage Add Successfully",options:{variant:"success"}})),t.abrupt("return",r);case 11:return t.prev=11,t.t0=t.catch(2),a((n=void 0,{type:o.a.POST_HOMEPAGE_FAILURE,payload:n})),t.abrupt("return",!1);case 15:case"end":return t.stop()}var n}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function E(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(b.a)()),a({type:o.a.POST_CLIENT_BEGIN}),t.prev=2,t.next=5,j.a.post("   ".concat(v.b,"client"),e);case 5:return r=t.sent,a(p(r.data)),a(Object(b.b)({message:"client Add Successfully",options:{variant:"success"}})),t.abrupt("return",r);case 11:return t.prev=11,t.t0=t.catch(2),a((n=void 0,{type:o.a.POST_CLIENT_FAILURE,payload:n})),t.abrupt("return",!1);case 15:case"end":return t.stop()}var n}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function g(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(b.a)()),a({type:o.a.UPDATE_HOMEPAGE_BEGIN}),t.prev=2,r=e.id,t.next=6,j.a.put("".concat(v.b,"homepage/").concat(r),e);case 6:return c=t.sent,a(s(c.data)),a(Object(b.b)({message:"Homepage Update Successfully",options:{variant:"success"}})),t.abrupt("return",c);case 12:return t.prev=12,t.t0=t.catch(2),a((n=void 0,{type:o.a.UPDATE_HOMEPAGE_FAILURE,payload:n})),t.abrupt("return",!1);case 16:case"end":return t.stop()}var n}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}function S(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(b.a)()),a({type:o.a.UPDATE_CLIENT_BEGIN}),t.prev=2,r=e.id,t.next=6,j.a.put("".concat(v.b,"client/").concat(r),e);case 6:return c=t.sent,a(d(c.data)),a(Object(b.b)({message:"Client Update Successfully",options:{variant:"success"}})),t.abrupt("return",c);case 12:return t.prev=12,t.t0=t.catch(2),a((n=void 0,{type:o.a.UPDATE_CLIENT_FAILURE,payload:n})),t.abrupt("return",!1);case 16:case"end":return t.stop()}var n}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}function _(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(b.a)()),a({type:o.a.DELETE_HOMEPAGE_BEGIN}),t.prev=2,t.next=5,j.a.delete("".concat(v.b,"homepage/").concat(e));case 5:return a((n=void 0,{type:o.a.DELETE_HOMEPAGE_SUCCESS,payload:n})),a(Object(b.b)({message:"Homepage Delete Successfully",options:{variant:"success"}})),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(2),a((r=void 0,{type:o.a.DELETE_HOMEPAGE_FAILURE,payload:r})),t.abrupt("return",!1);case 14:case"end":return t.stop()}var r,n}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}function N(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(b.a)()),a({type:o.a.DELETE_CLIENT_BEGIN}),t.prev=2,t.next=5,j.a.delete("".concat(v.b,"client/").concat(e));case 5:return a((n=void 0,{type:o.a.DELETE_CLIENT_SUCCESS,payload:n})),a(Object(b.b)({message:"Client Delete Successfully",options:{variant:"success"}})),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(2),a((r=void 0,{type:o.a.DELETE_CLIENT_FAILURE,payload:r})),t.abrupt("return",!1);case 14:case"end":return t.stop()}var r,n}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=107.764f052b.chunk.js.map