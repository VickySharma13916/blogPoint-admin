(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[142],{629:function(e,t,n){"use strict";var r=n(1),a=(n(2),n(881)),c=n(3),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={size:22};return"lg"===t?n.size=32:"sm"===t&&(n.size=18),Object(c.jsx)(e.type,Object(r.a)(Object(r.a)({},e.props),n))},s=function(e){var t=e.variant,n=e.className,r=e.onClick,s=e.size,o=e.isLoading,u=e.disabled,l=e.children,p=e.icon;return Object(c.jsx)(a.a,{variant:t,className:"btn-icon ".concat(s?"btn-icon-".concat(s):""," ").concat(o?"btn-icon-loading":""," ").concat(n),onClick:r,size:s,disabled:o||u,children:Object(c.jsxs)("span",{children:[i(p,s),l&&Object(c.jsx)("span",{children:l})]})})};s.defaultProps={variant:"default",className:"",size:"",onClick:function(){return null},isLoading:!1,disabled:!1,icon:null},t.a=s},634:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},635:function(e,t,n){"use strict";var r=n(12),a=n(627),c=n.n(a),i=n(628),s=n(13),o=n(1),u=n(671),l=n.n(u),p=n(674),d=n(2),f=n(73),b=n(756),j=n(159),h=n(629),O=n(3),v=["data"],m=["data"],x={FirstPage:Object(d.forwardRef)((function(e,t){return Object(O.jsx)(f.n,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),LastPage:Object(d.forwardRef)((function(e,t){return Object(O.jsx)(f.p,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),NextPage:Object(d.forwardRef)((function(e,t){return Object(O.jsx)(f.g,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),PreviousPage:Object(d.forwardRef)((function(e,t){return Object(O.jsx)(f.f,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),SortArrow:Object(d.forwardRef)((function(e,t){return Object(O.jsx)(f.d,Object(o.a)(Object(o.a)({},e),{},{ref:t}))}))},w=function(e){var t=e.loading,n=e.columns,a=e.actions,u=e.components,w=e.onRowClick,g=e.options,y=e.selectedRow,E=e.getList,P=(e.search,e.downloadcsv),S=e.downloadExcel,T=e.filters,k=(e.filterOptions,e.data),A=(e.setFilters,e.resetFilters),_=e.refresh,C=e.resetBtn,I=Object(d.createRef)(),R=Object(d.useState)(Object(b.a)()),F=Object(s.a)(R,2),N=F[0],L=F[1],W=Object(d.useState)(!1),z=Object(s.a)(W,2),D=z[0],U=z[1],H={isLoading:t,icons:x,style:{boxShadow:"none"},localization:{toolbar:{searchTooltip:"Search",searchPlaceholder:"Search"}},options:Object(o.a)({showTitle:!1,search:!0,toolbar:!0,filtering:D,draggable:!1,actionsColumnIndex:-1,pageSize:10,emptyRowsWhenPaging:!1,pageSizeOptions:[10,30,50,100,500]},g),columns:n,data:k||function(e){return new Promise(function(){var t=Object(i.a)(c.a.mark((function t(n,r){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E(Object(j.a)(e));case 3:if((a=t.sent).data){t.next=6;break}return t.abrupt("return",r());case 6:return t.abrupt("return",n({data:void 0!==a.data.docs?a.data.docs:a.data,page:void 0!==a.data.page?a.data.page-1:0,totalCount:void 0!==a.data.totalDocs?a.data.totalDocs:0}));case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",r(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())},actions:a,onRowClick:w};u&&(H.components=u),w&&(H.options=Object(o.a)(Object(o.a)({},H.options),{},{rowStyle:function(e){return{backgroundColor:y&&y===e.id?"#f5f5f5":"#FFF"}},onRowClick:w}));var B=function(){w&&w(null),A(),L(Object(b.a)())};return Object(d.useEffect)((function(){_&&B()}),[_]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"mb-3 d-flex flex-lg-row flex-column position-relative table-toolbar",children:Object(O.jsxs)("span",{className:"d-flex flex-wrap zindex-dropdown end-0 gap-2 gap-lg-3 align-items-center justify-content-end ms-auto",children:[T&&Object(O.jsx)(h.a,{icon:Object(O.jsx)(f.m,{}),variant:"outline-default",size:"sm",onClick:function(){return U(!D)},disabled:t,children:"Filters"}),C&&Object(O.jsx)(h.a,{icon:Object(O.jsx)(f.x,{}),variant:"outline-default",size:"sm",onClick:B,disabled:t,children:"Reset"}),P&&Object(O.jsx)(h.a,{icon:Object(O.jsx)(f.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=p.a.types.csv,t=k.map((function(e){var t=e.data,n=Object(r.a)(e,v),a=t?Object.values(t).reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),t)}),{}):{},c=Object(o.a)({_id:n._id,Link:n.Link},a);return t?c:n}));Object(p.a)({data:t,fileName:"CSVformat",exportType:e})},disabled:t,children:"CSV"}),S&&Object(O.jsx)(h.a,{icon:Object(O.jsx)(f.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=p.a.types.xls,t=k.map((function(e){var t=e.data,n=Object(r.a)(e,m),a=t?Object.values(t).reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),t)}),{}):{},c=Object(o.a)({_id:n._id,Link:n.Link},a);return t?c:n}));Object(p.a)({data:t,fileName:"ExcelFormat",exportType:e})},disabled:t,children:"Excel"})]})}),Object(O.jsx)(l.a,Object(o.a)({tableRef:I},H),"data-table-".concat(N))]})};w.defaultProps={loading:!1,actions:[],components:null,onRowClick:null,options:{},selectedRow:null,search:!0,filters:!1,filterOptions:[],setFilters:function(){return null},resetFilters:function(){return null},refresh:null,resetBtn:!0},t.a=w},646:function(e,t,n){"use strict";var r=n(4),a=n(6),c=n(2),i=n(634),s=n(156),o=n(368),u=n(648),l=n(211),p=n(3),d=["className","component"];var f=n(566),b=n(299),j=n(103),h=Object(b.b)(),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themeId,n=e.defaultTheme,f=e.defaultClassName,b=void 0===f?"MuiBox-root":f,j=e.generateClassName,h=Object(s.a)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(o.a),O=c.forwardRef((function(e,c){var s=Object(l.a)(n),o=Object(u.a)(e),f=o.className,O=o.component,v=void 0===O?"div":O,m=Object(a.a)(o,d);return Object(p.jsx)(h,Object(r.a)({as:v,ref:c,className:Object(i.a)(f,j?j(b):b),theme:t&&s[t]||s},m))}));return O}({themeId:j.a,defaultTheme:h,defaultClassName:"MuiBox-root",generateClassName:f.a.generate});t.a=O},648:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(26),a=n(4),c=n(6),i=n(266),s=n(157),o=["sx"];function u(e){var t,n=e.sx,u=function(e){var t,n,r={systemProps:{},otherProps:{}},a=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:s.a;return Object.keys(e).forEach((function(t){a[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r}(Object(c.a)(e,o)),l=u.systemProps,p=u.otherProps;return t=Array.isArray(n)?[l].concat(Object(r.a)(n)):"function"===typeof n?function(){var e=n.apply(void 0,arguments);return Object(i.b)(e)?Object(a.a)({},l,e):l}:Object(a.a)({},l,n),Object(a.a)({},p,{sx:t})}},696:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return m})),n.d(t,"f",(function(){return x})),n.d(t,"e",(function(){return w})),n.d(t,"g",(function(){return g})),n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return E}));var r=n(627),a=n.n(r),c=n(628),i=n(43),s=function(e){return{type:i.a.POST_WHITEPAPER_SUCCESS,payload:e}},o=function(){return{type:i.a.UPDATE_WHITEPAPER_BEGIN}},u=function(e){return{type:i.a.UPDATE_WHITEPAPER_SUCCESS,payload:e}},l=function(e){return{type:i.a.UPDATE_WHITEPAPER_FAILURE,payload:e}},p=function(){return{type:i.a.POST_IMAGE_WHITEPAPER_BEGIN}},d=function(e){return{type:i.a.POST_IMAGE_WHITEPAPER_SUCCESS,payload:e}},f=function(e){return{type:i.a.POST_IMAGE_WHITEPAPER_FAILURE,payload:e}},b=n(208),j=n(632),h=n.n(j),O=n(268);function v(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(b.a)()),t({type:i.a.GET_WHITEPAPER_LIST_BEGIN}),e.prev=2,e.next=5,h.a.get("".concat(O.b,"whitepapers"));case 5:return n=e.sent,t((a=n.data,{type:i.a.GET_WHITEPAPER_LIST_SUCCESS,payload:a})),t(Object(b.b)({message:"Whitepapers Retrieved Successfully",options:{variant:"success"}})),e.abrupt("return",n);case 11:return e.prev=11,e.t0=e.catch(2),t((r=void 0,{type:i.a.GET_WHITEPAPER_LIST_FAILURE,payload:r})),e.abrupt("return",!1);case 15:case"end":return e.stop()}var r,a}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}function m(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(b.a)()),n(p()),t.prev=2,t.next=5,h.a.post("".concat(O.b,"whitepapers/uploads"),e);case 5:return r=t.sent,n(d(r.data)),n(Object(b.b)({message:"Whitepaper Image Add Successfully",options:{variant:"success"}})),t.abrupt("return",r);case 11:return t.prev=11,t.t0=t.catch(2),n(f()),t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function x(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(b.a)()),n(p()),t.prev=2,t.next=5,h.a.post("".concat(O.b,"whitepapers/uploadFile"),e);case 5:return r=t.sent,n(d(r.data)),n(Object(b.b)({message:"Whitepaper File Add Successfully",options:{variant:"success"}})),t.abrupt("return",r);case 11:return t.prev=11,t.t0=t.catch(2),n(f()),t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function w(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(b.a)()),n({type:i.a.POST_WHITEPAPER_BEGIN}),t.prev=2,t.next=5,h.a.post("".concat(O.b,"whitepapers"),e);case 5:return o=t.sent,n(s(null===o||void 0===o||null===(r=o.data)||void 0===r||null===(c=r.docs)||void 0===c?void 0:c.data)),n(Object(b.b)({message:"Whitepaper Add Successfully",options:{variant:"success"}})),t.abrupt("return",o);case 11:return t.prev=11,t.t0=t.catch(2),n((a=void 0,{type:i.a.POST_WHITEPAPER_FAILURE,payload:a})),t.abrupt("return",!1);case 15:case"end":return t.stop()}var a}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function g(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(b.a)()),n(o()),t.prev=2,r=e.id,t.next=6,h.a.put("".concat(O.b,"whitepapers/").concat(r),e);case 6:return c=t.sent,n(u(c.data)),n(Object(b.b)({message:"Whitepaper Update Successfully",options:{variant:"success"}})),t.abrupt("return",c);case 12:return t.prev=12,t.t0=t.catch(2),n(l()),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}function y(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(b.a)()),n(o()),t.prev=2,t.next=5,h.a.delete("".concat(O.b,"whitepapers/").concat(e));case 5:return n(u()),n(Object(b.b)({message:"Whitepaper Delete Successfully",options:{variant:"success"}})),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(2),n(l()),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}function E(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(b.a)()),n(o()),t.prev=2,r=e.carrerid,c=e.userId,t.next=7,h.a.delete("".concat(O.b,"whitepapers/").concat(r,"/userdetails/").concat(c));case 7:return n(u()),n(Object(b.b)({message:"User Detail whitepapers Delete Successfully",options:{variant:"success"}})),t.abrupt("return",!0);case 12:return t.prev=12,t.t0=t.catch(2),n(l()),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}},839:function(e,t,n){"use strict";n.r(t);var r=n(627),a=n.n(r),c=n(628),i=n(13),s=n(215),o=n.n(s),u=n(2),l=n(269),p=n(623),d=n(210),f=n(37),b=n(635),j=n(270),h=n(102),O=n(696),v=n(268),m=n(3);t.default=Object(f.b)((function(e){return{fetching:e.whitepaper.fetching}}),(function(e){return{getList:function(t){return e(Object(O.c)(t))}}}))((function(e){var t=e.fetching,n=e.getList,r=e.filters,s=e.setFilters,f=e.resetFilters,O=e.refresh,x=e.history,w=Object(u.useState)([]),g=Object(i.a)(w,2),y=g[0],E=g[1],P=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:200===(t=e.sent).status&&E(null===t||void 0===t||null===(r=t.data)||void 0===r||null===(c=r.docs)||void 0===c?void 0:c.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){P()}),[]);var S=Object(h.a)(),T=function(e){var t;return"".concat(v.d,"whitepapers/").concat(null===e||void 0===e||null===(t=e.toLowerCase())||void 0===t?void 0:t.replace(/\s+/g,"-"))};return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(p.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(m.jsx)(p.a.Body,{className:"".concat(S&&"p-0"),children:Object(m.jsx)(b.a,{columns:[{width:300,title:"whitepaper Title",field:"whitepaperTitle",customFilterAndSearch:function(e,t){return e===t.whitepaperTitle},render:function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("span",{style:{width:"300px"},children:Object(m.jsx)(m.Fragment,{children:e.whitepaperTitle?e.whitepaperTitle:"N/A"})})})}},{width:300,title:"whitepaper Image",field:"whitepaperImage",render:function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(l.a,{src:v.a+(null===e||void 0===e?void 0:e.whitepaperImage),name:null===e||void 0===e?void 0:e.whitepaperTitle,size:"70",className:"ff-primary rounded-circle me-3"})})}},{width:300,title:"whitepaper link",field:"whitepaperLink",render:function(e){var t,n;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("span",{style:{width:"300px"},children:e.whitepaperLink?Object(m.jsx)("a",{href:"".concat(v.d,"whitepapers/").concat(null===e||void 0===e||null===(t=e.whitepaperLink)||void 0===t||null===(n=t.toLowerCase())||void 0===n?void 0:n.replace(/\s+/g,"-")),target:"_blank",rel:"noopener noreferrer",children:T(null===e||void 0===e?void 0:e.whitepaperLink)}):"N/A"})})}},{width:500,title:"Date",field:"createdAt",render:function(e){return Object(m.jsx)("span",{style:{width:"500px"},children:e.createdAt?o()(e.createdAt).format("DD,MM, YYYY"):"N/A"})}},{width:300,title:"Status",field:"status",filtering:!1,render:function(e){var t="success",n="Published";return!1===e.status&&(t="warning",n="Draft"),Object(m.jsx)("span",{className:"text-".concat(t),children:n})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(m.jsx)(j.a,{menu:[{label:Object(m.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(m.jsx)(d.d,{size:20,className:"me-2"})," User Detail"]}),onClick:function(){return x.push("/form/whitepapers/userDetail",{data:e.data})}}],iconSize:"large"})}},onRowClick:function(e,t){return null},loading:t,data:y,search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,refresh:O,filterOptions:r,setFilters:function(e){return s(e)},resetFilters:f})})})})}))}}]);
//# sourceMappingURL=142.cd45f31b.chunk.js.map