(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[93],{629:function(e,t,n){"use strict";var a=n(1),r=(n(2),n(881)),c=n(3),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={size:22};return"lg"===t?n.size=32:"sm"===t&&(n.size=18),Object(c.jsx)(e.type,Object(a.a)(Object(a.a)({},e.props),n))},i=function(e){var t=e.variant,n=e.className,a=e.onClick,i=e.size,s=e.isLoading,l=e.disabled,u=e.children,d=e.icon;return Object(c.jsx)(r.a,{variant:t,className:"btn-icon ".concat(i?"btn-icon-".concat(i):""," ").concat(s?"btn-icon-loading":""," ").concat(n),onClick:a,size:i,disabled:s||l,children:Object(c.jsxs)("span",{children:[o(d,i),u&&Object(c.jsx)("span",{children:u})]})})};i.defaultProps={variant:"default",className:"",size:"",onClick:function(){return null},isLoading:!1,disabled:!1,icon:null},t.a=i},630:function(e,t,n){"use strict";var a=n(1),r=n(13),c=n(12),o=n(2),i=n.n(o),s=n(756),l=n(73),u=n(209),d=n(629),b=n(3),f=["className","onChange","onBlur","label","id","error","isClearable","hint","type"],j=i.a.forwardRef((function(e,t){var n=e.className,i=e.onChange,j=e.onBlur,p=e.label,O=e.id,v=e.error,h=e.isClearable,m=e.hint,x=e.type,C=Object(c.a)(e,f),g=Object(o.useState)(Object(s.a)()),E=Object(r.a)(g,2),w=E[0],y=E[1],N=Object(o.useState)(x),k=Object(r.a)(N,2),S=k[0],T=k[1];return Object(b.jsxs)("span",{className:"d-inline-block w-100 position-relative pt-2 pb-4 input__wrapper ".concat(v?"error":""),ref:t,children:[Object(b.jsx)("input",Object(a.a)({id:"input-".concat(O),type:S,className:"".concat(n).concat(h?" input-clearable":""),onChange:i,onBlur:j,placeholder:p,step:"any"},function(){var e=Object(a.a)({},C);return e.defaultValue=e.value||"",delete e.value,e}()),"input-".concat(w)),Object(b.jsx)("label",{htmlFor:"input-".concat(O),children:p}),Object(b.jsx)("span",{className:"input-error",children:v}),h&&Object(b.jsx)(l.e,{className:"input-clear-btn",size:18,onClick:function(){i({target:{value:""}}),y(Object(s.a)())}}),"password"===x&&Object(b.jsx)(d.a,{icon:"password"===S?Object(b.jsx)(u.d,{}):Object(b.jsx)(u.c,{}),variant:"outline-link",onClick:function(){return T("password"===S?"text":"password")},className:"p-0 m-0 position-absolute btn--show-password"}),""!==m&&Object(b.jsx)("span",{style:{fontSize:"12px",color:"#c1b1b1"},children:m})]})}));j.defaultProps={className:"",onChange:function(){return null},onBlur:function(){return null},label:"",id:Object(s.a)(),error:"",isClearable:!1,type:"text",hint:""},t.a=j},635:function(e,t,n){"use strict";var a=n(12),r=n(627),c=n.n(r),o=n(628),i=n(13),s=n(1),l=n(671),u=n.n(l),d=n(674),b=n(2),f=n(73),j=n(756),p=n(159),O=n(629),v=n(3),h=["data"],m=["data"],x={FirstPage:Object(b.forwardRef)((function(e,t){return Object(v.jsx)(f.n,Object(s.a)(Object(s.a)({},e),{},{ref:t}))})),LastPage:Object(b.forwardRef)((function(e,t){return Object(v.jsx)(f.p,Object(s.a)(Object(s.a)({},e),{},{ref:t}))})),NextPage:Object(b.forwardRef)((function(e,t){return Object(v.jsx)(f.g,Object(s.a)(Object(s.a)({},e),{},{ref:t}))})),PreviousPage:Object(b.forwardRef)((function(e,t){return Object(v.jsx)(f.f,Object(s.a)(Object(s.a)({},e),{},{ref:t}))})),SortArrow:Object(b.forwardRef)((function(e,t){return Object(v.jsx)(f.d,Object(s.a)(Object(s.a)({},e),{},{ref:t}))}))},C=function(e){var t=e.loading,n=e.columns,r=e.actions,l=e.components,C=e.onRowClick,g=e.options,E=e.selectedRow,w=e.getList,y=(e.search,e.downloadcsv),N=e.downloadExcel,k=e.filters,S=(e.filterOptions,e.data),T=(e.setFilters,e.resetFilters),F=e.refresh,R=e.resetBtn,_=Object(b.createRef)(),P=Object(b.useState)(Object(j.a)()),L=Object(i.a)(P,2),A=L[0],D=L[1],z=Object(b.useState)(!1),I=Object(i.a)(z,2),B=I[0],M=I[1],H={isLoading:t,icons:x,style:{boxShadow:"none"},localization:{toolbar:{searchTooltip:"Search",searchPlaceholder:"Search"}},options:Object(s.a)({showTitle:!1,search:!0,toolbar:!0,filtering:B,draggable:!1,actionsColumnIndex:-1,pageSize:10,emptyRowsWhenPaging:!1,pageSizeOptions:[10,30,50,100,500]},g),columns:n,data:S||function(e){return new Promise(function(){var t=Object(o.a)(c.a.mark((function t(n,a){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(Object(p.a)(e));case 3:if((r=t.sent).data){t.next=6;break}return t.abrupt("return",a());case 6:return t.abrupt("return",n({data:void 0!==r.data.docs?r.data.docs:r.data,page:void 0!==r.data.page?r.data.page-1:0,totalCount:void 0!==r.data.totalDocs?r.data.totalDocs:0}));case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())},actions:r,onRowClick:C};l&&(H.components=l),C&&(H.options=Object(s.a)(Object(s.a)({},H.options),{},{rowStyle:function(e){return{backgroundColor:E&&E===e.id?"#f5f5f5":"#FFF"}},onRowClick:C}));var U=function(){C&&C(null),T(),D(Object(j.a)())};return Object(b.useEffect)((function(){F&&U()}),[F]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"mb-3 d-flex flex-lg-row flex-column position-relative table-toolbar",children:Object(v.jsxs)("span",{className:"d-flex flex-wrap zindex-dropdown end-0 gap-2 gap-lg-3 align-items-center justify-content-end ms-auto",children:[k&&Object(v.jsx)(O.a,{icon:Object(v.jsx)(f.m,{}),variant:"outline-default",size:"sm",onClick:function(){return M(!B)},disabled:t,children:"Filters"}),R&&Object(v.jsx)(O.a,{icon:Object(v.jsx)(f.x,{}),variant:"outline-default",size:"sm",onClick:U,disabled:t,children:"Reset"}),y&&Object(v.jsx)(O.a,{icon:Object(v.jsx)(f.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.csv,t=S.map((function(e){var t=e.data,n=Object(a.a)(e,h),r=t?Object.values(t).reduce((function(e,t){return Object(s.a)(Object(s.a)({},e),t)}),{}):{},c=Object(s.a)({_id:n._id,Link:n.Link},r);return t?c:n}));Object(d.a)({data:t,fileName:"CSVformat",exportType:e})},disabled:t,children:"CSV"}),N&&Object(v.jsx)(O.a,{icon:Object(v.jsx)(f.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.xls,t=S.map((function(e){var t=e.data,n=Object(a.a)(e,m),r=t?Object.values(t).reduce((function(e,t){return Object(s.a)(Object(s.a)({},e),t)}),{}):{},c=Object(s.a)({_id:n._id,Link:n.Link},r);return t?c:n}));Object(d.a)({data:t,fileName:"ExcelFormat",exportType:e})},disabled:t,children:"Excel"})]})}),Object(v.jsx)(u.a,Object(s.a)({tableRef:_},H),"data-table-".concat(A))]})};C.defaultProps={loading:!1,actions:[],components:null,onRowClick:null,options:{},selectedRow:null,search:!0,filters:!1,filterOptions:[],setFilters:function(){return null},resetFilters:function(){return null},refresh:null,resetBtn:!0},t.a=C},636:function(e,t,n){"use strict";var a=n(1),r=n(12),c=n(17),o=n.n(c),i=n(2),s=n(19),l=n(3),u=["bsPrefix","variant","animation","size","as","className"],d=i.forwardRef((function(e,t){var n=e.bsPrefix,c=e.variant,i=e.animation,d=e.size,b=e.as,f=void 0===b?"div":b,j=e.className,p=Object(r.a)(e,u);n=Object(s.a)(n,"spinner");var O="".concat(n,"-").concat(i);return Object(l.jsx)(f,Object(a.a)(Object(a.a)({ref:t},p),{},{className:o()(j,O,d&&"".concat(O,"-").concat(d),c&&"text-".concat(c))}))}));d.displayName="Spinner",t.a=d},637:function(e,t,n){"use strict";var a=n(668),r=n.n(a),c=n(2),o=n(881),i=n(669),s=n(3);t.a=function(e){var t=e.htmlContent,n=e.preview,a=e.handlePreview,l=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=r.a.sanitize(t);l.current.innerHTML=e,l.current.querySelectorAll("pre").forEach((function(e){var t,n=(t=e.innerHTML,(new DOMParser).parseFromString(t,"text/html").body.textContent||"");e.innerHTML=n;var a=document.createElement("div");a.innerHTML=e.innerHTML,e.parentNode.replaceChild(a,e)}))}),[t]),Object(s.jsxs)("div",{className:"position-relative",children:[n&&Object(s.jsx)("div",{className:"w-100 d-flex justify-content-end mb-2",children:Object(s.jsx)(o.a,{variant:"primary",onClick:function(){return a()},children:Object(s.jsx)(i.a,{})})}),Object(s.jsx)("div",{ref:l,style:{whiteSpace:"pre-wrap",wordBreak:"break-word",border:"1px solid grey",borderRadius:"8px"}})]})}},638:function(e,t,n){"use strict";var a=n(627),r=n.n(a),c=n(628),o=n(13),i=n(2),s=n(683),l=n(881),u=n(636),d=n(630),b=n(3),f=function(e){var t=e.show,n=e.setShow,a=e.title,f=e.message,j=e.onConfirm,p=e.getReason,O=e.bodyHtml,v=e.loadingBtnText,h=e.footer,m=Object(i.useState)(!1),x=Object(o.a)(m,2),C=x[0],g=x[1],E=Object(i.useState)(""),w=Object(o.a)(E,2),y=w[0],N=w[1],k=function(){n(!1)},S=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,j(y);case 3:g(!1),n(!1),N("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(s.a,{show:t,onHide:k,backdrop:"static",keyboard:!1,children:[Object(b.jsx)(s.a.Header,{closeButton:!0,children:Object(b.jsx)(s.a.Title,{children:a})}),Object(b.jsxs)(s.a.Body,{children:[Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:f}}),O,p&&Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{id:"reason",name:"reason",label:"Reason",value:y,onChange:function(e){return N(e.target.value)}})})]}),h&&Object(b.jsxs)(s.a.Footer,{children:[Object(b.jsx)(l.a,{variant:"default",onClick:k,children:"Cancel"}),!p&&Object(b.jsxs)(l.a,{variant:"danger",onClick:S,children:[!C&&Object(b.jsx)("span",{children:"Confirm"}),C&&Object(b.jsxs)("span",{children:[v," ",Object(b.jsx)(u.a,{size:"sm",animation:"border"})]})]}),p&&Object(b.jsxs)(l.a,{disabled:""===y||y.length<=3,variant:"danger",onClick:S,children:[!C&&Object(b.jsx)("span",{children:"Confirm"}),C&&Object(b.jsxs)("span",{children:[v," ",Object(b.jsx)(u.a,{size:"sm",animation:"border"})]})]})]})]})};f.defaultProps={show:!1,setShow:function(){return null},title:"Give a title",message:"Your message here",onConfirm:function(){return null},getReason:!1,bodyHtml:Object(b.jsx)(b.Fragment,{}),loadingBtnText:"Deleting",footer:!0},t.a=f},663:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(2);function r(e){var t=function(e){var t=Object(a.useRef)(e);return t.current=e,t}(e);Object(a.useEffect)((function(){return function(){return t.current()}}),[])}},683:function(e,t,n){"use strict";var a,r=n(13),c=n(12),o=n(1),i=n(17),s=n.n(i),l=n(275),u=n(158),d=n(105),b=n(276);function f(e){if((!a&&0!==a||e)&&u.a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),a=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return a}var j=n(2);var p=n(106),O=n(274),v=n(663),h=n(278),m=n(277),x=n(216),C=n(273),g=n(34),E=Object(g.a)("modal-body"),w=n(161),y=n(19),N=n(3),k=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],S=j.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,r=e.contentClassName,i=e.centered,l=e.size,u=e.fullscreen,d=e.children,b=e.scrollable,f=Object(c.a)(e,k);n=Object(y.a)(n,"modal");var j="".concat(n,"-dialog"),p="string"===typeof u?"".concat(n,"-fullscreen-").concat(u):"".concat(n,"-fullscreen");return Object(N.jsx)("div",Object(o.a)(Object(o.a)({},f),{},{ref:t,className:s()(j,a,l&&"".concat(n,"-").concat(l),i&&"".concat(j,"-centered"),b&&"".concat(j,"-scrollable"),u&&p),children:Object(N.jsx)("div",{className:s()("".concat(n,"-content"),r),children:d})}))}));S.displayName="ModalDialog";var T=S,F=Object(g.a)("modal-footer"),R=n(279),_=["bsPrefix","className"],P=j.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,r=Object(c.a)(e,_);return n=Object(y.a)(n,"modal-header"),Object(N.jsx)(R.a,Object(o.a)(Object(o.a)({ref:t},r),{},{className:s()(a,n)}))}));P.displayName="ModalHeader",P.defaultProps={closeLabel:"Close",closeButton:!1};var L=P,A=n(134),D=Object(A.a)("h4"),z=Object(g.a)("modal-title",{Component:D}),I=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],B={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:T};function M(e){return Object(N.jsx)(C.a,Object(o.a)(Object(o.a)({},e),{},{timeout:null}))}function H(e){return Object(N.jsx)(C.a,Object(o.a)(Object(o.a)({},e),{},{timeout:null}))}var U=j.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.style,C=e.dialogClassName,g=e.contentClassName,E=e.children,k=e.dialogAs,S=e["aria-labelledby"],T=e.show,F=e.animation,R=e.backdrop,_=e.keyboard,P=e.onEscapeKeyDown,L=e.onShow,A=e.onHide,D=e.container,z=e.autoFocus,B=e.enforceFocus,U=e.restoreFocus,V=e.restoreFocusOptions,G=e.onEntered,W=e.onExit,Y=e.onExiting,K=e.onEnter,q=e.onEntering,J=e.onExited,Q=e.backdropClassName,X=e.manager,Z=Object(c.a)(e,I),$=Object(j.useState)({}),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=Object(j.useState)(!1),re=Object(r.a)(ae,2),ce=re[0],oe=re[1],ie=Object(j.useRef)(!1),se=Object(j.useRef)(!1),le=Object(j.useRef)(null),ue=Object(j.useState)(null),de=Object(r.a)(ue,2),be=de[0],fe=de[1],je=Object(O.a)(t,fe),pe=Object(p.a)(A),Oe=Object(y.b)();n=Object(y.a)(n,"modal");var ve=Object(j.useMemo)((function(){return{onHide:pe}}),[pe]);function he(){return X||Object(x.b)({isRTL:Oe})}function me(e){if(u.a){var t=he().getScrollbarWidth()>0,n=e.scrollHeight>Object(d.a)(e).documentElement.clientHeight;ne({paddingRight:t&&!n?f():void 0,paddingLeft:!t&&n?f():void 0})}}var xe=Object(p.a)((function(){be&&me(be.dialog)}));Object(v.a)((function(){Object(b.a)(window,"resize",xe),null==le.current||le.current()}));var Ce=function(){ie.current=!0},ge=function(e){ie.current&&be&&e.target===be.dialog&&(se.current=!0),ie.current=!1},Ee=function(){oe(!0),le.current=Object(h.a)(be.dialog,(function(){oe(!1)}))},we=function(e){"static"!==R?se.current||e.target!==e.currentTarget?se.current=!1:null==A||A():function(e){e.target===e.currentTarget&&Ee()}(e)},ye=Object(j.useCallback)((function(e){return Object(N.jsx)("div",Object(o.a)(Object(o.a)({},e),{},{className:s()("".concat(n,"-backdrop"),Q,!F&&"show")}))}),[F,Q,n]),Ne=Object(o.a)(Object(o.a)({},i),te);F||(Ne.display="block");return Object(N.jsx)(w.a.Provider,{value:ve,children:Object(N.jsx)(m.a,{show:T,ref:je,backdrop:R,container:D,keyboard:!0,autoFocus:z,enforceFocus:B,restoreFocus:U,restoreFocusOptions:V,onEscapeKeyDown:function(e){_||"static"!==R?_&&P&&P(e):(e.preventDefault(),Ee())},onShow:L,onHide:A,onEnter:function(e,t){e&&(e.style.display="block",me(e)),null==K||K(e,t)},onEntering:function(e,t){null==q||q(e,t),Object(l.a)(window,"resize",xe)},onEntered:G,onExit:function(e){null==le.current||le.current(),null==W||W(e)},onExiting:Y,onExited:function(e){e&&(e.style.display=""),null==J||J(e),Object(b.a)(window,"resize",xe)},manager:he(),transition:F?M:void 0,backdropTransition:F?H:void 0,renderBackdrop:ye,renderDialog:function(e){return Object(N.jsx)("div",Object(o.a)(Object(o.a)({role:"dialog"},e),{},{style:Ne,className:s()(a,n,ce&&"".concat(n,"-static")),onClick:R?we:void 0,onMouseUp:ge,"aria-labelledby":S,children:Object(N.jsx)(k,Object(o.a)(Object(o.a)({},Z),{},{onMouseDown:Ce,className:C,contentClassName:g,children:E}))}))}})})}));U.displayName="Modal",U.defaultProps=B;t.a=Object.assign(U,{Body:E,Header:L,Title:z,Footer:F,Dialog:T,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},684:function(e,t,n){"use strict";t.a=function(e){var t="https://www.google.com/search?q=".concat(encodeURIComponent(e));window.open(t,"_blank")}},720:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return C})),n.d(t,"e",(function(){return g})),n.d(t,"a",(function(){return E}));var a=n(627),r=n.n(a),c=n(628),o=n(632),i=n.n(o),s=n(268),l=n(208),u=n(48),d=function(){return{type:u.a.GET_EVENT_CONFERENCE_LIST_BEGIN}},b=function(e){return{type:u.a.GET_EVENT_CONFERENCE_LIST_SUCCESS,payload:e}},f=function(e){return{type:u.a.GET_EVENT_CONFERENCE_LIST_FAILURE,payload:e}},j=function(e){return{type:u.a.POST_EVENT_CONFERENCE_SUCCESS,payload:e}},p=function(e){return{type:u.a.POST_IMAGE_EVENT_CONFERENCE_SUCCESS,payload:e}},O=function(){return{type:u.a.UPDATE_EVENT_CONFERENCE_BEGIN}},v=function(e){return{type:u.a.UPDATE_EVENT_CONFERENCE_SUCCESS,payload:e}},h=function(e){return{type:u.a.UPDATE_EVENT_CONFERENCE_FAILURE,payload:e}};function m(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(l.a)()),t(d()),e.prev=2,e.next=5,i.a.get("".concat(s.b,"eventConference"));case 5:return n=e.sent,t(b(n.data.docs.data)),t(Object(l.b)({message:"Event Conference Retrieved Successfully",options:{variant:"success"}})),e.abrupt("return",n);case 11:return e.prev=11,e.t0=e.catch(2),t(f()),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}function x(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.a)()),n({type:u.a.POST_IMAGE_EVENT_CONFERENCE_BEGIN}),t.prev=2,t.next=5,i.a.post("".concat(s.b,"eventConference/uploads"),e);case 5:return a=t.sent,n(p(a.data)),n(Object(l.b)({message:"Event Conference Image Add Successfully",options:{variant:"success"}})),t.abrupt("return",a);case 11:return t.prev=11,t.t0=t.catch(2),n((r=void 0,{type:u.a.POST_IMAGE_EVENT_CONFERENCE_FAILURE,payload:r})),t.abrupt("return",!1);case 15:case"end":return t.stop()}var r}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function C(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.a)()),n({type:u.a.POST_EVENT_CONFERENCE_BEGIN}),t.prev=2,t.next=5,i.a.post("".concat(s.b,"eventConference"),e);case 5:return a=t.sent,n(j(a.data)),n(Object(l.b)({message:"Event Conference Add Successfully",options:{variant:"success"}})),t.abrupt("return",a);case 11:return t.prev=11,t.t0=t.catch(2),n((r=void 0,{type:u.a.POST_EVENT_CONFERENCE_FAILURE,payload:r})),t.abrupt("return",!1);case 15:case"end":return t.stop()}var r}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function g(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.a)()),n(O()),t.prev=2,a=e.id,t.next=6,i.a.put("".concat(s.b,"eventConference/").concat(a),e);case 6:return c=t.sent,n(v(c.data)),n(Object(l.b)({message:"Event Conference Update Successfully",options:{variant:"success"}})),t.abrupt("return",c);case 12:return t.prev=12,t.t0=t.catch(2),n(h()),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}function E(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.a)()),n(O()),t.prev=2,t.next=5,i.a.delete("".concat(s.b,"eventConference/").concat(e));case 5:return n(v()),n(Object(l.b)({message:"Event Conference Delete Successfully",options:{variant:"success"}})),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(2),n(h()),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}},841:function(e,t,n){"use strict";n.r(t);var a=n(627),r=n.n(a),c=n(628),o=n(13),i=n(215),s=n.n(i),l=n(2),u=n(269),d=n(623),b=n(73),f=n(37),j=n(638),p=n(635),O=n(637),v=n(270),h=n(629),m=n(102),x=n(684),C=n(720),g=n(268),E=n(3);t.default=Object(f.b)((function(e){return{fetching:e.eventConference.fetching}}),(function(e){return{getList:function(t){return e(Object(C.b)(t))},deleteEventConference:function(t){return e(Object(C.a)(t))}}}))((function(e){var t,n=e.fetching,a=e.getList,i=e.refresh,f=e.deleteEventConference,C=e.history,w=Object(l.useState)([]),y=Object(o.a)(w,2),N=y[0],k=y[1],S=Object(l.useState)(!1),T=Object(o.a)(S,2),F=T[0],R=T[1],_=Object(l.useRef)(null),P=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:200===(t=e.sent).status&&k(null===t||void 0===t||null===(n=t.data)||void 0===n||null===(c=n.docs)||void 0===c?void 0:c.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){P()}),[]);var L=Object(m.a)(),A=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(null===(t=_.current)||void 0===t?void 0:t._id);case 2:e.sent&&P();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){var t;return"".concat(g.d,"events/conference/").concat(null===e||void 0===e||null===(t=e.toLowerCase())||void 0===t?void 0:t.replace(/\s+/g,"-"))};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(d.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(E.jsxs)(d.a.Body,{className:"".concat(L&&"p-0"),children:[Object(E.jsx)("div",{className:"".concat(L?"my-3":"my-2"," d-flex justify-content-end"),children:Object(E.jsx)(h.a,{variant:"primary",icon:{type:b.a},onClick:function(){return C.push("event/eventConference/addEventConference")},children:"Add Event Conference"})}),Object(E.jsx)(p.a,{columns:[{width:300,title:"Event Conference Title",field:"eventConferenceTitle",customFilterAndSearch:function(e,t){return e===t.eventConferenceTitle},render:function(e){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("span",{style:{width:"300px"},children:Object(E.jsx)(E.Fragment,{children:e.eventConferenceTitle?e.eventConferenceTitle:"N/A"})})})}},{width:300,title:"Event Conference Link",field:"eventConferenceLink",render:function(e){var t,n;return Object(E.jsx)("span",{style:{width:"300px"},children:e.eventConferenceLink?Object(E.jsx)("a",{href:"".concat(g.d,"events/conference/").concat(null===e||void 0===e||null===(t=e.eventConferenceLink)||void 0===t||null===(n=t.toLowerCase())||void 0===n?void 0:n.replace(/\s+/g,"-")),target:"_blank",rel:"noopener noreferrer",children:D(null===e||void 0===e?void 0:e.eventConferenceLink)}):"N/A"})}},{width:300,title:"Event Conference Image",field:"eventConferenceImage",render:function(e){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(u.a,{src:g.a+(null===e||void 0===e?void 0:e.eventConferenceImage),name:null===e||void 0===e?void 0:e.eventConferenceTitle,size:"70",className:"ff-primary rounded-circle me-3"})})}},{width:300,title:"Event Conference Tags",field:"eventConferenceTags",render:function(e){var t,n;return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("span",{style:{width:"300px"},children:null===e||void 0===e||null===(t=e.eventConferenceTags)||void 0===t||null===(n=t.split(","))||void 0===n?void 0:n.map((function(e,t){return Object(E.jsx)("div",{className:"text-primary",onClick:function(){return function(e){Object(x.a)(e)}(e)},children:e},t)}))})})}},{width:300,title:" Meta Title",field:"metaTitle",render:function(e){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("span",{style:{width:"300px"},children:null===e||void 0===e?void 0:e.metaTitle})})}},{width:300,title:" Meta Description",field:"metaDescription",render:function(e){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("span",{style:{width:"300px"},children:null===e||void 0===e?void 0:e.metaDescription})})}},{title:"Event Conference Description",field:"eventConferenceDescription",render:function(e){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{style:{width:"auto",maxWidth:"900px",minWidth:"400px",height:"300px",overflow:"scroll"},children:Object(E.jsx)(O.a,{htmlContent:null===e||void 0===e?void 0:e.eventConferenceDescription})})})}},{width:500,title:"Date",field:"createdAt",render:function(e){return Object(E.jsx)("span",{style:{width:"500px"},children:e.createdAt?s()(e.createdAt).format("DD,MM, YYYY"):"N/A"})}},{width:300,title:"Status",field:"status",filtering:!1,render:function(e){var t="success",n="Published";return!1===e.status&&(t="warning",n="Draft"),Object(E.jsx)("span",{className:"text-".concat(t),children:n})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(E.jsx)(v.a,{menu:[{label:Object(E.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(E.jsx)(b.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return C.push("event/eventConference/".concat(e.data.eventConferenceLink,"/edit"),{data:e.data})}},{label:Object(E.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(E.jsx)(b.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){R(!0),_.current=e.data}}],iconSize:"large"})}},onRowClick:function(e,t){return null},loading:n,data:N,search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,refresh:i})]})}),Object(E.jsx)(j.a,{show:F,setShow:R,title:"Delete Event Conference",message:"Are you sure, you want to delete <b>".concat(null===(t=_.current)||void 0===t?void 0:t.eventConferenceTitle,"</b>?"),onConfirm:A})]})}))}}]);
//# sourceMappingURL=93.3d0dd6e6.chunk.js.map