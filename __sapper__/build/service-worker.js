!function(){"use strict";const e=["client/index.f92d8cc8.js","client/client.22c30164.js","client/profile.bbf2d1db.js","client/Tabbar.bb05f444.js","client/chat.b05487c8.js","client/support.dfcf42ea.js","client/client.6483d945.js","client/store.d6a05b34.js"].concat(["service-worker-index.html",".DS_Store","apple-brands.svg","chat.svg","chatwhite.svg","community.svg","configure.svg","dota2.svg","favicon.png","filter.svg","friendfour.png","friendone.png","friendthree.png","friendtwo.png","games.svg","global.css","gta.jpg","guard.svg","guardwhite.svg","halflifealyx.svg","logo-192.png","logo-512.png","mac.svg","manifest.json","myaccount.svg","profile.svg","profilepicture.jpg","profilewhite.svg","purchases.svg","search.svg","stardewvalley.svg","steamlogo.svg","steamlogofull.svg","store.svg","storewhite.svg","support.svg","supportwhite.svg","trading.svg","user.svg","windows.svg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1588928558690").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1588928558690"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1588928558690").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
