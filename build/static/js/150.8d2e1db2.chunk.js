(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[150],{1063:function(e,t,n){"use strict";n.r(t);var a=n(627),c=n.n(a),r=n(628),s=n(13),l=n(2),i=n(1157),o=n(880),u=n(906),j=n(881),d=n(636),b=n(639),p=n(210),O=n(656),x=n(37),h=n(637),m=n(629),f=n(633),v=n(654),N=n(102),y=n(741),g=n(3),S=function(e){var t=e.submitting,n=e.handleAddFooter,a=e.history,x=Object(b.e)().handleSubmit,y=Object(l.useState)(!1),S=Object(s.a)(y,2),q=S[0],E=S[1],T=function(){E(!q)},w=Object(l.useState)(!0),_=Object(s.a)(w,2),k=_[0],F=_[1],I=Object(N.a)(),L=Object(l.useState)(""),C=Object(s.a)(L,2),R=C[0],A=C[1],z=Object(l.useState)(!1),H=Object(s.a)(z,2),P=H[0],U=H[1],D=function(){var e=Object(r.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""===t.content?U(!0):U(!1),r={footerDescription:R},e.next=4,n(r);case 4:200===e.sent.status&&a.push("/footer");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)(f.a,{open:k,width:I?"100%":"75%",header:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(m.a,{icon:Object(g.jsx)(p.a,{}),variant:"outline-link",onClick:function(){F(!1)},className:"p-0 me-2"}),Object(g.jsx)("h6",{className:"mb-0",children:"Add Footer"})]}),children:q?Object(g.jsx)(h.a,{htmlContent:R,preview:q,handlePreview:T}):Object(g.jsx)(i.a,{onSubmit:x(D),children:Object(g.jsxs)(o.a,{children:[Object(g.jsxs)(u.a,{xs:12,children:[Object(g.jsxs)("div",{className:"d-flex justify-content-between mb-2",children:[Object(g.jsx)("div",{className:"brandimage mb-2",children:"Footer Content"}),R.length>0&&Object(g.jsx)(j.a,{variant:"primary",onClick:function(){return T()},children:Object(g.jsx)(O.a,{size:20})})]}),Object(g.jsx)(v.a,{content:R,setContent:A,placeholder:"Start Typing Footer here..."}),P&&Object(g.jsx)("p",{className:"text-danger",style:{fontSize:"12px",fontWeight:"500"},children:"Text Content is Required"})]}),Object(g.jsx)(u.a,{xs:8,className:"mt-4 mb-2 mx-auto",children:Object(g.jsxs)(j.a,{type:"submit",variant:"secondary",className:"px-3 w-100",children:[!t&&Object(g.jsx)("span",{children:"Add"}),t&&Object(g.jsx)(d.a,{animation:"border"})]})})]})})})};S.defaultProps={width:"75%",refresh:function(){return null},userData:null};t.default=Object(x.b)((function(e){return{submitting:e.footer.fetching}}),(function(e){return{handleAddFooter:function(t){return e(Object(y.c)(t))}}}))(S)},629:function(e,t,n){"use strict";var a=n(1),c=(n(2),n(881)),r=n(3),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={size:22};return"lg"===t?n.size=32:"sm"===t&&(n.size=18),Object(r.jsx)(e.type,Object(a.a)(Object(a.a)({},e.props),n))},l=function(e){var t=e.variant,n=e.className,a=e.onClick,l=e.size,i=e.isLoading,o=e.disabled,u=e.children,j=e.icon;return Object(r.jsx)(c.a,{variant:t,className:"btn-icon ".concat(l?"btn-icon-".concat(l):""," ").concat(i?"btn-icon-loading":""," ").concat(n),onClick:a,size:l,disabled:i||o,children:Object(r.jsxs)("span",{children:[s(j,l),u&&Object(r.jsx)("span",{children:u})]})})};l.defaultProps={variant:"default",className:"",size:"",onClick:function(){return null},isLoading:!1,disabled:!1,icon:null},t.a=l},633:function(e,t,n){"use strict";var a=n(7),c=n(13),r=n(2),s=n(22),l=n(626),i=n(643),o=n(646),u=n(3),j=function(e){var t=e.open,n=e.width,j=e.variant,d=e.header,b=e.children,p=Object(s.useHistory)(),O=Object(r.useState)(!1),x=Object(c.a)(O,2),h=x[0],m=x[1],f=function(){m(!1),setTimeout((function(){p.goBack()}),100)};return Object(r.useEffect)((function(){!0===t?m(t):!1===t&&f()}),[t]),Object(u.jsx)(l.a,{open:h,sx:{zIndex:1021},children:Object(u.jsx)(i.a,{open:h,anchor:"right",variant:j,sx:Object(a.a)({width:n,flexShrink:0},"& .MuiDrawer-paper",{width:n,boxSizing:"border-box"}),className:"portal",children:Object(u.jsxs)(o.a,{sx:{overflow:"auto",height:"100%"},children:[d&&Object(u.jsx)("div",{className:"d-flex align-items-center justify-content-start px-4 py-3 sticky-top portal__header",children:d}),Object(u.jsx)("div",{className:"px-4 py-4 portal__content",children:b||null})]})})})};j.defaultProps={width:"480px",variant:"temporary",header:null,open:!1},t.a=j},637:function(e,t,n){"use strict";var a=n(668),c=n.n(a),r=n(2),s=n(881),l=n(669),i=n(3);t.a=function(e){var t=e.htmlContent,n=e.preview,a=e.handlePreview,o=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=c.a.sanitize(t);o.current.innerHTML=e,o.current.querySelectorAll("pre").forEach((function(e){var t,n=(t=e.innerHTML,(new DOMParser).parseFromString(t,"text/html").body.textContent||"");e.innerHTML=n;var a=document.createElement("div");a.innerHTML=e.innerHTML,e.parentNode.replaceChild(a,e)}))}),[t]),Object(i.jsxs)("div",{className:"position-relative",children:[n&&Object(i.jsx)("div",{className:"w-100 d-flex justify-content-end mb-2",children:Object(i.jsx)(s.a,{variant:"primary",onClick:function(){return a()},children:Object(i.jsx)(l.a,{})})}),Object(i.jsx)("div",{ref:o,style:{whiteSpace:"pre-wrap",wordBreak:"break-word",border:"1px solid grey",borderRadius:"8px"}})]})}},654:function(e,t,n){"use strict";n(2);var a=n(640),c=n.n(a),r=(n(655),n(3)),s=function(){return Object(r.jsxs)("svg",{viewBox:"0 0 18 18",children:[Object(r.jsx)("polygon",{className:"ql-fill ql-stroke",points:"6 10 4 12 2 10 6 10"}),Object(r.jsx)("path",{className:"ql-stroke",d:"M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"})]})},l=function(){return Object(r.jsxs)("svg",{viewBox:"0 0 18 18",children:[Object(r.jsx)("polygon",{className:"ql-fill ql-stroke",points:"12 10 14 12 16 10 12 10"}),Object(r.jsx)("path",{className:"ql-stroke",d:"M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"})]})};function i(){this.quill.history.undo()}function o(){this.quill.history.redo()}var u=a.Quill.import("formats/size");u.whitelist=["extra-small","small","medium","large"],a.Quill.register(u,!0);var j=a.Quill.import("formats/font");j.whitelist=["arial","comic-sans","courier-new","georgia","helvetica","Inter","lucida"],a.Quill.register(j,!0);var d=["header","font","size","bold","italic","underline","align","strike","script","blockquote","background","list","bullet","indent","link","image","video","color","code-block"],b=function(e){return Object(r.jsx)(r.Fragment,{children:void 0!==e.toolbarId&&Object(r.jsxs)("div",{id:e.toolbarId,children:[Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsx)("button",{className:"ql-bold"}),Object(r.jsx)("button",{className:"ql-italic"}),Object(r.jsx)("button",{className:"ql-underline"}),Object(r.jsx)("button",{className:"ql-strike"})]}),Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsxs)("select",{className:"ql-font",defaultValue:"Inter",children:[Object(r.jsx)("option",{value:"arial",children:" Arial "}),Object(r.jsx)("option",{value:"comic-sans",children:"Comic Sans"}),Object(r.jsx)("option",{value:"courier-new",children:"Courier New"}),Object(r.jsx)("option",{value:"georgia",children:"Georgia"}),Object(r.jsx)("option",{value:"helvetica",children:"Helvetica"}),Object(r.jsx)("option",{value:"Inter",children:"Inter"}),Object(r.jsx)("option",{value:"lucida",children:"Lucida"})]}),Object(r.jsxs)("select",{className:"ql-size",defaultValue:"medium",children:[Object(r.jsx)("option",{value:"extra-small",children:"Extra Small"}),Object(r.jsx)("option",{value:"small",children:"Small"}),Object(r.jsx)("option",{value:"medium",children:"Medium"}),Object(r.jsx)("option",{value:"large",children:"Large"})]}),Object(r.jsxs)("select",{className:"ql-header",defaultValue:"",children:[Object(r.jsx)("option",{value:"1",children:"Heading 1"}),Object(r.jsx)("option",{value:"2",children:"Heading 2"}),Object(r.jsx)("option",{value:"3",children:"Heading 3"}),Object(r.jsx)("option",{value:"4",children:"Heading 4"}),Object(r.jsx)("option",{value:"5",children:"Heading 5"}),Object(r.jsx)("option",{value:"6",children:"Heading 6"}),Object(r.jsx)("option",{value:"",children:"Normal"})]})]}),Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsx)("button",{className:"ql-list",value:"ordered"}),Object(r.jsx)("button",{className:"ql-list",value:"bullet"}),Object(r.jsx)("button",{className:"ql-indent",value:"-1"}),Object(r.jsx)("button",{className:"ql-indent",value:"+1"})]}),Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsx)("button",{className:"ql-script",value:"super"}),Object(r.jsx)("button",{className:"ql-script",value:"sub"}),Object(r.jsx)("button",{className:"ql-blockquote"}),Object(r.jsx)("button",{className:"ql-direction"})]}),Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsx)("select",{className:"ql-align"}),Object(r.jsx)("select",{className:"ql-color"}),Object(r.jsx)("select",{className:"ql-background"})]}),Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsx)("button",{className:"ql-link"}),Object(r.jsx)("button",{className:"ql-image"}),Object(r.jsx)("button",{className:"ql-video"})]}),Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsx)("button",{className:"ql-formula"}),Object(r.jsx)("button",{className:"ql-code-block"}),Object(r.jsx)("button",{className:"ql-clean"})]}),Object(r.jsxs)("span",{className:"ql-formats",children:[Object(r.jsx)("button",{className:"ql-undo",children:Object(r.jsx)(s,{})}),Object(r.jsx)("button",{className:"ql-redo",children:Object(r.jsx)(l,{})})]})]})})};t.a=function(e){var t,n=e.content,a=e.setContent,s=e.defaultValue,l=e.placeholder;return Object(r.jsxs)("div",{className:"react-quill",children:[Object(r.jsx)(b,{toolbarId:"t1"}),Object(r.jsx)(c.a,{theme:"snow",value:n,defaultValue:s,onChange:function(e){a(e)},placeholder:l,modules:(t="t1",{toolbar:{container:"#"+t,handlers:{undo:i,redo:o}},clipboard:{matchVisual:!1},history:{delay:500,maxStack:100,userOnly:!0}}),formats:d})]})}},741:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return O})),n.d(t,"a",(function(){return x}));var a=n(627),c=n.n(a),r=n(628),s=n(208),l=n(632),i=n.n(l),o=n(268),u=n(55),j=function(e){return{type:u.a.POST_FOOTER_LIST_SUCCESS,payload:e}},d=function(e){return{type:u.a.UPDATE_FOOTER_LIST_SUCCESS,payload:e}};function b(){return function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(s.a)()),t({type:u.a.GET_FOOTER_LIST_BEGIN}),e.prev=2,e.next=5,i.a.get("".concat(o.b,"footer"));case 5:return n=e.sent,t((c=n.data,{type:u.a.GET_FOOTER_LIST_SUCCESS,payload:c})),t(Object(s.b)({message:"Footer Retrieved Successfully",options:{variant:"success"}})),e.abrupt("return",n);case 11:return e.prev=11,e.t0=e.catch(2),t((a=void 0,{type:u.a.GET_FOOTER_LIST_FAILURE,payload:a})),e.abrupt("return",!1);case 15:case"end":return e.stop()}var a,c}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}function p(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(s.a)()),n({type:u.a.POST_FOOTER_LIST_BEGIN}),t.prev=2,t.next=5,i.a.post("".concat(o.b,"footer"),e);case 5:return a=t.sent,n(j(a.data)),n(Object(s.b)({message:"Footer Add Successfully",options:{variant:"success"}})),t.abrupt("return",a);case 11:return t.prev=11,t.t0=t.catch(2),n((c=void 0,{type:u.a.POST_FOOTER_LIST_FAILURE,payload:c})),t.abrupt("return",!1);case 15:case"end":return t.stop()}var c}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function O(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(s.a)()),n({type:u.a.UPDATE_FOOTER_LIST_BEGIN}),t.prev=2,a=e.id,t.next=6,i.a.put("".concat(o.b,"footer/").concat(a),e);case 6:return r=t.sent,n(d(r.data)),n(Object(s.b)({message:"Footer Update Successfully",options:{variant:"success"}})),t.abrupt("return",r);case 12:return t.prev=12,t.t0=t.catch(2),n((c=void 0,{type:u.a.UPDATE_FOOTER_LIST_FAILURE,payload:c})),t.abrupt("return",!1);case 16:case"end":return t.stop()}var c}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}function x(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(s.a)()),n({type:u.a.DELETE_FOOTER_LIST_BEGIN}),t.prev=2,t.next=5,i.a.delete("".concat(o.b,"footer/").concat(e));case 5:return n((c=void 0,{type:u.a.DELETE_FOOTER_LIST_SUCCESS,payload:c})),n(Object(s.b)({message:"Footer Delete Successfully",options:{variant:"success"}})),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(2),n((a=void 0,{type:u.a.DELETE_FOOTER_LIST_FAILURE,payload:a})),t.abrupt("return",!1);case 14:case"end":return t.stop()}var a,c}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=150.8d2e1db2.chunk.js.map