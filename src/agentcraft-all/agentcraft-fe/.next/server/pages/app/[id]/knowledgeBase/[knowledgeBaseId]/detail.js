"use strict";(()=>{var e={};e.id=8159,e.ids=[8159,2888,660],e.modules={900:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>_,default:()=>x,getServerSideProps:()=>m,getStaticPaths:()=>u,getStaticProps:()=>h,reportWebVitals:()=>j,routeModule:()=>P,unstable_getServerProps:()=>f,unstable_getServerSideProps:()=>I,unstable_getStaticParams:()=>w,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>g});var i=r(7093),a=r(5244),l=r(1323),n=r(9209),o=r.n(n),p=r(5913),d=r(8791),c=e([p,d]);[p,d]=c.then?(await c)():c;let x=(0,l.l)(d,"default"),h=(0,l.l)(d,"getStaticProps"),u=(0,l.l)(d,"getStaticPaths"),m=(0,l.l)(d,"getServerSideProps"),_=(0,l.l)(d,"config"),j=(0,l.l)(d,"reportWebVitals"),g=(0,l.l)(d,"unstable_getStaticProps"),y=(0,l.l)(d,"unstable_getStaticPaths"),w=(0,l.l)(d,"unstable_getStaticParams"),f=(0,l.l)(d,"unstable_getServerProps"),I=(0,l.l)(d,"unstable_getServerSideProps"),P=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/app/[id]/knowledgeBase/[knowledgeBaseId]/detail",pathname:"/app/[id]/knowledgeBase/[knowledgeBaseId]/detail",bundlePath:"",filename:""},components:{App:p.default,Document:o()},userland:d});s()}catch(e){s(e)}})},3478:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Hb:()=>DetailPage});var i,a=r(997),l=r(6689),n=r(2247),o=r(9445),p=r(5509),d=r(1939),c=r(1494),x=r(4888),h=r(3962),u=r(9235),m=r(4222),_=r(2394),j=r(918),g=r(3274),y=e([p,d,c,u,g]);function KnowledgeBaseForm({appId:e,containerType:t}){let r=(0,u.I1)().currentKnowledgeBase,s=(0,u.I1)().setLoading,i=(0,d.s6)().modelList,p=(0,c.s6)().dataSetList,_=(0,o.useForm)({initialValues:{name:"",description:"",prompt_template:m.Gv,app_id:parseInt(e),exact_datasets:[],fuzzy_datasets:[],exact_search_similarity:.9,fuzzy_search_similarity:.6,temperature:.5,top_p:1,n_sequences:1,max_tokens:1024,stop:[],presence_penalty:0,frequency_penalty:0,logit_bias:"",model_id:"",redis_ip_ex:0,redis_history_ex:0,model_ip_limit:0,llm_history_len:0,system_message:"",exact_search_limit:1,fuzzy_search_limit:3},validate:{name:e=>e?null:"智能体名必填"}});(0,l.useEffect)(()=>{(0,d.fZ)(),(0,c.ln)();let e=r?.datasets;_.setValues({id:r?.id,name:r?.name,description:r?.description,prompt_template:r?.prompt_template,app_id:r?.app_id,exact_datasets:e?.filter(e=>e.dataset_type===h.I.QUESTION).map(e=>e.dataset_id),fuzzy_datasets:e?.filter(e=>e.dataset_type===h.I.DOCUMENT).map(e=>e.dataset_id),exact_search_similarity:r?.exact_search_limit,fuzzy_search_similarity:r?.fuzzy_search_similarity,temperature:r?.temperature,top_p:r?.top_p,n_sequences:r?.n_sequences,max_tokens:r?.max_tokens,stop:r?.stop,presence_penalty:r?.presence_penalty,frequency_penalty:r?.frequency_penalty,logit_bias:r?.logit_bias,model_id:r?.model_id,redis_ip_ex:r?.redis_ip_ex,redis_history_ex:r?.redis_history_ex,model_ip_limit:r?.model_ip_limit,llm_history_len:r?.llm_history_len,system_message:r?.system_message,exact_search_limit:r?.exact_search_limit,fuzzy_search_limit:r?.fuzzy_search_limit})},[r]);let j=i.map(e=>({label:e.name_alias,value:e.id})),g=p.filter(e=>e.dataset_type==h.I.DOCUMENT).map(e=>({label:e.name,value:e.id})),y=p.filter(e=>e.dataset_type==h.I.QUESTION).map(e=>({label:e.name,value:e.id}));return(0,a.jsxs)("div",{style:{width:"100%"},children:[(0,a.jsxs)(n.Flex,{style:{alignItems:"stretch"},children:[2!==t?(0,a.jsxs)(n.Paper,{shadow:"xs",p:"md",withBorder:!0,style:{width:"25%"},mr:12,children:[a.jsx(n.Title,{order:5,size:"h5",children:"智能体信息"}),(0,a.jsxs)(n.Box,{pl:4,pr:4,children:[a.jsx(n.TextInput,{withAsterisk:!0,label:"名称",placeholder:"输入智能体名称",..._.getInputProps("name")}),a.jsx(n.Textarea,{label:"描述",placeholder:"输入应用描述",description:"请输入智能体的描述信息",..._.getInputProps("description"),minRows:22})]})]}):null,(0,a.jsxs)(n.Paper,{shadow:"xs",p:"md",withBorder:!0,style:{width:"25%"},mr:12,children:[a.jsx(n.Title,{order:5,size:"h5",children:"调试指令"}),(0,a.jsxs)(n.Box,{pl:4,pr:4,children:[a.jsx(n.Select,{data:m.Ti,description:"",defaultValue:m.$$,label:"指令示例",placeholder:"",onChange:e=>{_.setValues({system_message:e})}}),a.jsx(n.Textarea,{label:"系统提示词",placeholder:"输入系统提示词",..._.getInputProps("system_message"),description:"系统提示词可以作为对大语言模型的约束指令",minRows:22})]})]}),(0,a.jsxs)(n.Paper,{shadow:"xs",p:"md",withBorder:!0,style:{width:"25%"},mr:12,children:[(0,a.jsxs)(n.Flex,{justify:"space-between",align:"center",children:[a.jsx(n.Title,{order:5,size:"h5",children:"LLM服务"}),a.jsx(x.Z,{cursor:"pointer",onClick:d.fZ})]}),a.jsx(n.Box,{pl:4,pr:4,mb:12,children:a.jsx(n.Select,{withAsterisk:!0,data:j,description:"LLM代理是大语言模型的代理服务，通过opneai范式的兼容，可以任意切换不同类型的LLM而不用修改业务代码",label:"LLM代理",placeholder:"",..._.getInputProps("model_id")})}),a.jsx(n.Divider,{my:"sm"}),a.jsx(n.Title,{order:5,size:"h5",children:"大语言模型参数"}),(0,a.jsxs)(n.Box,{pl:4,pr:4,children:[(0,a.jsxs)(n.Group,{grow:!0,children:[a.jsx(n.TextInput,{withAsterisk:!0,label:"temperature",placeholder:"",..._.getInputProps("temperature")}),a.jsx(n.TextInput,{withAsterisk:!0,label:"top_p",placeholder:"",..._.getInputProps("top_p")})]}),(0,a.jsxs)(n.Group,{grow:!0,children:[a.jsx(n.TextInput,{withAsterisk:!0,label:"n_sequences",placeholder:"",..._.getInputProps("n_sequences")}),a.jsx(n.TextInput,{withAsterisk:!0,label:"max_tokens",placeholder:"",..._.getInputProps("max_tokens")})]}),(0,a.jsxs)(n.Group,{grow:!0,children:[a.jsx(n.TextInput,{withAsterisk:!0,label:"presence_penalty",placeholder:"",..._.getInputProps("presence_penalty")}),a.jsx(n.TextInput,{withAsterisk:!0,label:"frequency_penalty",placeholder:"",..._.getInputProps("frequency_penalty")})]}),a.jsx(n.TextInput,{label:"logit_bias",placeholder:"",..._.getInputProps("logit_bias"),width:"50%"})]})]}),(0,a.jsxs)(n.Paper,{shadow:"xs",p:"md",withBorder:!0,style:{width:"25%"},children:[a.jsx(n.Title,{order:5,size:"h5",children:"数据召回"}),a.jsx(n.Textarea,{label:"召回提示词模板",placeholder:"",..._.getInputProps("prompt_template"),minRows:6,description:"召回提示词模板可以将检索的结果context和用户的输入query整合到一起，最后整体输入给大语言模型"}),(0,a.jsxs)(n.Flex,{justify:"space-between",align:"center",children:[a.jsx(n.Title,{order:5,size:"h5",children:"召回数据集"}),a.jsx(x.Z,{cursor:"pointer",onClick:c.ln})]}),a.jsx(n.Box,{pl:4,pr:4,children:(0,a.jsxs)(n.Group,{grow:!0,children:[a.jsx(n.MultiSelect,{data:g,description:"文档数据集用来做模型检索",label:"文档数据集",placeholder:"添加模糊数据集",..._.getInputProps("fuzzy_datasets")}),a.jsx(n.MultiSelect,{data:y,description:"问答数据集用来做问题精确匹配",label:"问答数据集",placeholder:"添加精准数据集",..._.getInputProps("exact_datasets")})]})}),a.jsx(n.Divider,{my:"sm"}),a.jsx(n.Title,{order:5,size:"h5",children:"召回参数"}),(0,a.jsxs)(n.Box,{pl:4,pr:4,children:[(0,a.jsxs)(n.Group,{grow:!0,children:[a.jsx(n.TextInput,{withAsterisk:!0,description:"文档数据检索的精度，取值0-1之间，建议取0.6~0.8",label:"文档结果召回精度",placeholder:"",..._.getInputProps("fuzzy_search_similarity")}),a.jsx(n.TextInput,{withAsterisk:!0,description:"问答数据检索的精度，取值0-1之间，建议取0.9~1",label:"问答结果召回精度",placeholder:"",..._.getInputProps("exact_search_similarity")})]}),(0,a.jsxs)(n.Group,{grow:!0,children:[a.jsx(n.NumberInput,{withAsterisk:!0,description:"文档结果的召回数量，数量越多信息越丰富，但是首先于LLM上下文长度，不宜过长",label:"文档结果召回数量",placeholder:"",..._.getInputProps("fuzzy_search_limit")}),a.jsx(n.NumberInput,{withAsterisk:!0,description:"问答结果的召回数量，数量越多信息越丰富，但是首先于LLM上下文长度，不宜过长",label:"问答结果召回数量",placeholder:"",..._.getInputProps("exact_search_limit")})]})]}),a.jsx(n.Divider,{my:"sm"})]})]}),a.jsx(n.Box,{pt:18,style:{textAlign:"center",width:"100%"},children:a.jsx(n.Button,{style:{width:"100%"},onClick:async()=>{if(_.validate(),_.isValid()){s(!0);let e=_.values;await (0,u.CH)(e.id,e),s(!1)}},children:"确认修改"})})]})}function ChatDrawer(){let e=(0,u.I1)().chatDrawer,t=(0,u.I1)().setChatDrawer;return(0,a.jsxs)(n.Drawer,{opened:e,onClose:()=>{t(!1)},title:(0,a.jsxs)("div",{children:[a.jsx(n.Text,{fz:"xl",children:"智能体调试"}),a.jsx(n.Text,{fz:"sm",children:"您可以通过提示词调整，数据集切换，模型服务，以及切换模型参数来调整智能体问答的效果"})]}),position:"right",size:"30%",overlayProps:{opacity:.5,blur:4},children:[a.jsx("div",{children:a.jsx(n.Badge,{color:"orange",size:"lg",radius:"xs",variant:"filled",children:"智能体问答"})}),a.jsx(p.Z,{})]})}function APIAccess(){let e=(0,u.I1)().currentKnowledgeBase,t=(0,u.I1)().accessUrl,r=(0,u.I1)().setAccessUrl,s=(0,u.I1)().setChatDrawer;(0,l.useEffect)(()=>{(async()=>{let e=await (0,u.Sk)(),t=e.data||{openApiUrl:"",innerApiUrl:""};r(t)})()},[]);let i=`curl -X 'POST' \
    '${t.openApiUrl}/v1/chat/completions' \
    -H 'accept: application/json' \
    -H 'Authorization: Bearer ${e?.token}' \
    -H 'Content-Type: application/json' \
    -d '{
      "messages":[
          {
              "role": "user",
              "content": "请问世界最高峰是什么？"
          }
      ],
      "stream": false,
      "max_tokens": 1024
  }'`;return(0,a.jsxs)(n.Flex,{direction:"column",style:{width:"100%"},children:[a.jsx(n.Title,{order:4,mb:8,children:"访问接入"}),(0,a.jsxs)(n.Paper,{shadow:"xs",p:"md",withBorder:!0,children:[a.jsx(n.Title,{order:5,size:"h5",children:"API访问"}),(0,a.jsxs)(n.Box,{pl:4,pr:4,children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("span",{children:[a.jsx(n.Text,{color:"cyan",weight:700,children:"公网API访问地址："}),a.jsx(j.Z,{value:t.openApiUrl,content:t.openApiUrl})," "]}),a.jsx("span",{})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("span",{style:{wordBreak:"break-all"},children:[a.jsx(n.Text,{color:"cyan",weight:700,children:"API访问token："}),a.jsx(j.Z,{value:e?.token,content:e?.token})]}),a.jsx("span",{})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("span",{style:{wordBreak:"break-all"},children:[a.jsx(n.Text,{color:"cyan",weight:700,children:"API文档访问："}),a.jsx("a",{href:`${t.openApiUrl}/docs`,target:"_blank",children:`${t.openApiUrl}/docs`})]}),a.jsx("span",{})]})]}),a.jsx(n.Divider,{my:"sm"}),a.jsx(n.Title,{order:5,size:"h5",children:"API调用示例"}),a.jsx("div",{style:{width:"95%",overflow:"hidden",margin:"0 auto"},children:a.jsx(g.Z,{textContent:`\`\`\`shell
