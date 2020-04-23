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
  './assets/service-worker-init.js',
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
    .then((matching) => matching || Promise.reject('no-match'))
  );

/*
 * Register service worker
 */

self.addEventListener('install', (evt) => evt.waitUntil(precache()));
self.addEventListener('fetch', (evt) => evt.respondWith(fromCache(evt.request)));
