(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[144],{1165:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(2),c=n(22),s=n(756),i=n(271),o=n(627),u=n.n(o),l=n(628),d=n(623),b=n(73),j=n(37),p=n(649),f=n(638),O=n(635),m=n(270),h=n(629),x=n(102),v=n(736),y=n(210),g=n(3),w=Object(j.b)((function(e){return{fetching:e.dynamicForm.fetching}}),(function(e){return{getInputTypeDetail:function(t){return e(Object(v.b)(t))},deleteDynamicForm:function(t){return e(Object(v.a)(t))}}}))((function(e){var t,n=e.fetching,s=e.deleteDynamicForm,i=e.getInputTypeDetail,o=Object(r.useState)([]),j=Object(a.a)(o,2),v=j[0],w=j[1],C=Object(x.a)(),F=Object(r.useState)(!1),k=Object(a.a)(F,2),_=k[0],N=k[1],S=Object(r.useRef)(null),D=Object(p.useHistory)(),R=Object(c.useRouteMatch)().url,E=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:200===(t=e.sent).status&&w(null===t||void 0===t?void 0:t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){E()}),[]);var I=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(null===(t=S.current)||void 0===t?void 0:t._id);case 2:e.sent&&E();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(g.jsxs)(d.a.Body,{children:[Object(g.jsx)("div",{className:"".concat(C?"my-3":"my-2"," d-flex justify-content-end"),children:Object(g.jsx)(h.a,{variant:"primary",icon:{type:b.a},onClick:function(){return D.push("".concat(R,"/addDynamicForm"))},children:"Add Dynamic Form List"})}),Object(g.jsx)(O.a,{columns:[{title:"Dynamic Input Link",render:function(e){return Object(g.jsx)(g.Fragment,{children:e.inputLink?e.inputLink:"N/A"})}},{width:300,title:"Status",field:"status",filtering:!1,render:function(e){var t="success",n="Published";return!1===e.status&&(t="warning",n="Draft"),Object(g.jsx)("span",{className:"text-".concat(t),children:n})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(g.jsx)(m.a,{menu:[{label:Object(g.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(g.jsx)(y.d,{size:20,className:"me-2"}),"Dynamic Form Detail"]}),onClick:function(){return D.push("".concat(R,"/viewDynamicForm"),{data:e.data})}},{label:Object(g.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(g.jsx)(b.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return D.push("".concat(R,"/").concat(e.data._id,"/edit"),{data:e.data})}},{label:Object(g.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(g.jsx)(b.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){N(!0),S.current=e.data}}],iconSize:"large"})}},search:!1,onRowClick:function(e,t){return null},filters:!0,downloadcsv:!0,downloadExcel:!0,resetBtn:!1,data:v,loading:n})]})}),Object(g.jsx)(f.a,{show:_,setShow:N,title:"Delete Dynamic Form",message:"Are you sure, you want to delete <b>".concat(null===S||void 0===S||null===(t=S.current)||void 0===t?void 0:t.inputLink,"</b>?"),onConfirm:I})]})}));t.default=function(){var e=Object(c.useHistory)(),t=Object(c.useRouteMatch)().path,n=Object(r.useState)(""),o=Object(a.a)(n,2),u=o[0],l=o[1];return Object(g.jsxs)(i.a,{id:"page--DynamicForm",title:"Dynamic Form ",children:[Object(g.jsx)("div",{className:"d-flex align-items-start mb-3",children:Object(g.jsx)("h1",{className:"m-0",children:"Dynamic Form List"})}),Object(g.jsx)(c.Route,{path:"".concat(t,"/"),children:Object(g.jsx)(w,{refresh:u,setRefresh:function(){return l(Object(s.a)())},history:e})})]})}},629:function(e,t,n){"use strict";var a=n(1),r=(n(2),n(881)),c=n(3),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={size:22};return"lg"===t?n.size=32:"sm"===t&&(n.size=18),Object(c.jsx)(e.type,Object(a.a)(Object(a.a)({},e.props),n))},i=function(e){var t=e.variant,n=e.className,a=e.onClick,i=e.size,o=e.isLoading,u=e.disabled,l=e.children,d=e.icon;return Object(c.jsx)(r.a,{variant:t,className:"btn-icon ".concat(i?"btn-icon-".concat(i):""," ").concat(o?"btn-icon-loading":""," ").concat(n),onClick:a,size:i,disabled:o||u,children:Object(c.jsxs)("span",{children:[s(d,i),l&&Object(c.jsx)("span",{children:l})]})})};i.defaultProps={variant:"default",className:"",size:"",onClick:function(){return null},isLoading:!1,disabled:!1,icon:null},t.a=i},630:function(e,t,n){"use strict";var a=n(1),r=n(13),c=n(12),s=n(2),i=n.n(s),o=n(756),u=n(73),l=n(209),d=n(629),b=n(3),j=["className","onChange","onBlur","label","id","error","isClearable","hint","type"],p=i.a.forwardRef((function(e,t){var n=e.className,i=e.onChange,p=e.onBlur,f=e.label,O=e.id,m=e.error,h=e.isClearable,x=e.hint,v=e.type,y=Object(c.a)(e,j),g=Object(s.useState)(Object(o.a)()),w=Object(r.a)(g,2),C=w[0],F=w[1],k=Object(s.useState)(v),_=Object(r.a)(k,2),N=_[0],S=_[1];return Object(b.jsxs)("span",{className:"d-inline-block w-100 position-relative pt-2 pb-4 input__wrapper ".concat(m?"error":""),ref:t,children:[Object(b.jsx)("input",Object(a.a)({id:"input-".concat(O),type:N,className:"".concat(n).concat(h?" input-clearable":""),onChange:i,onBlur:p,placeholder:f,step:"any"},function(){var e=Object(a.a)({},y);return e.defaultValue=e.value||"",delete e.value,e}()),"input-".concat(C)),Object(b.jsx)("label",{htmlFor:"input-".concat(O),children:f}),Object(b.jsx)("span",{className:"input-error",children:m}),h&&Object(b.jsx)(u.e,{className:"input-clear-btn",size:18,onClick:function(){i({target:{value:""}}),F(Object(o.a)())}}),"password"===v&&Object(b.jsx)(d.a,{icon:"password"===N?Object(b.jsx)(l.d,{}):Object(b.jsx)(l.c,{}),variant:"outline-link",onClick:function(){return S("password"===N?"text":"password")},className:"p-0 m-0 position-absolute btn--show-password"}),""!==x&&Object(b.jsx)("span",{style:{fontSize:"12px",color:"#c1b1b1"},children:x})]})}));p.defaultProps={className:"",onChange:function(){return null},onBlur:function(){return null},label:"",id:Object(o.a)(),error:"",isClearable:!1,type:"text",hint:""},t.a=p},635:function(e,t,n){"use strict";var a=n(12),r=n(627),c=n.n(r),s=n(628),i=n(13),o=n(1),u=n(671),l=n.n(u),d=n(674),b=n(2),j=n(73),p=n(756),f=n(159),O=n(629),m=n(3),h=["data"],x=["data"],v={FirstPage:Object(b.forwardRef)((function(e,t){return Object(m.jsx)(j.n,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),LastPage:Object(b.forwardRef)((function(e,t){return Object(m.jsx)(j.p,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),NextPage:Object(b.forwardRef)((function(e,t){return Object(m.jsx)(j.g,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),PreviousPage:Object(b.forwardRef)((function(e,t){return Object(m.jsx)(j.f,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),SortArrow:Object(b.forwardRef)((function(e,t){return Object(m.jsx)(j.d,Object(o.a)(Object(o.a)({},e),{},{ref:t}))}))},y=function(e){var t=e.loading,n=e.columns,r=e.actions,u=e.components,y=e.onRowClick,g=e.options,w=e.selectedRow,C=e.getList,F=(e.search,e.downloadcsv),k=e.downloadExcel,_=e.filters,N=(e.filterOptions,e.data),S=(e.setFilters,e.resetFilters),D=e.refresh,R=e.resetBtn,E=Object(b.createRef)(),I=Object(b.useState)(Object(p.a)()),M=Object(i.a)(I,2),A=M[0],L=M[1],z=Object(b.useState)(!1),T=Object(i.a)(z,2),P=T[0],B=T[1],Y={isLoading:t,icons:v,style:{boxShadow:"none"},localization:{toolbar:{searchTooltip:"Search",searchPlaceholder:"Search"}},options:Object(o.a)({showTitle:!1,search:!0,toolbar:!0,filtering:P,draggable:!1,actionsColumnIndex:-1,pageSize:10,emptyRowsWhenPaging:!1,pageSizeOptions:[10,30,50,100,500]},g),columns:n,data:N||function(e){return new Promise(function(){var t=Object(s.a)(c.a.mark((function t(n,a){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C(Object(f.a)(e));case 3:if((r=t.sent).data){t.next=6;break}return t.abrupt("return",a());case 6:return t.abrupt("return",n({data:void 0!==r.data.docs?r.data.docs:r.data,page:void 0!==r.data.page?r.data.page-1:0,totalCount:void 0!==r.data.totalDocs?r.data.totalDocs:0}));case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())},actions:r,onRowClick:y};u&&(Y.components=u),y&&(Y.options=Object(o.a)(Object(o.a)({},Y.options),{},{rowStyle:function(e){return{backgroundColor:w&&w===e.id?"#f5f5f5":"#FFF"}},onRowClick:y}));var U=function(){y&&y(null),S(),L(Object(p.a)())};return Object(b.useEffect)((function(){D&&U()}),[D]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"mb-3 d-flex flex-lg-row flex-column position-relative table-toolbar",children:Object(m.jsxs)("span",{className:"d-flex flex-wrap zindex-dropdown end-0 gap-2 gap-lg-3 align-items-center justify-content-end ms-auto",children:[_&&Object(m.jsx)(O.a,{icon:Object(m.jsx)(j.m,{}),variant:"outline-default",size:"sm",onClick:function(){return B(!P)},disabled:t,children:"Filters"}),R&&Object(m.jsx)(O.a,{icon:Object(m.jsx)(j.x,{}),variant:"outline-default",size:"sm",onClick:U,disabled:t,children:"Reset"}),F&&Object(m.jsx)(O.a,{icon:Object(m.jsx)(j.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.csv,t=N.map((function(e){var t=e.data,n=Object(a.a)(e,h),r=t?Object.values(t).reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),t)}),{}):{},c=Object(o.a)({_id:n._id,Link:n.Link},r);return t?c:n}));Object(d.a)({data:t,fileName:"CSVformat",exportType:e})},disabled:t,children:"CSV"}),k&&Object(m.jsx)(O.a,{icon:Object(m.jsx)(j.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.xls,t=N.map((function(e){var t=e.data,n=Object(a.a)(e,x),r=t?Object.values(t).reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),t)}),{}):{},c=Object(o.a)({_id:n._id,Link:n.Link},r);return t?c:n}));Object(d.a)({data:t,fileName:"ExcelFormat",exportType:e})},disabled:t,children:"Excel"})]})}),Object(m.jsx)(l.a,Object(o.a)({tableRef:E},Y),"data-table-".concat(A))]})};y.defaultProps={loading:!1,actions:[],components:null,onRowClick:null,options:{},selectedRow:null,search:!0,filters:!1,filterOptions:[],setFilters:function(){return null},resetFilters:function(){return null},refresh:null,resetBtn:!0},t.a=y},638:function(e,t,n){"use strict";var a=n(627),r=n.n(a),c=n(628),s=n(13),i=n(2),o=n(683),u=n(881),l=n(636),d=n(630),b=n(3),j=function(e){var t=e.show,n=e.setShow,a=e.title,j=e.message,p=e.onConfirm,f=e.getReason,O=e.bodyHtml,m=e.loadingBtnText,h=e.footer,x=Object(i.useState)(!1),v=Object(s.a)(x,2),y=v[0],g=v[1],w=Object(i.useState)(""),C=Object(s.a)(w,2),F=C[0],k=C[1],_=function(){n(!1)},N=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,p(F);case 3:g(!1),n(!1),k("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(o.a,{show:t,onHide:_,backdrop:"static",keyboard:!1,children:[Object(b.jsx)(o.a.Header,{closeButton:!0,children:Object(b.jsx)(o.a.Title,{children:a})}),Object(b.jsxs)(o.a.Body,{children:[Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:j}}),O,f&&Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{id:"reason",name:"reason",label:"Reason",value:F,onChange:function(e){return k(e.target.value)}})})]}),h&&Object(b.jsxs)(o.a.Footer,{children:[Object(b.jsx)(u.a,{variant:"default",onClick:_,children:"Cancel"}),!f&&Object(b.jsxs)(u.a,{variant:"danger",onClick:N,children:[!y&&Object(b.jsx)("span",{children:"Confirm"}),y&&Object(b.jsxs)("span",{children:[m," ",Object(b.jsx)(l.a,{size:"sm",animation:"border"})]})]}),f&&Object(b.jsxs)(u.a,{disabled:""===F||F.length<=3,variant:"danger",onClick:N,children:[!y&&Object(b.jsx)("span",{children:"Confirm"}),y&&Object(b.jsxs)("span",{children:[m," ",Object(b.jsx)(l.a,{size:"sm",animation:"border"})]})]})]})]})};j.defaultProps={show:!1,setShow:function(){return null},title:"Give a title",message:"Your message here",onConfirm:function(){return null},getReason:!1,bodyHtml:Object(b.jsx)(b.Fragment,{}),loadingBtnText:"Deleting",footer:!0},t.a=j},736:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"a",(function(){return O}));var a=n(627),r=n.n(a),c=n(628),s=n(632),i=n.n(s),o=n(268),u=n(208),l=n(57),d=function(e){return{type:l.a.POST_DYNAMIC_FORM_SUCCESS,payload:e}},b=function(e){return{type:l.a.UPDATE_DYNAMIC_FORM_SUCCESS,payload:e}};function j(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(u.a)()),t({type:l.a.GET_DYNAMIC_FORM_BEGIN}),e.prev=2,e.next=5,i.a.get("".concat(o.b,"inputField"));case 5:return n=e.sent,t((r=n.data,{type:l.a.GET_DYNAMIC_FORM_SUCCESS,payload:r})),t(Object(u.b)({message:"Dynamic Input Form Retrieved Successfully",options:{variant:"success"}})),e.abrupt("return",n);case 11:return e.prev=11,e.t0=e.catch(2),t((a=void 0,{type:l.a.GET_DYNAMIC_FORM_FAILURE,payload:a})),e.abrupt("return",!1);case 15:case"end":return e.stop()}var a,r}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}function p(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(u.a)()),n({type:l.a.POST_DYNAMIC_FORM_BEGIN}),t.prev=2,t.next=5,i.a.post("".concat(o.b,"inputField"),e);case 5:return a=t.sent,n(d(a.data)),n(Object(u.b)({message:"Dynamic Input Form Add Successfully",options:{variant:"success"}})),t.abrupt("return",a);case 11:return t.prev=11,t.t0=t.catch(2),n((r=void 0,{type:l.a.POST_DYNAMIC_FORM_FAILURE,payload:r})),t.abrupt("return",!1);case 15:case"end":return t.stop()}var r}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function f(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(u.a)()),n({type:l.a.UPDATE_DYNAMIC_FORM_BEGIN}),t.prev=2,a=e.id,t.next=6,i.a.put("".concat(o.b,"inputField/").concat(a),e);case 6:return c=t.sent,n(b(c.data)),n(Object(u.b)({message:"Dynamic Input Form Update Successfully",options:{variant:"success"}})),t.abrupt("return",c);case 12:return t.prev=12,t.t0=t.catch(2),n((r=void 0,{type:l.a.UPDATE_DYNAMIC_FORM_FAILURE,payload:r})),t.abrupt("return",!1);case 16:case"end":return t.stop()}var r}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}function O(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(u.a)()),n({type:l.a.DELETE_DYNAMIC_FORM_BEGIN}),t.prev=2,t.next=5,i.a.delete("".concat(o.b,"inputField/").concat(e));case 5:return n((r=void 0,{type:l.a.DELETE_DYNAMIC_FORM_SUCCESS,payload:r})),n(Object(u.b)({message:"Dynamic Input Form Delete Successfully",options:{variant:"success"}})),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(2),n((a=void 0,{type:l.a.DELETE_DYNAMIC_FORM_FAILURE,payload:a})),t.abrupt("return",!1);case 14:case"end":return t.stop()}var a,r}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=144.f95b45d4.chunk.js.map