(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[160],{629:function(e,t,r){"use strict";var n=r(1),a=(r(2),r(881)),c=r(3),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r={size:22};return"lg"===t?r.size=32:"sm"===t&&(r.size=18),Object(c.jsx)(e.type,Object(n.a)(Object(n.a)({},e.props),r))},o=function(e){var t=e.variant,r=e.className,n=e.onClick,o=e.size,s=e.isLoading,u=e.disabled,l=e.children,d=e.icon;return Object(c.jsx)(a.a,{variant:t,className:"btn-icon ".concat(o?"btn-icon-".concat(o):""," ").concat(s?"btn-icon-loading":""," ").concat(r),onClick:n,size:o,disabled:s||u,children:Object(c.jsxs)("span",{children:[i(d,o),l&&Object(c.jsx)("span",{children:l})]})})};o.defaultProps={variant:"default",className:"",size:"",onClick:function(){return null},isLoading:!1,disabled:!1,icon:null},t.a=o},635:function(e,t,r){"use strict";var n=r(12),a=r(627),c=r.n(a),i=r(628),o=r(13),s=r(1),u=r(671),l=r.n(u),d=r(674),f=r(2),b=r(73),p=r(756),j=r(159),O=r(629),v=r(3),x=["data"],h=["data"],m={FirstPage:Object(f.forwardRef)((function(e,t){return Object(v.jsx)(b.n,Object(s.a)(Object(s.a)({},e),{},{ref:t}))})),LastPage:Object(f.forwardRef)((function(e,t){return Object(v.jsx)(b.p,Object(s.a)(Object(s.a)({},e),{},{ref:t}))})),NextPage:Object(f.forwardRef)((function(e,t){return Object(v.jsx)(b.g,Object(s.a)(Object(s.a)({},e),{},{ref:t}))})),PreviousPage:Object(f.forwardRef)((function(e,t){return Object(v.jsx)(b.f,Object(s.a)(Object(s.a)({},e),{},{ref:t}))})),SortArrow:Object(f.forwardRef)((function(e,t){return Object(v.jsx)(b.d,Object(s.a)(Object(s.a)({},e),{},{ref:t}))}))},w=function(e){var t=e.loading,r=e.columns,a=e.actions,u=e.components,w=e.onRowClick,g=e.options,R=e.selectedRow,y=e.getList,C=(e.search,e.downloadcsv),S=e.downloadExcel,E=e.filters,k=(e.filterOptions,e.data),A=(e.setFilters,e.resetFilters),T=e.refresh,_=e.resetBtn,L=Object(f.createRef)(),N=Object(f.useState)(Object(p.a)()),F=Object(o.a)(N,2),P=F[0],z=F[1],D=Object(f.useState)(!1),U=Object(o.a)(D,2),I=U[0],B=U[1],M={isLoading:t,icons:m,style:{boxShadow:"none"},localization:{toolbar:{searchTooltip:"Search",searchPlaceholder:"Search"}},options:Object(s.a)({showTitle:!1,search:!0,toolbar:!0,filtering:I,draggable:!1,actionsColumnIndex:-1,pageSize:10,emptyRowsWhenPaging:!1,pageSizeOptions:[10,30,50,100,500]},g),columns:r,data:k||function(e){return new Promise(function(){var t=Object(i.a)(c.a.mark((function t(r,n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(Object(j.a)(e));case 3:if((a=t.sent).data){t.next=6;break}return t.abrupt("return",n());case 6:return t.abrupt("return",r({data:void 0!==a.data.docs?a.data.docs:a.data,page:void 0!==a.data.page?a.data.page-1:0,totalCount:void 0!==a.data.totalDocs?a.data.totalDocs:0}));case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",n(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,r){return t.apply(this,arguments)}}())},actions:a,onRowClick:w};u&&(M.components=u),w&&(M.options=Object(s.a)(Object(s.a)({},M.options),{},{rowStyle:function(e){return{backgroundColor:R&&R===e.id?"#f5f5f5":"#FFF"}},onRowClick:w}));var G=function(){w&&w(null),A(),z(Object(p.a)())};return Object(f.useEffect)((function(){T&&G()}),[T]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"mb-3 d-flex flex-lg-row flex-column position-relative table-toolbar",children:Object(v.jsxs)("span",{className:"d-flex flex-wrap zindex-dropdown end-0 gap-2 gap-lg-3 align-items-center justify-content-end ms-auto",children:[E&&Object(v.jsx)(O.a,{icon:Object(v.jsx)(b.m,{}),variant:"outline-default",size:"sm",onClick:function(){return B(!I)},disabled:t,children:"Filters"}),_&&Object(v.jsx)(O.a,{icon:Object(v.jsx)(b.x,{}),variant:"outline-default",size:"sm",onClick:G,disabled:t,children:"Reset"}),C&&Object(v.jsx)(O.a,{icon:Object(v.jsx)(b.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.csv,t=k.map((function(e){var t=e.data,r=Object(n.a)(e,x),a=t?Object.values(t).reduce((function(e,t){return Object(s.a)(Object(s.a)({},e),t)}),{}):{},c=Object(s.a)({_id:r._id,Link:r.Link},a);return t?c:r}));Object(d.a)({data:t,fileName:"CSVformat",exportType:e})},disabled:t,children:"CSV"}),S&&Object(v.jsx)(O.a,{icon:Object(v.jsx)(b.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.xls,t=k.map((function(e){var t=e.data,r=Object(n.a)(e,h),a=t?Object.values(t).reduce((function(e,t){return Object(s.a)(Object(s.a)({},e),t)}),{}):{},c=Object(s.a)({_id:r._id,Link:r.Link},a);return t?c:r}));Object(d.a)({data:t,fileName:"ExcelFormat",exportType:e})},disabled:t,children:"Excel"})]})}),Object(v.jsx)(l.a,Object(s.a)({tableRef:L},M),"data-table-".concat(P))]})};w.defaultProps={loading:!1,actions:[],components:null,onRowClick:null,options:{},selectedRow:null,search:!0,filters:!1,filterOptions:[],setFilters:function(){return null},resetFilters:function(){return null},refresh:null,resetBtn:!0},t.a=w},637:function(e,t,r){"use strict";var n=r(668),a=r.n(n),c=r(2),i=r(881),o=r(669),s=r(3);t.a=function(e){var t=e.htmlContent,r=e.preview,n=e.handlePreview,u=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=a.a.sanitize(t);u.current.innerHTML=e,u.current.querySelectorAll("pre").forEach((function(e){var t,r=(t=e.innerHTML,(new DOMParser).parseFromString(t,"text/html").body.textContent||"");e.innerHTML=r;var n=document.createElement("div");n.innerHTML=e.innerHTML,e.parentNode.replaceChild(n,e)}))}),[t]),Object(s.jsxs)("div",{className:"position-relative",children:[r&&Object(s.jsx)("div",{className:"w-100 d-flex justify-content-end mb-2",children:Object(s.jsx)(i.a,{variant:"primary",onClick:function(){return n()},children:Object(s.jsx)(o.a,{})})}),Object(s.jsx)("div",{ref:u,style:{whiteSpace:"pre-wrap",wordBreak:"break-word",border:"1px solid grey",borderRadius:"8px"}})]})}},705:function(e,t,r){"use strict";r.d(t,"c",(function(){return x})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return m})),r.d(t,"a",(function(){return w})),r.d(t,"b",(function(){return g}));var n=r(627),a=r.n(n),c=r(628),i=r(45),o=function(){return{type:i.a.GET_CARRER_LIST_BEGIN}},s=function(e){return{type:i.a.GET_CARRER_LIST_SUCCESS,payload:e}},u=function(e){return{type:i.a.GET_CARRER_LIST_FAILURE,payload:e}},l=function(e){return{type:i.a.POST_CARRER_SUCCESS,payload:e}},d=function(){return{type:i.a.UPDATE_CARRER_BEGIN}},f=function(e){return{type:i.a.UPDATE_CARRER_SUCCESS,payload:e}},b=function(e){return{type:i.a.UPDATE_CARRER_FAILURE,payload:e}},p=r(208),j=r(632),O=r.n(j),v=r(268);function x(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(p.a)()),t(o()),e.prev=2,e.next=5,O.a.get("".concat(v.b,"carrer"));case 5:return r=e.sent,t(s(r.data.docs.data)),t(Object(p.b)({message:"Carrer Retrieved Successfully",options:{variant:"success"}})),e.abrupt("return",r);case 11:return e.prev=11,e.t0=e.catch(2),t(u()),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}function h(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(Object(p.a)()),r({type:i.a.POST_CARRER_BEGIN}),t.prev=2,t.next=5,O.a.post("".concat(v.b,"carrer"),e);case 5:return n=t.sent,r(l(n.data)),r(Object(p.b)({message:"Carrer Add Successfully",options:{variant:"success"}})),t.abrupt("return",n);case 11:return t.prev=11,t.t0=t.catch(2),r((a=void 0,{type:i.a.POST_CARRER_FAILURE,payload:a})),t.abrupt("return",!1);case 15:case"end":return t.stop()}var a}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function m(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(Object(p.a)()),r(d()),t.prev=2,n=e.id,t.next=6,O.a.put("".concat(v.b,"carrer/").concat(n),e);case 6:return c=t.sent,r(f(c.data)),r(Object(p.b)({message:"carrer Update Successfully",options:{variant:"success"}})),t.abrupt("return",c);case 12:return t.prev=12,t.t0=t.catch(2),r(b()),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}function w(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(Object(p.a)()),r(d()),t.prev=2,t.next=5,O.a.delete("".concat(v.b,"carrer/").concat(e));case 5:return r(f()),r(Object(p.b)({message:"Carrer Delete Successfully",options:{variant:"success"}})),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(2),r(b()),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}function g(e){return function(){var t=Object(c.a)(a.a.mark((function t(r){var n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(Object(p.a)()),r(d()),t.prev=2,n=e.carrerid,c=e.userId,t.next=7,O.a.delete("".concat(v.b,"carrer/").concat(n,"/userdetails/").concat(c));case 7:return r(f()),r(Object(p.b)({message:"User Detail Carrer Delete Successfully",options:{variant:"success"}})),t.abrupt("return",!0);case 12:return t.prev=12,t.t0=t.catch(2),r(b()),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}},837:function(e,t,r){"use strict";r.r(t);var n=r(627),a=r.n(n),c=r(628),i=r(13),o=r(215),s=r.n(o),u=r(2),l=r(623),d=r(210),f=r(37),b=r(635),p=r(637),j=r(270),O=r(102),v=r(705),x=r(3);t.default=Object(f.b)((function(e){return{fetching:e.carrer.fetching}}),(function(e){return{getList:function(t){return e(Object(v.c)(t))}}}))((function(e){var t=e.fetching,r=e.getList,n=e.refresh,o=e.history,f=(e.deleteCarrer,Object(u.useState)([])),v=Object(i.a)(f,2),h=v[0],m=v[1],w=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:200===(t=e.sent).status&&m(null===t||void 0===t||null===(n=t.data)||void 0===n||null===(c=n.docs)||void 0===c?void 0:c.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){w()}),[]);var g=Object(O.a)();return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(l.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(x.jsx)(l.a.Body,{className:"".concat(g&&"p-0"),children:Object(x.jsx)(b.a,{columns:[{width:300,title:"Carrer Accordion Title",field:"carrerAccordionTitle",render:function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("span",{style:{width:"300px"},children:Object(x.jsx)(x.Fragment,{children:e.carrerAccordionTitle?e.carrerAccordionTitle:"N/A"})})})}},{title:"Carrer Accordion Description",field:"carrerAccordionDescription",render:function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{style:{width:"auto",maxWidth:"900px",minWidth:"400px",height:"300px",overflow:"scroll"},children:Object(x.jsx)(p.a,{htmlContent:null===e||void 0===e?void 0:e.carrerAccordionDescription})})})}},{width:500,title:"Date",field:"createdAt",render:function(e){return Object(x.jsx)("span",{style:{width:"500px"},children:e.createdAt?s()(e.createdAt).format("DD,MM, YYYY"):"N/A"})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(x.jsx)(j.a,{menu:[{label:Object(x.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(x.jsx)(d.d,{size:20,className:"me-2"})," User Detail"]}),onClick:function(){return o.push("/form/Carrer/userDetail",{data:e.data})}}],iconSize:"large"})}},onRowClick:function(e,t){return null},loading:t,data:h,search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,refresh:n})})})})}))}}]);
//# sourceMappingURL=160.53551e75.chunk.js.map