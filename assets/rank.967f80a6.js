var S=Object.defineProperty,T=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var C=(o,s,t)=>s in o?S(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t,x=(o,s)=>{for(var t in s||(s={}))j.call(s,t)&&C(o,t,s[t]);if(y)for(var t of y(s))F.call(s,t)&&C(o,t,s[t]);return o},w=(o,s)=>T(o,b(s));import{_ as L}from"./left_arrow_black.54b43e41.js";import{_ as $,s as A}from"./index.e55cdfeb.js";import{i as E,u as N,l as U,H as V,r as q,o as i,q as n,s as p,w as D,y as e,t as r,v as g,F as f,C as v,A as c,E as R,G as z}from"./vendor.1af84381.js";import{j as G}from"./discover.ebb8655d.js";const B=o=>(R("data-v-49437a49"),o=o(),z(),o),H={class:"navSongList"},M=B(()=>e("img",{src:L,alt:""},null,-1)),J=[M],K=B(()=>e("div",{class:"title"},"\u6392\u884C\u699C",-1)),O={key:0,class:"title"},P={key:1,class:"official"},Q=["onClick"],W={class:"img_wrapper"},X={class:"text"},Y={class:"info"},Z={class:"img_wrapper"},ss={class:"text"},ts={class:"info"},es={key:2,class:"title"},os={class:"other"},as=["onClick"],is={class:"img_wrapper"},ns={name:"rank"};function rs(o){const s=A(),t=N(),l=U({official:[],artistToplist:{},other:[]});return V(async()=>{s.set_load(!0);let h=await G();s.set_load(!1),h.list.map(_=>{_.tracks.length?l.official.push(_):l.other.push(_)}),l.artistToplist=h.artistToplist}),(h,_)=>{const I=q("van-sticky"),m=q("van-image");return i(),n("div",null,[p(I,null,{default:D(()=>[e("div",H,[e("div",{class:"back",onClick:_[0]||(_[0]=a=>r(t).go(-1))},J),K])]),_:1}),r(l).official.length?(i(),n("div",O,"\u5B98\u65B9\u699C")):g("",!0),r(l).official.length?(i(),n("div",P,[(i(!0),n(f,null,v(r(l).official,(a,d)=>(i(),n("div",{class:"official_item",onClick:u=>r(t).push({path:"/songList",query:{id:a.id,type:2}}),key:d},[e("div",W,[p(m,{radius:"8",class:"img",src:a.coverImgUrl},null,8,["src"]),e("div",X,c(a.updateFrequency),1)]),e("div",Y,[(i(!0),n(f,null,v(a.tracks,(u,k)=>(i(),n("span",{key:k},c(k+1)+"."+c(u.first)+"\xA0-\xA0"+c(u.second),1))),128))])],8,Q))),128)),e("div",{class:"official_item",onClick:_[1]||(_[1]=a=>r(t).push({path:"/singer"}))},[e("div",Z,[p(m,{radius:"8",class:"img",src:r(l).artistToplist.coverUrl},null,8,["src"]),e("div",ss,c(r(l).artistToplist.upateFrequency),1)]),e("div",ts,[(i(!0),n(f,null,v(r(l).artistToplist.artists,(a,d)=>(i(),n("span",{key:d},c(d+1)+"."+c(a.first),1))),128))])])])):g("",!0),r(l).official.length?(i(),n("div",es,"\u5176\u4ED6\u699C\u5355")):g("",!0),e("div",os,[(i(!0),n(f,null,v(r(l).other,(a,d)=>(i(),n("div",{class:"other_item",key:d,onClick:u=>r(t).push({path:"/songList",query:{id:a.id,type:2}})},[e("div",is,[p(m,{"lazy-load":"",radius:"8",class:"img",src:a.coverImgUrl},null,8,["src"]),e("span",null,c(a.updateFrequency),1)]),e("span",null,c(a.name),1)],8,as))),128))])])}}const ls=E(w(x({},ns),{setup:rs}));var fs=$(ls,[["__scopeId","data-v-49437a49"]]);export{fs as default};
