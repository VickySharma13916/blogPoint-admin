(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[139],{1174:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(2),c=n(22),i=n(756),s=n(271),o=n(627),u=n.n(o),l=n(628),d=n(215),f=n.n(d),b=n(623),j=n(73),p=n(37),O=n(635),v=n(270),m=n(629),h=n(102),x=n(740),g=n(269),y=n(268),w=n(3),S=Object(p.b)((function(e){return{fetching:e.seodata.fetching}}),(function(e){return{getList:function(t){return e(Object(x.b)(t))}}}))((function(e){var t=e.fetching,n=e.getList,c=e.refresh,i=e.history,s=Object(r.useState)([]),o=Object(a.a)(s,2),d=o[0],p=o[1],x=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:200===(t=e.sent).status&&p(null===t||void 0===t||null===(a=t.data)||void 0===a||null===(r=a.docs)||void 0===r?void 0:r.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){x()}),[]);var S=Object(h.a)();return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(b.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(w.jsxs)(b.a.Body,{className:"".concat(S&&"p-0"),children:[Object(w.jsx)("div",{className:"".concat(S?"my-3":"my-2"," d-flex justify-content-end"),children:Object(w.jsx)(m.a,{variant:"primary",icon:{type:j.a},onClick:function(){return i.push("/seodata/addSeoData")},children:"Add SEO Data"})}),Object(w.jsx)(O.a,{columns:[{width:300,title:"Meta Image",field:"metaImage",render:function(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(g.a,{src:y.a+(null===e||void 0===e?void 0:e.metaImage),name:null===e||void 0===e?void 0:e.name,size:"70",className:"ff-primary rounded-circle me-3"})})}},{width:300,title:"Meta Title",field:"metaTitle",render:function(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("span",{style:{width:"300px"},children:null===e||void 0===e?void 0:e.metaTitle})})}},{width:300,title:"Name",field:"name",render:function(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("span",{style:{width:"300px"},children:null===e||void 0===e?void 0:e.name})})}},{width:500,title:"Meta Description",field:"metaDescription",render:function(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("span",{style:{width:"300px"},children:null===e||void 0===e?void 0:e.metaDescription})})}},{width:300,title:"Meta Keywords Tags",field:"metaKeywords",render:function(e){var t,n;return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("span",{style:{width:"300px"},children:null===e||void 0===e||null===(t=e.metaKeywords)||void 0===t||null===(n=t.split(","))||void 0===n?void 0:n.map((function(e){return Object(w.jsx)("div",{className:"text-primary",children:e})}))})})}},{width:300,title:"Date",field:"createdAt",render:function(e){return Object(w.jsx)("span",{style:{width:"500px"},children:e.createdAt?f()(e.createdAt).format("DD,MM, YYYY"):"N/A"})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(w.jsx)(v.a,{menu:[{label:Object(w.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(w.jsx)(j.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return i.push("/seodata/".concat(e.data._id,"/edit"),{data:e.data})}}],iconSize:"large"})}},onRowClick:function(e,t){return null},loading:t,data:d,search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,refresh:c})]})})})}));t.default=function(){var e=Object(c.useHistory)(),t=Object(c.useRouteMatch)().path,n=Object(r.useState)(""),o=Object(a.a)(n,2),u=o[0],l=o[1];return Object(w.jsxs)(s.a,{id:"page--Seodata",title:"Seodata",children:[Object(w.jsx)("div",{className:"d-flex align-items-start mb-3",children:Object(w.jsx)("h1",{className:"m-0",children:"SEO Data"})}),Object(w.jsx)(c.Route,{path:"".concat(t,"/"),children:Object(w.jsx)(S,{refresh:u,setRefresh:function(){return l(Object(i.a)())},history:e})})]})}},629:function(e,t,n){"use strict";var a=n(1),r=(n(2),n(881)),c=n(3),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={size:22};return"lg"===t?n.size=32:"sm"===t&&(n.size=18),Object(c.jsx)(e.type,Object(a.a)(Object(a.a)({},e.props),n))},s=function(e){var t=e.variant,n=e.className,a=e.onClick,s=e.size,o=e.isLoading,u=e.disabled,l=e.children,d=e.icon;return Object(c.jsx)(r.a,{variant:t,className:"btn-icon ".concat(s?"btn-icon-".concat(s):""," ").concat(o?"btn-icon-loading":""," ").concat(n),onClick:a,size:s,disabled:o||u,children:Object(c.jsxs)("span",{children:[i(d,s),l&&Object(c.jsx)("span",{children:l})]})})};s.defaultProps={variant:"default",className:"",size:"",onClick:function(){return null},isLoading:!1,disabled:!1,icon:null},t.a=s},634:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},635:function(e,t,n){"use strict";var a=n(12),r=n(627),c=n.n(r),i=n(628),s=n(13),o=n(1),u=n(671),l=n.n(u),d=n(674),f=n(2),b=n(73),j=n(756),p=n(159),O=n(629),v=n(3),m=["data"],h=["data"],x={FirstPage:Object(f.forwardRef)((function(e,t){return Object(v.jsx)(b.n,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),LastPage:Object(f.forwardRef)((function(e,t){return Object(v.jsx)(b.p,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),NextPage:Object(f.forwardRef)((function(e,t){return Object(v.jsx)(b.g,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),PreviousPage:Object(f.forwardRef)((function(e,t){return Object(v.jsx)(b.f,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),SortArrow:Object(f.forwardRef)((function(e,t){return Object(v.jsx)(b.d,Object(o.a)(Object(o.a)({},e),{},{ref:t}))}))},g=function(e){var t=e.loading,n=e.columns,r=e.actions,u=e.components,g=e.onRowClick,y=e.options,w=e.selectedRow,S=e.getList,E=(e.search,e.downloadcsv),A=e.downloadExcel,C=e.filters,k=(e.filterOptions,e.data),_=(e.setFilters,e.resetFilters),N=e.refresh,T=e.resetBtn,R=Object(f.createRef)(),D=Object(f.useState)(Object(j.a)()),P=Object(s.a)(D,2),F=P[0],z=P[1],L=Object(f.useState)(!1),I=Object(s.a)(L,2),M=I[0],U=I[1],B={isLoading:t,icons:x,style:{boxShadow:"none"},localization:{toolbar:{searchTooltip:"Search",searchPlaceholder:"Search"}},options:Object(o.a)({showTitle:!1,search:!0,toolbar:!0,filtering:M,draggable:!1,actionsColumnIndex:-1,pageSize:10,emptyRowsWhenPaging:!1,pageSizeOptions:[10,30,50,100,500]},y),columns:n,data:k||function(e){return new Promise(function(){var t=Object(i.a)(c.a.mark((function t(n,a){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(Object(p.a)(e));case 3:if((r=t.sent).data){t.next=6;break}return t.abrupt("return",a());case 6:return t.abrupt("return",n({data:void 0!==r.data.docs?r.data.docs:r.data,page:void 0!==r.data.page?r.data.page-1:0,totalCount:void 0!==r.data.totalDocs?r.data.totalDocs:0}));case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())},actions:r,onRowClick:g};u&&(B.components=u),g&&(B.options=Object(o.a)(Object(o.a)({},B.options),{},{rowStyle:function(e){return{backgroundColor:w&&w===e.id?"#f5f5f5":"#FFF"}},onRowClick:g}));var G=function(){g&&g(null),_(),z(Object(j.a)())};return Object(f.useEffect)((function(){N&&G()}),[N]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"mb-3 d-flex flex-lg-row flex-column position-relative table-toolbar",children:Object(v.jsxs)("span",{className:"d-flex flex-wrap zindex-dropdown end-0 gap-2 gap-lg-3 align-items-center justify-content-end ms-auto",children:[C&&Object(v.jsx)(O.a,{icon:Object(v.jsx)(b.m,{}),variant:"outline-default",size:"sm",onClick:function(){return U(!M)},disabled:t,children:"Filters"}),T&&Object(v.jsx)(O.a,{icon:Object(v.jsx)(b.x,{}),variant:"outline-default",size:"sm",onClick:G,disabled:t,children:"Reset"}),E&&Object(v.jsx)(O.a,{icon:Object(v.jsx)(b.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.csv,t=k.map((function(e){var t=e.data,n=Object(a.a)(e,m),r=t?Object.values(t).reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),t)}),{}):{},c=Object(o.a)({_id:n._id,Link:n.Link},r);return t?c:n}));Object(d.a)({data:t,fileName:"CSVformat",exportType:e})},disabled:t,children:"CSV"}),A&&Object(v.jsx)(O.a,{icon:Object(v.jsx)(b.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.xls,t=k.map((function(e){var t=e.data,n=Object(a.a)(e,h),r=t?Object.values(t).reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),t)}),{}):{},c=Object(o.a)({_id:n._id,Link:n.Link},r);return t?c:n}));Object(d.a)({data:t,fileName:"ExcelFormat",exportType:e})},disabled:t,children:"Excel"})]})}),Object(v.jsx)(l.a,Object(o.a)({tableRef:R},B),"data-table-".concat(F))]})};g.defaultProps={loading:!1,actions:[],components:null,onRowClick:null,options:{},selectedRow:null,search:!0,filters:!1,filterOptions:[],setFilters:function(){return null},resetFilters:function(){return null},refresh:null,resetBtn:!0},t.a=g},646:function(e,t,n){"use strict";var a=n(4),r=n(6),c=n(2),i=n(634),s=n(156),o=n(368),u=n(648),l=n(211),d=n(3),f=["className","component"];var b=n(566),j=n(299),p=n(103),O=Object(j.b)(),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themeId,n=e.defaultTheme,b=e.defaultClassName,j=void 0===b?"MuiBox-root":b,p=e.generateClassName,O=Object(s.a)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(o.a),v=c.forwardRef((function(e,c){var s=Object(l.a)(n),o=Object(u.a)(e),b=o.className,v=o.component,m=void 0===v?"div":v,h=Object(r.a)(o,f);return Object(d.jsx)(O,Object(a.a)({as:m,ref:c,className:Object(i.a)(b,p?p(j):j),theme:t&&s[t]||s},h))}));return v}({themeId:p.a,defaultTheme:O,defaultClassName:"MuiBox-root",generateClassName:b.a.generate});t.a=v},648:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(26),r=n(4),c=n(6),i=n(266),s=n(157),o=["sx"];function u(e){var t,n=e.sx,u=function(e){var t,n,a={systemProps:{},otherProps:{}},r=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:s.a;return Object.keys(e).forEach((function(t){r[t]?a.systemProps[t]=e[t]:a.otherProps[t]=e[t]})),a}(Object(c.a)(e,o)),l=u.systemProps,d=u.otherProps;return t=Array.isArray(n)?[l].concat(Object(a.a)(n)):"function"===typeof n?function(){var e=n.apply(void 0,arguments);return Object(i.b)(e)?Object(r.a)({},l,e):l}:Object(r.a)({},l,n),Object(r.a)({},d,{sx:t})}},740:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return m}));var a=n(627),r=n.n(a),c=n(628),i=n(208),s=n(632),o=n.n(s),u=n(268),l=n(71),d=function(){return{type:l.a.POST_SEO_DATA_BEGIN}},f=function(e){return{type:l.a.POST_SEO_DATA_SUCCESS,payload:e}},b=function(e){return{type:l.a.POST_SEO_DATA_FAILURE,payload:e}},j=function(e){return{type:l.a.UPDATE_SEO_DATA_SUCCESS,payload:e}};function p(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(i.a)()),t({type:l.a.GET_LIST_BEGIN}),e.prev=2,e.next=5,o.a.get("".concat(u.b,"seodata"));case 5:return c=e.sent,t((s=null===c||void 0===c||null===(n=c.data)||void 0===n||null===(a=n.docs)||void 0===a?void 0:a.data,{type:l.a.GET_LIST_SUCCESS,payload:s})),t(Object(i.b)({message:"SEO Data Retrieved Successfully",options:{variant:"success"}})),e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(2),t((r=void 0,{type:l.a.GET_LIST_FAILURE,payload:r})),e.abrupt("return",!1);case 15:case"end":return e.stop()}var r,s}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}function O(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.a)()),n(d()),t.prev=2,t.next=5,o.a.post("".concat(u.b,"seodata/uploads"),e);case 5:return a=t.sent,n(f(a.data)),n(Object(i.b)({message:"Meta Image Add Successfully",options:{variant:"success"}})),t.abrupt("return",a);case 11:return t.prev=11,t.t0=t.catch(2),n(b()),t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function v(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.a)()),n(d()),t.prev=2,t.next=5,o.a.post("".concat(u.b,"seodata"),e);case 5:return a=t.sent,n(f(a.data)),n(Object(i.b)({message:"SEO Data Add Successfully",options:{variant:"success"}})),t.abrupt("return",a);case 11:return t.prev=11,t.t0=t.catch(2),n(b()),t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function m(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.a)()),n({type:l.a.UPDATE_SEO_DATA_BEGIN}),t.prev=2,a=e.id,t.next=6,o.a.put("".concat(u.b,"seodata/").concat(a),e);case 6:return c=t.sent,n(j(c.data)),n(Object(i.b)({message:"SEO Data Update Successfully",options:{variant:"success"}})),t.abrupt("return",c);case 12:return t.prev=12,t.t0=t.catch(2),n((r=void 0,{type:l.a.UPDATE_SEO_DATA_FAILURE,payload:r})),t.abrupt("return",!1);case 16:case"end":return t.stop()}var r}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=139.c37cfe42.chunk.js.map