"use strict";(()=>{var e={};e.id=5726,e.ids=[5726],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},9648:e=>{e.exports=import("axios")},4730:(e,a,t)=>{t.a(e,async(e,s)=>{try{t.r(a),t.d(a,{config:()=>c,default:()=>l,routeModule:()=>u});var r=t(1802),n=t(7153),o=t(6249),i=t(8246),d=e([i]);i=(d.then?(await d)():d)[0];let l=(0,o.l)(i,"default"),c=(0,o.l)(i,"config"),u=new r.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/dataset/delete",pathname:"/api/dataset/delete",bundlePath:"",filename:""},userland:i});s()}catch(e){s(e)}})},8246:(e,a,t)=>{t.a(e,async(e,s)=>{try{t.r(a),t.d(a,{default:()=>handler});var r=t(15),n=e([r]);async function handler(e,a){let{id:t}=e.query;r.Z.defaults.headers.common.Authorization=e.headers.authorization;let s=await r.Z.delete(`/dataset/${t}`);a.status(s.status).json(s.data)}r=(n.then?(await n)():n)[0],s()}catch(e){s(e)}})},15:(e,a,t)=>{t.a(e,async(e,s)=>{try{t.d(a,{Z:()=>i});var r=t(9648),n=e([r]);r=(n.then?(await n)():n)[0];let o=r.default.create({baseURL:process.env.baseUrl||"",headers:{"Content-Type":"application/json"}});o.interceptors.response.use(e=>Promise.resolve(e),e=>{if(e?.response?.status){console.log("from backend server:",e);let{status:a,data:t}=e.response;return Promise.resolve({status:a,data:{code:a,message:t.detail}})}});let i=o;s()}catch(e){s(e)}})}};var a=require("../../../webpack-api-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),t=a.X(0,[4222],()=>__webpack_exec__(4730));module.exports=t})();