var Q=Object.defineProperty,W=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var I=(l,_,p)=>_ in l?Q(l,_,{enumerable:!0,configurable:!0,writable:!0,value:p}):l[_]=p,V=(l,_)=>{for(var p in _||(_={}))Y.call(_,p)&&I(l,p,_[p]);if(U)for(var p of U(_))Z.call(_,p)&&I(l,p,_[p]);return l},$=(l,_)=>W(l,X(_));import{b as g,i as tt,u as et,l as ot,H as st,m as at,r as y,o as i,q as n,y as e,t as a,s as c,w as f,A as r,v as u,F as b,C as T,J as it,O as nt,x as B,I as j,E as rt,G as lt,T as dt}from"./vendor.1af84381.js";import{_ as ut}from"./left_arrow.037609f2.js";import{c as A,b as w,_ as P,a as E}from"./commentText.907757a7.js";import{_ as ct}from"./sub.f0b346da.js";import{_ as _t}from"./share.56451215.js";import{_ as pt}from"./play_white.b19edd9c.js";import{_ as q}from"./loading.ae9c4f02.js";import{_ as vt,s as mt,d as G,f as M}from"./index.e55cdfeb.js";import{n as C,s as x,t as ft}from"./num.de8f9d34.js";function ht(l){return g.post(`/user/detail?uid=${l}`)}function gt(l){return g.get(`/video/url?id=${l}`)}function yt(l){return g.get(`/video/detail?id=${l}`)}function Ct(l){return g.get(`/related/allvideo?id=${l}`)}function kt(l){return g.get(`/mv/url?id=${l}`)}function Ft(l){return g.get(`/mv/detail?mvid=${l}`)}function bt(l){return g.get(`/artist/detail?id=${l}`)}const v=l=>(rt("data-v-26a0a908"),l=l(),lt(),l),Tt={class:"nav"},wt={class:"back"},xt=["src"],Dt={class:"info"},Bt={class:"author"},At={class:"img"},Et={class:"detail"},Lt={class:"name"},Rt={key:0,class:"fan"},Nt=v(()=>e("div",{class:"look"},"+ \u5173\u6CE8",-1)),Ut={class:"vid_detail"},It={class:"title"},Vt={class:"vid_count"},$t={class:"playTime"},jt={key:0,class:"publishTime"},Pt={key:1,class:"publishTime"},qt={class:"des"},Gt={class:"count"},Mt={key:0,class:"count_item"},St=v(()=>e("img",{src:w,alt:""},null,-1)),zt={class:"count_item"},Ht=v(()=>e("img",{src:ct,alt:""},null,-1)),Jt={class:"count_item"},Ot=v(()=>e("img",{src:_t,alt:""},null,-1)),Kt={class:"tag"},Qt={class:"related"},Wt=["onClick"],Xt={class:"left"},Yt=v(()=>e("img",{src:pt,alt:""},null,-1)),Zt={class:"info"},te={class:"name"},ee=v(()=>e("div",{style:{display:"flex","align-items":"center","justify-content":"center"}},[e("img",{width:"18",src:q,alt:""}),e("span",null,"\u52A0\u8F7D\u4E2D...")],-1)),oe={class:"comment_choose"},se=v(()=>e("div",{class:"title"},"\u8BC4\u8BBA\u533A",-1)),ae={class:"choose"},ie={class:"comment_area"},ne={class:"avatar"},re={class:"info"},le={class:"top"},de={class:"top_left"},ue={class:"name"},ce={key:0,style:{display:"flex","align-items":"center"}},_e=v(()=>e("img",{src:P,alt:""},null,-1)),pe={key:0,class:"level"},ve={key:1,class:"level"},me={key:2,class:"level"},fe={key:3,class:"level"},he={key:4,class:"level"},ge={key:5,class:"level"},ye={class:"time"},Ce={class:"time"},ke={key:0,style:{margin:"0 2px"}},Fe={key:1,class:"tag"},be={class:"like_count"},Te={class:"count"},we={key:0,src:E,alt:""},xe={key:1,src:w,alt:""},De=["onClick"],Be=v(()=>e("div",{style:{display:"flex","align-items":"center","justify-content":"center"}},[e("img",{width:"18",src:q,alt:""}),e("span",null,"\u52A0\u8F7D\u4E2D...")],-1)),Ae={class:"floor"},Ee={class:"reply_count"},Le={class:"comment_item floor_top"},Re={class:"avatar"},Ne={class:"info"},Ue={class:"top"},Ie={class:"top_left"},Ve={class:"name"},$e={class:"time"},je={class:"time"},Pe={class:"like_count"},qe={class:"count"},Ge={key:0,src:E,alt:""},Me={key:1,src:w,alt:""},Se=v(()=>e("div",{class:"all_reply"},"\u5168\u90E8\u56DE\u590D",-1)),ze={class:"avatar"},He={class:"info"},Je={class:"top"},Oe={class:"top_left"},Ke={class:"name"},Qe={key:0,style:{display:"flex","align-items":"center"}},We=v(()=>e("img",{src:P,alt:""},null,-1)),Xe={key:0,class:"level"},Ye={key:1,class:"level"},Ze={key:2,class:"level"},to={key:3,class:"level"},eo={key:4,class:"level"},oo={key:5,class:"level"},so={class:"time"},ao={class:"time"},io={class:"like_count"},no={class:"count"},ro={key:0,src:E,alt:""},lo={key:1,src:w,alt:""},uo={key:0,class:"beReplied_item"},co={class:"beReplied_name"},_o={key:0,class:"beReplied_content"},po={key:1,class:"beReplied_content"},vo={name:"vid"};function mo(l){const _=mt(),p=et(),h=p.currentRoute.value.query.vid,t=ot({vid:"",type:5,activeName:"1",url:"",followed:!1,userId:0,fans:0,nickname:"",avatarUrl:"",identityIconUrl:"",title:"",description:"",durationms:0,playTime:0,praisedCount:0,commentCount:0,shareCount:0,subscribeCount:0,publishTime:0,videoGroup:[],videoRelated:[],commentTotal:0,pageNo:1,floorPageNo:1,sortType:99,sortTypeName:"",sortTypeList:[],cursor:"",arr:[],floorArr:[],floorTopComment:{user:{avatarUrl:""}},floorLoading:!1,floorError:!1,floorFinish:!1,showFloor:!1,imgloading:!0,arrloading:!0,requestLoading:!1,error:!1,finish:!1,haveFirstFloorPop:!1});st(async()=>{Number.isNaN(Number(h))?t.type=5:t.type=1,t.vid=h,t.arrloading=!0;let o=await G(h,t.type,t.pageNo,20,t.sortType,t.cursor);if(t.arrloading=!1,o.code==400){t.error=!0;return}t.commentCount=o.data.totalCount,t.arr=o.data.comments,o.data.cursor&&(t.cursor=o.data.cursor),o.data.sortTypeList.forEach((d,m)=>{t.sortTypeList.push({text:d.sortTypeName,value:d.sortType})}),t.pageNo+=1,o.data.hasMore||(t.finish=!0)}),at(()=>t.vid,(o,d)=>{t.url="",p.replace({name:"vid",query:{vid:o}}),S()});const S=async()=>{t.videoGroup.splice(0);let o;t.type==5&&(o=await yt(t.vid),t.vid=o.data.vid,t.followed=o.data.creator.followed,t.nickname=o.data.creator.nickname,t.userId=o.data.creator.userId,t.avatarUrl=o.data.creator.avatarUrl,t.identityIconUrl=o.data.creator.avatarDetail?o.data.creator.avatarDetail.identityIconUrl:"",t.title=o.data.title,t.description=o.data.description,t.durationms=o.data.durationms,t.playTime=o.data.playTime,t.praisedCount=o.data.praisedCount,t.shareCount=o.data.shareCount,t.subscribeCount=o.data.subscribeCount,t.publishTime=o.data.publishTime,t.videoGroup=o.data.videoGroup),t.type==1&&(o=await Ft(t.vid),t.url=o.data.url,t.vid=o.data.id,t.followed=o.data.artists[0].followed,t.nickname=o.data.artistName,t.userId=o.data.artistId,t.title=o.data.briefDesc,t.description=o.data.desc,t.durationms=o.data.duration,t.playTime=o.data.playCount,t.praisedCount=o.data.praisedCount||0,t.commentCount=o.data.commentCount,t.shareCount=o.data.shareCount,t.subscribeCount=o.data.subCount,t.publishTime=o.data.publishTime,t.videoGroup=o.data.videoGroup),t.type==5&&(o=await gt(t.vid),t.url=o.urls[0].url,o.urls[0].needPay&&dt("\u5F53\u524D\u89C6\u9891\u9700\u4ED8\u8D39\u89C2\u770B"),o=await ht(t.userId),t.fans=o.profile.followeds),t.type==1&&(o=await kt(t.vid),t.url=o.data.url,o=await bt(t.userId),t.avatarUrl=o.data.artist.cover),o=await Ct(t.vid),t.videoRelated=o.data},z=async(o,d)=>{if(console.log("\u5F39\u51FA\u697C\u5C42"),t.floorTopComment=o,t.floorLoading=!0,_.set_floor_comment(!0),t.floorArr=[],t.floorFinish=!1,t.floorPageNo=0,t.haveFirstFloorPop){let m=await M(h,d,t.type,t.floorPageNo);if(t.floorLoading=!1,m.code==400){t.floorError=!0;return}t.floorArr=m.data.comments,t.floorArr.length&&(t.floorPageNo=t.floorArr[t.floorArr.length-1].time),m.data.hasMore||(t.floorFinish=!0)}},H=async()=>{t.floorError=!1,t.floorLoading=!0,t.haveFirstFloorPop||(t.haveFirstFloorPop=!0);let o=await M(h,t.floorTopComment.commentId,t.type,t.floorPageNo);if(t.floorLoading=!1,o.code==400){t.floorError=!0;return}t.floorArr=t.floorArr.concat(o.data.comments),t.floorLoading=!1,t.floorArr.length&&(t.floorPageNo=t.floorArr[t.floorArr.length-1].time),o.data.hasMore||(t.floorFinish=!0)},L=async()=>{t.error=!1,t.requestLoading=!0;let o=await G(h,t.type,t.pageNo,20,t.sortType,t.cursor);if(t.arrloading=!1,t.requestLoading=!1,o.code==400){t.error=!0;return}t.commentCount=o.data.totalCount,t.cursor=o.data.cursor,t.arr=t.arr.concat(o.data.comments),t.arrloading=!1,t.pageNo+=1,(!o.data.hasMore||t.arr.length>=o.data.totalCount)&&(t.finish=!0)},D=async o=>{t.sortType=o,t.finish=!1,t.pageNo=1,t.arr=[],t.cursor="",L()};return(o,d)=>{const m=y("van-image"),R=y("van-tab"),J=y("van-sticky"),k=y("van-skeleton"),N=y("van-list"),O=y("van-tabs"),K=y("van-popup");return i(),n("div",null,[e("div",Tt,[e("div",wt,[e("img",{src:ut,onClick:d[0]||(d[0]=s=>a(p).go(-1))})])]),e("video",{class:"vid","webkit-playsinline":"",playsinline:"","x5-playsinline":"",src:a(t).url,controls:""},null,8,xt),e("div",Dt,[c(O,{active:a(t).activeName,"onUpdate:active":d[6]||(d[6]=s=>a(t).activeName=s),sticky:""},{default:f(()=>[c(R,{title:"\u7B80\u4ECB",name:"1"},{default:f(()=>[e("div",Bt,[e("div",At,[c(m,{radius:"50%",class:"img",src:a(t).avatarUrl},null,8,["src"])]),e("div",Et,[e("span",Lt,r(a(t).nickname),1),a(t).type==5?(i(),n("span",Rt,r(a(C)(a(t).fans))+"\u7C89\u4E1D",1)):u("",!0)]),Nt]),e("div",Ut,[e("div",It,r(a(t).title),1),e("div",Vt,[e("span",$t,"\u64AD\u653E\u91CF\uFF1A"+r(a(C)(a(t).playTime))+"\xA0\xA0",1),a(t).type==5?(i(),n("span",jt,r(a(x)(a(t).publishTime)),1)):(i(),n("span",Pt,r(a(t).publishTime),1))]),e("div",qt,r(a(t).description),1),e("div",Gt,[a(t).praisedCount!=0?(i(),n("div",Mt,[St,e("span",null,r(a(t).praisedCount),1)])):u("",!0),e("div",zt,[Ht,e("span",null,r(a(t).subscribeCount),1)]),e("div",Jt,[Ot,e("span",null,r(a(t).shareCount),1)])]),e("div",Kt,[(i(!0),n(b,null,T(a(t).videoGroup,(s,F)=>(i(),n("div",{class:"item_tag",key:F},r(s.name),1))),128))]),e("div",Qt,[(i(!0),n(b,null,T(a(t).videoRelated,(s,F)=>(i(),n("div",{class:"item",key:F,onClick:ho=>h.value=s.vid},[e("div",Xt,[c(m,{class:"img",radius:"8",src:s.coverUrl},null,8,["src"]),Yt]),e("div",Zt,[e("div",te,r(s.title),1),e("span",null,r(a(ft)(s.durationms))+"\uFF0Cby\xA0"+r(s.creator[0].userName)+"\uFF0C"+r(a(C)(s.playTime))+"\u64AD\u653E",1)])],8,Wt))),128))])])]),_:1}),c(R,{title:"\u8BC4\u8BBA"+a(t).commentCount,name:"2"},{default:f(()=>[c(N,{loading:a(t).requestLoading,"onUpdate:loading":d[4]||(d[4]=s=>a(t).requestLoading=s),error:a(t).error,"onUpdate:error":d[5]||(d[5]=s=>a(t).error=s),finished:a(t).finish,"immediate-check":!1,"error-text":"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D","finished-text":"\u5DF2\u7ECF\u5230\u5E95\u5566",onLoad:L},{loading:f(()=>[ee]),default:f(()=>[c(J,{"offset-top":44},{default:f(()=>[e("div",oe,[se,it(e("div",ae,[e("span",{class:B({choosed:a(t).sortType==99}),onClick:d[1]||(d[1]=s=>D(99))},"\u63A8\u8350",2),e("span",{class:B({choosed:a(t).sortType==2}),onClick:d[2]||(d[2]=s=>D(2))},"\u6700\u70ED",2),e("span",{class:B({choosed:a(t).sortType==3}),onClick:d[3]||(d[3]=s=>D(3))},"\u6700\u65B0",2)],512),[[nt,!a(t).arrloading]])])]),_:1}),c(k,{title:"",avatar:"",row:3,loading:a(t).arrloading},{default:f(()=>[e("div",ie,[(i(!0),n(b,null,T(a(t).arr,s=>(i(),n("div",{class:"comment_item",key:s.commentId},[e("div",ne,[c(m,{round:"",width:"30",height:"30",src:s.user.avatarUrl},null,8,["src"])]),e("div",re,[e("div",le,[e("div",de,[e("div",ue,[j(r(s.user.nickname)+" \xA0 ",1),s.user.vipRights?(i(),n("span",ce,[_e,s.user.vipRights.redVipLevel==6?(i(),n("span",pe,"\xB7\u9646")):u("",!0),s.user.vipRights.redVipLevel==5?(i(),n("span",ve,"\xB7\u4F0D")):u("",!0),s.user.vipRights.redVipLevel==4?(i(),n("span",me,"\xB7\u8086")):u("",!0),s.user.vipRights.redVipLevel==3?(i(),n("span",fe,"\xB7\u4EE8")):u("",!0),s.user.vipRights.redVipLevel==2?(i(),n("span",he,"\xB7\u8D30")):u("",!0),s.user.vipRights.redVipLevel==1?(i(),n("span",ge,"\xB7\u4E00")):u("",!0)])):u("",!0)]),e("div",ye,[e("span",Ce,r(a(x)(s.time)),1),s.tag.datas?(i(),n("span",ke,"-")):u("",!0),s.tag.datas!=null&&s.tag.datas.length?(i(),n("span",Fe,r(s.tag.datas[0].text),1)):u("",!0)])]),e("div",be,[e("span",Te,r(a(C)(s.likedCount)),1),s.liked?(i(),n("img",we)):(i(),n("img",xe))])]),c(A,{content:s.content},null,8,["content"]),s.showFloorComment.showReplyCount?(i(),n("div",{key:0,class:"reply_count",onClick:F=>z(s,s.commentId)},r(s.showFloorComment.replyCount)+"\u6761\u56DE\u590D\xA0>",9,De)):u("",!0)])]))),128))])]),_:1},8,["loading"]),c(k,{title:"",avatar:"",row:3,loading:a(t).arrloading},null,8,["loading"]),c(k,{title:"",avatar:"",row:3,loading:a(t).arrloading},null,8,["loading"]),c(k,{title:"",avatar:"",row:3,loading:a(t).arrloading},null,8,["loading"])]),_:1},8,["loading","error","finished"])]),_:1},8,["title"])]),_:1},8,["active"])]),c(K,{show:a(_).showFloor,"onUpdate:show":d[9]||(d[9]=s=>a(_).showFloor=s),closeable:"",round:"",onClose:d[10]||(d[10]=s=>a(_).close()),"close-on-popstate":!0,"close-icon-position":"top-left",position:"bottom",style:{height:"80%"}},{default:f(()=>[c(N,{loading:a(t).floorLoading,"onUpdate:loading":d[7]||(d[7]=s=>a(t).floorLoading=s),error:a(t).floorError,"onUpdate:error":d[8]||(d[8]=s=>a(t).floorError=s),"immediate-check":!0,finished:a(t).floorFinish,"error-text":"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D","finished-text":"\u5DF2\u7ECF\u5230\u5E95\u5566",onLoad:H},{loading:f(()=>[Be]),default:f(()=>[e("div",Ae,[e("div",Ee,"\u56DE\u590D("+r(a(t).floorArr.length)+")",1),e("div",Le,[e("div",Re,[c(m,{round:"",width:"30",height:"30",src:a(t).floorTopComment.user.avatarUrl},null,8,["src"])]),e("div",Ne,[e("div",Ue,[e("div",Ie,[e("div",Ve,r(a(t).floorTopComment.user.nickname),1),e("div",$e,[e("span",je,r(a(x)(a(t).floorTopComment.time)),1)])]),e("div",Pe,[e("span",qe,r(a(C)(a(t).floorTopComment.likedCount)),1),a(t).floorTopComment.liked?(i(),n("img",Ge)):(i(),n("img",Me))])]),c(A,{content:a(t).floorTopComment.content},null,8,["content"])])]),Se,(i(!0),n(b,null,T(a(t).floorArr,s=>(i(),n("div",{class:"comment_item",key:s.commentId},[e("div",ze,[c(m,{round:"",width:"30",height:"30",src:s.user.avatarUrl},null,8,["src"])]),e("div",He,[e("div",Je,[e("div",Oe,[e("div",Ke,[j(r(s.user.nickname)+" \xA0 ",1),s.user.vipRights?(i(),n("span",Qe,[We,s.user.vipRights.redVipLevel==6?(i(),n("span",Xe,"\xB7\u9646")):u("",!0),s.user.vipRights.redVipLevel==5?(i(),n("span",Ye,"\xB7\u4F0D")):u("",!0),s.user.vipRights.redVipLevel==4?(i(),n("span",Ze,"\xB7\u8086")):u("",!0),s.user.vipRights.redVipLevel==3?(i(),n("span",to,"\xB7\u4EE8")):u("",!0),s.user.vipRights.redVipLevel==2?(i(),n("span",eo,"\xB7\u8D30")):u("",!0),s.user.vipRights.redVipLevel==1?(i(),n("span",oo,"\xB7\u58F9")):u("",!0)])):u("",!0)]),e("div",so,[e("span",ao,r(a(x)(s.time)),1)])]),e("div",io,[e("span",no,r(a(C)(s.likedCount)),1),s.liked?(i(),n("img",ro)):(i(),n("img",lo))])]),c(A,{content:s.content},null,8,["content"]),s.beReplied.length&&s.beReplied[0].beRepliedCommentId!=a(t).floorTopComment.commentId?(i(),n("div",uo,[e("span",co,"@"+r(s.beReplied[0].user.nickname)+"\uFF1A",1),s.beReplied[0].content?(i(),n("span",_o,r(s.beReplied[0].content),1)):(i(),n("span",po,"\u8BE5\u8BC4\u8BBA\u5DF2\u5220\u9664"))])):u("",!0)])]))),128))])]),_:1},8,["loading","error","finished"])]),_:1},8,["show"])])}}const fo=tt($(V({},vo),{setup:mo}));var Bo=vt(fo,[["__scopeId","data-v-26a0a908"]]);export{Bo as default};
