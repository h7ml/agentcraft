"use strict";exports.id=5638,exports.ids=[5638],exports.modules={7374:(t,e,a)=>{var n,i,c;a.d(e,{KJ:()=>i,Pw:()=>b,TN:()=>s,Vg:()=>d,W8:()=>C,X_:()=>l,bb:()=>c,fC:()=>h,kg:()=>n,l1:()=>u,wm:()=>r,xr:()=>o}),function(t){t.DING_TALK="dingtalk",t.WECHAT="wechat"}(n||(n={})),(i||(i={})).CHATGPT_NEXTJS_WEB="chatgpt-next-web";let s=[{label:"钉钉机器人",value:"dingtalk",image:"https://img.alicdn.com/imgextra/i2/O1CN019OiHSB1tMIXnlm4k0_!!6000000005887-2-tps-200-200.png",description:"钉钉机器人"},{label:"微信个人机器人",value:"wechat",image:"https://img.alicdn.com/imgextra/i1/O1CN01bhGQ8126xw6OOzOxN_!!6000000007729-2-tps-200-200.png",description:"微信个人机器人"}],r=[{label:"chatgpt-next-web应用模板",value:"chatgpt-next-web",image:"https://img.alicdn.com/imgextra/i3/O1CN010n937P22NW91SAmvB_!!6000000007108-0-tps-1678-958.jpg",description:"chatgpt-next-web"}],o="cn-hangzhou",l="AGENTCRAFT_CLIENT",p="agentcraft-client-dingtalk",g="agentcraft-client-wechat";!function(t){t[t.AGENT_SERVICE=0]="AGENT_SERVICE",t[t.SERVICE_CONFIG_PREVIEW=1]="SERVICE_CONFIG_PREVIEW",t[t.ROBOT_WEBHOOK=2]="ROBOT_WEBHOOK"}(c||(c={}));let d={[p]:"钉钉机器人",[g]:"微信机器人（个人版）"},b={dingtalk:p,wechat:g},h={dingtalk:"agentcraft-dingtalk-agent-server",wechat:"agentcraft-wechat-agent-server"},u={"chatgpt-next-web":"agentcraft-client-web"},C={"chatgpt-next-web":"agentcraft-web-frontend"}},5638:(t,e,a)=>{a.a(t,async(t,n)=>{try{a.d(e,{Ow:()=>createEventbus,bc:()=>getClientAccessList,i7:()=>deleteClientAccess,iZ:()=>p,xn:()=>createChatBotBridgeService});var i=a(9890),c=a(3602),s=a(3726),r=a(7374),o=a(2393),l=t([i,c,s,o]);[i,c,s,o]=l.then?(await l)():l;let p=(0,i.create)((0,c.devtools)(t=>({clientAccessList:[],loading:!1,activeStep:r.bb.AGENT_SERVICE,agents:[],selectedAgent:{},robotStepStatus:{robot_proxy_service_create_loading:!1,robot_webhook_create_loading:!1},robotConfig:{robotProxyServiceConfig:{},robotWebhookConfig:{}},setLoading:e=>t(()=>({loading:e})),setOpen:e=>t(()=>({open:e})),updateClientAccessList:e=>t(t=>({clientAccessList:e})),setActiveStep:e=>{t({activeStep:e})},setRobotConfig:e=>{t({robotConfig:e})},setRobotStepStatus:e=>{t({robotStepStatus:e})}})));async function createChatBotBridgeService(t,e){return await (0,s.H)(t,e)}async function createEventbus(t){return await (0,o.W)("/api/clientAccess/eventbus",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}async function getClientAccessList(){let t=p.getState(),e=t.updateClientAccessList,a=await (0,o.W)(`/api/infra/alibaba-cloud/listApps?appFilter=${r.X_}`),n=a.data;n&&e(n)}async function deleteClientAccess(t){return await (0,o.W)(`/api/infra/alibaba-cloud/deleteApp?appName=${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})}n()}catch(t){n(t)}})},3726:(t,e,a)=>{a.a(t,async(t,n)=>{try{a.d(e,{H:()=>createServerlessApp,p:()=>checkAppStatus});var i=a(2393),c=t([i]);function checkAppStatus(t){return new Promise((e,a)=>{let n=setInterval(async()=>{try{let a=await (0,i.W)(`/api/infra/alibaba-cloud/getApp?appName=${t}`),c=a.data.lastRelease;"published"===c.status&&(clearInterval(n),e(c))}catch(t){}},4e3)})}async function createServerlessApp(t,e){let a=await (0,i.W)(`/api/infra/alibaba-cloud/createApp?template=${t}`,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});return a?.data?.name||""}i=(c.then?(await c)():c)[0],n()}catch(t){n(t)}})}};