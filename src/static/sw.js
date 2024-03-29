/*
 * Embedded constants 
 */

self.importScripts('/cache.js');

const URLS = [
  './',
  './index.html',
  './favicon.ico',
  './manifest.json',
  './assets/styles.css',
  './assets/add-service-worker.js',
  './assets/remove-service-worker.js',
];

/*
 * Helper functions
 */

const precache = () => caches
  .open(build_id)
  .then((cache) => cache.addAll(URLS));

const fromCache = (request) => caches
  .open(build_id)
  .then((cache) => cache
    .match(request)
    .then((matching) => matching || fetch(request))
  );

/*
 * Register service worker
 */

self.addEventListener('install', (evt) => evt.waitUntil(precache()));
self.addEventListener('fetch', (evt) => evt.respondWith(fromCache(evt.request)));
