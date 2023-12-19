(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36],{93284:function(e,r,t){"use strict";t.d(r,{O:function(){return u}});var o=t(67294),a=t(64761),l=t(24241),n=(0,t(56817).k)(e=>({root:{display:"flex",alignItems:"center"},breadcrumb:{lineHeight:1,whiteSpace:"nowrap",WebkitTapHighlightColor:"transparent"},separator:{marginLeft:e.spacing.xs,marginRight:e.spacing.xs,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[7],lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center"}})),i=t(95117),s=t(64523),c=Object.defineProperty,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))h.call(r,t)&&__defNormalProp(e,t,r[t]);if(d)for(var t of d(r))p.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__objRest=(e,r)=>{var t={};for(var o in e)h.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&d)for(var o of d(e))0>r.indexOf(o)&&p.call(e,o)&&(t[o]=e[o]);return t};let f={separator:"/"},u=(0,o.forwardRef)((e,r)=>{let t=(0,a.N4)("Breadcrumbs",f,e),{className:c,children:d,separator:h,classNames:p,styles:u,unstyled:m,variant:g}=t,b=__objRest(t,["className","children","separator","classNames","styles","unstyled","variant"]),{classes:y,cx:x}=n(null,{classNames:p,styles:u,unstyled:m,name:"Breadcrumbs",variant:g}),j=o.Children.toArray(d).reduce((e,r,t,a)=>{var n;let s=(0,l.k)(r)?o.cloneElement(r,{className:x(y.breadcrumb,null==(n=r.props)?void 0:n.className),key:t}):o.createElement("div",{className:y.breadcrumb,key:t},r);return e.push(s),t!==a.length-1&&e.push(o.createElement(i.x,{size:"sm",className:y.separator,key:`separator-${t}`},h)),e},[]);return o.createElement(s.x,__spreadValues({className:x(y.root,c),ref:r},b),j)});u.displayName="@mantine/core/Breadcrumbs"},95033:function(e,r,t){"use strict";t.d(r,{y:function(){return _}});var o=t(67294),a=t(64761),l=t(48427),n=t(95117),i=(0,t(56817).k)((e,{color:r})=>({root:{backgroundColor:e.fn.themeColor(r,"dark"===e.colorScheme?5:2),color:"dark"===e.colorScheme?e.colors.dark[9]:"inherit"}})),s=t(64523),c=Object.defineProperty,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))h.call(r,t)&&__defNormalProp(e,t,r[t]);if(d)for(var t of d(r))p.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__objRest=(e,r)=>{var t={};for(var o in e)h.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&d)for(var o of d(e))0>r.indexOf(o)&&p.call(e,o)&&(t[o]=e[o]);return t};let f={color:"yellow"},u=(0,o.forwardRef)((e,r)=>{let t=(0,a.N4)("Mark",f,e),{color:l,className:n,unstyled:c,variant:d}=t,h=__objRest(t,["color","className","unstyled","variant"]),{classes:p,cx:u}=i({color:l},{unstyled:c,name:"Mark",variant:d});return o.createElement(s.x,__spreadValues({component:"mark",ref:r,className:u(p.root,n)},h))});function escapeRegex(e){return e.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&")}u.displayName="@mantine/core/Mark";var m=Object.defineProperty,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,Highlight_defNormalProp=(e,r,t)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Highlight_spreadValues=(e,r)=>{for(var t in r||(r={}))b.call(r,t)&&Highlight_defNormalProp(e,t,r[t]);if(g)for(var t of g(r))y.call(r,t)&&Highlight_defNormalProp(e,t,r[t]);return e},Highlight_objRest=(e,r)=>{var t={};for(var o in e)b.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&g)for(var o of g(e))0>r.indexOf(o)&&y.call(e,o)&&(t[o]=e[o]);return t};let x={highlightColor:"yellow"},j=(0,o.forwardRef)((e,r)=>{let t=(0,a.N4)("Highlight",x,e),{children:l,highlight:i,highlightColor:s,highlightStyles:c,unstyled:d}=t,h=Highlight_objRest(t,["children","highlight","highlightColor","highlightStyles","unstyled"]),p=function(e,r){if(null==r)return[{chunk:e,highlighted:!1}];let t=Array.isArray(r)?r.map(escapeRegex):escapeRegex(r),o=Array.isArray(t)?t.filter(e=>e.trim().length>0).length>0:""!==t.trim();if(!o)return[{chunk:e,highlighted:!1}];let a="string"==typeof t?t.trim():t.filter(e=>0!==e.trim().length).map(e=>e.trim()).join("|"),l=RegExp(`(${a})`,"gi"),n=e.split(l).map(e=>({chunk:e,highlighted:l.test(e)})).filter(({chunk:e})=>e);return n}(l,i);return o.createElement(n.x,Highlight_spreadValues({unstyled:d,ref:r,__staticSelector:"Highlight"},h),p.map(({chunk:e,highlighted:r},t)=>r?o.createElement(u,{unstyled:d,key:t,color:s,sx:c,"data-highlight":e},e):o.createElement("span",{key:t},e)))});j.displayName="@mantine/core/Highlight";let _=(0,l.F)(j)},95078:function(e,r,t){"use strict";t.d(r,{i:function(){return k}});var o=t(67294),a=t(64761),l=t(56817),n=t(96768),i=t(14258),s=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&__defNormalProp(e,t,r[t]);if(h)for(var t of h(r))f.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>c(e,d(r)),u=(0,l.k)((e,{captionSide:r,horizontalSpacing:t,verticalSpacing:o,fontSize:a,withBorder:l,withColumnBorders:s})=>{let c=`${(0,n.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`;return{root:__spreadProps(__spreadValues({},e.fn.fontStyles()),{width:"100%",borderCollapse:"collapse",captionSide:r,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,lineHeight:e.lineHeight,border:l?c:void 0,"& caption":{marginTop:"top"===r?0:e.spacing.xs,marginBottom:"bottom"===r?0:e.spacing.xs,fontSize:e.fontSizes.sm,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]},"& thead tr th, & tfoot tr th, & tbody tr th":{textAlign:"left",fontWeight:"bold",color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],fontSize:(0,i.a)({size:a,sizes:e.fontSizes}),padding:`${(0,i.a)({size:o,sizes:e.spacing})} ${(0,i.a)({size:t,sizes:e.spacing})}`},"& thead tr th":{borderBottom:c},"& tfoot tr th, & tbody tr th":{borderTop:c},"& tbody tr td":{padding:`${(0,i.a)({size:o,sizes:e.spacing})} ${(0,i.a)({size:t,sizes:e.spacing})}`,borderTop:c,fontSize:(0,i.a)({size:a,sizes:e.fontSizes})},"& tbody tr:first-of-type td, & tbody tr:first-of-type th":{borderTop:"none"},"& thead th, & tbody td":{borderRight:s?c:"none","&:last-of-type":{borderRight:"none",borderLeft:s?c:"none"}},"& tbody tr th":{borderRight:s?c:"none"},"&[data-striped] tbody tr:nth-of-type(odd)":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]},"&[data-hover] tbody tr":e.fn.hover({backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[1]})})}}),m=t(64523),g=Object.defineProperty,b=Object.defineProperties,y=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,Table_defNormalProp=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Table_spreadValues=(e,r)=>{for(var t in r||(r={}))j.call(r,t)&&Table_defNormalProp(e,t,r[t]);if(x)for(var t of x(r))_.call(r,t)&&Table_defNormalProp(e,t,r[t]);return e},Table_spreadProps=(e,r)=>b(e,y(r)),__objRest=(e,r)=>{var t={};for(var o in e)j.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&x)for(var o of x(e))0>r.indexOf(o)&&_.call(e,o)&&(t[o]=e[o]);return t};let v={striped:!1,highlightOnHover:!1,captionSide:"top",horizontalSpacing:"xs",fontSize:"sm",verticalSpacing:7,withBorder:!1,withColumnBorders:!1},k=(0,o.forwardRef)((e,r)=>{let t=(0,a.N4)("Table",v,e),{className:l,children:n,striped:i,highlightOnHover:s,captionSide:c,horizontalSpacing:d,verticalSpacing:h,fontSize:p,unstyled:f,withBorder:g,withColumnBorders:b,variant:y}=t,x=__objRest(t,["className","children","striped","highlightOnHover","captionSide","horizontalSpacing","verticalSpacing","fontSize","unstyled","withBorder","withColumnBorders","variant"]),{classes:j,cx:_}=u({captionSide:c,verticalSpacing:h,horizontalSpacing:d,fontSize:p,withBorder:g,withColumnBorders:b},{unstyled:f,name:"Table",variant:y});return o.createElement(m.x,Table_spreadProps(Table_spreadValues({},x),{component:"table",ref:r,className:_(j.root,l),"data-striped":i||void 0,"data-hover":s||void 0}),n)});k.displayName="@mantine/core/Table"},75782:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundationModel",function(){return t(11154)}])},2394:function(e,r,t){"use strict";t.d(r,{Z:function(){return FeatureDescription}});var o=t(85893),a=t(92716),l=t(95117),n=t(64523),i=t(69876),s=t(19236),c=t(91759);function InfoDetail(e){let{detail:r,title:t}=e,[n,{open:i,close:s}]=(0,c.q)(!1);return(0,o.jsx)(o.Fragment,{children:r?(0,o.jsxs)("div",{children:[(0,o.jsx)(a.d,{opened:n,onClose:s,title:t,children:(0,o.jsx)(l.x,{children:r})}),(0,o.jsx)(l.x,{onClick:()=>i(),children:"信息"})]}):null})}function FeatureDescription(e){let{title:r,description:t,detail:a,mt:c,mb:d}=e;return(0,o.jsxs)(n.x,{mt:c||24,mb:d||24,children:[(0,o.jsxs)(i.k,{mih:20,gap:"md",justify:"flex-start",align:"flex-start",direction:"row",wrap:"wrap",children:[(0,o.jsx)(s.D,{order:2,children:r}),(0,o.jsx)(InfoDetail,{title:r,detail:a})]}),t?(0,o.jsx)(l.x,{lineClamp:4,children:t}):null]})}},11154:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return IndexPage}});var o=t(85893),a=t(67294),l=t(41664),n=t.n(l),i=t(11163),s=t(95117),c=t(95033),d=t(67841),h=t(64523),p=t(49737),f=t(95078),u=t(54685),m=t(93284),g=t(69876),b=t(73344),y=t(78159),x=t(2394),j=t(96384),_=t(25288);function List(){let e=(0,y.bQ)().foundationModelList,r=(0,y.bQ)().setLoading,t=(0,y.bQ)().loading,removeFoundationModel=e=>{let t="确定删除".concat(e,",该资源会被彻底清除，请仔细检查相关的依赖项?");b.qk.openConfirmModal({title:"删除基础模型服务",centered:!0,children:(0,o.jsx)(s.x,{size:"sm",children:(0,o.jsx)(c.y,{highlight:e,children:t})}),labels:{confirm:"确定",cancel:"取消"},onCancel:()=>console.log("Cancel"),confirmProps:{color:"red"},onConfirm:async()=>{r(!0);try{await (0,y.ff)(e),await (0,y.im)()}catch(e){console.log(e)}r(!1)}})},l=e.map(e=>(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{children:[(0,o.jsx)("div",{style:{width:200,wordBreak:"break-word"},children:(0,o.jsx)(n(),{href:"/foundationModel/".concat(e.name,"/detail"),children:j.c3[e.template]})}),(0,o.jsx)("div",{style:{width:200,wordBreak:"break-word"},children:e.name})]}),(0,o.jsx)("td",{children:(0,_.o0)(parseInt(e.createdTime))}),(0,o.jsxs)("td",{children:[" ",(0,o.jsx)("a",{href:"https://fcnext.console.aliyun.com/applications/".concat(e.name,"/env/default?tab=envDetail"),target:"_blank",children:"访问云服务"}),(0,o.jsx)(d.z,{ml:12,variant:"filled",color:"red",size:"xs",onClick:()=>removeFoundationModel(e.name),children:"删除"})]})]},e.name));async function getAllFoundationModel(){r(!0);try{await (0,y.im)()}catch(e){console.log(e)}r(!1)}return(0,a.useEffect)(()=>{getAllFoundationModel()},[]),(0,o.jsxs)(h.x,{pos:"relative",children:[(0,o.jsx)(p.f,{visible:t,overlayOpacity:.3}),(0,o.jsxs)(f.i,{striped:!0,withBorder:!0,withColumnBorders:!0,mt:12,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"基础模型"}),(0,o.jsx)("th",{children:"创建时间"}),(0,o.jsx)("th",{children:"操作"})]})}),(0,o.jsx)("tbody",{children:l})]})]})}function FoundationModel(){let e=(0,i.useRouter)(),r=[{title:"AgentCraft",href:"/"},{title:"基础模型",href:"/foundationModel"}].map((e,r)=>(0,o.jsx)(u.e,{href:e.href,children:e.title},r));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.O,{children:r}),(0,o.jsx)(x.Z,{title:"基础模型",description:"AgentCraft可以构建通义千问的商业化大语言模型服务也能够对魔搭社区，huggingface社区的开源模型进行托管。由此构建的基础模型服务可以作为您的AIGC应用的核心"}),(0,o.jsx)(h.x,{children:(0,o.jsx)(g.k,{mih:50,gap:"md",justify:"flex-start",align:"flex-start",direction:"row",wrap:"wrap",children:(0,o.jsx)(d.z,{onClick:()=>e.push("/foundationModel/create"),children:"创建基础模型"})})}),(0,o.jsx)(List,{})]})}function IndexPage(){return(0,o.jsx)(FoundationModel,{})}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=75782)}),_N_E=e.O()}]);