(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[59],{561:function(e,t,r){"use strict";var n=r(15),a=r(5),i=r(4),o=r(3),c=r(1),s=r(7),l=r(23),p=r(362),u=r(87),d=r(8),g=r(12),m=r(27);var b=c.createContext(),f=r(63),h=r(88);function x(e){return Object(f.a)("MuiGrid",e)}var v=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],j=Object(h.a)("MuiGrid",["root","container","item","zeroMinWidth"].concat(Object(n.a)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),Object(n.a)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),Object(n.a)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),Object(n.a)(v.map((function(e){return"grid-xs-".concat(e)}))),Object(n.a)(v.map((function(e){return"grid-sm-".concat(e)}))),Object(n.a)(v.map((function(e){return"grid-md-".concat(e)}))),Object(n.a)(v.map((function(e){return"grid-lg-".concat(e)}))),Object(n.a)(v.map((function(e){return"grid-xl-".concat(e)}))))),O=r(0),w=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function S(e){var t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}var k=Object(d.a)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState,a=r.container,i=r.direction,o=r.item,c=r.spacing,s=r.wrap,l=r.zeroMinWidth,p=r.breakpoints,u=[];a&&(u=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[r["spacing-xs-".concat(String(e))]];var n=[];return t.forEach((function(t){var a=e[t];Number(a)>0&&n.push(r["spacing-".concat(t,"-").concat(String(a))])})),n}(c,p,t));var d=[];return p.forEach((function(e){var n=r[e];n&&d.push(t["grid-".concat(e,"-").concat(String(n))])})),[t.root,a&&t.container,o&&t.item,l&&t.zeroMinWidth].concat(Object(n.a)(u),["row"!==i&&t["direction-xs-".concat(String(i))],"wrap"!==s&&t["wrap-xs-".concat(String(s))]],d)}})((function(e){var t=e.ownerState;return Object(o.a)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(e){var t=e.theme,r=e.ownerState,n=Object(l.d)({values:r.direction,breakpoints:t.breakpoints.values});return Object(l.b)({theme:t},n,(function(e){var t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(j.item)]={maxWidth:"none"}),t}))}),(function(e){var t=e.theme,r=e.ownerState,n=r.container,i=r.rowSpacing,o={};if(n&&0!==i){var c=Object(l.d)({values:i,breakpoints:t.breakpoints.values});o=Object(l.b)({theme:t},c,(function(e){var r=t.spacing(e);return"0px"!==r?Object(a.a)({marginTop:"-".concat(S(r))},"& > .".concat(j.item),{paddingTop:S(r)}):{}}))}return o}),(function(e){var t=e.theme,r=e.ownerState,n=r.container,i=r.columnSpacing,o={};if(n&&0!==i){var c=Object(l.d)({values:i,breakpoints:t.breakpoints.values});o=Object(l.b)({theme:t},c,(function(e){var r=t.spacing(e);return"0px"!==r?Object(a.a)({width:"calc(100% + ".concat(S(r),")"),marginLeft:"-".concat(S(r))},"& > .".concat(j.item),{paddingLeft:S(r)}):{}}))}return o}),(function(e){var t,r=e.theme,n=e.ownerState;return r.breakpoints.keys.reduce((function(e,a){var i={};if(n[a]&&(t=n[a]),!t)return e;if(!0===t)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=Object(l.d)({values:n.columns,breakpoints:r.breakpoints.values}),s="object"===typeof c?c[a]:c;if(void 0===s||null===s)return e;var p="".concat(Math.round(t/s*1e8)/1e6,"%"),u={};if(n.container&&n.item&&0!==n.columnSpacing){var d=r.spacing(n.columnSpacing);if("0px"!==d){var g="calc(".concat(p," + ").concat(S(d),")");u={flexBasis:g,maxWidth:g}}}i=Object(o.a)({flexBasis:p,flexGrow:0,maxWidth:p},u)}return 0===r.breakpoints.values[a]?Object.assign(e,i):e[r.breakpoints.up(a)]=i,e}),{})}));var y=function(e){var t=e.classes,r=e.container,a=e.direction,i=e.item,o=e.spacing,c=e.wrap,s=e.zeroMinWidth,l=e.breakpoints,p=[];r&&(p=function(e,t){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return["spacing-xs-".concat(String(e))];var r=[];return t.forEach((function(t){var n=e[t];if(Number(n)>0){var a="spacing-".concat(t,"-").concat(String(n));r.push(a)}})),r}(o,l));var d=[];l.forEach((function(t){var r=e[t];r&&d.push("grid-".concat(t,"-").concat(String(r)))}));var g={root:["root",r&&"container",i&&"item",s&&"zeroMinWidth"].concat(Object(n.a)(p),["row"!==a&&"direction-xs-".concat(String(a)),"wrap"!==c&&"wrap-xs-".concat(String(c))],d)};return Object(u.a)(g,x,t)},N=c.forwardRef((function(e,t){var r=Object(g.a)({props:e,name:"MuiGrid"}),n=Object(m.a)().breakpoints,a=Object(p.a)(r),l=a.className,u=a.columns,d=a.columnSpacing,f=a.component,h=void 0===f?"div":f,x=a.container,v=void 0!==x&&x,j=a.direction,S=void 0===j?"row":j,N=a.item,C=void 0!==N&&N,W=a.rowSpacing,M=a.spacing,z=void 0===M?0:M,I=a.wrap,L=void 0===I?"wrap":I,B=a.zeroMinWidth,T=void 0!==B&&B,R=Object(i.a)(a,w),E=W||z,G=d||z,D=c.useContext(b),P=v?u||12:D,A={},F=Object(o.a)({},R);n.keys.forEach((function(e){null!=R[e]&&(A[e]=R[e],delete F[e])}));var J=Object(o.a)({},a,{columns:P,container:v,direction:S,item:C,rowSpacing:E,columnSpacing:G,wrap:L,zeroMinWidth:T,spacing:z},A,{breakpoints:n.keys}),U=y(J);return Object(O.jsx)(b.Provider,{value:P,children:Object(O.jsx)(k,Object(o.a)({ownerState:J,className:Object(s.a)(U.root,l),as:h,ref:t},F))})}));t.a=N},867:function(e,t,r){"use strict";r.r(t);var n=r(14),a=r(1),i=r.n(a),o=r(47),c=r(306),s=r(296),l=r(48),p=r(374),u=r(561),d=r(89),g=r(373),m=r(126),b=r.n(m),f=r(0);t.default=Object(c.a)((function(e){return Object(s.a)({"@global":{body:{backgroundColor:"#FAFAFA"}},paper:{borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",width:800,height:424,margin:"auto",position:"absolute",top:"50%",left:"50%",marginLeft:-400,marginTop:-212,"&.MuiPaper-root":{borderRadius:8}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%"},submit:{margin:"30px 0px 16px",height:40,boxShadow:"none",padding:"16px 30px"},errorBlock:{backgroundColor:"#C72C48",width:800,height:64,display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:"50%",top:"50%",marginLeft:-400,marginTop:-290,color:"#fff",fontWeight:700,fontSize:14,borderRadius:8,padding:10,boxSizing:"border-box"},mainContainer:{position:"relative",height:424},theOcean:{borderTopLeftRadius:8,borderBottomLeftRadius:8,background:"transparent linear-gradient(to bottom, #073052 0%,#05122b 100%); 0% 0% no-repeat padding-box;"},oceanBg:{backgroundImage:"url(/images/BG_Illustration.svg)",backgroundRepeat:"no-repeat",backgroundPosition:"bottom left",height:"100%",width:324},theLogin:{padding:"40px 45px 20px 45px"},loadingLoginStrategy:{textAlign:"center"},headerTitle:{marginBottom:10},submitContainer:{textAlign:"right"},disclaimer:{fontSize:12,marginTop:30},jwtInput:{marginTop:45},linearPredef:{height:10},errorIconStyle:{marginRight:3},loaderAlignment:{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column"},retryButton:{alignSelf:"flex-end"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",transition:"all .2s ease-in-out",padding:"0 5px",marginTop:5,overflow:"auto"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5},simpleError:{marginTop:5,padding:"2px 5px",fontSize:16,color:"#000"},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},errorTitle:{display:"flex",alignItems:"center"}})}))((function(e){var t=e.classes,r=Object(a.useState)(""),c=Object(n.a)(r,2),s=c[0],m=c[1],h=Object(a.useState)(""),x=Object(n.a)(h,2),v=x[0],j=x[1],O=Object(a.useState)(!0),w=Object(n.a)(O,2),S=w[0],k=w[1];return Object(a.useEffect)((function(){if(S){var e=window.location.search,t=new URLSearchParams(e),r=t.get("code"),n=t.get("state"),a=t.get("error"),i=t.get("errorDescription");a||i?(m(a||""),j(i||""),k(!1)):o.a.invoke("POST","/reporter/minioServer/api/v1/login/oauth2/auth",{code:r,state:n}).then((function(){var e="/";localStorage.getItem("redirect-path")&&""!==localStorage.getItem("redirect-path")&&(e="".concat(localStorage.getItem("redirect-path")),localStorage.setItem("redirect-path","")),k(!1),l.a.push(e)})).catch((function(e){m(e.errorMessage),j(e.detailedError),k(!1)}))}}),[S]),""!==s||""!==v?Object(f.jsx)(i.a.Fragment,{children:Object(f.jsx)(p.a,{className:t.paper,children:Object(f.jsxs)(u.a,{container:!0,className:t.mainContainer,children:[Object(f.jsx)(u.a,{item:!0,xs:7,className:t.theOcean,children:Object(f.jsx)("div",{className:t.oceanBg})}),Object(f.jsxs)(u.a,{item:!0,xs:5,className:t.theLogin,children:[Object(f.jsxs)("div",{className:t.errorTitle,children:[Object(f.jsx)("span",{className:t.messageIcon,children:Object(f.jsx)(b.a,{})}),Object(f.jsx)("span",{className:t.errorLabel,children:"Error from IDP"})]}),Object(f.jsx)("div",{className:t.simpleError,children:s}),Object(f.jsx)(d.a,{variant:"body1",gutterBottom:!0,component:"div",className:t.extraDetailsContainer,children:v}),Object(f.jsx)(g.a,{component:"a",href:"/reporter/minio/login",type:"submit",variant:"contained",color:"primary",className:t.submit,children:"Back to Login"})]})]})})}):null}))}}]);
//# sourceMappingURL=59.3dbf1b07.chunk.js.map