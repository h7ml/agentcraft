(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[958],{918:function(e,t,n){"use strict";n.d(t,{Z:function(){return CopyToClipboard}});var a=n(85893),i=n(67294),s=n(55652),r=n(69876),o=n(95117),l=n(49834),c=n(88198),d=n(93625),u=n(90589),p=n.n(u);function CopyToClipboard(e){let{value:t,content:n,truncate:u,width:h="auto"}=e,m=function(){let{timeout:e=2e3}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,i.useState)(null),[a,s]=(0,i.useState)(!1),[r,o]=(0,i.useState)(null),handleCopyResult=t=>{clearTimeout(r),o(setTimeout(()=>s(!1),e)),s(t)};return{copy:e=>{if("clipboard"in navigator)navigator.clipboard.writeText(e).then(()=>handleCopyResult(!0)).catch(e=>n(e));else{let t=document.createElement("textarea");t.value=e,t.style.position="absolute",t.style.left="-999999px",document.body.prepend(t),t.select();try{document.execCommand("copy")}catch(e){console.error(e)}finally{t.remove(),handleCopyResult(!0)}}},reset:()=>{s(!1),n(null),clearTimeout(r)},error:t,copied:a}}({timeout:500});return(0,a.jsx)(s.u,{label:m.copied?"已复制":"复制",withArrow:!0,position:"right",children:(0,a.jsxs)(r.k,{onClick:()=>m.copy(t),mih:50,style:{width:h},gap:"xs",justify:"flex-start",align:"center",direction:"row",wrap:"nowrap",children:[n?(0,a.jsx)(o.x,{truncate:u,className:p()["copy-to-clipboard-content"],children:n}):null,(0,a.jsx)(l.A,{color:m.copied?"teal":"gray",children:m.copied?(0,a.jsx)(c.Z,{size:"1rem"}):(0,a.jsx)(d.Z,{size:"1rem"})})]})})}},2394:function(e,t,n){"use strict";n.d(t,{Z:function(){return FeatureDescription}});var a=n(85893),i=n(92716),s=n(95117),r=n(64523),o=n(69876),l=n(19236),c=n(91759);function InfoDetail(e){let{detail:t,title:n}=e,[r,{open:o,close:l}]=(0,c.q)(!1);return(0,a.jsx)(a.Fragment,{children:t?(0,a.jsxs)("div",{children:[(0,a.jsx)(i.d,{opened:r,onClose:l,title:n,children:(0,a.jsx)(s.x,{children:t})}),(0,a.jsx)(s.x,{onClick:()=>o(),children:"信息"})]}):null})}function FeatureDescription(e){let{title:t,description:n,detail:i,mt:c,mb:d}=e;return(0,a.jsxs)(r.x,{mt:c||24,mb:d||24,children:[(0,a.jsxs)(o.k,{mih:20,gap:"md",justify:"flex-start",align:"flex-start",direction:"row",wrap:"wrap",children:[(0,a.jsx)(l.D,{order:2,children:t}),(0,a.jsx)(InfoDetail,{title:t,detail:i})]}),n?(0,a.jsx)(s.x,{lineClamp:4,children:n}):null]})}},84222:function(e,t,n){"use strict";n.d(t,{$$:function(){return i},Gv:function(){return s},Ti:function(){return a}});let a=[{label:"文档输出专家",value:'你是领域有文档的专家，能够将文档内容更有价值的展示给用户，在你输出文档的时候尽量以富内容的形式展示，比如\n        你的内容是图片url，你应该输出![image](图片url);\n        你的内容是视频url，你的输出应当是<video width="320" height="240" controls src="视频url"/>;\n        如果你的信息中包含像 <标签名 /> 这类内容，直接输出就好。'},{label:"内容编辑和改写专家",value:"作为一名内容编辑和改写专家，你的主要职责是根据用户的具体要求，对内容进行高效且准确的改写。在工作过程中，你需要主动询问用户关于改写风格和具体要求的细节，并确保你的响应既快速又准确。为了确保改写的准确性，你可能会向用户提出问题以获得更清晰的指导。\n\n        工作流程包括：\n        \n        1.通过初步交谈引导用户提供稿件内容和希望改写成的风格。\n        \n        2.理解用户提供的原稿及改写需求，分析原稿的核心内容和信息。\n        \n        3.按照用户的改写要求进行改写，同时时刻注意不改变原稿的核心内容。\n        \n        4.在整个过程中，你应保持专业、精确、效率高的工作态度，注重细节，尊重原稿的核心信息和作者意图，展现出高度的专业性和责任心。你的目标是确保改写后的稿件满足用户指定的文风和其他要求。"},{label:"剧本和广告脚本创作专家",value:"作为一名剧本和广告脚本创作专家，你的主要职责创作出引人入胜的故事情节和打动人心的广告语句。你需要在限定的时间内，通过文字和对话，将故事或产品的特点有效地传达给观众或读者。\n\n        工作流程包括：\n        \n        1.在开始创作之前，对目标受众、竞争对手和相关市场进行深入的研究。\n        \n        2.了解故事或产品的核心信息，以及希望传达给观众或读者的主要观点。\n        \n        3.根据研究结果，开始在头脑中构建故事或广告的框架，考虑使用哪些视觉元素、音乐和音效，以及如何通过对话和行为来吸引观众或读者。\n        \n        4.在整个过程中，你应保持专业、精确、效率高的工作态度，注重细节。"},{label:"品牌内容分发专家",value:"作为一名品牌内容分发专家，你的主要职责是根据用户的需求，高效地分发和传播品牌相关内容。你的工作涉及主动询问用户关于品牌信息、目标受众和分发渠道的具体要求，并确保对用户的请求作出快速且准确的响应。为了更好地完成内容分发工作，你可能需要向用户提出问题以获得更清晰的内容分发指导。\n\n        工作流程包括：\n        \n        1.通过初步交谈引导用户提供品牌信息、目标受众和分发渠道。\n        \n        2.理解用户提供的信息，分析不同渠道的特点和受众需求。\n        \n        3.按照用户要求进行内容制作和分发，确保内容的吸引力与品牌一致性。"},{label:"意营销文本创作专家",value:"作为创意营销文本创作专家，你的主要任务是根据用户需求创造吸引人的营销文案。在工作中，你需要主动询问用户关于营销活动的目标、风格和特定要求，并确保对用户的青雀做出快速且准确的响应。为了更好地完成文案创作，你可能会向用户提出问题，以获得更清晰的创作指导。\n\n        工作流程包括：\n        \n        1.通过初步交谈引导用户提供营销活动的细节和目标。\n        \n        2.理解用户提供的信息，分析品牌形象和市场需求。\n        \n        3.按照用户要求进行创意思考和文案撰写，确保文案的创新性和吸引力。"},{label:"销售话术优化专家",value:"你是一名专注于销售话术优化的专家，你的主要职责是根据用户的需求和销售目标改进和优化销售话术。这个角色要求你主动询问用户关于销售目标、目标客户和特定销售场景的具体要求，以确保理解准确无误，并在必要时提出问题以获得更清晰的话术优化指导。\n\n        工作流程包括:\n        \n        1.通过初步交谈引导用户提供销售目标和现有话术。\n        \n        2.理解用户提供的信息，分析话术的现状和改进空间。\n        \n        3.根据用户要求对话术进行调整和优化，确保其更有效地吸引和说服客户。若遇到不明确或模糊的优化指令，应主动寻求澄清。\n        \n        4.及时向用户反馈话术优化的结果，并在必要时提出改进建议。"},{label:"定制化解决方案专家",value:"你是一名专注于提供定制化解决方案的专家，你的主要职责是根据客户的具体需求和问题，提供个性化的解决方案。这个角色要求你主动询问用户关于其面临的挑战目标和特定需求的细节，以确保理解准确无误，并在必要时提出问题以获得更清晰的解决方案指导。\n\n        工作流程包括:\n        \n        1.通过初步交谈引导用户提供他们面临的问题和需求。\n        \n        2.理解用户提供的信息，深入分析问题本质和可能的解决途径。\n        \n        3.根据用户需求制定具体、切实可行的解决方案，并确保其创新性和实用性。若遇到不明确或模糊的需求，应主动寻求澄清。\n        \n        4.及时向用户反馈解决方案的制定结果，并在必要时提出改进建议。"},{label:"营销数据分析专家",value:"你是一名专注于营销数据分析的专家，你的主要职责是根据用户的需求收集、分析数据并制作营销数据报表。这个角色要求你主动询问用户关于报表的目的、所害数据类型和特定格式要求，以确保理解准确无误，并在必要时提出问题以获得更清晰的报表制作指导。\n\n        工作流程包括:\n        \n        1.通过初步交谈引导用户提供所需数据和报表目的。\n        \n        2.根据用户需求收集相关数据。\n        \n        3.分析数据并根据用户要求制作报表，确保数据的准确性和报表的清晰性。若遇到不清晰或不完整的数据请求，应主动寻求澄清。\n        \n        4.及时向用户反馈报表制作的结果，并在必要时提出改进建议。"},{label:"品牌营销项目管理专家",value:"你是一名专注于品牌营销项目管理的专家，你的主要职责是协调和管理品牌营销项目，确保项目目标的顺利实现。这个角色要求你主动询问用户关于项目的目标、范围和时间线的详细要求，以确保理解准确无误，并在必要时提出问题以获得更清晰的项目管理指导。\n\n        工作流程包括:\n        \n        1.通过初步交谈引导用户提供项目的基本信息和目标。\n        \n        2.根据用户需求制定项目计划和策略。\n        \n        3.协调团队执行项目，确保项目按计划进行，并对进度和结果进行监控。若遇到模糊或不明确的项目管理指令，应主动寻求澄清。\n        \n        4.及时向用户反馈项目管理的进展和结果，并在必要时提出改进建议。"},{label:"品牌营销团队绩效管理专家",value:"你是一名专注于品牌营销团队绩效管理的专家，你的主要职责是评估和提升团队的工作效率和成果。这个角色要求你主动询问用户关于团队目标、绩效指标和改进需求的详细要求，以确保理解准确无误，并在必要时提出问题以获得更清晰的绩效管理指导工。\n\n        作流程包括:\n        \n        1.通过初步交谈引导用户提供团队的基本信息和目标。\n        \n        2.根据用户需求进行团队绩效评估。\n        \n        3.制定绩效提升计划，并协助执行，确保提高团队的工作效率和成果。若遇到模糊或不明确的绩效管理指令，应主动寻求澄清。\n        \n        4.及时向用户反馈绩效评估的结果，并在必要时提出改进建议。"},{label:"招聘计划制定专家",value:"你是一名专注于招聘计划制定的专家，你的主要职责是根据公司的需求和目标，设计有效的招聘策略和计划。这个角色要求你主动询问用户关于招聘需求、职位描述和目标候选人的详细要求，以确保理解准确无误，并在必要时提出问题以获得更清晰的招聘计划指导。\n\n        工作流程包括：\n        \n        1.通过初步交谈引导用户提供公司的招聘需求和职位信息。\n        \n        2.根据需求制定招聘策略和计划\n        \n        3.协助实施招聘计划，确保吸引合适的候选人。若遇到模糊或不明确的招聘计划指令，应主动寻求澄清。\n        \n        4.及时向用户反馈招聘计划的制定和执行情况，并在必要时提出改进建议。"},{label:"招聘广告撰写专家",value:"你是一名专注于招聘告撰写的专家，你的主要职责是创作吸引人才的招聘广告文案。这个角色要求你主动询问用户关于招聘职位的细节、公司文化和目标候选人的特征，以确保理解准确无误，并在必要时提出问题以获得更清晰的广告撰写指导。\n\n        工作流程包括:\n        \n        1.通过初步交谈引导用户提供职位要求和公司信息。\n        \n        2.根据提供的信息，构思广告内容和框架。\n        \n        3.创作并优化广告文案，确保其吸引目标候选人且符合公司品牌。若遇到模糊或不明确的广告撰写指令，应主动寻求澄清。\n        \n        4.及时向用户反馈广告撰写的结果，并在必要时提出改进建议。"},{label:"规章制度起草专家",value:"你是一名专注于规章制度起草的专家，你的主要职责是根据公司的需求和目标，草拟有效的公司规章制度这个角色要求你主动询问用户关于制度起草的具体目标、公司文化和法律要求，以确保理解准确无误，并在必要时提出问题以获得更清晰的制度起草指导。\n\n        工作流程包括:\n        \n        1.通过初步交谈引导用户提供公司的需求和背景信息。\n        \n        2.根据需求和法律要求，规划制度的框架和内突。\n        \n        3.起草规章制度，并根据反馈进行必要的修订，确保其合法性和有效性。若遇到模糊或不明确的起草指令应主动寻求澄清。\n        \n        4.及时向用户反馈起草的结果，并在必要时提出改进建议。"},{label:"会议与活动策划专家",value:"你是一名专注于会议与活动规划的专家，你的主要职责是设计有效的会议和活动流程，确保活动的顺利进行。这个角色要求你主动询问用户关于会议或活动的目标、规模和特定需求，以确保理解准确无误，并在必要时提出问题以获得更清晰的规划指导。\n\n        工作流程包括:\n        \n        1.通过初步交谈引导用户提供会议或活动的基本信息和目标。\n        \n        2.根据用户需求制定详细的会议或活动流程。\n        \n        3.协助实施流程，并确保活动按计划进行。若遇到模糊或不明确的规划指令，应主动寻求澄清。\n        \n        4.及时向用户反馈规划的结果，并在必要时提出改进建议。"},{label:"企业文化设计专家",value:"你是一名专注于企业文化设计的专家，你的主要职责是帮助公司构建和发展其独特的企业文化。这个角色要求你主动询问用户关于公司的愿景、价值观和员工特性，以确保理解准确无误，并在必要时提出问题以获得更清晰的文化设计指导。\n\n        工作流程包括:\n        \n        1.通过初步交谈引导用户提供公司的基本信息和当前文化状态。\n        \n        2.根据用户需求和公司状况设计企业文化策略。\n        \n        3.执行文化设计计划，并定期评估其效果和员工反馈。若遇到模糊或不明确的设计指令，应主动寻求澄清。\n        \n        4.及时向用户反馈设计的结果，并在必要时提出改进建议。"},{label:"自媒体内容策划专家",value:"你是一名专注于自媒体内容策划的专家，你的主要职责是搭建和管理一个内突丰富、吸引人的自媒体选题库。这个角色要求你主动询问用户关于目标受众、内突方向和主题范围，以确保理解准确无误，并在必要时提出问题以获得更清晰的选题库构建指导。\n\n        工作流程包括:\n        \n        1.通过初步交谈引导用户提供目标受众和内突偏好。\n        \n        2.根据目标受众和趋势策划选题方向。\n        \n        3.创建和不断更新选题库，确保内容的新鲜性和吸引力。若遇到模糊或不明确的指令，应主动寻求澄清。\n        \n        4.及时向用户反馈选题库的构建和维护情况，并在必要时提出改进建议。"}],i='你是领域有文档的专家，能够将文档内容更有价值的展示给用户，在你输出文档的时候尽量以富内容的形式展示，比如\n你的内容是图片url，你应该输出![image](图片url);\n你的内容是视频url，你的输出应当是<video width="320" height="240" controls src="视频url"/>;\n如果你的信息中包含像 <标签名 /> 这类内容，直接输出就好。',s="已知信息：【{context}】。你需要积极，简洁和专业地来回答```中的问题。如果问题和已知信息没有关系，或者问题存在争议性，请说 “抱歉，无法回答该问题”，不允许编造。问题是：```{query}```"},17120:function(e,t,n){"use strict";n.d(t,{Z:function(){return Home}});var a,i,s,r,o=n(85893),l=n(67294),c=n(20966),d=n(41217),u=n(47070),p=n(24087),h=n(2561),m=n(11151),g=n(68253),f=n(22859),x=n(82901),j=n(69876),y=n(21017),w=n(71232),v=n(95117),S=n(17789),b=n(67841),C=n(94173),k=n(93844),T=n(96384);function FoundationModelTab(){return(0,o.jsx)(j.k,{mih:50,gap:"md",justify:"flex-start",align:"flex-start",direction:"column",wrap:"wrap",children:T.Go.map((e,t)=>(0,o.jsxs)(y.Z,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,style:{width:"100%"},children:[(0,o.jsx)(y.Z.Section,{children:(0,o.jsx)("img",{src:e.icon,style:{margin:"10px auto",width:160,height:160,display:"block"},height:160,width:160,alt:e.tag.join("")})}),(0,o.jsxs)(w.Z,{position:"apart",mt:"md",mb:"xs",children:[(0,o.jsx)(v.x,{weight:500,children:e.name}),e.githubLink?(0,o.jsx)("a",{href:e.githubLink,target:"_blank",children:(0,o.jsx)(C.Z,{})}):null]}),(0,o.jsx)("div",{children:e.tag.map(e=>(0,o.jsx)(S.C,{color:"green",variant:"light",mr:4,children:e},"template-".concat(t,"-").concat(e)))}),(0,o.jsx)(v.x,{size:"sm",color:"dimmed",children:e.description}),(0,o.jsx)("a",{target:"_blank",href:e.fcLink,children:(0,o.jsx)(b.z,{variant:"light",color:"yellow",fullWidth:!0,mt:"md",radius:"md",style:{width:"100%"},children:(0,o.jsxs)(j.k,{align:"center",children:["查看模型信息",(0,o.jsx)(k.Z,{})]})})})]},"template-".concat(t)))})}var E=n(95078);n(73150);let N={ModelView:function(){return(0,o.jsx)(FoundationModelTab,{})},Features:function(e){let{data:t,userResponseWithUI:n}=e,a=(t||[{name:"基础模型",preview:"https://img.alicdn.com/imgextra/i1/O1CN01dVgqTD1sMT4RyDXZn_!!6000000005752-0-tps-1024-1024.jpg",description:"可以一键部署千问，Chatglm, llama2等模型，并且提供api服务"},{name:"数据集",description:"支持泛化的文档数据集可以精准问答数据集，支持pdf,html,md等多类型文件，支持单条数据编辑",preview:"https://img.alicdn.com/imgextra/i1/O1CN0136SRFY209ev5A8WvP_!!6000000006807-0-tps-1024-1024.jpg"},{name:"智能体编排",description:"包括提示词，模型，数据集，LLM调用参数等编排，以及工具能力编排（开发中）",preview:"https://img.alicdn.com/imgextra/i2/O1CN010KZtjI1SVSpynpmfm_!!6000000002252-0-tps-1024-1024.jpg"},{name:"生成式UI",description:"支持图片，文本，视频，以及自定义UI的输出",preview:"https://img.alicdn.com/imgextra/i2/O1CN01kyU7F11ZM1zf2b4jK_!!6000000003179-0-tps-1024-1024.jpg"},{name:"客户端交付",description:"支持独立站点web交付，支持接入钉钉机器人等客户端应用，也可以通过微服务网关进行APi交付，交付过程为一引导式的一站式部署",preview:"https://img.alicdn.com/imgextra/i1/O1CN01m5gFMl1HrwVPJkSXQ_!!6000000000812-0-tps-1024-1024.jpg"},{name:"工具集能力",description:"工具能力是Agent感知与连接世界的重要能力，AgentCraft支持在线工具编写，发布管理（开发中）",preview:"https://img.alicdn.com/imgextra/i1/O1CN01yAOhLG1i36A8vp4fQ_!!6000000004356-0-tps-1024-1024.jpg"}]).map(e=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:e.name}),(0,o.jsx)("td",{children:(0,o.jsx)("img",{src:e.preview,style:{width:120,overflow:"hidden"}})}),(0,o.jsx)("td",{children:e.description}),(0,o.jsx)("td",{children:(0,o.jsx)(b.z,{onClick:()=>{console.log(n),n&&n("请详细介绍一下".concat(e.name))},children:"介绍特色"})})]},e.name));return(0,o.jsxs)(E.i,{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{style:{color:"#000"},children:"特色名"}),(0,o.jsx)("th",{style:{color:"#000"},children:"预览图"}),(0,o.jsx)("th",{style:{color:"#000"},children:"特色说明"}),(0,o.jsx)("th",{style:{color:"#000"},children:"操作"})]})}),(0,o.jsx)("tbody",{children:a})]})},Scenes:function(e){let{data:t}=e,n=(t||[{name:"零售导购",preview:"https://img.alicdn.com/imgextra/i2/O1CN01UkVIjE1z2xVjSnvvQ_!!6000000006657-0-tps-1792-1024.jpg",description:"数字人+领域知识智能体能够作为新一代的零售导购服务增强企业竞争力"},{name:"IT/HR 系统智能问答",description:"企业内部 IT/HR 使用手册构建企业领域智能体，企业内部员工可通过该知识库快速解决在 IT/HR 上遇到的问题",preview:"https://img.alicdn.com/imgextra/i1/O1CN01BHtsNp1xmdma5rAPj_!!6000000006486-0-tps-1792-1024.jpg"},{name:"电商平台的搜索和问答系统",description:"商品信息构建商品数据库，消费者可通过检索+问答的方式快速了解商品的详细信息",preview:"https://img.alicdn.com/imgextra/i1/O1CN01I4Uv1525G8bKfA6Zr_!!6000000007498-0-tps-1792-1024.jpg"},{name:"游戏社区自动问答系统",description:"游戏的信息（例如游戏介绍，游戏攻略等）构建社区智能体，可根据该知识库自动回复社区成员提供的问题",preview:"https://img.alicdn.com/imgextra/i1/O1CN01SjByFI1eEJOeOxCnQ_!!6000000003839-0-tps-1792-1024.jpg"},{name:"智能客户聊天机器人",description:"通过与呼叫中心/聊天机器人服务结合，可自动基于企业领域知识智能体就客户提出的问题进行聊天回复",preview:"https://img.alicdn.com/imgextra/i4/O1CN01W1HRn42A7VD46uwG3_!!6000000008156-0-tps-1792-1024.jpg"},{name:"智能教育辅导系统",description:"使用教材和题库构建不同教育阶段的知识库，模拟和辅助老师/家长对孩子进行教学",preview:"https://img.alicdn.com/imgextra/i3/O1CN0185LQPn1JcwlkTO5NU_!!6000000001050-0-tps-1792-1024.jpg"}]).map(e=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:e.name}),(0,o.jsx)("td",{children:(0,o.jsx)("img",{src:e.preview,style:{width:120}})}),(0,o.jsx)("td",{children:e.description})]},e.name));return(0,o.jsxs)(E.i,{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{style:{color:"#000"},children:"场景"}),(0,o.jsx)("th",{style:{color:"#000"},children:"场景介绍"}),(0,o.jsx)("th",{style:{color:"#000"},children:"操作"})]})}),(0,o.jsx)("tbody",{children:n})]})},pre:e=>(0,o.jsx)("div",{...e}),code:e=>{var t;return(0,o.jsx)(x.Z,{textContent:e.children,language:null===(t=e.className)||void 0===t?void 0:t.replace("language-","")})},p:e=>(0,o.jsx)("p",{...e,dir:"auto"}),a:e=>{var t;let n=e.href||"",a=/^\/#/i.test(n),i=a?"_self":null!==(t=e.target)&&void 0!==t?t:"_blank";return(0,o.jsx)("a",{color:"red",...e,target:i})},video:e=>{let{node:t,...n}=e,a={props:{}};try{n.children.map(e=>{e.props&&"source"===e.type&&(a=e)})}catch(e){}return(0,o.jsxs)("video",{controls:!0,...n,children:[(0,o.jsx)("source",{src:a.props.src||"",type:a.props.type||"video/mp4"}),"你的浏览器不支持video标签"]})}};function MdxLayout(e){let{children:t}=e;return(0,o.jsx)("div",{style:{color:"blue"},className:"markdown-body",children:t})}function MDXContainer(e){let{content:t,scope:n={}}=e,[a,i]=(0,l.useState)(null),[s,r]=(0,l.useState)(!1),d=(0,l.useRef)();return(0,l.useEffect)(()=>{let parseMDX=async()=>{let e=null;try{r(!1),await (0,g.D)(t),e=(0,o.jsx)(f.Z,{components:N,scope:n,remarkPlugins:[u.Z,h.Z,p.Z],children:t}),i(e)}catch(e){r(!0),d.current&&clearTimeout(d.current),d.current=setTimeout(()=>{r(!1)},3e3)}};parseMDX()},[t]),(0,o.jsx)(m.Z,{children:(0,o.jsxs)(MdxLayout,{children:[a,s&&(0,o.jsxs)("div",{children:["组件加载中...",(0,o.jsx)(c.a,{})]})]})})}var O=n(47876);(a=s||(s={})).SYSTEM="system",a.USER="user",a.ASSISTANT="assistant",(i=r||(r={}))[i.NOTLABELED=0]="NOTLABELED",i[i.NEUTRAL=2]="NEUTRAL",i[i.POSITIVE=1]="POSITIVE";var L=n(29235),I=n(25872),U=n.n(I);function Home(){let e=(0,L.I1)().currentKnowledgeBase,[t,n]=(0,l.useState)(""),[a,i]=(0,l.useState)(!1),[r,u]=(0,l.useState)([{message:"你好！我是智能体小助手，请问有什么可以帮助您的",sourceIdx:-1,type:s.SYSTEM,showFeedback:!1,liked:!1,disLiked:!1}]),p=(0,l.useRef)(null),h=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=p.current;e.scrollTop=e.scrollHeight},[r]),(0,l.useEffect)(()=>{h.current.focus()},[]);let handleError=e=>{u(t=>[...t,{message:e.message,type:s.ASSISTANT,sourceIdx:-1,showFeedback:!1,liked:!1,disLiked:!1}]),i(!1),n("")},handleSubmit=a=>{if(a.preventDefault(),""===t.trim())return;let o=[...r,{message:t,type:s.USER,sourceIdx:-1,showFeedback:!1,liked:!1,disLiked:!1}];i(!0),u(o);try{let t=JSON.parse(JSON.stringify(o)),a={message:"",type:"assistant",sourceIdx:-1,showFeedback:!1,liked:!1,disLiked:!1};n("");let s=o.map(e=>({role:e.type,content:e.message}));(0,O.dr)({messages:s,config:{stream:!0,max_tokens:1024},onFinish:e=>{i(!1)},onUpdate:(e,n)=>{a.message+=n,u([...t,a])}},e.token)}catch(e){handleError(e)}},userResponseWithUI=t=>{let a=[...r,{message:t,type:s.USER,sourceIdx:-1,showFeedback:!1,liked:!1,disLiked:!1}];i(!0),u(a);try{let s=JSON.parse(JSON.stringify(a)),r={message:"",type:"assistant",sourceIdx:-1,showFeedback:!1,liked:!1,disLiked:!1};n(""),(0,O.dr)({messages:[{role:"user",content:t}],config:{stream:!0,max_tokens:1024},onFinish:e=>{i(!1)},onUpdate:(e,t)=>{r.message+=t,u([...s,r])}},e.token)}catch(e){handleError(e)}};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("main",{className:U().main,children:[(0,o.jsx)("div",{className:U().cloud,children:(0,o.jsx)("div",{ref:p,className:U().messagelist,children:r.map((e,t)=>(0,o.jsxs)("div",{className:e.type===s.USER&&a&&t===r.length-1?U().usermessagewaiting:e.type!==s.USER?U().apimessage:U().usermessage,children:[e.type!==s.USER?(0,o.jsx)("div",{className:U().system_avatar,children:(0,o.jsx)("img",{src:"https://img.alicdn.com/imgextra/i1/O1CN01Ag2hWp1uz3fbGtWqB_!!6000000006107-2-tps-1024-1024.png",style:{width:"100%",height:"100%"}})}):(0,o.jsx)("div",{className:U().user_avatar,children:(0,o.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3538",width:"24",height:"24",children:(0,o.jsx)("path",{d:"M858.5 763.6c-18.9-44.8-46.1-85-80.6-119.5-34.5-34.5-74.7-61.6-119.5-80.6-0.4-0.2-0.8-0.3-1.2-0.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-0.4 0.2-0.8 0.3-1.2 0.5-44.8 18.9-85 46-119.5 80.6-34.5 34.5-61.6 74.7-80.6 119.5C146.9 807.5 137 854 136 901.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c0.1 4.4 3.6 7.8 8 7.8h60c4.5 0 8.1-3.7 8-8.2-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z","p-id":"3539"})})}),(0,o.jsx)("div",{className:U().markdownanswer,children:e.type==s.USER?(0,o.jsx)(d.Z,{textContent:e.message}):(0,o.jsx)(MDXContainer,{content:e.message,scope:{userResponseWithUI}})})]},t))})}),(0,o.jsx)("div",{className:U().center,children:(0,o.jsx)("div",{className:U().cloudform,children:(0,o.jsxs)("form",{style:{width:"100%"},onSubmit:handleSubmit,children:[(0,o.jsx)("textarea",{disabled:a,onKeyDown:e=>{13===e.keyCode&&t?!e.shiftKey&&t&&handleSubmit(e):"Enter"===e.key&&e.preventDefault()},ref:h,autoFocus:!1,rows:1,id:"userInput",name:"userInput",placeholder:a?"等待回复中":"请输入你的问题，如AgentCraft的使用场景有哪些？ ",value:t,onChange:e=>n(e.target.value),className:U().textarea}),(0,o.jsx)("button",{type:"submit",disabled:a,className:U().generatebutton,children:a?(0,o.jsx)(c.a,{mt:-8}):(0,o.jsx)("svg",{viewBox:"0 0 20 20",className:U().svgicon,xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})})})]})})})]})})}},47876:function(e,t,n){"use strict";n.d(t,{dr:function(){return chatStream},Ag:function(){return getChatList},aK:function(){return h}});var a=n(33250),i={Error:{Unauthorized:"无权限"}};let s={cn:i},r=Object.keys(s),o=s[function(){let e=function(e){try{return localStorage.getItem(e)}catch(e){return null}}("lang");if(r.includes(null!=e?e:""))return e;let t=function(){try{return navigator.language.toLowerCase()}catch(e){return"cn"}}();for(let e of r)if(t.includes(e))return e;return"cn"}()];!function merge(e,t){Object.keys(t).forEach(function(n){if(t[n]&&"object"==typeof t[n]){merge(e[n]=e[n]||{},t[n]);return}e[n]=t[n]})}(i,o);var l=n(64529),c=n(86105),d=n(23062),u=n(782),p=n(2393);let h=(0,l.Ue)()((0,u.mW)(e=>({chatList:[],open:!1,loading:!1,isEdit:!1,currentChatItem:{},updateCurrentChatItem:t=>e(e=>({currentChatItem:t})),setEditStatus:t=>e(e=>({isEdit:t})),setLoading:t=>e(e=>({loading:t})),setOpen:t=>e(e=>({open:t})),updateChatList:t=>e(e=>({chatList:t}))})));async function getChatList(e){let t=h.getState(),n=t.updateChatList,a=await (0,p.W)("/api/chat/chatlist?id=".concat(e)),i=a.data;i&&n(i)}function chatStream(e,t){var n;let s=new AbortController;null===(n=e.onController)||void 0===n||n.call(e,s);let r={method:"POST",headers:{"Content-Type":"application/json"},signal:s.signal,body:JSON.stringify(Object.assign({stream:!0},e,{token:t}))},o=setTimeout(()=>s.abort(),c.tb),l="",u=!1,finish=()=>{u||(e.onFinish(l),u=!0)};s.signal.onabort=finish,(0,a.L)("/api/chat",{...r,async onopen(e){var t;clearTimeout(o);let n=e.headers.get("content-type");if(console.log("AgentCraft request response content type: ",n),null==n?void 0:n.startsWith("text/plain"))return l=await e.clone().text(),finish();if(!e.ok||!(null===(t=e.headers.get("content-type"))||void 0===t?void 0:t.startsWith("application/octet-stream"))||200!==e.status){let t=[l],n=await e.clone().text();try{let t=await e.clone().json();n=(0,d.Bs)(t)}catch(e){console.log(e)}return 401===e.status&&t.push(i.Error.Unauthorized),n&&t.push(n),l=t.join("\n\n"),finish()}},onmessage(t){if("[DONE]"===t.data||u)return finish();let n=t.data;try{let t=JSON.parse(n),i=t.choices[0].delta.content;if(i){var a;l+=i,null===(a=e.onUpdate)||void 0===a||a.call(e,l,i)}}catch(e){console.error("[Request] parse error",n,t)}},onclose(){finish()},onerror(t){var n;throw null===(n=e.onError)||void 0===n||n.call(e,t),t},openWhenHidden:!0})}},61494:function(e,t,n){"use strict";n.d(t,{cv:function(){return addDataSet},ln:function(){return getDataSetList},s6:function(){return r},uo:function(){return deleteDataSet}});var a=n(64529),i=n(782),s=n(2393);let r=(0,a.Ue)()((0,i.mW)(e=>({dataSetList:[],open:!1,loading:!1,updateDataSetList:t=>e(e=>({dataSetList:t})),setLoading:t=>e(e=>({loading:t})),setOpen:t=>e(e=>({open:t}))})));async function getDataSetList(){let e=r.getState(),t=e.updateDataSetList,n=await (0,s.W)("/api/dataset/list"),a=n.data;a&&t(a)}async function deleteDataSet(e){return await (0,s.W)("/api/dataset/delete?id=".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})}async function addDataSet(e){return await (0,s.W)("/api/dataset/create",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}},29235:function(e,t,n){"use strict";n.d(t,{CH:function(){return updateKnowledgeBase},Co:function(){return getKnowledgeBaseList},I1:function(){return r},IV:function(){return getKnowledgeBase},Sk:function(){return getAccessUrl},eV:function(){return deleteKnowledgeBase},g$:function(){return refreshToken},uA:function(){return addKnowledgeBase}});var a=n(64529),i=n(782),s=n(2393);let r=(0,a.Ue)()((0,i.mW)(e=>({knowledgeBaseList:[],knowledgeBaseChatList:[],open:!1,chatDrawer:!1,loading:!1,isEdit:!1,accessUrl:{openApiUrl:"",innerApiUrl:""},currentKnowledgeBase:void 0,updateCurrentKnowledgeBase:t=>e(e=>({currentKnowledgeBase:t})),setChatDrawer:t=>e(e=>({chatDrawer:t})),setAccessUrl:t=>e(e=>({accessUrl:t})),setEditStatus:t=>e(e=>({isEdit:t})),setLoading:t=>e(e=>({loading:t})),setOpen:t=>e(e=>({open:t})),updateKnowledgeBaseList:t=>e(e=>({knowledgeBaseList:t}))})));async function getKnowledgeBaseList(e){let t=r.getState(),n=t.updateKnowledgeBaseList,a=await (0,s.W)("/api/knowledgeBase/list?appId=".concat(e)),i=a.data;i&&n(i)}async function getKnowledgeBase(e){let t=await (0,s.W)("/api/knowledgeBase/get?id=".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}});return t.data}async function addKnowledgeBase(e){return await (0,s.W)("/api/knowledgeBase/create",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}async function deleteKnowledgeBase(e){return await (0,s.W)("/api/knowledgeBase/delete?agentId=".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})}async function updateKnowledgeBase(e,t){return await (0,s.W)("/api/knowledgeBase/update?id=".concat(e),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}async function refreshToken(e){return await (0,s.W)("/api/knowledgeBase/token?agentId=".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}})}async function getAccessUrl(){let e=await (0,s.W)("/api/knowledgeBase/getAccessUrl",{method:"GET",headers:{"Content-Type":"application/json"}});return e}},91939:function(e,t,n){"use strict";n.d(t,{$s:function(){return deleteModel},QB:function(){return updateModel},fZ:function(){return getModelList},mS:function(){return addModel},s6:function(){return r}});var a=n(64529),i=n(782),s=n(2393);let r=(0,a.Ue)()((0,i.mW)(e=>({modelList:[],loading:!1,open:!1,isEdit:!1,updateCurrentModel:t=>e(e=>({currentModel:t})),setEditStatus:t=>e(e=>({isEdit:t})),setLoading:t=>e(e=>({loading:t})),setOpen:t=>e(e=>({open:t})),updateModelList:t=>e(e=>({modelList:t}))})));async function getModelList(){let e=r.getState(),t=e.updateModelList,n=await (0,s.W)("/api/model/list"),a=await n.data;a&&t(a)}async function deleteModel(e){return await (0,s.W)("/api/model/delete?id=".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})}async function addModel(e){return await (0,s.W)("/api/model/create",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}async function updateModel(e,t){return await (0,s.W)("/api/model/update?id=".concat(e),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}},13962:function(e,t,n){"use strict";var a,i;n.d(t,{I:function(){return a}}),(i=a||(a={}))[i.QUESTION=1]="QUESTION",i[i.DOCUMENT=2]="DOCUMENT"},23062:function(e,t,n){"use strict";function unicodeDecode(e){let t=e;try{t=JSON.parse(e)}catch(e){console.error("Invalid URI sequence",e)}return t}function prettyObject(e){let t=e;return("string"!=typeof e&&(e=JSON.stringify(e,null,"  ")),"{}"===e)?t.toString():e.startsWith("```json")?e:["```json",e,"```"].join("\n")}n.d(t,{Bs:function(){return prettyObject},pI:function(){return unicodeDecode}})},90589:function(e){e.exports={"copy-to-clipboard-content":"CopyToClipboard_copy-to-clipboard-content__cxI0e"}},33770:function(){},54882:function(){}}]);