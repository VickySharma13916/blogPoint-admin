(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[136],{629:function(e,t,n){"use strict";var r=n(1),c=(n(2),n(881)),a=n(3),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={size:22};return"lg"===t?n.size=32:"sm"===t&&(n.size=18),Object(a.jsx)(e.type,Object(r.a)(Object(r.a)({},e.props),n))},s=function(e){var t=e.variant,n=e.className,r=e.onClick,s=e.size,o=e.isLoading,u=e.disabled,l=e.children,d=e.icon;return Object(a.jsx)(c.a,{variant:t,className:"btn-icon ".concat(s?"btn-icon-".concat(s):""," ").concat(o?"btn-icon-loading":""," ").concat(n),onClick:r,size:s,disabled:o||u,children:Object(a.jsxs)("span",{children:[i(d,s),l&&Object(a.jsx)("span",{children:l})]})})};s.defaultProps={variant:"default",className:"",size:"",onClick:function(){return null},isLoading:!1,disabled:!1,icon:null},t.a=s},630:function(e,t,n){"use strict";var r=n(1),c=n(13),a=n(12),i=n(2),s=n.n(i),o=n(756),u=n(73),l=n(209),d=n(629),j=n(3),b=["className","onChange","onBlur","label","id","error","isClearable","hint","type"],f=s.a.forwardRef((function(e,t){var n=e.className,s=e.onChange,f=e.onBlur,p=e.label,O=e.id,h=e.error,m=e.isClearable,x=e.hint,v=e.type,g=Object(a.a)(e,b),y=Object(i.useState)(Object(o.a)()),w=Object(c.a)(y,2),C=w[0],S=w[1],N=Object(i.useState)(v),k=Object(c.a)(N,2),A=k[0],_=k[1];return Object(j.jsxs)("span",{className:"d-inline-block w-100 position-relative pt-2 pb-4 input__wrapper ".concat(h?"error":""),ref:t,children:[Object(j.jsx)("input",Object(r.a)({id:"input-".concat(O),type:A,className:"".concat(n).concat(m?" input-clearable":""),onChange:s,onBlur:f,placeholder:p,step:"any"},function(){var e=Object(r.a)({},g);return e.defaultValue=e.value||"",delete e.value,e}()),"input-".concat(C)),Object(j.jsx)("label",{htmlFor:"input-".concat(O),children:p}),Object(j.jsx)("span",{className:"input-error",children:h}),m&&Object(j.jsx)(u.e,{className:"input-clear-btn",size:18,onClick:function(){s({target:{value:""}}),S(Object(o.a)())}}),"password"===v&&Object(j.jsx)(d.a,{icon:"password"===A?Object(j.jsx)(l.d,{}):Object(j.jsx)(l.c,{}),variant:"outline-link",onClick:function(){return _("password"===A?"text":"password")},className:"p-0 m-0 position-absolute btn--show-password"}),""!==x&&Object(j.jsx)("span",{style:{fontSize:"12px",color:"#c1b1b1"},children:x})]})}));f.defaultProps={className:"",onChange:function(){return null},onBlur:function(){return null},label:"",id:Object(o.a)(),error:"",isClearable:!1,type:"text",hint:""},t.a=f},635:function(e,t,n){"use strict";var r=n(12),c=n(627),a=n.n(c),i=n(628),s=n(13),o=n(1),u=n(671),l=n.n(u),d=n(674),j=n(2),b=n(73),f=n(756),p=n(159),O=n(629),h=n(3),m=["data"],x=["data"],v={FirstPage:Object(j.forwardRef)((function(e,t){return Object(h.jsx)(b.n,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),LastPage:Object(j.forwardRef)((function(e,t){return Object(h.jsx)(b.p,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),NextPage:Object(j.forwardRef)((function(e,t){return Object(h.jsx)(b.g,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),PreviousPage:Object(j.forwardRef)((function(e,t){return Object(h.jsx)(b.f,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),SortArrow:Object(j.forwardRef)((function(e,t){return Object(h.jsx)(b.d,Object(o.a)(Object(o.a)({},e),{},{ref:t}))}))},g=function(e){var t=e.loading,n=e.columns,c=e.actions,u=e.components,g=e.onRowClick,y=e.options,w=e.selectedRow,C=e.getList,S=(e.search,e.downloadcsv),N=e.downloadExcel,k=e.filters,A=(e.filterOptions,e.data),_=(e.setFilters,e.resetFilters),I=e.refresh,T=e.resetBtn,E=Object(j.createRef)(),D=Object(j.useState)(Object(f.a)()),L=Object(s.a)(D,2),R=L[0],z=L[1],F=Object(j.useState)(!1),B=Object(s.a)(F,2),P=B[0],U=B[1],H={isLoading:t,icons:v,style:{boxShadow:"none"},localization:{toolbar:{searchTooltip:"Search",searchPlaceholder:"Search"}},options:Object(o.a)({showTitle:!1,search:!0,toolbar:!0,filtering:P,draggable:!1,actionsColumnIndex:-1,pageSize:10,emptyRowsWhenPaging:!1,pageSizeOptions:[10,30,50,100,500]},y),columns:n,data:A||function(e){return new Promise(function(){var t=Object(i.a)(a.a.mark((function t(n,r){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C(Object(p.a)(e));case 3:if((c=t.sent).data){t.next=6;break}return t.abrupt("return",r());case 6:return t.abrupt("return",n({data:void 0!==c.data.docs?c.data.docs:c.data,page:void 0!==c.data.page?c.data.page-1:0,totalCount:void 0!==c.data.totalDocs?c.data.totalDocs:0}));case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",r(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())},actions:c,onRowClick:g};u&&(H.components=u),g&&(H.options=Object(o.a)(Object(o.a)({},H.options),{},{rowStyle:function(e){return{backgroundColor:w&&w===e.id?"#f5f5f5":"#FFF"}},onRowClick:g}));var G=function(){g&&g(null),_(),z(Object(f.a)())};return Object(j.useEffect)((function(){I&&G()}),[I]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"mb-3 d-flex flex-lg-row flex-column position-relative table-toolbar",children:Object(h.jsxs)("span",{className:"d-flex flex-wrap zindex-dropdown end-0 gap-2 gap-lg-3 align-items-center justify-content-end ms-auto",children:[k&&Object(h.jsx)(O.a,{icon:Object(h.jsx)(b.m,{}),variant:"outline-default",size:"sm",onClick:function(){return U(!P)},disabled:t,children:"Filters"}),T&&Object(h.jsx)(O.a,{icon:Object(h.jsx)(b.x,{}),variant:"outline-default",size:"sm",onClick:G,disabled:t,children:"Reset"}),S&&Object(h.jsx)(O.a,{icon:Object(h.jsx)(b.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.csv,t=A.map((function(e){var t=e.data,n=Object(r.a)(e,m),c=t?Object.values(t).reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),t)}),{}):{},a=Object(o.a)({_id:n._id,Link:n.Link},c);return t?a:n}));Object(d.a)({data:t,fileName:"CSVformat",exportType:e})},disabled:t,children:"CSV"}),N&&Object(h.jsx)(O.a,{icon:Object(h.jsx)(b.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.xls,t=A.map((function(e){var t=e.data,n=Object(r.a)(e,x),c=t?Object.values(t).reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),t)}),{}):{},a=Object(o.a)({_id:n._id,Link:n.Link},c);return t?a:n}));Object(d.a)({data:t,fileName:"ExcelFormat",exportType:e})},disabled:t,children:"Excel"})]})}),Object(h.jsx)(l.a,Object(o.a)({tableRef:E},H),"data-table-".concat(R))]})};g.defaultProps={loading:!1,actions:[],components:null,onRowClick:null,options:{},selectedRow:null,search:!0,filters:!1,filterOptions:[],setFilters:function(){return null},resetFilters:function(){return null},refresh:null,resetBtn:!0},t.a=g},637:function(e,t,n){"use strict";var r=n(668),c=n.n(r),a=n(2),i=n(881),s=n(669),o=n(3);t.a=function(e){var t=e.htmlContent,n=e.preview,r=e.handlePreview,u=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=c.a.sanitize(t);u.current.innerHTML=e,u.current.querySelectorAll("pre").forEach((function(e){var t,n=(t=e.innerHTML,(new DOMParser).parseFromString(t,"text/html").body.textContent||"");e.innerHTML=n;var r=document.createElement("div");r.innerHTML=e.innerHTML,e.parentNode.replaceChild(r,e)}))}),[t]),Object(o.jsxs)("div",{className:"position-relative",children:[n&&Object(o.jsx)("div",{className:"w-100 d-flex justify-content-end mb-2",children:Object(o.jsx)(i.a,{variant:"primary",onClick:function(){return r()},children:Object(o.jsx)(s.a,{})})}),Object(o.jsx)("div",{ref:u,style:{whiteSpace:"pre-wrap",wordBreak:"break-word",border:"1px solid grey",borderRadius:"8px"}})]})}},638:function(e,t,n){"use strict";var r=n(627),c=n.n(r),a=n(628),i=n(13),s=n(2),o=n(683),u=n(881),l=n(636),d=n(630),j=n(3),b=function(e){var t=e.show,n=e.setShow,r=e.title,b=e.message,f=e.onConfirm,p=e.getReason,O=e.bodyHtml,h=e.loadingBtnText,m=e.footer,x=Object(s.useState)(!1),v=Object(i.a)(x,2),g=v[0],y=v[1],w=Object(s.useState)(""),C=Object(i.a)(w,2),S=C[0],N=C[1],k=function(){n(!1)},A=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,f(S);case 3:y(!1),n(!1),N("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(o.a,{show:t,onHide:k,backdrop:"static",keyboard:!1,children:[Object(j.jsx)(o.a.Header,{closeButton:!0,children:Object(j.jsx)(o.a.Title,{children:r})}),Object(j.jsxs)(o.a.Body,{children:[Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:b}}),O,p&&Object(j.jsx)("div",{children:Object(j.jsx)(d.a,{id:"reason",name:"reason",label:"Reason",value:S,onChange:function(e){return N(e.target.value)}})})]}),m&&Object(j.jsxs)(o.a.Footer,{children:[Object(j.jsx)(u.a,{variant:"default",onClick:k,children:"Cancel"}),!p&&Object(j.jsxs)(u.a,{variant:"danger",onClick:A,children:[!g&&Object(j.jsx)("span",{children:"Confirm"}),g&&Object(j.jsxs)("span",{children:[h," ",Object(j.jsx)(l.a,{size:"sm",animation:"border"})]})]}),p&&Object(j.jsxs)(u.a,{disabled:""===S||S.length<=3,variant:"danger",onClick:A,children:[!g&&Object(j.jsx)("span",{children:"Confirm"}),g&&Object(j.jsxs)("span",{children:[h," ",Object(j.jsx)(l.a,{size:"sm",animation:"border"})]})]})]})]})};b.defaultProps={show:!1,setShow:function(){return null},title:"Give a title",message:"Your message here",onConfirm:function(){return null},getReason:!1,bodyHtml:Object(j.jsx)(j.Fragment,{}),loadingBtnText:"Deleting",footer:!0},t.a=b},675:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return y})),n.d(t,"d",(function(){return w})),n.d(t,"h",(function(){return C})),n.d(t,"g",(function(){return S})),n.d(t,"b",(function(){return N})),n.d(t,"a",(function(){return k}));var r=n(627),c=n.n(r),a=n(628),i=n(208),s=n(632),o=n.n(s),u=n(268),l=n(136),d=function(){return{type:l.a.POST_IMAGE_COURSE_LIST_BEGIN}},j=function(e){return{type:l.a.POST_IMAGE_COURSE_LIST_SUCCESS,payload:e}},b=function(e){return{type:l.a.POST_IMAGE_COURSE_LIST_FAILURE,payload:e}},f=function(){return{type:l.a.DELETE_COURSE_LIST_BEGIN}},p=function(e){return{type:l.a.DELETE_COURSE_LIST_SUCCESS,payload:e}},O=function(e){return{type:l.a.DELETE_COURSE_LIST_FAILURE,payload:e}},h=function(){return{type:l.a.UPDATE_COURSE_LIST_BEGIN}},m=function(e){return{type:l.a.UPDATE_COURSE_LIST_SUCCESS,payload:e}},x=function(e){return{type:l.a.UPDATE_COURSE_LIST_FAILURE,payload:e}};function v(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(i.a)()),t({type:l.a.GET_ALL_COURSE_LIST_BEGIN}),e.prev=2,e.next=5,o.a.get("".concat(u.b,"course"));case 5:return s=e.sent,t((d=null===s||void 0===s||null===(n=s.data)||void 0===n||null===(r=n.docs)||void 0===r?void 0:r.data,{type:l.a.GET_ALL_COURSE_LIST_SUCCESS,payload:d})),t(Object(i.b)({message:null===s||void 0===s||null===(a=s.data)||void 0===a?void 0:a.msg,options:{variant:"success"}})),e.abrupt("return",s);case 11:return e.prev=11,e.t0=e.catch(2),t((c=void 0,{type:l.a.GET_ALL_COURSE_LIST_FAILURE,payload:c})),e.abrupt("return",!1);case 15:case"end":return e.stop()}var c,d}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}function g(e,t){return function(){var n=Object(a.a)(c.a.mark((function n(r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Object(i.a)()),r(d()),n.prev=2,n.next=5,o.a.post("".concat(u.b,"course/upload/").concat(t),e);case 5:return a=n.sent,r(j(null===a||void 0===a?void 0:a.data)),r(Object(i.b)({message:"".concat(t," Retrieved Successfully"),options:{variant:"success"}})),n.abrupt("return",a);case 11:return n.prev=11,n.t0=n.catch(2),r(b()),n.abrupt("return",!1);case 15:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e){return n.apply(this,arguments)}}()}function y(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.a)()),n(d()),t.prev=2,t.next=5,o.a.post("".concat(u.b,"course"),e);case 5:return r=t.sent,n(j(null===r||void 0===r?void 0:r.data)),n(Object(i.b)({message:"Course Add Successfully",options:{variant:"success"}})),t.abrupt("return",r);case 11:return t.prev=11,t.t0=t.catch(2),n(b()),t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function w(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.a)()),n(d()),t.prev=2,r=e.courseId,a=e.type,t.next=7,o.a.post("".concat(u.b,"course/").concat(r,"/").concat(a),e);case 7:return s=t.sent,n(j(null===s||void 0===s?void 0:s.data)),n(Object(i.b)({message:"".concat(a," Add Successfully"),options:{variant:"success"}})),t.abrupt("return",s);case 13:return t.prev=13,t.t0=t.catch(2),n(b()),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}()}function C(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.a)()),n(h()),t.prev=2,r=e.id,t.next=6,o.a.put("".concat(u.b,"course/").concat(r),e);case 6:return a=t.sent,n(m(a.data)),n(Object(i.b)({message:"Course Update Successfully",options:{variant:"success"}})),t.abrupt("return",a);case 12:return t.prev=12,t.t0=t.catch(2),n(x()),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}function S(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r,a,s,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.a)()),n(h()),t.prev=2,r=e.accordionId,a=e.courseId,s=e.type,t.next=8,o.a.put("".concat(u.b,"course/").concat(a,"/").concat(s,"/").concat(r),e);case 8:return l=t.sent,n(m(l.data)),n(Object(i.b)({message:"".concat(s," Course Update Successfully"),options:{variant:"success"}})),t.abrupt("return",l);case 14:return t.prev=14,t.t0=t.catch(2),n(x()),t.abrupt("return",!1);case 18:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}()}function N(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.a)()),n(f()),t.prev=2,t.next=5,o.a.delete("".concat(u.b,"course/").concat(e));case 5:return n(p()),n(Object(i.b)({message:"Course Delete Successfully",options:{variant:"success"}})),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(2),n(O()),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}function k(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r,a,s,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.a)()),n(f()),t.prev=2,r=e.accordionId,a=e.courseId,s=e.type,t.next=8,o.a.delete("".concat(u.b,"course/").concat(a,"/").concat(s,"/").concat(r),e);case 8:return l=t.sent,n(p(l.data)),n(Object(i.b)({message:"".concat(s," Course Delete Successfully"),options:{variant:"success"}})),t.abrupt("return",l);case 14:return t.prev=14,t.t0=t.catch(2),n(O()),t.abrupt("return",!1);case 18:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}()}},845:function(e,t,n){"use strict";n.r(t);var r=n(13),c=n(2),a=n(623),i=n(1073),s=n(1185),o=n(210),u=n(37),l=n(22),d=n(629),j=n(271),b=n(102),f=n(1),p=n(627),O=n.n(p),h=n(628),m=n(73),x=n(638),v=n(635),g=n(637),y=n(270),w=n(675),C=n(3),S=Object(u.b)((function(e){return{fetching:e.homepage.fetching}}),(function(e){return{deleteAccordionCourse:function(t){return e(Object(w.a)(t))}}}))((function(e){var t,n=e.fetching,i=e.deleteAccordionCourse,s=e.listData,o=e.id,u=Object(b.a)(),j=Object(c.useState)(!1),p=Object(r.a)(j,2),w=p[0],S=p[1],N=Object(c.useRef)(null),k=Object(l.useHistory)(),A=function(){var e=Object(h.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:"accordion",courseId:o,accordionId:null===N||void 0===N||null===(t=N.current)||void 0===t?void 0:t._id},e.next=3,i(n);case 3:200===e.sent.status&&k.push("/page");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(a.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(C.jsxs)(a.a.Body,{children:[Object(C.jsx)("div",{className:"".concat(u?"my-3":"my-2"," d-flex justify-content-end"),children:Object(C.jsx)(d.a,{variant:"primary",icon:{type:m.a},onClick:function(){return k.push("/page/courses/".concat(o,"/viewCourse/addAccordionCourse"),{courseId:o})},children:"Add Accordion"})}),Object(C.jsx)(v.a,{columns:[{title:"Accordion Title",field:"AccordionTitle",width:250,render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("span",{children:e.AccordionTitle})})}},{title:"Accordion Description",field:"AccordionDescription",width:400,render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{style:{width:"auto",maxWidth:"900px",minWidth:"400px",height:"300px",overflow:"scroll"},children:Object(C.jsx)(g.a,{htmlContent:null===e||void 0===e?void 0:e.AccordionDescription})})})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(C.jsx)(y.a,{menu:[{label:Object(C.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(C.jsx)(m.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return k.push("/page/courses/".concat(o,"/viewCourse/").concat(e.data._id,"/editAccordionCourse"),{data:Object(f.a)({},e.data)})}},{label:Object(C.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(C.jsx)(m.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){S(!0),N.current=e.data}}],iconSize:"large"})}},search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,data:s,loading:n})]})}),Object(C.jsx)(x.a,{show:w,setShow:S,title:"Delete Course Accordion",message:"Are you sure, you want to delete <b>".concat(null===(t=N.current)||void 0===t?void 0:t.AccordionTitle,"</b>?"),onConfirm:A})]})})),N=n(269),k=n(268),A=Object(u.b)((function(e){return{fetching:e.course.fetching}}),(function(e){return{deleteAccordionCourse:function(t){return e(Object(w.a)(t))}}}))((function(e){var t,n=e.fetching,i=e.deleteAccordionCourse,s=e.listData,o=e.id,u=Object(b.a)(),j=Object(c.useState)(!1),p=Object(r.a)(j,2),g=p[0],w=p[1],S=Object(c.useRef)(null),A=Object(l.useHistory)(),_=function(){var e=Object(h.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:"trainingProfile",courseId:o,accordionId:null===S||void 0===S||null===(t=S.current)||void 0===t?void 0:t._id},e.next=3,i(n);case 3:200===e.sent.status&&A.push("/page");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(a.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(C.jsxs)(a.a.Body,{children:[Object(C.jsx)("div",{className:"".concat(u?"my-3":"my-2"," d-flex justify-content-end"),children:Object(C.jsx)(d.a,{variant:"primary",icon:{type:m.a},onClick:function(){return A.push("/page/courses/".concat(o,"/viewCourse/addTrainerProfile"),{courseId:o})},children:"Add Trainer Profile"})}),Object(C.jsx)(v.a,{columns:[{title:"Trainer Name",field:"trainerName",width:400,render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("span",{children:e.trainerName})})}},{title:"Trainer Designation",field:"trainerDesignation",width:250,render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("span",{children:e.trainerDesignation})})}},{title:"Trainer Company",field:"trainerCompany",width:250,render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("span",{children:e.trainerCompany})})}},{width:300,title:"Trainer Image",field:"trainerImage",render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(N.a,{src:k.a+(null===e||void 0===e?void 0:e.trainerImage),name:null===e||void 0===e?void 0:e.trainerName,size:"70",className:"ff-primary rounded-circle me-3"})})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(C.jsx)(y.a,{menu:[{label:Object(C.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(C.jsx)(m.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return A.push("/page/courses/".concat(o,"/viewCourse/").concat(e.data._id,"/editTrainerProfile"),{data:Object(f.a)({},e.data)})}},{label:Object(C.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(C.jsx)(m.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){w(!0),S.current=e.data}}],iconSize:"large"})}},search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,data:s,loading:n})]})}),Object(C.jsx)(x.a,{show:g,setShow:w,title:"Delete Course Accordion",message:"Are you sure, you want to delete <b>".concat(null===(t=S.current)||void 0===t?void 0:t.trainerName,"</b>?"),onConfirm:_})]})})),_=Object(u.b)((function(e){return{fetching:e.course.fetching}}),(function(e){return{deleteAccordionCourse:function(t){return e(Object(w.a)(t))}}}))((function(e){var t,n=e.fetching,i=e.deleteAccordionCourse,s=e.listData,o=e.id,u=Object(b.a)(),j=Object(c.useState)(!1),p=Object(r.a)(j,2),g=p[0],w=p[1],S=Object(c.useRef)(null),A=Object(l.useHistory)(),_=function(){var e=Object(h.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:"testimonial",courseId:o,accordionId:null===S||void 0===S||null===(t=S.current)||void 0===t?void 0:t._id},e.next=3,i(n);case 3:200===e.sent.status&&A.push("/page");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(a.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(C.jsxs)(a.a.Body,{children:[Object(C.jsx)("div",{className:"".concat(u?"my-3":"my-2"," d-flex justify-content-end"),children:Object(C.jsx)(d.a,{variant:"primary",icon:{type:m.a},onClick:function(){return A.push("/page/courses/".concat(o,"/viewCourse/addTestimonial"),{courseId:o})},children:"Add Testimonial"})}),Object(C.jsx)(v.a,{columns:[{title:"Testimonial Name",field:"studentName",width:400,render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("span",{children:e.studentName})})}},{title:"Testimonial Description",field:"studentDescription",width:600,render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("span",{style:{width:"600px",paddingLeft:"10px",height:"200px",overflow:"scroll"},children:e.studentDescription})})}},{width:300,title:"Testimonial User Image",field:"studentImage",render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(N.a,{src:k.a+(null===e||void 0===e?void 0:e.studentImage),name:null===e||void 0===e?void 0:e.studentName,size:"70",className:"ff-primary rounded-circle me-3"})})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(C.jsx)(y.a,{menu:[{label:Object(C.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(C.jsx)(m.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return A.push("/page/courses/".concat(o,"/viewCourse/").concat(e.data._id,"/editTestimonial"),{data:Object(f.a)({},e.data)})}},{label:Object(C.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(C.jsx)(m.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){w(!0),S.current=e.data}}],iconSize:"large"})}},search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,data:s,loading:n})]})}),Object(C.jsx)(x.a,{show:g,setShow:w,title:"Delete Course Testimonial",message:"Are you sure, you want to delete <b>".concat(null===(t=S.current)||void 0===t?void 0:t.studentName,"</b>?"),onConfirm:_})]})})),I=Object(u.b)((function(e){return{fetching:e.course.fetching}}),(function(e){return{deleteAccordionCourse:function(t){return e(Object(w.a)(t))}}}))((function(e){var t,n=e.fetching,i=e.deleteAccordionCourse,s=e.listData,o=e.id,u=Object(b.a)(),j=Object(c.useState)(!1),p=Object(r.a)(j,2),g=p[0],w=p[1],S=Object(c.useRef)(null),A=Object(l.useHistory)(),_=function(){var e=Object(h.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:"joinImage",courseId:o,accordionId:null===S||void 0===S||null===(t=S.current)||void 0===t?void 0:t._id},e.next=3,i(n);case 3:200===e.sent.status&&A.push("/page");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(a.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(C.jsxs)(a.a.Body,{children:[Object(C.jsx)("div",{className:"".concat(u?"my-3":"my-2"," d-flex justify-content-end"),children:Object(C.jsx)(d.a,{variant:"primary",icon:{type:m.a},onClick:function(){return A.push("/page/courses/".concat(o,"/viewCourse/addJoinImageSlider"),{courseId:o})},children:"Add Join Image Slider"})}),Object(C.jsx)(v.a,{columns:[{title:"join Slider Description",field:"joinDescription",width:400,render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("span",{children:e.joinDescription})})}},{width:300,title:"Join Slider Image",field:"joinImage",render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(N.a,{src:k.a+(null===e||void 0===e?void 0:e.joinImage),name:null===e||void 0===e?void 0:e.joinDescription,size:"70",className:"ff-primary rounded-circle me-3"})})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(C.jsx)(y.a,{menu:[{label:Object(C.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(C.jsx)(m.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return A.push("/page/courses/".concat(o,"/viewCourse/").concat(e.data._id,"/editJoinSlider"),{data:Object(f.a)({},e.data)})}},{label:Object(C.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(C.jsx)(m.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){w(!0),S.current=e.data}}],iconSize:"large"})}},search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,data:s,loading:n})]})}),Object(C.jsx)(x.a,{show:g,setShow:w,title:"Delete Course Join Image Slider",message:"Are you sure, you want to delete <b>".concat(null===(t=S.current)||void 0===t?void 0:t.joinDescription,"</b>?"),onConfirm:_})]})})),T=Object(u.b)((function(e){return{fetching:e.course.fetching}}),(function(e){return{deleteAccordionCourse:function(t){return e(Object(w.a)(t))}}}))((function(e){var t,n=e.fetching,i=e.deleteAccordionCourse,s=e.listData,o=e.id,u=Object(b.a)(),j=Object(c.useState)(!1),p=Object(r.a)(j,2),g=p[0],w=p[1],S=Object(c.useRef)(null),N=Object(l.useHistory)(),k=function(){var e=Object(h.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:"links",courseId:o,accordionId:null===S||void 0===S||null===(t=S.current)||void 0===t?void 0:t._id},e.next=3,i(n);case 3:200===e.sent.status&&N.push("/page");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(a.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(C.jsxs)(a.a.Body,{children:[Object(C.jsx)("div",{className:"".concat(u?"my-3":"my-2"," d-flex justify-content-end"),children:Object(C.jsx)(d.a,{variant:"primary",icon:{type:m.a},onClick:function(){return N.push("/page/courses/".concat(o,"/viewCourse/addOtherLink"),{courseId:o})},children:"Add Other Link"})}),Object(C.jsx)(v.a,{columns:[{title:"Course Other Name",field:"CourseOtherName",width:250,render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("span",{children:e.CourseOtherName})})}},{title:"Course Other Link",field:"CourseOtherLink",width:250,render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("a",{href:null===e||void 0===e?void 0:e.CourseOtherLink,children:e.CourseOtherLink})})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(C.jsx)(y.a,{menu:[{label:Object(C.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(C.jsx)(m.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return N.push("/page/courses/".concat(o,"/viewCourse/").concat(e.data._id,"/editOtherCourseLink"),{data:Object(f.a)({},e.data)})}},{label:Object(C.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(C.jsx)(m.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){w(!0),S.current=e.data}}],iconSize:"large"})}},search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,data:s,loading:n})]})}),Object(C.jsx)(x.a,{show:g,setShow:w,title:"Delete Course Other Link",message:"Are you sure, you want to delete <b>".concat(null===(t=S.current)||void 0===t?void 0:t.CourseOtherName,"</b>?"),onConfirm:k})]})})),E=Object(u.b)((function(e){return{fetching:e.course.fetching}}),(function(e){return{deleteAccordionCourse:function(t){return e(Object(w.a)(t))}}}))((function(e){var t,n=e.fetching,i=e.deleteAccordionCourse,s=e.listData,o=e.id,u=Object(b.a)(),j=Object(c.useState)(!1),p=Object(r.a)(j,2),w=p[0],S=p[1],A=Object(c.useRef)(null),_=Object(l.useHistory)(),I=function(){var e=Object(h.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:"briefabout",courseId:o,accordionId:null===A||void 0===A||null===(t=A.current)||void 0===t?void 0:t._id},e.next=3,i(n);case 3:200===e.sent.status&&_.push("/page");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(a.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(C.jsxs)(a.a.Body,{children:[Object(C.jsx)("div",{className:"".concat(u?"my-3":"my-2"," d-flex justify-content-end"),children:Object(C.jsx)(d.a,{variant:"primary",icon:{type:m.a},onClick:function(){return _.push("/page/courses/".concat(o,"/viewCourse/addBriefAbout"),{courseId:o})},children:"Add Brief About"})}),Object(C.jsx)(v.a,{columns:[{title:"About Title",field:"AboutTitle",width:300,render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("span",{children:e.AboutTitle})})}},{title:"About Description",field:"AboutDescription",width:600,render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{style:{width:"auto",maxWidth:"900px",minWidth:"400px",height:"300px",overflow:"scroll"},children:Object(C.jsx)(g.a,{htmlContent:null===e||void 0===e?void 0:e.AboutDescription})})})}},{width:300,title:"About Image",field:"AboutImage",render:function(e){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(N.a,{src:k.a+(null===e||void 0===e?void 0:e.AboutImage),name:null===e||void 0===e?void 0:e.AboutTitle,size:"70",className:"ff-primary rounded-circle me-3"})})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(C.jsx)(y.a,{menu:[{label:Object(C.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(C.jsx)(m.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return _.push("/page/courses/".concat(o,"/viewCourse/").concat(e.data._id,"/editBriefAbout"),{data:Object(f.a)({},e.data)})}},{label:Object(C.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(C.jsx)(m.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){S(!0),A.current=e.data}}],iconSize:"large"})}},search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,data:s,loading:n})]})}),Object(C.jsx)(x.a,{show:w,setShow:S,title:"Delete Course About Section",message:"Are you sure, you want to delete <b>".concat(null===(t=A.current)||void 0===t?void 0:t.AboutTitle,"</b>?"),onConfirm:I})]})}));t.default=Object(u.b)((function(e){return{fetching:e.homepage.fetching}}),(function(e){return{}}))((function(e){e.fetching;var t,n=Object(b.a)(),u=Object(l.useHistory)(),f=Object(c.useState)("accordion"),p=Object(r.a)(f,2),O=p[0],h=p[1],m=null===(t=u.location.state)||void 0===t?void 0:t.data;return Object(C.jsxs)(j.a,{id:"page--Course",title:"Course",children:[Object(C.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(C.jsx)(d.a,{icon:Object(C.jsx)(o.a,{}),variant:"outline-link",onClick:function(){u.goBack()},className:"p-0 me-2"}),Object(C.jsx)("h4",{className:"m-0",children:" Courses Details"})]}),Object(C.jsx)(a.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(C.jsx)(a.a.Body,{className:"".concat(n&&"p-0"),children:Object(C.jsxs)(i.a,{id:"controlled-tab-example",activeKey:O,onSelect:function(e){return h(e)},className:"mb-3",children:[Object(C.jsx)(s.a,{eventKey:"accordion",title:Object(C.jsx)("span",{className:"title_user",children:"Accordion Details"}),children:Object(C.jsx)(S,{history:u,id:null===m||void 0===m?void 0:m._id,listData:null===m||void 0===m?void 0:m.accordionSections})}),Object(C.jsx)(s.a,{eventKey:"trainingProfile",title:Object(C.jsx)("span",{className:"title_user",children:"Trainer Profile Details"}),children:Object(C.jsx)(A,{history:u,id:null===m||void 0===m?void 0:m._id,listData:null===m||void 0===m?void 0:m.trainerProfiles})}),Object(C.jsx)(s.a,{eventKey:"testimonial",title:Object(C.jsx)("span",{className:"title_user",children:"Testimonial Details"}),children:Object(C.jsx)(_,{history:u,id:null===m||void 0===m?void 0:m._id,listData:null===m||void 0===m?void 0:m.testimonials})}),Object(C.jsx)(s.a,{eventKey:"joinImageSlider",title:Object(C.jsx)("span",{className:"title_user",children:"Join Image Slider Details"}),children:Object(C.jsx)(I,{history:u,id:null===m||void 0===m?void 0:m._id,listData:null===m||void 0===m?void 0:m.joinCourseImageSlider})}),Object(C.jsx)(s.a,{eventKey:"otherLink",title:Object(C.jsx)("span",{className:"title_user",children:"Other Links Detail"}),children:Object(C.jsx)(T,{history:u,id:null===m||void 0===m?void 0:m._id,listData:null===m||void 0===m?void 0:m.courseOtherLinks})}),Object(C.jsx)(s.a,{eventKey:"briefAbout",title:Object(C.jsx)("span",{className:"title_user",children:"Brief About Detail"}),children:Object(C.jsx)(E,{history:u,id:null===m||void 0===m?void 0:m._id,listData:null===m||void 0===m?void 0:m.briefAbout})})]})})})]})}))}}]);
//# sourceMappingURL=136.62d6d67e.chunk.js.map