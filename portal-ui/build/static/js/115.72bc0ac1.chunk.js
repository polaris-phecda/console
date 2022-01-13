(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[115],{398:function(e,t,a){"use strict";var n,c=a(16),o=a(1),s=a(2),r=a(41),i=a(386),l=a(378),d=a(413),j=a(414),b=a(415),u=a(316),m=a(320),O=a(122),p=a(32),f=a(48),h=a.n(f),x=a(128),g=a.n(x),v=a(127),C=a.n(v),y=a(124),S=a.n(y),N=a(0),k=function(){clearInterval(n)},M={displayErrorMessage:p.g},E=Object(r.b)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),M)(Object(m.a)((function(e){return Object(u.a)({modalErrorContainer:{position:"absolute",marginTop:10,width:"80%",backgroundColor:"#fff",border:"#C72C48 1px solid",borderLeftWidth:12,borderRadius:3,zIndex:1e3,padding:"10px 15px",left:"50%",transform:"translateX(-50%)",opacity:0,transitionDuration:"0.2s"},modalErrorShow:{opacity:1},closeButton:{position:"absolute",right:5,fontSize:"small",border:0,backgroundColor:"#fff",cursor:"pointer"},errorTitle:{display:"flex",alignItems:"center"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5,marginRight:25},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},detailsButton:{color:"#9C9C9C",display:"flex",alignItems:"center",border:0,backgroundColor:"transparent",paddingLeft:5,fontSize:14,transformDuration:"0.3s",cursor:"pointer"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",lineHeight:0,padding:"0 10px",transition:"all .2s ease-in-out",overflow:"hidden"},extraDetailsOpen:{lineHeight:1,padding:"3px 10px"},arrowElement:{marginLeft:-5},arrowOpen:{transform:"rotateZ(90deg)",transformDuration:"0.3s"}})}))((function(e){var t=e.classes,a=e.modalSnackMessage,o=e.displayErrorMessage,r=e.customStyle,i=Object(s.useState)(!1),l=Object(c.a)(i,2),d=l[0],j=l[1],b=Object(s.useState)(!1),u=Object(c.a)(b,2),m=u[0],O=u[1],p=Object(s.useCallback)((function(){O(!1)}),[]);Object(s.useEffect)((function(){m||(o({detailedError:"",errorMessage:""}),j(!1))}),[o,m]),Object(s.useEffect)((function(){""!==a.message&&"error"===a.type&&O(!0)}),[p,a.message,a.type]);var f=h()(a,"message",""),x=h()(a,"detailedErrorMsg","");return"error"!==a.type||""===f?null:Object(N.jsx)(s.Fragment,{children:Object(N.jsxs)("div",{className:"".concat(t.modalErrorContainer," ").concat(m?t.modalErrorShow:""),style:r,onMouseOver:k,onMouseLeave:function(){n=setInterval(p,1e4)},children:[Object(N.jsx)("button",{className:t.closeButton,onClick:p,children:Object(N.jsx)(S.a,{})}),Object(N.jsxs)("div",{className:t.errorTitle,children:[Object(N.jsx)("span",{className:t.messageIcon,children:Object(N.jsx)(C.a,{})}),Object(N.jsx)("span",{className:t.errorLabel,children:f})]}),""!==x&&Object(N.jsxs)(s.Fragment,{children:[Object(N.jsx)("div",{className:t.detailsContainerLink,children:Object(N.jsxs)("button",{className:t.detailsButton,onClick:function(){j(!d)},children:["Details",Object(N.jsx)(g.a,{className:"".concat(t.arrowElement," ").concat(d?t.arrowOpen:"")})]})}),Object(N.jsx)("div",{className:"".concat(t.extraDetailsContainer," ").concat(d?t.extraDetailsOpen:""),children:x})]})]})})}))),B=Object(r.b)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:p.h});t.a=Object(m.a)((function(e){return Object(u.a)(Object(o.a)(Object(o.a)({},O.h),{},{root:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},O.z))}))(B((function(e){var t=e.onClose,a=e.modalOpen,n=e.title,r=e.children,u=e.classes,m=e.wideLimit,O=void 0===m||m,p=e.modalSnackMessage,f=e.noContentPadding,h=e.setModalSnackMessage,x=e.titleIcon,g=void 0===x?null:x,v=Object(s.useState)(!1),C=Object(c.a)(v,2),y=C[0],k=C[1];Object(s.useEffect)((function(){h("")}),[h]),Object(s.useEffect)((function(){if(p){if(""===p.message)return void k(!1);"error"!==p.type&&k(!0)}}),[p]);var M=O?{classes:{paper:u.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},B="";return p&&(B=p.detailedErrorMsg,(""===p.detailedErrorMsg||p.detailedErrorMsg.length<5)&&(B=p.message)),Object(N.jsxs)(d.a,Object(o.a)(Object(o.a)({open:a,classes:u},M),{},{scroll:"paper",onClose:function(e,a){"backdropClick"!==a&&t()},className:u.root,children:[Object(N.jsxs)(j.a,{className:u.title,children:[Object(N.jsxs)("div",{className:u.titleText,children:[g," ",n]}),Object(N.jsx)("div",{className:u.closeContainer,children:Object(N.jsx)(i.a,{"aria-label":"close",className:u.closeButton,onClick:t,disableRipple:!0,size:"small",children:Object(N.jsx)(S.a,{})})})]}),Object(N.jsx)(E,{}),Object(N.jsx)(l.a,{open:y,className:u.snackBarModal,onClose:function(){k(!1),h("")},message:B,ContentProps:{className:"".concat(u.snackBar," ").concat(p&&"error"===p.type?u.errorSnackBar:"")},autoHideDuration:p&&"error"===p.type?1e4:5e3}),Object(N.jsx)(b.a,{className:f?"":u.content,children:r})]}))})))},439:function(e,t,a){"use strict";var n=a(1),c=a(2),o=a.n(c),s=a(441),r=a(788),i=a(822),l=a(380),d=a(987),j=a(975),b=a(493),u=a(316),m=a(320),O=a(122),p=a(123),f=a(0),h=Object(m.a)((function(e){return Object(u.a)({root:{height:38,lineHeight:1,"label + &":{marginTop:e.spacing(3)}},input:{height:38,position:"relative",color:"#07193E",fontSize:13,fontWeight:600,padding:"8px 20px 10px 10px",border:"#e5e5e5 1px solid",borderRadius:4,display:"flex",alignItems:"center","&:hover":{borderColor:"#393939"},"&:focus":{backgroundColor:"#fff"}}})}))(r.c);t.a=Object(m.a)((function(e){return Object(u.a)(Object(n.a)(Object(n.a)({},O.i),O.F))}))((function(e){var t=e.classes,a=e.id,n=e.name,c=e.onChange,r=e.options,u=e.label,m=e.tooltip,O=void 0===m?"":m,x=e.value,g=e.disabled,v=void 0!==g&&g;return Object(f.jsx)(o.a.Fragment,{children:Object(f.jsxs)(s.a,{item:!0,xs:12,className:t.fieldContainer,children:[""!==u&&Object(f.jsxs)(i.a,{htmlFor:a,className:t.inputLabel,children:[Object(f.jsx)("span",{children:u}),""!==O&&Object(f.jsx)("div",{className:t.tooltipContainer,children:Object(f.jsx)(l.a,{title:O,placement:"top-start",children:Object(f.jsx)("div",{className:t.tooltip,children:Object(f.jsx)(p.a,{})})})})]}),Object(f.jsx)(d.a,{fullWidth:!0,children:Object(f.jsx)(j.a,{id:a,name:n,value:x,onChange:c,input:Object(f.jsx)(h,{}),disabled:v,children:r.map((function(e){return Object(f.jsx)(b.a,{value:e.value,children:e.label},"select-".concat(n,"-").concat(e.label))}))})})]})})}))},502:function(e,t,a){"use strict";var n=a(1),c=a(2),o=a.n(c),s=a(441),r=a(551),i=a(822),l=a(380),d=a(316),j=a(320),b=a(123),u=a(122),m=(a(552),a(553),a(0));a(554);t.a=Object(j.a)((function(e){return Object(d.a)(Object(n.a)({},u.i))}))((function(e){var t=e.value,a=e.label,n=void 0===a?"":a,c=e.tooltip,d=void 0===c?"":c,j=e.mode,u=void 0===j?"yaml":j,O=e.classes,p=e.onChange,f=void 0===p?function(){}:p,h=e.onBeforeChange,x=e.readOnly,g=void 0!==x&&x;return Object(m.jsxs)(o.a.Fragment,{children:[Object(m.jsxs)(i.a,{className:O.inputLabel,children:[Object(m.jsx)("span",{children:n}),""!==d&&Object(m.jsx)("div",{className:O.tooltipContainer,children:Object(m.jsx)(l.a,{title:d,placement:"top-start",children:Object(m.jsx)("div",{className:O.tooltip,children:Object(m.jsx)(b.a,{})})})})]}),Object(m.jsx)(s.a,{item:!0,xs:12,children:Object(m.jsx)("br",{})}),Object(m.jsx)(s.a,{item:!0,xs:12,children:Object(m.jsx)(r.Controlled,{value:t,options:{mode:u,lineNumbers:!0,readOnly:g},onBeforeChange:h,onChange:f})})]})}))},964:function(e,t,a){"use strict";a.r(t);var n=a(16),c=a(1),o=a(2),s=a(41),r=a(383),i=a(316),l=a(320),d=a(441),j=a(122),b=a(32),u=a(53),m=a(398),O=a(439),p=a(23),f=a(502),h=a(0);Object(i.a)(Object(c.a)(Object(c.a)({},j.q),j.A));var x=Object(s.b)(null,{setModalErrorSnackMessage:b.g});t.default=Object(l.a)((function(e){return Object(i.a)(Object(c.a)(Object(c.a)({codeMirrorContainer:{marginBottom:20,paddingLeft:15,"&:nth-child(2) .MuiGrid-root:nth-child(3)":{border:"1px solid #EAEAEA"},"& label":{marginBottom:".5rem"},"& label + div":{display:"none"}}},j.q),j.A))}))(x((function(e){var t=e.classes,a=e.open,c=e.bucketName,s=e.actualPolicy,i=e.actualDefinition,l=e.closeModalAndRefresh,j=e.setModalErrorSnackMessage,b=Object(o.useState)(!1),x=Object(n.a)(b,2),g=x[0],v=x[1],C=Object(o.useState)(""),y=Object(n.a)(C,2),S=y[0],N=y[1],k=Object(o.useState)(""),M=Object(n.a)(k,2),E=M[0],B=M[1];return Object(o.useEffect)((function(){N(s),B(i?JSON.stringify(JSON.parse(i),null,4):"")}),[N,s,B,i]),Object(h.jsx)(m.a,{title:"Change Access Policy",modalOpen:a,onClose:function(){l()},titleIcon:Object(h.jsx)(p.p,{}),children:Object(h.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),g||(v(!0),u.a.invoke("PUT","/api/v1/buckets/".concat(c,"/set-policy"),{access:S,definition:E}).then((function(e){v(!1),l()})).catch((function(e){v(!1),j(e)})))},children:Object(h.jsxs)(d.a,{container:!0,children:[Object(h.jsxs)(d.a,{item:!0,xs:12,className:t.modalFormScrollable,children:[Object(h.jsx)(d.a,{item:!0,xs:12,className:t.formFieldRow,children:Object(h.jsx)(O.a,{value:S,label:"Access Policy",id:"select-access-policy",name:"select-access-policy",onChange:function(e){N(e.target.value)},options:[{value:"PRIVATE",label:"Private"},{value:"PUBLIC",label:"Public"},{value:"CUSTOM",label:"Custom"}]})}),"CUSTOM"===S&&Object(h.jsx)(d.a,{item:!0,xs:12,className:t.codeMirrorContainer,children:Object(h.jsx)(f.a,{label:"Write Policy",value:E,onBeforeChange:function(e,t,a){B(a)}})})]}),Object(h.jsxs)(d.a,{item:!0,xs:12,className:t.modalButtonBar,children:[Object(h.jsx)(r.a,{type:"button",variant:"outlined",color:"primary",onClick:function(){l()},disabled:g,children:"Cancel"}),Object(h.jsx)(r.a,{type:"submit",variant:"contained",color:"primary",disabled:g||"CUSTOM"===S&&!E,children:"Set"})]})]})})})})))}}]);
//# sourceMappingURL=115.72bc0ac1.chunk.js.map