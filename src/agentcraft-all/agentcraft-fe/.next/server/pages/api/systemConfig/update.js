"use strict";(()=>{var e={};e.id=3170,e.ids=[3170],e.modules={8439:e=>{e.exports=require("@alicloud/eventbridge20200401")},8113:e=>{e.exports=require("@alicloud/fc-open20210406")},7416:e=>{e.exports=require("@alicloud/fc20230330")},3272:e=>{e.exports=require("@alicloud/openapi-client")},487:e=>{e.exports=require("@alicloud/ram20150501")},78:e=>{e.exports=require("@alicloud/serverless20210924")},319:e=>{e.exports=require("@alicloud/sts20150401")},2151:e=>{e.exports=require("@alicloud/tea-util")},2807:e=>{e.exports=require("@alicloud/vpc20160428")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},5611:e=>{e.exports=import("nanoid")},4043:(e,r,a)=>{a.a(e,async(e,t)=>{try{a.r(r),a.d(r,{config:()=>u,default:()=>l,routeModule:()=>d});var s=a(1802),i=a(7153),o=a(6249),c=a(7795),n=e([c]);c=(n.then?(await n)():n)[0];let l=(0,o.l)(c,"default"),u=(0,o.l)(c,"config"),d=new s.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/systemConfig/update",pathname:"/api/systemConfig/update",bundlePath:"",filename:""},userland:c});t()}catch(e){t(e)}})},7795:(e,r,a)=>{a.a(e,async(e,t)=>{try{a.r(r),a.d(r,{default:()=>handler});var s=a(8723),i=e([s]);async function handler(e,r){let a;let t=e.headers,i=process.env.FC_ACCOUNT_ID||t["x-fc-account-id"],o=process.env.ALIBABA_CLOUD_ACCESS_KEY_ID||t["x-fc-access-key-id"],c=process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET||t["x-fc-access-key-secret"],n=process.env.ALIBABA_CLOUD_SECURITY_TOKEN||t["x-fc-security-token"],l=e.body;o&&(a={accessKeyId:o,accessKeySecret:c,securityToken:n});let u=new s.G(a,i),d=200,p={code:200},_=process.env.beFunctionName||"";try{let e=await u.getFunctionV3(_),r=e?.body||{},a=r.environmentVariables,t=Object.assign({},a,l);t.EMBEDDING_DIM="1024";let s=await u.updateFunctionV3(_,{environmentVariables:t});p.data=s.body}catch(e){d=500,p.code=d,p.error=e.message}console.log(p),r.status(d).json(p)}s=(i.then?(await i)():i)[0],t()}catch(e){t(e)}})}};var r=require("../../../webpack-api-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),a=r.X(0,[4222,8723],()=>__webpack_exec__(4043));module.exports=a})();