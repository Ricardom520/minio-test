(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[40],{376:function(e,t,n){"use strict";n(1);var a=n(549),o=n(290),r=n(299),s=n(94),i=n(38),c=n(71),l=n(72),d=n(401),b=n(0),h=Object(i.b)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode}}),null);t.a=h(Object(r.a)((function(e){return Object(o.a)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}}})}))((function(e){var t=e.classes,n=e.label,o=e.actions,r=e.sidebarOpen,i=e.operatorMode;return Object(b.jsxs)(a.a,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[Object(b.jsx)(d.a,{display:{xs:"block",sm:"block",md:"none"},children:Object(b.jsx)(a.a,{item:!0,xs:12,style:{height:10},children:"\xa0"})}),Object(b.jsxs)(a.a,{item:!0,xs:12,sm:12,md:6,className:t.label,children:[!r&&Object(b.jsx)("div",{className:t.logo,children:i?Object(b.jsx)(c.a,{}):Object(b.jsx)(l.a,{})}),Object(b.jsx)(s.a,{variant:"h4",className:t.labelStyle,children:n})]}),o&&Object(b.jsx)(a.a,{item:!0,xs:12,sm:12,md:6,className:t.rightMenu,children:o})]})})))},392:function(e,t,n){"use strict";n(1);var a=n(19),o=n(290),r=n(299),s=n(121),i=n(0);t.a=Object(r.a)((function(e){return Object(o.a)({link:{display:"flex",alignItems:"center",textDecoration:"none",maxWidth:"250px",padding:"2rem 2rem 0rem 2rem",color:e.palette.primary.light,fontSize:".8rem","&:hover":{textDecoration:"underline"}},icon:{marginRight:".3rem",display:"flex",alignItems:"center",justifyContent:"center"}})}))((function(e){var t=e.to,n=e.label,o=e.classes;return Object(i.jsxs)(a.a,{to:t,className:o.link,children:[Object(i.jsx)("div",{className:o.icon,children:Object(i.jsx)(s.f,{})}),Object(i.jsx)("div",{children:n})]})}))},401:function(e,t,n){"use strict";var a=n(3),o=n(4),r=n(1),s=(n(11),n(7)),i=n(98),c=n(343),l=n(353),d=n(56),b=n(0),h=["className","component"];var u=n(199),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=Object(i.a)("div")(c.a),u=r.forwardRef((function(e,r){var i=Object(d.a)(t),c=Object(l.a)(e),u=c.className,j=c.component,p=void 0===j?"div":j,g=Object(o.a)(c,h);return Object(b.jsx)(n,Object(a.a)({as:p,ref:r,className:Object(s.a)(u,"MuiBox-root"),theme:i},g))}));return u}({defaultTheme:Object(u.a)()});t.a=j},445:function(e,t,n){"use strict";var a=n(5),o=n(4),r=n(3),s=n(1),i=(n(11),n(7)),c=n(92),l=n(9),d=n(94),b=n(412),h=n(396),u=n(8),j=n(67),p=n(93);function g(e){return Object(j.a)("MuiInputAdornment",e)}var m=Object(p.a)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),f=n(12),O=n(0),v=["children","className","component","disablePointerEvents","disableTypography","position","variant"],x=Object(u.a)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["position".concat(Object(l.a)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:t.palette.action.active},"filled"===n.variant&&Object(a.a)({},"&.".concat(m.positionStart,"&:not(.").concat(m.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),w=s.forwardRef((function(e,t){var n=Object(f.a)({props:e,name:"MuiInputAdornment"}),a=n.children,u=n.className,j=n.component,p=void 0===j?"div":j,m=n.disablePointerEvents,w=void 0!==m&&m,y=n.disableTypography,N=void 0!==y&&y,C=n.position,k=n.variant,L=Object(o.a)(n,v),S=Object(h.a)()||{},E=k;k&&S.variant,S&&!E&&(E=S.variant);var I=Object(r.a)({},n,{hiddenLabel:S.hiddenLabel,size:S.size,disablePointerEvents:w,position:C,variant:E}),M=function(e){var t=e.classes,n=e.disablePointerEvents,a=e.hiddenLabel,o=e.position,r=e.size,s=e.variant,i={root:["root",n&&"disablePointerEvents",o&&"position".concat(Object(l.a)(o)),s,a&&"hiddenLabel",r&&"size".concat(Object(l.a)(r))]};return Object(c.a)(i,g,t)}(I);return Object(O.jsx)(b.a.Provider,{value:null,children:Object(O.jsx)(x,Object(r.a)({as:p,ownerState:I,className:Object(i.a)(M.root,u),ref:t},L,{children:"string"!==typeof a||N?Object(O.jsxs)(s.Fragment,{children:["start"===C?Object(O.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):null,a]}):Object(O.jsx)(d.a,{color:"text.secondary",children:a})}))})}));t.a=w},461:function(e,t,n){var a;if("object"===typeof globalThis)a=globalThis;else try{a=n(462)}catch(i){}finally{if(a||"undefined"===typeof window||(a=window),!a)throw new Error("Could not determine global this")}var o=a.WebSocket||a.MozWebSocket,r=n(463);function s(e,t){return t?new o(e,t):new o(e)}o&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(e){Object.defineProperty(s,e,{get:function(){return o[e]}})})),e.exports={w3cwebsocket:o?s:null,version:r}},462:function(e,t){var n=function(){if("object"===typeof self&&self)return self;if("object"===typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};e.exports=function(){if(this)return this;if("object"===typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return n()}try{return __global__||n()}finally{delete Object.prototype.__global__}}()},463:function(e,t,n){e.exports=n(464).version},464:function(e){e.exports=JSON.parse('{"name":"websocket","description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"author":"Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)","contributors":["I\xf1aki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],"version":"1.0.34","repository":{"type":"git","url":"https://github.com/theturtle32/WebSocket-Node.git"},"homepage":"https://github.com/theturtle32/WebSocket-Node","engines":{"node":">=4.0.0"},"dependencies":{"bufferutil":"^4.0.1","debug":"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2","yaeti":"^0.0.6"},"devDependencies":{"buffer-equal":"^1.0.0","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1","jshint":"^2.0.0","tape":"^4.9.1"},"config":{"verbose":false},"scripts":{"test":"tape test/unit/*.js","gulp":"gulp"},"main":"index","directories":{"lib":"./lib"},"browser":"lib/browser.js","license":"Apache-2.0"}')},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return s}));var a=1006,o=1008,r=1011,s=function(e){var t="ws";return"https:"===e&&(t="wss"),t}},865:function(e,t,n){"use strict";n.r(t);var a=n(14),o=n(2),r=n(1),s=n(461),i=n(290),c=n(299),l=n(38),d=n(549),b=n(882),h=n(445),u=n(446),j=n.n(u),p=n(112),g=n(55),m=n(465),f=n(120),O=n(128),v=n(376),x=n(392),w=n(0),y=Object(l.b)((function(e){return{messages:e.logs.messages}}),{logMessageReceived:p.c,logResetMessages:p.d});t.default=Object(c.a)((function(e){return Object(i.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({logList:{background:"#fff",minHeight:400,height:"calc(100vh - 304px)",overflow:"auto",fontSize:13,padding:"25px 45px 0",border:"1px solid #EAEDEE",borderRadius:4},tab:{paddingLeft:25},logerror:{color:"#A52A2A"},logerror_tab:{color:"#A52A2A",paddingLeft:25},ansidefault:{color:"#000"},highlight:{"& span":{backgroundColor:"#082F5238"}}},f.a),f.r),f.l),Object(f.e)(e.spacing(4))))}))(y((function(e){var t=e.classes,n=e.logMessageReceived,o=e.logResetMessages,i=e.messages,c=Object(r.useState)(""),l=Object(a.a)(c,2),u=l[0],p=l[1];Object(r.useEffect)((function(){o();var e=new URL(window.location.toString()),t=e.port,a=Object(m.d)(e.protocol),r=new s.w3cwebsocket("".concat(a,"://").concat(e.hostname,":").concat(t,"/ws/console")),i=null;if(null!==r)return r.onopen=function(){console.log("WebSocket Client Connected"),r.send("ok"),i=setInterval((function(){r.send("ok")}),1e4)},r.onmessage=function(e){var t=JSON.parse(e.data.toString());t.time=j()(t.time,"HH:mm:s UTC MM/DD/YYYY").toDate(),t.key=Math.random(),n(t)},r.onclose=function(){clearInterval(i),console.log("connection closed by server")},function(){r.close(1e3),clearInterval(i),console.log("closing websockets")}}),[n,o]);var f=function(e){var n=e.ConsoleMsg,a=(n=n.replace(/([^\x20-\x7F])/g,"")).replace(/((\[[0-9;]+m))/g,""),o=""!==u&&n.toLowerCase().includes(u.toLowerCase());return a.startsWith("   ")?Object(w.jsx)("div",{className:"".concat(o?t.highlight:""),children:Object(w.jsx)("span",{className:t.tab,children:a})},e.key):null!==e.error&&void 0!==e.error?function(e){var n=[];if(null!==e.error&&void 0!==e.error){if(e.api&&e.api.name){var a="API: ".concat(e.api.name),o=""!==u&&a.toLowerCase().includes(u.toLowerCase());n.push(Object(w.jsxs)("div",{className:"".concat(o?t.highlight:""),children:[Object(w.jsx)("br",{}),Object(w.jsx)("span",{className:t.logerror,children:a})]},"api-".concat(e.key)))}if(e.time){var r="Time: ".concat(Object(g.s)(e.time)),s=""!==u&&r.toLowerCase().includes(u.toLowerCase());n.push(Object(w.jsx)("div",{className:"".concat(s?t.highlight:""),children:Object(w.jsx)("span",{className:t.logerror,children:r})},"time-".concat(e.key)))}if(e.deploymentid){var i="DeploymentID: ".concat(e.deploymentid),c=""!==u&&i.toLowerCase().includes(u.toLowerCase());n.push(Object(w.jsx)("div",{className:"".concat(c?t.highlight:""),children:Object(w.jsx)("span",{className:t.logerror,children:i})},"deploytmentid-".concat(e.key)))}if(e.requestID){var l="RequestID: ".concat(e.requestID),d=""!==u&&l.toLowerCase().includes(u.toLowerCase());n.push(Object(w.jsx)("div",{className:"".concat(d?t.highlight:""),children:Object(w.jsx)("span",{className:t.logerror,children:l})},"requestid-".concat(e.key)))}if(e.remotehost){var b="RemoteHost: ".concat(e.remotehost),h=""!==u&&b.toLowerCase().includes(u.toLowerCase());n.push(Object(w.jsx)("div",{className:"".concat(h?t.highlight:""),children:Object(w.jsx)("span",{className:t.logerror,children:b})},"remotehost-".concat(e.key)))}if(e.host){var j="Host: ".concat(e.host),p=""!==u&&j.toLowerCase().includes(u.toLowerCase());n.push(Object(w.jsx)("div",{className:"".concat(p?t.highlight:""),children:Object(w.jsx)("span",{className:t.logerror,children:j})},"host-".concat(e.key)))}if(e.userAgent){var m="UserAgent: ".concat(e.userAgent),f=""!==u&&m.toLowerCase().includes(u.toLowerCase());n.push(Object(w.jsx)("div",{className:"".concat(f?t.highlight:""),children:Object(w.jsx)("span",{className:t.logerror,children:m})},"useragent-".concat(e.key)))}if(e.error.message){var O="Error: ".concat(e.error.message),v=""!==u&&O.toLowerCase().includes(u.toLowerCase());n.push(Object(w.jsx)("div",{className:"".concat(v?t.highlight:""),children:Object(w.jsx)("span",{className:t.logerror,children:O})},"message-".concat(e.key)))}if(e.error.source)for(var x in e.error.source){var y=e.error.source[x],N=""!==u&&y.toLowerCase().includes(u.toLowerCase());n.push(Object(w.jsx)("div",{className:"".concat(N?t.highlight:""),children:Object(w.jsx)("span",{className:t.logerror_tab,children:y})},"source-".concat(e.key,"-").concat(x)))}}return n}(e):Object(w.jsx)("div",{className:"".concat(o?t.highlight:""),children:Object(w.jsx)("span",{className:t.ansidefault,children:a})},e.key)},y=i.map((function(e){return f(e)}));return Object(w.jsxs)(r.Fragment,{children:[Object(w.jsx)(v.a,{label:"Logs"}),Object(w.jsxs)(d.a,{container:!0,className:t.container,children:[Object(w.jsx)(d.a,{item:!0,xs:12,children:Object(w.jsx)(x.a,{to:"/tools",label:"Return to Tools"})}),Object(w.jsx)(d.a,{item:!0,xs:12,children:Object(w.jsxs)(d.a,{container:!0,className:t.logsSubContainer,children:[Object(w.jsx)(d.a,{item:!0,xs:12,className:t.actionsTray,children:Object(w.jsx)(b.a,{placeholder:"Highlight Line",className:t.searchField,id:"search-resource",label:"",onChange:function(e){p(e.target.value)},InputProps:{disableUnderline:!0,startAdornment:Object(w.jsx)(h.a,{position:"start",children:Object(w.jsx)(O.a,{})})},variant:"standard"})}),Object(w.jsx)(d.a,{item:!0,xs:12,children:Object(w.jsx)("br",{})}),Object(w.jsx)(d.a,{item:!0,xs:12,children:Object(w.jsx)("div",{className:t.logList,children:y})})]})})]})]})})))}}]);
//# sourceMappingURL=40.a5b9f6c4.chunk.js.map