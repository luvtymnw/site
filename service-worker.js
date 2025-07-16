const CACHE_NAME = 'site-v1';
const urlsToCache = [
  '/site',
  '/site/index.html',
  '/site/genres.html',
  '/site/favorites.html',
  '/site/contact.html',
  '/site/css/style.css',
  '/site/img/favicon.ico',
  '/site/img/harrypotter.jpg',
  '/site/img/1984.jpg',
  '/site/img/sherlock.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
