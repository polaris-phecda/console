"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[6405],{96405:function(e,n,t){t.r(n);var a=t(93433),i=t(29439),l=t(1413),s=t(72791),o=t(78687),c=t(51691),r=t(13400),u=t(42419),d=t(75952),v=t(11135),f=t(25787),x=t(61889),m=t(23814),h=t(21435),Z=t(25469),g=t(87995),j=t(81207),p=t(23508),y=t(45248),k=t(80184),b=(0,o.$j)((function(e){return{loadingTenant:e.tenants.loadingTenant,selectedTenant:e.tenants.currentTenant,tenant:e.tenants.tenantInfo}}),null);n.default=(0,f.Z)((function(e){return(0,v.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)({},m.oZ),m.bK),{},{envVarRow:{display:"flex",alignItems:"center",justifyContent:"flex-start","&:last-child":{borderBottom:0},"@media (max-width: 900px)":{flex:1,"& div label":{minWidth:50}}},rowActions:{display:"flex",justifyContent:"flex-end","@media (max-width: 900px)":{flex:1}},overlayAction:{marginLeft:10,"& svg":{width:15,height:15,maxWidth:15,maxHeight:15},"& button":{background:"#EAEAEA"}},loaderAlign:{textAlign:"center"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},fileItem:{marginRight:10,display:"flex","& div label":{minWidth:50},"@media (max-width: 900px)":{flexFlow:"column"}}},(0,m.Bz)(e.spacing(4))),m.QV),m.DF),m.oO),m.AK))}))(b((function(e){var n=e.classes,t=(0,Z.TL)(),l=(0,o.v9)((function(e){return e.tenants.tenantInfo})),v=(0,o.v9)((function(e){return e.tenants.loadingTenant})),f=(0,s.useState)(!1),m=(0,i.Z)(f,2),b=m[0],C=m[1],A=(0,s.useState)(!1),_=(0,i.Z)(A,2),w=_[0],T=_[1],N=(0,s.useState)([]),S=(0,i.Z)(N,2),I=S[0],P=S[1],V=(0,s.useState)([]),E=(0,i.Z)(V,2),R=E[0],z=E[1],F=(0,s.useCallback)((function(){j.Z.invoke("GET","/api/v1/namespaces/".concat(null===l||void 0===l?void 0:l.namespace,"/tenants/").concat(null===l||void 0===l?void 0:l.name,"/configuration")).then((function(e){e.environmentVariables&&P(e.environmentVariables)})).catch((function(e){t((0,g.Ih)(e))}))}),[l,t]);(0,s.useEffect)((function(){l&&F()}),[l,F]);return(0,k.jsxs)(s.Fragment,{children:[(0,k.jsx)(p.Z,{title:"Save and Restart",confirmText:"Restart",cancelText:"Cancel",titleIcon:(0,k.jsx)(d.EjK,{}),isLoading:b,onClose:function(){return T(!1)},isOpen:w,onConfirm:function(){C(!0);var e={environmentVariables:I.filter((function(e){return""!==e.key})),keysToBeDeleted:R};j.Z.invoke("PATCH","/api/v1/namespaces/".concat(null===l||void 0===l?void 0:l.namespace,"/tenants/").concat(null===l||void 0===l?void 0:l.name,"/configuration"),e).then((function(){C(!1),T(!1),F()})).catch((function(e){t((0,g.Ih)(e)),C(!1)}))},confirmationContent:(0,k.jsx)(c.Z,{children:"Are you sure you want to save the changes and restart the service?"})}),v?(0,k.jsx)("div",{className:n.loaderAlign,children:(0,k.jsx)(d.aNw,{})}):(0,k.jsxs)(x.ZP,{container:!0,spacing:1,children:[(0,k.jsxs)(x.ZP,{item:!0,xs:12,children:[(0,k.jsx)("h1",{className:n.sectionTitle,children:"Configuration"}),(0,k.jsx)("hr",{className:n.hrClass})]}),(0,k.jsx)(x.ZP,{container:!0,spacing:1,children:I.map((function(e,t){return(0,k.jsxs)(x.ZP,{item:!0,xs:12,className:"".concat(n.formFieldRow," ").concat(n.envVarRow),children:[(0,k.jsx)(x.ZP,{item:!0,xs:5,className:n.fileItem,children:(0,k.jsx)(h.Z,{id:"env_var_key",name:"env_var_key",label:"Key",value:e.key,onChange:function(e){var n=(0,a.Z)(I);P(n.map((function(n,a){return a===t?{key:e.target.value,value:n.value}:n})))},index:t},"env_var_key_".concat(t.toString()))}),(0,k.jsx)(x.ZP,{item:!0,xs:5,className:n.fileItem,children:(0,k.jsx)(h.Z,{id:"env_var_value",name:"env_var_value",label:"Value",value:e.value,onChange:function(e){var n=(0,a.Z)(I);P(n.map((function(n,a){return a===t?{key:n.key,value:e.target.value}:n})))},index:t,type:y.Gq[e.key]&&y.Gq[e.key].secret?"password":"text"},"env_var_value_".concat(t.toString()))}),(0,k.jsxs)(x.ZP,{item:!0,xs:2,className:n.rowActions,children:[(0,k.jsx)("div",{className:n.overlayAction,children:(0,k.jsx)(r.Z,{size:"small",onClick:function(){var e=(0,a.Z)(I);e.push({key:"",value:""}),P(e)},disabled:t!==I.length-1,children:(0,k.jsx)(u.Z,{})})}),(0,k.jsx)("div",{className:n.overlayAction,children:(0,k.jsx)(r.Z,{size:"small",onClick:function(){var n=I.filter((function(e,n){return n!==t}));P(n),z([].concat((0,a.Z)(R),[e.key]))},disabled:I.length<=1,children:(0,k.jsx)(d.HFL,{})})})]})]},"tenant-envVar-".concat(t.toString()))}))}),(0,k.jsx)(x.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:(0,k.jsx)(d.zxk,{id:"save-environment-variables",type:"submit",variant:"callAction",disabled:w||b,onClick:function(){return T(!0)},label:"Save"})})]})]})})))},42419:function(e,n,t){var a=t(64836);n.Z=void 0;var i=a(t(45649)),l=t(80184),s=(0,i.default)((0,l.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=s}}]);
//# sourceMappingURL=6405.a17792e5.chunk.js.map