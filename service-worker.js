const CACHE_NAME = 'todaytab-v2';
const urlsToCache = [
  '/','/index.html','/todo.html','/diary.html','/money.html','/lang.js',
  '/icon-192.png','/icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Sunflower:wght@300;500;700&display=swap',
  'https://unpkg.com/dexie@3.2.3/dist/dexie.js'
];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache)).catch(err => console.log('Cache failed:', err))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(names => Promise.all(names.map(n => n !== CACHE_NAME && caches.delete(n))))); self.clients.claim(); });
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request).then(r => { if(r&&r.status===200){const rc=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,rc));} return r; }).catch(() => caches.match(e.request))); });
