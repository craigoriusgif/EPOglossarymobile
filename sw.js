const CACHE_NAME = 'offline-v1';
const ASSETS_TO_CACHE = [
  './',              // The main page
  './index.html',
  './style.css',     // Change these to your actual filenames
  './script.js',
  './icon.png'
];

// Install: Save files to cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

// Fetch: Serve from cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});