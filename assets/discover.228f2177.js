import"./index.3f139752.js";import{b as e}from"./vendor.1af84381.js";function c(t){return e.post("/homepage/block/page",{cursor:t})}function g(){return e.get("/homepage/dragon/ball")}function u(){return e.get("/search/default")}function i(){return e.get("/personalized")}function f(){return e.get("/banner?type=1")}function h(){return e.get("/search/hot/detail")}function $(t){return e.get(`/search/suggest?keywords=${t}&type=mobile`)}function p(t,n=1,s=0,r=20){return n==1?e.get(`/cloudsearch?keywords=${t}&type=${n}&offset=${s*r}&limit=${r}`):e.get(`/search?keywords=${t}&type=${n}&offset=${s*r}&limit=${r}`)}function d(t,n=1,s=0,r=20){return n==1?e.get(`https://music.qier222.com/api/cloudsearch?keywords=${t}&type=${n}&offset=${s*r}&limit=${r}`):e.get(`https://music.qier222.com/api/search?keywords=${t}&type=${n}&offset=${s*r}&limit=${r}`)}function l(){return e.get("/toplist/detail")}export{c as a,f as b,g as c,u as d,$ as e,p as f,i as g,d as h,h as i,l as j};
