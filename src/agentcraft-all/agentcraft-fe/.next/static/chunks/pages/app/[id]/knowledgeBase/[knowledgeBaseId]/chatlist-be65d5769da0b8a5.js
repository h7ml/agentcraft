(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[846],{12840:function(e,t,r){"use strict";r.d(t,{o:function(){return b}});var n=r(67294),o=r(64761),i=r(96768);let a={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};var l=(0,r(56817).k)((e,{transitionDuration:t})=>({control:{},root:{position:"relative"},content:{display:"flex",flexDirection:"column",overflow:"hidden",transitionProperty:"max-height",transitionTimingFunction:e.transitionTimingFunction,transitionDuration:`${t}ms`,"@media (prefers-reduced-motion)":{transitionDuration:e.respectReducedMotion?"0ms":void 0}}})),s=r(64523),c=r(54685),d=Object.defineProperty,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&__defNormalProp(e,r,t[r]);if(u)for(var r of u(t))h.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__objRest=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))0>t.indexOf(n)&&h.call(e,n)&&(r[n]=e[n]);return r};let f={maxHeight:100,transitionDuration:200,initialState:!1},b=(0,n.forwardRef)((e,t)=>{let r=(0,o.N4)("Spoiler",f,e),{className:d,children:u,maxHeight:p,hideLabel:h,showLabel:b,transitionDuration:m,controlRef:g,initialState:y,classNames:x,styles:v,unstyled:j,variant:w}=r,_=__objRest(r,["className","children","maxHeight","hideLabel","showLabel","transitionDuration","controlRef","initialState","classNames","styles","unstyled","variant"]),{classes:O,cx:S}=l({transitionDuration:m},{name:"Spoiler",classNames:x,styles:v,unstyled:j,variant:w}),[P,C]=(0,n.useState)(y),[k,N]=(0,n.useState)(y),{ref:E,height:T}=function(){let[e,{width:t,height:r}]=function(){let e=(0,n.useRef)(0),t=(0,n.useRef)(null),[r,o]=(0,n.useState)(a),i=(0,n.useMemo)(()=>"undefined"!=typeof window?new ResizeObserver(r=>{let n=r[0];n&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{t.current&&o(n.contentRect)}))}):null,[]);return(0,n.useEffect)(()=>(t.current&&i.observe(t.current),()=>{i.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[t.current]),[t,r]}();return{ref:e,width:t,height:r}}(),L=P?h:b;return(0,n.useEffect)(()=>{N(p<T)},[T,p,u]),n.createElement(s.x,__spreadValues({className:S(O.root,d),ref:t},_),n.createElement("div",{className:O.content,style:{maxHeight:P?T?(0,i.h)(T):void 0:(0,i.h)(p)}},n.createElement("div",{ref:E},u)),k&&n.createElement(c.e,{component:"button",ref:g,onClick:()=>C(e=>!e),className:O.control},L))});b.displayName="@mantine/core/Spoiler"},95078:function(e,t,r){"use strict";r.d(t,{i:function(){return _}});var n=r(67294),o=r(64761),i=r(56817),a=r(96768),l=r(14258),s=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&__defNormalProp(e,r,t[r]);if(u)for(var r of u(t))h.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__spreadProps=(e,t)=>c(e,d(t)),f=(0,i.k)((e,{captionSide:t,horizontalSpacing:r,verticalSpacing:n,fontSize:o,withBorder:i,withColumnBorders:s})=>{let c=`${(0,a.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`;return{root:__spreadProps(__spreadValues({},e.fn.fontStyles()),{width:"100%",borderCollapse:"collapse",captionSide:t,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,lineHeight:e.lineHeight,border:i?c:void 0,"& caption":{marginTop:"top"===t?0:e.spacing.xs,marginBottom:"bottom"===t?0:e.spacing.xs,fontSize:e.fontSizes.sm,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]},"& thead tr th, & tfoot tr th, & tbody tr th":{textAlign:"left",fontWeight:"bold",color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],fontSize:(0,l.a)({size:o,sizes:e.fontSizes}),padding:`${(0,l.a)({size:n,sizes:e.spacing})} ${(0,l.a)({size:r,sizes:e.spacing})}`},"& thead tr th":{borderBottom:c},"& tfoot tr th, & tbody tr th":{borderTop:c},"& tbody tr td":{padding:`${(0,l.a)({size:n,sizes:e.spacing})} ${(0,l.a)({size:r,sizes:e.spacing})}`,borderTop:c,fontSize:(0,l.a)({size:o,sizes:e.fontSizes})},"& tbody tr:first-of-type td, & tbody tr:first-of-type th":{borderTop:"none"},"& thead th, & tbody td":{borderRight:s?c:"none","&:last-of-type":{borderRight:"none",borderLeft:s?c:"none"}},"& tbody tr th":{borderRight:s?c:"none"},"&[data-striped] tbody tr:nth-of-type(odd)":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]},"&[data-hover] tbody tr":e.fn.hover({backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[1]})})}}),b=r(64523),m=Object.defineProperty,g=Object.defineProperties,y=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,Table_defNormalProp=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Table_spreadValues=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&Table_defNormalProp(e,r,t[r]);if(x)for(var r of x(t))j.call(t,r)&&Table_defNormalProp(e,r,t[r]);return e},Table_spreadProps=(e,t)=>g(e,y(t)),__objRest=(e,t)=>{var r={};for(var n in e)v.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&x)for(var n of x(e))0>t.indexOf(n)&&j.call(e,n)&&(r[n]=e[n]);return r};let w={striped:!1,highlightOnHover:!1,captionSide:"top",horizontalSpacing:"xs",fontSize:"sm",verticalSpacing:7,withBorder:!1,withColumnBorders:!1},_=(0,n.forwardRef)((e,t)=>{let r=(0,o.N4)("Table",w,e),{className:i,children:a,striped:l,highlightOnHover:s,captionSide:c,horizontalSpacing:d,verticalSpacing:u,fontSize:p,unstyled:h,withBorder:m,withColumnBorders:g,variant:y}=r,x=__objRest(r,["className","children","striped","highlightOnHover","captionSide","horizontalSpacing","verticalSpacing","fontSize","unstyled","withBorder","withColumnBorders","variant"]),{classes:v,cx:j}=f({captionSide:c,verticalSpacing:u,horizontalSpacing:d,fontSize:p,withBorder:m,withColumnBorders:g},{unstyled:h,name:"Table",variant:y});return n.createElement(b.x,Table_spreadProps(Table_spreadValues({},x),{component:"table",ref:t,className:j(v.root,i),"data-striped":l||void 0,"data-hover":s||void 0}),a)});_.displayName="@mantine/core/Table"},24888:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("refresh","IconRefresh",[["path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4",key:"svg-0"}],["path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",key:"svg-1"}]])},28792:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/[id]/knowledgeBase/[knowledgeBaseId]/chatlist",function(){return r(67332)}])},918:function(e,t,r){"use strict";r.d(t,{Z:function(){return CopyToClipboard}});var n=r(85893),o=r(67294),i=r(55652),a=r(69876),l=r(95117),s=r(49834),c=r(88198),d=r(93625),u=r(90589),p=r.n(u);function CopyToClipboard(e){let{value:t,content:r,truncate:u,width:h="auto"}=e,f=function(){let{timeout:e=2e3}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,r]=(0,o.useState)(null),[n,i]=(0,o.useState)(!1),[a,l]=(0,o.useState)(null),handleCopyResult=t=>{clearTimeout(a),l(setTimeout(()=>i(!1),e)),i(t)};return{copy:e=>{if("clipboard"in navigator)navigator.clipboard.writeText(e).then(()=>handleCopyResult(!0)).catch(e=>r(e));else{let t=document.createElement("textarea");t.value=e,t.style.position="absolute",t.style.left="-999999px",document.body.prepend(t),t.select();try{document.execCommand("copy")}catch(e){console.error(e)}finally{t.remove(),handleCopyResult(!0)}}},reset:()=>{i(!1),r(null),clearTimeout(a)},error:t,copied:n}}({timeout:500});return(0,n.jsx)(i.u,{label:f.copied?"已复制":"复制",withArrow:!0,position:"right",children:(0,n.jsxs)(a.k,{onClick:()=>f.copy(t),mih:50,style:{width:h},gap:"xs",justify:"flex-start",align:"center",direction:"row",wrap:"nowrap",children:[r?(0,n.jsx)(l.x,{truncate:u,className:p()["copy-to-clipboard-content"],children:r}):null,(0,n.jsx)(s.A,{color:f.copied?"teal":"gray",children:f.copied?(0,n.jsx)(c.Z,{size:"1rem"}):(0,n.jsx)(d.Z,{size:"1rem"})})]})})}},2394:function(e,t,r){"use strict";r.d(t,{Z:function(){return FeatureDescription}});var n=r(85893),o=r(92716),i=r(95117),a=r(64523),l=r(69876),s=r(19236),c=r(91759);function InfoDetail(e){let{detail:t,title:r}=e,[a,{open:l,close:s}]=(0,c.q)(!1);return(0,n.jsx)(n.Fragment,{children:t?(0,n.jsxs)("div",{children:[(0,n.jsx)(o.d,{opened:a,onClose:s,title:r,children:(0,n.jsx)(i.x,{children:t})}),(0,n.jsx)(i.x,{onClick:()=>l(),children:"信息"})]}):null})}function FeatureDescription(e){let{title:t,description:r,detail:o,mt:c,mb:d}=e;return(0,n.jsxs)(a.x,{mt:c||24,mb:d||24,children:[(0,n.jsxs)(l.k,{mih:20,gap:"md",justify:"flex-start",align:"flex-start",direction:"row",wrap:"wrap",children:[(0,n.jsx)(s.D,{order:2,children:t}),(0,n.jsx)(InfoDetail,{title:t,detail:o})]}),r?(0,n.jsx)(i.x,{lineClamp:4,children:r}):null]})}},67332:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return N},default:function(){return IndexPage}});var n=r(85893),o=r(67294),i=r(12840),a=r(64523),l=r(3594),s=r(64761),c=r(97818),d=r(83143),u=Object.defineProperty,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&__defNormalProp(e,r,t[r]);if(p)for(var r of p(t))f.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__objRest=(e,t)=>{var r={};for(var n in e)h.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))0>t.indexOf(n)&&f.call(e,n)&&(r[n]=e[n]);return r};let b={position:{bottom:0,right:0},zIndex:(0,l.w)("modal"),withinPortal:!0},m=(0,o.forwardRef)((e,t)=>{let r=(0,s.N4)("Affix",b,e),{target:n,position:i,zIndex:l,sx:u,withinPortal:p}=r,h=__objRest(r,["target","position","zIndex","sx","withinPortal"]);return o.createElement(d.q,{withinPortal:p,target:n},o.createElement(a.x,__spreadValues({sx:[__spreadValues({position:"fixed",zIndex:l},i),...(0,c.R)(u)],ref:t},h)))});m.displayName="@mantine/core/Affix";var g=r(96768),y=r(67841),x=r(49737),v=r(95078),j=r(54685),w=r(93284),_=r(24888),O=r(47876),S=r(23062),P=r(25288),C=r(918),k=r(2394);function List(e){let{knowledgeBaseId:t}=e,r=(0,O.aK)().chatList,l=(0,O.aK)().loading,s=(0,O.aK)().setLoading,getKnowledgeBaseChatList=async e=>{s(!0),await (0,O.Ag)(e),s(!1)},c=r.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.id}),(0,n.jsx)("td",{style:{width:120},children:e.question?(0,n.jsx)(C.Z,{value:e.question,content:(0,n.jsx)(i.o,{maxHeight:80,showLabel:"显示更多",hideLabel:"隐藏",children:e.question}),width:120}):null}),(0,n.jsx)("td",{children:e.answer?(0,n.jsx)(C.Z,{value:(0,S.pI)(e.answer),content:(0,n.jsx)(i.o,{maxHeight:180,showLabel:"显示更多",hideLabel:"隐藏",children:(0,S.pI)(e.answer)}),width:300}):null}),(0,n.jsx)("td",{children:e.prompt?(0,n.jsx)(C.Z,{value:e.prompt,content:(0,n.jsx)(i.o,{maxHeight:180,showLabel:"显示更多",hideLabel:"隐藏",children:e.prompt}),width:300}):null}),(0,n.jsx)("td",{children:e.ip}),(0,n.jsx)("td",{children:e.source?(0,n.jsx)(C.Z,{value:JSON.stringify((0,S.pI)(e.source)),content:(0,n.jsx)(i.o,{maxHeight:180,showLabel:"显示更多",hideLabel:"隐藏",children:JSON.stringify((0,S.pI)(e.source))}),width:300}):null}),(0,n.jsx)("td",{style:{width:80},children:e.model_name}),(0,n.jsx)("td",{style:{width:80},children:(0,P.o0)(e.created)})]},e.id));return(0,o.useEffect)(()=>{getKnowledgeBaseChatList(t)},[t]),(0,n.jsxs)(a.x,{pos:"relative",children:[(0,n.jsx)(m,{position:{top:(0,g.h)(120),right:(0,g.h)(20)},children:(0,n.jsx)(y.z,{leftIcon:(0,n.jsx)(_.Z,{}),onClick:()=>{getKnowledgeBaseChatList(t)},children:"刷新"})}),(0,n.jsx)(x.f,{visible:l,overlayOpacity:.3}),(0,n.jsxs)(v.i,{striped:!0,withBorder:!0,withColumnBorders:!0,mt:12,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"编号"}),(0,n.jsx)("th",{children:"问题"}),(0,n.jsx)("th",{children:"答案"}),(0,n.jsx)("th",{children:"完整提示词"}),(0,n.jsx)("th",{children:"访问IP"}),(0,n.jsx)("th",{children:"智能体结果"}),(0,n.jsx)("th",{children:"使用模型"}),(0,n.jsx)("th",{children:"问答创建时间"})]})}),(0,n.jsx)("tbody",{children:c})]})]})}function ChatListPage(e){let{appId:t,knowledgeBaseId:r}=e,o=[{title:"应用列表",href:"/app"},{title:"领域知识智能体",href:"/app/".concat(t,"/knowledgeBase")},{title:"问答记录",href:"/app/".concat(t,"/knowledgeBase/").concat(r,"/chatlist")}].map((e,t)=>(0,n.jsx)(j.e,{href:e.href,children:e.title},t));return(0,n.jsxs)(a.x,{pos:"relative",children:[(0,n.jsx)(w.O,{children:o}),(0,n.jsx)(k.Z,{title:"问答记录",description:"您可以在此查看该智能体的问答历史记录"}),(0,n.jsx)(List,{knowledgeBaseId:r})]})}var N=!0;function IndexPage(e){let{appId:t,knowledgeBaseId:r}=e;return(0,n.jsx)(ChatListPage,{appId:t,knowledgeBaseId:r})}},47876:function(e,t,r){"use strict";r.d(t,{dr:function(){return chatStream},Ag:function(){return getChatList},aK:function(){return h}});var n=r(33250),o={Error:{Unauthorized:"无权限"}};let i={cn:o},a=Object.keys(i),l=i[function(){let e=function(e){try{return localStorage.getItem(e)}catch(e){return null}}("lang");if(a.includes(null!=e?e:""))return e;let t=function(){try{return navigator.language.toLowerCase()}catch(e){return"cn"}}();for(let e of a)if(t.includes(e))return e;return"cn"}()];!function merge(e,t){Object.keys(t).forEach(function(r){if(t[r]&&"object"==typeof t[r]){merge(e[r]=e[r]||{},t[r]);return}e[r]=t[r]})}(o,l);var s=r(64529),c=r(86105),d=r(23062),u=r(782),p=r(2393);let h=(0,s.Ue)()((0,u.mW)(e=>({chatList:[],open:!1,loading:!1,isEdit:!1,currentChatItem:{},updateCurrentChatItem:t=>e(e=>({currentChatItem:t})),setEditStatus:t=>e(e=>({isEdit:t})),setLoading:t=>e(e=>({loading:t})),setOpen:t=>e(e=>({open:t})),updateChatList:t=>e(e=>({chatList:t}))})));async function getChatList(e){let t=h.getState(),r=t.updateChatList,n=await (0,p.W)("/api/chat/chatlist?id=".concat(e)),o=n.data;o&&r(o)}function chatStream(e,t){var r;let i=new AbortController;null===(r=e.onController)||void 0===r||r.call(e,i);let a={method:"POST",headers:{"Content-Type":"application/json"},signal:i.signal,body:JSON.stringify(Object.assign({stream:!0},e,{token:t}))},l=setTimeout(()=>i.abort(),c.tb),s="",u=!1,finish=()=>{u||(e.onFinish(s),u=!0)};i.signal.onabort=finish,(0,n.L)("/api/chat",{...a,async onopen(e){var t;clearTimeout(l);let r=e.headers.get("content-type");if(console.log("AgentCraft request response content type: ",r),null==r?void 0:r.startsWith("text/plain"))return s=await e.clone().text(),finish();if(!e.ok||!(null===(t=e.headers.get("content-type"))||void 0===t?void 0:t.startsWith("application/octet-stream"))||200!==e.status){let t=[s],r=await e.clone().text();try{let t=await e.clone().json();r=(0,d.Bs)(t)}catch(e){console.log(e)}return 401===e.status&&t.push(o.Error.Unauthorized),r&&t.push(r),s=t.join("\n\n"),finish()}},onmessage(t){if("[DONE]"===t.data||u)return finish();let r=t.data;try{let t=JSON.parse(r),o=t.choices[0].delta.content;if(o){var n;s+=o,null===(n=e.onUpdate)||void 0===n||n.call(e,s,o)}}catch(e){console.error("[Request] parse error",r,t)}},onclose(){finish()},onerror(t){var r;throw null===(r=e.onError)||void 0===r||r.call(e,t),t},openWhenHidden:!0})}},23062:function(e,t,r){"use strict";function unicodeDecode(e){let t=e;try{t=JSON.parse(e)}catch(e){console.error("Invalid URI sequence",e)}return t}function prettyObject(e){let t=e;return("string"!=typeof e&&(e=JSON.stringify(e,null,"  ")),"{}"===e)?t.toString():e.startsWith("```json")?e:["```json",e,"```"].join("\n")}r.d(t,{Bs:function(){return prettyObject},pI:function(){return unicodeDecode}})},90589:function(e){e.exports={"copy-to-clipboard-content":"CopyToClipboard_copy-to-clipboard-content__cxI0e"}},33250:function(e,t,r){"use strict";async function getBytes(e,t){let r;let n=e.getReader();for(;!(r=await n.read()).done;)t(r.value)}function newMessage(){return{data:"",event:"",id:"",retry:void 0}}r.d(t,{L:function(){return fetchEventSource}});var __rest=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};let n="text/event-stream",o="last-event-id";function fetchEventSource(e,t){var{signal:r,headers:i,onopen:a,onmessage:l,onclose:s,onerror:c,openWhenHidden:d,fetch:u}=t,p=__rest(t,["signal","headers","onopen","onmessage","onclose","onerror","openWhenHidden","fetch"]);return new Promise((t,h)=>{let f;let b=Object.assign({},i);function onVisibilityChange(){f.abort(),document.hidden||create()}b.accept||(b.accept=n),"undefined"==typeof document||d||document.addEventListener("visibilitychange",onVisibilityChange);let m=1e3,g=0;function dispose(){"undefined"==typeof document||d||document.removeEventListener("visibilitychange",onVisibilityChange),clearTimeout(g),f.abort()}null==r||r.addEventListener("abort",()=>{dispose(),t()});let y=null!=u?u:fetch,x=null!=a?a:defaultOnOpen;async function create(){var r,n;f=new AbortController;try{let r,i,a,c;let d=await y(e,Object.assign(Object.assign({},p),{headers:b,signal:f.signal}));await x(d),await getBytes(d.body,(n=function(e,t,r){let n=newMessage(),o=new TextDecoder;return function(i,a){if(0===i.length)null==e||e(n),n=newMessage();else if(a>0){let e=o.decode(i.subarray(0,a)),l=a+(32===i[a+1]?2:1),s=o.decode(i.subarray(l));switch(e){case"data":n.data=n.data?n.data+"\n"+s:s;break;case"event":n.event=s;break;case"id":null==t||t(n.id=s);break;case"retry":let c=parseInt(s,10);isNaN(c)||null==r||r(n.retry=c)}}}}(l,e=>{e?b[o]=e:delete b[o]},e=>{m=e}),c=!1,function(e){void 0===r?(r=e,i=0,a=-1):r=function(e,t){let r=new Uint8Array(e.length+t.length);return r.set(e),r.set(t,e.length),r}(r,e);let t=r.length,o=0;for(;i<t;){c&&(10===r[i]&&(o=++i),c=!1);let e=-1;for(;i<t&&-1===e;++i)switch(r[i]){case 58:-1===a&&(a=i-o);break;case 13:c=!0;case 10:e=i}if(-1===e)break;n(r.subarray(o,e),a),o=i,a=-1}o===t?r=void 0:0!==o&&(r=r.subarray(o),i-=o)})),null==s||s(),dispose(),t()}catch(e){if(!f.signal.aborted)try{let t=null!==(r=null==c?void 0:c(e))&&void 0!==r?r:m;clearTimeout(g),g=setTimeout(create,t)}catch(e){dispose(),h(e)}}}create()})}function defaultOnOpen(e){let t=e.headers.get("content-type");if(!(null==t?void 0:t.startsWith(n)))throw Error(`Expected content-type to be ${n}, Actual: ${t}`)}}},function(e){e.O(0,[871,322,774,888,179],function(){return e(e.s=28792)}),_N_E=e.O()}]);