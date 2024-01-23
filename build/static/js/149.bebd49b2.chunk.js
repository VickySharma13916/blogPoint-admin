(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[149],{1086:function(e,t,n){"use strict";n.r(t);var a=n(627),r=n.n(a),c=n(628),s=n(13),i=n(2),o=n(623),u=n(210),l=n(37),d=n(649),p=n(638),b=n(635),j=n(629),f=n(271),O=n(102),h=n(696),v=n(270),m=n(73),x=n(3);t.default=Object(l.b)((function(e){return{fetching:e.whitepaper.fetching}}),(function(e){return{deleteWhitepaperUserDetail:function(t){return e(Object(h.b)(t))}}}))((function(e){var t,n,a,l=e.fetching,h=e.deleteWhitepaperUserDetail,w=Object(O.a)(),g=Object(d.useHistory)(),y=null===(t=g.location.state)||void 0===t?void 0:t.data,S=Object(i.useState)(!1),E=Object(s.a)(S,2),C=E[0],P=E[1],k=Object(i.useRef)(null),N=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={carrerid:null===y||void 0===y?void 0:y._id,userId:null===(t=k.current)||void 0===t?void 0:t._id},e.next=3,h(n);case 3:e.sent&&g.push("/form");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(f.a,{id:"page--Whitepaper",title:"Whitepaper",children:[Object(x.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(x.jsx)(j.a,{icon:Object(x.jsx)(u.a,{}),variant:"outline-link",onClick:function(){g.goBack()},className:"p-0 me-2"}),Object(x.jsx)("h4",{className:"m-0",children:" Whitepaper User Details"})]}),Object(x.jsx)(o.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(x.jsx)(o.a.Body,{className:"".concat(w&&"p-0"),children:Object(x.jsx)(b.a,{columns:[{width:300,title:"First Name",field:"firstName",customFilterAndSearch:function(e,t){return e===t.firstName},render:function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("span",{style:{width:"300px"},children:Object(x.jsx)(x.Fragment,{children:e.firstName?e.firstName:"N/A"})})})}},{width:300,title:"Last name",field:"lastName",customFilterAndSearch:function(e,t){return e===t.lastName},render:function(e){return Object(x.jsx)("div",{style:{width:"300px"},children:e.lastName?e.lastName:"N/A"})}},{width:300,title:"Email",field:"email",customFilterAndSearch:function(e,t){return e===t.email},render:function(e){return Object(x.jsx)("span",{style:{width:"300px"},children:e.email?e.email:"N/A"})}},{width:300,title:"Message",field:"message",render:function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("span",{style:{width:"300px"},children:null===e||void 0===e?void 0:e.message})})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(x.jsx)(v.a,{menu:[{label:Object(x.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(x.jsx)(m.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){P(!0),k.current=e.data}}],iconSize:"large"})}},onRowClick:function(e,t){return null},loading:l,data:null===y||void 0===y?void 0:y.WhitepaperUserDetail,search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1})})}),Object(x.jsx)(p.a,{show:C,setShow:P,title:"Delete Whitepaper user Detail",message:"Are you sure, you want to delete <b>".concat(null===y||void 0===y?void 0:y.whitepaperTitle," - ").concat((null===(n=k.current)||void 0===n?void 0:n.firstName)+" "+(null===(a=k.current)||void 0===a?void 0:a.lastName),"</b>?"),onConfirm:N})]})}))},629:function(e,t,n){"use strict";var a=n(1),r=(n(2),n(881)),c=n(3),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={size:22};return"lg"===t?n.size=32:"sm"===t&&(n.size=18),Object(c.jsx)(e.type,Object(a.a)(Object(a.a)({},e.props),n))},i=function(e){var t=e.variant,n=e.className,a=e.onClick,i=e.size,o=e.isLoading,u=e.disabled,l=e.children,d=e.icon;return Object(c.jsx)(r.a,{variant:t,className:"btn-icon ".concat(i?"btn-icon-".concat(i):""," ").concat(o?"btn-icon-loading":""," ").concat(n),onClick:a,size:i,disabled:o||u,children:Object(c.jsxs)("span",{children:[s(d,i),l&&Object(c.jsx)("span",{children:l})]})})};i.defaultProps={variant:"default",className:"",size:"",onClick:function(){return null},isLoading:!1,disabled:!1,icon:null},t.a=i},630:function(e,t,n){"use strict";var a=n(1),r=n(13),c=n(12),s=n(2),i=n.n(s),o=n(756),u=n(73),l=n(209),d=n(629),p=n(3),b=["className","onChange","onBlur","label","id","error","isClearable","hint","type"],j=i.a.forwardRef((function(e,t){var n=e.className,i=e.onChange,j=e.onBlur,f=e.label,O=e.id,h=e.error,v=e.isClearable,m=e.hint,x=e.type,w=Object(c.a)(e,b),g=Object(s.useState)(Object(o.a)()),y=Object(r.a)(g,2),S=y[0],E=y[1],C=Object(s.useState)(x),P=Object(r.a)(C,2),k=P[0],N=P[1];return Object(p.jsxs)("span",{className:"d-inline-block w-100 position-relative pt-2 pb-4 input__wrapper ".concat(h?"error":""),ref:t,children:[Object(p.jsx)("input",Object(a.a)({id:"input-".concat(O),type:k,className:"".concat(n).concat(v?" input-clearable":""),onChange:i,onBlur:j,placeholder:f,step:"any"},function(){var e=Object(a.a)({},w);return e.defaultValue=e.value||"",delete e.value,e}()),"input-".concat(S)),Object(p.jsx)("label",{htmlFor:"input-".concat(O),children:f}),Object(p.jsx)("span",{className:"input-error",children:h}),v&&Object(p.jsx)(u.e,{className:"input-clear-btn",size:18,onClick:function(){i({target:{value:""}}),E(Object(o.a)())}}),"password"===x&&Object(p.jsx)(d.a,{icon:"password"===k?Object(p.jsx)(l.d,{}):Object(p.jsx)(l.c,{}),variant:"outline-link",onClick:function(){return N("password"===k?"text":"password")},className:"p-0 m-0 position-absolute btn--show-password"}),""!==m&&Object(p.jsx)("span",{style:{fontSize:"12px",color:"#c1b1b1"},children:m})]})}));j.defaultProps={className:"",onChange:function(){return null},onBlur:function(){return null},label:"",id:Object(o.a)(),error:"",isClearable:!1,type:"text",hint:""},t.a=j},635:function(e,t,n){"use strict";var a=n(12),r=n(627),c=n.n(r),s=n(628),i=n(13),o=n(1),u=n(671),l=n.n(u),d=n(674),p=n(2),b=n(73),j=n(756),f=n(159),O=n(629),h=n(3),v=["data"],m=["data"],x={FirstPage:Object(p.forwardRef)((function(e,t){return Object(h.jsx)(b.n,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),LastPage:Object(p.forwardRef)((function(e,t){return Object(h.jsx)(b.p,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),NextPage:Object(p.forwardRef)((function(e,t){return Object(h.jsx)(b.g,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),PreviousPage:Object(p.forwardRef)((function(e,t){return Object(h.jsx)(b.f,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),SortArrow:Object(p.forwardRef)((function(e,t){return Object(h.jsx)(b.d,Object(o.a)(Object(o.a)({},e),{},{ref:t}))}))},w=function(e){var t=e.loading,n=e.columns,r=e.actions,u=e.components,w=e.onRowClick,g=e.options,y=e.selectedRow,S=e.getList,E=(e.search,e.downloadcsv),C=e.downloadExcel,P=e.filters,k=(e.filterOptions,e.data),N=(e.setFilters,e.resetFilters),_=e.refresh,R=e.resetBtn,T=Object(p.createRef)(),A=Object(p.useState)(Object(j.a)()),I=Object(i.a)(A,2),F=I[0],W=I[1],z=Object(p.useState)(!1),H=Object(i.a)(z,2),L=H[0],B=H[1],U={isLoading:t,icons:x,style:{boxShadow:"none"},localization:{toolbar:{searchTooltip:"Search",searchPlaceholder:"Search"}},options:Object(o.a)({showTitle:!1,search:!0,toolbar:!0,filtering:L,draggable:!1,actionsColumnIndex:-1,pageSize:10,emptyRowsWhenPaging:!1,pageSizeOptions:[10,30,50,100,500]},g),columns:n,data:k||function(e){return new Promise(function(){var t=Object(s.a)(c.a.mark((function t(n,a){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(Object(f.a)(e));case 3:if((r=t.sent).data){t.next=6;break}return t.abrupt("return",a());case 6:return t.abrupt("return",n({data:void 0!==r.data.docs?r.data.docs:r.data,page:void 0!==r.data.page?r.data.page-1:0,totalCount:void 0!==r.data.totalDocs?r.data.totalDocs:0}));case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())},actions:r,onRowClick:w};u&&(U.components=u),w&&(U.options=Object(o.a)(Object(o.a)({},U.options),{},{rowStyle:function(e){return{backgroundColor:y&&y===e.id?"#f5f5f5":"#FFF"}},onRowClick:w}));var D=function(){w&&w(null),N(),W(Object(j.a)())};return Object(p.useEffect)((function(){_&&D()}),[_]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"mb-3 d-flex flex-lg-row flex-column position-relative table-toolbar",children:Object(h.jsxs)("span",{className:"d-flex flex-wrap zindex-dropdown end-0 gap-2 gap-lg-3 align-items-center justify-content-end ms-auto",children:[P&&Object(h.jsx)(O.a,{icon:Object(h.jsx)(b.m,{}),variant:"outline-default",size:"sm",onClick:function(){return B(!L)},disabled:t,children:"Filters"}),R&&Object(h.jsx)(O.a,{icon:Object(h.jsx)(b.x,{}),variant:"outline-default",size:"sm",onClick:D,disabled:t,children:"Reset"}),E&&Object(h.jsx)(O.a,{icon:Object(h.jsx)(b.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.csv,t=k.map((function(e){var t=e.data,n=Object(a.a)(e,v),r=t?Object.values(t).reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),t)}),{}):{},c=Object(o.a)({_id:n._id,Link:n.Link},r);return t?c:n}));Object(d.a)({data:t,fileName:"CSVformat",exportType:e})},disabled:t,children:"CSV"}),C&&Object(h.jsx)(O.a,{icon:Object(h.jsx)(b.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.xls,t=k.map((function(e){var t=e.data,n=Object(a.a)(e,m),r=t?Object.values(t).reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),t)}),{}):{},c=Object(o.a)({_id:n._id,Link:n.Link},r);return t?c:n}));Object(d.a)({data:t,fileName:"ExcelFormat",exportType:e})},disabled:t,children:"Excel"})]})}),Object(h.jsx)(l.a,Object(o.a)({tableRef:T},U),"data-table-".concat(F))]})};w.defaultProps={loading:!1,actions:[],components:null,onRowClick:null,options:{},selectedRow:null,search:!0,filters:!1,filterOptions:[],setFilters:function(){return null},resetFilters:function(){return null},refresh:null,resetBtn:!0},t.a=w},638:function(e,t,n){"use strict";var a=n(627),r=n.n(a),c=n(628),s=n(13),i=n(2),o=n(683),u=n(881),l=n(636),d=n(630),p=n(3),b=function(e){var t=e.show,n=e.setShow,a=e.title,b=e.message,j=e.onConfirm,f=e.getReason,O=e.bodyHtml,h=e.loadingBtnText,v=e.footer,m=Object(i.useState)(!1),x=Object(s.a)(m,2),w=x[0],g=x[1],y=Object(i.useState)(""),S=Object(s.a)(y,2),E=S[0],C=S[1],P=function(){n(!1)},k=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,j(E);case 3:g(!1),n(!1),C("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(o.a,{show:t,onHide:P,backdrop:"static",keyboard:!1,children:[Object(p.jsx)(o.a.Header,{closeButton:!0,children:Object(p.jsx)(o.a.Title,{children:a})}),Object(p.jsxs)(o.a.Body,{children:[Object(p.jsx)("div",{dangerouslySetInnerHTML:{__html:b}}),O,f&&Object(p.jsx)("div",{children:Object(p.jsx)(d.a,{id:"reason",name:"reason",label:"Reason",value:E,onChange:function(e){return C(e.target.value)}})})]}),v&&Object(p.jsxs)(o.a.Footer,{children:[Object(p.jsx)(u.a,{variant:"default",onClick:P,children:"Cancel"}),!f&&Object(p.jsxs)(u.a,{variant:"danger",onClick:k,children:[!w&&Object(p.jsx)("span",{children:"Confirm"}),w&&Object(p.jsxs)("span",{children:[h," ",Object(p.jsx)(l.a,{size:"sm",animation:"border"})]})]}),f&&Object(p.jsxs)(u.a,{disabled:""===E||E.length<=3,variant:"danger",onClick:k,children:[!w&&Object(p.jsx)("span",{children:"Confirm"}),w&&Object(p.jsxs)("span",{children:[h," ",Object(p.jsx)(l.a,{size:"sm",animation:"border"})]})]})]})]})};b.defaultProps={show:!1,setShow:function(){return null},title:"Give a title",message:"Your message here",onConfirm:function(){return null},getReason:!1,bodyHtml:Object(p.jsx)(p.Fragment,{}),loadingBtnText:"Deleting",footer:!0},t.a=b},696:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return m})),n.d(t,"f",(function(){return x})),n.d(t,"e",(function(){return w})),n.d(t,"g",(function(){return g})),n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return S}));var a=n(627),r=n.n(a),c=n(628),s=n(43),i=function(e){return{type:s.a.POST_WHITEPAPER_SUCCESS,payload:e}},o=function(){return{type:s.a.UPDATE_WHITEPAPER_BEGIN}},u=function(e){return{type:s.a.UPDATE_WHITEPAPER_SUCCESS,payload:e}},l=function(e){return{type:s.a.UPDATE_WHITEPAPER_FAILURE,payload:e}},d=function(){return{type:s.a.POST_IMAGE_WHITEPAPER_BEGIN}},p=function(e){return{type:s.a.POST_IMAGE_WHITEPAPER_SUCCESS,payload:e}},b=function(e){return{type:s.a.POST_IMAGE_WHITEPAPER_FAILURE,payload:e}},j=n(208),f=n(632),O=n.n(f),h=n(268);function v(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(j.a)()),t({type:s.a.GET_WHITEPAPER_LIST_BEGIN}),e.prev=2,e.next=5,O.a.get("".concat(h.b,"whitepapers"));case 5:return n=e.sent,t((r=n.data,{type:s.a.GET_WHITEPAPER_LIST_SUCCESS,payload:r})),t(Object(j.b)({message:"Whitepapers Retrieved Successfully",options:{variant:"success"}})),e.abrupt("return",n);case 11:return e.prev=11,e.t0=e.catch(2),t((a=void 0,{type:s.a.GET_WHITEPAPER_LIST_FAILURE,payload:a})),e.abrupt("return",!1);case 15:case"end":return e.stop()}var a,r}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}function m(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(j.a)()),n(d()),t.prev=2,t.next=5,O.a.post("".concat(h.b,"whitepapers/uploads"),e);case 5:return a=t.sent,n(p(a.data)),n(Object(j.b)({message:"Whitepaper Image Add Successfully",options:{variant:"success"}})),t.abrupt("return",a);case 11:return t.prev=11,t.t0=t.catch(2),n(b()),t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function x(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(j.a)()),n(d()),t.prev=2,t.next=5,O.a.post("".concat(h.b,"whitepapers/uploadFile"),e);case 5:return a=t.sent,n(p(a.data)),n(Object(j.b)({message:"Whitepaper File Add Successfully",options:{variant:"success"}})),t.abrupt("return",a);case 11:return t.prev=11,t.t0=t.catch(2),n(b()),t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function w(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(j.a)()),n({type:s.a.POST_WHITEPAPER_BEGIN}),t.prev=2,t.next=5,O.a.post("".concat(h.b,"whitepapers"),e);case 5:return o=t.sent,n(i(null===o||void 0===o||null===(a=o.data)||void 0===a||null===(c=a.docs)||void 0===c?void 0:c.data)),n(Object(j.b)({message:"Whitepaper Add Successfully",options:{variant:"success"}})),t.abrupt("return",o);case 11:return t.prev=11,t.t0=t.catch(2),n((r=void 0,{type:s.a.POST_WHITEPAPER_FAILURE,payload:r})),t.abrupt("return",!1);case 15:case"end":return t.stop()}var r}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function g(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(j.a)()),n(o()),t.prev=2,a=e.id,t.next=6,O.a.put("".concat(h.b,"whitepapers/").concat(a),e);case 6:return c=t.sent,n(u(c.data)),n(Object(j.b)({message:"Whitepaper Update Successfully",options:{variant:"success"}})),t.abrupt("return",c);case 12:return t.prev=12,t.t0=t.catch(2),n(l()),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}function y(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(j.a)()),n(o()),t.prev=2,t.next=5,O.a.delete("".concat(h.b,"whitepapers/").concat(e));case 5:return n(u()),n(Object(j.b)({message:"Whitepaper Delete Successfully",options:{variant:"success"}})),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(2),n(l()),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}function S(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(j.a)()),n(o()),t.prev=2,a=e.carrerid,c=e.userId,t.next=7,O.a.delete("".concat(h.b,"whitepapers/").concat(a,"/userdetails/").concat(c));case 7:return n(u()),n(Object(j.b)({message:"User Detail whitepapers Delete Successfully",options:{variant:"success"}})),t.abrupt("return",!0);case 12:return t.prev=12,t.t0=t.catch(2),n(l()),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=149.bebd49b2.chunk.js.map