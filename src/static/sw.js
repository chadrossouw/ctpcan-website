/*
 * Embedded constants 
 */

const VERSION = '0.0.2';

const URLS = [
  './',
  './index.html',
  './favicon.ico',
  './manifest.json',
  './assets/styles.css',
];

/*
 * Helper functions
 */

const precache = () => caches
  .open(VERSION)
  .then((cache) => cache.addAll(URLS));

const fromCache = (request) => caches
  .open(VERSION)
  .then((cache) => cache
    .match(request)
    .then((matching) => matching || Promise.reject('no-match'))
  );

/*
 * Register service worker
 */

self.addEventListener('install', (evt) => evt.waitUntil(precache()));
self.addEventListener('fetch', (evt) => evt.respondWith(fromCache(evt.request)));
