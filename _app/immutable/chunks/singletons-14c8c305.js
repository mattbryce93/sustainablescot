import{B as d,s as x}from"./index-7847b002.js";const u=[];function b(t,s=d){let e;const i=new Set;function o(n){if(x(t,n)&&(t=n,e)){const c=!u.length;for(const r of i)r[1](),u.push(r,t);if(c){for(let r=0;r<u.length;r+=2)u[r][0](u[r+1]);u.length=0}}}function l(n){o(n(t))}function a(n,c=d){const r=[n,c];return i.add(r),i.size===1&&(e=s(o)||d),n(t),()=>{i.delete(r),i.size===0&&(e(),e=null)}}return{set:o,update:l,subscribe:a}}let h="",E="";function S(t){h=t.base,E=t.assets||h}let v="";function T(t){v=t}const U="sveltekit:scroll",L="sveltekit:index",g={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(t){let s=t.baseURI;if(!s){const e=t.getElementsByTagName("base");s=e.length?e[0].href:t.URL}return s}function V(){return{x:pageXOffset,y:pageYOffset}}function f(t,s){return t.getAttribute(`data-sveltekit-${s}`)}const _={...g,"":g.hover};function m(t,s){var p;let e,i=null,o=null,l=null,a=null;for(;t!==document.documentElement;)!e&&t.nodeName.toUpperCase()==="A"&&(e=t),e&&(o===null&&(o=f(t,"preload-code")),l===null&&(l=f(t,"preload-data")),i===null&&(i=f(t,"noscroll")),a===null&&(a=f(t,"reload"))),t=(p=t.assignedSlot)!=null?p:t.parentNode,t.nodeType===11&&(t=t.host);let n;try{n=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const c={preload_code:_[o!=null?o:"off"],preload_data:_[l!=null?l:"off"],noscroll:i==="off"?!1:i===""?!0:null,reload:a==="off"?!1:a===""?!0:null},r=e?{rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)}:{},R=!n||k(n,s)||c.reload||r.rel_external||r.target||r.download;return{a:e,url:n,options:c,external:R,has:r}}function w(t){const s=b(t);let e=!0;function i(){e=!0,s.update(a=>a)}function o(a){e=!1,s.set(a)}function l(a){let n;return s.subscribe(c=>{(n===void 0||e&&c!==n)&&a(n=c)})}return{notify:i,set:o,subscribe:l}}function I(){const{set:t,subscribe:s}=b(!1);let e;async function i(){clearTimeout(e);const o=await fetch(`${E}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const a=(await o.json()).version!==v;return a&&(t(!0),clearTimeout(e)),a}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:s,check:i}}function k(t,s){return t.origin!==location.origin||!t.pathname.startsWith(s)}let y;function N(t){y=t.client}const $={url:w({}),page:w({}),navigating:b(null),updated:I()};export{L as I,g as P,U as S,V as a,S as b,N as c,T as d,y as e,m as f,O as g,k as i,$ as s,b as w};