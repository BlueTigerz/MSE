/* MSE service worker: lets the app install and run offline.
   Bump VERSION whenever you upload a new index.html so visitors get the update. */
const VERSION='mse-v1';
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
/* show what is saved right away, refresh it in the background (fonts get saved too after the first visit) */
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(
    caches.open(VERSION).then(cache=>cache.match(e.request,{ignoreSearch:true}).then(hit=>{
      const net=fetch(e.request).then(res=>{if(res&&(res.ok||res.type==='opaque'))cache.put(e.request,res.clone());return res;}).catch(()=>hit);
      return hit||net;
    }))
  );
});
