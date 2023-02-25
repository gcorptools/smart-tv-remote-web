(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[784],{9327:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/connect",function(){return n(6561)}])},9185:function(e,t,n){"use strict";n.d(t,{I:function(){return r},b:function(){return q}});let r={connect:"connect",remoteControl:"remote-control"};var s=n(5893),i=n(6346),l=n(1186),a=n(9945),o=n(6801),c=n(420),u=n(8489),d=n(8950),m=n(2129),h=n(3759),j=n(167),x=n(5961),p=n(4842),Z=n(4147),f=n(4593),y=n(9398),b=n(10),k=n(3403),P=n(4155),w=n(4313),C=n(8280),_=n(2745),g=n(4969),F=n(882),I=n(8115),T=n(3578);let{Text:v}=T.Z,E={AudioQualityMode:(0,s.jsx)(l.Z,{}),Wide:(0,s.jsx)(a.Z,{}),PictureMode:(0,s.jsx)(o.Z,{}),PicOff:(0,s.jsx)(c.Z,{}),iManual:(0,s.jsx)(u.Z,{}),GGuide:(0,s.jsx)(d.Z,{}),Next:(0,s.jsx)(m.Z,{}),Prev:(0,s.jsx)(h.Z,{}),Forward:(0,s.jsx)(j.Z,{}),Rewind:(0,s.jsx)(x.Z,{}),Play:(0,s.jsx)(p.Z,{}),Pause:(0,s.jsx)(Z.Z,{}),Stop:(0,s.jsx)(f.Z,{}),Down:(0,s.jsx)(y.Z,{}),Up:(0,s.jsx)(b.Z,{}),Home:(0,s.jsx)(k.Z,{}),Left:(0,s.jsx)(P.Z,{}),Right:(0,s.jsx)(w.Z,{}),PowerOff:(0,s.jsx)(C.Z,{}),VolumeDown:(0,s.jsx)(_.Z,{}),VolumeUp:(0,s.jsx)(g.Z,{}),ChannelDown:(0,s.jsx)(F.Z,{}),ChannelUp:(0,s.jsx)(I.Z,{})},q=Object.keys(i.O_).reduce((e,t)=>{let n=e[t],r=E[t]||(0,s.jsx)(v,{children:n.text});return{...e,[t]:{...n,icon:r}}},i.O_)},7115:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(6346),i=n(970),l=n(2644),a=n(6713),o=n(6260),c=n(7294),u=n(1876).Buffer;let d=e=>{let{onSuccess:t,layout:n,onBack:d}=e,[m]=i.Z.useForm(),h=(0,c.useRef)(null),{sendAuthKey:j}=(0,s.Jy)(),x=async e=>{let{authKey:n}=e,r=u.from(":".concat(n),"binary").toString("base64");await j(r).then(t)};return(0,r.jsxs)(i.Z,{...n,ref:h,form:m,size:"middle",name:"connect-pairing-form",onFinish:x,requiredMark:"optional",children:[(0,r.jsx)(i.Z.Item,{hasFeedback:!0,name:"authKey",label:"Pairing key",rules:[{required:!0}],help:"ie: 1234 (see notification on your TV)",children:(0,r.jsx)(l.Z,{})}),(0,r.jsxs)(a.Z.Compact,{style:{width:"100%",marginBottom:10},children:[(0,r.jsx)(o.ZP,{block:!0,htmlType:"button",onClick:d,children:"Back"}),(0,r.jsx)(o.ZP,{block:!0,type:"primary",htmlType:"submit",children:"Save"})]})]})};t.default=d},746:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(9185),i=n(6346),l=n(3578),a=n(970),o=n(2644),c=n(2898),u=n(3232),d=n(6713),m=n(6260),h=n(7294);let{Text:j}=l.Z,x=e=>{let{onSuccess:t,layout:n,tailLayout:l}=e,[x]=a.Z.useForm(),p=(0,h.useRef)(null),{newRemote:Z}=(0,i.Jy)(),f=(0,h.useMemo)(()=>Object.keys(i.Ez).sort().map(e=>({value:i.Ez[e],label:e})),[]),y=()=>{x.resetFields()},b=async e=>{let{type:n,...r}=e,i=Z(n,r,Object.values(s.b));await i.requestPairingKey().then(t)};return(0,r.jsxs)(a.Z,{...n,ref:p,form:x,size:"middle",name:"connect-params-form",onFinish:b,initialValues:{port:80},requiredMark:"optional",children:[(0,r.jsx)(a.Z.Item,{hasFeedback:!0,name:"clientId",label:"Client ID",rules:[{required:!0}],help:"ie: An unique ID",children:(0,r.jsx)(o.Z,{})}),(0,r.jsx)(a.Z.Item,{hasFeedback:!0,name:"clientName",label:"Client name",rules:[{required:!0}],help:"ie: MY-LAPTOP",children:(0,r.jsx)(o.Z,{})}),(0,r.jsx)(a.Z.Item,{hasFeedback:!0,name:"type",label:"Type",rules:[{required:!0}],help:"Choose a type from your TV",children:(0,r.jsx)(c.Z,{options:f})}),(0,r.jsx)(a.Z.Item,{hasFeedback:!0,name:"url",label:"Url",rules:[{required:!0}],help:"ie: http://192.168.1.1",children:(0,r.jsx)(o.Z,{})}),(0,r.jsx)(a.Z.Item,{hasFeedback:!0,name:"port",label:"Port",rules:[{required:!0}],help:"ie: 80",children:(0,r.jsx)(o.Z,{type:"number",step:1,min:0})}),(0,r.jsx)(a.Z.Item,{name:"debug",...l,valuePropName:"checked",children:(0,r.jsxs)(u.Z,{children:["Enable debug",(0,r.jsx)(j,{type:"secondary",children:" (Enable extra information in logs)"})]})}),(0,r.jsxs)(d.Z.Compact,{style:{width:"100%",marginBottom:10},children:[(0,r.jsx)(m.ZP,{block:!0,htmlType:"button",onClick:y,children:"Reset"}),(0,r.jsx)(m.ZP,{block:!0,type:"primary",htmlType:"submit",children:"Save"})]})]})};t.default=x},6561:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(9185),i=n(7115),l=n(746),a=n(3578),o=n(9832),c=n(1163),u=n.n(c),d=n(7294);let{Text:m}=a.Z,h={labelCol:{span:6},wrapperCol:{md:{offset:2,span:20}}},j={wrapperCol:{md:{offset:8,span:20}}},x=e=>{let{}=e,[t,n]=(0,d.useState)(0),a=[{title:"TV Parameters",description:(0,r.jsx)(m,{children:"Enter your TV settings"}),content:(0,r.jsx)(l.default,{onSuccess:()=>n(1),layout:h,tailLayout:j})},{title:"Pairing",description:(0,r.jsx)(m,{children:"Enter the authentication key"}),content:(0,r.jsx)(i.default,{onBack:()=>n(0),onSuccess:()=>u().push(s.I.remoteControl),layout:h,tailLayout:j})}],c=a.map(e=>({key:e.title,title:e.title,description:e.description}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{size:"small",current:t,items:c}),(0,r.jsx)("div",{children:a[t].content})]})};t.default=x}},function(e){e.O(0,[249,578,236,234,899,612,876,967,774,888,179],function(){return e(e.s=9327)}),_N_E=e.O()}]);