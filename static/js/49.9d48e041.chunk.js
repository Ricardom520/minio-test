(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[49],{376:function(e,t,n){"use strict";n(1);var a=n(549),s=n(290),i=n(299),c=n(94),o=n(38),r=n(71),l=n(72),d=n(402),j=n(0),b=Object(o.b)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode}}),null);t.a=b(Object(i.a)((function(e){return Object(s.a)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}}})}))((function(e){var t=e.classes,n=e.label,s=e.actions,i=e.sidebarOpen,o=e.operatorMode;return Object(j.jsxs)(a.a,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[Object(j.jsx)(d.a,{display:{xs:"block",sm:"block",md:"none"},children:Object(j.jsx)(a.a,{item:!0,xs:12,style:{height:10},children:"\xa0"})}),Object(j.jsxs)(a.a,{item:!0,xs:12,sm:12,md:6,className:t.label,children:[!i&&Object(j.jsx)("div",{className:t.logo,children:o?Object(j.jsx)(r.a,{}):Object(j.jsx)(l.a,{})}),Object(j.jsx)(c.a,{variant:"h4",className:t.labelStyle,children:n})]}),s&&Object(j.jsx)(a.a,{item:!0,xs:12,sm:12,md:6,className:t.rightMenu,children:s})]})})))},392:function(e,t,n){"use strict";n(1);var a=n(19),s=n(290),i=n(299),c=n(121),o=n(0);t.a=Object(i.a)((function(e){return Object(s.a)({link:{display:"flex",alignItems:"center",textDecoration:"none",maxWidth:"250px",padding:"2rem 2rem 0rem 2rem",color:e.palette.primary.light,fontSize:".8rem","&:hover":{textDecoration:"underline"}},icon:{marginRight:".3rem",display:"flex",alignItems:"center",justifyContent:"center"}})}))((function(e){var t=e.to,n=e.label,s=e.classes;return Object(o.jsxs)(a.a,{to:t,className:s.link,children:[Object(o.jsx)("div",{className:s.icon,children:Object(o.jsx)(c.f,{})}),Object(o.jsx)("div",{children:n})]})}))},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return c}));var a=1006,s=1008,i=1011,c=function(e){var t="ws";return"https:"===e&&(t="wss"),t}},884:function(e,t,n){"use strict";n.r(t);var a=n(14),s=n(2),i=n(1),c=n(461),o=n(38),r=n(113),l="error",d="success",j="inProgress",b=n(290),g=n(299),m=n(465),u=n(120),x=n(549),f=n(369),h=n(376),O=n(30),p=n(525),v=n(392),S=n(688),y=n.n(S),C=n(121),N=n(49),w=n(0),D=Object(g.a)((function(e){return Object(b.a)({titleBar:{borderBottom:"#E5E5E5 1px solid",padding:"30px 25px",fontSize:20,color:"#07193E",fontWeight:"bold",borderRadius:"10px 10px 0px 0px",paddingTop:0},divisorContainer:{padding:25},serversData:{color:"#07193E",fontSize:18,display:"flex",alignItems:"center","& svg":{marginRight:10}},minioVersionContainer:{fontSize:12,color:"#07193E",justifyContent:"center",alignSelf:"center",alignItems:"center",display:"flex"},versionIcon:{color:"#07193E",marginRight:20},loaderAlign:{textAlign:"center"},advancedContainer:{justifyContent:"flex-end",display:"flex"},optionsContainer:{padding:0,marginBottom:25},advancedConfiguration:{color:"#2781B0",fontSize:10,textDecoration:"underline",border:"none",backgroundColor:"transparent",cursor:"pointer",alignItems:"center",display:"flex","&:hover":{color:"#07193E"},"& svg":{width:10,alignSelf:"center",marginLeft:5}},advancedOpen:{transform:"rotateZ(-90deg) translateX(-4px) translateY(2px)"},advancedClosed:{transform:"rotateZ(90deg)"},advancedContent:{backgroundColor:"#F5F7F9",maxHeight:0,transitionDuration:"0.3s",overflow:"hidden",padding:"0 15px","&.open":{maxHeight:400,padding:15}}})}))((function(e){var t=e.title,n=e.children,s=e.classes,c=e.advancedVisible,o=e.advancedContent,r=Object(i.useState)("N/A"),l=Object(a.a)(r,2),d=l[0],j=l[1],b=Object(i.useState)(0),g=Object(a.a)(b,2),m=g[0],u=g[1],f=Object(i.useState)(0),h=Object(a.a)(f,2),O=h[0],v=h[1],S=Object(i.useState)(!0),D=Object(a.a)(S,2),k=D[0],E=D[1],I=Object(i.useState)(!1),R=Object(a.a)(I,2),A=R[0],M=R[1];return Object(i.useEffect)((function(){k&&N.a.invoke("GET","/api/v1/admin/info?defaultOnly=true").then((function(e){var t,n=null===(t=e.servers)||void 0===t?void 0:t.length;if(u(n),e.servers.length>0){j(e.servers[0].version);var a=e.servers.reduce((function(e,t){return e+t.drives.length}),0);v(a)}E(!1)})).catch((function(e){E(!1)}))}),[k]),Object(w.jsxs)(x.a,{item:!0,xs:12,children:[Object(w.jsx)(x.a,{item:!0,xs:12,className:s.titleBar,children:t}),Object(w.jsxs)(x.a,{item:!0,xs:12,children:[Object(w.jsxs)(x.a,{item:!0,xs:12,className:s.optionsContainer,children:[Object(w.jsx)(x.a,{container:!0,className:s.divisorContainer,children:k?Object(w.jsx)(i.Fragment,{children:Object(w.jsx)(x.a,{item:!0,xs:12,className:s.loaderAlign,children:Object(w.jsx)(p.a,{size:25})})}):Object(w.jsxs)(i.Fragment,{children:[Object(w.jsxs)(x.a,{item:!0,xs:12,md:4,className:s.serversData,children:[Object(w.jsx)(C.x,{})," ",Object(w.jsx)("strong",{children:m}),"\xa0nodes,\xa0",Object(w.jsx)("strong",{children:O}),"\xa0 drives"]}),Object(w.jsxs)(x.a,{item:!0,xs:12,md:4,className:s.minioVersionContainer,children:[Object(w.jsx)("span",{className:s.versionIcon,children:Object(w.jsx)(C.Pb,{})})," ","MinIO VERSION\xa0",Object(w.jsx)("strong",{children:d})]}),Object(w.jsx)(x.a,{item:!0,xs:12,md:4,className:s.advancedContainer,children:c&&Object(w.jsxs)("button",{onClick:function(){M(!A)},className:s.advancedConfiguration,children:["Advanced configurations"," ",Object(w.jsx)("span",{className:A?s.advancedOpen:s.advancedClosed,children:Object(w.jsx)(y.a,{})})]})})]})}),o&&Object(w.jsx)(x.a,{xs:12,className:"".concat(s.advancedContent," ").concat(A?"open":""),children:o})]}),n]})]})})),k=Object(o.b)((function(e){return{message:e.healthInfo.message,serverDiagnosticStatus:e.system.serverDiagnosticStatus}}),{healthInfoMessageReceived:r.c,healthInfoResetMessage:r.d,setSnackBarMessage:O.k,setServerDiagStat:O.j});t.default=k(Object(g.a)((function(e){return Object(b.a)(Object(s.a)(Object(s.a)({logList:{background:"#fff",minHeight:400,height:"calc(100vh - 270px)",overflow:"auto",fontSize:13,padding:"25px 45px",border:"1px solid #EAEDEE",borderRadius:4},loading:{paddingTop:8,paddingLeft:40},buttons:{justifyContent:"flex-start",gap:20},localMessage:{fontSize:24,color:"#07193E",fontWeight:"bold",textAlign:"center",marginBottom:10},startDiagnostic:{textAlign:"center",marginBottom:25},progressResult:{textAlign:"center",marginBottom:25},diagNew:{textAlign:"right",margin:25,marginBottom:0}},u.a),Object(u.e)(e.spacing(4))))}))((function(e){var t=e.classes,n=e.healthInfoMessageReceived,s=e.healthInfoResetMessage,o=e.message,r=e.setSnackBarMessage,b=e.setServerDiagStat,g=e.serverDiagnosticStatus,u=Object(i.useState)(!1),O=Object(a.a)(u,2),S=O[0],y=O[1],C=Object(i.useState)(!1),N=Object(a.a)(C,2),k=N[0],E=N[1],I=Object(i.useState)(!0),R=Object(a.a)(I,2),A=R[0],M=R[1],B=Object(i.useState)(""),z=Object(a.a)(B,2),F=z[0],L=z[1],T=Object(i.useState)("Start new Diagnostic"),V=Object(a.a)(T,2),W=V[0],H=V[1];return Object(i.useEffect)((function(){g!==j?g===d&&k?H("Diagnostic complete"):g!==l||H("Error"):H("Diagnostic in progress...")}),[g,S,k]),Object(i.useEffect)((function(){g===d&&o!=={}&&M(!1),g===j&&M(!0),y(!1)}),[g,o]),Object(i.useEffect)((function(){if(S){s();var e=new URL(window.location.toString()),t=e.port,a=Object(m.d)(e.protocol),i=new c.w3cwebsocket("".concat(a,"://").concat(e.hostname,":").concat(t,"/ws/health-info?deadline=1h")),o=null;null!==i&&(i.onopen=function(){console.log("WebSocket Client Connected"),i.send("ok"),o=setInterval((function(){i.send("ok")}),1e4),E(!0),L("Diagnostic started. Please do not refresh page during diagnosis."),b(j)},i.onmessage=function(e){var t=JSON.parse(e.data.toString());t.timestamp=new Date(t.timestamp.toString()),n(t)},i.onerror=function(e){console.log("error closing websocket:",e.message),i.close(1e3),clearInterval(o),b(l)},i.onclose=function(e){clearInterval(o),e.code===m.b||e.code===m.c||e.code===m.a?(console.log("connection closed by server with code:",e.code),L("An error occurred while getting Diagnostic file."),b(l)):(console.log("connection closed by server"),L("Diagnostic file is ready to be downloaded."),b(d))})}else y(!1)}),[n,s,S,r,b]),Object(w.jsxs)(i.Fragment,{children:[Object(w.jsx)(h.a,{label:"Diagnostic"}),Object(w.jsxs)(x.a,{container:!0,className:t.container,children:[Object(w.jsx)(x.a,{item:!0,xs:12,children:Object(w.jsx)(v.a,{to:"/tools",label:"Return to Tools"})}),Object(w.jsx)(x.a,{item:!0,xs:12,className:t.boxy,children:Object(w.jsx)(D,{title:W,advancedVisible:!1,children:Object(w.jsxs)(x.a,{container:!0,className:t.buttons,children:[!k&&Object(w.jsx)(x.a,{item:!0,xs:12,className:t.startDiagnostic,children:Object(w.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",disabled:S,onClick:function(){return y(!0)},children:"Start Diagnostic"})},"start-diag"),k&&Object(w.jsxs)(x.a,{item:!0,xs:12,className:t.progressResult,children:[Object(w.jsx)("div",{className:t.localMessage,children:F}),g===j?Object(w.jsx)("div",{className:t.loading,children:Object(w.jsx)(p.a,{size:25})}):Object(w.jsxs)(i.Fragment,{children:[g!==l&&Object(w.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",onClick:function(){!function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}("diagnostic.json",JSON.stringify(o,null,2))},disabled:A,children:"Download"}),Object(w.jsx)(x.a,{item:!0,xs:12,className:t.diagNew,children:Object(w.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",disabled:S,onClick:function(){return y(!0)},children:"Start new Diagnostic"})})]})]},"start-download")]})})})]})]})})))}}]);
//# sourceMappingURL=49.9d48e041.chunk.js.map