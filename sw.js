const CACHE_NAME = '𝔸𝕟𝕟𝕦𝕒𝕝 ℙ𝕝𝕒𝕟𝕟𝕖𝕣';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Install Event: Cache files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch Event: Serve from cache if offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});