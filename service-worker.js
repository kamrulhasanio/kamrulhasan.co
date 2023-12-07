const cacheName = 'my-site-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/kh.jpg',
  // Add other resources you want to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});