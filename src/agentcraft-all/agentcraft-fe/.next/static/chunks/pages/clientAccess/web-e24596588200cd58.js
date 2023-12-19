(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[677],{93284:function(e,t,n){"use strict";n.d(t,{O:function(){return f}});var a=n(67294),i=n(64761),r=n(24241),o=(0,n(56817).k)(e=>({root:{display:"flex",alignItems:"center"},breadcrumb:{lineHeight:1,whiteSpace:"nowrap",WebkitTapHighlightColor:"transparent"},separator:{marginLeft:e.spacing.xs,marginRight:e.spacing.xs,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[7],lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center"}})),c=n(95117),s=n(64523),l=Object.defineProperty,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,__spreadValues=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&__defNormalProp(e,n,t[n]);if(d)for(var n of d(t))u.call(t,n)&&__defNormalProp(e,n,t[n]);return e},__objRest=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))0>t.indexOf(a)&&u.call(e,a)&&(n[a]=e[a]);return n};let g={separator:"/"},f=(0,a.forwardRef)((e,t)=>{let n=(0,i.N4)("Breadcrumbs",g,e),{className:l,children:d,separator:p,classNames:u,styles:f,unstyled:h,variant:w}=n,m=__objRest(n,["className","children","separator","classNames","styles","unstyled","variant"]),{classes:b,cx:x}=o(null,{classNames:u,styles:f,unstyled:h,name:"Breadcrumbs",variant:w}),y=a.Children.toArray(d).reduce((e,t,n,i)=>{var o;let s=(0,r.k)(t)?a.cloneElement(t,{className:x(b.breadcrumb,null==(o=t.props)?void 0:o.className),key:n}):a.createElement("div",{className:b.breadcrumb,key:n},t);return e.push(s),n!==i.length-1&&e.push(a.createElement(c.x,{size:"sm",className:b.separator,key:`separator-${n}`},p)),e},[]);return a.createElement(s.x,__spreadValues({className:x(b.root,l),ref:t},m),y)});f.displayName="@mantine/core/Breadcrumbs"},25439:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clientAccess/web",function(){return n(22389)}])},2394:function(e,t,n){"use strict";n.d(t,{Z:function(){return FeatureDescription}});var a=n(85893),i=n(92716),r=n(95117),o=n(64523),c=n(69876),s=n(19236),l=n(91759);function InfoDetail(e){let{detail:t,title:n}=e,[o,{open:c,close:s}]=(0,l.q)(!1);return(0,a.jsx)(a.Fragment,{children:t?(0,a.jsxs)("div",{children:[(0,a.jsx)(i.d,{opened:o,onClose:s,title:n,children:(0,a.jsx)(r.x,{children:t})}),(0,a.jsx)(r.x,{onClick:()=>c(),children:"信息"})]}):null})}function FeatureDescription(e){let{title:t,description:n,detail:i,mt:l,mb:d}=e;return(0,a.jsxs)(o.x,{mt:l||24,mb:d||24,children:[(0,a.jsxs)(c.k,{mih:20,gap:"md",justify:"flex-start",align:"flex-start",direction:"row",wrap:"wrap",children:[(0,a.jsx)(s.D,{order:2,children:t}),(0,a.jsx)(InfoDetail,{title:t,detail:i})]}),n?(0,a.jsx)(r.x,{lineClamp:4,children:n}):null]})}},7374:function(e,t,n){"use strict";var a,i,r,o,c;n.d(t,{KJ:function(){return i},Pw:function(){return h},TN:function(){return s},Vg:function(){return f},W8:function(){return b},X_:function(){return p},bb:function(){return r},fC:function(){return w},kg:function(){return a},l1:function(){return m},wm:function(){return l},xr:function(){return d}}),(o=a||(a={})).DING_TALK="dingtalk",o.WECHAT="wechat",(i||(i={})).CHATGPT_NEXTJS_WEB="chatgpt-next-web";let s=[{label:"钉钉机器人",value:"dingtalk",image:"https://img.alicdn.com/imgextra/i2/O1CN019OiHSB1tMIXnlm4k0_!!6000000005887-2-tps-200-200.png",description:"钉钉机器人"},{label:"微信个人机器人",value:"wechat",image:"https://img.alicdn.com/imgextra/i1/O1CN01bhGQ8126xw6OOzOxN_!!6000000007729-2-tps-200-200.png",description:"微信个人机器人"}],l=[{label:"chatgpt-next-web应用模板",value:"chatgpt-next-web",image:"https://img.alicdn.com/imgextra/i3/O1CN010n937P22NW91SAmvB_!!6000000007108-0-tps-1678-958.jpg",description:"chatgpt-next-web"}],d="cn-hangzhou",p="AGENTCRAFT_CLIENT",u="agentcraft-client-dingtalk",g="agentcraft-client-wechat";(c=r||(r={}))[c.AGENT_SERVICE=0]="AGENT_SERVICE",c[c.SERVICE_CONFIG_PREVIEW=1]="SERVICE_CONFIG_PREVIEW",c[c.ROBOT_WEBHOOK=2]="ROBOT_WEBHOOK";let f={[u]:"钉钉机器人",[g]:"微信机器人（个人版）"},h={dingtalk:u,wechat:g},w={dingtalk:"agentcraft-dingtalk-agent-server",wechat:"agentcraft-wechat-agent-server"},m={"chatgpt-next-web":"agentcraft-client-web"},b={"chatgpt-next-web":"agentcraft-web-frontend"}},22389:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return IndexPage}});var a=n(85893),i=n(67294),r=n(53416),o=n(11163),c=n(77248),s=n(54685),l=n(93284),d=n(70157),p=n(49737),u=n(69876),g=n(20966),f=n(71232),h=n(67841),w=n(26373),m=n(5638),b=n(57472),x=n(43726),y=n(29235),_=n(99985),v=n(95117),C=n(82623),j=n(19236),E=n(64523),A=n(28855),S=n(52615),k=n(71346),T=n(7374);let O=(0,i.forwardRef)((e,t)=>{let{image:n,label:i,description:r,...o}=e;return(0,a.jsx)("div",{ref:t,...o,children:(0,a.jsxs)(f.Z,{noWrap:!0,children:[(0,a.jsx)(_.q,{src:n}),(0,a.jsxs)("div",{children:[(0,a.jsx)(v.x,{size:"sm",children:i}),(0,a.jsx)(v.x,{size:"xs",opacity:.65,children:r})]})]})})});function WebIndependentStation(e){let{form:t}=e,n=(0,k.qr)().appList,r=(0,y.I1)().knowledgeBaseList,getApp=async()=>{await (0,k.RV)()},getKonwledgeBase=async e=>{try{await (0,y.Co)(e)}catch(e){console.log(e)}};(0,i.useEffect)(()=>{getApp()},[]);let o=n.map(e=>({label:e.name,value:e.id})),c=r.map(e=>({label:e.name,value:e.id}));return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(C.X,{shadow:"xs",p:"xl",children:[(0,a.jsx)(j.D,{order:5,children:"配置独立WEB站点"}),(0,a.jsxs)(E.x,{mx:"auto",children:[(0,a.jsx)(A.Ph,{withAsterisk:!0,data:T.wm,itemComponent:O,description:"选择独立站模版",label:"选择独立站模版",filter:(e,t)=>t.label.toLowerCase().includes(e.toLowerCase().trim())||t.description.toLowerCase().includes(e.toLowerCase().trim()),placeholder:"",...t.getInputProps("webTemplate")}),(0,a.jsx)(A.Ph,{withAsterisk:!0,data:o,description:"选择要交付的应用",label:"应用",placeholder:"",...t.getInputProps("appId"),onChange:e=>{t.setFieldValue("appId",e),getKonwledgeBase(e)}}),(0,a.jsx)(A.Ph,{withAsterisk:!0,data:c,description:"选择要交付的知识库智能体",label:"选择知识库智能体",placeholder:"",...t.getInputProps("agentId")}),(0,a.jsx)(S.g,{label:"web独立站描述",description:"",placeholder:"",...t.getInputProps("description")})]})]})})}var I=n(2394);function Web(){let e=(0,o.useRouter)(),{activeStep:t,setActiveStep:n,robotStepStatus:i,setRobotStepStatus:_}=(0,m.iZ)(),v=(0,b.Po)().completeConfig,C=[{title:"AgentCraft",href:"/"},{title:"客户端接入",href:"/clientAccess"}].map((e,t)=>(0,a.jsx)(s.e,{href:e.href,children:e.title},t)),j=(0,c.c)({initialValues:{webTemplate:T.KJ.CHATGPT_NEXTJS_WEB,appId:"",agentId:"",description:"桥接AgentCraft智能体到钉钉/微信的代理服务"},validate:{webTemplate:e=>e?null:"请选择一个独立站模版",appId:e=>e?null:"请选择应用",agentId:e=>e?null:"请选择一个智能体"}}),{webTemplate:E}=j.values,createWebIndependentStation=async()=>{if(j.validate(),j.isValid()){try{i.robot_proxy_service_create_loading=!0,_(i);let{agentId:e,description:o}=j.values,c=await (0,y.IV)(e),s=c.token,l=await (0,y.Sk)(),d=l.data||{openApiUrl:"",innerApiUrl:""},p=await (0,m.xn)(T.l1[E],{region:v.regionId||T.xr,TOKEN:s,BASE_LLM_SERVER:d.openApiUrl,name:"".concat(T.X_,"_").concat((0,r.x0)()),description:o});if(p){var t,n,a;let e=await (0,x.p)(p);null==e||null===(t=e.output)||void 0===t||t.deploy.domain,null==e||null===(a=e.output)||void 0===a||null===(n=a.deploy[T.W8[E]])||void 0===n||n.functionName,w.N9.show({title:"Web独立站服务创建成功",message:"您已完成Web独立站服务创建",color:"green"})}}catch(e){w.N9.show({title:"异常",message:e.message,color:"red"})}i.robot_proxy_service_create_loading=!1,_(i),e.push("/clientAccess")}},nextStep=async()=>{await createWebIndependentStation()};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.O,{children:C}),(0,a.jsx)(I.Z,{title:"Web独立站",description:"构建独立的Web站点提供智能体服务"}),(0,a.jsx)(d.v,{active:t,onStepClick:n,children:(0,a.jsx)(d.v.Step,{label:"独立站点配置",description:"",loading:i.robot_proxy_service_create_loading,children:(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)(p.f,{loader:(0,a.jsx)(u.k,{align:"center",direction:"column",children:(0,a.jsxs)(u.k,{align:"center",children:["部署Web独立站大约需要1分钟，请耐心等待",(0,a.jsx)(g.a,{variant:"bars",color:"pink",ml:12})]})}),overlayOpacity:.3,overlayColor:"#c5c5c5",visible:i.robot_proxy_service_create_loading}),(0,a.jsx)("div",{style:{padding:20},children:(0,a.jsx)(WebIndependentStation,{form:j})})]})})}),(0,a.jsx)(f.Z,{mt:"xl",children:(0,a.jsx)(h.z,{onClick:nextStep,children:"确定"})})]})}function IndexPage(){return(0,a.jsx)(Web,{})}},71346:function(e,t,n){"use strict";n.d(t,{E9:function(){return addApplication},RV:function(){return getApplications},qr:function(){return o},rw:function(){return deleteApplication}});var a=n(64529),i=n(782),r=n(2393);let o=(0,a.Ue)()((0,i.mW)(e=>({appList:[],open:!1,loading:!1,updateAppList:t=>e(e=>({appList:t})),setLoading:t=>e(e=>({loading:t})),setOpen:t=>e(e=>({open:t}))})));async function getApplications(){let e=o.getState(),t=e.updateAppList,n=await (0,r.W)("/api/application/list"),a=n.data;a&&t(a)}async function deleteApplication(e){return await (0,r.W)("/api/application/delete?id=".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})}async function addApplication(e){return await (0,r.W)("/api/application/create",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}},5638:function(e,t,n){"use strict";n.d(t,{Ow:function(){return createEventbus},bc:function(){return getClientAccessList},i7:function(){return deleteClientAccess},iZ:function(){return s},xn:function(){return createChatBotBridgeService}});var a=n(64529),i=n(782),r=n(43726),o=n(7374),c=n(2393);let s=(0,a.Ue)((0,i.mW)(e=>({clientAccessList:[],loading:!1,activeStep:o.bb.AGENT_SERVICE,agents:[],selectedAgent:{},robotStepStatus:{robot_proxy_service_create_loading:!1,robot_webhook_create_loading:!1},robotConfig:{robotProxyServiceConfig:{},robotWebhookConfig:{}},setLoading:t=>e(()=>({loading:t})),setOpen:t=>e(()=>({open:t})),updateClientAccessList:t=>e(e=>({clientAccessList:t})),setActiveStep:t=>{e({activeStep:t})},setRobotConfig:t=>{e({robotConfig:t})},setRobotStepStatus:t=>{e({robotStepStatus:t})}})));async function createChatBotBridgeService(e,t){return await (0,r.H)(e,t)}async function createEventbus(e){return await (0,c.W)("/api/clientAccess/eventbus",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}async function getClientAccessList(){let e=s.getState(),t=e.updateClientAccessList,n=await (0,c.W)("/api/infra/alibaba-cloud/listApps?appFilter=".concat(o.X_)),a=n.data;a&&t(a)}async function deleteClientAccess(e){return await (0,c.W)("/api/infra/alibaba-cloud/deleteApp?appName=".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})}},43726:function(e,t,n){"use strict";n.d(t,{H:function(){return createServerlessApp},p:function(){return checkAppStatus}});var a=n(2393);function checkAppStatus(e){return new Promise((t,n)=>{let i=setInterval(async()=>{try{let n=await (0,a.W)("/api/infra/alibaba-cloud/getApp?appName=".concat(e)),r=n.data.lastRelease;"published"===r.status&&(clearInterval(i),t(r))}catch(e){}},4e3)})}async function createServerlessApp(e,t){var n;let i=await (0,a.W)("/api/infra/alibaba-cloud/createApp?template=".concat(e),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});return(null==i?void 0:null===(n=i.data)||void 0===n?void 0:n.name)||""}},29235:function(e,t,n){"use strict";n.d(t,{CH:function(){return updateKnowledgeBase},Co:function(){return getKnowledgeBaseList},I1:function(){return o},IV:function(){return getKnowledgeBase},Sk:function(){return getAccessUrl},eV:function(){return deleteKnowledgeBase},g$:function(){return refreshToken},uA:function(){return addKnowledgeBase}});var a=n(64529),i=n(782),r=n(2393);let o=(0,a.Ue)()((0,i.mW)(e=>({knowledgeBaseList:[],knowledgeBaseChatList:[],open:!1,chatDrawer:!1,loading:!1,isEdit:!1,accessUrl:{openApiUrl:"",innerApiUrl:""},currentKnowledgeBase:void 0,updateCurrentKnowledgeBase:t=>e(e=>({currentKnowledgeBase:t})),setChatDrawer:t=>e(e=>({chatDrawer:t})),setAccessUrl:t=>e(e=>({accessUrl:t})),setEditStatus:t=>e(e=>({isEdit:t})),setLoading:t=>e(e=>({loading:t})),setOpen:t=>e(e=>({open:t})),updateKnowledgeBaseList:t=>e(e=>({knowledgeBaseList:t}))})));async function getKnowledgeBaseList(e){let t=o.getState(),n=t.updateKnowledgeBaseList,a=await (0,r.W)("/api/knowledgeBase/list?appId=".concat(e)),i=a.data;i&&n(i)}async function getKnowledgeBase(e){let t=await (0,r.W)("/api/knowledgeBase/get?id=".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}});return t.data}async function addKnowledgeBase(e){return await (0,r.W)("/api/knowledgeBase/create",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}async function deleteKnowledgeBase(e){return await (0,r.W)("/api/knowledgeBase/delete?agentId=".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})}async function updateKnowledgeBase(e,t){return await (0,r.W)("/api/knowledgeBase/update?id=".concat(e),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}async function refreshToken(e){return await (0,r.W)("/api/knowledgeBase/token?agentId=".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}})}async function getAccessUrl(){let e=await (0,r.W)("/api/knowledgeBase/getAccessUrl",{method:"GET",headers:{"Content-Type":"application/json"}});return e}}},function(e){e.O(0,[871,855,516,774,888,179],function(){return e(e.s=25439)}),_N_E=e.O()}]);