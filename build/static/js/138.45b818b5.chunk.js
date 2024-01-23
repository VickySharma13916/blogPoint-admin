(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[138],{1159:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n(2),c=n(623),i=n(1073),o=n(1185),s=n(210),l=n(37),u=n(22),d=n(629),j=n(271),b=n(102),p=n(1),f=n(627),h=n.n(f),O=n(628),m=n(73),x=n(638),v=n(635),g=n(637),w=n(270),y=n(677),k=n(3),S=Object(l.b)((function(e){return{fetching:e.workshop.fetching}}),(function(e){return{deleteAccordionWebinar:function(t){return e(Object(y.b)(t))}}}))((function(e){var t,n=e.fetching,i=e.deleteAccordionWebinar,o=e.listData,s=e.id,l=Object(b.a)(),j=Object(a.useState)(!1),f=Object(r.a)(j,2),y=f[0],S=f[1],N=Object(a.useRef)(null),C=Object(u.useHistory)(),A=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:"accordion",courseId:s,accordionId:null===N||void 0===N||null===(t=N.current)||void 0===t?void 0:t._id},e.next=3,i(n);case 3:200===e.sent.status&&C.push("/page");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(c.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(k.jsxs)(c.a.Body,{children:[Object(k.jsx)("div",{className:"".concat(l?"my-3":"my-2"," d-flex justify-content-end"),children:Object(k.jsx)(d.a,{variant:"primary",icon:{type:m.a},onClick:function(){return C.push("/page/workshops/".concat(s,"/viewWorkshop/addAccordion"),{courseId:s})},children:"Add Accordion"})}),Object(k.jsx)(v.a,{columns:[{title:"Accordion Title",field:"AccordionTitle",width:250,render:function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("span",{children:e.AccordionTitle})})}},{title:"Accordion Description",field:"AccordionDescription",width:400,render:function(e){return Object(k.jsx)("div",{style:{width:"auto",maxWidth:"900px",minWidth:"400px",height:"300px",overflow:"scroll"},children:Object(k.jsx)(g.a,{htmlContent:null===e||void 0===e?void 0:e.AccordionDescription})})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(k.jsx)(w.a,{menu:[{label:Object(k.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(k.jsx)(m.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return C.push("/page/workshops/".concat(s,"/viewWorkshop/").concat(e.data._id,"/editAccordion"),{data:Object(p.a)({},e.data)})}},{label:Object(k.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(k.jsx)(m.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){S(!0),N.current=e.data}}],iconSize:"large"})}},search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,data:o,loading:n})]})}),Object(k.jsx)(x.a,{show:y,setShow:S,title:"Delete workshop Accordion",message:"Are you sure, you want to delete <b>".concat(null===(t=N.current)||void 0===t?void 0:t.AccordionTitle,"</b>?"),onConfirm:A})]})})),N=Object(l.b)((function(e){return{fetching:e.workshop.fetching}}),(function(e){return{deleteworkshopDetail:function(t){return e(Object(y.b)(t))}}}))((function(e){var t,n=e.fetching,i=e.deleteworkshopDetail,o=e.listData,s=e.id,l=Object(b.a)(),j=Object(a.useState)(!1),f=Object(r.a)(j,2),g=f[0],y=f[1],S=Object(a.useRef)(null),N=Object(u.useHistory)(),C=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:"links",courseId:s,accordionId:null===S||void 0===S||null===(t=S.current)||void 0===t?void 0:t._id},e.next=3,i(n);case 3:200===e.sent.status&&N.push("/page");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(c.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(k.jsxs)(c.a.Body,{children:[Object(k.jsx)("div",{className:"".concat(l?"my-3":"my-2"," d-flex justify-content-end"),children:Object(k.jsx)(d.a,{variant:"primary",icon:{type:m.a},onClick:function(){return N.push("/page/workshops/".concat(s,"/viewWorkshop/addOtherLink"),{courseId:s})},children:"Add Other Link"})}),Object(k.jsx)(v.a,{columns:[{title:"workshop Other Name",field:"workshopOtherName",width:250,render:function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("span",{children:e.workshopOtherName})})}},{title:"workshop Other Link",field:"workshopOtherLink",width:250,render:function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("a",{href:null===e||void 0===e?void 0:e.workshopOtherLink,children:e.workshopOtherLink})})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(k.jsx)(w.a,{menu:[{label:Object(k.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(k.jsx)(m.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return N.push("/page/workshops/".concat(s,"/viewWorkshop/").concat(e.data._id,"/editOtherLink"),{data:Object(p.a)({},e.data)})}},{label:Object(k.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(k.jsx)(m.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){y(!0),S.current=e.data}}],iconSize:"large"})}},search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,data:o,loading:n})]})}),Object(k.jsx)(x.a,{show:g,setShow:y,title:"Delete workshop Other Link",message:"Are you sure, you want to delete <b>".concat(null===(t=S.current)||void 0===t?void 0:t.workshopOtherName,"</b>?"),onConfirm:C})]})})),C=n(269),A=n(268),_=Object(l.b)((function(e){return{fetching:e.workshop.fetching}}),(function(e){return{deleteAccordionworkshop:function(t){return e(Object(y.b)(t))}}}))((function(e){var t,n=e.fetching,i=e.deleteAccordionworkshop,o=e.listData,s=e.id,l=Object(b.a)(),j=Object(a.useState)(!1),f=Object(r.a)(j,2),y=f[0],S=f[1],N=Object(a.useRef)(null),_=Object(u.useHistory)(),I=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:"briefabout",courseId:s,accordionId:null===N||void 0===N||null===(t=N.current)||void 0===t?void 0:t._id},e.next=3,i(n);case 3:200===e.sent.status&&_.push("/page");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(c.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(k.jsxs)(c.a.Body,{children:[Object(k.jsx)("div",{className:"".concat(l?"my-3":"my-2"," d-flex justify-content-end"),children:Object(k.jsx)(d.a,{variant:"primary",icon:{type:m.a},onClick:function(){return _.push("/page/workshops/".concat(s,"/viewWorkshop/addBriefAbout"),{courseId:s})},children:"Add Brief About"})}),Object(k.jsx)(v.a,{columns:[{title:"About Title",field:"AboutTitle",width:300,render:function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("span",{children:e.AboutTitle})})}},{title:"About Description",field:"AboutDescription",width:600,render:function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{style:{width:"auto",maxWidth:"900px",minWidth:"400px",height:"300px",overflow:"scroll"},children:Object(k.jsx)(g.a,{htmlContent:null===e||void 0===e?void 0:e.AboutDescription})})})}},{width:300,title:"About Image",field:"AboutImage",render:function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(C.a,{src:A.a+(null===e||void 0===e?void 0:e.AboutImage),name:null===e||void 0===e?void 0:e.AboutTitle,size:"70",className:"ff-primary rounded-circle me-3"})})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(k.jsx)(w.a,{menu:[{label:Object(k.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(k.jsx)(m.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return _.push("/page/workshops/".concat(s,"/viewWorkshop/").concat(e.data._id,"/editBriefAbout"),{data:Object(p.a)({},e.data)})}},{label:Object(k.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(k.jsx)(m.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){S(!0),N.current=e.data}}],iconSize:"large"})}},search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,data:o,loading:n})]})}),Object(k.jsx)(x.a,{show:y,setShow:S,title:"Delete workshop About Section",message:"Are you sure, you want to delete <b>".concat(null===(t=N.current)||void 0===t?void 0:t.AboutTitle,"</b>?"),onConfirm:I})]})})),I=Object(l.b)((function(e){return{fetching:e.workshop.fetching}}),(function(e){return{deleteAccordionCourse:function(t){return e(Object(y.b)(t))}}}))((function(e){var t,n=e.fetching,i=e.deleteAccordionCourse,o=e.listData,s=e.id,l=Object(b.a)(),j=Object(a.useState)(!1),f=Object(r.a)(j,2),g=f[0],y=f[1],S=Object(a.useRef)(null),N=Object(u.useHistory)(),_=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:"testimonial",courseId:s,accordionId:null===S||void 0===S||null===(t=S.current)||void 0===t?void 0:t._id},e.next=3,i(n);case 3:200===e.sent.status&&N.push("/page");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(c.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(k.jsxs)(c.a.Body,{children:[Object(k.jsx)("div",{className:"".concat(l?"my-3":"my-2"," d-flex justify-content-end"),children:Object(k.jsx)(d.a,{variant:"primary",icon:{type:m.a},onClick:function(){return N.push("/page/workshops/".concat(s,"/viewWorkshop/addTestimonial"),{courseId:s})},children:"Add Testimonial"})}),Object(k.jsx)(v.a,{columns:[{title:"Testimonial Name",field:"studentName",width:400,render:function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("span",{children:e.studentName})})}},{title:"Testimonial Description",field:"studentDescription",width:600,render:function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("span",{style:{width:"600px",paddingLeft:"10px",height:"200px",overflow:"scroll"},children:e.studentDescription})})}},{width:300,title:"Testimonial User Image",field:"studentImage",render:function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(C.a,{src:A.a+(null===e||void 0===e?void 0:e.studentImage),name:null===e||void 0===e?void 0:e.studentName,size:"70",className:"ff-primary rounded-circle me-3"})})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(k.jsx)(w.a,{menu:[{label:Object(k.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(k.jsx)(m.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return N.push("/page/workshops/".concat(s,"/viewWorkshop/").concat(e.data._id,"/editTestimonial"),{data:Object(p.a)({},e.data)})}},{label:Object(k.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(k.jsx)(m.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){y(!0),S.current=e.data}}],iconSize:"large"})}},search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,data:o,loading:n})]})}),Object(k.jsx)(x.a,{show:g,setShow:y,title:"Delete workshop Testimonial",message:"Are you sure, you want to delete <b>".concat(null===(t=S.current)||void 0===t?void 0:t.studentName,"</b>?"),onConfirm:_})]})})),D=Object(l.b)((function(e){return{fetching:e.workshop.fetching}}),(function(e){return{deleteAccordionCourse:function(t){return e(Object(y.b)(t))}}}))((function(e){var t,n=e.fetching,i=e.deleteAccordionCourse,o=e.listData,s=e.id,l=Object(b.a)(),j=Object(a.useState)(!1),f=Object(r.a)(j,2),g=f[0],y=f[1],S=Object(a.useRef)(null),N=Object(u.useHistory)(),_=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:"joinImage",courseId:s,accordionId:null===S||void 0===S||null===(t=S.current)||void 0===t?void 0:t._id},e.next=3,i(n);case 3:200===e.sent.status&&N.push("/page");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(c.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(k.jsxs)(c.a.Body,{children:[Object(k.jsx)("div",{className:"".concat(l?"my-3":"my-2"," d-flex justify-content-end"),children:Object(k.jsx)(d.a,{variant:"primary",icon:{type:m.a},onClick:function(){return N.push("/page/workshops/".concat(s,"/viewWorkshop/addJoinImageSlider"),{courseId:s})},children:"Add Join Image Slider"})}),Object(k.jsx)(v.a,{columns:[{title:"join Slider Description",field:"joinDescription",width:400,render:function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("span",{children:e.joinDescription})})}},{width:300,title:"Join Slider Image",field:"joinImage",render:function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(C.a,{src:A.a+(null===e||void 0===e?void 0:e.joinImage),name:null===e||void 0===e?void 0:e.joinDescription,size:"70",className:"ff-primary rounded-circle me-3"})})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(k.jsx)(w.a,{menu:[{label:Object(k.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(k.jsx)(m.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return N.push("/page/workshops/".concat(s,"/viewWorkshop/").concat(e.data._id,"/editJoinSlider"),{data:Object(p.a)({},e.data)})}},{label:Object(k.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(k.jsx)(m.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){y(!0),S.current=e.data}}],iconSize:"large"})}},search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,data:o,loading:n})]})}),Object(k.jsx)(x.a,{show:g,setShow:y,title:"Delete workshop Join Image Slider",message:"Are you sure, you want to delete <b>".concat(null===(t=S.current)||void 0===t?void 0:t.joinDescription,"</b>?"),onConfirm:_})]})})),T=Object(l.b)((function(e){return{fetching:e.workshop.fetching}}),(function(e){return{deleteAccordionCourse:function(t){return e(Object(y.b)(t))}}}))((function(e){var t,n=e.fetching,i=e.deleteAccordionCourse,o=e.listData,s=e.id,l=Object(b.a)(),j=Object(a.useState)(!1),f=Object(r.a)(j,2),g=f[0],y=f[1],S=Object(a.useRef)(null),N=Object(u.useHistory)(),_=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:"trainingProfile",courseId:s,accordionId:null===S||void 0===S||null===(t=S.current)||void 0===t?void 0:t._id},e.next=3,i(n);case 3:200===e.sent.status&&N.push("/page");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(c.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(k.jsxs)(c.a.Body,{children:[Object(k.jsx)("div",{className:"".concat(l?"my-3":"my-2"," d-flex justify-content-end"),children:Object(k.jsx)(d.a,{variant:"primary",icon:{type:m.a},onClick:function(){return N.push("/page/workshops/".concat(s,"/viewWorkshop/addTrainerProfile"),{courseId:s})},children:"Add Trainer Profile"})}),Object(k.jsx)(v.a,{columns:[{title:"Trainer Name",field:"trainerName",width:400,render:function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("span",{children:e.trainerName})})}},{title:"Trainer Designation",field:"trainerDesignation",width:250,render:function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("span",{children:e.trainerDesignation})})}},{title:"Trainer Company",field:"trainerCompany",width:250,render:function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("span",{children:e.trainerCompany})})}},{width:300,title:"Trainer Image",field:"trainerImage",render:function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(C.a,{src:A.a+(null===e||void 0===e?void 0:e.trainerImage),name:null===e||void 0===e?void 0:e.trainerName,size:"70",className:"ff-primary rounded-circle me-3"})})}}],actions:[{onClick:function(e,t){return console.log(t)}}],components:{Action:function(e){return Object(k.jsx)(w.a,{menu:[{label:Object(k.jsxs)("span",{className:"d-flex align-items-center text-secondary",children:[Object(k.jsx)(m.j,{size:20,className:"me-2"})," Edit"]}),onClick:function(){return N.push("/page/workshops/".concat(s,"/viewWorkshop/").concat(e.data._id,"/editTrainerProfile"),{data:Object(p.a)({},e.data)})}},{label:Object(k.jsxs)("span",{className:"d-flex align-items-center text-danger",children:[Object(k.jsx)(m.h,{size:20,className:"me-2"})," Delete"]}),onClick:function(){y(!0),S.current=e.data}}],iconSize:"large"})}},search:!1,downloadcsv:!0,downloadExcel:!0,filters:!0,resetBtn:!1,data:o,loading:n})]})}),Object(k.jsx)(x.a,{show:g,setShow:y,title:"Delete workshop Accordion",message:"Are you sure, you want to delete <b>".concat(null===(t=S.current)||void 0===t?void 0:t.trainerName,"</b>?"),onConfirm:_})]})}));t.default=Object(l.b)((function(e){return{fetching:e.homepage.fetching}}),(function(e){return{}}))((function(e){e.fetching;var t,n=Object(b.a)(),l=Object(u.useHistory)(),p=Object(a.useState)("accordion"),f=Object(r.a)(p,2),h=f[0],O=f[1],m=null===(t=l.location.state)||void 0===t?void 0:t.data;return Object(k.jsxs)(j.a,{id:"page--Workshop",title:"Workshop",children:[Object(k.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[Object(k.jsx)(d.a,{icon:Object(k.jsx)(s.a,{}),variant:"outline-link",onClick:function(){l.goBack()},className:"p-0 me-2"}),Object(k.jsx)("h4",{className:"m-0",children:"Workshop Details"})]}),Object(k.jsx)(c.a,{border:"light",className:"w-100 mx-auto pt-3 px-3 mb-5 position-relative",children:Object(k.jsx)(c.a.Body,{className:"".concat(n&&"p-0"),children:Object(k.jsxs)(i.a,{id:"controlled-tab-example",activeKey:h,onSelect:function(e){return O(e)},className:"mb-3",children:[Object(k.jsx)(o.a,{eventKey:"accordion",title:Object(k.jsx)("span",{className:"title_user",children:"Accordion Details"}),children:Object(k.jsx)(S,{history:l,id:null===m||void 0===m?void 0:m._id,listData:null===m||void 0===m?void 0:m.accordionSections})}),Object(k.jsx)(o.a,{eventKey:"trainingProfile",title:Object(k.jsx)("span",{className:"title_user",children:"Trainer Profile Details"}),children:Object(k.jsx)(T,{history:l,id:null===m||void 0===m?void 0:m._id,listData:null===m||void 0===m?void 0:m.trainerProfiles})}),Object(k.jsx)(o.a,{eventKey:"otherLink",title:Object(k.jsx)("span",{className:"title_user",children:"Other Links Detail"}),children:Object(k.jsx)(N,{history:l,id:null===m||void 0===m?void 0:m._id,listData:null===m||void 0===m?void 0:m.workshopOtherLinks})}),Object(k.jsx)(o.a,{eventKey:"briefAbout",title:Object(k.jsx)("span",{className:"title_user",children:"Brief About Detail"}),children:Object(k.jsx)(_,{history:l,id:null===m||void 0===m?void 0:m._id,listData:null===m||void 0===m?void 0:m.briefAbout})}),Object(k.jsx)(o.a,{eventKey:"testimonial",title:Object(k.jsx)("span",{className:"title_user",children:"Testimonial Details"}),children:Object(k.jsx)(I,{history:l,id:null===m||void 0===m?void 0:m._id,listData:null===m||void 0===m?void 0:m.testimonials})}),Object(k.jsx)(o.a,{eventKey:"joinImageSlider",title:Object(k.jsx)("span",{className:"title_user",children:"Join Image Slider Details"}),children:Object(k.jsx)(D,{history:l,id:null===m||void 0===m?void 0:m._id,listData:null===m||void 0===m?void 0:m.joinworkshopImageSlider})})]})})})]})}))},629:function(e,t,n){"use strict";var r=n(1),a=(n(2),n(881)),c=n(3),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={size:22};return"lg"===t?n.size=32:"sm"===t&&(n.size=18),Object(c.jsx)(e.type,Object(r.a)(Object(r.a)({},e.props),n))},o=function(e){var t=e.variant,n=e.className,r=e.onClick,o=e.size,s=e.isLoading,l=e.disabled,u=e.children,d=e.icon;return Object(c.jsx)(a.a,{variant:t,className:"btn-icon ".concat(o?"btn-icon-".concat(o):""," ").concat(s?"btn-icon-loading":""," ").concat(n),onClick:r,size:o,disabled:s||l,children:Object(c.jsxs)("span",{children:[i(d,o),u&&Object(c.jsx)("span",{children:u})]})})};o.defaultProps={variant:"default",className:"",size:"",onClick:function(){return null},isLoading:!1,disabled:!1,icon:null},t.a=o},630:function(e,t,n){"use strict";var r=n(1),a=n(13),c=n(12),i=n(2),o=n.n(i),s=n(756),l=n(73),u=n(209),d=n(629),j=n(3),b=["className","onChange","onBlur","label","id","error","isClearable","hint","type"],p=o.a.forwardRef((function(e,t){var n=e.className,o=e.onChange,p=e.onBlur,f=e.label,h=e.id,O=e.error,m=e.isClearable,x=e.hint,v=e.type,g=Object(c.a)(e,b),w=Object(i.useState)(Object(s.a)()),y=Object(a.a)(w,2),k=y[0],S=y[1],N=Object(i.useState)(v),C=Object(a.a)(N,2),A=C[0],_=C[1];return Object(j.jsxs)("span",{className:"d-inline-block w-100 position-relative pt-2 pb-4 input__wrapper ".concat(O?"error":""),ref:t,children:[Object(j.jsx)("input",Object(r.a)({id:"input-".concat(h),type:A,className:"".concat(n).concat(m?" input-clearable":""),onChange:o,onBlur:p,placeholder:f,step:"any"},function(){var e=Object(r.a)({},g);return e.defaultValue=e.value||"",delete e.value,e}()),"input-".concat(k)),Object(j.jsx)("label",{htmlFor:"input-".concat(h),children:f}),Object(j.jsx)("span",{className:"input-error",children:O}),m&&Object(j.jsx)(l.e,{className:"input-clear-btn",size:18,onClick:function(){o({target:{value:""}}),S(Object(s.a)())}}),"password"===v&&Object(j.jsx)(d.a,{icon:"password"===A?Object(j.jsx)(u.d,{}):Object(j.jsx)(u.c,{}),variant:"outline-link",onClick:function(){return _("password"===A?"text":"password")},className:"p-0 m-0 position-absolute btn--show-password"}),""!==x&&Object(j.jsx)("span",{style:{fontSize:"12px",color:"#c1b1b1"},children:x})]})}));p.defaultProps={className:"",onChange:function(){return null},onBlur:function(){return null},label:"",id:Object(s.a)(),error:"",isClearable:!1,type:"text",hint:""},t.a=p},635:function(e,t,n){"use strict";var r=n(12),a=n(627),c=n.n(a),i=n(628),o=n(13),s=n(1),l=n(671),u=n.n(l),d=n(674),j=n(2),b=n(73),p=n(756),f=n(159),h=n(629),O=n(3),m=["data"],x=["data"],v={FirstPage:Object(j.forwardRef)((function(e,t){return Object(O.jsx)(b.n,Object(s.a)(Object(s.a)({},e),{},{ref:t}))})),LastPage:Object(j.forwardRef)((function(e,t){return Object(O.jsx)(b.p,Object(s.a)(Object(s.a)({},e),{},{ref:t}))})),NextPage:Object(j.forwardRef)((function(e,t){return Object(O.jsx)(b.g,Object(s.a)(Object(s.a)({},e),{},{ref:t}))})),PreviousPage:Object(j.forwardRef)((function(e,t){return Object(O.jsx)(b.f,Object(s.a)(Object(s.a)({},e),{},{ref:t}))})),SortArrow:Object(j.forwardRef)((function(e,t){return Object(O.jsx)(b.d,Object(s.a)(Object(s.a)({},e),{},{ref:t}))}))},g=function(e){var t=e.loading,n=e.columns,a=e.actions,l=e.components,g=e.onRowClick,w=e.options,y=e.selectedRow,k=e.getList,S=(e.search,e.downloadcsv),N=e.downloadExcel,C=e.filters,A=(e.filterOptions,e.data),_=(e.setFilters,e.resetFilters),I=e.refresh,D=e.resetBtn,T=Object(j.createRef)(),L=Object(j.useState)(Object(p.a)()),E=Object(o.a)(L,2),R=E[0],z=E[1],F=Object(j.useState)(!1),P=Object(o.a)(F,2),W=P[0],B=P[1],H={isLoading:t,icons:v,style:{boxShadow:"none"},localization:{toolbar:{searchTooltip:"Search",searchPlaceholder:"Search"}},options:Object(s.a)({showTitle:!1,search:!0,toolbar:!0,filtering:W,draggable:!1,actionsColumnIndex:-1,pageSize:10,emptyRowsWhenPaging:!1,pageSizeOptions:[10,30,50,100,500]},w),columns:n,data:A||function(e){return new Promise(function(){var t=Object(i.a)(c.a.mark((function t(n,r){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k(Object(f.a)(e));case 3:if((a=t.sent).data){t.next=6;break}return t.abrupt("return",r());case 6:return t.abrupt("return",n({data:void 0!==a.data.docs?a.data.docs:a.data,page:void 0!==a.data.page?a.data.page-1:0,totalCount:void 0!==a.data.totalDocs?a.data.totalDocs:0}));case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",r(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())},actions:a,onRowClick:g};l&&(H.components=l),g&&(H.options=Object(s.a)(Object(s.a)({},H.options),{},{rowStyle:function(e){return{backgroundColor:y&&y===e.id?"#f5f5f5":"#FFF"}},onRowClick:g}));var K=function(){g&&g(null),_(),z(Object(p.a)())};return Object(j.useEffect)((function(){I&&K()}),[I]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"mb-3 d-flex flex-lg-row flex-column position-relative table-toolbar",children:Object(O.jsxs)("span",{className:"d-flex flex-wrap zindex-dropdown end-0 gap-2 gap-lg-3 align-items-center justify-content-end ms-auto",children:[C&&Object(O.jsx)(h.a,{icon:Object(O.jsx)(b.m,{}),variant:"outline-default",size:"sm",onClick:function(){return B(!W)},disabled:t,children:"Filters"}),D&&Object(O.jsx)(h.a,{icon:Object(O.jsx)(b.x,{}),variant:"outline-default",size:"sm",onClick:K,disabled:t,children:"Reset"}),S&&Object(O.jsx)(h.a,{icon:Object(O.jsx)(b.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.csv,t=A.map((function(e){var t=e.data,n=Object(r.a)(e,m),a=t?Object.values(t).reduce((function(e,t){return Object(s.a)(Object(s.a)({},e),t)}),{}):{},c=Object(s.a)({_id:n._id,Link:n.Link},a);return t?c:n}));Object(d.a)({data:t,fileName:"CSVformat",exportType:e})},disabled:t,children:"CSV"}),N&&Object(O.jsx)(h.a,{icon:Object(O.jsx)(b.i,{}),variant:"outline-default",size:"sm",onClick:function(){var e=d.a.types.xls,t=A.map((function(e){var t=e.data,n=Object(r.a)(e,x),a=t?Object.values(t).reduce((function(e,t){return Object(s.a)(Object(s.a)({},e),t)}),{}):{},c=Object(s.a)({_id:n._id,Link:n.Link},a);return t?c:n}));Object(d.a)({data:t,fileName:"ExcelFormat",exportType:e})},disabled:t,children:"Excel"})]})}),Object(O.jsx)(u.a,Object(s.a)({tableRef:T},H),"data-table-".concat(R))]})};g.defaultProps={loading:!1,actions:[],components:null,onRowClick:null,options:{},selectedRow:null,search:!0,filters:!1,filterOptions:[],setFilters:function(){return null},resetFilters:function(){return null},refresh:null,resetBtn:!0},t.a=g},637:function(e,t,n){"use strict";var r=n(668),a=n.n(r),c=n(2),i=n(881),o=n(669),s=n(3);t.a=function(e){var t=e.htmlContent,n=e.preview,r=e.handlePreview,l=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=a.a.sanitize(t);l.current.innerHTML=e,l.current.querySelectorAll("pre").forEach((function(e){var t,n=(t=e.innerHTML,(new DOMParser).parseFromString(t,"text/html").body.textContent||"");e.innerHTML=n;var r=document.createElement("div");r.innerHTML=e.innerHTML,e.parentNode.replaceChild(r,e)}))}),[t]),Object(s.jsxs)("div",{className:"position-relative",children:[n&&Object(s.jsx)("div",{className:"w-100 d-flex justify-content-end mb-2",children:Object(s.jsx)(i.a,{variant:"primary",onClick:function(){return r()},children:Object(s.jsx)(o.a,{})})}),Object(s.jsx)("div",{ref:l,style:{whiteSpace:"pre-wrap",wordBreak:"break-word",border:"1px solid grey",borderRadius:"8px"}})]})}},638:function(e,t,n){"use strict";var r=n(627),a=n.n(r),c=n(628),i=n(13),o=n(2),s=n(683),l=n(881),u=n(636),d=n(630),j=n(3),b=function(e){var t=e.show,n=e.setShow,r=e.title,b=e.message,p=e.onConfirm,f=e.getReason,h=e.bodyHtml,O=e.loadingBtnText,m=e.footer,x=Object(o.useState)(!1),v=Object(i.a)(x,2),g=v[0],w=v[1],y=Object(o.useState)(""),k=Object(i.a)(y,2),S=k[0],N=k[1],C=function(){n(!1)},A=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,p(S);case 3:w(!1),n(!1),N("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(s.a,{show:t,onHide:C,backdrop:"static",keyboard:!1,children:[Object(j.jsx)(s.a.Header,{closeButton:!0,children:Object(j.jsx)(s.a.Title,{children:r})}),Object(j.jsxs)(s.a.Body,{children:[Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:b}}),h,f&&Object(j.jsx)("div",{children:Object(j.jsx)(d.a,{id:"reason",name:"reason",label:"Reason",value:S,onChange:function(e){return N(e.target.value)}})})]}),m&&Object(j.jsxs)(s.a.Footer,{children:[Object(j.jsx)(l.a,{variant:"default",onClick:C,children:"Cancel"}),!f&&Object(j.jsxs)(l.a,{variant:"danger",onClick:A,children:[!g&&Object(j.jsx)("span",{children:"Confirm"}),g&&Object(j.jsxs)("span",{children:[O," ",Object(j.jsx)(u.a,{size:"sm",animation:"border"})]})]}),f&&Object(j.jsxs)(l.a,{disabled:""===S||S.length<=3,variant:"danger",onClick:A,children:[!g&&Object(j.jsx)("span",{children:"Confirm"}),g&&Object(j.jsxs)("span",{children:[O," ",Object(j.jsx)(u.a,{size:"sm",animation:"border"})]})]})]})]})};b.defaultProps={show:!1,setShow:function(){return null},title:"Give a title",message:"Your message here",onConfirm:function(){return null},getReason:!1,bodyHtml:Object(j.jsx)(j.Fragment,{}),loadingBtnText:"Deleting",footer:!0},t.a=b},677:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return w})),n.d(t,"g",(function(){return y})),n.d(t,"a",(function(){return k})),n.d(t,"f",(function(){return S})),n.d(t,"h",(function(){return N})),n.d(t,"b",(function(){return C}));var r=n(627),a=n.n(r),c=n(628),i=n(632),o=n.n(i),s=n(268),l=n(208),u=n(138),d=function(){return{type:u.a.POST_WORKSHOP_LIST_BEGIN}},j=function(e){return{type:u.a.POST_WORKSHOP_LIST_SUCCESS,payload:e}},b=function(e){return{type:u.a.POST_WORKSHOP_LIST_FAILURE,payload:e}},p=function(){return{type:u.a.DELETE_WORKSHOP_LIST_BEGIN}},f=function(e){return{type:u.a.DELETE_WORKSHOP_LIST_SUCCESS,payload:e}},h=function(e){return{type:u.a.DELETE_WORKSHOP_LIST_FAILURE,payload:e}},O=function(){return{type:u.a.UPDATE_WORKSHOP_LIST_BEGIN}},m=function(e){return{type:u.a.UPDATE_WORKSHOP_LIST_SUCCESS,payload:e}},x=function(e){return{type:u.a.UPDATE_WORKSHOP_LIST_FAILURE,payload:e}};function v(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(l.a)()),t({type:u.a.GET_ALL_WORKSHOP_LIST_BEGIN}),e.prev=2,e.next=5,o.a.get("".concat(s.b,"workshop"));case 5:return i=e.sent,t((d=null===i||void 0===i||null===(n=i.data)||void 0===n||null===(r=n.docs)||void 0===r?void 0:r.data,{type:u.a.GET_ALL_WORKSHOP_LIST_SUCCESS,payload:d})),t(Object(l.b)({message:null===i||void 0===i||null===(c=i.data)||void 0===c?void 0:c.msg,options:{variant:"success"}})),e.abrupt("return",i);case 11:return e.prev=11,e.t0=e.catch(2),t((a=void 0,{type:u.a.GET_ALL_WORKSHOP_LIST_FAILURE,payload:a})),e.abrupt("return",!1);case 15:case"end":return e.stop()}var a,d}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}function g(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Object(l.a)()),r(d()),n.prev=2,n.next=5,o.a.post("".concat(s.b,"workshop/upload/").concat(t),e);case 5:return c=n.sent,r(j(null===c||void 0===c?void 0:c.data)),r(Object(l.b)({message:"".concat(t," Retrieved Successfully"),options:{variant:"success"}})),n.abrupt("return",c);case 11:return n.prev=11,n.t0=n.catch(2),r(b()),n.abrupt("return",!1);case 15:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e){return n.apply(this,arguments)}}()}function w(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.a)()),n(d()),t.prev=2,t.next=5,o.a.post("".concat(s.b,"workshop"),e);case 5:return r=t.sent,n(j(null===r||void 0===r?void 0:r.data)),n(Object(l.b)({message:"Workshop Add Successfully",options:{variant:"success"}})),t.abrupt("return",r);case 11:return t.prev=11,t.t0=t.catch(2),n(b()),t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}function y(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.a)()),n(O()),t.prev=2,r=e.id,t.next=6,o.a.put("".concat(s.b,"workshop/").concat(r),e);case 6:return c=t.sent,n(m(c.data)),n(Object(l.b)({message:"Workshop Update Successfully",options:{variant:"success"}})),t.abrupt("return",c);case 12:return t.prev=12,t.t0=t.catch(2),n(x()),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}function k(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.a)()),n(p()),t.prev=2,t.next=5,o.a.delete("".concat(s.b,"workshop/").concat(e));case 5:return n(f()),n(Object(l.b)({message:"Workshop Delete Successfully",options:{variant:"success"}})),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(2),n(h()),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}function S(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.a)()),n(d()),t.prev=2,r=e.courseId,c=e.type,t.next=7,o.a.post("".concat(s.b,"workshop/").concat(r,"/").concat(c),e);case 7:return i=t.sent,n(j(null===i||void 0===i?void 0:i.data)),n(Object(l.b)({message:"".concat(c," Add Successfully"),options:{variant:"success"}})),t.abrupt("return",i);case 13:return t.prev=13,t.t0=t.catch(2),n(b()),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}()}function N(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c,i,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.a)()),n(O()),t.prev=2,r=e.accordionId,c=e.courseId,i=e.type,t.next=8,o.a.put("".concat(s.b,"workshop/").concat(c,"/").concat(i,"/").concat(r),e);case 8:return u=t.sent,n(m(u.data)),n(Object(l.b)({message:"".concat(i," Workshop Update Successfully"),options:{variant:"success"}})),t.abrupt("return",u);case 14:return t.prev=14,t.t0=t.catch(2),n(x()),t.abrupt("return",!1);case 18:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}()}function C(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c,i,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(l.a)()),n(p()),t.prev=2,r=e.accordionId,c=e.courseId,i=e.type,t.next=8,o.a.delete("".concat(s.b,"workshop/").concat(c,"/").concat(i,"/").concat(r),e);case 8:return u=t.sent,n(f(u.data)),n(Object(l.b)({message:"".concat(i," Workshop Delete Successfully"),options:{variant:"success"}})),t.abrupt("return",u);case 14:return t.prev=14,t.t0=t.catch(2),n(h()),t.abrupt("return",!1);case 18:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=138.45b818b5.chunk.js.map