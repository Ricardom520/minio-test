(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[45],{385:function(e,t,a){"use strict";a(1);var n=a(561),r=a(296),i=a(306),c=a(89),o=a(37),s=a(67),l=a(68),u=a(413),m=a(0),d=Object(o.b)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode}}),null);t.a=d(Object(i.a)((function(e){return Object(r.a)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}}})}))((function(e){var t=e.classes,a=e.label,r=e.actions,i=e.sidebarOpen,o=e.operatorMode;return Object(m.jsxs)(n.a,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[Object(m.jsx)(u.a,{display:{xs:"block",sm:"block",md:"none"},children:Object(m.jsx)(n.a,{item:!0,xs:12,style:{height:10},children:"\xa0"})}),Object(m.jsxs)(n.a,{item:!0,xs:12,sm:12,md:6,className:t.label,children:[!i&&Object(m.jsx)("div",{className:t.logo,children:o?Object(m.jsx)(s.a,{}):Object(m.jsx)(l.a,{})}),Object(m.jsx)(c.a,{variant:"h4",className:t.labelStyle,children:a})]}),r&&Object(m.jsx)(n.a,{item:!0,xs:12,sm:12,md:6,className:t.rightMenu,children:r})]})})))},403:function(e,t,a){"use strict";a(1);var n=a(18),r=a(296),i=a(306),c=a(119),o=a(0);t.a=Object(i.a)((function(e){return Object(r.a)({link:{display:"flex",alignItems:"center",textDecoration:"none",maxWidth:"250px",padding:"2rem 2rem 0rem 2rem",color:e.palette.primary.light,fontSize:".8rem","&:hover":{textDecoration:"underline"}},icon:{marginRight:".3rem",display:"flex",alignItems:"center",justifyContent:"center"}})}))((function(e){var t=e.to,a=e.label,r=e.classes;return Object(o.jsxs)(n.a,{to:t,className:r.link,children:[Object(o.jsx)("div",{className:r.icon,children:Object(o.jsx)(c.f,{})}),Object(o.jsx)("div",{children:a})]})}))},413:function(e,t,a){"use strict";var n=a(3),r=a(4),i=a(1),c=a(7),o=a(93),s=a(352),l=a(362),u=a(52),m=a(0),d=["className","component"];var b=a(292),p=a(200),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,a=e.defaultClassName,b=void 0===a?"MuiBox-root":a,p=e.generateClassName,f=e.styleFunctionSx,j=void 0===f?s.a:f,g=Object(o.a)("div")(j),x=i.forwardRef((function(e,a){var i=Object(u.a)(t),o=Object(l.a)(e),s=o.className,f=o.component,j=void 0===f?"div":f,x=Object(r.a)(o,d);return Object(m.jsx)(g,Object(n.a)({as:j,ref:a,className:Object(c.a)(s,p?p(b):b),theme:i},x))}));return x}({defaultTheme:Object(p.a)(),defaultClassName:"MuiBox-root",generateClassName:b.a.generate});t.a=f},561:function(e,t,a){"use strict";var n=a(15),r=a(5),i=a(4),c=a(3),o=a(1),s=a(7),l=a(23),u=a(362),m=a(87),d=a(8),b=a(12),p=a(27);var f=o.createContext(),j=a(63),g=a(88);function x(e){return Object(j.a)("MuiGrid",e)}var v=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],O=Object(g.a)("MuiGrid",["root","container","item","zeroMinWidth"].concat(Object(n.a)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),Object(n.a)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),Object(n.a)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),Object(n.a)(v.map((function(e){return"grid-xs-".concat(e)}))),Object(n.a)(v.map((function(e){return"grid-sm-".concat(e)}))),Object(n.a)(v.map((function(e){return"grid-md-".concat(e)}))),Object(n.a)(v.map((function(e){return"grid-lg-".concat(e)}))),Object(n.a)(v.map((function(e){return"grid-xl-".concat(e)}))))),h=a(0),w=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function N(e){var t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}var S=Object(d.a)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,r=a.container,i=a.direction,c=a.item,o=a.spacing,s=a.wrap,l=a.zeroMinWidth,u=a.breakpoints,m=[];r&&(m=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[a["spacing-xs-".concat(String(e))]];var n=[];return t.forEach((function(t){var r=e[t];Number(r)>0&&n.push(a["spacing-".concat(t,"-").concat(String(r))])})),n}(o,u,t));var d=[];return u.forEach((function(e){var n=a[e];n&&d.push(t["grid-".concat(e,"-").concat(String(n))])})),[t.root,r&&t.container,c&&t.item,l&&t.zeroMinWidth].concat(Object(n.a)(m),["row"!==i&&t["direction-xs-".concat(String(i))],"wrap"!==s&&t["wrap-xs-".concat(String(s))]],d)}})((function(e){var t=e.ownerState;return Object(c.a)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(e){var t=e.theme,a=e.ownerState,n=Object(l.d)({values:a.direction,breakpoints:t.breakpoints.values});return Object(l.b)({theme:t},n,(function(e){var t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(O.item)]={maxWidth:"none"}),t}))}),(function(e){var t=e.theme,a=e.ownerState,n=a.container,i=a.rowSpacing,c={};if(n&&0!==i){var o=Object(l.d)({values:i,breakpoints:t.breakpoints.values});c=Object(l.b)({theme:t},o,(function(e){var a=t.spacing(e);return"0px"!==a?Object(r.a)({marginTop:"-".concat(N(a))},"& > .".concat(O.item),{paddingTop:N(a)}):{}}))}return c}),(function(e){var t=e.theme,a=e.ownerState,n=a.container,i=a.columnSpacing,c={};if(n&&0!==i){var o=Object(l.d)({values:i,breakpoints:t.breakpoints.values});c=Object(l.b)({theme:t},o,(function(e){var a=t.spacing(e);return"0px"!==a?Object(r.a)({width:"calc(100% + ".concat(N(a),")"),marginLeft:"-".concat(N(a))},"& > .".concat(O.item),{paddingLeft:N(a)}):{}}))}return c}),(function(e){var t,a=e.theme,n=e.ownerState;return a.breakpoints.keys.reduce((function(e,r){var i={};if(n[r]&&(t=n[r]),!t)return e;if(!0===t)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=Object(l.d)({values:n.columns,breakpoints:a.breakpoints.values}),s="object"===typeof o?o[r]:o;if(void 0===s||null===s)return e;var u="".concat(Math.round(t/s*1e8)/1e6,"%"),m={};if(n.container&&n.item&&0!==n.columnSpacing){var d=a.spacing(n.columnSpacing);if("0px"!==d){var b="calc(".concat(u," + ").concat(N(d),")");m={flexBasis:b,maxWidth:b}}}i=Object(c.a)({flexBasis:u,flexGrow:0,maxWidth:u},m)}return 0===a.breakpoints.values[r]?Object.assign(e,i):e[a.breakpoints.up(r)]=i,e}),{})}));var k=function(e){var t=e.classes,a=e.container,r=e.direction,i=e.item,c=e.spacing,o=e.wrap,s=e.zeroMinWidth,l=e.breakpoints,u=[];a&&(u=function(e,t){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return["spacing-xs-".concat(String(e))];var a=[];return t.forEach((function(t){var n=e[t];if(Number(n)>0){var r="spacing-".concat(t,"-").concat(String(n));a.push(r)}})),a}(c,l));var d=[];l.forEach((function(t){var a=e[t];a&&d.push("grid-".concat(t,"-").concat(String(a)))}));var b={root:["root",a&&"container",i&&"item",s&&"zeroMinWidth"].concat(Object(n.a)(u),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==o&&"wrap-xs-".concat(String(o))],d)};return Object(m.a)(b,x,t)},y=o.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiGrid"}),n=Object(p.a)().breakpoints,r=Object(u.a)(a),l=r.className,m=r.columns,d=r.columnSpacing,j=r.component,g=void 0===j?"div":j,x=r.container,v=void 0!==x&&x,O=r.direction,N=void 0===O?"row":O,y=r.item,T=void 0!==y&&y,W=r.rowSpacing,M=r.spacing,C=void 0===M?0:M,z=r.wrap,B=void 0===z?"wrap":z,G=r.zeroMinWidth,E=void 0!==G&&G,I=Object(i.a)(r,w),R=W||C,L=d||C,D=o.useContext(f),A=v?m||12:D,F={},H=Object(c.a)({},I);n.keys.forEach((function(e){null!=I[e]&&(F[e]=I[e],delete H[e])}));var J=Object(c.a)({},r,{columns:A,container:v,direction:N,item:T,rowSpacing:R,columnSpacing:L,wrap:B,zeroMinWidth:E,spacing:C},F,{breakpoints:n.keys}),P=k(J);return Object(h.jsx)(f.Provider,{value:A,children:Object(h.jsx)(S,Object(c.a)({ownerState:J,className:Object(s.a)(P.root,l),as:g,ref:t},H))})}));t.a=y},702:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"e",(function(){return o}));var n="minio",r="gcs",i="s3",c="azure",o=[{serviceName:n,targetTitle:"MinIO",logo:"/minio-logo.svg"},{serviceName:r,targetTitle:"Google Cloud Storage",logo:"/gcs-logo.svg"},{serviceName:i,targetTitle:"AWS S3",logo:"/aws-logo.svg"},{serviceName:c,targetTitle:"Azure",logo:"/azure-logo.svg"}]},875:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(1),i=a(296),c=a(306),o=a(561),s=a(118),l=a(385),u=a(702),m=a(403),d=a(0);t.default=Object(c.a)((function(e){return Object(i.a)(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},s.a),s.r),s.u),s.B),Object(s.e)(e.spacing(4))),{},{strongText:{fontWeight:700},keyName:{marginLeft:5},iconText:{lineHeight:"24px"},customConfigurationPage:{height:"calc(100vh - 410px)",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},lambdaContainer:{padding:"15px 0"},actionsTray:Object(n.a)(Object(n.a)({},s.a.actionsTray),{},{padding:"0 38px"}),customTitle:Object(n.a)(Object(n.a)({},s.u.customTitle),{},{marginTop:0}),mainCont:Object(n.a)(Object(n.a)({},s.u.mainCont),{},{maxWidth:1180}),link:{textDecoration:"none",color:e.palette.primary.main}}))}))((function(e){var t=e.classes,a=e.history;return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(l.a,{label:"Tier Configuration"}),Object(d.jsx)(o.a,{container:!0,className:t.mainCont,children:Object(d.jsxs)(o.a,{item:!0,xs:12,children:[Object(d.jsx)(o.a,{item:!0,xs:12,className:t.mainTitle,children:Object(d.jsx)(m.a,{to:"/tiers",label:"Return to Configured Tiers"})}),Object(d.jsx)(o.a,{item:!0,xs:12,children:Object(d.jsx)(o.a,{item:!0,xs:12,children:Object(d.jsx)(o.a,{item:!0,xs:12,className:t.centerElements,children:Object(d.jsx)("div",{className:t.iconContainer,children:u.e.map((function(e,n){return Object(d.jsxs)("button",{className:t.lambdaNotif,onClick:function(){var t;t=e.serviceName,a.push("/tiers/add/".concat(t))},children:[Object(d.jsx)("div",{className:t.lambdaNotifIcon,children:Object(d.jsx)("img",{src:e.logo,className:t.logoButton,alt:e.targetTitle})}),Object(d.jsx)("div",{className:t.lambdaNotifTitle,children:Object(d.jsx)("b",{children:e.targetTitle})})]},"tierOpt-".concat(n.toString,"-").concat(e.targetTitle))}))})})})})]})})]})}))}}]);
//# sourceMappingURL=45.ddee06d9.chunk.js.map