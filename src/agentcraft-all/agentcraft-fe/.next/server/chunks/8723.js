"use strict";exports.id=8723,exports.ids=[8723],exports.modules={7354:(e,t,s)=>{var i,n,r;s.d(t,{Iz:()=>c}),function(e){e.DING_TALK="dingtalk",e.WECHAT="wechat"}(i||(i={})),(n||(n={})).CHATGPT_NEXTJS_WEB="chatgpt-next-web",function(e){e[e.AGENT_SERVICE=0]="AGENT_SERVICE",e[e.SERVICE_CONFIG_PREVIEW=1]="SERVICE_CONFIG_PREVIEW",e[e.ROBOT_WEBHOOK=2]="ROBOT_WEBHOOK"}(r||(r={}));let c="AGENTCRAFT_BUS"},4862:(e,t,s)=>{s.d(t,{F:()=>i,n_:()=>r,vR:()=>n}),process.env.FcConsoleAssumeRoleName;let i="AliyunFCServerlessDevsRole",n={Statement:[{Action:"sts:AssumeRole",Effect:"Allow",Principal:{Service:["fc.aliyuncs.com"]}}],Version:"1"},r=["AliyunFCServerlessDevsRolePolicy","AliyunFCDefaultRolePolicy","AliyunFCFullAccess","AliyunNASFullAccess","AliyunVPCFullAccess"]},1165:(e,t,s)=>{s.d(t,{Z:()=>EventbridgeClient});var i=s(8439),n=s.n(i);let EventbridgeClient=class EventbridgeClient extends n(){constructor(e){super(e)}}},1905:(e,t,s)=>{s.a(e,async(e,i)=>{try{s.d(t,{l:()=>ServerlessBridgeEventbridge});var n=s(3272),r=s(5611),c=s(8439),a=s(7354),l=s(2151),o=s(1165),u=e([r]);r=(u.then?(await u)():u)[0];let ServerlessBridgeEventbridge=class ServerlessBridgeEventbridge{constructor(e){this.client=this.createEventbridgeClient(e)}createEventbridgeClient(e){let t=e??{accessKeyId:process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,accessKeySecret:process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET};t.endpoint=`eventbridge-console.${process.env.Region}.aliyuncs.com`;let s=new n.Config(t);return new o.Z(s)}async creatEventRule(e){let{webhook:t,token:s,region:i,functionName:n,uid:o}=e,u=process.env.title||"智能体回答",y={},p=new c.CreateRuleRequestEventTargetsParamList({resourceKey:"URL",value:t,form:"CONSTANT"}),v=new c.CreateRuleRequestEventTargetsParamList({resourceKey:"SecretKey",value:s,form:"CONSTANT"}),A=new c.CreateRuleRequestEventTargetsParamList({resourceKey:"Body",value:'{\n "text":"$.data.responsePayload"\n}',form:"TEMPLATE",template:'{\n   "msgtype": "markdown",\n    "markdown": {\n      "title": "'+u+'",\n      "text": "${text}"\n    }\n}'}),d=new c.CreateRuleRequestEventTargets({id:(0,r.nanoid)(),type:"acs.dingtalk",endpoint:t,pushRetryStrategy:"BACKOFF_RETRY",paramList:[p,v,A]}),w=new c.CreateRuleRequest({eventBusName:a.Iz,description:"【勿删】AIGC服务跟钉钉融合",ruleName:`aigc_${(0,r.nanoid)()}`,filterPattern:`{
                "data": {
                  "requestContext": {
                    "functionArn": ["acs:fc:${i}:${o}:functions/${n}"]
                  }
                }
              }`,eventTargets:[d]}),S=new l.RuntimeOptions({});try{y=await this.client.createRuleWithOptions(w,S)}catch(e){console.log(e)}return y}async createEventBus(e={EventBusName:a.Iz,Description:"【勿删】AIGC服务"}){let t=new c.CreateEventBusRequest({eventBusName:e.EventBusName,descrption:e.Description}),s=new l.RuntimeOptions({});return await this.client.createEventBusWithOptions(t,s)}async getEventBus(e=a.Iz){let t={},s=new c.GetEventBusRequest({eventBusName:e}),i=new l.RuntimeOptions({});try{t=await this.client.getEventBusWithOptions(s,i)}catch(e){console.log(e)}return t}};i()}catch(e){i(e)}})},3280:(e,t,s)=>{s.d(t,{Zn:()=>ServerlessBridgeFc,St:()=>ServerlessBridgeFcV3,Mb:()=>ServerlessBridgeServerlessDevs});var i=s(3272),n=s(78),r=s.n(n),c=s(7416),a=s.n(c),l=s(2151),o=s.n(l),u=s(8113),y=s.n(u);let ServerlessDevsClient=class ServerlessDevsClient extends r(){constructor(e){super(e)}};let FcClient=class FcClient extends y(){constructor(e){super(e)}async getOrCreateAppWorkSpace(){}};let FcClientV3=class FcClientV3 extends a(){constructor(e){super(e)}};let ServerlessBridgeServerlessDevs=class ServerlessBridgeServerlessDevs{constructor(e){this.client=this.createServerlessDevsClient(e)}createServerlessDevsClient(e){let t=e??{accessKeyId:process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,accessKeySecret:process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET};t.endpoint="serverless-dualstack.cn-hangzhou.aliyuncs.com";let s=new i.Config(t);return new ServerlessDevsClient(s)}async createApplication(e){let t=new n.CreateApplicationRequest(e),s=await this.client.createApplication(t);return s}async deleteApplication(e){let t=await this.client.deleteApplication(e);return t}async getApplication(e){let t=new l.RuntimeOptions({ReadTimeout:6e4});return await this.client.getApplicationWithOptions(e,{},t)}async listApplications(){let e=new n.ListApplicationsRequest({}),t=await this.client.listApplications(e);return t}};let ServerlessBridgeFc=class ServerlessBridgeFc{constructor(e,t){this.client=this.createFcClient(e,t)}createFcClient(e,t){let s=e??{accessKeyId:process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,accessKeySecret:process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET};s.endpoint=`${t}.${process.env.Region}.fc.aliyuncs.com`;let n=new i.Config(s);return new FcClient(n)}async invokeFunction(e,t){let s=new u.InvokeFunctionHeaders({}),i=new u.InvokeFunctionRequest({body:o().toBytes(JSON.stringify(t))}),n=new l.RuntimeOptions({});return await this.client.invokeFunctionWithOptions(e.serviceName,e.functionName,i,s,n)}async listFunctions(e){let t=new u.ListFunctionsHeaders({}),s=new u.ListFunctionsRequest(e),i=new l.RuntimeOptions({});return await this.client.listFunctionsWithOptions("",s,t,i)}async updateFunction(e){let t=new u.UpdateFunctionHeaders({}),s=e.environmentVariables,i=new u.UpdateFunctionRequest({environmentVariables:s}),n=new l.RuntimeOptions({});return await this.client.updateFunctionWithOptions(e.serviceName,e.functionName,i,t,n)}async getService(e){let t=new u.GetServiceHeaders({}),s=new u.GetServiceRequest({}),i=new l.RuntimeOptions({});return await this.client.getServiceWithOptions(e.serviceName,s,t,i)}async updateService(e,t){let s=new u.UpdateServiceHeaders({}),i=new u.VPCConfig(t.vpcConfig),n=new u.TracingConfig(t.tracingConfig),r=new u.UpdateServiceRequest({tracingConfig:n,vpcConfig:i}),c=new l.RuntimeOptions({});return await this.client.updateServiceWithOptions(e,r,s,c)}async getFunction(e){let t=new i.Params({action:"GetFunction",version:"2021-04-06",protocol:"HTTPS",method:"GET",authType:"AK",style:"FC",pathname:`/2021-04-06/services/${e.serviceName}/functions/${e.functionName}`,reqBodyType:"json",bodyType:"json"}),s=new l.RuntimeOptions({}),n=new i.OpenApiRequest({});return await this.client.callApi(t,n,s)}};let ServerlessBridgeFcV3=class ServerlessBridgeFcV3{constructor(e,t){this.client=this.createFcClient(e,t)}createFcClient(e,t){let s=e??{accessKeyId:process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,accessKeySecret:process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET};s.endpoint=`${t}.${process.env.Region}.fc.aliyuncs.com`;let n=new i.Config(s);return new FcClientV3(n)}async getFunction(e){let t=new c.GetFunctionRequest({}),s=new l.RuntimeOptions({});return await this.client.getFunctionWithOptions(e,t,{},s)}async updateFunction(e,t){let s=new c.UpdateFunctionInput(t),i=new c.UpdateFunctionRequest({body:s}),n=new l.RuntimeOptions({});return await this.client.updateFunctionWithOptions(e,i,{},n)}async putAsyncInvokeConfig(e,t){let s=new c.PutAsyncInvokeConfigRequest({body:t}),i=new l.RuntimeOptions({});return await this.client.putAsyncInvokeConfigWithOptions(e,s,{},i)}}},7769:(e,t,s)=>{s.d(t,{l:()=>ServerlessBridgeRam});var i=s(3272),n=s(2151),r=s(487),c=s.n(r);let RamClient=class RamClient extends c(){constructor(e){super(e)}};let ServerlessBridgeRam=class ServerlessBridgeRam{constructor(e){this.client=this.createRameClient(e)}createRameClient(e){let t=e??{accessKeyId:process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,accessKeySecret:process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET};t.endpoint="ram.aliyuncs.com";let s=new i.Config(t);return new RamClient(s)}async createUser(e){let t=new r.CreateUserRequest(e);await this.client.createUser(t)}async getRole(e){let t=new r.GetRoleRequest({roleName:e}),s=new n.RuntimeOptions({}),i=await this.client.getRoleWithOptions(t,s);return i.body}async getUser(e){try{let t=new r.GetUserRequest({userName:e}),s=new n.RuntimeOptions({}),i=await this.client.getUserWithOptions(t,s);return i.body}catch(e){return{error:e}}}async deleteAccessKey(e,t){let s=new r.DeleteAccessKeyRequest({userAccessKeyId:t,userName:e}),i=new n.RuntimeOptions({}),c=await this.client.deleteAccessKeyWithOptions(s,i);return c.body}async createAccessKey(e){let t=new r.CreateAccessKeyRequest({userName:e}),s=await this.client.createAccessKey(t);return s.body}async listAccessKeys(e){try{let t=new r.ListAccessKeysRequest({userName:e}),s=new n.RuntimeOptions({}),i=await this.client.listAccessKeysWithOptions(t,s);return i.body?.accessKeys.accessKey}catch(e){return[]}}async createRole(e){let t=new r.CreateRoleRequest(e),s=new n.RuntimeOptions({}),i=await this.client.createRoleWithOptions(t,s);return i.body}async attactRolePolicy(e){let t=new r.AttachPolicyToRoleRequest(e),s=new n.RuntimeOptions,i=await this.client.attachPolicyToRoleWithOptions(t,s);return i.body}async attachPolicyToUser(e){try{let t=new r.AttachPolicyToUserRequest(e),s=new n.RuntimeOptions({}),i=await this.client.attachPolicyToUserWithOptions(t,s);return i.body}catch(e){return{error:e}}}async detachPolicyFromUser(e){try{let t=new r.DetachPolicyFromUserRequest(e),s=new n.RuntimeOptions({}),i=await this.client.detachPolicyFromUserWithOptions(t,s);return i.body}catch(e){return{error:e}}}async createPolicy(e){try{let t=new r.CreatePolicyRequest(e),s=new n.RuntimeOptions({});return await this.client.createPolicyWithOptions(t,s)}catch(e){return{error:e}}}}},4922:(e,t,s)=>{s.d(t,{w:()=>ServerlessBridgeSts});var i=s(3272),n=s(319),r=s.n(n);let StsClient=class StsClient extends r(){constructor(e){super(e)}};let ServerlessBridgeSts=class ServerlessBridgeSts{constructor(e){this.client=this.createStsClient(e)}createStsClient(e){let t=e??{accessKeyId:process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,accessKeySecret:process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET};t.endpoint=`sts.${process.env.Region}.aliyuncs.com`;let s=new i.Config(t);return new StsClient(s)}async assumeRole(e){e.roleArn="";let t=new n.AssumeRoleRequest(e),s=await this.client.assumeRole(t);return s.body}async getCallerIdentity(){return await this.client.getCallerIdentity()}async assumeRoleWithSAML(){}}},6034:(e,t,s)=>{s.d(t,{o:()=>ServerlessBridgeVpc});var i=s(3272),n=s(2807),r=s.n(n),c=s(2151);let VpcClient=class VpcClient extends r(){constructor(e){super(e)}};let ServerlessBridgeVpc=class ServerlessBridgeVpc{constructor(e){this.client=this.createVpcClient(e)}createVpcClient(e){let t=e??{accessKeyId:process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,accessKeySecret:process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET};t.endpoint="vpc.aliyuncs.com";let s=new i.Config(t);return new VpcClient(s)}describeVpcs({vpcId:e,regionId:t}){let s=new n.DescribeVpcsRequest({regionId:t,vpcId:e}),i=new c.RuntimeOptions({});return this.client.describeVpcsWithOptions(s,i)}async createVSwitch(e){let t=new n.CreateVSwitchRequest(e),s=new c.RuntimeOptions({});return await this.client.createVSwitchWithOptions(t,s)}}},8723:(e,t,s)=>{s.a(e,async(e,i)=>{try{s.d(t,{G:()=>ServerlessBridgeService});var n=s(3280),r=s(7769),c=s(4922),a=s(6034),l=s(1905),o=s(4862),u=e([l]);l=(u.then?(await u)():u)[0];let ServerlessBridgeService=class ServerlessBridgeService{constructor(e,t){this.config=e,this.serverlessBridgeRam=new r.l(e),this.serverlessBridgeSts=new c.w(e),this.serverlessBridgeServerlessDevs=new n.Mb(e),this.serverlessBridgeFc=new n.Zn(e,t),this.serverlessBridgeVpc=new a.o(e),this.serverlessBridgeFcV3=new n.St(e,t),this.serverlessBridgeEb=new l.l(e)}getServerlessBridgeRam(){return this.serverlessBridgeRam}getServerlessBridgeSts(){return this.serverlessBridgeSts}getServerlessBridgeVpc(){return this.serverlessBridgeVpc}getServerlessBridgeFc(e,t){return new n.Zn(t,e)}getServerlessBridgeFcV3(e,t){return new n.St(t,e)}getServerlessBridgeServerlessDevs(){return this.serverlessBridgeServerlessDevs}getServerlessSubBridgeServerlessDevs(e){return new n.Mb(e)}async getMainOrCreateAccountRole(){try{let e=this.getServerlessBridgeRam(),t=await e.getRole(o.F);return t}catch(e){await this.createServerlessDevsRoleAndAttactPolicy()}}async createServerlessDevsRoleAndAttactPolicy(){let e=this.getServerlessBridgeRam();for(let t of(await e.createRole({roleName:o.F,description:"created by serverless bridge",assumeRolePolicyDocument:o.vR}),o.n_))await e.attactRolePolicy({policyType:"System",policyName:t,roleName:o.F})}async attachServerlessDevsPolicyToUser(e){try{let t=this.getServerlessBridgeRam(),s={};return s.AliyunRAMFullAccess=await t.attachPolicyToUser({policyType:"System",policyName:"AliyunRAMFullAccess",userName:e}),s.AliyunSTSAssumeRoleAccess=await t.attachPolicyToUser({policyType:"System",policyName:"AliyunSTSAssumeRoleAccess",userName:e}),s.AliyunFCDefaultRolePolicy=await t.attachPolicyToUser({policyType:"System",policyName:"AliyunFCDefaultRolePolicy",userName:e}),s.AliyunFCServerlessDevsRolePolicy=await t.attachPolicyToUser({policyType:"System",policyName:"AliyunFCServerlessDevsRolePolicy",userName:e}),s.AliyunFCFullAccess=await t.attachPolicyToUser({policyType:"System",policyName:"AliyunFCFullAccess",userName:e}),s.AliyunVPCFullAccess=await t.attachPolicyToUser({policyType:"System",policyName:"AliyunVPCFullAccess",userName:e}),s.AliyunNASFullAccess=await t.attachPolicyToUser({policyType:"System",policyName:"AliyunNASFullAccess",userName:e}),s}catch(e){throw e}}async reAttachSubAccountPolicy(e,t){let s=`{
      "Version": "1",
      "Statement": [
        {
          "Action": "ram:ListPoliciesForUser",
          "Effect": "Allow",
          "Resource": "*"
        },
        {
          "Action": [
            "fc:GetService",
            "fc:ListServices",
            "fc:GetResourceTags"
          ],
          "Effect": "Allow",
          "Resource": "acs:fc:${t}:*:services/${e}-service*"
        },
        {
          "Action": "fc:ListFunctions",
          "Effect": "Allow",
          "Resource": "acs:fc:${t}:*:services/${e}-service*/functions/*"
        },
        {
          "Action": [
            "fc:ListInstances",
            "fc:UpdateFunction",
            "fc:GetFunction",
            "fc:GetFunctionCode",
            "fc:ListFunctions",
            "fc:InvokeFunction",
            "fc:GrantTempCodeBucketPermission"
          ],
          "Effect": "Allow",
          "Resource": "acs:fc:${t}:*:services/${e}-service*/functions/*"
        }
      ]
    }`,i=`${e}-customer-policy`;return await this.serverlessBridgeRam.createPolicy({policyName:`${e}-customer-policy`,description:"created by serverless-bridge dont remove",policyDocument:s}),await this.serverlessBridgeRam.attachPolicyToUser({policyType:"Custom",policyName:i,userName:e})}async detachServerlessDevsPolicyFromUser(e){let t=this.getServerlessBridgeRam();await t.detachPolicyFromUser({policyType:"System",policyName:"AliyunRAMFullAccess",userName:e}),await t.detachPolicyFromUser({policyType:"System",policyName:"AliyunSTSAssumeRoleAccess",userName:e}),await t.detachPolicyFromUser({policyType:"System",policyName:"AliyunFCDefaultRolePolicy",userName:e}),await t.detachPolicyFromUser({policyType:"System",policyName:"AliyunFCServerlessDevsRolePolicy",userName:e}),await t.detachPolicyFromUser({policyType:"System",policyName:"AliyunFCFullAccess",userName:e}),await t.detachPolicyFromUser({policyType:"System",policyName:"AliyunVPCFullAccess",userName:e}),await t.detachPolicyFromUser({policyType:"System",policyName:"AliyunNASFullAccess",userName:e})}async deleteSubAccountAccessKey(e,t){try{let s=this.getServerlessBridgeRam(),i=await s.deleteAccessKey(e,t);return i}catch(e){throw e}}async createSubAccountAccessKey(e){try{let t=this.getServerlessBridgeRam(),s=await t.listAccessKeys(e);if(2===s.length){let i=s[0].accessKeyId;await t.deleteAccessKey(e,i)}let i=await t.createAccessKey(e);return i}catch(e){throw e}}async getOrCreateSubAccount(e){try{let t=this.getServerlessBridgeRam(),s=await t.getUser(e);return s.error&&(s=await t.createUser({userName:e})),s}catch(e){throw e}}async createSubAccountApplication(e,t,s){try{let i=this.getServerlessSubBridgeServerlessDevs({accessKeyId:e,accessKeySecret:t}),n=await i.createApplication(s);return n}catch(e){throw e}}async deleteApplication(e){let t=this.getServerlessBridgeServerlessDevs();return await t.deleteApplication(e)}async createMainAccountApplication(e){let t=this.getServerlessBridgeServerlessDevs();return await t.createApplication(e)}async getApplication(e){let t=this.getServerlessBridgeServerlessDevs();return await t.getApplication(e)}async listApplications(){let e=this.getServerlessBridgeServerlessDevs();return await e.listApplications()}async subAccountAssumeRole(e){let t=this.getServerlessBridgeSts();return await t.assumeRole(e)}async invokeFunction(e,t){return await this.serverlessBridgeFc.invokeFunction(e,t)}async listFunctions(e){return await this.serverlessBridgeFc.listFunctions(e)}async updateFunction(e){return await this.serverlessBridgeFc.updateFunction(e)}async getFunction(e){return await this.serverlessBridgeFc.getFunction(e)}async getFunctionV3(e){return await this.serverlessBridgeFcV3.getFunction(e)}async updateFunctionV3(e,t){return await this.serverlessBridgeFcV3.updateFunction(e,t)}async getService(e){return await this.serverlessBridgeFc.getService(e)}async updateService(e,t){return await this.serverlessBridgeFc.updateService(e,t)}async describeVpcs(e){return await this.serverlessBridgeVpc.describeVpcs(e)}async createVSwitch(e){return await this.serverlessBridgeVpc.createVSwitch(e)}async createEventBus(e){return await this.serverlessBridgeEb.createEventBus(e)}async getEventBus(e){return await this.serverlessBridgeEb.getEventBus(e)}async creatEventRule(e){return await this.serverlessBridgeEb.creatEventRule(e)}};i()}catch(e){i(e)}})}};