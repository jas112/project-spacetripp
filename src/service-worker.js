import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

// Custom caching rules
self.addEventListener('fetch', (event) => {
  if (event.request.url.endsWith('.wav') || event.request.url.endsWith('.mp3') || event.request.url.endsWith('.png') || event.request.url.endsWith('.pdf')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});