var U=Object.defineProperty,b=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var A=(d,u,e)=>u in d?U(d,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[u]=e,T=(d,u)=>{for(var e in u||(u={}))L.call(u,e)&&A(d,e,u[e]);if(j)for(var e of j(u))$.call(u,e)&&A(d,e,u[e]);return d},R=(d,u)=>b(d,z(u));import{_ as q}from"./left_arrow_black.54b43e41.js";import{_ as y}from"./loading.ae9c4f02.js";import{_ as I,j as D}from"./index.3f139752.js";import{i as M,u as S,l as V,m as G,r as C,o as i,q as l,y as n,t,s as c,w as _,A as o,v as m,F as w,C as x,x as E,I as g,E as H,G as J}from"./vendor.1af84381.js";const p=d=>(H("data-v-64383404"),d=d(),J(),d),K={class:"top_search",style:{display:"flex",width:"100vw",height:"50px","align-items":"center"}},O=p(()=>n("div",{style:{"margin-left":"104px","font-size":"18px","text-align":"center"}}," \u6B4C\u624B\u699C\u5355 ",-1)),P=p(()=>n("div",{style:{display:"flex","align-items":"center","justify-content":"center"}},[n("img",{width:"18",src:y,alt:""}),n("span",null,"\u52A0\u8F7D\u4E2D...")],-1)),Q={key:0,class:"time"},W={class:"info"},X=["onClick"],Y={class:"index"},Z={key:0},ee={key:1,class:"rank",style:{color:"red"}},se=p(()=>n("span",{class:"up"},null,-1)),ne={key:2,class:"rank",style:{color:"rgb(22, 202, 247)"}},te=p(()=>n("span",{class:"down"},null,-1)),ae={class:"img_wrapper"},oe={class:"detail"},ie={class:"name"},le={class:"hot"},re=p(()=>n("div",{style:{display:"flex","align-items":"center","justify-content":"center"}},[n("img",{width:"18",src:y,alt:""}),n("span",null,"\u52A0\u8F7D\u4E2D...")],-1)),ue={key:0,class:"time"},de={class:"info"},ce=["onClick"],_e={class:"index"},pe={key:0},fe={key:1,class:"rank",style:{color:"red"}},me=p(()=>n("span",{class:"up"},null,-1)),ge={key:2,class:"rank",style:{color:"rgb(22, 202, 247)"}},he=p(()=>n("span",{class:"down"},null,-1)),ke={class:"img_wrapper"},ve={class:"detail"},Fe={class:"name"},ye={class:"hot"},De=p(()=>n("div",{style:{display:"flex","align-items":"center","justify-content":"center"}},[n("img",{width:"18",src:y,alt:""}),n("span",null,"\u52A0\u8F7D\u4E2D...")],-1)),Ce={key:0,class:"time"},we={class:"info"},xe=["onClick"],Ee={class:"index"},Be={key:0},je={key:1,class:"rank",style:{color:"red"}},Ae=p(()=>n("span",{class:"up"},null,-1)),Te={key:2,class:"rank",style:{color:"rgb(22, 202, 247)"}},Re=p(()=>n("span",{class:"down"},null,-1)),Ne={class:"img_wrapper"},Ue={class:"detail"},be={class:"name"},ze={class:"hot"},Le=p(()=>n("div",{style:{display:"flex","align-items":"center","justify-content":"center"}},[n("img",{width:"18",src:y,alt:""}),n("span",null,"\u52A0\u8F7D\u4E2D...")],-1)),$e={key:0,class:"time"},qe={class:"info"},Ie=["onClick"],Me={class:"index"},Se={key:0},Ve={key:1,class:"rank",style:{color:"red"}},Ge=p(()=>n("span",{class:"up"},null,-1)),He={key:2,class:"rank",style:{color:"rgb(22, 202, 247)"}},Je=p(()=>n("span",{class:"down"},null,-1)),Ke={class:"img_wrapper"},Oe={class:"detail"},Pe={class:"name"},Qe={class:"hot"},We={name:"singer"};function Xe(d){const u=S(),e=V({activeName:1,cn:{loading:!1,finish:!1,error:!1,info:{artists:[],updateTime:0}},en:{loading:!1,finish:!1,error:!1,info:{artists:[],updateTime:0}},ko:{loading:!1,finish:!1,error:!1,info:{artists:[],updateTime:0}},ja:{loading:!1,finish:!1,error:!1,info:{artists:[],updateTime:0}}}),h=async()=>{if(e.activeName==1){if(e.cn.info.artists.length||e.cn.loading)return;e.cn.loading=!0;let f=await D(e.activeName);e.cn.loading=!1,e.cn.info=f.list,e.cn.finish=!0}if(e.activeName==2){if(e.en.info.artists.length||e.en.loading)return;e.en.loading=!0;let f=await D(e.activeName);e.en.loading=!1,e.en.info=f.list,e.en.finish=!0}if(e.activeName==3){if(e.ko.info.artists.length||e.ko.loading)return;e.ko.loading=!0;let f=await D(e.activeName);e.ko.loading=!1,e.ko.info=f.list,e.ko.finish=!0}if(e.activeName==4){if(e.ja.info.artists.length||e.ja.loading)return;e.ja.loading=!0;let f=await D(e.activeName);e.ja.loading=!1,e.ja.info=f.list,e.ja.finish=!0}};return G(()=>e.activeName,()=>{h()}),(f,r)=>{const k=C("van-image"),v=C("van-list"),F=C("van-tab"),N=C("van-tabs");return i(),l("div",null,[n("div",K,[n("div",{class:"back",onClick:r[1]||(r[1]=s=>t(u).go(-1)),style:{display:"flex","align-items":"center","justify-content":"center",width:"10vw","margin-left":"10px"}},[n("img",{onClick:r[0]||(r[0]=s=>t(u).go(-1)),src:q,alt:""})]),O]),c(N,{active:t(e).activeName,"onUpdate:active":r[10]||(r[10]=s=>t(e).activeName=s),sticky:""},{default:_(()=>[c(F,{title:"\u534E\u8BED",name:"1"},{default:_(()=>[c(v,{loading:t(e).cn.loading,"onUpdate:loading":r[2]||(r[2]=s=>t(e).cn.loading=s),error:t(e).cn.error,"onUpdate:error":r[3]||(r[3]=s=>t(e).cn.error=s),"immediate-check":!0,finished:t(e).cn.finish,"error-text":"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D","finished-text":"\u5DF2\u7ECF\u5230\u5E95\u5566",onLoad:h},{loading:_(()=>[P]),default:_(()=>[t(e).cn.info.updateTime?(i(),l("div",Q,"\u66F4\u65B0\u65F6\u95F4\uFF1A"+o(new Date(t(e).cn.info.updateTime).getMonth()+1)+"\u6708"+o(new Date(t(e).cn.info.updateTime).getDate())+"\u65E5",1)):m("",!0),n("div",W,[(i(!0),l(w,null,x(t(e).cn.info.artists,(s,a)=>(i(),l("div",{class:"item",key:s.id,onClick:B=>t(u).push({name:"singerDetail",query:{id:s.id}})},[n("div",Y,[n("span",{class:E({num:!0,red:a<3})},o(a+1),3),s.rank==a?(i(),l("span",Z,"-")):s.lastRank<a?(i(),l("span",ee,[se,g(" "+o(a-s.lastRank),1)])):s.lastRank>a?(i(),l("span",ne,[te,g(" "+o(s.lastRank-a),1)])):m("",!0)]),n("div",ae,[c(k,{"lazy-load":"",radius:"8",class:"img",src:s.picUrl},null,8,["src"])]),n("div",oe,[n("span",ie,o(s.name),1),n("span",le,"\u5F53\u524D\u70ED\u5EA6\uFF1A"+o(s.score),1)])],8,X))),128))])]),_:1},8,["loading","error","finished"])]),_:1}),c(F,{title:"\u6B27\u7F8E",name:"2"},{default:_(()=>[c(v,{loading:t(e).en.loading,"onUpdate:loading":r[4]||(r[4]=s=>t(e).en.loading=s),error:t(e).en.error,"onUpdate:error":r[5]||(r[5]=s=>t(e).en.error=s),"immediate-check":!0,finished:t(e).en.finish,"error-text":"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D","finished-text":"\u5DF2\u7ECF\u5230\u5E95\u5566",onLoad:h},{loading:_(()=>[re]),default:_(()=>[t(e).en.info.updateTime?(i(),l("div",ue,"\u66F4\u65B0\u65F6\u95F4\uFF1A"+o(new Date(t(e).en.info.updateTime).getMonth()+1)+"\u6708"+o(new Date(t(e).en.info.updateTime).getDate())+"\u65E5",1)):m("",!0),n("div",de,[(i(!0),l(w,null,x(t(e).en.info.artists,(s,a)=>(i(),l("div",{class:"item",key:s.id,onClick:B=>t(u).push({name:"singerDetail",query:{id:s.id}})},[n("div",_e,[n("span",{class:E({num:!0,red:a<3})},o(a+1),3),s.rank==a?(i(),l("span",pe,"-")):s.lastRank<a?(i(),l("span",fe,[me,g(" "+o(a-s.lastRank),1)])):s.lastRank>a?(i(),l("span",ge,[he,g(" "+o(s.lastRank-a),1)])):m("",!0)]),n("div",ke,[c(k,{"lazy-load":"",radius:"8",class:"img",src:s.picUrl},null,8,["src"])]),n("div",ve,[n("span",Fe,o(s.name),1),n("span",ye,"\u5F53\u524D\u70ED\u5EA6\uFF1A"+o(s.score),1)])],8,ce))),128))])]),_:1},8,["loading","error","finished"])]),_:1}),c(F,{title:"\u97E9\u56FD",name:"3"},{default:_(()=>[c(v,{loading:t(e).ko.loading,"onUpdate:loading":r[6]||(r[6]=s=>t(e).ko.loading=s),error:t(e).ko.error,"onUpdate:error":r[7]||(r[7]=s=>t(e).ko.error=s),"immediate-check":!0,finished:t(e).ko.finish,"error-text":"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D","finished-text":"\u5DF2\u7ECF\u5230\u5E95\u5566",onLoad:h},{loading:_(()=>[De]),default:_(()=>[t(e).ko.info.updateTime?(i(),l("div",Ce,"\u66F4\u65B0\u65F6\u95F4\uFF1A"+o(new Date(t(e).ko.info.updateTime).getMonth()+1)+"\u6708"+o(new Date(t(e).ko.info.updateTime).getDate())+"\u65E5",1)):m("",!0),n("div",we,[(i(!0),l(w,null,x(t(e).ko.info.artists,(s,a)=>(i(),l("div",{class:"item",key:s.id,onClick:B=>t(u).push({name:"singerDetail",query:{id:s.id}})},[n("div",Ee,[n("span",{class:E({num:!0,red:a<3})},o(a+1),3),s.rank==a?(i(),l("span",Be,"-")):s.lastRank<a?(i(),l("span",je,[Ae,g(" "+o(a-s.lastRank),1)])):s.lastRank>a?(i(),l("span",Te,[Re,g(" "+o(s.lastRank-a),1)])):m("",!0)]),n("div",Ne,[c(k,{"lazy-load":"",radius:"8",class:"img",src:s.picUrl},null,8,["src"])]),n("div",Ue,[n("span",be,o(s.name),1),n("span",ze,"\u5F53\u524D\u70ED\u5EA6\uFF1A"+o(s.score),1)])],8,xe))),128))])]),_:1},8,["loading","error","finished"])]),_:1}),c(F,{title:"\u65E5\u672C",name:"4"},{default:_(()=>[c(v,{loading:t(e).ja.loading,"onUpdate:loading":r[8]||(r[8]=s=>t(e).ja.loading=s),error:t(e).ja.error,"onUpdate:error":r[9]||(r[9]=s=>t(e).ja.error=s),"immediate-check":!0,finished:t(e).ja.finish,"error-text":"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D","finished-text":"\u5DF2\u7ECF\u5230\u5E95\u5566",onLoad:h},{loading:_(()=>[Le]),default:_(()=>[t(e).ja.info.updateTime?(i(),l("div",$e,"\u66F4\u65B0\u65F6\u95F4\uFF1A"+o(new Date(t(e).ja.info.updateTime).getMonth()+1)+"\u6708"+o(new Date(t(e).ja.info.updateTime).getDate())+"\u65E5",1)):m("",!0),n("div",qe,[(i(!0),l(w,null,x(t(e).ja.info.artists,(s,a)=>(i(),l("div",{class:"item",key:s.id,onClick:B=>t(u).push({name:"singerDetail",query:{id:s.id}})},[n("div",Me,[n("span",{class:E({num:!0,red:a<3})},o(a+1),3),s.rank==a?(i(),l("span",Se,"-")):s.lastRank<a?(i(),l("span",Ve,[Ge,g(" "+o(a-s.lastRank),1)])):s.lastRank>a?(i(),l("span",He,[Je,g(" "+o(s.lastRank-a),1)])):m("",!0)]),n("div",Ke,[c(k,{"lazy-load":"",radius:"8",class:"img",src:s.picUrl},null,8,["src"])]),n("div",Oe,[n("span",Pe,o(s.name),1),n("span",Qe,"\u5F53\u524D\u70ED\u5EA6\uFF1A"+o(s.score),1)])],8,Ie))),128))])]),_:1},8,["loading","error","finished"])]),_:1})]),_:1},8,["active"])])}}const Ye=M(R(T({},We),{setup:Xe}));var as=I(Ye,[["__scopeId","data-v-64383404"]]);export{as as default};
