(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[159],{2820:function(e,t,r){"use strict";var n=r(4184),i=r.n(n),o=r(7294),l=r(3124),a=r(7193),s=r(4443),d=r(9134),c=r(6999),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function f(e,t){let[r,n]=o.useState("string"==typeof e?e:""),i=()=>{if("string"==typeof e&&n(e),"object"==typeof e)for(let r=0;r<s.c.length;r++){let i=s.c[r];if(!t[i])continue;let o=e[i];if(void 0!==o){n(o);return}}};return o.useEffect(()=>{i()},[JSON.stringify(e),t]),r}let x=o.forwardRef((e,t)=>{let{prefixCls:r,justify:n,align:x,className:h,style:p,children:g,gutter:m=0,wrap:j}=e,b=u(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:y,direction:w}=o.useContext(l.E_),[Z,v]=o.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[$,O]=o.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),S=f(x,$),k=f(n,$),E=(0,a.Z)(),z=o.useRef(m),P=(0,s.Z)();o.useEffect(()=>{let e=P.subscribe(e=>{O(e);let t=z.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&v(e)});return()=>P.unsubscribe(e)},[]);let C=y("row",r),[M,_]=(0,c.V)(C),A=(()=>{let e=[void 0,void 0],t=Array.isArray(m)?m:[m,void 0];return t.forEach((t,r)=>{if("object"==typeof t)for(let n=0;n<s.c.length;n++){let i=s.c[n];if(Z[i]&&void 0!==t[i]){e[r]=t[i];break}}else e[r]=t}),e})(),N=i()(C,{[`${C}-no-wrap`]:!1===j,[`${C}-${k}`]:k,[`${C}-${S}`]:S,[`${C}-rtl`]:"rtl"===w},h,_),B={},G=null!=A[0]&&A[0]>0?-(A[0]/2):void 0,I=null!=A[1]&&A[1]>0?-(A[1]/2):void 0;G&&(B.marginLeft=G,B.marginRight=G),E?[,B.rowGap]=A:I&&(B.marginTop=I,B.marginBottom=I);let[T,R]=A,W=o.useMemo(()=>({gutter:[T,R],wrap:j,supportFlexGap:E}),[T,R,j,E]);return M(o.createElement(d.Z.Provider,{value:W},o.createElement("div",Object.assign({},b,{className:N,style:Object.assign(Object.assign({},B),p),ref:t}),g)))});t.Z=x},1230:function(e,t,r){"use strict";var n=r(2820);t.Z=n.Z},3350:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/remote-control",function(){return r(9605)}])},9185:function(e,t,r){"use strict";r.d(t,{I:function(){return n},b:function(){return M}});let n={connect:"connect",remoteControl:"remote-control"};var i=r(5893),o=r(6346),l=r(1186),a=r(9945),s=r(6801),d=r(420),c=r(8489),u=r(8950),f=r(2129),x=r(3759),h=r(167),p=r(5961),g=r(4842),m=r(4147),j=r(4593),b=r(9398),y=r(10),w=r(3403),Z=r(4155),v=r(4313),$=r(8280),O=r(2745),S=r(4969),k=r(882),E=r(8115),z=r(3578);let{Text:P}=z.Z,C={AudioQualityMode:(0,i.jsx)(l.Z,{}),Wide:(0,i.jsx)(a.Z,{}),PictureMode:(0,i.jsx)(s.Z,{}),PicOff:(0,i.jsx)(d.Z,{}),iManual:(0,i.jsx)(c.Z,{}),GGuide:(0,i.jsx)(u.Z,{}),Next:(0,i.jsx)(f.Z,{}),Prev:(0,i.jsx)(x.Z,{}),Forward:(0,i.jsx)(h.Z,{}),Rewind:(0,i.jsx)(p.Z,{}),Play:(0,i.jsx)(g.Z,{}),Pause:(0,i.jsx)(m.Z,{}),Stop:(0,i.jsx)(j.Z,{}),Down:(0,i.jsx)(b.Z,{}),Up:(0,i.jsx)(y.Z,{}),Home:(0,i.jsx)(w.Z,{}),Left:(0,i.jsx)(Z.Z,{}),Right:(0,i.jsx)(v.Z,{}),PowerOff:(0,i.jsx)($.Z,{}),VolumeDown:(0,i.jsx)(O.Z,{}),VolumeUp:(0,i.jsx)(S.Z,{}),ChannelDown:(0,i.jsx)(k.Z,{}),ChannelUp:(0,i.jsx)(E.Z,{})},M=Object.keys(o.O_).reduce((e,t)=>{let r=e[t],n=C[t]||(0,i.jsx)(P,{children:r.text});return{...e,[t]:{...r,icon:n}}},o.O_)},9605:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(5893),i=r(9185),o=r(4773),l=r(6346),a=r(3578),s=r(6260),d=r(3299),c=r(1230),u=r(4184),f=r.n(u),x=r(7294),h=r(3124),p=r(7968),g=r(5503),m=r(4747);let j=e=>{let{componentCls:t,sizePaddingEdgeHorizontal:r,colorSplit:n,lineWidth:i}=e;return{[t]:Object.assign(Object.assign({},(0,m.Wf)(e)),{borderBlockStart:`${i}px solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${t}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStart:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:r}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:r}}})}};var b=(0,p.Z)("Divider",e=>{let t=(0,g.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[j(t)]},{sizePaddingEdgeHorizontal:0}),y=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};let w=e=>{let{getPrefixCls:t,direction:r}=x.useContext(h.E_),{prefixCls:n,type:i="horizontal",orientation:o="center",orientationMargin:l,className:a,rootClassName:s,children:d,dashed:c,plain:u}=e,p=y(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),g=t("divider",n),[m,j]=b(g),w=o.length>0?`-${o}`:o,Z=!!d,v="left"===o&&null!=l,$="right"===o&&null!=l,O=f()(g,j,`${g}-${i}`,{[`${g}-with-text`]:Z,[`${g}-with-text${w}`]:Z,[`${g}-dashed`]:!!c,[`${g}-plain`]:!!u,[`${g}-rtl`]:"rtl"===r,[`${g}-no-default-orientation-margin-left`]:v,[`${g}-no-default-orientation-margin-right`]:$},a,s),S=Object.assign(Object.assign({},v&&{marginLeft:l}),$&&{marginRight:l});return m(x.createElement("div",Object.assign({className:O},p,{role:"separator"}),d&&"vertical"!==i&&x.createElement("span",{className:`${g}-inner-text`,style:S},d)))};var Z=r(1163),v=r.n(Z);let{Title:$}=a.Z,O=()=>{let{type:e,remoteControl:t,actionsMap:r}=(0,l.ER)(),{rows:a,columns:u}=(0,x.useMemo)(()=>{let e=0,t=Object.keys(r).map(e=>+e).sort((e,t)=>e-t).reduce((t,n)=>{e=+n;let i=Object.keys(r[e]).map(e=>+e);return t.push(Math.max(...i)),t},[]),n=Array.from(Array(e+1));return{rows:n,columns:Math.max(...t)+1}},[r]),f=()=>(0,n.jsx)(s.ZP,{type:"primary",onClick:()=>v().push(i.I.connect),children:"Back to configurations"});return t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{justify:"space-around",align:"middle",children:(0,n.jsx)($,{level:3,children:e.toUpperCase()})}),(0,n.jsx)(c.Z,{justify:"space-around",align:"middle",children:(0,n.jsx)(f,{})}),(0,n.jsx)(w,{}),a.map((e,t)=>(0,n.jsx)(o.default,{index:t,columns:u,value:r[t]||{}},"row-".concat(t)))]}):(0,n.jsx)(d.Z,{children:(0,n.jsx)(f,{})})};var S=O},9959:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(6346),o=r(5302),l=r(3578),a=r(6260),s=r(5335),d=r(8598),c=r(5746),u=r(7294);let{useBreakpoint:f}=o.ZP,{Text:x}=l.Z,h=e=>{let{index:t,value:r}=e,{remoteControl:o}=(0,i.ER)(),l=f(),h=(0,u.useMemo)(()=>r||[],[r]),{buttonStyle:p,dropdownStyle:g,colSpan:m}=(0,u.useMemo)(()=>l.lg?{colSpan:3,buttonStyle:{width:100},dropdownStyle:{width:50}}:{colSpan:4,buttonStyle:{width:50,fontSize:"5pt"},dropdownStyle:{width:30,fontSize:"8pt"}},[l.lg]),j=e=>{null==o||o.sendAction(e)},b=()=>{if(!h.length)return(0,n.jsx)(a.ZP,{style:p,disabled:!0});let[e,...t]=h;if(!t.length||!l.lg)return(0,n.jsx)(s.Z,{title:e.label,children:(0,n.jsx)(a.ZP,{style:p,onClick:()=>j(e),children:e.icon})});let r=t.map(e=>({label:(0,n.jsx)(s.Z,{title:e.label,children:(0,n.jsx)(x,{style:p,children:e.icon})}),key:e.label,onClick:()=>j(e)}));return(0,n.jsx)(d.Z.Button,{menu:{items:r},onClick:()=>j(e),children:(0,n.jsx)(s.Z,{title:e.label,children:(0,n.jsx)(x,{style:g,children:e.icon})})})};return(0,n.jsx)(c.Z,{span:m,children:(0,n.jsx)(b,{})})};t.default=h},4773:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(9959),o=r(1230),l=r(7294);let a=e=>{let{index:t,columns:r,value:a}=e,s=(0,l.useMemo)(()=>a||{},[a]);return(0,n.jsx)(o.Z,{style:{marginBottom:5},justify:"center",align:"middle",children:Array.from(Array(r)).map((e,r)=>(0,n.jsx)(i.default,{value:s[r]||[],index:r},"row-".concat(t,"-column-").concat(r)))})};t.default=a},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[249,578,236,234,589,774,888,179],function(){return e(e.s=3350)}),_N_E=e.O()}]);