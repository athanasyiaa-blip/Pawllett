var V="pawllet-v1";
self.addEventListener("install",function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(["./","./index.html","./icon-192.png","./icon-512.png"]);}).then(function(){return self.skipWaiting();}));});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim());});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(V).then(function(k){k.put(e.request,c);});return r;}).catch(function(){return caches.match(e.request).then(function(h){return h||caches.match("./index.html");});}));});
