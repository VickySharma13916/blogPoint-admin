(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[65],{1173:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(2),c=n(22),s=n(756),o=n(271),i=n(627),l=n.n(i),u=n(628),d=n(215),b=n.n(d),j=n(269),f=n(623),p=n(73),O=n(37),m=n(635),h=n(270),v=n(629),x=n(102),g=n(739),y=n(268),R=n(638),E=n(3),w=Object(O.b)((function(e){return{fetching:e.pressRelease.fetching}}),(function(e){return{getList:function(t){return e(Object(g.b)(t))},deletePressRelease:function(t){return e(Object(g.a)(t))}}}))((function(e){var t,n=e.fetching,c=e.getList,s=e.refresh,o=e.deletePressRelease,i=e.history,d=Object(r.useState)([]),O=Object(a.a)(d,2),g=O[0],w=O[1],S=Object(r.useState)(!1),N=Object(a.a)(S,2),C=N[0],P=N[1],k=Object(r.useRef)(null),_=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:200===(t=e.sent).status&&w(null===t||void 0===t||null===(n=t.data)||void 0===n||null===(a=n.docs)||void 0===a?void 0:a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){_()}),[]);var A=Object(x.a)(),F=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(null===(t=k.current)||void 0===t?void 0:t._id);case 2:e.sent&&_();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(f.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(E.jsxs)(f.a.Body,{className:"".concat(A&&"p-0"),children:[Object(E.jsx)("div",{className:"".concat(A?"my-3":"my-2"," d-flex justify-content-end"),children:Object(E.jsx)(v.a,{variant:"primary",icon:{type:p.a},onClick:function(){return i.push("/pressRelease/addPressRelease")},children:"Add Press Release"})}),Object(E.jsx)(m.a,{columns:[{width:300,title:"Press Release Name",field:"pressReleaseName",customFilterAndSearch:function(e,t){return e===t.pressReleaseName},render:function(e){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("span",{style:{width:"300px"},children:Object(E.jsx)(E.Fragment,{children:e.pressReleaseName?e.pressReleaseName:"N/A"})})})}},{width:300,title:"Press Release Link",field:"pressReleaseLink",render:function(e){return Object(E.jsx)("span",{style:{width:"300px"},children:e.pressReleaseLink?e.pressReleaseLink:"N/A"})}},{width:300,title:"Press Release Image",field:"pressReleaseImage",render:function(e){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(j.a,{src:y.a+(null===e||void 0===e?void 0:e.pressReleaseImage),name:null===e||void 0===e?void 0:e.pressReleaseName,size:"70",className:"ff-primary rounded-circle me-3"})})}},{width:500,title:"Date",field:"createdAt",render:function(e){return Object(E.jsx)("span",{style:{width:"500px"},children:e.createdAt?b()(e.createdAt).format("DD,MM, YYYY"):"N/A"})}},{width:300,title:"Status",field:"status",filtering:!1,render:function(e){var t="success",n="Published";return!1===e.status&&(t="warning",n="Draft"),Object(E.jsx)("span",{className:"text-".concat(t),children:n})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(E.jsx)(h.a,{menu:[{label:Object(E.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(E.jsx)(p.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return i.push("/pressRelease/".concat(e.data._id,"/edit"),{data:e.data})}},{label:Object(E.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(E.jsx)(p.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){P(!0),k.current=e.data}}],iconSize:"large"})}},onRowClick:function(e,t){return null},loading:n,data:g,search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,refresh:s})]})}),Object(E.jsx)(R.a,{show:C,setShow:P,title:"Delete Press Release",message:"Are you sure, you want to delete <b>".concat(null===(t=k.current)||void 0===t?void 0:t.pressReleaseName,"</b>?"),onConfirm:F})]})}));t.default=function(){var e=Object(c.useHistory)(),t=Object(c.useRouteMatch)().path,n=Object(r.useState)(""),i=Object(a.a)(n,2),l=i[0],u=i[1];return Object(E.jsxs)(o.a,{id:"page--pressRelease",title:"Press Release",children:[Object(E.jsx)("div",{className:"d-flex align-items-start mb-3",children:Object(E.jsx)("h1",{className:"m-0",children:"Press Release"})}),Object(E.jsx)(c.Route,{path:"".concat(t,"/"),children:Object(E.jsx)(w,{refresh:l,setRefresh:function(){return u(Object(s.a)())},history:e})})]})}},629:function(e,t,n){"use strict";var a=n(1),r=(n(2),n(881)),c=n(3),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={size:22};return"lg"===t?n.size=32:"sm"===t&&(n.size=18),Object(c.jsx)(e.type,Object(a.a)(Object(a.a)({},e.props),n))},o=function(e){var t=e.variant,n=e.className,a=e.onClick,o=e.size,i=e.isLoading,l=e.disabled,u=e.children,d=e.icon;return Object(c.jsx)(r.a,{variant:t,className:"btn-icon ".concat(o?"btn-icon-".concat(o):""," ").concat(i?"btn-icon-loading":""," ").concat(n),onClick:a,size:o,disabled:i||l,children:Object(c.jsxs)("span",{children:[s(d,o),u&&Object(c.jsx)("span",{children:u})]})})};o.defaultProps={variant:"default",className:"",size:"",onClick:function(){return null},isLoading:!1,disabled:!1,icon:null},t.a=o},630:function(e,t,n){"use strict";var a=n(1),r=n(13),c=n(12),s=n(2),o=n.n(s),i=n(756),l=n(73),u=n(209),d=n(629),b=n(3),j=["className","onChange","onBlur","label","id","error","isClearable","hint","type"],f=o.a.forwardRef((function(e,t){var n=e.className,o=e.onChange,f=e.onBlur,p=e.label,O=e.id,m=e.error,h=e.isClearable,v=e.hint,x=e.type,g=Object(c.a)(e,j),y=Object(s.useState)(Object(i.a)()),R=Object(r.a)(y,2),E=R[0],w=R[1],S=Object(s.useState)(x),N=Object(r.a)(S,2),C=N[0],P=N[1];return Object(b.jsxs)("span",{className:"d-inline-block w-100 position-relative pt-2 pb-4 input__wrapper ".concat(m?"error":""),ref:t,children:[Object(b.jsx)("input",Object(a.a)({id:"input-".concat(O),type:C,className:"".concat(n).concat(h?" input-clearable":""),onChange:o,onBlur:f,placeholder:p,step:"any"},function(){var e=Object(a.a)({},g);return e.defaultValue=e.value||"",delete e.value,e}()),"input-".concat(E)),Object(b.jsx)("label",{htmlFor:"input-".concat(O),children:p}),Object(b.jsx)("span",{className:"input-error",children:m}),h&&Object(b.jsx)(l.e,{className:"input-clear-btn",size:18,onClick:function(){o({target:{value:""}}),w(Object(i.a)())}}),"password"===x&&Object(b.jsx)(d.a,{icon:"password"===C?Object(b.jsx)(u.d,{}):Object(b.jsx)(u.c,{}),variant:"outline-link",onClick:function(){return P("password"===C?"text":"password")},className:"p-0 m-0 position-absolute btn--show-password"}),""!==v&&Object(b.jsx)("span",{style:{fontSize:"12px",color:"#c1b1b1"},children:v})]})}));f.defaultProps={className:"",onChange:function(){return null},onBlur:function(){return null},label:"",id:Object(i.a)(),error:"",isClearable:!1,type:"text",hint:""},t.a=f},634:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},635:function(e,t,n){"use strict";var a=n(12),r=n(627),c=n.n(r),s=n(628),o=n(13),i=n(1),l=n(671),u=n.n(l),d=n(674),b=n(2),j=n(73),f=n(756),p=n(159),O=n(629),m=n(3),h=["data"],v=["data"],x={FirstPage:Object(b.forwardRef)((function(e,t){return Object(m.jsx)(j.n,Object(i.a)(Object(i.a)({},e),{},{ref:t}))})),LastPage:Object(b.forwardRef)((function(e,t){return Object(m.jsx)(j.p,Object(i.a)(Object(i.a)({},e),{},{ref:t}))})),NextPage:Object(b.forwardRef)((function(e,t){return Object(m.jsx)(j.g,Object(i.a)(Object(i.a)({},e),{},{ref:t}))})),PreviousPage:Object(b.forwardRef)((function(e,t){return Object(m.jsx)(j.f,Object(i.a)(Object(i.a)({},e),{},{ref:t}))})),SortArrow:Object(b.forwardRef)((function(e,t){return Object(m.jsx)(j.d,Object(i.a)(Object(i.a)({},e),{},{ref:t}))}))},g=function(e){var t=e.loading,n=e.columns,r=e.actions,l=e.components,g=e.onRowClick,y=e.options,R=e.selectedRow,E=e.getList,w=(e.search,e.downloadcsv),S=e.downloadExcel,N=e.filters,C=(e.filterOptions,e.data),P=(e.setFilters,e.resetFilters),k=e.refresh,_=e.resetBtn,A=Object(b.createRef)(),F=Object(b.useState)(Object(f.a)()),L=Object(o.a)(F,2),T=L[0],z=L[1],I=Object(b.useState)(!1),D=Object(o.a)(I,2),B=D[0],M=D[1],U={isLoading:t,icons:x,style:{boxShadow:"none"},localization:{toolbar:{searchTooltip:"Search",searchPlaceholder:"Search"}},options:Object(i.a)({showTitle:!1,search:!0,toolbar:!0,filtering:B,draggable:!1,actionsColumnIndex:-1,pageSize:10,emptyRowsWhenPaging:!1,pageSizeOptions:[10,30,50,100,500]},y),columns:n,data:C||function(e){return new Promise(function(){var t=Object(s.a)(c.a.mark((function t(n,a){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E(Object(p.a)(e));case 3:if((r=t.sent).data){t.next=6;break}return t.abrupt("return",a());case 6:return t.abrupt("return",n({data:void 0!==r.data.docs?r.data.docs:r.data,page:void 0!==r.data.page?r.data.page-1:0,totalCount:void 0!==r.data.totalDocs?r.data.totalDocs:0}));case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())},actions:r,onRowClick:g};l&&(U.components=l),g&&(U.options=Object(i.a)(Object(i.a)({},U.options),{},{rowStyle:function(e){return{backgroundColor:R&&R===e.id?"#f5f5f5":"#FFF"}},onRowClick:g}));var H=function(){g&&g(null),P(),z(Object(f.a)())};return Object(b.useEffect)((function(){k&&H()}),[k]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"mb-3 d-flex flex-lg-row flex-column position-relative table-toolbar",children:Object(m.jsxs)("span",{className:"d-flex flex-wrap zindex-dropdown end-0 gap-2 gap-lg-3 align-items-center justify-content-end ms-auto",children:[N&&Object(m.jsx)(O.a,{icon:Object(m.jsx)(j.m,{}),variant:"outline-default",size:"sm",onClick:function(){return M(!B)},disabled:t,children:"Filters"}),_&&Object(m.jsx)(O.a,{icon:Object(m.jsx)(j.x,{}),variant:"outline-default",size:"sm",onClick:H,disabled:t,children:"Reset"}),w&&Object(m.jsx)(O.a,{icon:Object(m.jsx)(j.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.csv,t=C.map((function(e){var t=e.data,n=Object(a.a)(e,h),r=t?Object.values(t).reduce((function(e,t){return Object(i.a)(Object(i.a)({},e),t)}),{}):{},c=Object(i.a)({_id:n._id,Link:n.Link},r);return t?c:n}));Object(d.a)({data:t,fileName:"CSVformat",exportType:e})},disabled:t,children:"CSV"}),S&&Object(m.jsx)(O.a,{icon:Object(m.jsx)(j.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.xls,t=C.map((function(e){var t=e.data,n=Object(a.a)(e,v),r=t?Object.values(t).reduce((function(e,t){return Object(i.a)(Object(i.a)({},e),t)}),{}):{},c=Object(i.a)({_id:n._id,Link:n.Link},r);return t?c:n}));Object(d.a)({data:t,fileName:"ExcelFormat",exportType:e})},disabled:t,children:"Excel"})]})}),Object(m.jsx)(u.a,Object(i.a)({tableRef:A},U),"data-table-".concat(T))]})};g.defaultProps={loading:!1,actions:[],components:null,onRowClick:null,options:{},selectedRow:null,search:!0,filters:!1,filterOptions:[],setFilters:function(){return null},resetFilters:function(){return null},refresh:null,resetBtn:!0},t.a=g},636:function(e,t,n){"use strict";var a=n(1),r=n(12),c=n(17),s=n.n(c),o=n(2),i=n(19),l=n(3),u=["bsPrefix","variant","animation","size","as","className"],d=o.forwardRef((function(e,t){var n=e.bsPrefix,c=e.variant,o=e.animation,d=e.size,b=e.as,j=void 0===b?"div":b,f=e.className,p=Object(r.a)(e,u);n=Object(i.a)(n,"spinner");var O="".concat(n,"-").concat(o);return Object(l.jsx)(j,Object(a.a)(Object(a.a)({ref:t},p),{},{className:s()(f,O,d&&"".concat(O,"-").concat(d),c&&"text-".concat(c))}))}));d.displayName="Spinner",t.a=d},638:function(e,t,n){"use strict";var a=n(627),r=n.n(a),c=n(628),s=n(13),o=n(2),i=n(683),l=n(881),u=n(636),d=n(630),b=n(3),j=function(e){var t=e.show,n=e.setShow,a=e.title,j=e.message,f=e.onConfirm,p=e.getReason,O=e.bodyHtml,m=e.loadingBtnText,h=e.footer,v=Object(o.useState)(!1),x=Object(s.a)(v,2),g=x[0],y=x[1],R=Object(o.useState)(""),E=Object(s.a)(R,2),w=E[0],S=E[1],N=function(){n(!1)},C=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,f(w);case 3:y(!1),n(!1),S("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(i.a,{show:t,onHide:N,backdrop:"static",keyboard:!1,children:[Object(b.jsx)(i.a.Header,{closeButton:!0,children:Object(b.jsx)(i.a.Title,{children:a})}),Object(b.jsxs)(i.a.Body,{children:[Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:j}}),O,p&&Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{id:"reason",name:"reason",label:"Reason",value:w,onChange:function(e){return S(e.target.value)}})})]}),h&&Object(b.jsxs)(i.a.Footer,{children:[Object(b.jsx)(l.a,{variant:"default",onClick:N,children:"Cancel"}),!p&&Object(b.jsxs)(l.a,{variant:"danger",onClick:C,children:[!g&&Object(b.jsx)("span",{children:"Confirm"}),g&&Object(b.jsxs)("span",{children:[m," ",Object(b.jsx)(u.a,{size:"sm",animation:"border"})]})]}),p&&Object(b.jsxs)(l.a,{disabled:""===w||w.length<=3,variant:"danger",onClick:C,children:[!g&&Object(b.jsx)("span",{children:"Confirm"}),g&&Object(b.jsxs)("span",{children:[m," ",Object(b.jsx)(u.a,{size:"sm",animation:"border"})]})]})]})]})};j.defaultProps={show:!1,setShow:function(){return null},title:"Give a title",message:"Your message here",onConfirm:function(){return null},getReason:!1,bodyHtml:Object(b.jsx)(b.Fragment,{}),loadingBtnText:"Deleting",footer:!0},t.a=j},646:function(e,t,n){"use strict";var a=n(4),r=n(6),c=n(2),s=n(634),o=n(156),i=n(368),l=n(648),u=n(211),d=n(3),b=["className","component"];var j=n(566),f=n(299),p=n(103),O=Object(f.b)(),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themeId,n=e.defaultTheme,j=e.defaultClassName,f=void 0===j?"MuiBox-root":j,p=e.generateClassName,O=Object(o.a)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(i.a),m=c.forwardRef((function(e,c){var o=Object(u.a)(n),i=Object(l.a)(e),j=i.className,m=i.component,h=void 0===m?"div":m,v=Object(r.a)(i,b);return Object(d.jsx)(O,Object(a.a)({as:h,ref:c,className:Object(s.a)(j,p?p(f):f),theme:t&&o[t]||o},v))}));return m}({themeId:p.a,defaultTheme:O,defaultClassName:"MuiBox-root",generateClassName:j.a.generate});t.a=m},648:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(26),r=n(4),c=n(6),s=n(266),o=n(157),i=["sx"];function l(e){var t,n=e.sx,l=function(e){var t,n,a={systemProps:{},otherProps:{}},r=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:o.a;return Object.keys(e).forEach((function(t){r[t]?a.systemProps[t]=e[t]:a.otherProps[t]=e[t]})),a}(Object(c.a)(e,i)),u=l.systemProps,d=l.otherProps;return t=Array.isArray(n)?[u].concat(Object(a.a)(n)):"function"===typeof n?function(){var e=n.apply(void 0,arguments);return Object(s.b)(e)?Object(r.a)({},u,e):u}:Object(r.a)({},u,n),Object(r.a)({},d,{sx:t})}},663:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(2);function r(e){var t=function(e){var t=Object(a.useRef)(e);return t.current=e,t}(e);Object(a.useEffect)((function(){return function(){return t.current()}}),[])}},683:function(e,t,n){"use strict";var a,r=n(13),c=n(12),s=n(1),o=n(17),i=n.n(o),l=n(275),u=n(158),d=n(105),b=n(276);function j(e){if((!a&&0!==a||e)&&u.a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),a=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return a}var f=n(2);var p=n(106),O=n(274),m=n(663),h=n(278),v=n(277),x=n(216),g=n(273),y=n(34),R=Object(y.a)("modal-body"),E=n(161),w=n(19),S=n(3),N=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],C=f.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,r=e.contentClassName,o=e.centered,l=e.size,u=e.fullscreen,d=e.children,b=e.scrollable,j=Object(c.a)(e,N);n=Object(w.a)(n,"modal");var f="".concat(n,"-dialog"),p="string"===typeof u?"".concat(n,"-fullscreen-").concat(u):"".concat(n,"-fullscreen");return Object(S.jsx)("div",Object(s.a)(Object(s.a)({},j),{},{ref:t,className:i()(f,a,l&&"".concat(n,"-").concat(l),o&&"".concat(f,"-centered"),b&&"".concat(f,"-scrollable"),u&&p),children:Object(S.jsx)("div",{className:i()("".concat(n,"-content"),r),children:d})}))}));C.displayName="ModalDialog";var P=C,k=Object(y.a)("modal-footer"),_=n(279),A=["bsPrefix","className"],F=f.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,r=Object(c.a)(e,A);return n=Object(w.a)(n,"modal-header"),Object(S.jsx)(_.a,Object(s.a)(Object(s.a)({ref:t},r),{},{className:i()(a,n)}))}));F.displayName="ModalHeader",F.defaultProps={closeLabel:"Close",closeButton:!1};var L=F,T=n(134),z=Object(T.a)("h4"),I=Object(y.a)("modal-title",{Component:z}),D=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],B={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:P};function M(e){return Object(S.jsx)(g.a,Object(s.a)(Object(s.a)({},e),{},{timeout:null}))}function U(e){return Object(S.jsx)(g.a,Object(s.a)(Object(s.a)({},e),{},{timeout:null}))}var H=f.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,o=e.style,g=e.dialogClassName,y=e.contentClassName,R=e.children,N=e.dialogAs,C=e["aria-labelledby"],P=e.show,k=e.animation,_=e.backdrop,A=e.keyboard,F=e.onEscapeKeyDown,L=e.onShow,T=e.onHide,z=e.container,I=e.autoFocus,B=e.enforceFocus,H=e.restoreFocus,G=e.restoreFocusOptions,Y=e.onEntered,K=e.onExit,W=e.onExiting,V=e.onEnter,J=e.onEntering,q=e.onExited,Q=e.backdropClassName,X=e.manager,Z=Object(c.a)(e,D),$=Object(f.useState)({}),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=Object(f.useState)(!1),re=Object(r.a)(ae,2),ce=re[0],se=re[1],oe=Object(f.useRef)(!1),ie=Object(f.useRef)(!1),le=Object(f.useRef)(null),ue=Object(f.useState)(null),de=Object(r.a)(ue,2),be=de[0],je=de[1],fe=Object(O.a)(t,je),pe=Object(p.a)(T),Oe=Object(w.b)();n=Object(w.a)(n,"modal");var me=Object(f.useMemo)((function(){return{onHide:pe}}),[pe]);function he(){return X||Object(x.b)({isRTL:Oe})}function ve(e){if(u.a){var t=he().getScrollbarWidth()>0,n=e.scrollHeight>Object(d.a)(e).documentElement.clientHeight;ne({paddingRight:t&&!n?j():void 0,paddingLeft:!t&&n?j():void 0})}}var xe=Object(p.a)((function(){be&&ve(be.dialog)}));Object(m.a)((function(){Object(b.a)(window,"resize",xe),null==le.current||le.current()}));var ge=function(){oe.current=!0},ye=function(e){oe.current&&be&&e.target===be.dialog&&(ie.current=!0),oe.current=!1},Re=function(){se(!0),le.current=Object(h.a)(be.dialog,(function(){se(!1)}))},Ee=function(e){"static"!==_?ie.current||e.target!==e.currentTarget?ie.current=!1:null==T||T():function(e){e.target===e.currentTarget&&Re()}(e)},we=Object(f.useCallback)((function(e){return Object(S.jsx)("div",Object(s.a)(Object(s.a)({},e),{},{className:i()("".concat(n,"-backdrop"),Q,!k&&"show")}))}),[k,Q,n]),Se=Object(s.a)(Object(s.a)({},o),te);k||(Se.display="block");return Object(S.jsx)(E.a.Provider,{value:me,children:Object(S.jsx)(v.a,{show:P,ref:fe,backdrop:_,container:z,keyboard:!0,autoFocus:I,enforceFocus:B,restoreFocus:H,restoreFocusOptions:G,onEscapeKeyDown:function(e){A||"static"!==_?A&&F&&F(e):(e.preventDefault(),Re())},onShow:L,onHide:T,onEnter:function(e,t){e&&(e.style.display="block",ve(e)),null==V||V(e,t)},onEntering:function(e,t){null==J||J(e,t),Object(l.a)(window,"resize",xe)},onEntered:Y,onExit:function(e){null==le.current||le.current(),null==K||K(e)},onExiting:W,onExited:function(e){e&&(e.style.display=""),null==q||q(e),Object(b.a)(window,"resize",xe)},manager:he(),transition:k?M:void 0,backdropTransition:k?U:void 0,renderBackdrop:we,renderDialog:function(e){return Object(S.jsx)("div",Object(s.a)(Object(s.a)({role:"dialog"},e),{},{style:Se,className:i()(a,n,ce&&"".concat(n,"-static")),onClick:_?Ee:void 0,onMouseUp:ye,"aria-labelledby":C,children:Object(S.jsx)(N,Object(s.a)(Object(s.a)({},Z),{},{onMouseDown:ge,className:g,contentClassName:y,children:R}))}))}})})}));H.displayName="Modal",H.defaultProps=B;t.a=Object.assign(H,{Body:R,Header:L,Title:I,Footer:k,Dialog:P,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},739:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return y})),n.d(t,"a",(function(){return R}));var a=n(627),r=n.n(a),c=n(628),s=n(632),o=n.n(s),i=n(268),l=n(208),u=n(54),d=function(){return{type:u.a.GET_PRESS_RELEASE_LIST_BEGIN}},b=function(e){return{type:u.a.GET_PRESS_RELEASE_LIST_SUCCESS,payload:e}},j=function(e){return{type:u.a.GET_PRESS_RELEASE_LIST_FAILURE,payload:e}},f=function(e){return{type:u.a.POST_PRESS_RELEASE_SUCCESS,payload:e}},p=function(){return{type:u.a.UPDATE_PRESS_RELEASE_BEGIN}},O=function(e){return{type:u.a.UPDATE_PRESS_RELEASE_SUCCESS,payload:e}},m=function(e){return{type:u.a.UPDATE_PRESS_RELEASE_FAILURE,payload:e}},h=function(e){return{type:u.a.POST_IMAGE_PRESS_RELEASE_SUCCESS,payload:e}};function v(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(l.a)()),t(d()),e.prev=2,e.next=5,o.a.get("".concat(i.b,"pressRelease"));case 5:return n=e.sent,t(b(n.data.docs.data)),t(Object(l.b)({message:"Press Release Retrieved Successfully",options:{variant:"success"}})),e.abrupt("return",n);case 11:return e.prev=11,e.t0=e.catch(2),t(j()),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}function x(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.a)()),n({type:u.a.POST_IMAGE_PRESS_RELEASE_BEGIN}),t.prev=2,t.next=5,o.a.post("".concat(i.b,"pressRelease/uploads"),e);case 5:return a=t.sent,n(h(a.data)),n(Object(l.b)({message:"Press Release Image Add Successfully",options:{variant:"success"}})),t.abrupt("return",a);case 11:return t.prev=11,t.t0=t.catch(2),n((r=void 0,{type:u.a.POST_IMAGE_PRESS_RELEASE_FAILURE,payload:r})),t.abrupt("return",!1);case 15:case"end":return t.stop()}var r}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function g(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.a)()),n({type:u.a.POST_PRESS_RELEASE_BEGIN}),t.prev=2,t.next=5,o.a.post("".concat(i.b,"pressRelease"),e);case 5:return a=t.sent,n(f(a.data)),n(Object(l.b)({message:"Press Release Add Successfully",options:{variant:"success"}})),t.abrupt("return",a);case 11:return t.prev=11,t.t0=t.catch(2),n((r=void 0,{type:u.a.POST_PRESS_RELEASE_FAILURE,payload:r})),t.abrupt("return",!1);case 15:case"end":return t.stop()}var r}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function y(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.a)()),n(p()),t.prev=2,a=e.id,t.next=6,o.a.put("".concat(i.b,"pressRelease/").concat(a),e);case 6:return c=t.sent,n(O(c.data)),n(Object(l.b)({message:"Press Release Update Successfully",options:{variant:"success"}})),t.abrupt("return",c);case 12:return t.prev=12,t.t0=t.catch(2),n(m()),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}function R(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.a)()),n(p()),t.prev=2,t.next=5,o.a.delete("".concat(i.b,"pressRelease/").concat(e));case 5:return n(O()),n(Object(l.b)({message:"Press Release Delete Successfully",options:{variant:"success"}})),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(2),n(m()),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=65.d9c588fe.chunk.js.map