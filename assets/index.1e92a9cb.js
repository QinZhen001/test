import{j as E,r as a,v as A,P as k,H as C,S as I,R as M,a as Y,b as B}from"./vendor.0bc179f5.js";const T=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function f(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(t){if(t.ep)return;t.ep=!0;const n=f(t);fetch(t.href,n)}};T();const l=E.exports.jsx,S=E.exports.jsxs;let g=0,m=1,x=!1,R=!1;const b={controls:!0,controlBar:{pictureInPictureToggle:!1}};let s=null,c=null;const U=({sid:u=""})=>{const i=`https://test-1302380933.cos.ap-shanghai.myqcloud.com/${u}_xxx.m3u8`,f=a.exports.useRef(null),d=a.exports.useRef(null),t=a.exports.useRef(),n=a.exports.useRef(),p=a.exports.useRef(i),[w,h]=a.exports.useState(!0);a.exports.useEffect(()=>{if(!t.current){const e=f.current;if(!e)return;s=t.current=A(e,b,V)}},[f]),a.exports.useEffect(()=>{if(!n.current){const e=d.current;if(!e)return;c=n.current=A(e,b,P)}},[d]),a.exports.useEffect(()=>{p.current=i,console.log("cur src ",i),t.current&&t.current.src({type:"application/x-mpegURL",src:i}),n.current&&n.current.src({type:"application/x-mpegURL",src:i})},[i]),a.exports.useEffect(()=>()=>{s&&(s.dispose(),s=null,t.current=void 0),c&&(c.dispose(),c=null,n.current=void 0),p.current=""},[]);const v=async e=>{console.log("m3u8Analysis ",e);var o=new k;return fetch(e).then(r=>r.text()).then(r=>{o.push(r),o.end();const y=o.manifest;return console.log("parsedManifest",y),y})},j=(e,o)=>{console.log("prePlay \u9884\u64AD\u653E",o,e);const r=p.current||"";e.muted(!0),e.src({type:"application/x-mpegURL",src:r}),e.currentTime(o),e.volume(m),e.play()},O=(e,o)=>{console.log("play play play ",o,e),e.currentTime(o),e.muted(!1),e.volume(m),e.play()},N=async()=>{console.log("ended1 -------- "),x=!1;const e=s.currentTime(),o=s.duration();console.log("whereYouAt1",e),console.log("lengthOfVideo1",o);const r=await v(s.src());r.segments.length!==g?(console.log("m3u8 shoule update"),g=r.segments.length,O(c,e),h(!1)):console.log("m3u8 already complete")},L=async()=>{console.log("ended2 ------ "),R=!1;const e=c.currentTime(),o=c.duration();console.log("whereYouAt2",e),console.log("lengthOfVideo2",o);const r=await v(c.src());r.segments.length!==g?(console.log("m3u8 shoule update"),g=r.segments.length,O(s,e),h(!0)):console.log("m3u8 already complete")},V=async()=>{console.log("player1 is ready"),s.on("ended",N),g=(await v(s.src())).segments.length,s.on("timeupdate",o=>{const r=s.currentTime();s.duration()-r<10&&(x||(x=!0,j(c,r)))}),s.on("volumechange",o=>{m=s.volume(),console.log("player1 volumechange ",m)})},P=()=>{console.log("player2 ready"),c.on("ended",L),c.on("timeupdate",e=>{const o=c.currentTime();c.duration()-o<10&&(R||(R=!0,j(s,o)))}),c.on("volumechange",e=>{m=c.volume(),console.log("player2 volumechange ",m)})};return S("div",{children:[l("button",{className:"exchange",onClick:()=>{h(e=>!e)},children:"exchange"}),l("div",{className:"wrapper wrapper1",style:{zIndex:w?1:-1},children:l("video",{ref:f,className:"video-js vjs-big-play-centered vjs-fluid"})}),l("div",{className:"wrapper wrapper2",style:{zIndex:w?-1:1},children:l("video",{ref:d,className:"video-js vjs-big-play-centered vjs-fluid"})})]})};const D="",$=()=>{const[u,i]=a.exports.useState(D);return S("div",{children:[l("input",{id:"input-sid",className:"input-sid",type:"text"}),l("button",{className:"btn-sid",onClick:()=>{const d=document.getElementById("input-sid");i(d.value)},children:"\u8BBE\u7F6Esid"}),u?l(U,{sid:u}):null]})},q=[{path:"/",component:$,title:"default"}],z=()=>l(C,{children:l(I,{children:q.map(u=>l(M,{exact:!0,path:u.path,component:u.component},u.path))})});function F(){return l(z,{})}Y.render(l(B.StrictMode,{children:l(F,{})}),document.getElementById("root"));
