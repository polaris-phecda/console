(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[93],{405:function(e,t,a){"use strict";a(0);var n=a(38),r=a(441),c=a(444),o=a(250),i=a(260),l=a(91),s=a(328),b=a(117),u=a(118),d=a(39),j=a(335),h=a(2),f={toggleList:d.q},O=Object(n.b)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage}}),f);t.a=O(Object(i.a)((function(e){return Object(o.a)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}}})}))((function(e){var t=e.classes,a=e.label,n=e.actions,o=e.sidebarOpen,i=e.operatorMode,d=e.managerObjects,f=e.toggleList;return Object(h.jsxs)(c.a,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[Object(h.jsx)(r.a,{display:{xs:"block",sm:"block",md:"none"},children:Object(h.jsx)(c.a,{item:!0,xs:12,style:{height:10},children:"\xa0"})}),Object(h.jsxs)(c.a,{item:!0,xs:12,sm:12,md:6,className:t.label,children:[!o&&Object(h.jsx)("div",{className:t.logo,children:i?Object(h.jsx)(b.a,{}):Object(h.jsx)(u.a,{})}),Object(h.jsx)(l.a,{variant:"h4",className:t.labelStyle,children:a})]}),Object(h.jsxs)(c.a,{item:!0,xs:12,sm:12,md:6,className:t.rightMenu,children:[n&&n,d&&d.length>0&&Object(h.jsx)(s.a,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){f()},size:"large",children:Object(h.jsx)(j.pb,{})})]})]})})))},407:function(e,t,a){"use strict";var n=a(3),r=(a(0),a(444)),c=a(250),o=a(260),i=a(116),l=a(2);t.a=Object(o.a)((function(e){return Object(c.a)(Object(n.a)({pageContainer:{width:"100%"}},i.r))}))((function(e){var t=e.classes,a=e.className,n=void 0===a?"":a,c=e.children;return Object(l.jsx)("div",{className:t.contentSpacer,children:Object(l.jsx)(r.a,{container:!0,children:Object(l.jsx)(r.a,{item:!0,xs:12,className:n,children:c})})})}))},433:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a(2);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function a(a){return Object(c.jsx)(r.Suspense,{fallback:t,children:Object(c.jsx)(e,Object(n.a)({},a))})}return a}},441:function(e,t,a){"use strict";var n=a(1),r=a(4),c=a(0),o=(a(11),a(7)),i=a(95),l=a(304),s=a(314),b=a(57),u=a(2),d=["className","component"];var j=a(160),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,a=Object(i.a)("div")(l.a),j=c.forwardRef((function(e,c){var i=Object(b.a)(t),l=Object(s.a)(e),j=l.className,h=l.component,f=void 0===h?"div":h,O=Object(r.a)(l,d);return Object(u.jsx)(a,Object(n.a)({as:f,ref:c,className:Object(o.a)(j,"MuiBox-root"),theme:i},O))}));return j}({defaultTheme:Object(j.a)()});t.a=h},484:function(e,t,a){"use strict";var n=a(3),r=a(15),c=a(0),o=a.n(c),i=a(441),l=a(820),s=(a(11),a(2)),b=c.createContext(null);function u(e){var t=e.children,a=e.value,n=function(){var e=c.useState(null),t=Object(r.a)(e,2),a=t[0],n=t[1];return c.useEffect((function(){n("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),a}(),o=c.useMemo((function(){return{idPrefix:n,value:a}}),[n,a]);return Object(s.jsx)(b.Provider,{value:o,children:t})}function d(){return c.useContext(b)}function j(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(t)}function h(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(t)}var f=a(1),O=a(4),m=a(816),p=["children"],x=c.forwardRef((function(e,t){var a=e.children,n=Object(O.a)(e,p),r=d();if(null===r)throw new TypeError("No TabContext provided");var o=c.Children.map(a,(function(e){return c.isValidElement(e)?c.cloneElement(e,{"aria-controls":j(r,e.props.value),id:h(r,e.props.value)}):null}));return Object(s.jsx)(m.a,Object(f.a)({},n,{ref:t,value:r.value,children:o}))})),v=a(7),g=a(8),C=a(12),T=a(89),w=a(68),M=a(90);function N(e){return Object(w.a)("MuiTabPanel",e)}Object(M.a)("MuiTabPanel",["root"]);var y=["children","className","value"],E=Object(g.a)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(3)}})),P=c.forwardRef((function(e,t){var a=Object(C.a)({props:e,name:"MuiTabPanel"}),n=a.children,r=a.className,c=a.value,o=Object(O.a)(a,y),i=Object(f.a)({},a),l=function(e){var t=e.classes;return Object(T.a)({root:["root"]},N,t)}(i),b=d();if(null===b)throw new TypeError("No TabContext provided");var u=j(b,c),m=h(b,c);return Object(s.jsx)(E,Object(f.a)({"aria-labelledby":m,className:Object(v.a)(l.root,r),hidden:c!==b.value,id:u,ref:t,role:"tabpanel",ownerState:i},o,{children:c===b.value&&n}))})),A=a(260),S=a(28),R=a(250),k=a(804);t.a=Object(A.a)((function(e){return Object(R.a)({tabsContainer:{display:"flex",height:"100%",width:"100%"},tabsHeaderContainer:{width:"300px",background:"#FBFAFA",borderRight:"1px solid #EAEAEA","& .MuiTabs-root":{"& .MuiTabs-indicator":{display:"none"},"& .MuiTab-root":{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"flex-start",borderBottom:"1px solid #EAEAEA","& .MuiSvgIcon-root":{marginRight:8,marginBottom:0},"&.Mui-selected":{background:"#E5E5E5"}},"&. MuiTabs-scroller":{display:"none"}}},tabContentContainer:{width:"100%","& .MuiTabPanel-root":{height:"100%"}},tabPanel:{height:"100%"},"@media (max-width: 900px)":{tabsContainer:{flexFlow:"column",flexDirection:"column"},tabsHeaderContainer:{width:"100%",borderBottom:" 1px solid #EAEAEA","& .MuiTabs-root .MuiTabs-scroller .MuiButtonBase-root":{borderBottom:" 0px"}}}})}))((function(e){var t=e.children,a=e.classes,c=e.selectedTab,b=void 0===c?"0":c,d=e.routes,j=e.isRouteTabs,h=o.a.useState(b),f=Object(r.a)(h,2),O=f[0],m=f[1],p=Object(S.a)(),v=Object(k.a)(p.breakpoints.down("md")),g=[],C=[];return t?(t.forEach((function(e){g.push(e.tabConfig),C.push(e.content)})),Object(s.jsx)(u,{value:"".concat(O),children:Object(s.jsxs)(i.a,{className:a.tabsContainer,children:[Object(s.jsx)(i.a,{className:a.tabsHeaderContainer,children:Object(s.jsx)(x,{onChange:function(e,t){m(t)},orientation:v?"horizontal":"vertical",variant:v?"scrollable":"standard",scrollButtons:"auto",className:a.tabList,children:g.map((function(e,t){return e?Object(s.jsx)(l.a,Object(n.a)(Object(n.a)({className:a.tabHeader,value:"".concat(t)},e),{},{disableRipple:!0,disableTouchRipple:!0,focusRipple:!0}),"v-tab-".concat(t)):null}))})}),Object(s.jsxs)(i.a,{className:a.tabContentContainer,children:[j?null:C.map((function(e,t){return Object(s.jsx)(P,{classes:Object(n.a)({},a.tabPanel),value:"".concat(t),children:e||null},"v-tab-p-".concat(t))})),j?Object(s.jsx)("div",{className:a.tabPanel,children:d}):null]})]})})):null}))},936:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(3),c=a(0),o=a.n(c),i=a(250),l=a(260),s=a(20),b=a(19),u=a(116),d=a(51),j=a(405),h=a(407),f=a(484),O=a(433),m=a(2),p=Object(O.a)(o.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(108)]).then(a.bind(null,869))}))),x=Object(O.a)(o.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(52)]).then(a.bind(null,908))}))),v=["/storage/volumes","/storage/drives"];t.default=Object(l.a)((function(e){return Object(i.a)(Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({headerLabel:{fontSize:22,fontWeight:600,color:"#000",marginTop:4},pageContainer:{border:"1px solid #EAEAEA",height:"100%"}},u.r),u.a),u.u),Object(u.f)(e.spacing(4))))}))((function(e){var t=e.classes,a=e.match,r=null===a||void 0===a?void 0:a.path;r=r||v[0];var o=Object(c.useState)(r),i=Object(n.a)(o,2),l=i[0],u=i[1];return Object(c.useEffect)((function(){u(r)}),[r]),Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)(j.a,{label:"Storage"}),Object(m.jsx)(h.a,{className:t.pageContainer,children:Object(m.jsxs)(f.a,{selectedTab:l,isRouteTabs:!0,routes:Object(m.jsx)("div",{className:t.contentSpacer,children:Object(m.jsx)(s.c,{history:d.a,children:Object(m.jsxs)(s.d,{children:[Object(m.jsx)(s.b,{exact:!0,path:v[0],component:p}),Object(m.jsx)(s.b,{exact:!0,path:v[1],component:x}),Object(m.jsx)(s.b,{render:function(){return Object(m.jsx)(s.a,{to:v[0]})}})]})})}),children:[{tabConfig:{label:"Volumes",value:v[0],component:b.a,to:v[0]}},{tabConfig:{label:"Drives",value:v[1],component:b.a,to:v[1]}}]})})]})}))}}]);
//# sourceMappingURL=93.99f2b03d.chunk.js.map