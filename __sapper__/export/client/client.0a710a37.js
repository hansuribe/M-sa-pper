function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function u(t){return null==t?"":t}function f(e){return e&&s(e.destroy)?e.destroy:t}function p(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function $(){return g(" ")}function y(){return g("")}function b(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t){return Array.from(t.childNodes)}function S(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):m(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return g(e)}function w(t){return E(t," ")}function x(t,e){e=""+e,t.data!==e&&(t.data=e)}function P(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function A(t,e=document.body){return Array.from(e.querySelectorAll(t))}let R;function C(t){R=t}function L(){if(!R)throw new Error("Function called outside component initialization");return R}function j(){const t=L();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}const q=[],N=[],O=[],U=[],k=Promise.resolve();let D=!1;function H(t){O.push(t)}let I=!1;const B=new Set;function T(){if(!I){I=!0;do{for(let t=0;t<q.length;t+=1){const e=q[t];C(e),J(e.$$)}for(q.length=0;N.length;)N.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];B.has(e)||(B.add(e),e())}O.length=0}while(q.length);for(;U.length;)U.pop()();D=!1,I=!1,B.clear()}}function J(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const z=new Set;let K;function M(){K={r:0,c:[],p:K}}function V(){K.r||o(K.c),K=K.p}function F(t,e){t&&t.i&&(z.delete(t),t.i(e))}function G(t,e,n,r){if(t&&t.o){if(z.has(t))return;z.add(t),K.c.push(()=>{z.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function W(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function X(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function Q(t,e){t&&t.l(e)}function Z(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),H(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(H)}function tt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&(q.push(t),D||(D=!0,k.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,n,s,a,c,i,l=[-1]){const u=R;C(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(p.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&et(e,t)),n}):[],p.update(),d=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=_(n.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();n.intro&&F(e.$$.fragment),Z(e,n.target,n.anchor),T()}C(u)}class rt{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const ot=[];function st(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!ot.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ot.push(n,e)}if(t){for(let t=0;t<ot.length;t+=2)ot[t][0](ot[t+1]);ot.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const at={},ct=()=>({});function it(t){let e,n;const r=t[1].default,o=c(r,t,t[0],null);return{c(){e=m("main"),o&&o.c()},l(t){e=S(t,"MAIN",{});var n=_(e);o&&o.l(n),n.forEach(h)},m(t,r){d(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&o.p(i(r,t,t[0],null),l(r,t[0],e,null))},i(t){n||(F(o,t),n=!0)},o(t){G(o,t),n=!1},d(t){t&&h(e),o&&o.d(t)}}}function lt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class ut extends rt{constructor(t){super(),nt(this,t,lt,it,a,{})}}function ft(e){let n;return document.title=n=e[0],{c:t,l(t){A('[data-svelte="svelte-1moakz"]',document.head).forEach(h)},m:t,p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n)},i:t,o:t,d:t}}function pt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o]}class dt extends rt{constructor(t){super(),nt(this,t,pt,ft,a,{status:0,error:1})}}function ht(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&Y(c.$$.fragment),n=y()},l(t){c&&Q(c.$$.fragment,t),n=y()},m(t,e){c&&Z(c,t,e),d(t,n,e),r=!0},p(t,e){const r=16&e?W(o,[X(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){M();const t=c;G(t.$$.fragment,1,0,()=>{tt(t,1)}),V()}s?(Y((c=new s(a())).$$.fragment),F(c.$$.fragment,1),Z(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&F(c.$$.fragment,t),r=!0)},o(t){c&&G(c.$$.fragment,t),r=!1},d(t){t&&h(n),c&&tt(c,t)}}}function mt(t){let e;const n=new dt({props:{error:t[0],status:t[1]}});return{c(){Y(n.$$.fragment)},l(t){Q(n.$$.fragment,t)},m(t,r){Z(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(F(n.$$.fragment,t),e=!0)},o(t){G(n.$$.fragment,t),e=!1},d(t){tt(n,t)}}}function gt(t){let e,n,r,o;const s=[mt,ht],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=y()},l(t){n.l(t),r=y()},m(t,n){a[e].m(t,n),d(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(M(),G(a[i],1,1,()=>{a[i]=null}),V(),n=a[e],n||(n=a[e]=s[e](t),n.c()),F(n,1),n.m(r.parentNode,r))},i(t){o||(F(n),o=!0)},o(t){G(n),o=!1},d(t){a[e].d(t),t&&h(r)}}}function $t(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[gt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new ut({props:o});return{c(){Y(s.$$.fragment)},l(t){Q(s.$$.fragment,t)},m(t,e){Z(s,t,e),n=!0},p(t,[e]){const n=12&e?W(r,[4&e&&{segment:t[2][0]},8&e&&X(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(F(s.$$.fragment,t),n=!0)},o(t){G(s.$$.fragment,t),n=!1},d(t){tt(s,t)}}}function yt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;var l,u;return l=at,u=r,L().$$.context.set(l,u),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)},[o,s,a,c,i,r]}class bt extends rt{constructor(t){super(),nt(this,t,yt,$t,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const vt=[/^\/stores\/?$/],_t=[{js:()=>import("./index.b9a626a9.js"),css:[]},{js:()=>import("./profile.dbe1c7fd.js"),css:[]},{js:()=>import("./support.4588a169.js"),css:[]},{js:()=>import("./store.03335841.js"),css:[]},{js:()=>import("./chat.7b0d6e6d.js"),css:[]}],St=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/profile\/?$/,parts:[{i:1}]},{pattern:/^\/support\/?$/,parts:[{i:2}]},{pattern:/^\/store\/?$/,parts:[{i:3}]},{pattern:/^\/chat\/?$/,parts:[{i:4}]}];const Et="undefined"!=typeof __SAPPER__&&__SAPPER__;let wt,xt,Pt,At=!1,Rt=[],Ct="{}";const Lt={page:st({}),preloading:st(null),session:st(Et&&Et.session)};let jt,qt;Lt.session.subscribe(async t=>{if(jt=t,!At)return;qt=!0;const e=Bt(new URL(location.href)),n=xt={},{redirect:r,props:o,branch:s}=await Kt(e);n===xt&&await zt(r,s,o,e.page)});let Nt,Ot=null;let Ut,kt=1;const Dt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ht={};function It(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Bt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Et.baseUrl))return null;let e=t.pathname.slice(Et.baseUrl.length);if(""===e&&(e="/"),!vt.some(t=>t.test(e)))for(let n=0;n<St.length;n+=1){const r=St[n],o=r.pattern.exec(e);if(o){const n=It(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Tt(){return{x:pageXOffset,y:pageYOffset}}async function Jt(t,e,n,r){if(e)Ut=e;else{const t=Tt();Ht[Ut]=t,e=Ut=++kt,Ht[Ut]=n?t:{x:0,y:0}}Ut=e,wt&&Lt.preloading.set(!0);const o=Ot&&Ot.href===t.href?Ot.promise:Kt(t);Ot=null;const s=xt={},{redirect:a,props:c,branch:i}=await o;if(s===xt&&(await zt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Ht[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Ht[Ut]=t,t&&scrollTo(t.x,t.y)}}async function zt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Bt(new URL(t,document.baseURI));return n?(Dt[e.replaceState?"replaceState":"pushState"]({id:Ut},"",t),Jt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Lt.page.set(r),Lt.preloading.set(!1),wt)wt.$set(n);else{n.stores={page:{subscribe:Lt.page.subscribe},preloading:{subscribe:Lt.preloading.subscribe},session:Lt.session},n.level0={props:await Pt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Vt(t.nextSibling);Vt(t),Vt(e)}wt=new bt({target:Nt,props:n,hydrate:!0})}Rt=e,Ct=JSON.stringify(r.query),At=!0,qt=!1}async function Kt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Pt||(Pt=Et.preloaded[0]||ct.call(a,{host:n.host,path:n.path,query:n.query,params:{}},jt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ct)return!0;const o=Rt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!qt&&!u&&Rt[c]&&Rt[c].part===e.i)return Rt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Mt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(_t[e.i]);let m;return m=At||!Et.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},jt):{}:Et.preloaded[c+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Mt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Vt(t){t.parentNode.removeChild(t)}function Ft(t){const e=Bt(new URL(t,document.baseURI));if(e)return Ot&&t===Ot.href||function(t,e){Ot={href:t,promise:e}}(t,Kt(e)),Ot.promise}let Gt;function Wt(t){clearTimeout(Gt),Gt=setTimeout(()=>{Xt(t)},20)}function Xt(t){const e=Qt(t.target);e&&"prefetch"===e.rel&&Ft(e.href)}function Yt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Qt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Bt(o);if(s){Jt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Dt.pushState({id:Ut},"",o.href)}}function Qt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Zt(t){if(Ht[Ut]=Tt(),t.state){const e=Bt(new URL(location.href));e?Jt(e,t.state.id):location.href=location.href}else kt=kt+1,function(t){Ut=t}(kt),Dt.replaceState({id:Ut},"",location.href)}var te;te={target:document.querySelector("#sapper")},"scrollRestoration"in Dt&&(Dt.scrollRestoration="manual"),function(t){Nt=t}(te.target),addEventListener("click",Yt),addEventListener("popstate",Zt),addEventListener("touchstart",Xt),addEventListener("mousemove",Wt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Dt.replaceState({id:kt},"",e);const n=new URL(location.href);if(Et.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=Et;Pt||(Pt=s&&s[0]),zt(null,[],{error:c,status:a,session:o,level0:{props:Pt},level1:{props:{status:a,error:c},component:dt},segments:s},{host:e,path:n,query:It(r),params:{}})}();const r=Bt(n);return r?Jt(r,kt,!0,t):void 0});export{o as A,b as B,f as C,i as D,l as E,j as F,st as G,M as H,V as I,rt as S,$ as a,_ as b,S as c,h as d,m as e,w as f,E as g,v as h,nt as i,P as j,d as k,p as l,x as m,t as n,Y as o,Q as p,A as q,Z as r,a as s,g as t,F as u,G as v,tt as w,H as x,c as y,u as z};
