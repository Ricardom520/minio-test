(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[32],{385:function(e,t,n){"use strict";n(1);var o=n(561),a=n(296),i=n(306),r=n(89),l=n(37),c=n(67),s=n(68),d=n(413),u=n(0),b=Object(l.b)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode}}),null);t.a=b(Object(i.a)((function(e){return Object(a.a)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}}})}))((function(e){var t=e.classes,n=e.label,a=e.actions,i=e.sidebarOpen,l=e.operatorMode;return Object(u.jsxs)(o.a,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[Object(u.jsx)(d.a,{display:{xs:"block",sm:"block",md:"none"},children:Object(u.jsx)(o.a,{item:!0,xs:12,style:{height:10},children:"\xa0"})}),Object(u.jsxs)(o.a,{item:!0,xs:12,sm:12,md:6,className:t.label,children:[!i&&Object(u.jsx)("div",{className:t.logo,children:l?Object(u.jsx)(c.a,{}):Object(u.jsx)(s.a,{})}),Object(u.jsx)(r.a,{variant:"h4",className:t.labelStyle,children:n})]}),a&&Object(u.jsx)(o.a,{item:!0,xs:12,sm:12,md:6,className:t.rightMenu,children:a})]})})))},390:function(e,t,n){"use strict";var o=n(14),a=n(15),i=n(2),r=n(1),l=n.n(r),c=n(43),s=n.n(c),d=n(394),u=n.n(d),b=n(89),p=n(376),h=n(907),m=n(561),g=n(374),f=n(364),j=n(712),v=n(455),x=n(296),O=n(306),y=n(537),S=n(447),w=n.n(S),T=n(441),C=n.n(T),k=n(446),E=n.n(k),N=n(18),A=n(378),L="#081C42",_="#081C42",R=n(0),M=function(e){var t=e.active,n=void 0!==t&&t;return Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",children:Object(R.jsx)("path",{fill:n?_:L,d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"})})},I=function(e){var t=e.active,n=void 0!==t&&t;return Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",children:Object(R.jsx)("path",{fill:n?_:L,d:"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"})})},P=function(e){var t=e.active,n=void 0!==t&&t;return Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:Object(R.jsx)("path",{fill:n?_:L,d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"})})},F=function(e){var t=e.active,n=void 0!==t&&t;return Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",children:Object(R.jsx)("path",{fill:n?_:L,d:"M20 16h2v-2h-2v2zm0-9v5h2V7h-2zM10 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})})},z=n(127),B=n(129),q=n(119),K=n(130),D=Object(O.a)((function(){return Object(x.a)({spacing:{margin:"0 8px"},buttonDisabled:{"&.MuiButtonBase-root.Mui-disabled":{cursor:"not-allowed",filter:"grayscale(100%)",opacity:"30%"}}})}))((function(e){var t=e.type,n=e.onClick,o=e.valueToSend,a=e.idField,i=e.selected,r=e.to,l=e.sendOnlyId,c=void 0!==l&&l,s=e.disabled,d=void 0!==s&&s,b=e.classes,h=e.label,m=c?o[a]:o,g="string"===typeof t?function(e,t){switch(e){case"view":case"preview":return Object(R.jsx)(q.nb,{});case"edit":return Object(R.jsx)(z.a,{});case"delete":return Object(R.jsx)(B.a,{});case"description":return Object(R.jsx)(q.X,{});case"share":return Object(R.jsx)(q.Ab,{});case"cloud":return Object(R.jsx)(M,{active:t});case"console":return Object(R.jsx)(I,{active:t});case"download":return Object(R.jsx)(K.a,{});case"disable":return Object(R.jsx)(P,{active:t});case"format":return Object(R.jsx)(F,{active:t})}return null}(t,i):t,f=Object(R.jsx)(p.a,{"aria-label":"string"===typeof t?t:"",size:"small",className:"".concat(b.spacing," ").concat(d?b.buttonDisabled:""),disabled:d,onClick:n?function(e){e.stopPropagation(),d?e.preventDefault():n(m)}:function(){return null},children:g});return h&&""!==h&&(f=Object(R.jsx)(A.a,{title:h,children:f})),n?f:u()(r)?d?f:Object(R.jsx)(N.a,{to:"".concat(r,"/").concat(m),onClick:function(e){e.stopPropagation()},children:f}):null})),Q=n(48),H=n(118),W=n(398),U="#9c9c9c80",V={fontWeight:400,fontSize:14,borderColor:U,borderWidth:"0.5px",height:40,transitionDuration:"0.3s",padding:"initial",paddingRight:6,paddingLeft:6},J=function(e,t,n,o,i,l,c,d,b,p,h){var m=function(e,t,n,o,i,r,l){var c=Object(a.a)(e);r&&(c=e.filter((function(e){return l.includes(e.elementKey)})));var s=t;return o&&(s-=45),i&&(s-=n),c.reduce((function(e,t){return t.width?e-t.width:e}),s)/c.filter((function(e){return!e.width})).length}(e,t,n,o,i,d,b);return e.map((function(e,t){if(d&&!b.includes(e.elementKey))return null;var n=!e.enableSort||!e.enableSort;return Object(R.jsx)(v.b,{dataKey:e.elementKey,headerClassName:"titleHeader ".concat(e.headerTextAlign?"text-".concat(e.headerTextAlign):""),headerRenderer:function(){return Object(R.jsxs)(r.Fragment,{children:[p===e.elementKey&&Object(R.jsx)(r.Fragment,{children:"ASC"===h?Object(R.jsx)(E.a,{}):Object(R.jsx)(C.a,{})}),e.label]})},className:e.contentTextAlign?"text-".concat(e.contentTextAlign):"",cellRenderer:function(t){var n=t.rowData,o=!!l&&l.includes(u()(n)?n:n[c]);return function(e,t,n){var o=u()(e)?e:s()(e,t.elementKey,null),a=t.renderFullObject?e:o,i=t.renderFunction?t.renderFunction(a):a;return Object(R.jsx)(r.Fragment,{children:Object(R.jsx)("span",{className:n?"selected":"",children:i})})}(n,e,o)},width:e.width||m,disableSort:n,defaultSortDirection:"ASC"},"col-tb-".concat(t.toString()))}))};t.a=Object(O.a)((function(){return Object(x.a)(Object(i.a)(Object(i.a)({dialogContainer:{padding:"12px 26px 22px"},paper:{display:"flex",overflow:"auto",flexDirection:"column",padding:"8px 16px",boxShadow:"none",border:"#EAEDEE 1px solid",borderRadius:3,minHeight:200,overflowY:"scroll",position:"relative","&::-webkit-scrollbar":{width:3,height:3}},noBackground:{backgroundColor:"transparent",border:0},disabled:{backgroundColor:"#fbfafa",color:"#cccccc"},defaultPaperHeight:{height:"calc(100vh - 205px)"},allTableSettings:{"& .MuiTableCell-sizeSmall:last-child":{paddingRight:"initial"},"& .MuiTableCell-body.MuiTableCell-sizeSmall:last-child":{paddingRight:6}},minTableHeader:{color:"#393939","& tr":{"& th":{fontWeight:700,fontSize:14,borderColor:"#39393980",borderWidth:"0.5px",padding:"6px 0 10px"}}},rowUnselected:Object(i.a)(Object(i.a)({},V),{},{color:"#393939"}),rowSelected:Object(i.a)(Object(i.a)({},V),{},{color:"#081C42",fontWeight:600}),paginatorContainer:{display:"flex",justifyContent:"flex-end",padding:"5px 38px"},checkBoxHeader:{width:50,textAlign:"left",paddingRight:10,"&.MuiTableCell-paddingCheckbox":{paddingBottom:4,paddingLeft:0}},actionsContainer:{width:150,borderColor:U},paginatorComponent:{borderBottom:0},checkBoxRow:{borderColor:U,padding:"0 10px 0 0"},loadingBox:{paddingTop:"100px",paddingBottom:"100px"},overlayColumnSelection:{position:"absolute",right:0,top:0},popoverContent:{maxHeight:250,overflowY:"auto",padding:"0 10px 10px"},shownColumnsLabel:{color:"#9c9c9c",fontSize:12,padding:10,borderBottom:"#eaeaea 1px solid",width:"100%"},"@global":{".rowLine":{borderBottom:"1px solid ".concat(U),height:40,color:"#393939",fontSize:14,transitionDuration:.3,"&:focus":{outline:"initial"},"&:hover:not(.ReactVirtualized__Table__headerRow)":{userSelect:"none",backgroundColor:"#ececec",fontWeight:600,"&.canClick":{cursor:"pointer"},"&.canSelectText":{userSelect:"text"}},"& .selected":{color:"#081C42",fontWeight:600}},".headerItem":{userSelect:"none",fontWeight:700,fontSize:14,fontStyle:"initial",display:"flex",alignItems:"center",outline:"none"},".ReactVirtualized__Table__headerRow":{fontWeight:700,fontSize:14,borderColor:"#39393980",textTransform:"initial"},".optionsAlignment":{textAlign:"center","& .min-icon":{width:16,height:16}},".text-center":{textAlign:"center"},".text-right":{textAlign:"right"},".progress-enabled":{paddingTop:3,display:"inline-block",margin:"0 10px",position:"relative",width:18,height:18},".progress-enabled > .MuiCircularProgress-root":{position:"absolute",left:0,top:3}}},H.c),H.q))}))((function(e){var t=e.itemActions,n=e.columns,a=e.onSelect,i=e.records,c=e.isLoading,s=e.loadingMessage,d=void 0===s?Object(R.jsx)(b.a,{component:"h3",children:"Loading..."}):s,x=e.entityName,O=e.selectedItems,S=e.idField,T=e.classes,C=e.radioSelection,k=void 0!==C&&C,E=e.customEmptyMessage,N=void 0===E?"":E,A=e.customPaperHeight,L=void 0===A?"":A,_=e.noBackground,M=void 0!==_&&_,I=e.columnsSelector,P=void 0!==I&&I,F=e.textSelectable,z=void 0!==F&&F,B=e.columnsShown,q=void 0===B?[]:B,K=e.onColumnChange,H=void 0===K?function(e,t){}:K,U=e.infiniteScrollConfig,V=e.sortConfig,Y=e.autoScrollToBottom,G=void 0!==Y&&Y,Z=e.disabled,X=void 0!==Z&&Z,$=Object(r.useState)(!1),ee=Object(o.a)($,2),te=ee[0],ne=ee[1],oe=l.a.useState(null),ae=Object(o.a)(oe,2),ie=ae[0],re=ae[1],le=t?t.find((function(e){return"view"===e.type})):null,ce=function(e){ne(!te),re(e.currentTarget)},se=function(){ne(!1),re(null)};return Object(R.jsx)(m.a,{item:!0,xs:12,children:Object(R.jsxs)(g.a,{className:"".concat(T.paper," ").concat(M?T.noBackground:"","\n        ").concat(X?T.disabled:""," \n        ").concat(""!==L?L:T.defaultPaperHeight),children:[c&&Object(R.jsxs)(m.a,{container:!0,className:T.loadingBox,children:[Object(R.jsx)(m.a,{item:!0,xs:12,style:{textAlign:"center"},children:d}),Object(R.jsx)(m.a,{item:!0,xs:12,children:Object(R.jsx)(f.a,{})})]}),P&&!c&&i.length>0&&Object(R.jsx)("div",{className:T.overlayColumnSelection,children:function(e){return Object(R.jsxs)(r.Fragment,{children:[Object(R.jsx)(p.a,{"aria-describedby":"columnsSelector",color:"primary",onClick:ce,size:"large",children:Object(R.jsx)(w.a,{fontSize:"inherit"})}),Object(R.jsxs)(h.a,{anchorEl:ie,id:"columnsSelector",open:te,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:se,children:[Object(R.jsx)("div",{className:T.shownColumnsLabel,children:"Shown Columns"}),Object(R.jsx)("div",{className:T.popoverContent,children:e.map((function(e){return Object(R.jsx)(W.a,{label:e.label,checked:q.includes(e.elementKey),onChange:function(t){H(e.elementKey,t.target.checked)},id:"chbox-".concat(e.label),name:"chbox-".concat(e.label),value:e.label},"tableColumns-".concat(e.label))}))})]})]})}(n)}),i&&!c&&i.length>0?Object(R.jsx)(v.c,{isRowLoaded:function(e){var t=e.index;return!!i[t]},loadMoreRows:U?U.loadMoreRecords:function(){return new Promise((function(){return!0}))},rowCount:U?U.recordsCount:i.length,children:function(e){var o=e.onRowsRendered,l=e.registerChild;return Object(R.jsx)(v.a,{children:function(e){var c=e.width,s=e.height,d=function(e,t){var n=45*t+15;return n<80?80:n>e?e:n}(c,t?t.filter((function(e){return"view"!==e.type})).length:0),b=!(!a||!O),p=!!(t&&t.length>1||t&&1===t.length&&"view"!==t[0].type);return Object(R.jsxs)(v.d,{ref:l,disableHeader:!1,headerClassName:"headerItem",headerHeight:40,height:s,noRowsRenderer:function(){return Object(R.jsx)(r.Fragment,{children:""!==N?N:"There are no ".concat(x," yet.")})},overscanRowCount:10,rowHeight:40,width:c,rowCount:i.length,rowGetter:function(e){var t=e.index;return i[t]},onRowClick:function(e){!function(e){if(le){var t=le.sendOnlyId?e[S]:e,n=!1;if(le.disableButtonFunction&&le.disableButtonFunction(t)&&(n=!0),le.to&&!n)return void Q.a.push("".concat(le.to,"/").concat(t));le.onClick&&!n&&le.onClick(t)}}(e.rowData)},rowClassName:"rowLine ".concat(le?"canClick":""," ").concat(!le&&z?"canSelectText":""),onRowsRendered:o,sort:V?V.triggerSort:void 0,sortBy:V?V.currentSort:void 0,sortDirection:V?V.currentDirection:void 0,scrollToIndex:G?i.length-1:-1,children:[b&&Object(R.jsx)(v.b,{headerRenderer:function(){return Object(R.jsx)(r.Fragment,{children:"Select"})},dataKey:"select-".concat(S),width:45,disableSort:!0,cellRenderer:function(e){var t=e.rowData,n=!!O&&O.includes(u()(t)?t:t[S]);return Object(R.jsx)(j.a,{value:u()(t)?t:t[S],color:"primary",inputProps:{"aria-label":"secondary checkbox"},checked:n,onChange:a,onClick:function(e){e.stopPropagation()},checkedIcon:Object(R.jsx)("span",{className:k?T.radioSelectedIcon:T.checkedIcon}),icon:Object(R.jsx)("span",{className:k?T.radioUnselectedIcon:T.unCheckedIcon})})}}),J(n,c,d,b,p,O||[],S,P,q,V?V.currentSort:"",V?V.currentDirection:void 0),p&&Object(R.jsx)(v.b,{headerRenderer:function(){return Object(R.jsx)(r.Fragment,{children:"Options"})},dataKey:S,width:d,headerClassName:"optionsAlignment",className:"optionsAlignment",cellRenderer:function(e){var n=e.rowData,o=!!O&&O.includes(u()(n)?n:n[S]);return function(e,t,n,o){return e.map((function(e,a){if("view"===e.type)return null;var i="string"===typeof t?t:t[o],r=!1;return e.disableButtonFunction&&e.disableButtonFunction(i)&&(r=!0),e.showLoaderFunction&&e.showLoaderFunction(i)?Object(R.jsx)("div",{className:"progress-enabled",children:Object(R.jsx)(y.a,{color:"primary",size:18,variant:"indeterminate"},"actions-loader-".concat(e.type,"-").concat(a.toString()))}):Object(R.jsx)(D,{label:e.label,type:e.type,onClick:e.onClick,to:e.to,valueToSend:t,selected:n,idField:o,sendOnlyId:!!e.sendOnlyId,disabled:r},"actions-".concat(e.type,"-").concat(a.toString()))}))}(t||[],n,o,S)}})]})}})}}):Object(R.jsx)(r.Fragment,{children:!c&&Object(R.jsx)("div",{children:""!==N?N:"There are no ".concat(x," yet.")})})]})})}))},395:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(4);function a(e,t){if(null==e)return{};var n,a,i=Object(o.a)(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},398:function(e,t,n){"use strict";var o=n(2),a=n(1),i=n.n(a),r=n(561),l=n(712),c=n(895),s=n(378),d=n(296),u=n(306),b=n(118),p=n(120),h=n(0);t.a=Object(u.a)((function(e){return Object(d.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({},b.g),b.A),b.c),{},{fieldContainer:Object(o.a)(Object(o.a)({},b.g.fieldContainer),{},{display:"flex",justifyContent:"flex-start",alignItems:"center",margin:"15px 0",marginBottom:0,flexBasis:"initial"})}))}))((function(e){var t=e.label,n=e.onChange,o=e.value,a=e.id,d=e.name,u=e.checked,b=void 0!==u&&u,m=e.disabled,g=void 0!==m&&m,f=e.tooltip,j=void 0===f?"":f,v=e.classes;return Object(h.jsx)(i.a.Fragment,{children:Object(h.jsxs)(r.a,{item:!0,xs:12,className:v.fieldContainer,children:[Object(h.jsx)("div",{children:Object(h.jsx)(l.a,{name:d,id:a,value:o,color:"primary",inputProps:{"aria-label":"secondary checkbox"},checked:b,onChange:n,checkedIcon:Object(h.jsx)("span",{className:v.checkedIcon}),icon:Object(h.jsx)("span",{className:v.unCheckedIcon}),disabled:g})}),""!==t&&Object(h.jsxs)(c.a,{htmlFor:a,className:v.noMinWidthLabel,children:[Object(h.jsx)("span",{children:t}),""!==j&&Object(h.jsx)("div",{className:v.tooltipContainer,children:Object(h.jsx)(s.a,{title:j,placement:"top-start",children:Object(h.jsx)("div",{className:v.tooltip,children:Object(h.jsx)(p.a,{})})})})]})]})})}))},401:function(e,t,n){"use strict";var o=n(2),a=n(5),i=n(395),r=(n(1),n(296)),l=n(306),c=n(376),s=n(378),d=n(7),u=n(0),b=["classes","children","variant","tooltip"];t.a=Object(l.a)((function(e){return Object(r.a)({root:{padding:8,marginLeft:8,borderWidth:1,borderColor:"#696969",color:"#696969",borderStyle:"solid",borderRadius:3,"& .min-icon":{width:20},"& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.main,borderRadius:3,opacity:.3},"&:disabled":{color:"#EBEBEB",borderColor:"#EBEBEB"}},contained:{borderColor:e.palette.primary.main,background:e.palette.primary.main,color:"white","& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.dark,borderRadius:3,opacity:.3},"&:hover":{backgroundColor:e.palette.primary.light,color:"#FFF"}}})}))((function(e){var t=e.classes,n=e.children,r=e.variant,l=void 0===r?"outlined":r,p=e.tooltip,h=Object(i.a)(e,b),m=Object(u.jsx)(c.a,Object(o.a)(Object(o.a)({},h),{},{className:Object(d.a)(t.root,Object(a.a)({},t.contained,"contained"===l)),children:n}));return p&&""!==p?Object(u.jsx)(s.a,{title:p,children:Object(u.jsx)("span",{children:m})}):m}))},408:function(e,t,n){"use strict";n(1);var o=n(296),a=n(306),i=n(561),r=n(0);t.a=Object(a.a)((function(e){return Object(o.a)({root:{border:"1px solid rgb(234, 237, 238)",borderRadius:5,paddingTop:10,paddingLeft:40,paddingRight:40,paddingBottom:40,marginTop:10,marginBottom:10,backgroundColor:"#fbfafa"},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:20,display:"flex",alignItems:"center","& .min-icon":{width:"2.5rem",marginRight:".8rem"}},iconSize:{fontSize:64},helpText:{fontSize:16}})}))((function(e){var t=e.classes,n=e.iconComponent,o=e.title,a=e.help;return Object(r.jsx)("div",{className:t.root,children:Object(r.jsxs)(i.a,{container:!0,children:[Object(r.jsxs)(i.a,{item:!0,xs:12,className:t.leftItems,children:[n,o]}),Object(r.jsx)(i.a,{item:!0,xs:12,className:t.helpText,children:a})]})})}))},413:function(e,t,n){"use strict";var o=n(3),a=n(4),i=n(1),r=n(7),l=n(93),c=n(352),s=n(362),d=n(52),u=n(0),b=["className","component"];var p=n(292),h=n(200),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=e.defaultClassName,p=void 0===n?"MuiBox-root":n,h=e.generateClassName,m=e.styleFunctionSx,g=void 0===m?c.a:m,f=Object(l.a)("div")(g),j=i.forwardRef((function(e,n){var i=Object(d.a)(t),l=Object(s.a)(e),c=l.className,m=l.component,g=void 0===m?"div":m,j=Object(a.a)(l,b);return Object(u.jsx)(f,Object(o.a)({as:g,ref:n,className:Object(r.a)(c,h?h(p):p),theme:i},j))}));return j}({defaultTheme:Object(h.a)(),defaultClassName:"MuiBox-root",generateClassName:p.a.generate});t.a=m},456:function(e,t,n){"use strict";var o=n(5),a=n(4),i=n(3),r=n(1),l=n(7),c=n(87),s=n(10),d=n(89),u=n(425),b=n(400),p=n(8),h=n(63),m=n(88);function g(e){return Object(h.a)("MuiInputAdornment",e)}var f,j=Object(m.a)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),v=n(12),x=n(0),O=["children","className","component","disablePointerEvents","disableTypography","position","variant"],y=Object(p.a)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["position".concat(Object(s.a)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return Object(i.a)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===n.variant&&Object(o.a)({},"&.".concat(j.positionStart,"&:not(.").concat(j.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),S=r.forwardRef((function(e,t){var n=Object(v.a)({props:e,name:"MuiInputAdornment"}),o=n.children,p=n.className,h=n.component,m=void 0===h?"div":h,j=n.disablePointerEvents,S=void 0!==j&&j,w=n.disableTypography,T=void 0!==w&&w,C=n.position,k=n.variant,E=Object(a.a)(n,O),N=Object(b.a)()||{},A=k;k&&N.variant,N&&!A&&(A=N.variant);var L=Object(i.a)({},n,{hiddenLabel:N.hiddenLabel,size:N.size,disablePointerEvents:S,position:C,variant:A}),_=function(e){var t=e.classes,n=e.disablePointerEvents,o=e.hiddenLabel,a=e.position,i=e.size,r=e.variant,l={root:["root",n&&"disablePointerEvents",a&&"position".concat(Object(s.a)(a)),r,o&&"hiddenLabel",i&&"size".concat(Object(s.a)(i))]};return Object(c.a)(l,g,t)}(L);return Object(x.jsx)(u.a.Provider,{value:null,children:Object(x.jsx)(y,Object(i.a)({as:m,ownerState:L,className:Object(l.a)(_.root,p),ref:t},E,{children:"string"!==typeof o||T?Object(x.jsxs)(r.Fragment,{children:["start"===C?f||(f=Object(x.jsx)("span",{className:"notranslate",children:"\u200b"})):null,o]}):Object(x.jsx)(d.a,{color:"text.secondary",children:o})}))})}));t.a=S},464:function(e,t,n){"use strict";var o=n(2),a=n(395),i=(n(1),n(296)),r=n(306),l=n(0),c=["classes","children"];t.a=Object(r.a)((function(e){return Object(i.a)({root:{padding:0,margin:0,border:0,backgroundColor:"transparent",textDecoration:"underline",cursor:"pointer",fontSize:"inherit",color:e.palette.info.main,fontFamily:"Lato, sans-serif"}})}))((function(e){var t=e.classes,n=e.children,i=Object(a.a)(e,c);return Object(l.jsx)("button",Object(o.a)(Object(o.a)({},i),{},{className:t.root,children:n}))}))},569:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return m})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return j})),n.d(t,"a",(function(){return v}));var o,a=n(5),i="notify_postgres",r="notify_mysql",l="notify_kafka",c="notify_amqp",s="notify_mqtt",d="notify_redis",u="notify_nats",b="notify_elasticsearch",p="notify_webhook",h="notify_nsq",m=function(e){return e.map((function(e){return{service_name:"".concat(e.service,":").concat(e.account_id),status:e.status}}))},g=[{actionTrigger:i,targetTitle:"Postgres SQL",logo:"/postgres-logo.svg"},{actionTrigger:l,targetTitle:"Kafka",logo:"/kafka-logo.svg"},{actionTrigger:c,targetTitle:"AMQP",logo:"/amqp-logo.svg"},{actionTrigger:s,targetTitle:"MQTT",logo:"/mqtt-logo.svg"},{actionTrigger:d,targetTitle:"Redis",logo:"/redis-logo.svg"},{actionTrigger:u,targetTitle:"NATS",logo:"/nats-logo.svg"},{actionTrigger:r,targetTitle:"Mysql",logo:"/mysql-logo.svg"},{actionTrigger:b,targetTitle:"Elastic Search",logo:"/elasticsearch-logo.svg"},{actionTrigger:p,targetTitle:"Webhook",logo:"/webhooks-logo.svg"},{actionTrigger:h,targetTitle:"NSQ",logo:"/nsq-logo.svg"}],f=[{name:"queue-dir",label:"Queue Directory",required:!0,tooltip:"staging dir for undelivered messages e.g. '/home/events'",type:"string",placeholder:"Enter Queue Directory"},{name:"queue-limit",label:"Queue Limit",required:!1,tooltip:"maximum limit for undelivered messages, defaults to '10000'",type:"number",placeholder:"Enter Queue Limit"},{name:"comment",label:"Comment",required:!1,type:"comment",placeholder:"Enter Comment"}],j=function(e){return e.filter((function(e){return""!==e.value}))},v=(o={},Object(a.a)(o,l,[{name:"brokers",label:"Brokers",required:!0,tooltip:"Comma separated list of Kafka broker addresses",type:"string",placeholder:"Enter Brokers"},{name:"topic",label:"Topic",tooltip:"Kafka topic used for bucket notifications",type:"string",placeholder:"Enter Topic"},{name:"sasl_username",label:"SASL Username",tooltip:"Username for SASL/PLAIN or SASL/SCRAM authentication",type:"string",placeholder:"Enter SASL Username"},{name:"sasl_password",label:"SASL Password",tooltip:"Password for SASL/PLAIN or SASL/SCRAM authentication",type:"string",placeholder:"Enter SASL Password"},{name:"sasl_mechanism",label:"SASL Mechanism",tooltip:"SASL authentication mechanism, default 'PLAIN'",type:"string"},{name:"tls_client_auth",label:"TLS Client Auth",tooltip:"Client Auth determines the Kafka server's policy for TLS client auth",type:"string",placeholder:"Enter TLS Client Auth"},{name:"sasl",label:"SASL",tooltip:"Set to 'on' to enable SASL authentication",type:"on|off"},{name:"tls",label:"TLS",tooltip:"Set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS skip verify",tooltip:'Trust server TLS without verification, defaults to "on" (verify)',type:"on|off"},{name:"client_tls_cert",label:"client TLS cert",tooltip:"Path to client certificate for mTLS auth",type:"path",placeholder:"Enter TLS Client Cert"},{name:"client_tls_key",label:"client TLS key",tooltip:"Path to client key for mTLS auth",type:"path",placeholder:"Enter TLS Client Key"},{name:"version",label:"Version",tooltip:"Specify the version of the Kafka cluster e.g '2.2.0'",type:"string",placeholder:"Enter Kafka Version"}].concat(f)),Object(a.a)(o,c,[{name:"url",required:!0,label:"URL",tooltip:"AMQP server endpoint e.g. `amqp://myuser:mypassword@localhost:5672`",type:"url"},{name:"exchange",label:"Exchange",tooltip:"Name of the AMQP exchange",type:"string",placeholder:"Enter Exchange"},{name:"exchange_type",label:"Exchange Type",tooltip:"AMQP exchange type",type:"string",placeholder:"Enter Exchange Type"},{name:"routing_key",label:"Routing Key",tooltip:"Routing key for publishing",type:"string",placeholder:"Enter Routing Key"},{name:"mandatory",label:"Mandatory",tooltip:"Quietly ignore undelivered messages when set to 'off', default is 'on'",type:"on|off"},{name:"durable",label:"Durable",tooltip:"Persist queue across broker restarts when set to 'on', default is 'off'",type:"on|off"},{name:"no_wait",label:"No Wait",tooltip:"Non-blocking message delivery when set to 'on', default is 'off'",type:"on|off"},{name:"internal",label:"Internal",tooltip:"Set to 'on' for exchange to be not used directly by publishers, but only when bound to other exchanges",type:"on|off"},{name:"auto_deleted",label:"Auto Deleted",tooltip:"Auto delete queue when set to 'on', when there are no consumers",type:"on|off"},{name:"delivery_mode",label:"Delivery Mode",tooltip:"Set to '1' for non-persistent or '2' for persistent queue",type:"number",placeholder:"Enter Delivery Mode"}].concat(f)),Object(a.a)(o,d,[{name:"address",required:!0,label:"Address",tooltip:"Redis server's address. For example: `localhost:6379`",type:"address",placeholder:"Enter Address"},{name:"key",required:!0,label:"Key",tooltip:"Redis key to store/update events, key is auto-created",type:"string",placeholder:"Enter Key"},{name:"password",label:"Password",tooltip:"Redis server password",type:"string",placeholder:"Enter Password"}].concat(f)),Object(a.a)(o,s,[{name:"broker",required:!0,label:"Broker",tooltip:"MQTT server endpoint e.g. `tcp://localhost:1883`",type:"uri",placeholder:"Enter Brokers"},{name:"topic",required:!0,label:"Topic",tooltip:"name of the MQTT topic to publish",type:"string",placeholder:"Enter Topic"},{name:"username",label:"Username",tooltip:"MQTT username",type:"string",placeholder:"Enter Username"},{name:"password",label:"Password",tooltip:"MQTT password",type:"string",placeholder:"Enter Password"},{name:"qos",label:"QOS",tooltip:"Set the quality of service priority, defaults to '0'",type:"number",placeholder:"Enter QOS"},{name:"keep_alive_interval",label:"Keep Alive Interval",tooltip:"Keep-alive interval for MQTT connections in s,m,h,d",type:"duration",placeholder:"Enter Keep Alive Internal"},{name:"reconnect_interval",label:"Reconnect Interval",tooltip:"Reconnect interval for MQTT connections in s,m,h,d",type:"duration",placeholder:"Enter Reconnect Interval"}].concat(f)),Object(a.a)(o,u,[{name:"address",required:!0,label:"Address",tooltip:"NATS server address e.g. '0.0.0.0:4222'",type:"address",placeholder:"Enter Address"},{name:"subject",required:!0,label:"Subject",tooltip:"NATS subscription subject",type:"string",placeholder:"Enter NATS Subject"},{name:"username",label:"Username",tooltip:"NATS username",type:"string",placeholder:"Enter NATS Username"},{name:"password",label:"Password",tooltip:"NATS password",type:"string",placeholder:"Enter NATS password"},{name:"token",label:"Token",tooltip:"NATS token",type:"string",placeholder:"Enter NATS token"},{name:"tls",label:"TLS",tooltip:"Set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS Skip Verify",tooltip:'Trust server TLS without verification, defaults to "on" (verify)',type:"on|off"},{name:"ping_interval",label:"Ping Interval",tooltip:"Client ping commands interval in s,m,h,d. Disabled by default",type:"duration",placeholder:"Enter Ping Interval"},{name:"streaming",label:"Streaming",tooltip:"Set to 'on', to use streaming NATS server",type:"on|off"},{name:"streaming_async",label:"Streaming async",tooltip:"Set to 'on', to enable asynchronous publish",type:"on|off"},{name:"streaming_max_pub_acks_in_flight",label:"Streaming max publish ACKS in flight",tooltip:"Number of messages to publish without waiting for ACKs",type:"number",placeholder:"Enter Streaming in flight value"},{name:"streaming_cluster_id",label:"Streaming Cluster ID",tooltip:"Unique ID for NATS streaming cluster",type:"string",placeholder:"Enter Streaming Cluster ID"},{name:"cert_authority",label:"Cert Authority",tooltip:"Path to certificate chain of the target NATS server",type:"string",placeholder:"Enter Cert Authority"},{name:"client_cert",label:"Client Cert",tooltip:"Client cert for NATS mTLS auth",type:"string",placeholder:"Enter Client Cert"},{name:"client_key",label:"Client Key",tooltip:"Client cert key for NATS mTLS auth",type:"string",placeholder:"Enter Client Key"}].concat(f)),Object(a.a)(o,b,[{name:"url",required:!0,label:"URL",tooltip:"Elasticsearch server's address, with optional authentication info",type:"url",placeholder:"Enter URL"},{name:"index",required:!0,label:"Index",tooltip:"Elasticsearch index to store/update events, index is auto-created",type:"string",placeholder:"Enter Index"},{name:"format",required:!0,label:"Format",tooltip:"'namespace' reflects current bucket/object list and 'access' reflects a journal of object operations, defaults to 'namespace'",type:"enum",placeholder:"Enter Format"}].concat(f)),Object(a.a)(o,p,[{name:"endpoint",required:!0,label:"Endpoint",tooltip:"webhook server endpoint e.g. http://localhost:8080/minio/events",type:"url",placeholder:"Enter Endpoint"},{name:"auth_token",label:"Auth Token",tooltip:"opaque string or JWT authorization token",type:"string",placeholder:"Enter auth_token"}].concat(f)),Object(a.a)(o,h,[{name:"nsqd_address",required:!0,label:"NSQD Address",tooltip:"NSQ server address e.g. '127.0.0.1:4150'",type:"address",placeholder:"Enter nsqd_address"},{name:"topic",required:!0,label:"Topic",tooltip:"NSQ topic",type:"string",placeholder:"Enter Topic"},{name:"tls",label:"TLS",tooltip:"set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS Skip Verify",tooltip:'trust server TLS without verification, defaults to "on" (verify)',type:"on|off"}].concat(f)),o)},826:function(e,t,n){"use strict";var o=n(64);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(66)),i=n(0),r=(0,a.default)((0,i.jsx)("circle",{cx:"12",cy:"12",r:"8"}),"FiberManualRecord");t.default=r},900:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n(1),i=n(385),r=n(296),l=n(306),c=n(118),s=n(37),d=n(14),u=n(894),b=n(364),p=n(46),h=n(561),m=n(826),g=n.n(m),f=n(373),j=n(456),v=n(569),x=n(119),O=n(390),y=n(29),S=n(47),w=n(132),T=n(125),C=n(48),k=n(408),E=n(401),N=n(464),A=n(0),L={setErrorSnackMessage:y.e},_=Object(s.b)(null,L),R=Object(l.a)((function(e){return Object(r.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({},c.a),c.r),c.u),Object(c.e)(e.spacing(4))),{},{strongText:{fontWeight:700},keyName:{marginLeft:5},iconText:{lineHeight:"24px"},twHeight:{minHeight:400},lambdaContainer:{padding:"15px 0"}}))}))(_((function(e){var t=e.classes,n=e.setErrorSnackMessage,o=Object(a.useState)([]),i=Object(d.a)(o,2),r=i[0],l=i[1],c=Object(a.useState)(""),s=Object(d.a)(c,2),m=s[0],y=s[1],L=Object(a.useState)(!1),_=Object(d.a)(L,2),R=_[0],M=_[1];Object(a.useEffect)((function(){if(R){S.a.invoke("GET","/api/v1/admin/notification_endpoints").then((function(e){var t=[];null!==e.notification_endpoints&&(t=e.notification_endpoints),l(Object(v.b)(t)),M(!1)})).catch((function(e){n(e),M(!1)}))}}),[R,n]),Object(a.useEffect)((function(){M(!0)}),[]);var I=r.filter((function(e){return""===m||e.service_name.indexOf(m)>=0}));return Object(A.jsx)(a.Fragment,{children:Object(A.jsxs)(h.a,{container:!0,className:t.container,children:[Object(A.jsxs)(h.a,{item:!0,xs:12,className:t.actionsTray,children:[Object(A.jsx)(u.a,{placeholder:"Filter",className:t.searchField,id:"search-resource",label:"",onChange:function(e){y(e.target.value)},InputProps:{disableUnderline:!0,startAdornment:Object(A.jsx)(j.a,{position:"start",children:Object(A.jsx)(T.a,{})})},variant:"standard"}),Object(A.jsx)(E.a,{color:"primary","aria-label":"Refresh List",onClick:function(){M(!0)},size:"large",children:Object(A.jsx)(w.a,{})}),Object(A.jsx)(f.a,{variant:"contained",color:"primary",endIcon:Object(A.jsx)(x.c,{}),onClick:function(){C.a.push("/notification-endpoints/add")},children:"Add Notification Target"})]}),Object(A.jsx)(h.a,{item:!0,xs:12,children:Object(A.jsx)("br",{})}),R&&Object(A.jsx)(b.a,{}),!R&&Object(A.jsxs)(a.Fragment,{children:[r.length>0&&Object(A.jsxs)(a.Fragment,{children:[Object(A.jsx)(h.a,{item:!0,xs:12,children:Object(A.jsx)(O.a,{itemActions:[],columns:[{label:"Status",elementKey:"status",renderFunction:function(e){return Object(A.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(A.jsx)(g.a,{style:"Offline"===e?{color:p.a[500]}:{}}),e]})},width:150},{label:"Service",elementKey:"service_name"}],isLoading:R,records:I,entityName:"Notification Endpoints",idField:"service_name",customPaperHeight:t.twHeight})}),Object(A.jsx)(h.a,{item:!0,xs:12,children:Object(A.jsx)(k.a,{title:"Notification Endpoints",iconComponent:Object(A.jsx)(x.Z,{}),help:Object(A.jsxs)(a.Fragment,{children:["MinIO bucket notifications allow administrators to send notifications to supported external services on certain object or bucket events. MinIO supports bucket and object-level S3 events similar to the Amazon S3 Event Notifications.",Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),"You can learn more at our"," ",Object(A.jsx)("a",{href:"https://docs.min.io/minio/baremetal/monitoring/bucket-notifications/bucket-notifications.html?ref=con",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]}),0===r.length&&Object(A.jsx)(h.a,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:Object(A.jsx)(h.a,{item:!0,xs:8,children:Object(A.jsx)(k.a,{title:"Notification Targets",iconComponent:Object(A.jsx)(x.Z,{}),help:Object(A.jsxs)(a.Fragment,{children:["MinIO bucket notifications allow administrators to send notifications to supported external services on certain object or bucket events. MinIO supports bucket and object-level S3 events similar to the Amazon S3 Event Notifications.",Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),"To get started,"," ",Object(A.jsx)(N.a,{onClick:function(){C.a.push("/notification-endpoints/add")},children:"Add a Notification Target"}),"."]})})})})]})]})})}))),M=Object(s.b)((function(e){return{session:e.console.session,distributedSetup:e.system.distributedSetup}}),{});t.default=Object(l.a)((function(e){return Object(r.a)(Object(o.a)({headerLabel:{fontSize:22,fontWeight:600,color:"#000",marginTop:4}},Object(c.e)(e.spacing(4))))}))(M((function(e){e.classes,e.session,e.distributedSetup;return Object(A.jsxs)(a.Fragment,{children:[Object(A.jsx)(i.a,{label:"Notification Endpoints"}),Object(A.jsx)(R,{})]})})))}}]);
//# sourceMappingURL=32.e01e44fe.chunk.js.map