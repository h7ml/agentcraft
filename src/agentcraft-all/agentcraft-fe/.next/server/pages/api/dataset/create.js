"use strict";(()=>{var e={};e.id=4794,e.ids=[4794],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},9648:e=>{e.exports=import("axios")},295:(e,a,t)=>{t.a(e,async(e,s)=>{try{t.r(a),t.d(a,{config:()=>l,default:()=>c,routeModule:()=>u});var r=t(1802),o=t(7153),n=t(6249),i=t(7724),d=e([i]);i=(d.then?(await d)():d)[0];let c=(0,n.l)(i,"default"),l=(0,n.l)(i,"config"),u=new r.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/dataset/create",pathname:"/api/dataset/create",bundlePath:"",filename:""},userland:i});s()}catch(e){s(e)}})},7724:(e,a,t)=>{t.a(e,async(e,s)=>{try{t.r(a),t.d(a,{default:()=>handler});var r=t(15),o=e([r]);async function handler(e,a){let t=e.body;r.Z.defaults.headers.common.Authorization=e.headers.authorization;let s=await r.Z.post("/dataset/add",t);a.status(s.status).json(s.data)}r=(o.then?(await o)():o)[0],s()}catch(e){s(e)}})},15:(e,a,t)=>{t.a(e,async(e,s)=>{try{t.d(a,{Z:()=>i});var r=t(9648),o=e([r]);r=(o.then?(await o)():o)[0];let n=r.default.create({baseURL:process.env.baseUrl||"",headers:{"Content-Type":"application/json"}});n.interceptors.response.use(e=>Promise.resolve(e),e=>{if(e?.response?.status){console.log("from backend server:",e);let{status:a,data:t}=e.response;return Promise.resolve({status:a,data:{code:a,message:t.detail}})}});let i=n;s()}catch(e){s(e)}})}};var a=require("../../../webpack-api-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),t=a.X(0,[4222],()=>__webpack_exec__(295));module.exports=t})();