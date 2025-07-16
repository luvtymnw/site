const CACHE_NAME = 'book-shelf-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/genres.html',
  '/favorites.html',
  '/contact.html',
  '/css/style.css',
  '/img/favicon.ico',
  '/img/harrypotter.jpg',
  '/img/1984.jpg',
  '/img/sherlock.jpg'
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