"use strict";(()=>{var e={};e.id=8086,e.ids=[8086],e.modules={8439:e=>{e.exports=require("@alicloud/eventbridge20200401")},8113:e=>{e.exports=require("@alicloud/fc-open20210406")},7416:e=>{e.exports=require("@alicloud/fc20230330")},3272:e=>{e.exports=require("@alicloud/openapi-client")},487:e=>{e.exports=require("@alicloud/ram20150501")},78:e=>{e.exports=require("@alicloud/serverless20210924")},319:e=>{e.exports=require("@alicloud/sts20150401")},2151:e=>{e.exports=require("@alicloud/tea-util")},2807:e=>{e.exports=require("@alicloud/vpc20160428")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},5611:e=>{e.exports=import("nanoid")},9167:(e,r,a)=>{a.a(e,async(e,t)=>{try{a.r(r),a.d(r,{config:()=>d,default:()=>n,routeModule:()=>u});var i=a(1802),s=a(7153),l=a(6249),o=a(163),c=e([o]);o=(c.then?(await c)():c)[0];let n=(0,l.l)(o,"default"),d=(0,l.l)(o,"config"),u=new i.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/infra/alibaba-cloud/listApps",pathname:"/api/infra/alibaba-cloud/listApps",bundlePath:"",filename:""},userland:o});t()}catch(e){t(e)}})},163:(e,r,a)=>{a.a(e,async(e,t)=>{try{a.r(r),a.d(r,{default:()=>handler});var i=a(8723),s=e([i]);async function handler(e,r){let a;let t=e.headers,s=process.env.ALIBABA_CLOUD_ACCESS_KEY_ID||t["x-fc-access-key-id"],l=process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET||t["x-fc-access-key-secret"],o=process.env.ALIBABA_CLOUD_SECURITY_TOKEN||t["x-fc-security-token"],{appFilter:c}=e.query;s&&(a={accessKeyId:s,accessKeySecret:l,securityToken:o});let n=new i.G(a),d=200,u={code:200};try{let e=await n.listApplications();u.code=e.statusCode;let r=e.body.result;u.data=r.filter(e=>0===e.name.indexOf(c)||0===e.name.indexOf("AgentCraftApp")&&"AgentCraft_FM"===c)}catch(e){d=500,u.code=d,u.error=e.message}r.status(d).json(u)}i=(s.then?(await s)():s)[0],t()}catch(e){t(e)}})}};var r=require("../../../../webpack-api-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),a=r.X(0,[4222,8723],()=>__webpack_exec__(9167));module.exports=a})();