${i}`,value:i})}),a.jsx(n.Divider,{my:"sm"}),a.jsx(n.Title,{order:5,size:"h5",children:"效果测试"}),a.jsx(n.Box,{pl:4,pr:4,children:a.jsx(n.Group,{grow:!0,children:e?.token?a.jsx(n.Button,{color:"grape",variant:"filled",size:"xs",onClick:()=>{s(!0)},mr:4,children:"问答测试"}):a.jsx(n.Tooltip,{label:"需要成访问令牌才可以访问此能力",children:a.jsx(n.Button,{color:"grape",variant:"filled",size:"xs",mr:4,children:"问答测试"})})})})]})]})}function DetailPage({appId:e,knowledgeBaseId:t}){let r=(0,u.I1)().loading,s=(0,u.I1)().updateCurrentKnowledgeBase,i=[{title:"应用列表",href:"/app"},{title:"领域知识智能体",href:`/app/${e}/knowledgeBase`},{title:"智能体详细",href:`/app/${e}/knowledgeBase/${t}/detail`}].map((e,t)=>a.jsx(n.Anchor,{href:e.href,children:e.title},t));return(0,l.useEffect)(()=>{(async()=>{let e=await (0,u.IV)(t);s(e)})()},[t]),(0,a.jsxs)(n.Box,{pos:"relative",children:[a.jsx(n.LoadingOverlay,{visible:r,overlayOpacity:.3}),a.jsx(n.Breadcrumbs,{children:i}),a.jsx(_.Z,{title:"智能体详情",description:"您可以查看修改智能体内容，以及查看API调用"}),a.jsx(ChatDrawer,{}),(0,a.jsxs)(n.Flex,{mih:50,gap:"md",justify:"flex-start",align:"flex-start",direction:"column",wrap:"nowrap",children:[a.jsx(APIAccess,{}),a.jsx(KnowledgeBaseForm,{appId:e})]})]})}[p,d,c,u,g]=y.then?(await y)():y,function(e){e[e.ADD_OR_UPDATE=1]="ADD_OR_UPDATE",e[e.CHAT=2]="CHAT"}(i||(i={})),s()}catch(e){s(e)}})},8791:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>IndexPage,getServerSideProps:()=>getServerSideProps});var i=r(997),a=r(3478),l=e([a]);function getServerSideProps(e){let{params:t}=e,r=t.id,s=t.knowledgeBaseId;return{props:{appId:r,knowledgeBaseId:s}}}function IndexPage({appId:e,knowledgeBaseId:t}){return i.jsx(a.Hb,{appId:e,knowledgeBaseId:t})}a=(l.then?(await l)():l)[0],s()}catch(e){s(e)}})},2247:e=>{e.exports=require("@mantine/core")},9445:e=>{e.exports=require("@mantine/form")},32:e=>{e.exports=require("@mantine/hooks")},1280:e=>{e.exports=require("@mantine/modals")},914:e=>{e.exports=require("@mantine/notifications")},6722:e=>{e.exports=require("@mdx-js/runtime")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},580:e=>{e.exports=require("prop-types")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},727:e=>{e.exports=require("react-syntax-highlighter")},4794:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/styles/prism")},997:e=>{e.exports=require("react/jsx-runtime")},4827:e=>{e.exports=import("@fortaine/fetch-event-source")},3536:e=>{e.exports=import("@mdx-js/mdx")},7834:e=>{e.exports=import("@mdx-js/react")},5611:e=>{e.exports=import("nanoid")},3135:e=>{e.exports=import("react-markdown")},4921:e=>{e.exports=import("rehype-highlight")},9521:e=>{e.exports=import("rehype-katex")},1871:e=>{e.exports=import("rehype-raw")},7984:e=>{e.exports=import("remark-breaks")},6809:e=>{e.exports=import("remark-gfm")},9832:e=>{e.exports=import("remark-math")},9890:e=>{e.exports=import("zustand")},3602:e=>{e.exports=import("zustand/middleware")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[2761,5464,9209,8450,5948,5913,2394,918,9235,1939,249,5641,107],()=>__webpack_exec__(900));module.exports=r})();